# Regras de categorização — Notion → site

Mapeamento de `Tecnologias` (Notion) para `category` (site).

## Mapeamento principal

| Tem Tecnologia… | Categoria | Cor (token) |
|---|---|---|
| `Web Design` ou `Frontend` ou `UX/UI` | `experimentos` | `--color-pink` |
| `Python` (sem outras BI tools) | `python` | `--color-red` |
| `Machine Learning` ou `Data Science` (sem outras) | `pesquisa` | `--color-lavender` |
| `React` ou `JavaScript` | `experimentos` | `--color-pink` |

## Tecnologias ausentes no Notion

As seguintes tecnologias são frequentes nos cases reais do Diego mas **não existem como opção no multi-select** da database `🎯 Projetos`:

- Power BI · DAX · M (Power Query)
- Tableau
- SQL · BigQuery
- Pandas
- ETL

**Sinal de alerta:** se o `Descrição` mencionar "Power BI", "DAX", "Tableau", "SQL", "Power Query", mas as `Tecnologias` no Notion não tiverem opção correspondente — a categoria provavelmente é `powerbi`, `tableau` ou `python`.

Nesses casos, a skill deve:

1. Detectar a menção no texto livre
2. Sugerir explicitamente: *"Detectei 'Power BI' na descrição mas não está no campo Tecnologias. Sugiro categoria `powerbi` — confirmar?"*
3. Pedir ao Diego para adicionar a opção ao Notion (uma vez), para futuros projetos

## Categorias do site (referência blindada)

Definidas em `IDENTIDADE_VISUAL.md`. **Não inventar** categoria nem cor:

```
powerbi      → --color-yellow      (#FFEE00)
tableau      → --color-blue        (#1B2585)
python       → --color-red         (#E0003D)
experimentos → --color-pink        (#F07090)
pesquisa     → --color-lavender    (#9494C8)
```

## Exceções conhecidas

- **Projetos de jornalismo / pesquisa acadêmica** → sempre `pesquisa`, mesmo que tenham Python como ferramenta auxiliar
- **Projetos de portfólio próprio (este repo)** → `experimentos`
- **Ensaios escritos / artigos teóricos** → `pesquisa`
