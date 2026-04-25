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
