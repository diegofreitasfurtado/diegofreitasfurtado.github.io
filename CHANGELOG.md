# Changelog — Diego Furtado Portfolio

Histórico de todas as alterações significativas no projeto.  
Formato: `[DATA] — Descrição — Arquivo(s) alterado(s)`

Para reverter uma versão, consulte o histórico de commits no Git ou peça ao designer a versão anterior.

---

## Como registrar uma alteração

Adicione uma entrada neste arquivo sempre que fizer uma mudança, seguindo o formato:

```
### [AAAA-MM-DD]
- Descrição da mudança
- Arquivo(s) alterado(s): exemplo.js
- Motivo: breve justificativa
- Revertível por: nome ou commit hash (se usar Git)
```

---

## Histórico

### [2026-05-02] — Ressincronização do espelho `Portfólio/` para `_archived`
- Arquivada a pasta `Portfólio/`, que tinha ressurgido na raiz com materiais de setup do projeto `viz-copas-do-mundo`, para `_archived/Portfolio_duplicado_2026-05-02/`.
- Mantido o princípio de não-destrutividade: nada foi apagado; o conteúdo saiu apenas da raiz canónica do repositório.
- Arquivo(s) alterado(s): `CHANGELOG.md`, `_archived/Portfolio_duplicado_2026-05-02/`.
- Motivo: restaurar a coerência entre o estado físico do repositório e os documentos canónicos, que tratam `Portfólio/` como duplicata histórica fora da raiz ativa.
- Reversível por: histórico do Git.

### [2026-05-02] — Ajuste de legibilidade nas abas de Projetos e limpeza do rodapé da grade
- Em `ui_kits/portfolio/index.html`: reutilizado o token canônico `--color-lavender-lt` como alias local `--lavlt`, sem criar nova cor fora do design system.
- Em `ui_kits/portfolio/index.html`: a faixa descritiva da aba ativa em `Projetos` agora tem contraste alto; na aba `Tableau`, o texto e o marcador passam a usar o azul claro `--color-lavender-lt` pedido pelo Diego.
- Em `ui_kits/portfolio/index.html`: removido o bloco tracejado com a instrução "Para adicionar projetos, edite projects-data.js no VS Code", deixando a página mais limpa.
- Arquivo(s) alterado(s): `ui_kits/portfolio/index.html`, `CHANGELOG.md`.
- Motivo: pedido expresso do Diego para melhorar a visualização da headline da aba e eliminar o aviso operacional visível ao visitante.
- Reversível por: histórico do Git.

### [2026-05-02] — Foco temporário do portfólio em Tableau e Python (abas ocultas, sem destruição)
- Em `ui_kits/portfolio/projects-data.js`: adicionado `hidden: true` nas categorias `powerbi`, `experimentos` e `pesquisa`. As categorias e seus projetos permanecem no arquivo (regra de não-destrutividade) — apenas deixam de aparecer no site.
- Documentado o novo campo `hidden` no comentário de cabeçalho de `projects-data.js` (seção "CAMPOS DISPONIVEIS POR CATEGORIA").
- Em `ui_kits/portfolio/index.html`: dois filtros mínimos para honrar o flag — linha 341 (`featured` na Home agora ignora projetos de categorias ocultas) e linha 484 (`catKeys` na página Projetos só lista categorias visíveis).
- Observação operacional: durante a edição, o arquivo `projects-data.js` em disco apresentava truncamento pré-existente (terminava mid-token sem o fechamento `};`, sem `archived: []`, vindo da modificação de 2026-04-26). O conteúdo foi reescrito completo em UTF-8 a partir da versão íntegra que o editor mantinha em buffer, restaurando o fechamento. Nenhum projeto foi alterado, removido ou movido.
- Validação `node scripts/validate-portfolio.mjs` executada com sucesso após a alteração.
- Arquivo(s) alterado(s): `ui_kits/portfolio/projects-data.js`, `ui_kits/portfolio/index.html`, `CHANGELOG.md`.
- Motivo: pedido do Diego para focar em Tableau e Python antes de seguir criando mais cases. Mudança reversível removendo as três linhas `hidden: true` do `projects-data.js`; o `index.html` permanece compatível com qualquer estado.
- Revertível por: histórico do Git.

### [2026-04-27] — Organização da raiz, índice atualizado e arquivamento não-destrutivo
- Aplicada retroativamente a entrada pré-redigida em `.claude/CHANGELOG_ENTRY.md` (criação de `.claude/` e das 4 skills locais em 2026-04-26), que ainda não havia sido colada no histórico.
- Atualizado `README.md` raiz para incluir `.claude/CLAUDE.md`, `.claude/skills/` e `SKILL.md` na árvore ASCII (seção 1) e novas linhas correspondentes no índice de READMEs (seção 5), refletindo que `.claude/CLAUDE.md` é nível 1 da hierarquia de regras.
- Criado `_archived/` na raiz como destino de arquivamento não-destrutivo para artefactos que perderam função mas não podem ser apagados (regra blindada em `.claude/CLAUDE.md`, `AGENTS.md` e `README.md`). Adicionado `_archived/README.md` documentando o propósito e as regras locais.
- Movida a pasta `Portfólio/` vazia (ressurgida na raiz em 2026-04-27, apesar do `README.md` declarar a sua remoção em 2026-04-25) para `_archived/Portfolio_duplicado_2026-04-27/`.
- Movido `diego-skills.zip` (snapshot das skills `.claude/skills/` exportadas em 2026-04-26) para `_archived/snapshots/diego-skills-2026-04-26.zip`.
- Validação `node scripts/validate-portfolio.mjs` executada com sucesso.
- Arquivo(s) alterado(s): `CHANGELOG.md`, `README.md`, `_archived/README.md`, `_archived/Portfolio_duplicado_2026-04-27/`, `_archived/snapshots/diego-skills-2026-04-26.zip`.
- Motivo: pedido do Diego para organizar, limpar e estruturar a pasta do portfolio sob as regras do `.claude/`. O pedido inicial era "apagar"; substituído por arquivamento não-destrutivo conforme regra canônica.
- Revertível por: histórico do Git.

### [2026-04-26] — Skills locais para orquestrar Notion ↔ portfolio
- Criada estrutura `.claude/` na raiz do repo, com `CLAUDE.md` (contexto global) e `skills/` (4 skills locais).
- Skill 1 — `inventory-portfolio-candidates`: lista projetos do Notion (Tipo=Portfolio) candidatos a publicação, classificados por completude (verde/amarelo/vermelho). Read-only.
- Skill 2 — `notion-to-portfolio`: materializa projeto do Notion como bloco em `projects-data.js`, respeitando o gate de aprovação do `AGENTS.md` e atualizando o Notion no fim do ciclo.
- Skill 3 — `tese-to-content`: implementa a "Quinta — Produção" do Workflow de 7 dias, gerando 3 variantes de post (história pessoal / tese contraintuitiva / framework prático) a partir de uma Tese.
- Skill 4 — `visual-from-tokens`: gera peças visuais (carrosséis, imagens) consumindo OBRIGATORIAMENTE `colors_and_type.css` e respeitando `IDENTIDADE_VISUAL.md` (sharp, sem blur, paleta congelada).
- Adicionado `.claude/CLAUDE.md` no topo da hierarquia de regras (acima do `README.md` raiz).
- Arquivo(s) alterado(s): `.claude/CLAUDE.md`, `.claude/skills/README.md`, `.claude/skills/inventory-portfolio-candidates/`, `.claude/skills/notion-to-portfolio/`, `.claude/skills/tese-to-content/`, `.claude/skills/visual-from-tokens/`, `CHANGELOG.md`.
- Motivo: pedido expresso do Diego para orquestrar o ecossistema Notion (Second Brain) com o repo do portfolio sob as mesmas regras de governança, mantendo identidade visual forte e segurança nas mudanças.
- Revertível por: histórico do Git (entrada aplicada retroativamente em 2026-04-27).

### [2026-04-26] — Integração do Spotify ajustada para embed oficial
- Atualizado `ui_kits/portfolio/index.html` para priorizar `spotifyEmbedHtml` em `window.SITE_CONFIG`, permitindo colar o código oficial do Spotify diretamente no portfólio.
- Mantido `spotifyPlaylistId` apenas como fallback compacto, evitando espaço vazio quando o layout oficial não estiver sendo usado.
- Registrada em `IDENTIDADE_VISUAL.md` a regra de preservar o layout interno oficial de embeds de terceiros, como o Spotify.
- Arquivo(s) alterado(s): `ui_kits/portfolio/projects-data.js`, `ui_kits/portfolio/index.html`, `IDENTIDADE_VISUAL.md`, `CHANGELOG.md`.
- Motivo: pedido expresso do Diego para usar o layout oficial do Spotify e documentar essa decisão na governança visual do projeto.
- Revertível por: histórico do Git.

### [2026-04-26] — Ajuste de altura do embed do Spotify na home
- Aumentada a altura do player incorporado do Spotify na seção inicial do portfólio, saindo de `152` para `304` pixels.
- A mudança preserva a largura existente e cria mais respiro visual para a capa da playlist e a lista de faixas dentro do embed.
- Arquivo(s) alterado(s): `ui_kits/portfolio/index.html`, `CHANGELOG.md`.
- Motivo: pedido expresso do Diego para ampliar visualmente a playlist sem alterar a estrutura geral da home.
- Revertível por: histórico do Git.

### [2026-04-26] — Verificação de encoding e padronização UTF-8
- Revisado o conjunto principal de arquivos de texto do projeto para confirmar consistência de UTF-8.
- Confirmado que o conteúdo textual principal já estava salvo em UTF-8; parte do "mojibake" percebido vinha da exibição do terminal, não do conteúdo persistido nos arquivos.
- Mantidos `.editorconfig` e `.gitattributes` como base de proteção para futuras edições em UTF-8.
- Arquivo(s) alterado(s): `CHANGELOG.md`.
- Motivo: pedido expresso do Diego para revisar o encoding e padronizar o projeto em UTF-8.
- Revertível por: histórico do Git.

### [2026-04-26] — Governança operacional, centralização de conteúdo e validação local
- Criado `AGENTS.md` na raiz como **executor operacional** do Codex, explicitando que os arquivos `.md` existentes são os detentores das regras e que toda execução exige aprovação explícita do Diego antes de alterar qualquer arquivo.
- Atualizados `README.md`, `MANUTENCAO_DO_PORTFOLIO.md`, `GUIA_DO_PORTFOLIO.md` e `ui_kits/portfolio/README.md` para incorporar o papel do `AGENTS.md`, a exigência de aprovação prévia e o fluxo de validação local.
- Criados `.editorconfig` e `.gitattributes` para reforçar UTF-8 e reduzir risco de problemas de encoding nos arquivos do projeto.
- Reestruturado `ui_kits/portfolio/projects-data.js` para consolidar:
  - `categories` alinhadas à identidade visual canônica;
  - `about` com conteúdo bilíngue da página "Quem Sou";
  - `projects`;
  - `archived` para arquivamento seguro de projetos, sem deleção.
- Atualizado `ui_kits/portfolio/index.html` para consumir `colors_and_type.css` como fonte canônica de tokens e hidratar textos da experiência "Quem Sou" a partir de `projects-data.js`.
- Criados `scripts/validate-portfolio.mjs` e `scripts/README.md` para validação estrutural local de `projects-data.js`.
- Validação executada com sucesso usando o runtime local do workspace.
- Motivo: pedido expresso do Diego para fortalecer a estrutura do projeto, colocar o `AGENTS.md` como executor com aprovação obrigatória e melhorar a segurança de manutenção do portfólio.
- Revertível por: histórico do Git.

### [2026-04-25] — Limpeza de referências duplicadas
- Reescrito `MANUTENCAO_DO_PORTFOLIO.md` para refletir a arquitetura real do projeto (removidas as menções a `editor.html`, `data/portfolio-content.js` e `data/change-log.js`, que **não existem**).
- Reescrito `GUIA_DO_PORTFOLIO.md` como um **índice rápido** apontando para os documentos canônicos, sem duplicar regras.
- Validados os 13 links do README raiz e os 14 links cruzados das subpastas — todos válidos.
- Resultado: cada regra mora em **um único arquivo canônico**. Os outros documentos só apontam para ele.
- Motivo: pedido expresso do Diego — "limpe referências duplicadas e faça uma verificação final".
- Revertível por: histórico do Git.

### [2026-04-25] — Limpeza dos portfólios duplicados
- Removida a pasta `Portfólio/` da raiz do projeto (era espelho de duplicatas).
- Removida a pasta `Portfólio-espelho-historico/` do desktop (mesmo conteúdo, agora desnecessário).
- Atualizadas as referências no `README.md` raiz para refletir a estrutura final.
- Resultado: existe **um único portfólio**, em `C:\Users\dfrei\OneDrive\Documentos\GitHub\portfolio\`, com a hierarquia padronizada (raiz + 7 subpastas com README cada).
- Motivo: pedido expresso do Diego — "apague todo portfolio que não for original e mantenha só o principal".
- Revertível por: histórico do Git.

### [2026-04-25] — Padronização da hierarquia e blindagem visual
- Criação do arquivo **`IDENTIDADE_VISUAL.md`** na raiz, congelando paleta, tipografia, espaçamento, sombras, motifs e logos. Soberano sobre estética.
- Reescrita do **`README.md`** raiz: agora é o nó principal da hierarquia, com regras gerais, índice e modelo "edição por comandos".
- Criação de **README.md em cada subpasta**, herdando regras da raiz e adicionando regras locais:
  - `assets/README.md`
  - `fonts/README.md`
  - `preview/README.md`
  - `ui_kits/README.md`
  - `ui_kits/portfolio/README.md` (reescrito)
  - `uploads/README.md`
  - `scraps/README.md`
  - `Portfólio/README.md` (marcado como "espelho histórico" — depois removido na limpeza do mesmo dia)
- Hierarquia explícita de regras: `CLAUDE.md` → `README.md` raiz → `IDENTIDADE_VISUAL.md` → README local → comentários em arquivo.
- Arquivo(s) alterado(s): `README.md`, novos `IDENTIDADE_VISUAL.md` e 8 READMEs em subpastas.
- Motivo: Pedido do Diego — portfólio estruturado, organizado, editável por comandos, com identidade visual blindada.
- Nada foi apagado (regra global do usuário).
- Revertível por: histórico do Git.

### [2026-04-25] — Reestruturação inicial do portfólio
- Reestruturação completa do portfólio
- Nova arquitetura: `projects-data.js` como fonte de dados editável
- Categorias de projeto: Power BI, Tableau, Python, Experimentos, Pesquisa
- 6 templates de página de projeto criados (`project-templates.jsx`)
- Página "Quem Sou" com foto, bio, experiência e formação
- Home com espaço para playlist Spotify
- Remoção do botão público de adição de projetos
- Arquivo(s) alterado(s): `index.html`, `projects-data.js`, `project-templates.jsx` (novo), `README.md` (novo), `CHANGELOG.md` (novo)
- Motivo: Solicitação do Diego — reestruturação de conteúdo e hierarquia
- Revertível por: versão anterior disponível no histórico do projeto

---

<!-- Adicione novas entradas ACIMA desta linha, em ordem cronológica decrescente -->
