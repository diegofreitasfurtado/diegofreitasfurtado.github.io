# Mapeamento de campos: Notion → projects-data.js

Tabela canônica de transformação. Consultada pela `notion-to-portfolio` durante o passo 4.

## Mapeamento direto

| projects-data.js | Origem Notion | Transformação |
|---|---|---|
| `id` | — | `MAX(id existente em projects + archived) + 1` |
| `title` | `Nome` | trim, sem alterar |
| `subtitle` | `Tese demonstrada → Argumento central` | se não houver tese, usar primeira frase de `Descrição` |
| `desc` | `Descrição` + `Aprendizado` | `Descrição\n\n[Aprendizado, se existir]` |
| `year` | `date:Data de Conclusão:start` | extrair só ano, ex: `"2024"`. Se houver `Data de Início` em ano anterior, usar `"2023-2024"` |
| `tools` | `Tecnologias` (multi-select) + parsing de `Descrição` | ver "Normalização de tecnologias" abaixo |
| `tags` | `Temática` + tags da Tese | merge sem duplicados, máx 5 |
| `results` | `Resultado` | ver "Parsing de Resultado" abaixo |
| `embedUrl` | `Link` (se for embed-able) | só se for URL pública de dashboard, senão deixa `""` |
| `codeSnippet` | — | sempre `""` por defeito; perguntar ao Diego se quer adicionar |
| `imageCaption` | — | gerado a partir do `Nome` (ex: "Dashboard executivo - [Nome]") |
| `featured` | — | sempre `false` por defeito; perguntar |
| `category` | derivado de `Tecnologias` | ver `inventory-portfolio-candidates/references/categorization-rules.md` |
| `template` | inferido | ver `template-selection.md` |

## Normalização de tecnologias

O Notion tem opções limitadas. A skill normaliza para os nomes que o site usa:

| Notion Tecnologias | site `tools` |
|---|---|
| `"React"` | `"React"` |
| `"Python"` | `"Python"` |
| `"JavaScript"` | `"JavaScript"` |
| `"Machine Learning"` | `"ML"` ou `"Machine Learning"` (manter o do Notion) |
| `"Data Science"` | manter |
| `"Web Design"` | omitir do `tools` (vai para `category`) |
| `"UX/UI"` | omitir do `tools` (vai para `category`) |
| `"Frontend"` / `"Backend"` / `"Mobile"` | manter |

Tecnologias detectadas no `Descrição` mas ausentes do multi-select do Notion (frequentes):

| Detectado em texto | Adicionar a `tools` |
|---|---|
| "Power BI", "PowerBI" | `"Power BI"` |
| "DAX" | `"DAX"` |
| "Power Query", "M language" | `"Power Query (M)"` |
| "Tableau" | `"Tableau"` |
| "SQL", "BigQuery" | `"SQL"` ou `"SQL · BigQuery"` |
| "Pandas" | `"Pandas"` |
| "spaCy", "HuggingFace" | manter exatamente como estão |

## Parsing de `Resultado`

O campo `Resultado` no Notion é texto livre. A skill tenta detectar números + label.

**Padrões reconhecidos:**

| Texto Notion | Resultado parseado |
|---|---|
| `"4x mais rápido no refresh"` | `[{value: "4x", label: "Mais rápido no refresh"}]` |
| `"30 horas economizadas por mês"` | `[{value: "30h", label: "Economizadas por mês"}]` |
| `"Aumento de 3x no orçamento"` | `[{value: "3x", label: "Aumento de orçamento"}]` |
| `"100% de alinhamento entre áreas"` | `[{value: "100%", label: "Alinhamento entre áreas"}]` |

**Se não conseguir parsear:**
- Apresenta o texto bruto ao Diego
- Pergunta: *"Como queres dividir isto em pares (value, label)?"*
- Sugere até 3 pares para projetos featured, até 2 para os restantes

## Tratamento de campos vazios

| Campo Notion vazio | Comportamento |
|---|---|
| `Nome` | **bloqueio** — pede para preencher antes de continuar |
| `Descrição` | **bloqueio** |
| `Tecnologias` | tenta inferir de `Descrição`; se não conseguir, pede ao Diego |
| `Resultado` | gera `results: []` mas avisa que projeto fica menos forte sem números |
| `Aprendizado` | omite do `desc`; não é bloqueio |
| `Tese demonstrada` | omite `subtitle` derivado; pede ao Diego um subtítulo curto |
| `Pasta no OneDrive` | `imageCaption` fica genérico; sem imagens neste passo |
| `Link` | normal (será preenchido depois) |

## Exemplo concreto (Projeto 4 do site)

**No Notion (hipotético):**
```
Nome: "Automação de ETL"
Descrição: "Pipelines automatizados com Python e Power Query..."
Aprendizado: "Eliminar trabalho manual de coleta..."
Resultado: "30h economizadas por mês, 4x mais rápido no refresh, 0 erros manuais"
Tecnologias: ["Python", "Data Science"]
Data de Conclusão: 2024-12-15
Tese demonstrada: → Tese "Automação não é luxo, é higiene operacional"
```

**Output para `projects-data.js`:**
```js
{
  id: 4,
  category: "python",
  template: 2,
  featured: true,
  title: "Automação de ETL",
  subtitle: "Pipelines automáticos com Python e Power Query",  // ou Tese
  desc: "Pipelines automatizados com Python e Power Query...\n\nEliminar trabalho manual de coleta...",
  year: "2024",
  tools: ["Python", "Pandas", "Power Query (M)", "SQL"],  // Pandas + SQL detectados no texto
  tags: ["ETL", "Automação", "Pipeline", "Pandas"],
  results: [
    { value: "30h", label: "Economizadas por mês" },
    { value: "4x", label: "Mais rápido no refresh" },
    { value: "0", label: "Erros manuais de dados" }
  ],
  embedUrl: "",
  codeSnippet: "",
  imageCaption: "Fluxo do pipeline de dados"
}
```
