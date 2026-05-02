# Conteúdo atual do site — espelho para revisão

> Documento de trabalho. Espelha o que está publicado em `ui_kits/portfolio/projects-data.js` em 2026-05-02.
> Não é fonte de verdade — só uma forma legível de revisar a copy. Edite à vontade aqui (rabisque, marque, comente).
> Quando aprovar mudanças, eu aplico no `projects-data.js` via diff + entrada no `CHANGELOG.md`, conforme `AGENTS.md`.

---

## 0. Configurações globais

| Chave | Valor atual |
|---|---|
| `spotifyEmbedHtml` | _(vazio)_ |
| `spotifyPlaylistId` | _(vazio)_ |
| `spotifyLabel` | "O que estou ouvindo" |

---

## 1. Categorias (chips de filtro)

Cada categoria tem **label** (texto do chip) e **desc** (descrição que aparece quando o filtro está ativo). Cores são da identidade visual blindada — não mexer.

### Power BI
- **label:** Power BI
- **desc:** Business Intelligence e visualizacao executiva com Power BI e DAX.

### Tableau
- **label:** Tableau
- **desc:** Dashboards analiticos e exploracao visual de dados com Tableau.

### Python
- **label:** Python
- **desc:** Automacao, ETL, analise exploratoria e engenharia de dados com Python.

### Experimentos
- **label:** Experimentos
- **desc:** Projetos com tecnologias emergentes, ideias experimentais e prototipagem.

### Pesquisa
- **label:** Pesquisa
- **desc:** Ensaios, analises e documentacao de pesquisas em dados, midia e comunicacao.

> ⚠️ Nota: as descrições estão sem acento (provavelmente para evitar problemas de codificação no JS). Se quisermos voltar a acentuar, é uma decisão a tomar — a fonte JetBrainsMono renderiza bem acentos.

---

## 2. Sobre — Português

### 2.1 Hero / Quote (frase grande na entrada do bloco "Sobre")
> Analista de dados senior em Lisboa. Mestre em Midia e Tecnologias Visuais. Background em jornalismo investigativo.

### 2.2 Subtitle (linha menor abaixo da quote)
> Business & Data Analytics Consultant. Focado em transformar dados em crescimento estrategico e performance de negocio.

### 2.3 Nome do bloco bio
**Diego Freitas Furtado**

### 2.4 Bio — 3 parágrafos
1. Analista de dados e consultor baseado em Lisboa, Portugal. Formacao em Jornalismo e pos-graduacao em Ciencia de Dados e IA pela PUCRS — uma combinacao que me permite transformar analises tecnicas em narrativas claras para tomadores de decisao.
2. Atualmente na MOP (Multimedia Outdoors Portugal), unificando fontes de dados em SSOT, automatizando pipelines ETL e construindo dashboards executivos para Vendas, Marketing, Operacoes e Financeiro.
3. Acredito que todo dado e uma declaracao sobre o mundo — e que a diferenca entre um relatorio e uma decisao esta em como voce conta a historia.

### 2.5 Experiência

**Business Development Consultant** · MOP — Multimedia Outdoors Portugal · Lisboa, Portugal · _Abr 2024 — Presente_
- Unificacao de dados SQL, Excel e API em SSOT — melhorando qualidade e alinhamento
- Automacao ETL com Python e Power Query (M) — economia de ~30h/mes
- Reducao de 4x no tempo de refresh do dashboard Power BI comercial
- Dashboards de KPI para liderancas de Vendas e Marketing
- Ferramentas de proposta com 50% mais velocidade de entrega
- Mapeamento end-to-end de processos em Vendas, Operacoes e Financeiro

**Assistente de Comunicacao & Social Media Insights** · PUCRS — Pontificia Universidade Catolica do RS · Porto Alegre, Brasil · _Mai 2017 — Out 2023_
- Analise de alcance, engajamento e performance em canais institucionais
- Dashboards e KPI para planejamento de conteudo e campanhas
- Consolidacao de relatorios multiplataforma em dashboard unico
- Apoio a aumento de 3x no orcamento de midias sociais
- Progressao: Estagiario (2017) → Assistente (2019) → Associado (2021)

### 2.6 Formação
- **Mestrado em Midia, Cultura e Tecnologias Visuais** · PUCRS · 2020-2022 · _Aprovado com louvor_
- **Pos-graduacao em Ciencia de Dados e IA** · PUCRS · 2021-2022 · _Bolsa por merito academico_
- **Bacharelado em Jornalismo** · PUCRS · 2015-2019 · _Porto Alegre, Brasil_

### 2.7 Skills
- **BI & Visualizacao:** Power BI (DAX, M), Tableau, Looker, Excel avancado
- **Dados & Engenharia:** SQL · BigQuery, Python · Pandas, ETL · Power Query, Integracao multifonte
- **Estrategia:** KPI Design, Analise competitiva, Data Storytelling, Automacao de processos
- **Idiomas:** Portugues (nativo), Ingles (profissional)

### 2.8 Rodapé
© 2026 Diego Furtado · Lisboa

---

## 3. About — English

### 3.1 Quote
> Senior data analyst based in Lisbon. Master's in Media and Visual Technologies. Background in investigative journalism.

### 3.2 Subtitle
> Business & Data Analytics Consultant. Focused on transforming data into strategic growth and business performance.

### 3.3 Bio
1. Data analyst and consultant based in Lisbon, Portugal. Background in Journalism and postgraduate degree in Data Science and AI from PUCRS — a combination that allows me to transform technical analyses into clear narratives for decision-makers.
2. Currently at MOP (Multimedia Outdoors Portugal), unifying data sources into a SSOT, automating ETL pipelines and building executive dashboards for Sales, Marketing, Operations and Finance.
3. I believe every data point is a statement about the world — and that the difference between a report and a decision lies in how you tell the story.

### 3.4 Experience

**Business Development Consultant** · MOP — Multimedia Outdoors Portugal · Lisbon, Portugal · _Apr 2024 — Present_
- Unified SQL, Excel and API data into a SSOT — improving quality and alignment
- ETL automation with Python and Power Query (M) — ~30h/month saved
- 4x reduction in commercial Power BI dashboard refresh time
- KPI dashboards for Sales and Marketing leadership
- Proposal tools with 50% faster delivery speed
- End-to-end process mapping across Sales, Operations and Finance

**Communication & Social Media Insights Assistant** · PUCRS — Pontifical Catholic University of RS · Porto Alegre, Brazil · _May 2017 — Oct 2023_
- Analysis of reach, engagement and performance on institutional channels
- KPI dashboards to guide content planning and campaign decisions
- Consolidated multi-platform reporting into a single dashboard
- Supported a 3x increase in social media budget based on delivered results
- Career progression: Intern (2017) → Assistant (2019) → Communication Associate (2021)

### 3.5 Education
- **Master's in Media, Culture and Visual Technologies** · PUCRS · 2020-2022 · _Approved with honors_
- **Postgraduate in Data Science and AI** · PUCRS · 2021-2022 · _Merit-based scholarship_
- **Bachelor's in Journalism** · PUCRS · 2015-2019 · _Porto Alegre, Brazil_

### 3.6 Skills
- **BI & Visualization:** Power BI (DAX, M), Tableau, Looker, Advanced Excel
- **Data & Engineering:** SQL · BigQuery, Python · Pandas, ETL · Power Query, Multi-source integration
- **Strategy:** KPI Design, Competitive analysis, Data Storytelling, Process automation
- **Languages:** Portuguese (native), English (professional)

### 3.7 Footer
© 2026 Diego Furtado · Lisbon

---

## 4. Projetos publicados (6)

> Cada projeto tem `id`, `category`, `template` (1-6, define layout), `featured`, e o conteúdo abaixo.
> `featured: true` aparece em destaque na home; `false` só aparece quando o filtro da categoria é selecionado.

### Projeto #1 · Fonte Unica de Verdade · `powerbi` · template 1 · ⭐ featured
- **subtitle:** SSOT comercial para lideranca de Vendas e Marketing
- **year:** 2024-2025
- **tools:** Power BI, DAX, SQL, Excel
- **tags:** SSOT, KPI, Vendas, Marketing, BI
- **desc:**
  > Unificacao de dados dispersos em SQL, Excel e APIs em um Single Source of Truth (SSOT) robusto para a area comercial da MOP.
  >
  > O projeto eliminou inconsistencias entre fontes, permitiu que liderancas de Vendas, Marketing, Operacoes e Financeiro trabalhassem com os mesmos numeros em tempo real — e acabou com a paralisia de decisao causada por relatorios contraditorios.
  >
  > O dashboard foi construido com foco em clareza executiva: cada visual tem um proposito, cada metrica tem um dono.
- **results:** 4x reducao no tempo de refresh · 100% alinhamento entre areas · 4 departamentos integrados
- **imageCaption:** Dashboard executivo — KPIs de Vendas & Marketing
- **embedUrl / codeSnippet:** _(vazios)_

---

### Projeto #2 · Painel de Precificacao · `powerbi` · template 6 · não-featured
- **subtitle:** Benchmarking e estrategia de bid para midia OOH
- **year:** 2024
- **tools:** Power BI, Excel, SQL
- **tags:** Precificacao, OOH, Midia, Estrategia
- **desc:**
  > Dashboard de analise competitiva e precificacao de midia Out-of-Home para apoiar a estrategia de propostas comerciais da MOP.
  >
  > O painel cruza dados de mercado, historico de campanhas e performance por praca geografica para identificar oportunidades de pricing e pontos de perda competitiva.
  >
  > Ferramentas de proposta geradas pelo sistema aumentaram a velocidade de entrega em 50%.
- **results:** 50% mais velocidade em propostas · 3 mercados mapeados
- **imageCaption:** Painel de benchmarking competitivo
- **embedUrl / codeSnippet:** _(vazios)_

---

### Projeto #3 · Audiencia Institucional · `tableau` · template 1 · ⭐ featured
- **subtitle:** Consolidacao de metricas multiplataforma — PUCRS
- **year:** 2019-2023
- **tools:** Tableau, Google Analytics, Google Sheets
- **tags:** Social Media, Audiencia, Analytics, Comunicacao
- **desc:**
  > Consolidacao de dados de redes sociais, email marketing e web analytics em um unico painel de audiencia para a PUCRS.
  >
  > O projeto unificou metricas antes dispersas em planilhas manuais em um dashboard unico e automatizado — permitindo que a equipe de comunicacao tomasse decisoes de conteudo baseadas em dados reais de performance.
  >
  > O trabalho sustentou um aumento de 3x no orcamento de midias sociais ao demonstrar ROI mensuravel em eventos e campanhas institucionais.
- **results:** 3x aumento de orcamento em social · 1 dashboard unificado (antes eram 12 planilhas)
- **imageCaption:** Painel de audiencia multiplataforma
- **embedUrl / codeSnippet:** _(vazios)_

---

### Projeto #4 · Automacao de ETL · `python` · template 2 · ⭐ featured
- **subtitle:** Pipelines automaticos com Python e Power Query
- **year:** 2024
- **tools:** Python, Pandas, Power Query (M), SQL
- **tags:** ETL, Automacao, Pipeline, Pandas
- **desc:**
  > Desenvolvimento de pipelines ETL automatizados com Python (Pandas) e M (Power Query) para eliminar trabalho manual de coleta, transformacao e carga de dados na MOP.
  >
  > O processo anterior envolvia exportacoes manuais, copias entre planilhas e reconciliacao manual de fontes — consumindo ~30 horas por mes de trabalho operacional.
  >
  > Apos a automacao: dados chegam processados, validados e prontos para analise. O tempo de refresh do dashboard Power BI caiu de 4 horas para 1 hora.
- **results:** 30h economizadas por mes · 4x mais rapido no refresh · 0 erros manuais de dados
- **imageCaption:** Fluxo do pipeline de dados
- **codeSnippet:** _(presente — bloco Python de ~30 linhas com pipeline de ETL exemplo, lendo CSVs e exportando parquet)_

---

### Projeto #5 · NLP em Releases · `experimentos` · template 5 · não-featured
- **subtitle:** Processamento de linguagem natural aplicado a comunicacao institucional
- **year:** 2022
- **tools:** Python, spaCy, HuggingFace, Jupyter
- **tags:** NLP, Jornalismo, IA, Linguistica
- **desc:**
  > Experimento de analise de sentimento e extracao de entidades em releases institucionais da PUCRS usando Python e modelos de NLP.
  >
  > O objetivo foi explorar se e possivel prever a cobertura jornalistica com base em caracteristicas linguisticas do press release — tom, densidade de informacao, presenca de citacoes e dados quantitativos.
  >
  > Projeto em carater exploratorio. Resultados parciais indicam correlacao entre presenca de dados no primeiro paragrafo e maior taxa de cobertura.
- **results:** 200+ releases analisados · 74% acuracia de sentimento
- **imageCaption:** Mapa de entidades extraidas dos releases
- **embedUrl / codeSnippet:** _(vazios)_

---

### Projeto #6 · Dados como Declaracao · `pesquisa` · template 3 · ⭐ featured
- **subtitle:** Ensaio — A epistemologia do numero em jornalismo de dados
- **year:** 2021
- **tools:** R, PUCRS, Revisao bibliografica
- **tags:** Epistemologia, Jornalismo de dados, Teoria, Metodologia
- **desc:**
  > Todo dado e uma declaracao sobre o mundo. A escolha de o que medir, como medir e como apresentar nao e neutra — e editorial.
  >
  > Este ensaio explora como o jornalismo de dados herdou tensoes da estatistica classica (o que e significativo?) e do jornalismo narrativo (o que e verdadeiro?), e como essa heranca dupla cria tanto sua forca quanto seus pontos cegos.
  >
  > Articula-se em torno de tres casos de uso — visualizacoes eleitorais, dashboards de saude publica e rankings universitarios — para argumentar que a transparencia metodologica e o equivalente moderno da assinatura do reporter.
  >
  > Escrito durante o Mestrado em Midia, Cultura e Tecnologias Visuais na PUCRS (2020-2022).
- **results:** Aprovado com louvor no Mestrado · 3 estudos de caso analisados
- **imageCaption:** _(vazio)_
- **embedUrl / codeSnippet:** _(vazios)_

---

## 5. Arquivados
_Nenhum projeto arquivado no momento._

---

## Como usar este documento

1. **Edite aqui** o que quiser trocar — pode rabiscar, riscar, reescrever, comentar com `← TROCAR POR: ...`
2. **Inglês:** se mudar texto em PT, marque se quer que eu reescreva o EN equivalente, ou se vai escrever você mesmo
3. **Quando enviar de volta**, eu transformo as marcações em diff sobre `projects-data.js` e te mostro antes de aplicar
4. **Não mexa** nas chaves técnicas (`id`, `category`, `template`, `accent`, `var(--blue)`) — essas amarram com o código de renderização

### Pontos que talvez você queira repensar
- **Acentos:** todo o texto está sem acento. É escolha intencional ou herança da migração? Se quiser reativar, eu testo se o JS aguenta UTF-8 (deveria).
- **Subtitle do hero (PT):** "Business & Data Analytics Consultant" está em inglês mesmo na versão PT — proposital ou trocar por "Consultor de Business & Data Analytics"?
- **Bio paragraph 3 (PT):** "todo dado e uma declaracao sobre o mundo" repete literalmente o título do Projeto #6. Pode ser feature (eco intencional) ou bug (redundância) — você decide.
- **Spotify embed:** está vazio. Quer ativar?
- **Projetos arquivados:** lista vazia. Tem caso antigo que quer mover para lá em vez de remover?
