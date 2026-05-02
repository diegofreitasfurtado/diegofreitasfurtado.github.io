# Contexto do repositório — Diego Furtado Portfolio

Este `CLAUDE.md` é o nível mais alto da hierarquia de regras (acima do `README.md` raiz). Define como qualquer agente — Claude Code, Cowork, ou outro — deve operar neste repo.

## Identidade

Este repositório é o **portfólio público de Diego Freitas Furtado** — Business & Data Analytics Consultant, baseado em Lisboa.

- Idioma primário: **PT-PT**
- Hospedagem: GitHub Pages
- Stack: HTML + React 18 via Babel Standalone (sem build step)

## Hierarquia de regras (vinculante)

Antes de qualquer ação, ler nesta ordem:

```
1. CLAUDE.md (este ficheiro)
2. README.md (raiz)
3. IDENTIDADE_VISUAL.md (soberano em estética)
4. MANUTENCAO_DO_PORTFOLIO.md (fluxo)
5. README.md da subpasta afetada
6. AGENTS.md (executor com gate de aprovação)
```

Em conflito: nível superior vence. **Exceto** identidade visual: `IDENTIDADE_VISUAL.md` é soberano sobre qualquer pedido estético.

## Skills locais

Em `.claude/skills/` há 4 skills que orquestram o fluxo Notion ↔ repo:

- `inventory-portfolio-candidates` — read-only, lista candidatos
- `notion-to-portfolio` — publica projeto Notion no site
- `tese-to-content` — gera post a partir de Tese
- `visual-from-tokens` — gera peças visuais com identidade

Ver `.claude/skills/README.md` para detalhe.

## Regras absolutas (não negociáveis)

1. **Não apagar ficheiros.** Mover para `99 - Arquivo/` (no OneDrive) ou `archived` (no `projects-data.js`).
2. **Não alterar identidade visual** sem pedido expresso do Diego.
3. **Não introduzir dependências novas** sem alinhamento.
4. **Não editar sem aprovação explícita.** O `AGENTS.md` é vinculante.
5. **Toda alteração entra no `CHANGELOG.md`.**

## Convenções de comunicação

- Português europeu (tu/teu, ficheiro, equipa, etc.)
- Resposta direta, código pronto a colar (não fragmentos)
- Preservar estrutura existente — correções precisas e escopadas
- Quando inseguro, **perguntar**, não improvisar

## Integração com Second Brain (Notion)

O Diego usa Notion como Second Brain (método PARA: Projetos, Áreas, Recursos, Capturas + Teses como PI). O repo é a saída pública do que matura no Notion.

Pontos de costura:
- Database `🎯 Projetos` (Tipo=Portfolio) → `ui_kits/portfolio/projects-data.js`
- Database `💡 Teses` (Status=Publicável) → posts no Hub de Conteúdo
- Pasta no OneDrive de cada projeto → fonte de imagens via Microsoft 365

Ver as skills em `.claude/skills/` para fluxos concretos.

## Validação

Sempre que `projects-data.js` for editado:

```bash
node scripts/validate-portfolio.mjs
```

Se falhar: **reverter** a edição. Não inventar exceção silenciosa.

## Contacto

Diego Freitas Furtado
diegoiribarrem@gmail.com
+351 929 023 731
Lisboa, Portugal
