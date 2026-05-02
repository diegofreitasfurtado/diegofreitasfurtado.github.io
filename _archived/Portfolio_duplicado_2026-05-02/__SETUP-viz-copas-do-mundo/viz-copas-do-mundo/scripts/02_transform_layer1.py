"""
02_transform_layer1.py
======================
Transforma os CSVs brutos da Camada 1 (martj42) em star schema pronto pro Tableau.

Filtro: tournament == 'FIFA World Cup' (somente edições finais, não inclui qualifiers).

Saídas em data/processed/:
  - dim_world_cup.csv        (1 linha por edição: 1930, 1934, ..., 2022)
  - dim_team.csv             (1 linha por seleção, com nomes PT/EN)
  - dim_match.csv            (1 linha por partida)
  - fact_match_team.csv      (2 linhas por partida — long format ideal para slicer de time)
  - fact_goal.csv            (1 linha por gol)
  - fact_shootout.csv        (1 linha por disputa de pênaltis)
  - dim_translations.csv     (rótulos bilíngues PT/EN para campos categóricos)

Uso:
    python 02_transform_layer1.py
"""

from __future__ import annotations

import sys
from pathlib import Path

import pandas as pd

# Importa metadata canônica das seleções
sys.path.insert(0, str(Path(__file__).parent))
from team_metadata import TEAMS, get_team_record  # noqa: E402

ROOT: Path = Path(__file__).resolve().parent.parent
RAW_DIR: Path = ROOT / "data" / "raw" / "martj42"
OUT_DIR: Path = ROOT / "data" / "processed"


# ============================================================
# Helpers
# ============================================================

def make_match_id(date: str, home: str, away: str) -> str:
    """ID determinístico de partida."""
    return f"{date}_{home.replace(' ', '')[:6]}_{away.replace(' ', '')[:6]}"


def detect_unknown_teams(team_names: set[str]) -> list[str]:
    """Retorna times que apareceram nos dados mas não estão no team_metadata."""
    return sorted([n for n in team_names if n not in TEAMS])


# ============================================================
# Pipeline
# ============================================================

def load_raw() -> tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]:
    print("[load] lendo CSVs brutos...")
    results = pd.read_csv(RAW_DIR / "results.csv", parse_dates=["date"])
    goalscorers = pd.read_csv(RAW_DIR / "goalscorers.csv", parse_dates=["date"])
    shootouts = pd.read_csv(RAW_DIR / "shootouts.csv", parse_dates=["date"])
    print(f"  results.csv:     {len(results):>6,} linhas")
    print(f"  goalscorers.csv: {len(goalscorers):>6,} linhas")
    print(f"  shootouts.csv:   {len(shootouts):>6,} linhas")
    return results, goalscorers, shootouts


def filter_world_cup(df: pd.DataFrame) -> pd.DataFrame:
    """Filtra results.csv pelo tournament. Para outras tabelas use filter_by_match_keys."""
    return df[df["tournament"] == "FIFA World Cup"].copy().reset_index(drop=True)


def filter_by_match_keys(df: pd.DataFrame, wc_results: pd.DataFrame) -> pd.DataFrame:
    """
    Filtra DataFrame (goalscorers ou shootouts, que NÃO têm coluna tournament)
    para incluir apenas linhas cujo (date, home_team, away_team) corresponda a
    uma partida em wc_results. Usado porque o martj42 dataset não carrega
    tournament em goalscorers/shootouts — precisamos cruzar pelas chaves.
    """
    keys = set(zip(
        wc_results["date"].dt.strftime("%Y-%m-%d"),
        wc_results["home_team"],
        wc_results["away_team"],
    ))
    df_keys = list(zip(
        df["date"].dt.strftime("%Y-%m-%d"),
        df["home_team"],
        df["away_team"],
    ))
    mask = [k in keys for k in df_keys]
    return df[mask].copy().reset_index(drop=True)


def build_dim_team(team_names: set[str]) -> pd.DataFrame:
    """Constrói dim_team a partir dos times que aparecem no dataset."""
    rows = [get_team_record(n) for n in sorted(team_names)]
    df = pd.DataFrame(rows)
    df = df.rename(columns={"id": "team_id", "confed": "confederation", "successor": "successor_team_id"})
    # Reordena colunas
    df = df[["team_id", "name_en", "name_pt", "confederation", "successor_team_id"]]
    # Remove duplicatas: alguns nomes alternativos compartilham team_id (ex: "Republic of Ireland" e "Ireland")
    df = df.drop_duplicates(subset=["team_id"]).sort_values("team_id").reset_index(drop=True)
    return df


def build_dim_match(wc_results: pd.DataFrame, shootouts_wc: pd.DataFrame) -> pd.DataFrame:
    df = wc_results.copy()
    df["match_id"] = df.apply(
        lambda r: make_match_id(r["date"].strftime("%Y-%m-%d"), r["home_team"], r["away_team"]),
        axis=1,
    )
    df["year"] = df["date"].dt.year
    df["world_cup_id"] = "WC" + df["year"].astype(str)
    df["home_team_id"] = df["home_team"].map(lambda n: get_team_record(n)["id"])
    df["away_team_id"] = df["away_team"].map(lambda n: get_team_record(n)["id"])

    # Join com shootouts
    so = shootouts_wc.copy()
    so["match_id"] = so.apply(
        lambda r: make_match_id(r["date"].strftime("%Y-%m-%d"), r["home_team"], r["away_team"]),
        axis=1,
    )
    so_lookup = so.set_index("match_id")["winner"].to_dict()
    df["shootout_winner"] = df["match_id"].map(so_lookup)
    df["has_shootout"] = df["shootout_winner"].notna()
    df["shootout_winner_id"] = df["shootout_winner"].map(
        lambda n: get_team_record(n)["id"] if pd.notna(n) else None
    )

    # Marca a final de cada Copa (último jogo por data dentro de cada world_cup_id)
    df["is_final"] = False
    last_match_per_wc = df.groupby("world_cup_id")["date"].idxmax()
    df.loc[last_match_per_wc, "is_final"] = True

    # Reordena
    cols = [
        "match_id", "world_cup_id", "year", "date",
        "home_team", "home_team_id", "away_team", "away_team_id",
        "home_score", "away_score", "neutral", "city", "country",
        "has_shootout", "shootout_winner", "shootout_winner_id", "is_final",
    ]
    return df[cols].sort_values("date").reset_index(drop=True)


def build_fact_match_team(dim_match: pd.DataFrame) -> pd.DataFrame:
    """Long format: 2 linhas por partida (uma para cada time). Ideal para slicer."""
    rows = []
    for _, m in dim_match.iterrows():
        # Resultado em tempo regulamentar
        if m["home_score"] > m["away_score"]:
            home_result, away_result = "W", "L"
        elif m["home_score"] < m["away_score"]:
            home_result, away_result = "L", "W"
        else:
            home_result, away_result = "D", "D"

        # Resultado considerando shootout (mata-mata)
        if m["has_shootout"] and pd.notna(m["shootout_winner_id"]):
            home_result_so = "W" if m["shootout_winner_id"] == m["home_team_id"] else "L"
            away_result_so = "W" if m["shootout_winner_id"] == m["away_team_id"] else "L"
        else:
            home_result_so, away_result_so = home_result, away_result

        # Linha do time da casa
        rows.append({
            "match_id": m["match_id"], "world_cup_id": m["world_cup_id"], "year": m["year"], "date": m["date"],
            "team_id": m["home_team_id"], "team_name_en": m["home_team"],
            "opponent_id": m["away_team_id"], "opponent_name_en": m["away_team"],
            "is_home": True, "venue_neutral": m["neutral"],
            "goals_for": m["home_score"], "goals_against": m["away_score"],
            "result": home_result, "result_after_shootout": home_result_so,
            "is_final": m["is_final"],
        })
        # Linha do time visitante
        rows.append({
            "match_id": m["match_id"], "world_cup_id": m["world_cup_id"], "year": m["year"], "date": m["date"],
            "team_id": m["away_team_id"], "team_name_en": m["away_team"],
            "opponent_id": m["home_team_id"], "opponent_name_en": m["home_team"],
            "is_home": False, "venue_neutral": m["neutral"],
            "goals_for": m["away_score"], "goals_against": m["home_score"],
            "result": away_result, "result_after_shootout": away_result_so,
            "is_final": m["is_final"],
        })
    return pd.DataFrame(rows).sort_values(["date", "match_id", "is_home"]).reset_index(drop=True)


def build_dim_world_cup(dim_match: pd.DataFrame, fact_mt: pd.DataFrame) -> pd.DataFrame:
    """Roll-up por edição. Campeão e vice derivados da partida final."""
    rows = []
    for wc_id, group in dim_match.groupby("world_cup_id"):
        year = int(group["year"].iloc[0])
        final = group[group["is_final"]].iloc[0]
        # País-sede: se a maioria dos jogos não-neutros aconteceu num país, esse é o sede
        non_neutral = group[~group["neutral"]]
        host = non_neutral["country"].mode().iloc[0] if len(non_neutral) > 0 else group["country"].mode().iloc[0]

        # Campeão e vice
        if final["has_shootout"] and pd.notna(final["shootout_winner_id"]):
            champion_id = final["shootout_winner_id"]
            runner_up_id = final["away_team_id"] if champion_id == final["home_team_id"] else final["home_team_id"]
        elif final["home_score"] > final["away_score"]:
            champion_id, runner_up_id = final["home_team_id"], final["away_team_id"]
        elif final["away_score"] > final["home_score"]:
            champion_id, runner_up_id = final["away_team_id"], final["home_team_id"]
        else:
            champion_id, runner_up_id = None, None  # final empatada sem shootout (improvável)

        rows.append({
            "world_cup_id": wc_id,
            "year": year,
            "host_country": host,
            "num_matches": len(group),
            "num_goals": int(group["home_score"].sum() + group["away_score"].sum()),
            "num_teams": fact_mt[fact_mt["world_cup_id"] == wc_id]["team_id"].nunique(),
            "goals_per_match": round(
                (group["home_score"].sum() + group["away_score"].sum()) / len(group), 2
            ),
            "champion_id": champion_id,
            "runner_up_id": runner_up_id,
            "final_date": final["date"],
        })
    return pd.DataFrame(rows).sort_values("year").reset_index(drop=True)


def build_fact_goal(goalscorers_wc: pd.DataFrame, dim_match: pd.DataFrame) -> pd.DataFrame:
    df = goalscorers_wc.copy()
    df["match_id"] = df.apply(
        lambda r: make_match_id(r["date"].strftime("%Y-%m-%d"), r["home_team"], r["away_team"]),
        axis=1,
    )
    # Filtra gols cuja partida exista no dim_match (defesa contra inconsistências do source)
    valid_match_ids = set(dim_match["match_id"])
    df = df[df["match_id"].isin(valid_match_ids)].copy()

    # Junta info de world_cup
    match_lookup = dim_match.set_index("match_id")[["world_cup_id", "year"]].to_dict("index")
    df["world_cup_id"] = df["match_id"].map(lambda m: match_lookup[m]["world_cup_id"])
    df["year"] = df["match_id"].map(lambda m: match_lookup[m]["year"])

    df["team_id"] = df["team"].map(lambda n: get_team_record(n)["id"])
    # Adversário = o outro time da partida
    home_lookup = dim_match.set_index("match_id")[["home_team", "away_team"]].to_dict("index")
    df["opponent"] = df.apply(
        lambda r: home_lookup[r["match_id"]]["away_team"]
        if r["team"] == home_lookup[r["match_id"]]["home_team"]
        else home_lookup[r["match_id"]]["home_team"],
        axis=1,
    )
    df["opponent_id"] = df["opponent"].map(lambda n: get_team_record(n)["id"])

    df = df.reset_index(drop=True)
    df["goal_id"] = df.index.map(lambda i: f"G{i:06d}")

    cols = [
        "goal_id", "match_id", "world_cup_id", "year", "date",
        "team_id", "team", "opponent_id", "opponent",
        "scorer", "minute", "own_goal", "penalty",
    ]
    return df[cols]


def build_fact_shootout(shootouts_wc: pd.DataFrame, dim_match: pd.DataFrame) -> pd.DataFrame:
    df = shootouts_wc.copy()
    df["match_id"] = df.apply(
        lambda r: make_match_id(r["date"].strftime("%Y-%m-%d"), r["home_team"], r["away_team"]),
        axis=1,
    )
    valid_match_ids = set(dim_match["match_id"])
    df = df[df["match_id"].isin(valid_match_ids)].copy()

    match_lookup = dim_match.set_index("match_id")[["world_cup_id", "year"]].to_dict("index")
    df["world_cup_id"] = df["match_id"].map(lambda m: match_lookup[m]["world_cup_id"])
    df["year"] = df["match_id"].map(lambda m: match_lookup[m]["year"])

    df["winning_team_id"] = df["winner"].map(lambda n: get_team_record(n)["id"])
    df["losing_team"] = df.apply(
        lambda r: r["away_team"] if r["winner"] == r["home_team"] else r["home_team"], axis=1
    )
    df["losing_team_id"] = df["losing_team"].map(lambda n: get_team_record(n)["id"])

    cols = [
        "match_id", "world_cup_id", "year", "date",
        "winning_team_id", "winner", "losing_team_id", "losing_team",
    ]
    if "first_shooter" in df.columns:
        cols.append("first_shooter")
    return df[cols].reset_index(drop=True)


def build_dim_translations() -> pd.DataFrame:
    """Rótulos bilíngues para campos categóricos do dashboard."""
    rows = [
        # Resultado
        ("result",        "W",         "Win",                   "Vitória"),
        ("result",        "D",         "Draw",                  "Empate"),
        ("result",        "L",         "Loss",                  "Derrota"),
        # Booleanos
        ("boolean",       "True",      "Yes",                   "Sim"),
        ("boolean",       "False",     "No",                    "Não"),
        # Confederações
        ("confederation", "AFC",       "Asia (AFC)",            "Ásia (AFC)"),
        ("confederation", "CAF",       "Africa (CAF)",          "África (CAF)"),
        ("confederation", "CONCACAF",  "North/Central America", "América do Norte/Central"),
        ("confederation", "CONMEBOL",  "South America",         "América do Sul"),
        ("confederation", "OFC",       "Oceania (OFC)",         "Oceania (OFC)"),
        ("confederation", "UEFA",      "Europe (UEFA)",         "Europa (UEFA)"),
        # Posição na partida
        ("venue",         "home",      "Home",                  "Casa"),
        ("venue",         "away",      "Away",                  "Fora"),
        ("venue",         "neutral",   "Neutral",               "Neutro"),
        # Tournament-level
        ("trophy",        "champion",  "Champion",              "Campeão"),
        ("trophy",        "runner_up", "Runner-up",             "Vice-campeão"),
    ]
    return pd.DataFrame(rows, columns=["entity_type", "code", "label_en", "label_pt"])


# ============================================================
# Main
# ============================================================

def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    results, goalscorers, shootouts = load_raw()

    print("\n[filter] aplicando filtro 'FIFA World Cup'...")
    wc_results = filter_world_cup(results)
    # goalscorers e shootouts não têm coluna 'tournament' — filtramos pela
    # intersecção das chaves de partida (date, home_team, away_team).
    wc_goals = filter_by_match_keys(goalscorers, wc_results)
    wc_shootouts = filter_by_match_keys(shootouts, wc_results)
    print(f"  partidas WC:  {len(wc_results)}")
    print(f"  gols WC:      {len(wc_goals)}")
    print(f"  shootouts WC: {len(wc_shootouts)}")

    # Detecta times desconhecidos
    all_teams = set(wc_results["home_team"]).union(set(wc_results["away_team"]))
    unknown = detect_unknown_teams(all_teams)
    if unknown:
        print(f"\n[warn] {len(unknown)} time(s) sem metadata em team_metadata.py:")
        for t in unknown:
            print(f"  - {t}")
        print("  -> Eles entram com fallback (id derivado do nome, name_pt = name_en, confed = UNKNOWN)")
        print("  -> Adicione manualmente em team_metadata.py para próxima rodada.")

    print("\n[build] gerando tabelas do star schema...")
    dim_team = build_dim_team(all_teams)
    dim_match = build_dim_match(wc_results, wc_shootouts)
    fact_match_team = build_fact_match_team(dim_match)
    dim_world_cup = build_dim_world_cup(dim_match, fact_match_team)
    fact_goal = build_fact_goal(wc_goals, dim_match)
    fact_shootout = build_fact_shootout(wc_shootouts, dim_match)
    dim_translations = build_dim_translations()

    tables = {
        "dim_world_cup":     dim_world_cup,
        "dim_team":          dim_team,
        "dim_match":         dim_match,
        "fact_match_team":   fact_match_team,
        "fact_goal":         fact_goal,
        "fact_shootout":     fact_shootout,
        "dim_translations":  dim_translations,
    }

    print("\n[write] salvando CSVs em data/processed/...")
    for name, df in tables.items():
        path = OUT_DIR / f"{name}.csv"
        df.to_csv(path, index=False, encoding="utf-8")
        size_kb = path.stat().st_size / 1024
        print(f"  {name+'.csv':<25} {len(df):>6,} linhas  ({size_kb:.1f} KB)")

    print("\n[validate] sanity checks...")
    print(f"  Copas distintas:           {dim_world_cup['year'].nunique()}")
    print(f"  Periodo coberto:           {dim_world_cup['year'].min()} - {dim_world_cup['year'].max()}")
    print(f"  Total de partidas:         {len(dim_match):,}")
    print(f"  Total de gols (results):   {int(dim_match['home_score'].sum() + dim_match['away_score'].sum()):,}")
    print(f"  Total de gols (goalsc.):   {len(fact_goal):,}")
    print(f"  Times unicos:              {len(dim_team)}")
    if "BRA" in dim_team["team_id"].values:
        bra = fact_match_team[fact_match_team["team_id"] == "BRA"]
        wins = int((bra['result'] == 'W').sum())
        draws = int((bra['result'] == 'D').sum())
        losses = int((bra['result'] == 'L').sum())
        print(f"  Brasil - partidas em WC:   {len(bra)}")
        print(f"  Brasil - V/E/D:            {wins}/{draws}/{losses}")

    print("\nOK. Star schema gerado.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
