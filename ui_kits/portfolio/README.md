# `ui_kits/portfolio/` — Site público do Diego Furtado

> **Coração do site.** É aqui que o portfólio público vive.
> Antes de mexer, ler [`../../README.md`](../../README.md), [`../../IDENTIDADE_VISUAL.md`](../../IDENTIDADE_VISUAL.md) e [`../README.md`](../README.md).

---

## O que mora aqui

| Arquivo | Função | Editável livremente? |
|---|---|---|
| `index.html` | Aplicação principal — React 18 via Babel Standalone | **NÃO**, só com pedido expresso |
| `project-templates.jsx` | 6 templates visuais de página de projeto | **NÃO**, só com pedido expresso |
| `projects-data.js` | **Fonte de dados** — projetos, categorias e textos do "Quem Sou" | **SIM**, via comando |
| `foto-diego.jpg` | Foto de perfil | **SIM**, substituir mantendo nome |

---

## Regras locais (em adição às da raiz)

### NÃO FAZER

- **Não editar `index.html`** para inserir conteúdo (texto, projeto, link). Conteúdo mora em `projects-data.js`.
- **Não editar `project-templates.jsx`** sem pedido expresso. Os 6 templates são parte da linguagem visual.
- **Não recolocar** a interface pública de adicionar projetos.
- **Não usar** `localStorage` para persistir conteúdo do portfólio (apenas estado de navegação).
- **Não introduzir** dependências novas (libs React, plugins) sem alinhamento.

### O QUE PODE SER FEITO

- **Adicionar / editar / arquivar projetos** em `projects-data.js` (ver formato dentro do arquivo).
- **Atualizar textos do "Quem Sou"** no mesmo arquivo.
- **Substituir `foto-diego.jpg`** mantendo o nome de arquivo.
- **Corrigir bugs funcionais** em `index.html` desde que a alteração seja **funcional**, não estética.

---

## Os 6 templates de página de projeto

Definidos em `project-templates.jsx`. A escolha do template é feita **pelo dado** (`template:` em `projects-data.js`), nunca pelo HTML.

| Template | Linguagem visual |
|---|---|
| `signal-grid` | Grid analítico, leitura rápida de dados |
| `narrative-stack` | Storytelling vertical em camadas |
| `lab-notes` | Caderno de laboratório, processo cru |
| `prototype-collage` | Colagem de protótipos e iterações |
| `analysis-ledger` | Tabela analítica, métricas frias |
| `story-ribbon` | Linha narrativa horizontal |

> A criação de um **7º template** exige pedido expresso e atualização de `IDENTIDADE_VISUAL.md`.

---

## Como o site é editado por comandos (modo Diego)

| Comando do Diego | O que o Claude faz |
|---|---|
| "Adiciona um projeto X" | Edita `projects-data.js`, novo bloco com `id` único, registra no `CHANGELOG.md` |
| "Edita o projeto Y, troca o título" | Localiza pelo `title`, altera só o campo pedido |
| "Arquivar projeto Z" | Move o bloco para `archived` no mesmo arquivo (não deleta), registra |
| "Trocar foto" | Substitui `foto-diego.jpg` mantendo o nome |
| "Atualiza meu Quem Sou" | Edita o bloco correspondente em `projects-data.js` |
| "Mudar a cor da categoria Tableau" | **EXPRESSO.** Atualiza `IDENTIDADE_VISUAL.md`, `projects-data.js` e `CHANGELOG.md` |
| "Reformula o layout" | **NÃO FAZER** sem pedido específico item-a-item. Pedir confirmação. |

---

## Categorias de projeto (cores fixas)

Definidas em `IDENTIDADE_VISUAL.md`. Não inventar categoria nem cor sem pedido.

```
Power BI       → --color-yellow
Tableau        → --color-blue
Python         → --color-red
Experimentos   → --color-pink
Pesquisa       → --color-lavender
```

---

## Tecnologias

- **React 18 + Babel Standalone** — sem build step, JSX é transpilado em runtime.
- **Sem bundler.** O site abre direto via `file://` ou GitHub Pages.
- **Estado de navegação** persistido em `localStorage` (apenas).
- **Fontes** carregadas via `../../colors_and_type.css`.

---

## Onde rodar localmente

```
ui_kits/portfolio/index.html
```

Abrir direto no navegador (Chrome/Firefox). Para testar mudança de dados, salvar `projects-data.js` e dar refresh.
