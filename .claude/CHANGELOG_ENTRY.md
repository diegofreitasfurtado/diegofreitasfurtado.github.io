# Entrada sugerida para CHANGELOG.md

Cola esta entrada **no topo** da secção "Histórico" do `CHANGELOG.md` (acima das entradas anteriores).

---

```markdown
### [2026-04-26] — Skills locais para orquestrar Notion ↔ portfolio

- Criada estrutura `.claude/` na raiz do repo, com `CLAUDE.md` (contexto global) e `skills/` (4 skills locais).
- Skill 1 — `inventory-portfolio-candidates`: lista projetos do Notion (Tipo=Portfolio) candidatos a publicação, classificados por completude (verde/amarelo/vermelho). Read-only.
- Skill 2 — `notion-to-portfolio`: materializa projeto do Notion como bloco em `projects-data.js`, respeitando o gate de aprovação do `AGENTS.md` e atualizando o Notion no fim do ciclo.
- Skill 3 — `tese-to-content`: implementa a "Quinta — Produção" do Workflow de 7 dias, gerando 3 variantes de post (história pessoal / tese contraintuitiva / framework prático) a partir de uma Tese.
- Skill 4 — `visual-from-tokens`: gera peças visuais (carrosséis, imagens) consumindo OBRIGATORIAMENTE `colors_and_type.css` e respeitando `IDENTIDADE_VISUAL.md` (sharp, sem blur, paleta congelada).
- Adicionado `.claude/CLAUDE.md` no topo da hierarquia de regras (acima do `README.md` raiz).
- Arquivo(s) alterado(s): `.claude/CLAUDE.md`, `.claude/skills/README.md`, `.claude/skills/inventory-portfolio-candidates/`, `.claude/skills/notion-to-portfolio/`, `.claude/skills/tese-to-content/`, `.claude/skills/visual-from-tokens/`, `CHANGELOG.md`.
- Motivo: pedido expresso do Diego para orquestrar o ecossistema Notion (Second Brain) com o repo do portfolio sob as mesmas regras de governança, mantendo identidade visual forte e segurança nas mudanças.
- Revertível por: histórico do Git.
```
