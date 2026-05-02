# Scripts

Pipeline de extração e transformação. Rodar em ordem.

## Ordem de execução

```bash
python 01_download_layer1.py     # baixa CSVs brutos
python 02_transform_layer1.py    # gera star schema
```

## O que cada um faz

### `01_download_layer1.py`
Baixa de https://github.com/martj42/international_results:
- `results.csv` — todas as partidas internacionais desde 1872
- `goalscorers.csv` — gols com autor e minuto
- `shootouts.csv` — disputas de pênaltis
- `former_names.csv` — mudanças históricas de nome de seleções

Salva em `../data/raw/martj42/`.

### `02_transform_layer1.py`
Filtra para `tournament == 'FIFA World Cup'`, harmoniza nomes via `team_metadata.py`, e gera star schema em `../data/processed/`:
- `dim_world_cup.csv`
- `dim_team.csv`
- `dim_match.csv`
- `fact_match_team.csv` ← tabela central, long format
- `fact_goal.csv`
- `fact_shootout.csv`
- `dim_translations.csv`

Detalhes de schema em `../docs/data-dictionary.md`.

### `team_metadata.py`
Não é executável — é um módulo de dados consumido pelo `02_transform`. Contém o mapeamento canônico de ~85 seleções com `team_id`, `name_en`, `name_pt`, `confederation`, `successor_team_id`.

Se o `02_transform` imprimir warnings de "time sem metadata", é aqui que você adiciona.

## Próximos scripts (V2)

- `03_download_layer2_statsbomb.py` — eventos jogada-a-jogada das Copas 2018 + 2022
- `04_transform_layer2_statsbomb.py` — agrega eventos por partida/time/jogador
- `05_enrich_stages.py` — adiciona coluna `match_stage` (Group, R16, QF, SF, F) cruzando com OpenFootball
