# Data Dictionary · Camada 1

Tabelas em `data/processed/`, geradas por `scripts/02_transform_layer1.py`.

Convenção: chaves primárias em **negrito**, foreign keys em _itálico_.

---

## `dim_world_cup`

Uma linha por edição da Copa do Mundo.

| Coluna | Tipo | Descrição |
|---|---|---|
| **`world_cup_id`** | string | Identificador no formato `WC<ano>` (ex: `WC1970`, `WC2022`) |
| `year` | int | Ano da edição |
| `host_country` | string | País-sede (derivado: country mais frequente em jogos não-neutros) |
| `num_matches` | int | Total de partidas na edição |
| `num_goals` | int | Total de gols na edição |
| `num_teams` | int | Seleções participantes |
| `goals_per_match` | float | Média de gols/jogo |
| _`champion_id`_ | string | FK → `dim_team.team_id` do campeão |
| _`runner_up_id`_ | string | FK → `dim_team.team_id` do vice |
| `final_date` | date | Data da final |

## `dim_team`

Uma linha por seleção nacional. Times historicamente distintos (West Germany, Soviet Union, Yugoslavia, Czechoslovakia) são entradas separadas.

| Coluna | Tipo | Descrição |
|---|---|---|
| **`team_id`** | string | Código de 3-4 letras (ex: `BRA`, `GER`, `FRG`, `URS`) |
| `name_en` | string | Nome canônico em inglês |
| `name_pt` | string | Tradução em português brasileiro |
| `confederation` | string | AFC, CAF, CONCACAF, CONMEBOL, OFC, UEFA |
| _`successor_team_id`_ | string nullable | Para times extintos, qual seleção atual os "sucede" (FRG → GER, URS → RUS, YUG → SRB). NULL para times ativos. |

## `dim_match`

Uma linha por partida.

| Coluna | Tipo | Descrição |
|---|---|---|
| **`match_id`** | string | `<data>_<homeAbrev>_<awayAbrev>` |
| _`world_cup_id`_ | string | FK → `dim_world_cup` |
| `year` | int | Ano da Copa |
| `date` | date | Data do jogo |
| `home_team` | string | Nome do time mandante (texto) |
| _`home_team_id`_ | string | FK → `dim_team` |
| `away_team` | string | Nome do visitante (texto) |
| _`away_team_id`_ | string | FK → `dim_team` |
| `home_score` | int | Gols mandante (tempo regulamentar + prorrogação) |
| `away_score` | int | Gols visitante (tempo regulamentar + prorrogação) |
| `neutral` | bool | Sede neutra |
| `city` | string | Cidade do jogo |
| `country` | string | País-sede do jogo |
| `has_shootout` | bool | Houve disputa de pênaltis |
| `shootout_winner` | string nullable | Nome do vencedor nos pênaltis |
| _`shootout_winner_id`_ | string nullable | FK → `dim_team` |
| `is_final` | bool | É a partida final daquela edição |

## `fact_match_team`

**Tabela central para análise por seleção.** Long format: cada partida gera **2 linhas** — uma para cada time. Isso permite filtro de slicer "team_id" trivial no Tableau.

| Coluna | Tipo | Descrição |
|---|---|---|
| _`match_id`_ | string | FK → `dim_match` |
| _`world_cup_id`_ | string | FK → `dim_world_cup` |
| `year` | int | |
| `date` | date | |
| _`team_id`_ | string | Time foco (sobre quem é a linha) |
| `team_name_en` | string | Conveniência |
| _`opponent_id`_ | string | Adversário |
| `opponent_name_en` | string | Conveniência |
| `is_home` | bool | Time foco era mandante |
| `venue_neutral` | bool | Sede neutra |
| `goals_for` | int | Gols pró |
| `goals_against` | int | Gols contra |
| `result` | string | `W` / `D` / `L` (resultado em tempo regulamentar) |
| `result_after_shootout` | string | Resultado considerando shootout (em mata-mata, empate vira W ou L) |
| `is_final` | bool | Foi a final da Copa |

## `fact_goal`

Uma linha por gol.

| Coluna | Tipo | Descrição |
|---|---|---|
| **`goal_id`** | string | Sequencial (`G000001`...) |
| _`match_id`_ | string | FK → `dim_match` |
| _`world_cup_id`_ | string | FK → `dim_world_cup` |
| `year` | int | |
| `date` | date | |
| _`team_id`_ | string | Time que marcou |
| `team` | string | Nome do time (texto bruto) |
| _`opponent_id`_ | string | Adversário |
| `opponent` | string | Nome do adversário (texto bruto) |
| `scorer` | string | Nome do jogador |
| `minute` | int nullable | Minuto do gol |
| `own_goal` | bool | Foi gol contra |
| `penalty` | bool | Foi cobrança de pênalti |

## `fact_shootout`

Uma linha por disputa de pênaltis.

| Coluna | Tipo | Descrição |
|---|---|---|
| _`match_id`_ | string | FK → `dim_match` |
| _`world_cup_id`_ | string | FK → `dim_world_cup` |
| `year` | int | |
| `date` | date | |
| _`winning_team_id`_ | string | Vencedor |
| `winner` | string | Texto |
| _`losing_team_id`_ | string | Perdedor |
| `losing_team` | string | Texto |
| `first_shooter` | string nullable | Quem cobrou primeiro (quando disponível) |

## `dim_translations`

Lookup bilíngue para campos categóricos. Use no Tableau via Calculated Field (`LOOKUP` por `entity_type` + `code`).

| Coluna | Tipo | Descrição |
|---|---|---|
| `entity_type` | string | Categoria (`result`, `boolean`, `confederation`, `venue`, `trophy`) |
| `code` | string | Valor original do dado |
| `label_en` | string | Rótulo em inglês |
| `label_pt` | string | Rótulo em português |

---

## Relacionamentos (star schema)

```
                    dim_translations  (não relacionada — lookup global)

  dim_world_cup ──────┐
                      │
  dim_team  ──────────┤
                      ├─→  fact_match_team  (long format, 2x partidas)
                      │
  dim_match ──────────┤
                      ├─→  fact_goal
                      │
                      └─→  fact_shootout
```

No Tableau Desktop, configure as relações via **Data Source page**:
- `fact_match_team.team_id` ↔ `dim_team.team_id`
- `fact_match_team.match_id` ↔ `dim_match.match_id`
- `fact_match_team.world_cup_id` ↔ `dim_world_cup.world_cup_id`
- (analogamente para `fact_goal` e `fact_shootout`)

## Volumes esperados (após pipeline rodado)

Aproximadamente:
- `dim_world_cup`: 22 linhas (1930–2022)
- `dim_team`: ~85 linhas
- `dim_match`: ~900 linhas
- `fact_match_team`: ~1.800 linhas
- `fact_goal`: ~2.500 linhas
- `fact_shootout`: ~30 linhas
- `dim_translations`: ~16 linhas

Tamanho total em CSV: < 1 MB.
