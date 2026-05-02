# Manutenção do Portfolio

Documento de **fluxo de manutenção** do site. Complementa, não substitui, [`README.md`](./README.md) e [`IDENTIDADE_VISUAL.md`](./IDENTIDADE_VISUAL.md).
O [`AGENTS.md`](./AGENTS.md) executa este fluxo, mas não cria regra nova.

> **Hierarquia de regras:** `CLAUDE.md` global → `README.md` raiz → `IDENTIDADE_VISUAL.md` → README local da pasta → comentários no arquivo.

---

## O que NÃO fazer

- Não executar mudanças sem aprovação explícita do Diego.
- Não alterar cores, tipografia, layout, sombras, espaçamento, motifs ou logos sem **pedido expresso** do Diego. Ver [`IDENTIDADE_VISUAL.md`](./IDENTIDADE_VISUAL.md).
- Não mexer na hierarquia principal `Home > Projetos > Quem sou` sem alinhamento.
- Não reativar a interface pública de adicionar projetos.
- Não editar o site publicado para permitir cadastros de visitantes.
- Não introduzir bibliotecas, fontes ou dependências novas sem alinhamento.
- Não duplicar arquivos de regra (README, CHANGELOG, IDENTIDADE_VISUAL) em outras pastas.

---

## Onde fica cada coisa (estrutura real do projeto)

| Caminho | Função |
|---|---|
| `ui_kits/portfolio/index.html` | Layout público do site (React + Babel Standalone) |
| `ui_kits/portfolio/projects-data.js` | **Conteúdo editável** — projetos, categorias, "Quem Sou" |
| `ui_kits/portfolio/project-templates.jsx` | Os 6 templates visuais de página de projeto |
| `ui_kits/portfolio/foto-diego.jpg` | Foto de perfil |
| `colors_and_type.css` | Tokens canônicos do design system |
| `assets/` | Logos e motifs |
| `fonts/` | BebasNeue + JetBrainsMono |
| `IDENTIDADE_VISUAL.md` | Visual blindado |
| `CHANGELOG.md` | Histórico |

---

## Fluxo correto de edição

O modelo é **edição por comandos** no chat com o Claude (ou no VS Code).

### Gate de execução do agente

Antes de qualquer edição, o agente deve:

1. informar quais arquivos pretende alterar;
2. resumir o impacto da mudança;
3. pedir aprovação explícita do Diego;
4. só então executar.

Os arquivos `.md` do projeto são os **detentores das regras**. O `AGENTS.md` é apenas o executor e assessor operacional desse processo.

### Comandos canônicos

| Comando do Diego | Onde o Claude edita |
|---|---|
| "Adiciona projeto X" | `ui_kits/portfolio/projects-data.js` (novo bloco com `id` único) |
| "Edita o projeto Y" | `ui_kits/portfolio/projects-data.js` (campo específico) |
| "Arquivar projeto Z" | `ui_kits/portfolio/projects-data.js` (mover para `archived`, não apagar) |
| "Atualiza Quem Sou" | `ui_kits/portfolio/projects-data.js` (bloco "about") |
| "Trocar foto" | substituir `ui_kits/portfolio/foto-diego.jpg` mantendo o nome |
| "Mudar cor de categoria" | **EXPRESSO** — `IDENTIDADE_VISUAL.md` + `projects-data.js` + `CHANGELOG.md` |
| "Mexer no design / fonte / layout" | **EXPRESSO E ESPECÍFICO** — sem isso, recusar |

Toda alteração entra obrigatoriamente em `CHANGELOG.md`.

### Validação recomendada após editar

Quando existir validador local, rodar:

```
node scripts/validate-portfolio.mjs
```

---

## Como reverter

- **Pelo Git:** usar o histórico do repositório para voltar a um commit anterior.
- **Pelo CHANGELOG:** localizar a entrada da mudança a desfazer e reaplicar manualmente o estado anterior.

---

## Quando mexer direto no código

Editar diretamente `ui_kits/portfolio/index.html` ou `project-templates.jsx` **só** quando houver mudança estrutural de layout/comportamento **pedida pelo Diego**.

Para trocar conteúdo (projetos, foto, textos), usar o caminho via `projects-data.js`.
