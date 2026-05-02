---
name: inventory-portfolio-candidates
description: Lista projetos do Notion (database 🎯 Projetos) que são candidatos a virar caso no portfólio público de Diego Furtado, classificando-os por completude. Use SEMPRE que o utilizador perguntar "que projetos tenho prontos para o site?", "fila do portfolio", "candidatos para case", "o que falta para publicar [nome]?", ou pedir uma visão geral do que está no Notion mas ainda não está em projects-data.js. Skill de leitura pura — nunca escreve.
---

# inventory-portfolio-candidates

Skill read-only que cruza o Notion (Second Brain) com o repo do portfolio para devolver uma fila priorizada de projetos prontos para virar caso público.

## Quando usar

Aciona em pedidos como:
- "Que projetos do Notion estão prontos para o site?"
- "Mostra-me a fila do portfolio"
- "O que falta para publicar o [nome do projeto]?"
- "Quais candidatos a case tenho?"
- Pedido de visão geral antes de chamar `notion-to-portfolio`

**Não escreve em lado nenhum.** É reconhecimento — o output orienta a próxima conversa.

## Pré-requisitos

- MCP do Notion conectado e autenticado
- Acesso de leitura ao repo `C:\Users\dfrei\OneDrive\Documentos\GitHub\portfolio\`

## Fluxo

### 1. Query no Notion

Usa o tool do Notion para pesquisar a database `🎯 Projetos` (data source `collection://8de18c65-7efe-4e78-b8b7-622f23342d9f`) com o filtro:

```
Tipo = "Portfolio"
Status ∈ {"Ativo", "Concluído"}
```

Para cada resultado, extrai:
- `Nome` (title)
- `Descrição`
- `Tecnologias` (multi-select)
- `Resultado` (text)
- `Aprendizado` (text)
- `Pasta no OneDrive` (url)
- `Link` (url)
- `Tese demonstrada` (relation)
- `date:Data de Conclusão:start`

### 2. Cruza com `projects-data.js` do repo

Lê `ui_kits/portfolio/projects-data.js`. Para cada projeto do Notion verifica se:
- Já existe no array `projects` (match por `Nome` ↔ `title`, fuzzy)
- Já está em `archived`

Se existe match, marca como **já publicado** e não entra na fila.

### 3. Classifica por completude

Cada candidato cai em um de 3 baldes:

| Balde | Critério | Próximo passo sugerido |
|---|---|---|
| 🟢 **Pronto** | tem `Descrição` >100 chars, `Resultado`, `Aprendizado`, `Tecnologias` ≥1, e `Status 1 = Concluído` | Pode chamar `notion-to-portfolio` direto |
| 🟡 **Quase pronto** | falta 1-2 campos do critério acima | Sugere ao Diego o que pedir para preencher |
| 🔴 **Faltam dados** | esqueleto (só `Nome` + alguns campos) | Sugere refinamento via Project *Diego · Second Brain* |

### 4. Output estruturado

Devolve nesta ordem exata:

```markdown
# Fila do portfolio — [data]

## 🟢 Prontos para publicar (N)
1. **[Nome]** — [ano de conclusão]
   - Tecnologias: [lista]
   - Tese: [argumento central da Tese demonstrada, se houver]
   - Sugestão: chamar `notion-to-portfolio` com este projeto

## 🟡 Quase prontos (N)
1. **[Nome]**
   - Falta: [lista específica de campos]
   - Sugestão: "[pergunta concreta para preencher]"

## 🔴 Faltam dados (N)
[lista compacta]

## Já publicados no site (N)
[só nomes, para o Diego confirmar que o cruzamento está correto]

## Resumo
- Total no Notion (Tipo=Portfolio): X
- Já no site: Y
- Candidatos disponíveis: Z (verde) + W (amarelo) + V (vermelho)
```

### 5. Sugere ação seguinte

Termina a resposta sempre com **uma única recomendação**: ou um nome específico para chamar `notion-to-portfolio`, ou um campo específico para preencher antes.

## Mapeamento de Tecnologias → categoria do site

Heurística para sugerir `category` em projetos prontos (referência apenas — a decisão final é do Diego):

| Tecnologia no Notion | Categoria no site |
|---|---|
| Power BI presente | `powerbi` |
| Tableau presente | `tableau` |
| Python presente (sem BI tool) | `python` |
| Frontend / Web Design / UX-UI | `experimentos` |
| Pesquisa / Data Science (sem ferramenta de BI) | `pesquisa` |

Se houver ambiguidade (ex: Python + Power BI), reporta as duas opções e pede ao Diego para escolher.

## Anti-padrões

- ❌ Listar todos os projetos do Notion sem filtrar `Tipo = Portfolio`
- ❌ Decidir sozinho se um candidato amarelo deve ser publicado
- ❌ Aplicar mudanças no Notion ou no repo (essa skill é read-only)
- ❌ Inventar `category` para projetos com tecnologias fora do mapeamento — pergunta ao Diego

## Referências

- `references/notion-schema.md` — schema completo da DB `🎯 Projetos` e mapeamento de campos
- `references/categorization-rules.md` — heurísticas de categorização e exceções conhecidas
