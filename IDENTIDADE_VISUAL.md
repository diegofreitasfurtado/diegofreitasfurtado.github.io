# IDENTIDADE VISUAL — Diego Furtado Portfolio

> **ARQUIVO BLINDADO.** Este documento congela a identidade visual do site.
> Nenhum item descrito aqui pode ser alterado sem **pedido expresso e por escrito** de Diego Furtado.
>
> **Em caso de dúvida, NÃO altere.** Pergunte primeiro.

---

## Como este arquivo deve ser lido

1. Antes de qualquer alteração visual no projeto, ler este arquivo até o fim.
2. Antes de qualquer alteração visual, conferir se o pedido do Diego é **expresso** e **específico** (cita o token, a cor, a fonte ou o componente).
3. Se o pedido não for expresso, manter o estado atual e responder ao Diego pedindo confirmação.
4. Toda alteração aprovada deve ser registrada no `CHANGELOG.md` da raiz **e** marcada neste arquivo na seção "Histórico de alterações expressas".

---

## 1. Fonte canônica de tokens

A fonte de verdade da identidade visual é **um único arquivo**:

```
colors_and_type.css
```

Qualquer outro arquivo (`index.html`, `preview/*.html`, `ui_kits/portfolio/index.html`) **deve consumir** as variáveis CSS desse arquivo, nunca redefini-las.

Se um arquivo redefine um token (ex.: hardcoda `#FFEE00` no lugar de `var(--color-yellow)`), isso é uma divergência e deve ser **corrigida**, não copiada.

---

## 2. Paleta — congelada

### Neutros

| Token              | Hex       | Uso                              |
|--------------------|-----------|----------------------------------|
| `--color-black`    | `#000000` | Hero, headers escuros            |
| `--color-navy`     | `#0C0D2A` | Fundo escuro secundário, borders |
| `--color-gray-dark`| `#2B3038` | Texto sobrio (ink)               |
| `--color-white`    | `#FFFFFF` | Fundo claro alternativo          |
| `--color-cream`    | `#FFF5CC` | Tint de fundo                    |
| `--color-cream-light` | `#FFF9E8` | Tint mais leve de fundo       |

### Primárias de marca

| Token                | Hex       | Uso                                  |
|----------------------|-----------|--------------------------------------|
| `--color-blue`       | `#1B2585` | Acento frio, categoria               |
| `--color-blue-mid`   | `#4A52A0` | Variação de azul                     |
| `--color-lavender`   | `#9494C8` | Texto muted, borders                 |
| `--color-lavender-lt`| `#C5CCEB` | Tint suave                           |
| `--color-red`        | `#E0003D` | Alerta, contraste forte              |
| `--color-red-mid`    | `#D45E7A` | Variação de vermelho                 |
| `--color-pink`       | `#F07090` | Acento quente                        |
| `--color-pink-light` | `#F5A8B8` | Tint rosa                            |
| `--color-yellow`     | `#FFEE00` | **CTA, sombras sharp, destaque**     |
| `--color-yellow-light` | `#FFF28C` | Tint amarelo                       |

### Tokens semânticos (não trocar a referência)

```
--bg-primary:   #FFF8EE        (fundo padrão de leitura)
--bg-tint:      var(--color-cream)
--bg-white:     var(--color-white)
--fg-primary:   var(--color-gray-dark)
--fg-muted:     var(--color-lavender)
--accent-cta:   var(--color-yellow)
--accent-alert: var(--color-red)
--accent-cool:  var(--color-blue)

--dark-bg-primary:   var(--color-black)
--dark-bg-secondary: var(--color-navy)
--dark-fg-primary:   var(--color-white)
--dark-fg-muted:     var(--color-lavender)
--dark-accent:       var(--color-yellow)

--border-color: var(--color-lavender)
--border-dark:  var(--color-navy)
```

**Regra:** `--accent-cta` é **sempre** amarelo. `--accent-alert` é **sempre** vermelho. `--accent-cool` é **sempre** azul. Nunca trocar.

---

## 3. Tipografia — congelada

### Famílias

| Token            | Família                                       | Uso                              |
|------------------|-----------------------------------------------|----------------------------------|
| `--font-display` | `'BebasNeue', 'Arial Narrow', Arial, sans-serif` | Títulos H1, H2, hero          |
| `--font-mono`    | `'JetBrainsMono', 'Courier New', monospace`   | Corpo, labels, code, H3, H4      |

**Não introduzir nenhuma terceira família.** Se faltar peso ou estilo, usar variação da JetBrainsMono (variable font) ou ajustar `font-weight` / `font-style`.

### Hierarquia

| Elemento | Família  | Tamanho       | Peso | Estilo  | Caso |
|----------|----------|---------------|------|---------|------|
| `.display-hero` | display | `--text-hero` (144px) | 400 | normal | UPPER |
| `h1`     | display  | `--text-5xl` (96px) | 400  | normal  | UPPER |
| `h2`     | display  | `--text-3xl` (48px) | 400  | normal  | UPPER |
| `h3`     | mono     | `--text-xl` (24px)  | 700  | italic  | mixed |
| `h4`     | mono     | `--text-lg` (20px)  | 600  | normal  | mixed |
| `p`      | mono     | `--text-base` (14px)| 400  | normal  | mixed |
| `.caption`| mono    | `--text-xs` (10px)  | 600  | normal  | UPPER |
| `.label` | mono     | `--text-xs` (10px)  | 700  | normal  | UPPER |
| `code`   | mono     | `--text-sm` (12px)  | 400  | normal  | —     |

### Escala de tamanhos (não inventar valores fora dessa escala)

```
--text-xs   10px   --text-2xl  32px
--text-sm   12px   --text-3xl  48px
--text-base 14px   --text-4xl  64px
--text-md   16px   --text-5xl  96px
--text-lg   20px   --text-hero 144px
--text-xl   24px
```

### Espaçamento de letra (tracking)

```
--tracking-tight  -0.02em   (h3, italic mono)
--tracking-normal  0em
--tracking-wide    0.08em   (display, h1, h2)
--tracking-wider   0.2em    (caption, label, em uppercase)
```

---

## 4. Espaçamento, raio e sombras — congelados

### Espaçamento (escala fixa)

```
--space-1  4px    --space-6  32px
--space-2  8px    --space-7  48px
--space-3  12px   --space-8  64px
--space-4  16px   --space-9  96px
--space-5  24px   --space-10 128px
```

Nunca usar valores fora dessa escala.

### Raio

```
--radius-none  0px     (padrão — visual sharp)
--radius-sm    2px
--radius-md    4px
--radius-pill  999px
```

**Regra:** o visual padrão do site é **sharp**. Cards, botões e blocos vão `radius-none` ou `radius-sm`. `radius-pill` só em tags pequenas.

### Sombras

```
--shadow-none   none
--shadow-sharp  4px 4px 0px var(--color-yellow)   (assinatura visual)
--shadow-dark   4px 4px 0px var(--color-navy)
--shadow-red    4px 4px 0px var(--color-red)
```

**Regra:** sombras são **offset sharp** (sem blur). Não usar `box-shadow` com blur em nenhuma circunstância — quebra a linguagem do site.

---

## 5. Motifs geométricos — congelados

Os motifs de marca vivem em `assets/`:

```
ativo-9-starburst.svg
ativo-11-triangles.svg
ativo-12-ovals.svg
ativo-13-snowflake.svg
ativo-14-squares.svg
```

**Regras:**
- Os motifs são parte do vocabulário visual. Não remover sem pedido expresso.
- Não trocar a paleta dos motifs sem pedido expresso.
- Para inserir um motif novo, ele deve ser construído com a paleta canônica desta página.
- O nome do arquivo segue o padrão `ativo-{número}-{nome-descritivo}.svg`. Manter.

---

## 6. Logo — congelado

```
assets/logo-branco.svg   (uso sobre fundo escuro)
assets/logo-preto.svg    (uso sobre fundo claro)
```

**Regras:**
- Não substituir a logo sem pedido expresso.
- Não distorcer, recortar, recolorir ou aplicar efeitos.
- Em fundo escuro, usar **logo-branco**. Em fundo claro, usar **logo-preto**. Nunca o contrário.

---

## 7. Transições

```
--ease-default  cubic-bezier(0.25, 0.1, 0.25, 1)
--ease-out      cubic-bezier(0, 0, 0.2, 1)
--duration-fast 120ms
--duration-base 220ms
--duration-slow 380ms
```

Não introduzir easings ou durations fora dessa lista.

---

## 7.1. Embeds de terceiros

Quando o site incorporar componentes de terceiros (ex.: Spotify), o layout interno oficial do provedor deve ser preservado.

**Regras:**
- O container externo pode respeitar a grade, o espaçamento e o fundo do portfólio.
- O conteúdo interno do embed não deve ser redesenhado, forçado por CSS ou reconstruído manualmente para "imitar" o provedor.
- Sempre que houver opção entre montar um pseudo-player local e usar o embed oficial, preferir o embed oficial.
- Ajustes de largura e altura são permitidos apenas como adaptação de container; não como tentativa de alterar a composição interna da interface do provedor.

---

## 8. Interesses de projeto — cores fixas

A partir de **2026-05-03**, o sistema de identidade do portfólio passou de **categorias por ferramenta** para **interesses por área**. Cada projeto escolhe **uma única Interest** (identidade primária, cor única). `technologies` e `solutionType` são tags secundárias que herdam o tom da Interest do projeto.

### Interesses canônicos (4)

| Interest         | Token de cor (cheio)  | Token tom leve (Solution Type)   |
|------------------|-----------------------|----------------------------------|
| Tecnologia       | `--color-blue`        | `--color-lavender-lt`            |
| Esportes         | `--color-lavender`    | `--color-lavender-lt`            |
| Entretenimento   | `--color-red`         | `--color-red-mid`                |
| Experimentos     | `--color-pink`        | `--color-pink-light`             |

### Comportamento dos chips de filtro

- **Interest selecionada** → fundo na cor cheia da Interest, texto branco (sobretom).
- **Interest não selecionada** → outline na cor da Interest sobre fundo `--bg-primary`.
- **Technology / Solution Type selecionada** → fundo `--color-lavender-lt` (cinza-lavanda neutro), texto `--color-navy`. **Estes filtros nunca puxam cor da Interest** — a cor pertence sempre ao filtro de Interest.
- **Technology / Solution Type não selecionada** → outline em `--color-lavender` neutro.

### Cor dentro de cada cartão de projeto

- Linha de topo do cartão (3px) → cor cheia da Interest do projeto.
- Mini-chips de Technologies → outline na cor cheia da Interest.
- Mini-chips de Solution Type → outline no tom leve da Interest.

### Regra de manutenção

> A vinculação Interest → cor é blindada. Para alterar, atualizar simultaneamente este arquivo, `ui_kits/portfolio/projects-data.js`, `scripts/validate-portfolio.mjs` e `CHANGELOG.md`. Adicionar uma 5ª Interest exige nova cor única na paleta — pedido expresso obrigatório.

---

## 9. Fluxo de revisão antes de qualquer alteração visual

Antes de mexer em qualquer item visual, o Claude (ou qualquer pessoa editando) deve responder **sim** a estas perguntas:

1. O Diego pediu essa mudança **explicitamente** nesta conversa? (não basta um pedido genérico tipo "melhora o visual")
2. A mudança está **descrita aqui** ou foi **autorizada para ser adicionada aqui**?
3. A mudança **mantém a coerência** com o resto da identidade (paleta canônica, tipografia, sharp, sem blur, motifs, etc.)?
4. A mudança vai ser **registrada** no `CHANGELOG.md` e **refletida** neste arquivo?

Se alguma resposta for **não**, **não alterar**.

---

## 10. Histórico de alterações expressas

Toda alteração aprovada deste documento (e da identidade visual em geral) entra aqui, em ordem cronológica decrescente.

### [2026-05-03] — Substituição de categorias por interesses
- §8 reescrita: o sistema de **categorias por ferramenta** (Power BI, Tableau, Python, Experimentos, Pesquisa) foi substituído por **interesses por área** (Tecnologia, Esportes, Entretenimento, Experimentos).
- Cada projeto agora carrega: `interest` (1 valor obrigatório) + `technologies[]` + `solutionType[]`.
- `Tecnologias` e `Solution Type` selecionados nos filtros usam `--color-lavender-lt` neutro — a cor das Interests fica reservada ao filtro de identidade.
- Tons leves (Solution Type dentro do cartão): `--color-lavender-lt`, `--color-red-mid`, `--color-pink-light`.
- Mapeamento Interest → cor (autorizado por Diego):
  - Tecnologia → `--color-blue` (#1B2585)
  - Esportes → `--color-lavender` (#9494C8)
  - Entretenimento → `--color-red` (#E0003D)
  - Experimentos → `--color-pink` (#F07090)
- Autorizado por: Diego Furtado, conversa de 2026-05-03 ("Ok para tudo" + tabela de cores ditada).
- Arquivos afetados: `IDENTIDADE_VISUAL.md` §8, `ui_kits/portfolio/projects-data.js`, `ui_kits/portfolio/index.html`, `scripts/validate-portfolio.mjs`, `CHANGELOG.md`.

### [2026-04-25] — Criação do arquivo
- Documento inicial, congelando o estado da identidade visual conforme `colors_and_type.css` e `assets/`.
- Autorizado por: Diego Furtado (pedido inicial de estruturação do portfólio).

<!-- Adicione novas entradas ACIMA desta linha -->
