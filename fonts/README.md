# `fonts/` — Tipografia oficial

> **Pasta blindada.** As fontes aqui dentro são as únicas autorizadas no projeto.
> Antes de mexer, ler [`../README.md`](../README.md) e [`../IDENTIDADE_VISUAL.md`](../IDENTIDADE_VISUAL.md).

---

## O que mora aqui

| Arquivo | Família | Uso |
|---|---|---|
| `BebasNeue-Regular.ttf` | BebasNeue | Display — H1, H2, hero, labels grandes |
| `JetBrainsMono-VariableFont_wght.ttf` | JetBrainsMono | Mono — corpo, h3/h4, code, captions |
| `JetBrainsMono-Italic-VariableFont_wght.ttf` | JetBrainsMono Italic | Mono itálico — destaques em h3 |

---

## Regras locais (em adição às da raiz)

### NÃO FAZER

- **Não adicionar uma terceira família** ao projeto sem pedido **expresso**.
- **Não trocar** as fontes existentes por substitutos visualmente parecidos. BebasNeue ≠ Oswald ≠ Anton.
- **Não renomear** arquivos. O `@font-face` em `colors_and_type.css` aponta para esses nomes exatos.
- **Não converter** para WOFF/WOFF2 sem alinhamento (afeta o `@font-face` de todos os HTMLs).

### O QUE PODE SER FEITO

- **Manter o arquivo atualizado** se a fundição liberar uma versão corrigida da mesma fonte. Registrar no `CHANGELOG.md`.

---

## Como as fontes são carregadas

Carregamento canônico em `colors_and_type.css`:

```css
@font-face {
  font-family: 'BebasNeue';
  src: url('./fonts/BebasNeue-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'JetBrainsMono';
  src: url('./fonts/JetBrainsMono-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
}

@font-face {
  font-family: 'JetBrainsMono';
  src: url('./fonts/JetBrainsMono-Italic-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 900;
  font-style: italic;
}
```

> Outros HTMLs do projeto que carregam fontes diretamente (sem passar pelo CSS canônico) são **divergências** e devem ser corrigidos para apontar para `colors_and_type.css`.
