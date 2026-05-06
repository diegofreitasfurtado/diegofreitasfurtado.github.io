/**
 * ============================================================
 * DIEGO FURTADO — DADOS DO PORTFÓLIO
 * Arquivo editável no VS Code. O site lê daqui automaticamente.
 * ============================================================
 *
 * MODELO (revisão 2026-05-03):
 *   Cada projeto tem UMA interest (identidade primária, cor única) +
 *   N technologies + N solutionType (tags secundárias).
 *
 * COMO EDITAR:
 * 1. Abra este arquivo no VS Code.
 * 2. Edite configurações, interests, technologies, solutionType ou projetos.
 * 3. Para "remover" um projeto, mova para `archived` ou marque hidden:true.
 * 4. Salve o arquivo e recarregue o site.
 *
 * CAMPOS DISPONÍVEIS POR PROJETO:
 *   id            : número único
 *   interest      : key de PROJECTS_DATA.interests (1 só)
 *   technologies  : array de strings (subset de PROJECTS_DATA.technologies)
 *   solutionType  : array de keys (subset de PROJECTS_DATA.solutionType)
 *   template      : 1 | 2 | 3 | 4 | 5 | 6
 *   title         : título do projeto (PT)
 *   titleEn       : título em inglês (opcional)
 *   subtitle      : subtítulo curto (PT)
 *   subtitleEn    : subtítulo em inglês (opcional)
 *   desc          : descrição longa (suporta \n para parágrafo)
 *   descEn        : descrição longa em inglês (opcional)
 *   year          : ano ou período
 *   tools         : array de ferramentas (livre, para o cartão)
 *   tags          : array de tags textuais (livre)
 *   results       : array de objetos { value, label }
 *   embedUrl      : URL de iframe (Tableau Public, etc)
 *   codeSnippet   : trecho de código
 *   imageCaption  : legenda para área de imagem
 *   featured      : true | false  -> aparece no destaque da Home
 *   hidden        : true | false  -> oculta do site sem apagar
 * ============================================================
 */

window.SITE_CONFIG = {
  spotifyEmbedHtml: "",
  spotifyPlaylistId: "",
  spotifyLabel: "O que estou ouvindo"
};

window.PROJECTS_DATA = {
  /* ── Interests (4) — identidade primária do projeto ────────
     Cada projeto escolhe UMA. Cor consumida em IDENTIDADE_VISUAL.md §8.
  ─────────────────────────────────────────────────────────── */
  interests: {
    tecnologia: {
      pt: "Tecnologia",
      en: "Technology",
      color: "#1B2585",      // --color-blue
      colorSoft: "#C5CCEB",  // --color-lavender-lt
      colorDark: "#0C0D2A",  // --color-navy
      textOnColor: "#FFFFFF"
    },
    esportes: {
      pt: "Esportes",
      en: "Sports",
      color: "#9494C8",      // --color-lavender
      colorSoft: "#C5CCEB",  // --color-lavender-lt
      colorDark: "#0C0D2A",
      textOnColor: "#FFFFFF"
    },
    entretenimento: {
      pt: "Entretenimento",
      en: "Entertainment",
      color: "#E0003D",      // --color-red
      colorSoft: "#D45E7A",  // --color-red-mid
      colorDark: "#1A0008",
      textOnColor: "#FFFFFF"
    },
    experimentos: {
      pt: "Experimentos",
      en: "Experiments",
      color: "#F07090",      // --color-pink
      colorSoft: "#F5A8B8",  // --color-pink-light
      colorDark: "#0C0D2A",
      textOnColor: "#FFFFFF"
    },
    leituras: {
      pt: "Leituras",
      en: "Reading",
      color: "#7C1261",      // --plum
      colorSoft: "#D4A0C8",
      colorDark: "#3D0830",
      textOnColor: "#FFFFFF"
    }
  },

  /* ── Technologies (12) — tags secundárias ──────────────────
     Lista canônica. Cada projeto referencia exatamente estas strings.
  ─────────────────────────────────────────────────────────── */
  technologies: [
    "Power BI",
    "DAX",
    "M Language",
    "SQL",
    "Python",
    "Pandas",
    "Excel",
    "Tableau",
    "Looker",
    "spaCy",
    "Claude Code",
    "CODEX"
  ],

  /* ── Solution Type (5) — tags secundárias ──────────────────
     Cada projeto pode ter N entradas.
  ─────────────────────────────────────────────────────────── */
  solutionType: {
    "data-viz": { pt: "Visualização de Dados", en: "Data Visualization" },
    "data-trt": { pt: "Tratamento de Dados",   en: "Data Treatment" },
    "data-stl": { pt: "Storytelling de Dados", en: "Data Storytelling" },
    "auto":     { pt: "Automação",             en: "Automation" },
    "rsh":      { pt: "Pesquisa",              en: "Research" }
  },

  /* ── About / Quem Sou ──────────────────────────────────── */
  about: {
    pt: {
      quote: "Analista de dados sénior em Lisboa. Mestre em Mídia e Tecnologias Visuais. Background em jornalismo investigativo.",
      subtitle: "Business & Data Analytics Consultant. Focado em transformar dados em crescimento estratégico e performance de negócio.",
      bioName: "Diego Freitas Furtado",
      bio: [
        "Analista de dados e consultor baseado em Lisboa, Portugal. Formação em Jornalismo e pós-graduação em Ciência de Dados e IA pela PUCRS — uma combinação que me permite transformar análises técnicas em narrativas claras para tomadores de decisão.",
        "Atualmente na MOP (Multimédia Outdoors Portugal), unificando fontes de dados em SSOT, automatizando pipelines ETL e construindo dashboards executivos para Vendas, Marketing, Operações e Financeiro.",
        "Acredito que todo dado é uma declaração sobre o mundo — e que a diferença entre um relatório e uma decisão está em como você conta a história."
      ],
      experience: [
        {
          role: "Business Development Consultant",
          company: "MOP — Multimédia Outdoors Portugal",
          period: "Abr 2024 — Presente",
          location: "Lisboa, Portugal",
          accent: "var(--blue)",
          bullets: [
            "Unificação de dados SQL, Excel e API em SSOT — melhorando qualidade e alinhamento",
            "Automação ETL com Python e Power Query (M) — economia de ~30h/mês",
            "Redução de 4× no tempo de refresh do dashboard Power BI comercial",
            "Dashboards de KPI para lideranças de Vendas e Marketing",
            "Ferramentas de proposta com 50% mais velocidade de entrega",
            "Mapeamento end-to-end de processos em Vendas, Operações e Financeiro"
          ]
        },
        {
          role: "Assistente de Comunicação & Social Media Insights",
          company: "PUCRS — Pontifícia Universidade Católica do RS",
          period: "Mai 2017 — Out 2023",
          location: "Porto Alegre, Brasil",
          accent: "var(--lav)",
          bullets: [
            "Análise de alcance, engajamento e performance em canais institucionais",
            "Dashboards e KPI para planejamento de conteúdo e campanhas",
            "Consolidação de relatórios multiplataforma em dashboard único",
            "Apoio a aumento de 3× no orçamento de mídias sociais",
            "Progressão: Estagiário (2017) → Assistente (2019) → Associado (2021)"
          ]
        }
      ],
      education: [
        {
          title: "Mestrado em Mídia, Cultura e Tecnologias Visuais",
          note: "Aprovado com louvor",
          school: "PUCRS",
          period: "2020–2022",
          accent: "var(--lav)"
        },
        {
          title: "Pós-graduação em Ciência de Dados e IA",
          note: "Bolsa por mérito acadêmico",
          school: "PUCRS",
          period: "2021–2022",
          accent: "var(--blue)"
        },
        {
          title: "Bacharelado em Jornalismo",
          note: "Porto Alegre, Brasil",
          school: "PUCRS",
          period: "2015–2019",
          accent: "var(--red)"
        }
      ],
      skills: [
        {
          title: "BI & Visualização",
          accent: "var(--blue)",
          items: ["Power BI (DAX, M)", "Tableau", "Looker", "Excel avançado"]
        },
        {
          title: "Dados & Engenharia",
          accent: "var(--red)",
          items: ["SQL · BigQuery", "Python · Pandas", "ETL · Power Query", "Integração multifonte"]
        },
        {
          title: "Estratégia",
          accent: "var(--lav)",
          items: ["KPI Design", "Análise competitiva", "Data Storytelling", "Automação de processos"]
        },
        {
          title: "Idiomas",
          accent: "var(--yellow)",
          items: ["Português (nativo)", "Inglês (profissional)"]
        }
      ],
      footerCopy: "© 2026 Diego Furtado · Lisboa"
    },
    en: {
      quote: "Senior data analyst based in Lisbon. Master's in Media and Visual Technologies. Background in investigative journalism.",
      subtitle: "Business & Data Analytics Consultant. Focused on transforming data into strategic growth and business performance.",
      bioName: "Diego Freitas Furtado",
      bio: [
        "Data analyst and consultant based in Lisbon, Portugal. Background in Journalism and postgraduate degree in Data Science and AI from PUCRS — a combination that allows me to transform technical analyses into clear narratives for decision-makers.",
        "Currently at MOP (Multimedia Outdoors Portugal), unifying data sources into a SSOT, automating ETL pipelines and building executive dashboards for Sales, Marketing, Operations and Finance.",
        "I believe every data point is a statement about the world — and that the difference between a report and a decision lies in how you tell the story."
      ],
      experience: [
        {
          role: "Business Development Consultant",
          company: "MOP — Multimedia Outdoors Portugal",
          period: "Apr 2024 — Present",
          location: "Lisbon, Portugal",
          accent: "var(--blue)",
          bullets: [
            "Unified SQL, Excel and API data into a SSOT — improving quality and alignment",
            "ETL automation with Python and Power Query (M) — ~30h/month saved",
            "4× reduction in commercial Power BI dashboard refresh time",
            "KPI dashboards for Sales and Marketing leadership",
            "Proposal tools with 50% faster delivery speed",
            "End-to-end process mapping across Sales, Operations and Finance"
          ]
        },
        {
          role: "Communication & Social Media Insights Assistant",
          company: "PUCRS — Pontifical Catholic University of RS",
          period: "May 2017 — Oct 2023",
          location: "Porto Alegre, Brazil",
          accent: "var(--lav)",
          bullets: [
            "Analysis of reach, engagement and performance on institutional channels",
            "KPI dashboards to guide content planning and campaign decisions",
            "Consolidated multi-platform reporting into a single dashboard",
            "Supported a 3× increase in social media budget based on delivered results",
            "Career progression: Intern (2017) → Assistant (2019) → Communication Associate (2021)"
          ]
        }
      ],
      education: [
        {
          title: "Master's in Media, Culture and Visual Technologies",
          note: "Approved with honors",
          school: "PUCRS",
          period: "2020–2022",
          accent: "var(--lav)"
        },
        {
          title: "Postgraduate in Data Science and AI",
          note: "Merit-based scholarship",
          school: "PUCRS",
          period: "2021–2022",
          accent: "var(--blue)"
        },
        {
          title: "Bachelor's in Journalism",
          note: "Porto Alegre, Brazil",
          school: "PUCRS",
          period: "2015–2019",
          accent: "var(--red)"
        }
      ],
      skills: [
        {
          title: "BI & Visualization",
          accent: "var(--blue)",
          items: ["Power BI (DAX, M)", "Tableau", "Looker", "Advanced Excel"]
        },
        {
          title: "Data & Engineering",
          accent: "var(--red)",
          items: ["SQL · BigQuery", "Python · Pandas", "ETL · Power Query", "Multi-source integration"]
        },
        {
          title: "Strategy",
          accent: "var(--lav)",
          items: ["KPI Design", "Competitive analysis", "Data Storytelling", "Process automation"]
        },
        {
          title: "Languages",
          accent: "var(--yellow)",
          items: ["Portuguese (native)", "English (professional)"]
        }
      ],
      footerCopy: "© 2026 Diego Furtado · Lisbon"
    }
  },

  /* ── Projetos ──────────────────────────────────────────── */
  projects: [
    /* ════════════════════════════════════════════════════════
       PROJETO ATIVO — único visível no site agora.
    ════════════════════════════════════════════════════════ */
    {
      id: 7,
      interest: "esportes",
      technologies: ["Tableau", "Python", "Pandas", "Excel"],
      solutionType: ["data-viz", "data-trt", "data-stl", "rsh"],
      template: 1,
      featured: true,
      hidden: false,
      title: "Visualização Copa do Mundo",
      titleEn: "Data Viz World Cup",
      subtitle: "Como jogavam as seleções nas Copas do Mundo (1930–2022) — em Tableau Public",
      subtitleEn: "How national teams played in the FIFA World Cup (1930–2022) — in Tableau Public",
      desc: "Projeto autoral de visualização em Tableau Public sobre o histórico das seleções nacionais nas Copas do Mundo da FIFA.\n\nCombina dado macro-histórico (todas as 22 edições, 1930–2022) com análise tática (eventos jogada-a-jogada para 2018+).\n\nA interação central é: selecione um time e veja toda a sua trajetória histórica, comparada às demais seleções.\n\nPipeline reproduzível: Python (requests + pandas) → CSV star schema → Tableau Public Desktop. Modelagem historicamente fiel (Alemanha Ocidental ≠ Alemanha; URSS ≠ Rússia) e rótulos bilíngues PT/EN no próprio dataset.",
      descEn: "Personal data viz project in Tableau Public about FIFA World Cup history.\n\nCombines macro-historical data (all 22 editions, 1930–2022) with tactical analysis (event-level data for 2018+).\n\nThe central interaction: pick a team and see its whole history, compared to every other national side.\n\nReproducible pipeline: Python (requests + pandas) → CSV star schema → Tableau Public Desktop. Historically faithful modelling (West Germany ≠ Germany; USSR ≠ Russia) and bilingual EN/PT labels baked into the dataset.",
      year: "2025–2026",
      tools: ["Tableau Public", "Python", "Pandas", "Excel"],
      tags: ["Tableau Public", "Copa do Mundo", "Futebol", "Storytelling"],
      results: [
        { value: "22", label: "Copas do Mundo (1930–2022)" },
        { value: "1872+", label: "Jogos internacionais na base bruta" },
        { value: "EN/PT", label: "Rótulos bilíngues no dataset" }
      ],
      embedUrl: "",
      codeSnippet: "",
      imageCaption: "Dashboard Tableau — Histórico de seleções na Copa do Mundo"
    },

    /* ════════════════════════════════════════════════════════
       PROJETOS OCULTOS — preservados para retomada futura.
       hidden:true => não renderizados no site, não filtrados,
       mas continuam aqui para o Diego ressuscitar quando quiser.
    ════════════════════════════════════════════════════════ */
    {
      id: 1,
      interest: "tecnologia",
      technologies: ["Power BI", "DAX", "SQL", "Excel"],
      solutionType: ["data-viz", "data-stl"],
      template: 1,
      featured: false,
      hidden: true,
      title: "Fonte Única de Verdade",
      subtitle: "SSOT comercial para liderança de Vendas e Marketing",
      desc: "Unificação de dados dispersos em SQL, Excel e APIs em um Single Source of Truth (SSOT) robusto para a área comercial da MOP.\n\nO projeto eliminou inconsistências entre fontes, permitiu que lideranças de Vendas, Marketing, Operações e Financeiro trabalhassem com os mesmos números em tempo real — e acabou com a paralisia de decisão causada por relatórios contraditórios.\n\nO dashboard foi construído com foco em clareza executiva: cada visual tem um propósito, cada métrica tem um dono.",
      year: "2024–2025",
      tools: ["Power BI", "DAX", "SQL", "Excel"],
      tags: ["SSOT", "KPI", "Vendas", "Marketing", "BI"],
      results: [
        { value: "4×", label: "Redução no tempo de refresh" },
        { value: "100%", label: "Alinhamento entre áreas" },
        { value: "4", label: "Departamentos integrados" }
      ],
      embedUrl: "",
      codeSnippet: "",
      imageCaption: "Dashboard executivo — KPIs de Vendas & Marketing"
    },
    {
      id: 2,
      interest: "tecnologia",
      technologies: ["Power BI", "Excel", "SQL"],
      solutionType: ["data-viz"],
      template: 6,
      featured: false,
      hidden: true,
      title: "Painel de Precificação",
      subtitle: "Benchmarking e estratégia de bid para mídia OOH",
      desc: "Dashboard de análise competitiva e precificação de mídia Out-of-Home para apoiar a estratégia de propostas comerciais da MOP.\n\nO painel cruza dados de mercado, histórico de campanhas e performance por praça geográfica para identificar oportunidades de pricing e pontos de perda competitiva.\n\nFerramentas de proposta geradas pelo sistema aumentaram a velocidade de entrega em 50%.",
      year: "2024",
      tools: ["Power BI", "Excel", "SQL"],
      tags: ["Precificação", "OOH", "Mídia", "Estratégia"],
      results: [
        { value: "50%", label: "Mais velocidade em propostas" },
        { value: "3", label: "Mercados mapeados" }
      ],
      embedUrl: "",
      codeSnippet: "",
      imageCaption: "Painel de benchmarking competitivo"
    },
    {
      id: 3,
      interest: "tecnologia",
      technologies: ["Tableau", "Excel"],
      solutionType: ["data-viz", "data-stl"],
      template: 1,
      featured: false,
      hidden: true,
      title: "Audiência Institucional",
      subtitle: "Consolidação de métricas multiplataforma — PUCRS",
      desc: "Consolidação de dados de redes sociais, email marketing e web analytics em um único painel de audiência para a PUCRS.\n\nO projeto unificou métricas antes dispersas em planilhas manuais em um dashboard único e automatizado — permitindo que a equipa de comunicação tomasse decisões de conteúdo baseadas em dados reais de performance.\n\nO trabalho sustentou um aumento de 3× no orçamento de mídias sociais ao demonstrar ROI mensurável em eventos e campanhas institucionais.",
      year: "2019–2023",
      tools: ["Tableau", "Google Analytics", "Google Sheets"],
      tags: ["Social Media", "Audiência", "Analytics", "Comunicação"],
      results: [
        { value: "3×", label: "Aumento de orçamento em social" },
        { value: "1", label: "Dashboard unificado (antes eram 12 planilhas)" }
      ],
      embedUrl: "",
      codeSnippet: "",
      imageCaption: "Painel de audiência multiplataforma"
    },
    {
      id: 4,
      interest: "tecnologia",
      technologies: ["Python", "Pandas", "M Language", "SQL"],
      solutionType: ["data-trt", "auto"],
      template: 2,
      featured: false,
      hidden: true,
      title: "Automação de ETL",
      subtitle: "Pipelines automáticos com Python e Power Query",
      desc: "Desenvolvimento de pipelines ETL automatizados com Python (Pandas) e M (Power Query) para eliminar trabalho manual de coleta, transformação e carga de dados na MOP.\n\nO processo anterior envolvia exportações manuais, cópias entre planilhas e reconciliação manual de fontes — consumindo ~30 horas por mês de trabalho operacional.\n\nApós a automação: dados chegam processados, validados e prontos para análise. O tempo de refresh do dashboard Power BI caiu de 4 horas para 1 hora.",
      year: "2024",
      tools: ["Python", "Pandas", "Power Query (M)", "SQL"],
      tags: ["ETL", "Automação", "Pipeline", "Pandas"],
      results: [
        { value: "30h", label: "Economizadas por mês" },
        { value: "4×", label: "Mais rápido no refresh" },
        { value: "0", label: "Erros manuais de dados" }
      ],
      embedUrl: "",
      codeSnippet: "import pandas as pd\nfrom pathlib import Path\n\n# Carrega múltiplas fontes\ndef load_sources(config: dict) -> dict:\n    frames = {}\n    for name, path in config['sources'].items():\n        frames[name] = pd.read_csv(path, encoding='utf-8')\n        print(f'  ok {name}: {len(frames[name])} linhas')\n    return frames\n\n# Transforma e consolida\ndef transform(frames: dict) -> pd.DataFrame:\n    merged = (\n        frames['sales']\n        .merge(frames['targets'], on='month', how='left')\n        .merge(frames['clients'], on='client_id', how='left')\n    )\n    merged['achievement'] = merged['actual'] / merged['target']\n    return merged.dropna(subset=['client_id'])\n\nif __name__ == '__main__':\n    config = {'sources': {\n        'sales': 'data/sales.csv',\n        'targets': 'data/targets.csv',\n        'clients': 'data/clients.csv'\n    }}\n    df = transform(load_sources(config))\n    df.to_parquet('output/consolidated.parquet', index=False)\n    print(f'Pipeline concluido — {len(df)} registros exportados.')",
      imageCaption: "Fluxo do pipeline de dados"
    },
    {
      id: 5,
      interest: "experimentos",
      technologies: ["Python", "spaCy"],
      solutionType: ["data-trt", "rsh"],
      template: 5,
      featured: false,
      hidden: true,
      title: "NLP em Releases",
      subtitle: "Processamento de linguagem natural aplicado a comunicação institucional",
      desc: "Experimento de análise de sentimento e extração de entidades em releases institucionais da PUCRS usando Python e modelos de NLP.\n\nO objetivo foi explorar se é possível prever a cobertura jornalística com base em características linguísticas do press release — tom, densidade de informação, presença de citações e dados quantitativos.\n\nProjeto em caráter exploratório. Resultados parciais indicam correlação entre presença de dados no primeiro parágrafo e maior taxa de cobertura.",
      year: "2022",
      tools: ["Python", "spaCy", "HuggingFace", "Jupyter"],
      tags: ["NLP", "Jornalismo", "IA", "Linguística"],
      results: [
        { value: "200+", label: "Releases analisados" },
        { value: "74%", label: "Acurácia de sentimento" }
      ],
      embedUrl: "",
      codeSnippet: "",
      imageCaption: "Mapa de entidades extraídas dos releases"
    },
    {
      id: 6,
      interest: "tecnologia",
      technologies: [],
      solutionType: ["rsh"],
      template: 3,
      featured: false,
      hidden: true,
      title: "Dados como Declaração",
      subtitle: "Ensaio — A epistemologia do número em jornalismo de dados",
      desc: "Todo dado é uma declaração sobre o mundo. A escolha de o que medir, como medir e como apresentar não é neutra — é editorial.\n\nEste ensaio explora como o jornalismo de dados herdou tensões da estatística clássica (o que é significativo?) e do jornalismo narrativo (o que é verdadeiro?), e como essa herança dupla cria tanto sua força quanto seus pontos cegos.\n\nArticula-se em torno de três casos de uso — visualizações eleitorais, dashboards de saúde pública e rankings universitários — para argumentar que a transparência metodológica é o equivalente moderno da assinatura do repórter.\n\nEscrito durante o Mestrado em Mídia, Cultura e Tecnologias Visuais na PUCRS (2020–2022).",
      year: "2021",
      tools: ["R", "PUCRS", "Revisão bibliográfica"],
      tags: ["Epistemologia", "Jornalismo de dados", "Teoria", "Metodologia"],
      results: [
        { value: "Aprovado", label: "com louvor no Mestrado" },
        { value: "3", label: "Estudos de caso analisados" }
      ],
      embedUrl: "",
      codeSnippet: "",
      imageCaption: ""
    }
  ],

  archived: [],

  /* ── Conteúdo ────────────────────────────────────────────
     Cada item de conteúdo usa o mesmo vocabulário de tags
     dos projetos: interest (1), technologies[], solutionType[].
     relatedProjects[] lista IDs de projetos vinculados.
     template: 1=Editorial Split | 2=Long Read | 3=Magazine | 4=Opinion
  ─────────────────────────────────────────────────────────── */
  content: [
    {
      id: 1,
      interest: "esportes",
      technologies: ["Tableau", "Python", "Pandas"],
      solutionType: ["data-viz", "data-stl"],
      relatedProjects: [7],
      template: 2,
      featured: true,
      hidden: false,
      title: "Como construí a visualização das Copas do Mundo",
      titleEn: "How I built the World Cup data visualization",
      subtitle: "Do Python bruto ao Tableau Public — processo completo, decisões e aprendizados",
      subtitleEn: "From raw Python to Tableau Public — full process, decisions and learnings",
      body: "Tudo começou com uma pergunta simples: como jogavam as seleções nas Copas do Mundo? A resposta não estava em nenhum lugar reunida.\n\nHavia dados fragmentados — resultados por torneio aqui, dados tático-evento ali para os anos mais recentes, e uma bagunça de nomes históricos que qualquer pipeline ingênuo misturaria. Alemanha Ocidental não é Alemanha. Tchecoslováquia não é República Checa. URSS não é Rússia.\n\nDecidi não simplificar. Cada seleção permanece como entidade distinta. A bridge entre 'Alemanha Ocidental' e 'Alemanha' existe no dataset — não no visual. Isso preserva a integridade histórica e dá ao utilizador a liberdade de interpretar.\n\nO pipeline final: Python (requests + pandas) para coleta e limpeza → CSV em star schema (fatos + dimensões) → Tableau Public Desktop para modelagem visual. Três semanas de trabalho. 22 edições, 1872+ jogos internacionais na base bruta.",
      bodyEn: "It started with a simple question: how did national teams play in the World Cups? The answer wasn't collected anywhere.\n\nFragmented data — tournament results here, event-level tactical data there for recent years, and a mess of historical names any naive pipeline would mix up. West Germany is not Germany. Czechoslovakia is not Czech Republic. USSR is not Russia.\n\nI decided not to simplify. Each team stays as a distinct entity. The bridge between 'West Germany' and 'Germany' lives in the dataset — not the visual. This preserves historical integrity and gives users the freedom to interpret.\n\nFinal pipeline: Python (requests + pandas) for collection and cleaning → CSV in star schema (facts + dimensions) → Tableau Public Desktop for visual modeling. Three weeks of work. 22 editions, 1,872+ international matches in the raw base.",
      pullQuote: "A decisão mais difícil foi manter Alemanha Ocidental e Alemanha como entidades distintas — a bridge vive no dataset, não no visual.",
      pullQuoteEn: "The hardest decision was keeping West Germany and Germany as distinct entities — the bridge lives in the dataset, not the visual.",
      keyPoints: [
        "22 edições (1930–2022)",
        "Pipeline reproduzível em Python",
        "Modelagem historicamente fiel",
        "Rótulos bilíngues PT/EN no dataset"
      ],
      date: "2026-05-03",
      readTime: "4 min",
      tags: ["Tableau", "Copa do Mundo", "Python", "Data Viz", "Futebol"]
    }
  ]
};
