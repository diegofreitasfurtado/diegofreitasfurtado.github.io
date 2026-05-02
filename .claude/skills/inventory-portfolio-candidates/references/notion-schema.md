# Schema da database 🎯 Projetos no Notion

Referência consultada pela `inventory-portfolio-candidates` quando precisa de detalhe sobre o schema.

## Identificadores

- **Database URL:** `https://www.notion.so/bd0390dee3d54df481d10da7f2b08213`
- **Data source URL:** `collection://8de18c65-7efe-4e78-b8b7-622f23342d9f`
- **Database ID:** `bd0390de-e3d5-4df4-81d1-0da7f2b08213`

## Propriedades relevantes para o portfolio

| Campo Notion | Tipo | Mapeia para `projects-data.js` |
|---|---|---|
| `Nome` | title | `title` |
| `Descrição` | text | parte de `desc` (parágrafo principal) |
| `Resultado` | text | um item em `results` |
| `Aprendizado` | text | parte de `desc` (parágrafo final) |
| `Tecnologias` | multi-select | `tools` (array) |
| `Tese demonstrada` | relation → 💡 Teses | sugere `subtitle` (Argumento central da Tese) |
| `Pasta no OneDrive` | url | fonte de imagens via Microsoft 365 MCP |
| `Link` | url | preenchido **depois** com URL do site (skill 1 atualiza) |
| `date:Data de Conclusão:start` | date | `year` |
| `Tipo` | select | filtro: só `"Portfolio"` |
| `Status 1` | status | filtro: `"Concluído"` |

## Valores válidos de `Tipo`

```
"Cliente", "Pessoal", "Portfolio", "Conteúdo", "Estudo"
```

A skill só considera `"Portfolio"`.

## Valores válidos de `Tecnologias`

```
"React", "Python", "JavaScript", "Machine Learning", "Data Science",
"Web Design", "Mobile", "UX/UI", "Backend", "Frontend"
```

⚠️ **Limitação conhecida:** o Notion não tem opções para "Power BI", "Tableau", "DAX", "SQL", "Power Query" — que são as tecnologias mais comuns no portfolio do Diego. Quando isto acontecer, a skill deve:

1. Reportar a tecnologia em falta
2. Sugerir adicionar ao Notion (manual, via Diego)
3. Para o output `tools` em `projects-data.js`, complementar com info do `Descrição` ou perguntar diretamente ao Diego

## Status disponíveis

**`Status` (select):** `"Ideia"`, `"Ativo"`, `"Em pausa"`, `"Concluído"`, `"Arquivado"`
**`Status 1` (status):** `"Planejado"`, `"Em andamento"`, `"Concluído"`

A skill considera candidato a publicação quando `Status 1 = "Concluído"`.

## Como queriar via MCP

Use a tool `Notion:notion-search` com:

```json
{
  "query": "Tipo Portfolio",
  "data_source_url": "collection://8de18c65-7efe-4e78-b8b7-622f23342d9f",
  "filters": {},
  "page_size": 25
}
```

Depois usa `Notion:notion-fetch` com cada `id` para ler propriedades completas.
