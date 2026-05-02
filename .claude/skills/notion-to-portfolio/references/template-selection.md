# Seleção de template (1-6)

O site tem 6 templates definidos em `ui_kits/portfolio/project-templates.jsx`. A escolha **pelo dado** (campo `template:` em `projects-data.js`), nunca alterando HTML.

## Os 6 templates

| # | Nome interno | Linguagem visual | Quando usar |
|---|---|---|---|
| 1 | `signal-grid` | Grid analítico, leitura rápida de dados | Dashboards, KPIs, projetos com muitos números |
| 2 | `narrative-stack` | Storytelling vertical em camadas | Pipelines, processos, projetos que contam evolução |
| 3 | `lab-notes` | Caderno de laboratório, processo cru | Pesquisa, ensaios, exploração teórica |
| 4 | `prototype-collage` | Colagem de protótipos e iterações | Design experimental, work-in-progress |
| 5 | `analysis-ledger` | Tabela analítica, métricas frias | Análise comparativa, benchmarks, relatórios |
| 6 | `story-ribbon` | Linha narrativa horizontal | Casos com timeline clara, jornadas |

## Heurística

Aplicar nesta ordem (primeira que bater, ganha):

1. **`category = "pesquisa"`** → `template: 3` (lab-notes)
2. **`category = "experimentos"`** → `template: 4` (prototype-collage)
3. **Tem ≥3 `results` com números** + `category` em (`powerbi`, `tableau`) → `template: 1` (signal-grid)
4. **Descrição menciona "pipeline", "ETL", "automação"** → `template: 2` (narrative-stack)
5. **Descrição menciona "comparação", "benchmark", "competitivo"** → `template: 5` (analysis-ledger)
6. **Descrição menciona "ano a ano", "evolução", "ciclo", "fase"** → `template: 6` (story-ribbon)
7. **Default** → `template: 1`

## Regra de escape

Se a heurística produzir uma resposta que parece errada para o Diego, sempre permitir override no momento do "diff e aprovação":

> *"Sugeri template 1 (signal-grid). Queres outro? (1-6)"*

## Restrição

**Não inventar 7º template.** Se o Diego pedir algo que não cabe nos 6, redirecionar para `MANUTENCAO_DO_PORTFOLIO.md` (criação de novo template é pedido expresso, atualiza `IDENTIDADE_VISUAL.md`).

## Exemplos de aplicação aos cases existentes

| Projeto existente | Template atual | Justificação |
|---|---|---|
| Fonte Única de Verdade | 1 | dashboard, 3 results numéricos |
| Painel de Precificação | 6 | strory-ribbon (jornada de pricing) |
| Audiência Institucional | 1 | dashboard multiplataforma |
| Automação de ETL | 2 | narrative-stack (pipeline tem etapas) |
| NLP em Releases | 5 | analysis-ledger (experimento com métricas) |
| Dados como Declaração | 3 | lab-notes (ensaio teórico) |
