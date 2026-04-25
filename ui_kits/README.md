# `ui_kits/` — Implementações do site

> Pasta-mãe das implementações navegáveis do portfólio.
> Antes de mexer, ler [`../README.md`](../README.md) e [`../IDENTIDADE_VISUAL.md`](../IDENTIDADE_VISUAL.md).

---

## O que mora aqui

| Subpasta | Função |
|---|---|
| [`portfolio/`](./portfolio/README.md) | Site público — `index.html`, dados, templates, foto |

> Por enquanto há um único kit (`portfolio/`). Outros kits podem ser adicionados (ex.: variações experimentais), desde que **cada novo kit** traga o próprio `README.md` seguindo este padrão.

---

## Regras locais (em adição às da raiz)

### NÃO FAZER

- **Não criar um novo kit** sem pedido expresso.
- **Não cruzar dados entre kits.** Cada kit deve ser autocontido em sua subpasta.
- **Não duplicar** assets ou fontes aqui dentro. Reutilizar de `../assets/` e `../fonts/`.

### O QUE PODE SER FEITO

- **Adicionar um novo kit** somente quando o Diego pedir, criando `ui_kits/{nome-do-kit}/README.md` na mesma operação.
- **Editar conteúdo do site** dentro de `ui_kits/portfolio/` seguindo as regras locais daquele kit.

---

## Convenções para futuras subpastas

Se um novo kit for criado, ele deve obrigatoriamente conter:

1. `README.md` próprio, herdando deste e do README raiz.
2. Um arquivo de dados editável (modelo de `projects-data.js`).
3. Um `index.html` que consuma `../../colors_and_type.css` e os assets de `../../assets/`.
4. Entrada correspondente no `CHANGELOG.md` da raiz.

> **Importante:** o site público hoje vive em `ui_kits/portfolio/`. Não mover sem coordenação — outros arquivos da raiz (e o próprio `index.html` redirector) apontam para esse caminho.
