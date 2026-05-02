# Formato canônico do CHANGELOG.md

Consultado pela `notion-to-portfolio` e `tese-to-content` quando precisam registar uma mudança.

## Localização

`CHANGELOG.md` (na raiz do repo). **Único** ficheiro de histórico — não criar paralelo.

## Posição da nova entrada

Sempre **no topo** da secção "Histórico", **acima** das entradas anteriores (ordem cronológica decrescente).

## Template

```markdown
### [YYYY-MM-DD] — Título curto da mudança

- Descrição em 1-2 frases do que mudou.
- Arquivo(s) alterado(s): `caminho/relativo/1.ext`, `caminho/relativo/2.ext`.
- Motivo: por que esta mudança aconteceu (pedido do Diego, correção de bug, etc.).
- Revertível por: histórico do Git.
```

## Regras

1. **Data:** formato `YYYY-MM-DD` (ISO 8601), sempre entre colchetes
2. **Título:** uma linha, sem ponto final, em português
3. **Bullets fixas:** as 4 acima são obrigatórias (Descrição, Arquivos, Motivo, Revertível)
4. **Caminhos:** sempre relativos à raiz do repo, em backticks
5. **Idioma:** português (PT-PT)

## Exemplo real (do CHANGELOG atual, 2026-04-26)

```markdown
### [2026-04-26] — Integração do Spotify ajustada para embed oficial

- Atualizado `ui_kits/portfolio/index.html` para priorizar `spotifyEmbedHtml` em `window.SITE_CONFIG`, permitindo colar o código oficial do Spotify diretamente no portfólio.
- Mantido `spotifyPlaylistId` apenas como fallback compacto, evitando espaço vazio quando o layout oficial não estiver sendo usado.
- Registrada em `IDENTIDADE_VISUAL.md` a regra de preservar o layout interno oficial de embeds de terceiros, como o Spotify.
- Arquivo(s) alterado(s): `ui_kits/portfolio/projects-data.js`, `ui_kits/portfolio/index.html`, `IDENTIDADE_VISUAL.md`, `CHANGELOG.md`.
- Motivo: pedido expresso do Diego para usar o layout oficial do Spotify e documentar essa decisão na governança visual do projeto.
- Revertível por: histórico do Git.
```

## Entrada típica de `notion-to-portfolio`

```markdown
### [2026-04-27] — Adicionado projeto "Reconciliação SI2 ↔ Media Monitor"

- Novo bloco em `projects-data.js` (id: 7), categoria `python`, template 2 (narrative-stack), featured true.
- Origem: projeto Notion "Reconciliação de bases sem histórico de transformação", `Status 1=Concluído`.
- Arquivo(s) alterado(s): `ui_kits/portfolio/projects-data.js`, `CHANGELOG.md`.
- Motivo: pedido expresso do Diego — publicar projeto técnico de fuzzy matching no portfolio público.
- Revertível por: histórico do Git.
```

## Entrada típica de `tese-to-content`

```markdown
### [2026-04-27] — Tese "Dado é declaração editorial" publicada como post LinkedIn

- Variante B (tese contraintuitiva) escolhida e publicada via Hub de Conteúdo no Notion.
- Não houve alteração no repo do portfolio (skill `tese-to-content` opera no Notion + OneDrive).
- Arquivo(s) alterado(s): nenhum no repo. Notion: Tese atualizada (`Status=Publicada`, `Virou conteúdo?=true`). OneDrive: `04 - Teses/Drafts longos/2026-04-27 dado-e-declaracao.md`.
- Motivo: ciclo semanal de quinta-feira do workflow de 7 dias.
- Revertível por: histórico do Git (no repo) e versões do OneDrive.
```

(Nota: tese-to-content geralmente **não** edita o repo; só regista entrada no CHANGELOG se afetar o site.)
