# `.claude/skills/` — Skills locais do portfolio

Conjunto de skills que orquestram o ecossistema **Notion (Second Brain) ↔ repo do portfolio**, respeitando os contratos governamentais do projeto.

## Hierarquia de regras (referência)

As skills aqui obedecem à hierarquia definida no `README.md` raiz do repo:

```
1. .claude/CLAUDE.md (contexto global)
2. README.md (raiz do repo)
3. IDENTIDADE_VISUAL.md (soberano em estética)
4. MANUTENCAO_DO_PORTFOLIO.md (fluxo de manutenção)
5. README.md de cada subpasta
6. AGENTS.md (executor com aprovação obrigatória)
```

E ao contrato do Second Brain (`Documents/Second Brain/CODEX.md`) na parte que toca o Notion + OneDrive.

## As 4 skills

| Skill | Direção | Quando usar |
|---|---|---|
| [`inventory-portfolio-candidates/`](./inventory-portfolio-candidates/) | Notion → leitura | "Que projetos tenho prontos para o site?" |
| [`notion-to-portfolio/`](./notion-to-portfolio/) | Notion → repo | "Publica o projeto X no portfolio" |
| [`tese-to-content/`](./tese-to-content/) | Notion → OneDrive + Notion | "Esteira de quinta-feira" / "Produz post da Tese" |
| [`visual-from-tokens/`](./visual-from-tokens/) | repo → OneDrive | "Cria carrossel para o post" |

## Diagrama

```
┌─────────────────────┐     inventory      ┌─────────────────────┐
│   📥 Capturas       │ ◄────────────────  │  🎯 Projetos        │
│   💡 Teses          │                     │  (Tipo=Portfolio)   │
│   📚 Recursos       │                     └──────────┬──────────┘
└──────────┬──────────┘                                │ notion-to-portfolio
           │ tese-to-content                           │ (com gate AGENTS.md)
           ▼                                           ▼
┌─────────────────────┐                     ┌─────────────────────┐
│   OneDrive          │ ◄── visual-from ────│   projects-data.js  │
│   04-Teses/Drafts/  │       tokens        │   (site público)    │
│   05-Mídia/Posts/   │                     └─────────────────────┘
└─────────────────────┘
```

## Princípios partilhados

Todas as skills aqui:

1. **Lêem antes de escrever.** Sempre consultam os documentos canônicos primeiro (`IDENTIDADE_VISUAL.md`, `colors_and_type.css`, schemas do Notion).
2. **Pedem aprovação antes de editar.** O `AGENTS.md` é vinculante.
3. **Registam mudanças.** Edições no repo entram no `CHANGELOG.md`. Edições no Notion ficam no histórico nativo.
4. **Não inventam.** Se faltar dado, pedem ao Diego — não fabricam.
5. **Validam no fim.** `node scripts/validate-portfolio.mjs` corre sempre que `projects-data.js` for tocado.

## Como uma skill encontra outra

Cada `SKILL.md` referencia as adjacentes na secção "Próximo passo sugerido". A sequência típica:

```
1. inventory-portfolio-candidates  →  identifica candidato verde
2. notion-to-portfolio              →  publica no site (com gate)
3. tese-to-content                  →  gera post sobre a Tese
4. visual-from-tokens               →  cria peças visuais do post
```

Mas a ordem é flexível — cada skill pode ser chamada isoladamente.

## Como adicionar uma nova skill

Tem de ser pedido expresso do Diego (segue a regra do `AGENTS.md`).

Critérios:
- Resolve uma costura **que não está coberta** pelas 4 atuais
- Não duplica governança existente (`IDENTIDADE_VISUAL.md`, `MANUTENCAO_DO_PORTFOLIO.md`, etc.)
- Tem trigger claro e descrição de quando usar
- Tem referências a documentos canônicos (não recria regras)

## Manutenção

Quando um documento canônico mudar (ex: `IDENTIDADE_VISUAL.md` ganha um token novo), as skills que referenciam esse documento devem ser revistas. Lista de impactos:

| Documento | Skills afetadas |
|---|---|
| `IDENTIDADE_VISUAL.md` | `visual-from-tokens` (sempre), `notion-to-portfolio` (mapeamento de cor) |
| `colors_and_type.css` | `visual-from-tokens` |
| `projects-data.js` (schema) | `notion-to-portfolio`, `inventory-portfolio-candidates` |
| Schema de DB no Notion | a skill que lê essa DB específica |
| `MANUTENCAO_DO_PORTFOLIO.md` | todas |
| `AGENTS.md` | todas |
