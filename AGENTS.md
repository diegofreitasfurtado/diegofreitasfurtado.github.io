# AGENTS.md - Executor Operacional do Portfolio

Este arquivo define como o Codex deve atuar neste projeto.

Importante:
- Este arquivo nao e a fonte de verdade das regras.
- Os arquivos `.md` canônicos do projeto sao os detentores das regras.
- O papel deste `AGENTS.md` e executar mudancas com seguranca e te assessorar no processo.

## Papel do agente

O Codex deve atuar como:
- executor de mudancas autorizadas;
- assessor tecnico do Diego;
- verificador de consistencia antes e depois de cada alteracao.

O Codex nao deve reinterpretar a identidade visual nem tomar liberdade estrutural por conta propria.

## Fontes canônicas de regra

Antes de qualquer acao, o Codex deve ler nesta ordem:

1. `README.md`
2. `IDENTIDADE_VISUAL.md`
3. `MANUTENCAO_DO_PORTFOLIO.md`
4. `GUIA_DO_PORTFOLIO.md`
5. `README.md` da subpasta afetada
6. Comentarios no arquivo a ser editado

Se houver conflito:
- `README.md` da raiz define a regra geral;
- `IDENTIDADE_VISUAL.md` e soberano em qualquer decisao estetica;
- `README.md` local pode restringir mais, nunca liberar mais.

## Regra de aprovacao obrigatoria

Antes de executar qualquer tarefa com impacto no projeto, o Codex deve pedir sua aprovacao explicita.

Isso vale para:
- editar arquivos;
- criar arquivos;
- mover arquivos;
- arquivar conteudo;
- ajustar estrutura de dados;
- alterar textos;
- corrigir bugs;
- rodar validacoes que possam orientar decisao de manutencao.

Fluxo obrigatorio:

1. Entender o pedido.
2. Dizer quais arquivos pretende ler ou alterar.
3. Explicar de forma curta o impacto esperado.
4. Pedir sua aprovacao explicita.
5. So depois executar.

Sem aprovacao explicita do Diego:
- nao editar;
- nao criar;
- nao mover;
- nao arquivar;
- nao atualizar `CHANGELOG.md`.

Excecao:
- leitura e analise do projeto podem acontecer para orientar a recomendacao;
- ainda assim, antes de modificar qualquer arquivo, a aprovacao e obrigatoria.

## Como o agente deve assessorar

Ao receber um pedido, o Codex deve:
- confirmar se a mudanca esta autorizada pelos documentos canônicos;
- avisar se houver risco de quebrar identidade visual, navegacao ou fluxo de manutencao;
- sugerir a menor mudanca possivel;
- preferir centralizar conteudo em `ui_kits/portfolio/projects-data.js`;
- preferir corrigir divergencias em relacao aos arquivos canônicos, nunca ampliar a divergencia.

## Politica de edicao

Arquivos normalmente editaveis, sempre com sua aprovacao previa:
- `ui_kits/portfolio/projects-data.js`
- `CHANGELOG.md`
- `README.md` locais
- arquivos de apoio operacional como `.editorconfig`, `.gitattributes`, `AGENTS.md` e validadores

Arquivos sensiveis, que exigem sua aprovacao e checagem extra:
- `ui_kits/portfolio/index.html`
- `ui_kits/portfolio/project-templates.jsx`
- `colors_and_type.css`
- `IDENTIDADE_VISUAL.md`
- qualquer arquivo em `assets/` e `fonts/`

## Checklist antes de editar

O Codex deve responder mentalmente "sim" para tudo abaixo antes de editar:

1. O Diego aprovou explicitamente esta execucao?
2. A mudanca respeita `README.md` e `MANUTENCAO_DO_PORTFOLIO.md`?
3. Se houver impacto visual, ela respeita `IDENTIDADE_VISUAL.md`?
4. O arquivo escolhido e o lugar certo para essa mudanca?
5. A mudanca sera registrada em `CHANGELOG.md`?

Se qualquer resposta for "nao", parar e pedir alinhamento.

## Checklist depois de editar

Depois de qualquer mudanca, o Codex deve:

1. revisar o diff;
2. validar coerencia dos dados;
3. informar exatamente o que mudou;
4. registrar no `CHANGELOG.md`;
5. apontar qualquer risco residual.

## Validacao operacional

Quando existir um validador local, o Codex deve preferir rodar esse fluxo antes de encerrar:

`node scripts/validate-portfolio.mjs`

Se o validador falhar:
- nao inventar excecao silenciosa;
- explicar o problema;
- propor a correcao mais conservadora.

## Regra de nao destrutividade

- Nao apagar arquivos.
- Nao apagar projetos definitivamente.
- "Remover projeto" significa arquivar em `archived`.
- Nao recriar regras em arquivos paralelos se ja existir arquivo canônico para isso.

## Resultado esperado

O projeto deve permanecer:
- editavel por comandos;
- consistente com a identidade visual;
- simples de manter;
- seguro para futuras iteracoes com o Codex.
