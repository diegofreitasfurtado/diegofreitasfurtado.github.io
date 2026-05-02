---
name: tese-to-content
description: Esteira de produção de conteúdo do Diego Furtado — transforma uma Tese (database 💡 Teses, Status=Publicável) em 3 variantes de post para LinkedIn (história pessoal, tese contraintuitiva, framework prático), seguindo o Workflow de Ciclo de 7 Dias do Second Brain. Use SEMPRE que o utilizador pedir "produz conteúdo da Tese X", "esteira da quinta-feira", "transforma esta tese em post", "variantes de post", "gera carrossel sobre [tema]", ou estiver na fase Quinta do ciclo. Output são 3 variantes que o Diego escolhe — esta skill **propõe**, não decide.
---

# tese-to-content

Materializa o passo "Quinta — Produção" do Workflow de 7 dias do Second Brain. Recebe uma Tese, devolve 3 variantes de post.

## Quando usar

- "Produz conteúdo da Tese [nome]"
- "Esteira da quinta-feira"
- "Transforma esta tese em post"
- "Quero variantes para LinkedIn sobre [tema]"
- O utilizador está no Project Notion *Diego · Produção de Conteúdo*

## Pré-requisitos

- MCP do Notion conectado
- A Tese tem `Status = "Publicável"` no Notion
- Idealmente, `Projetos que demonstram` (relação) tem ≥1 projeto com evidência concreta

Se a Tese não está em `Publicável`, **pára e pergunta** se o Diego quer ainda assim ou prefere refinar primeiro (e redireciona para o Project *Diego · Second Brain*).

## Fluxo

### 1. Ler a Tese

`Notion:notion-fetch` na página da Tese. Extrai:

- `Título`
- `Argumento central`
- `Contexto`
- `O que a maioria faz`
- `O que defendo`
- `Por quê`
- `Tags`
- `Projetos que demonstram` (relação) → segue cada um e lê `Resultado` + `Aprendizado`
- `Recursos que sustentam` (relação) → lê os recursos

### 2. Gerar 3 variantes

**As 3 variantes são fixas, com objetivos diferentes:**

#### Variante A — História pessoal
- **Voz:** primeira pessoa, observação
- **Estrutura:** abre com momento concreto ("Há 3 semanas, eu vi…") → conexão à Tese → reflexão
- **Tamanho:** 700-1200 caracteres
- **Pede:** que o Diego forneça o momento concreto ANTES de gerar (não inventar memórias)

#### Variante B — Tese contraintuitiva
- **Voz:** afirmativa, argumentativa
- **Estrutura:** "A maioria faz X. Eu defendo Y. Aqui o porquê:" → 3 razões → fechamento provocativo
- **Tamanho:** 800-1500 caracteres
- **Construção:** cola direto `O que a maioria faz` + `O que defendo` + `Por quê` da Tese

#### Variante C — Framework prático
- **Voz:** instrutiva, didática
- **Estrutura:** "5 passos para [resultado da Tese]" ou "Como [verbo] [substantivo]:" → bullets numeradas
- **Tamanho:** 600-1000 caracteres
- **Construção:** transforma o `Por quê` em passos acionáveis

### 3. Apresentar as 3 variantes

Output obrigatório:

```markdown
## Tese: [Título]
**Argumento central:** [Argumento central]

---

## Variante A — História pessoal
[texto pronto a colar no LinkedIn]

**Pede:** [se precisar de input do Diego, diz aqui]

---

## Variante B — Tese contraintuitiva
[texto pronto a colar no LinkedIn]

---

## Variante C — Framework prático
[texto pronto a colar no LinkedIn]

---

## Qual queres trabalhar?
(responde "A", "B", "C" — ou "outra" se queres variar)
```

### 4. Após escolha do Diego

Quando o Diego escolhe uma variante:

1. **Refina** a variante escolhida (pede feedback ao Diego: tom mais direto? mais leve? mais técnico?)
2. **Salva o draft** em `04 - Teses/Drafts longos/YYYY-MM-DD-slug.md` no OneDrive (caminho da Convenção de Pastas)
3. **Cria entrada** no Hub de Conteúdo no Notion (database `🎯 Projetos`, projeto contínuo "Hub de Conteúdo") com:
   - Link do draft no OneDrive
   - Variante escolhida
   - Tese-mãe (relação)
4. **Sugere** chamar `visual-from-tokens` se o post pedir imagem/carrossel

### 5. Após publicação no LinkedIn

Diego volta com o link do post. A skill então:

1. Atualiza Tese no Notion: `Status` → "Publicada", `Virou conteúdo?` → checked
2. Adiciona o link do post na página da Tese (corpo, secção "Resultado")
3. Reporta:
```
✅ Tese [Título] publicada
   - Variante: [A/B/C]
   - Link do post: [URL]
   - Notion atualizado: Status=Publicada, Virou conteúdo?=✅

Próximo passo: na revisão mensal, comparar engajamento desta vs últimas 4 publicações.
```

## Regras de redação (vinculantes)

1. **Não inventar dados, métricas ou histórias pessoais.** Se a Tese não tem evidência concreta nos `Projetos que demonstram`, pede ao Diego antes de gerar.
2. **Português europeu.** "tu" não "você", "ficheiro" não "arquivo", "telemóvel" não "celular", etc.
3. **Sem emojis em excesso.** Máximo 1-2 por post, e só se a Tese tiver tom mais leve.
4. **Sem hashtags genéricas.** Se incluir, máximo 3, todas relevantes ao tema da Tese.
5. **Primeira frase = gancho.** Não começar com "Hoje quero falar sobre…" ou "Reflexão importante:".

## Anti-padrões

- ❌ Gerar uma única variante "best of" — as 3 são propositadas
- ❌ Pular o passo de salvar o draft no OneDrive
- ❌ Editar o repo do portfolio (esta skill não toca em `projects-data.js`)
- ❌ Inserir links genéricos para o portfolio quando não há projeto relacionado citado
- ❌ Avançar com Tese em `Status = "Em validação"` ou `"Rascunho"` sem confirmação

## Referências

- `references/variant-recipes.md` — receitas detalhadas das 3 variantes com mais exemplos
- `references/voice-guide.md` — guia de voz e tom (PT-PT, registo profissional, primeira pessoa)
- `references/notion-tese-schema.md` — schema da DB 💡 Teses

## Scripts

- `scripts/save_draft.mjs` — escreve o draft no path correto do OneDrive
