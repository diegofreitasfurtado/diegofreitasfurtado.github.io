# Design Decisions

Registro das decisões de modelagem deste projeto. Cada decisão tem **contexto**, **opções consideradas**, **escolha** e **trade-off**.

---

## DD-001 · Times historicamente distintos como entidades separadas

**Contexto:** O dataset tem partidas de "West Germany" (1954–1990), "Germany" (1994+), "Soviet Union" (até 1990), "Russia" (1994+), "Yugoslavia" (até 2002), "Serbia" (2006+), etc.

**Opções:**
1. **Mesclar** — somar West Germany + Germany como "Germany" para ter histórico contínuo
2. **Separar** — manter cada entidade histórica como time independente

**Escolha:** **Separar.** Adicionado campo `successor_team_id` em `dim_team` para quem quiser agregar opcionalmente.

**Trade-off:**
- ✅ Fidelidade histórica preservada — Alemanha tem 1 título (2014), não 4
- ✅ Permite análise de "como evoluiu a República Federal vs. a Alemanha unificada"
- ❌ Filtro "Alemanha" no Tableau não traz tudo automaticamente — usuário precisa selecionar FRG + GER se quiser visão consolidada
- 🛠️ Mitigação: criar Calculated Field `team_id_consolidated` no Tableau que faz `IFNULL([successor_team_id], [team_id])` para quem preferir visão moderna

---

## DD-002 · Long format em `fact_match_team`

**Contexto:** No dataset bruto, cada partida é UMA linha com colunas `home_team` / `away_team`. Para responder "quantas Copas o Brasil disputou", isso exige `WHERE home_team='Brazil' OR away_team='Brazil'` — feio em SQL e pior em Tableau.

**Opções:**
1. Manter wide (1 linha por partida) — economiza espaço, mas filtros e agregações por time exigem self-join ou OR complexo
2. Pivotar para long (2 linhas por partida) — duplica dado mas filtro vira `WHERE team_id = 'BRA'`

**Escolha:** **Long.** O custo é 2x linhas em uma tabela pequena (~1.800 vs 900); o ganho é dramático em ergonomia de dashboard.

**Trade-off:**
- ✅ Slicer "Selecione um time" no Tableau funciona com 1 click, sem self-join
- ✅ Métricas como "gols/jogo do time X" são `AVG([goals_for])` direto
- ❌ Soma cega de `goals_for` em toda tabela = 2x os gols reais. Tem que lembrar de usar `dim_match` quando quiser totais agregados não-por-time.
- 🛠️ Mitigação: documentar essa pegadinha no `data-dictionary.md` e nomear medidas no Tableau de forma explícita (`Goals For (per team)`)

---

## DD-003 · Stage de partida não está em V1

**Contexto:** O dataset martj42 não traz a fase do jogo (Group, Round of 16, Quarter-final, Final). A análise "como o Brasil performou em mata-matas vs. fase de grupos" requer essa info.

**Opções:**
1. Inferir stage por heurística (último jogo = final, n-1 = 3º lugar, etc.) — frágil para formatos antigos
2. Deixar em branco em V1, adicionar via OpenFootball/world-cup em V2
3. Criar mapeamento manual (22 Copas × ~32 jogos cada)

**Escolha:** **(2) Adicionar em V2 via OpenFootball.** Em V1, marcamos apenas `is_final = True` para o último jogo de cada Copa (suficiente para identificar campeão e vice).

**Trade-off:**
- ✅ V1 sai mais rápido, foco em qualidade do dado que JÁ TEM
- ✅ OpenFootball tem stage estruturado e em domínio público — implementação V2 é determinística
- ❌ V1 não permite resposta direta a "performance em mata-matas"
- 🛠️ Mitigação no dashboard: páginas que dependem de stage ficam para V2; comunicar isso na página de capa

---

## DD-004 · Tradução PT/EN no dado, não no Tableau

**Contexto:** O dashboard precisa funcionar em PT e EN.

**Opções:**
1. Manter dados em EN, traduzir só labels visuais no Tableau via parâmetros + Calculated Fields
2. Carregar dim com colunas `name_en` e `name_pt`, deixar o usuário do dashboard alternar via parâmetro
3. Gerar dois conjuntos de dados separados (um por idioma)

**Escolha:** **(2) Tradução no dado, alternância via parâmetro.**

**Trade-off:**
- ✅ Fonte da verdade única para nomes de seleções (em `dim_team`) e categorias (em `dim_translations`)
- ✅ Adicionar terceiro idioma no futuro = adicionar coluna, sem refazer dashboard
- ❌ Levemente mais complexo no Tableau (precisa de Calculated Field do tipo `IF [Lang] = 'PT' THEN [name_pt] ELSE [name_en] END`)
- 🛠️ Padrão simples e aceito na comunidade Tableau

---

## DD-005 · CSV em vez de Parquet ou Hyper

**Contexto:** Tableau aceita vários formatos. Parquet é mais rápido e menor. Hyper é o formato nativo otimizado.

**Opções:**
1. Parquet — eficiente, requer Tableau 2024+ ou conversão
2. Hyper — nativo Tableau, máxima performance, requer geração via tableau-hyper-api
3. CSV — universal, legível, versionável (small diffs no Git), abre em Excel

**Escolha:** **CSV.** Volume é pequeno (~1MB total), performance não é gargalo. Ganho em portabilidade compensa.

**Trade-off:**
- ✅ Qualquer ferramenta lê (Tableau, Power BI, Excel, R, dbt, sqlite import)
- ✅ Versionável no Git com diff legível
- ✅ Curva de aprendizado zero
- ❌ Slower load para dados muito grandes (não é nosso caso)
- 🛠️ Se Camada 2 (StatsBomb) ficar pesada, podemos migrar SÓ ela para Parquet sem afetar Camada 1

---

## DD-006 · Layered approach (Camada 1 + Camada 2) em vez de tudo de uma vez

**Contexto:** Tentação inicial era cobrir 1930–2022 com mesmo nível de granularidade. Realidade do StatsBomb: cobertura completa só de 2018 em diante.

**Opções:**
1. Tentar forçar simetria — só fazer 2018+ para "ser justo" → perde resgate histórico
2. Two-tier — macro 1930–2022 (resultados/gols) + micro 2018+ (eventos táticos)
3. Esperar StatsBomb cobrir Copas antigas (não vai acontecer)

**Escolha:** **(2) Two-tier.** Comunicar claramente no dashboard onde cada camada começa/termina.

**Trade-off:**
- ✅ Profundidade histórica E profundidade tática
- ✅ Narrativa em duas escalas é interessante per se
- ❌ Risco de usuário esperar dado tático para 1970 e ficar frustrado
- 🛠️ Mitigação: páginas separadas, indicação visual clara de "Macro / Micro" no menu, copy explicando a fronteira
