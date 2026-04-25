# `assets/` — Logos e motifs geométricos

> **Pasta blindada.** Tudo aqui é parte da identidade visual.
> Antes de mexer, ler [`../README.md`](../README.md) e [`../IDENTIDADE_VISUAL.md`](../IDENTIDADE_VISUAL.md).
> Se houver conflito, **`IDENTIDADE_VISUAL.md` vence**.

---

## O que mora aqui

| Arquivo | Função |
|---|---|
| `logo-branco.svg` | Logo para uso sobre fundo escuro |
| `logo-preto.svg` | Logo para uso sobre fundo claro |
| `ativo-9-starburst.svg` | Motif geométrico — explosão |
| `ativo-11-triangles.svg` | Motif geométrico — triângulos |
| `ativo-12-ovals.svg` | Motif geométrico — ovais |
| `ativo-13-snowflake.svg` | Motif geométrico — floco |
| `ativo-14-squares.svg` | Motif geométrico — quadrados |

---

## Regras locais (em adição às da raiz)

### NÃO FAZER

- **Não substituir** logos ou motifs sem pedido **expresso**.
- **Não recolorir** SVGs aqui dentro. Aplicar cor via CSS no consumidor (`fill="currentColor"` e tokens).
- **Não distorcer, recortar ou aplicar efeitos** na logo.
- **Não renomear** arquivos. O padrão `ativo-{número}-{nome}.svg` é referenciado em outros lugares.
- **Não duplicar** assets aqui que já existam em `uploads/`. `uploads/` é a fonte bruta; `assets/` é a versão otimizada do projeto.

### O QUE PODE SER FEITO

- **Adicionar** um novo motif quando solicitado, desde que:
  1. Construído com a paleta canônica de `IDENTIDADE_VISUAL.md`
  2. Nomeado seguindo o padrão `ativo-{número-incremental}-{descritor}.svg`
  3. Registrado no `CHANGELOG.md`
- **Otimizar SVG** (remover metadados desnecessários) sem alterar o desenho — registrar no `CHANGELOG.md`.

---

## Quem consome esses assets

- `index.html` (página de entrada)
- `ui_kits/portfolio/index.html` (site público)
- `preview/brand-logo.html` e `preview/brand-motifs.html` (páginas de referência)

Antes de **renomear** ou **mover** algo, fazer `Grep` pelo nome do arquivo no projeto inteiro e atualizar todos os consumidores.
