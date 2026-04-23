# Diego Furtado — Design System

**Version:** 1.0  
**Author:** Diego Furtado  
**Role:** Analista de dados, jornalista e curioso por análises orientadas pelo design de conteúdo.

---

## Sources

Assets were provided directly as uploads:
- Color palette image: `uploads/CORES@3x-50.jpg`
- Logo (branco): `uploads/Logo - Branco - Diego Furtado.svg`
- Logo (preto): `uploads/Logo - Preto - Diego Furtado.svg`
- Decorative brand elements: `uploads/Ativo 9–14.svg`
- Fonts: BebasNeue-Regular.ttf, JetBrainsMono (variable + italic variable)

No codebase or Figma link was provided.

---

## CONTENT FUNDAMENTALS

### Tone & Voice
Diego's brand communicates like a smart friend who happens to know data and journalism deeply — **informal, direct, and relaxed**. Never corporate, never stuffy.

- **Language:** Portuguese (BR). English may appear in technical/data contexts.
- **Person:** First-person ("Eu fiz", "Acredito que", "Olha que dado curioso…") — always human, never institutional.
- **Casing:** Sentence case in body copy. ALL CAPS reserved for display headings and labels (Bebas Neue is designed for that).
- **Punctuation:** Ellipses and em-dashes are welcome. Exclamations used sparingly, not performatively.
- **Emoji:** Not part of the brand identity. The geometric aesthetic carries tone without them.
- **Vibe keywords:** curioso, direto, analítico, descontraído, criativo, honesto.

### Copy Examples
- ✅ "Não é magia, é metodologia."
- ✅ "Você sabe quantas vezes esse processo quebrou? Eu calculei."
- ✅ "Design não é só bonito — é argumento visual."
- ❌ "Olá! Sou Diego e estou apaixonado por dados!" ← muito corporativo/performático

---

## VISUAL FOUNDATIONS

### Color System
Two palettes: **dark primaries** and **vivid accents**.

| Token | Value | Role |
|---|---|---|
| `--color-black` | `#000000` | Primary background |
| `--color-navy` | `#0C0D2A` | Secondary dark background |
| `--color-blue` | `#1B2585` | Brand blue |
| `--color-lavender` | `#9494C8` | Muted accent, borders |
| `--color-red` | `#E0003D` | Alert, strong accent |
| `--color-pink` | `#F07090` | Soft accent |
| `--color-yellow` | `#FFEE00` | Primary highlight/CTA |
| `--color-cream` | `#FFF5CC` | Warm light background |
| `--color-white` | `#FFFFFF` | Light mode base |

Each primary has a lighter tint counterpart (see `colors_and_type.css`).

**Color Vibe:** High contrast. Dark backgrounds with yellow or red pops. Light mode uses cream/white with navy text. Cool lavender as a neutral in between. No gradients — flat, intentional color blocks.

### Typography
Two fonts only — kept tight:

| Font | Use | Style |
|---|---|---|
| **Bebas Neue** | Display, headings, labels | Condensed all-caps, wide tracking |
| **JetBrains Mono** | Body, captions, code, sub-headings | Variable weight; italic for emphasis |

The combination of a display serif-adjacent condensed face (Bebas Neue) with a technical monospace (JetBrains Mono) creates the data-journalism tension at the core of Diego's identity.

- **H1/H2:** Bebas Neue, ALL CAPS, tight leading (1.05), wide tracking (0.08em)
- **H3/H4:** JetBrains Mono Bold Italic / Medium
- **Body:** JetBrains Mono Regular, generous leading (1.7)
- **Labels/Captions:** JetBrains Mono, ALL CAPS, extra tracking (0.2em), small size
- **Code:** JetBrains Mono, navy background, yellow text

### Spacing
4px base unit grid. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.

### Backgrounds
- Primary: flat black or navy — no gradients, no textures
- Light mode: white or cream
- Decorative brand elements (Ativos) used as background/overlay motifs at low opacity

### Animation & Motion
- **Easing:** ease-out (`cubic-bezier(0, 0, 0.2, 1)`) as default
- **Duration:** fast=120ms, base=220ms, slow=380ms
- **Hover states:** color shift + slight upward translate (2–4px). No opacity tricks.
- **Press states:** translate back down (1–2px), shadow collapse
- **Philosophy:** Motion is editorial, not decorative. Fast in, considered out.

### Borders & Shadows
- **Border radius:** Essentially zero. Sharp corners dominate. Pill shape for tags only.
- **Shadows:** Offset hard shadows (4px 4px 0px) — yellow, navy, or red. No blur. Brutalist feel.
- **Borders:** 1–2px solid. Usually lavender on dark, navy on light.

### Cards
- Sharp corners
- Hard offset shadow (yellow or dark)
- Thin solid border
- Dense information layout — not airy

### Imagery
- **Color vibe:** High contrast, documentary-style. B&W or desaturated with a color overlay works well.
- **No stock photos with people smiling**
- Data visualizations and charts are first-class imagery

### Iconography → see ICONOGRAPHY section below

### Decorative Motifs
Brand uses 5 geometric line-art "Ativo" elements (see `assets/`):
- `ativo-9-starburst.svg` — multi-line star/asterisk burst
- `ativo-11-triangles.svg` — concentric expanding triangular shapes
- `ativo-12-ovals.svg` — concentric rotating ellipses
- `ativo-13-snowflake.svg` — complex layered snowflake/star pattern
- `ativo-14-squares.svg` — nested squares at rotating angles

Used at low opacity as background texture, section dividers, or decorative corners. Never filled — always pure stroke.

---

## ICONOGRAPHY

No icon font or CDN icon set is defined in the brand. Recommended approach:

- **Primary decorative icons:** Use the 5 Ativo SVGs (brand-owned geometric motifs)
- **Functional UI icons:** Use [Lucide](https://lucide.dev) (CDN: `https://unpkg.com/lucide@latest`) — stroke-based, clean, matches the mono/technical aesthetic
- **Emoji:** Not used in the visual brand
- **Logo:** Two versions — branco (white, for dark bg) and preto (black, for light bg)

Logo is a geometric "DF" lettermark inside a rectangular border with a diagonal slash — condensed, editorial, unmistakably typographic.

---

## FILE INDEX

```
README.md                  ← This file
SKILL.md                   ← Agent skill definition
colors_and_type.css        ← All CSS custom properties + semantic type styles

fonts/
  BebasNeue-Regular.ttf
  JetBrainsMono-VariableFont_wght.ttf
  JetBrainsMono-Italic-VariableFont_wght.ttf

assets/
  logo-branco.svg          ← White logo (for dark backgrounds)
  logo-preto.svg           ← Black logo (for light backgrounds)
  ativo-9-starburst.svg    ← Decorative: star burst
  ativo-11-triangles.svg   ← Decorative: concentric triangles
  ativo-12-ovals.svg       ← Decorative: rotating ovals
  ativo-13-snowflake.svg   ← Decorative: complex snowflake
  ativo-14-squares.svg     ← Decorative: rotating nested squares

preview/
  colors-primaries.html
  colors-tints.html
  colors-semantic.html
  type-display.html
  type-body.html
  type-scale.html
  spacing-tokens.html
  shadows-borders.html
  components-buttons.html
  components-tags.html
  components-cards.html
  components-code.html
  brand-logo.html
  brand-motifs.html

ui_kits/
  portfolio/
    README.md
    index.html
    Header.jsx
    Hero.jsx
    ProjectCard.jsx
    Footer.jsx
```
