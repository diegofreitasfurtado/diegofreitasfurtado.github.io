# Tokens CSS canônicos consumíveis

Lista completa, copiada diretamente de `colors_and_type.css`. **Não modificar aqui** — se este ficheiro divergir, o canônico ganha. Atualizar este apenas quando `colors_and_type.css` mudar.

## Cores neutras

```css
--color-black:       #000000
--color-navy:        #0C0D2A
--color-gray-dark:   #2B3038
--color-white:       #FFFFFF
--color-cream:       #FFF5CC
--color-cream-light: #FFF9E8
```

## Cores primárias da marca

```css
--color-blue:         #1B2585
--color-blue-mid:     #4A52A0
--color-lavender:     #9494C8
--color-lavender-lt:  #C5CCEB

--color-red:          #E0003D
--color-red-mid:      #D45E7A
--color-pink:         #F07090
--color-pink-light:   #F5A8B8

--color-yellow:       #FFEE00
--color-yellow-light: #FFF28C
```

## Tokens semânticos (light/cream)

```css
--bg-primary:   #FFF8EE
--bg-tint:      var(--color-cream)
--bg-white:     var(--color-white)
--fg-primary:   var(--color-gray-dark)
--fg-muted:     var(--color-lavender)
--accent-cta:   var(--color-yellow)     /* sempre amarelo */
--accent-alert: var(--color-red)        /* sempre vermelho */
--accent-cool:  var(--color-blue)       /* sempre azul */
```

## Tokens semânticos (dark)

```css
--dark-bg-primary:   var(--color-black)
--dark-bg-secondary: var(--color-navy)
--dark-fg-primary:   var(--color-white)
--dark-fg-muted:     var(--color-lavender)
--dark-accent:       var(--color-yellow)
```

## Bordas

```css
--border-color: var(--color-lavender)
--border-dark:  var(--color-navy)
```

## Tipografia — famílias

```css
--font-display: 'BebasNeue', 'Arial Narrow', Arial, sans-serif
--font-mono:    'JetBrainsMono', 'Courier New', monospace
```

## Tipografia — escala (não usar fora desta)

```css
--text-xs:   0.625rem  /* 10px */
--text-sm:   0.75rem   /* 12px */
--text-base: 0.875rem  /* 14px */
--text-md:   1rem      /* 16px */
--text-lg:   1.25rem   /* 20px */
--text-xl:   1.5rem    /* 24px */
--text-2xl:  2rem      /* 32px */
--text-3xl:  3rem      /* 48px */
--text-4xl:  4rem      /* 64px */
--text-5xl:  6rem      /* 96px */
--text-hero: 9rem      /* 144px */
```

## Line heights

```css
--leading-tight:  1.05
--leading-snug:   1.2
--leading-normal: 1.4
--leading-loose:  1.7
```

## Letter spacing

```css
--tracking-tight:  -0.02em
--tracking-normal:  0em
--tracking-wide:    0.08em
--tracking-wider:   0.2em
```

## Espaçamento (não usar fora desta escala)

```css
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-5:  24px
--space-6:  32px
--space-7:  48px
--space-8:  64px
--space-9:  96px
--space-10: 128px
```

## Border radius

```css
--radius-none: 0px       /* default visual sharp */
--radius-sm:   2px
--radius-md:   4px
--radius-pill: 999px     /* só em tags */
```

## Sombras (todas sharp, sem blur)

```css
--shadow-none:  none
--shadow-sharp: 4px 4px 0px var(--color-yellow)   /* assinatura */
--shadow-dark:  4px 4px 0px var(--color-navy)
--shadow-red:   4px 4px 0px var(--color-red)
```

## Transições

```css
--ease-default:  cubic-bezier(0.25, 0.1, 0.25, 1)
--ease-out:      cubic-bezier(0, 0, 0.2, 1)
--duration-fast: 120ms
--duration-base: 220ms
--duration-slow: 380ms
```

## Mapeamento categoria → cor (do `IDENTIDADE_VISUAL.md`)

```
powerbi      → --color-yellow
tableau      → --color-blue
python       → --color-red
experimentos → --color-pink
pesquisa     → --color-lavender
```
