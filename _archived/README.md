# `_archived/` — Arquivamento não-destrutivo

Esta pasta cumpre a regra de **não-destrutividade** definida em três lugares canônicos:

- `.claude/CLAUDE.md` §Regras absolutas item 1: *"Não apagar ficheiros. Mover para `99 - Arquivo/` (no OneDrive) ou `archived` (no `projects-data.js`)."*
- `AGENTS.md` §Regra de não-destrutividade: *"Não apagar arquivos."*
- `README.md` raiz §3 NÃO FAZER: *"Não apagar arquivos. No limite, mover para uma pasta de arquivamento."*

Como nem `99 - Arquivo/` (fora do repo) nem o array `archived` em `projects-data.js` são adequados para artefactos de raiz que perderam função (pastas vazias, snapshots, zips de backup), este `_archived/` serve como destino local **dentro do repo, fora do site**.

## O que vive aqui

| Caminho | Origem | Por que foi arquivado |
|---|---|---|
| `Portfolio_duplicado_2026-04-27/` | raiz `Portfólio/` (vazia) | O `README.md` raiz (linhas 36 e 139) declara que essa pasta foi removida em 2026-04-25; ressurgiu vazia em 2026-04-27, provavelmente por re-sync do OneDrive. Movida intacta para preservar a regra de não-deleção. |
| `Portfolio_duplicado_2026-04-27_resync/` | raiz `Portfólio/` (vazia, 2ª aparição) | Após o primeiro `mv`, o OneDrive ressuscitou a pasta vazia na raiz em ~1s. Essa é a 2ª cópia, arquivada com sufixo `_resync`. |
| `snapshots/diego-skills-2026-04-26.zip` | raiz `diego-skills.zip` | Snapshot/backup das skills `.claude/skills/` exportadas em 2026-04-26. As skills "vivas" estão em `.claude/skills/`; este zip é só histórico. |

## Aviso sobre o sync do OneDrive

A pasta `Portfólio/` vazia ressurgiu duas vezes seguidas na raiz mesmo após `mv`. Isso indica que o OneDrive (web/cloud) ainda tem essa pasta em cache e a re-puxa para o disco local. Para parar definitivamente:

1. Abrir [https://onedrive.live.com](https://onedrive.live.com) no navegador.
2. Navegar até `Documentos > GitHub > portfolio` no OneDrive web.
3. Apagar a pasta `Portfólio` lá (na cloud, não no disco).
4. O sync local vai propagar a remoção e a pasta para de ressurgir.

Esta operação é tua, não do agente — a regra de não-destrutividade vincula o agente, mas tu como dono podes apagar diretamente na nuvem. Se voltar a aparecer mesmo assim, mover novamente para cá com sufixo de data/hora.

## Regras locais

- **Nada aqui é fonte de verdade.** Não consumir esta pasta como referência para o site, para skills ou para identidade visual.
- **Nada aqui é apagado.** Se algo deve sair daqui, vai para `99 - Arquivo/` no OneDrive (fora do repo), não é deletado.
- **Esta pasta não deve crescer descontroladamente.** Antes de adicionar novo item, verificar se cabe em `assets/`, `uploads/`, `scraps/` ou no array `archived` de `projects-data.js`.
- **Toda entrada nova aqui é registrada no `CHANGELOG.md`** da raiz.

## Estrutura

```
_archived/
├── README.md                              ← (este)
├── Portfolio_duplicado_2026-04-27/        ← pasta vazia ressurgida
└── snapshots/                             ← zips e backups históricos
    └── diego-skills-2026-04-26.zip
```
