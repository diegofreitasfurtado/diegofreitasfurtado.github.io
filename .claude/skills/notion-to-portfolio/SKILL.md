---
name: notion-to-portfolio
description: Materializa um projeto do Notion (database 🎯 Projetos, Tipo=Portfolio) como bloco JS no projects-data.js do portfólio público de Diego Furtado, respeitando o gate de aprovação do AGENTS.md, a identidade visual blindada do IDENTIDADE_VISUAL.md, e atualizando o Notion no fim do ciclo. Use SEMPRE que o utilizador pedir "publica o projeto X do Notion no portfolio", "leva [nome] para o site", "monta o bloco JS de [projeto]", "transforma esta página Notion em case", ou referenciar uma URL/page-id do Notion no contexto de portfolio. Esta é a skill que **escreve** no repo — nunca avança sem aprovação explícita.
---

# notion-to-portfolio

Skill que fecha o ciclo Second Brain → site público. Lê um projeto do Notion, propõe um bloco para `projects-data.js`, espera aprovação, aplica, valida e atualiza o Notion de volta.

## Quando usar

- "Publica o projeto [nome] do Notion no portfolio"
- "Leva o Redesign do Portfólio Pessoal para o site"
- O utilizador cola uma URL do Notion e fala em portfolio/case
- Após `inventory-portfolio-candidates` o utilizador escolheu um projeto da fila verde

**Não use** quando o utilizador quer só visualizar — para isso é a `inventory-portfolio-candidates`.

## Pré-requisitos

- MCP do Notion conectado
- Working tree do repo limpo (sem alterações pendentes em `projects-data.js`)
- O projeto no Notion tem `Tipo = "Portfolio"` e idealmente `Status 1 = "Concluído"`

## Princípios irredutíveis (não negociáveis)

Esta skill **nunca**:

1. Edita `projects-data.js` sem mostrar o diff e receber aprovação textual ("sim", "aprovado", "pode")
2. Inventa cores, fontes, ou cria categoria nova — usa só as 5 canónicas
3. Pula o `validate-portfolio.mjs` no fim
4. Esquece de atualizar o `CHANGELOG.md`
5. Esquece de fechar o ciclo no Notion (atualizar `Link` e `Status 1`)

Em caso de dúvida, **para e pergunta**.

## Fluxo completo

### 1. Receber referência ao projeto

Aceita: page_id do Notion, URL do Notion, ou nome do projeto (faz lookup via search).

Se for nome ambíguo (mais de um match), lista as opções e pede para o Diego escolher.

### 2. Ler o projeto

```
Notion:notion-fetch (id do projeto)
```

Extrai todos os campos relevantes (ver `references/field-mapping.md`).

### 3. Verificar pré-condições

Para cada um destes, **se falhar, pára e reporta**:

- [ ] `Tipo = "Portfolio"`
- [ ] `Nome` não vazio
- [ ] `Descrição` ≥ 100 caracteres
- [ ] `Tecnologias` ≥ 1 item, OU detectar tecnologias no `Descrição`
- [ ] Existe `Resultado` ou pelo menos 1 número no `Descrição` que sirva de result

Se o projeto está incompleto, lista o que falta e termina aqui — não tenta adivinhar.

### 4. Mapear para schema do site

Lê `references/field-mapping.md` e `references/template-selection.md`.

Constrói o objeto JS:

```js
{
  id: <próximo id livre>,
  category: "<inferido das Tecnologias>",
  template: <1-6, ver heurística>,
  featured: <false por defeito; pergunta se quer true>,
  title: "<Nome>",
  subtitle: "<Argumento central da Tese demonstrada, ou subtítulo curto>",
  desc: "<Descrição + Aprendizado, formatado com \\n\\n>",
  year: "<derivado de Data de Conclusão>",
  tools: [<Tecnologias normalizadas>],
  tags: [<inferido de Temática + tese tags>],
  results: [<derivado de Resultado, parseado em {value, label}>],
  embedUrl: "",
  codeSnippet: "",
  imageCaption: "<sugestão baseada no nome>"
}
```

### 5. Calcular `id` único

Lê `ui_kits/portfolio/projects-data.js`, procura o maior `id` em `projects` E `archived`, soma 1.

### 6. Mostrar diff e PEDIR APROVAÇÃO

Output obrigatório nesta ordem:

```markdown
## Bloco proposto para `ui_kits/portfolio/projects-data.js`

```js
{
  id: 7,
  category: "powerbi",
  ...
}
```

## O que vou alterar
1. Adicionar bloco acima no array `projects` (posição: final)
2. Atualizar `CHANGELOG.md` com entrada de hoje
3. Rodar `node scripts/validate-portfolio.mjs`
4. Atualizar Notion: campo `Link` ← URL do site quando publicado

## Apruva?
(responde "sim" para eu aplicar, ou indica o que mudar)
```

**Sem resposta afirmativa, não avança.**

### 7. Aplicar

Após aprovação:

1. Edita `ui_kits/portfolio/projects-data.js` (adicionar ao array `projects`)
2. Edita `CHANGELOG.md` (entrada nova no topo, formato canônico)
3. Roda `node scripts/validate-portfolio.mjs` — se falhar, **reverte** e reporta erro

### 8. Fechar o ciclo no Notion

Pergunta ao Diego pela URL do site após o GitHub Pages atualizar.

Atualiza no Notion (página do projeto):
- `Link` ← URL do site
- `Status 1` ← "Concluído" (se ainda não estava)
- Adiciona ao corpo da página: bloco com link do bloco em `projects-data.js` (linha aproximada)

### 9. Reportar

Resumo final:
```
✅ Projeto [nome] publicado
   - id: 7
   - category: powerbi
   - template: 1
   - Validador: passou
   - CHANGELOG: atualizado
   - Notion: Link preenchido, Status 1=Concluído

Próximo passo sugerido: chamar `tese-to-content` para gerar post sobre a Tese demonstrada
```

## Tratamento de erros

| Erro | Ação |
|---|---|
| Validator falha | Reverte ambas as edições, mostra log do validador, pergunta como corrigir |
| Notion offline | Salva o bloco proposto em `/scraps/` para retomar depois (NÃO edita ainda) |
| Conflito de id | Recalcula com `MAX(id) + 1`, refaz a proposta |
| `Pasta no OneDrive` vazia mas `Descrição` menciona imagens | Avisa que vai ficar sem imagens; pergunta se quer prosseguir mesmo assim |

## Referências

- `references/field-mapping.md` — mapeamento detalhado Notion ↔ projects-data.js
- `references/template-selection.md` — heurística para escolher 1 dos 6 templates
- `references/changelog-format.md` — formato canônico do CHANGELOG.md

## Scripts

- `scripts/build_block.mjs` — recebe JSON do projeto Notion, devolve bloco JS formatado
- `scripts/update_notion.mjs` — fecha ciclo escrevendo de volta no Notion
