---
name: visual-from-tokens
description: Gera peças visuais (carrosséis LinkedIn, imagens de capa, cartões) usando OBRIGATORIAMENTE os tokens canônicos do design system de Diego Furtado (colors_and_type.css), respeitando a identidade visual blindada (sombra sharp sem blur, BebasNeue display, JetBrainsMono mono, paleta congelada). Use SEMPRE que o utilizador pedir "carrossel para o post", "imagem de capa", "cartão visual", "peça gráfica", "slide para LinkedIn", ou qualquer artefato visual que vá representar a marca pessoal do Diego. **Esta skill nunca inventa cor, fonte, sombra ou raio** — só consume tokens existentes.
---

# visual-from-tokens

Gera peças visuais HTML/SVG estritamente alinhadas com `colors_and_type.css` e `IDENTIDADE_VISUAL.md`.

## Quando usar

- "Cria carrossel de 5 slides para a Tese X"
- "Imagem de capa para o post sobre Y"
- "Cartão de citação com este excerto"
- "Slide visual para LinkedIn"
- Após `tese-to-content` quando a variante escolhida pede peça visual

## Pré-requisitos absolutos

A skill **lê** estes ficheiros antes de qualquer geração — não decora valores:

1. `colors_and_type.css` (raiz do repo) — fonte canônica de tokens
2. `IDENTIDADE_VISUAL.md` (raiz do repo) — regras blindadas

Se algum não existir, **para imediatamente** e reporta. Não inventa fallback.

## Princípios irredutíveis

Estas regras vêm direto do `IDENTIDADE_VISUAL.md` e **não são negociáveis**:

| Aspecto | Regra |
|---|---|
| Cores | Apenas as 16 da paleta canônica. Nunca hex novo. |
| Fontes | Só BebasNeue (display) e JetBrainsMono (mono). Sem terceira família. |
| Sombras | **Sharp** com offset, **sem blur**. Apenas: `--shadow-sharp`, `--shadow-dark`, `--shadow-red`. |
| Raio | Default `radius-none` (sharp). `radius-sm` ou `radius-md` permitidos. `radius-pill` só em tags. |
| Espaçamento | Apenas escala fixa: `--space-1` a `--space-10` (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px). |
| Tamanhos texto | Apenas escala fixa: `--text-xs` a `--text-hero`. |

Se uma peça pedir algo fora destas regras (ex: cor pastel não-canônica, sombra suave, fonte serif), **recusa** e explica:

> *"Esta peça pede [X], que está fora da identidade visual blindada. Posso fazer com tokens canônicos, ou esperar pedido expresso do Diego para adicionar [X] ao IDENTIDADE_VISUAL.md."*

## Fluxo

### 1. Capturar pedido

Coleta:
- **Tipo de peça:** carrossel (multi-slide), imagem única (post), citação (cartão)
- **Conteúdo:** texto exato a usar (ou referência a Tese/post)
- **Categoria associada** (se houver) — define cor de destaque (ver mapeamento abaixo)
- **Dimensões alvo** (LinkedIn carrossel: 1080×1350; LinkedIn post imagem: 1200×630; quadrado: 1080×1080)

### 2. Selecionar paleta da peça

Cada peça usa **3 cores ativas** + neutros. A escolha depende da categoria associada:

| Categoria | Cor primária | Cor secundária | Sombra |
|---|---|---|---|
| `powerbi` | `--color-yellow` | `--color-navy` | `--shadow-dark` |
| `tableau` | `--color-blue` | `--color-yellow` | `--shadow-sharp` |
| `python` | `--color-red` | `--color-cream` | `--shadow-red` |
| `experimentos` | `--color-pink` | `--color-navy` | `--shadow-dark` |
| `pesquisa` | `--color-lavender` | `--color-cream` | `--shadow-dark` |
| (sem categoria) | `--color-yellow` | `--color-navy` | `--shadow-sharp` |

Fundo padrão: `--bg-primary` (`#FFF8EE`). Para slides escuros: `--dark-bg-primary` (`#000000`).

### 3. Gerar HTML

A skill produz **HTML estático** que carrega `colors_and_type.css` via `<link>`. Importante:

- **Importar fontes** via `@font-face` apontando para `../fonts/` (caminho relativo ao output)
- **Consumir `var(--token)`** — nunca hardcoded
- **`viewport`** definido para as dimensões alvo da peça
- **Sem JavaScript** — peça visual é estática

Estrutura típica de slide (template):

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="../colors_and_type.css">
  <style>
    body { margin: 0; }
    .slide {
      width: 1080px;
      height: 1350px;
      background: var(--bg-primary);
      padding: var(--space-9);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
    .heading {
      font-family: var(--font-display);
      font-size: var(--text-5xl);
      letter-spacing: var(--tracking-wide);
      text-transform: uppercase;
      color: var(--fg-primary);
      line-height: var(--leading-tight);
    }
    .body {
      font-family: var(--font-mono);
      font-size: var(--text-md);
      line-height: var(--leading-loose);
      color: var(--fg-primary);
      margin-top: var(--space-6);
      max-width: 80%;
    }
    .accent-block {
      background: var(--color-yellow);
      box-shadow: var(--shadow-dark);
      padding: var(--space-4) var(--space-5);
      align-self: flex-start;
      margin-bottom: var(--space-6);
    }
    .label {
      font-family: var(--font-mono);
      font-size: var(--text-xs);
      letter-spacing: var(--tracking-wider);
      text-transform: uppercase;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <div class="slide">
    <div class="accent-block">
      <span class="label">Slide 1 de 5</span>
    </div>
    <h1 class="heading">[título da slide]</h1>
    <p class="body">[corpo curto]</p>
  </div>
</body>
</html>
```

### 4. Salvar no OneDrive

Output em `05 - Mídia/Imagens/Posts/YYYY-MM-DD-slug/` (caminho da Convenção de Pastas):

```
05 - Mídia/Imagens/Posts/2026-04-27-automacao-higiene/
├── slide-01.html
├── slide-02.html
├── slide-03.html
├── slide-04.html
└── slide-05.html
```

Cada slide é HTML standalone que abre no navegador → usar Chrome DevTools (responsive 1080×1350) → screenshot → upload manual no LinkedIn.

### 5. Devolver instruções de uso

```markdown
✅ 5 slides gerados em `05 - Mídia/Imagens/Posts/2026-04-27-automacao-higiene/`

Para exportar como imagens:
1. Abrir `slide-01.html` no Chrome
2. DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)
3. Definir Responsive a 1080×1350
4. Capturar screenshot full-page
5. Repetir para slides 02-05

Para LinkedIn: criar publicação com documento (PDF) ou carrossel nativo, importar as 5 imagens em ordem.

Próximo passo sugerido: chamar o Canva via MCP se preferires editar visualmente antes de publicar.
```

## Anti-padrões

- ❌ Inventar gradientes (a identidade é flat)
- ❌ Usar sombra com `blur` (proibido pelo IDENTIDADE_VISUAL.md)
- ❌ Adicionar Lottie, animação, vídeo (peças são estáticas)
- ❌ Usar fontes do Google Fonts (só as duas locais)
- ❌ Aplicar `border-radius: 12px` ou similar (escala canônica é 0/2/4/999)
- ❌ Cores em hex no CSS (sempre `var(--token)`)
- ❌ Inventar texto que não esteja no input do Diego

## Quando a peça pede algo que não cabe na identidade

A `IDENTIDADE_VISUAL.md` permite atualização **só por pedido expresso** do Diego, com registo no CHANGELOG. Se a peça pedir um elemento novo:

1. **Não cria a peça improvisando.** Para.
2. **Documenta** o que está a faltar:
   > *"Esta peça pediria [gradient azul→roxo], que não existe na identidade. Para criar, ou: (a) faço com `--color-blue` flat, (b) tu autorizas adicionar gradient ao `IDENTIDADE_VISUAL.md` (afecta hierarquia de regras + CHANGELOG)."*
3. **Aguarda decisão.**

## Referências

- `references/css-tokens.md` — lista completa dos tokens consumíveis
- `references/templates-html.md` — templates HTML para cada tipo de peça
- `references/dimensions.md` — dimensões corretas por canal (LinkedIn, Twitter, etc.)

## Scripts

- `scripts/preview_slides.mjs` — abre os HTMLs gerados no navegador local em sequência
