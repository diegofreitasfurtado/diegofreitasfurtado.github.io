# Viz Copas do Mundo · World Cup Viz

> Como jogavam as seleções nas Copas do Mundo? · How did national teams play in the World Cup?

Projeto autoral de visualização de dados em **Tableau Public** sobre o histórico das seleções nacionais nas Copas do Mundo da FIFA. Combina dado **macro-histórico** (todas as 22 edições, 1930–2022) com **análise tática** (eventos jogada-a-jogada para 2018+).

🔗 **Dashboard live:** _a publicar em `public.tableau.com/profile/diego.furtado`_
👤 **Autor:** Diego Furtado · [LinkedIn](#) · [Portfolio](#)

---

## 🎯 Objetivo

Construir um portfólio de viz que responda, em duas escalas:

1. **Macro (1930–2022, todas as seleções)** — quantas Copas o time disputou, evolução de gols/jogo, confrontos diretos, ranking histórico, artilheiros.
2. **Micro (2018+, dado tático profundo)** — heatmaps de campo, redes de passes, xG, padrões de pressão.

A interação central é: **selecione um time** e veja toda a sua trajetória histórica, comparada às demais seleções.

## 🧱 Stack

| Camada | Ferramenta | Uso |
|---|---|---|
| Extração | Python (`requests`) | Download de fontes públicas |
| Transformação | Python (`pandas`) | Limpeza, modelagem star schema |
| Armazenamento | CSV | Compatível Tableau / Power BI / Excel |
| Visualização | **Tableau Public Desktop** | Dashboard interativo |
| Publicação | **Tableau Public Server** | Embed gratuito no portfólio |
| Versionamento | Git + GitHub | Pipeline rastreável e reprodutível |

## 📊 Status

- ✅ **Camada 1 — Macro histórico (1930–2022)** · Pipeline + star schema
- ⏳ **Camada 2 — Tático (2018+)** · Próxima iteração via StatsBomb Open Data
- ⏳ **Dashboard Tableau** · Em construção
- ⏳ **Publicação live** · Aguardando dashboard

## 🚀 Reproduzir o pipeline

Pré-requisitos: Python 3.10+, Git.

```bash
# 1. Clonar
git clone https://github.com/<seu-usuario>/viz-copas-do-mundo.git
cd viz-copas-do-mundo

# 2. Ambiente virtual
python -m venv venv
# Windows:
.\venv\Scripts\Activate.ps1
# macOS/Linux:
source venv/bin/activate

# 3. Dependências
pip install -r scripts/requirements.txt

# 4. Baixar dado bruto (Camada 1)
python scripts/01_download_layer1.py

# 5. Gerar star schema
python scripts/02_transform_layer1.py
```

Depois, abra `tableau/copas-do-mundo.twb` no Tableau Public Desktop. Os data sources já apontam para `data/processed/` via path relativo.

## 📁 Estrutura

```
viz-copas-do-mundo/
├── data/
│   ├── raw/martj42/            ← downloads originais (versionados, ~3MB)
│   └── processed/              ← star schema CSVs (gerados pelo pipeline)
├── scripts/
│   ├── 01_download_layer1.py   ← baixa CSVs do martj42/international_results
│   ├── 02_transform_layer1.py  ← gera star schema bilíngue
│   ├── team_metadata.py        ← canonização de nomes de seleções (PT/EN)
│   └── requirements.txt
├── tableau/
│   ├── copas-do-mundo.twb      ← workbook (XML, versionado)
│   └── screenshots/            ← PNGs das páginas
├── docs/
│   ├── data-dictionary.md      ← descrição de cada tabela e coluna
│   ├── design-decisions.md     ← trade-offs de modelagem
│   └── attribution.md          ← créditos obrigatórios das fontes
├── README.md                   ← este arquivo
├── LICENSE                     ← MIT (código), licenças de dados em attribution
└── .gitignore
```

## 🔑 Decisões de design importantes

- **Times historicamente distintos são entidades separadas.** Alemanha Ocidental (FRG) ≠ Alemanha (GER). União Soviética (URS) ≠ Rússia (RUS). Isso preserva fidelidade histórica. O campo `successor_team_id` em `dim_team` permite agregação opcional.
- **Long format em `fact_match_team`.** Cada partida vira 2 linhas (uma por time). Isso faz o filtro "selecione um time" funcionar de forma trivial em Tableau, sem self-joins.
- **Tradução PT/EN.** `dim_team` carrega `name_en` e `name_pt`. Campos categóricos têm rótulos bilíngues em `dim_translations`.
- **Stage de partida (Group, Round of 16, Final, etc.) não está em V1.** A fonte martj42 não traz; será adicionada em V2 cruzando com OpenFootball/world-cup. V1 marca apenas `is_final = True` para o último jogo de cada Copa.

Detalhes em `docs/design-decisions.md`.

## 📜 Licenças

- **Código:** MIT (ver `LICENSE`)
- **Dados:** cada fonte mantém sua licença original (ver `docs/attribution.md`)

## 🙏 Créditos

Este projeto não existiria sem:

- [martj42/international_results](https://github.com/martj42/international_results) — base CC0 com todos os jogos internacionais desde 1872
- [StatsBomb Open Data](https://github.com/statsbomb/open-data) — eventos jogada-a-jogada gratuitos para uso não-comercial
- [OpenFootball/world-cup](https://github.com/openfootball/world-cup) — estrutura de torneios em domínio público

Ver `docs/attribution.md` para citações completas.

---

## 🇬🇧 English summary

Personal data viz portfolio piece in **Tableau Public** about FIFA World Cup history. Combines macro-historical data (all 22 editions, 1930–2022) with tactical analysis (event-level data for 2018+).

Pipeline: Python (`requests` + `pandas`) → CSV star schema → Tableau Public.

Repo includes reproducible scripts, bilingual EN/PT labels, and historically-faithful team modeling (e.g., West Germany ≠ Germany). To reproduce, see "🚀 Reproduzir o pipeline" above.

License: MIT for code, original licenses retained for data (see `docs/attribution.md`).
