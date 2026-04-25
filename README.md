# Diego Furtado — Portfolio

Portfólio pessoal de **Diego Freitas Furtado** — Business & Data Analytics Consultant — Lisboa, Portugal.

> Este é o **README raiz**. Ele é o nó principal da hierarquia de regras do projeto.
> Toda subpasta tem seu próprio `README.md` que **herda** estas regras e adiciona regras locais.
> **Sempre comece a leitura por aqui.**

---

## 1. Como o projeto é estruturado

```
portfolio/
├── README.md                    ← VOCÊ ESTÁ AQUI (regras gerais + índice)
├── IDENTIDADE_VISUAL.md         ← Identidade visual blindada (cores, fontes, motifs)
├── MANUTENCAO_DO_PORTFOLIO.md   ← Fluxo correto de manutenção (o que fazer / não fazer)
├── GUIA_DO_PORTFOLIO.md         ← Guia rápido de onde está cada coisa
├── CHANGELOG.md                 ← Histórico de alterações
├── colors_and_type.css          ← Tokens canônicos do design system
├── index.html                   ← Página de entrada (redireciona p/ ui_kits/portfolio)
├── tweaks-panel.jsx             ← Painel de ajustes em desenvolvimento
├── .gitignore / .nojekyll
│
├── assets/                      ← Logo + motifs geométricos (BLINDADO)
├── fonts/                       ← BebasNeue + JetBrainsMono (BLINDADO)
├── preview/                     ← Páginas de referência do design system
├── ui_kits/                     ← Implementações do site
│   └── portfolio/               ← Site público (index.html, dados, templates)
├── uploads/                     ← Material bruto enviado pelo Diego
└── scraps/                      ← Sketches descartáveis
```

> **Nota:** uma pasta `Portfólio/` existia aqui como duplicata histórica. Em 2026-04-25 ela foi **removida** após o Diego confirmar que o conteúdo já estava espelhado nos arquivos canônicos da raiz. Ver `CHANGELOG.md`.

Cada subpasta acima tem um `README.md` próprio. A leitura recomendada é **top-down**: raiz → subpasta → arquivo.

---

## 2. Hierarquia de regras (importante)

As regras descem em cascata. Uma regra do nível superior **sempre** vence uma regra do nível inferior, exceto quando o README local restringe ainda mais.

```
1. .claude/CLAUDE.md (regras globais do usuário)
        ↓
2. README.md (raiz)               ← este arquivo
        ↓
3. IDENTIDADE_VISUAL.md           ← veto absoluto sobre estética
        ↓
4. README.md de cada subpasta     ← regras locais
        ↓
5. Comentários dentro do arquivo  ← orientação por arquivo
```

> **Em caso de conflito:** o nível **mais alto** vence, exceto sobre identidade visual — onde `IDENTIDADE_VISUAL.md` é **soberano**.

---

## 3. Regras gerais — leia antes de qualquer alteração

### NÃO FAZER

- **Não apagar arquivos.** No limite, mover para uma pasta de arquivamento e avisar o Diego (regra global do usuário).
- **Não alterar identidade visual** (cores, fontes, motifs, layout, sombras, espaçamento, raio) sem pedido **expresso** do Diego. Ver `IDENTIDADE_VISUAL.md`.
- **Não reorganizar a hierarquia de navegação** (Home / Projetos / Quem sou) sem aprovação prévia.
- **Não reativar a interface pública de adicionar projetos.**
- **Não editar o site publicado** para permitir cadastros de visitantes.
- **Não introduzir bibliotecas ou fontes novas** sem alinhamento prévio.
- **Não criar arquivos READMEs paralelos** em locais que já têm um. Editar o existente.

### O QUE É EDITÁVEL LIVREMENTE

- `ui_kits/portfolio/projects-data.js` — projetos, categorias e textos da página "Quem Sou"
- `ui_kits/portfolio/foto-diego.jpg` — substituir mantendo o mesmo nome
- `CHANGELOG.md` — sempre que houver mudança, registrar
- Conteúdo dos READMEs locais quando o conteúdo da pasta mudar

### Antes de QUALQUER edição, conferir

1. Esta mudança está descrita ou autorizada em algum README ou pedido recente do Diego?
2. Ela respeita `IDENTIDADE_VISUAL.md`?
3. Ela vai ser registrada em `CHANGELOG.md`?

Se a resposta for **não** para qualquer uma — **pergunte antes de mexer**.

---

## 4. Como o Diego edita o site (modelo "comandos")

O objetivo é editar via **comandos textuais** (no chat com o Claude / no VS Code), não clicando em interfaces. Os comandos canônicos são:

- **"Adicionar projeto"** → Claude edita `ui_kits/portfolio/projects-data.js` adicionando um novo bloco com `id` único e registra no `CHANGELOG.md`.
- **"Editar projeto X"** → Claude localiza pelo `title` e altera só os campos pedidos.
- **"Remover projeto X"** → Claude move o bloco para um array `archived` no mesmo arquivo (não deleta) e registra no `CHANGELOG.md`.
- **"Atualizar Quem Sou"** → Claude edita os campos correspondentes em `projects-data.js`.
- **"Trocar foto"** → Claude orienta a substituir `foto-diego.jpg` mantendo o nome.
- **"Mudar cor de categoria"** → **PEDIDO EXPRESSO**. Claude atualiza `IDENTIDADE_VISUAL.md`, `projects-data.js` e `CHANGELOG.md` na mesma operação.
- **"Mudar fonte / paleta / layout"** → **PEDIDO EXPRESSO E ESPECÍFICO**. Sem isso, recusar e pedir confirmação.

Toda alteração entra obrigatoriamente no `CHANGELOG.md`.

---

## 5. Índice de READMEs e arquivos de regra

| Caminho | Função |
|---|---|
| [`README.md`](./README.md) | (este) Regras gerais e índice |
| [`IDENTIDADE_VISUAL.md`](./IDENTIDADE_VISUAL.md) | Visual blindado — soberano sobre estética |
| [`MANUTENCAO_DO_PORTFOLIO.md`](./MANUTENCAO_DO_PORTFOLIO.md) | Fluxo de manutenção |
| [`GUIA_DO_PORTFOLIO.md`](./GUIA_DO_PORTFOLIO.md) | Guia rápido |
| [`CHANGELOG.md`](./CHANGELOG.md) | Histórico de alterações |
| [`assets/README.md`](./assets/README.md) | Regras dos motifs e logos |
| [`fonts/README.md`](./fonts/README.md) | Regras das fontes oficiais |
| [`preview/README.md`](./preview/README.md) | Regras das páginas de referência |
| [`ui_kits/README.md`](./ui_kits/README.md) | Regras do diretório de implementações |
| [`ui_kits/portfolio/README.md`](./ui_kits/portfolio/README.md) | Regras do site público |
| [`uploads/README.md`](./uploads/README.md) | Regras da pasta de material bruto |
| [`scraps/README.md`](./scraps/README.md) | Regras de sketches descartáveis |

> O antigo espelho histórico `Portfólio/` foi removido em 2026-04-25 — não existe mais nem dentro do projeto nem fora dele.

---

## 6. Tecnologias

- **HTML + JSX em runtime** — React 18 + Babel Standalone, sem build step
- **Fontes** — BebasNeue (display) + JetBrainsMono (mono)
- **Dados editáveis** — `ui_kits/portfolio/projects-data.js`
- **Estado de navegação** — `localStorage`
- **Hospedagem** — GitHub Pages (`.nojekyll` na raiz)

---

## 7. Contato

Diego Freitas Furtado
diegoiribarrem@gmail.com
+351 929 023 731
Lisboa, Portugal
