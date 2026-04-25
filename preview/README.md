# `preview/` — Páginas de referência do design system

> Páginas estáticas que **mostram** o design system funcionando.
> São referência viva, não são parte do site público.
> Antes de mexer, ler [`../README.md`](../README.md) e [`../IDENTIDADE_VISUAL.md`](../IDENTIDADE_VISUAL.md).

---

## O que mora aqui

Cada arquivo é uma página HTML autônoma que demonstra **uma faceta** do design system.

| Arquivo | Demonstra |
|---|---|
| `brand-logo.html` | Uso correto da logo em fundo claro/escuro |
| `brand-motifs.html` | Os motifs geométricos disponíveis |
| `colors-primaries.html` | Paleta primária |
| `colors-semantic.html` | Tokens semânticos (`--bg-primary`, `--accent-cta`, etc.) |
| `colors-tints.html` | Tints e variações |
| `components-buttons.html` | Variações de botão |
| `components-cards.html` | Variações de card |
| `components-code.html` | Bloco de code |
| `components-tags.html` | Tags / chips |
| `shadows-borders.html` | Sombras sharp e bordas |
| `spacing-tokens.html` | Escala de espaçamento |
| `type-body.html` | Hierarquia de corpo |
| `type-display.html` | Hierarquia display |
| `type-scale.html` | Escala completa de tamanhos |

---

## Regras locais (em adição às da raiz)

### NÃO FAZER

- **Não usar** estas páginas como playground livre. Elas são **fonte de verdade visual** e devem refletir fielmente `colors_and_type.css`.
- **Não introduzir** estilos novos aqui que não estejam em `colors_and_type.css` ou `IDENTIDADE_VISUAL.md`.
- **Não linkar** os arquivos do `preview/` no site público. Eles são para consulta interna.

### O QUE PODE SER FEITO

- **Adicionar** uma página nova quando um novo componente / token entrar no design system. Nomear no padrão `{categoria}-{nome}.html` (ex.: `components-modals.html`).
- **Atualizar** uma página quando o token correspondente mudar (após autorização e atualização de `IDENTIDADE_VISUAL.md`).

---

## Relação com o resto do projeto

```
colors_and_type.css   ←——— consumida por ———   preview/*.html
                      \
                       \—— consumida por ———   ui_kits/portfolio/index.html
```

Se um arquivo de `preview/` mostra algo que **não bate** com `colors_and_type.css`, **o preview está errado**, não o CSS.
