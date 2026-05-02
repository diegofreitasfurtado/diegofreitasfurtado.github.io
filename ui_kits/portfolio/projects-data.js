/**
 * ============================================================
 * DIEGO FURTADO - DADOS DO PORTFOLIO
 * Arquivo editavel no VS Code. O site le daqui automaticamente.
 * ============================================================
 *
 * COMO EDITAR:
 * 1. Abra este arquivo no VS Code
 * 2. Edite configuracoes, categorias, textos ou projetos
 * 3. Se "remover" um projeto, mova para `archived`
 * 4. Salve o arquivo e recarregue o site
 *
 * CAMPOS DISPONIVEIS POR PROJETO:
 * id          : numero unico
 * category    : "powerbi" | "tableau" | "python" | "experimentos" | "pesquisa"
 * template    : 1 | 2 | 3 | 4 | 5 | 6
 * title       : titulo do projeto
 * subtitle    : subtitulo ou tagline curta
 * desc        : descricao longa (suporta \n para paragrafo)
 * year        : ano ou periodo
 * tools       : array de ferramentas
 * tags        : array de tags
 * results     : array de objetos { value, label }
 * embedUrl    : URL de iframe
 * codeSnippet : trecho de codigo
 * imageCaption: legenda para area de imagem
 * featured    : true | false
 *
 * CAMPOS DISPONIVEIS POR CATEGORIA:
 * label, color, colorDark, textOnColor, desc
 * hidden      : true | false  -> oculta a aba na pagina de Projetos (e o featured de seus projetos na Home)
 * ============================================================
 */

window.SITE_CONFIG = {
  spotifyEmbedHtml: "",
  spotifyPlaylistId: "",
  spotifyLabel: "O que estou ouvindo"
};

window.PROJECTS_DATA = {
  categories: {
    powerbi: {
      label: "Power BI",
      color: "#FFEE00",
      colorDark: "#0C0D2A",
      textOnColor: "#0C0D2A",
      desc: "Business Intelligence e visualizacao executiva com Power BI e DAX.",
      hidden: true
    },
    tableau: {
      label: "Tableau",
      color: "#1B2585",
      colorDark: "#0C0D2A",
      textOnColor: "#FFFFFF",
      desc: "Dashboards analiticos e exploracao visual de dados com Tableau."
    },
    python: {
      label: "Python",
      color: "#E0003D",
      colorDark: "#1A0008",
      textOnColor: "#FFFFFF",
      desc: "Automacao, ETL, analise exploratoria e engenharia de dados com Python."
    },
    experimentos: {
      label: "Experimentos",
      color: "#F07090",
      colorDark: "#0C0D2A",
      textOnColor: "#FFFFFF",
      desc: "Projetos com tecnologias emergentes, ideias experimentais e prototipagem.",
      hidden: true
    },
    pesquisa: {
      label: "Pesquisa",
      color: "#9494C8",
      colorDark: "#0C0D2A",
      textOnColor: "#FFFFFF",
      desc: "Ensaios, analises e documentacao de pesquisas em dados, midia e comunicacao.",
      hidden: true
    }
  },

  about: {
    pt: {
      quote: "Analista de dados senior em Lisboa. Mestre em Midia e Tecnologias Visuais. Background em jornalismo investigativo.",
      subtitle: "Business & Data Analytics Consultant. Focado em transformar dados em crescimento estrategico e performance de negocio.",
      bioName: "Diego Freitas Furtado",
      bio: [
        "Analista de dados e consultor baseado em Lisboa, Portugal. Formacao em Jornalismo e pos-graduacao em Ciencia de Dados e IA pela PUCRS - uma combinacao que me permite transformar analises tecnicas em narrativas claras para tomadores de decisao.",
        "Atualmente na MOP (Multimedia Outdoors Portugal), unificando fontes de dados em SSOT, automatizando pipelines ETL e construindo dashboards executivos para Vendas, Marketing, Operacoes e Financeiro.",
        "Acredito que todo dado e uma declaracao sobre o mundo - e que a diferenca entre um relatorio e uma decisao esta em como voce conta a historia."
      ],
      experience: [
        {
          role: "Business Development Consultant",
          company: "MOP - Multimedia Outdoors Portugal",
          period: "Abr 2024 - Presente",
          location: "Lisboa, Portugal",
          accent: "var(--blue)",
          bullets: [
            "Unificacao de dados SQL, Excel e API em SSOT - melhorando qualidade e alinhamento",
            "Automacao ETL com Python e Power Query (M) - economia de ~30h/mes",
            "Reducao de 4x no tempo de refresh do dashboard Power BI comercial",
            "Dashboards de KPI para liderancas de Vendas e Marketing",
            "Ferramentas de proposta com 50% mais velocidade de entrega",
            "Mapeamento end-to-end de processos em Vendas, Operacoes e Financeiro"
          ]
        },
        {
          role: "Assistente de Comunicacao & Social Media Insights",
          company: "PUCRS - Pontificia Universidade Catolica do RS",
          period: "Mai 2017 - Out 2023",
          location: "Porto Alegre, Brasil",
          accent: "var(--lav)",
          bullets: [
            "Analise de alcance, engajamento e performance em canais institucionais",
            "Dashboards e KPI para planejamento de conteudo e campanhas",
            "Consolidacao de relatorios multiplataforma em dashboard unico",
            "Apoio a aumento de 3x no orcamento de midias sociais",
            "Progressao: Estagiario (2017) -> Assistente (2019) -> Associado (2021)"
          ]
        }
      ],
      education: [
        {
          title: "Mestrado em Midia, Cultura e Tecnologias Visuais",
          note: "Aprovado com louvor",
          school: "PUCRS",
          period: "2020-2022",
          accent: "var(--lav)"
        },
        {
          title: "Pos-graduacao em Ciencia de Dados e IA",
          note: "Bolsa por merito academico",
          school: "PUCRS",
          period: "2021-2022",
          accent: "var(--blue)"
        },
        {
          title: "Bacharelado em Jornalismo",
          note: "Porto Alegre, Brasil",
          school: "PUCRS",
          period: "2015-2019",
          accent: "var(--red)"
        }
      ],
      skills: [
        {
          title: "BI & Visualizacao",
          accent: "var(--blue)",
          items: ["Power BI (DAX, M)", "Tableau", "Looker", "Excel avancado"]
        },
        {
          title: "Dados & Engenharia",
          accent: "var(--red)",
          items: ["SQL · BigQuery", "Python · Pandas", "ETL · Power Query", "Integracao multifonte"]
        },
        {
          title: "Estrategia",
          accent: "var(--lav)",
          items: ["KPI Design", "Analise competitiva", "Data Storytelling", "Automacao de processos"]
        },
        {
          title: "Idiomas",
          accent: "var(--yellow)",
          items: ["Portugues (nativo)", "Ingles (profissional)"]
        }
      ],
      footerCopy: "© 2026 Diego Furtado · Lisboa"
    },
    en: {
      quote: "Senior data analyst based in Lisbon. Master's in Media and Visual Technologies. Background in investigative journalism.",
      subtitle: "Business & Data Analytics Consultant. Focused on transforming data into strategic growth and business performance.",
      bioName: "Diego Freitas Furtado",
      bio: [
        "Data analyst and consultant based in Lisbon, Portugal. Background in Journalism and postgraduate degree in Data Science and AI from PUCRS - a combination that allows me to transform technical analyses into clear narratives for decision-makers.",
        "Currently at MOP (Multimedia Outdoors Portugal), unifying data sources into a SSOT, automating ETL pipelines and building executive dashboards for Sales, Marketing, Operations and Finance.",
        "I believe every data point is a statement about the world - and that the difference between a report and a decision lies in how you tell the story."
      ],
      experience: [
        {
          role: "Business Development Consultant",
          company: "MOP - Multimedia Outdoors Portugal",
          period: "Apr 2024 - Present",
          location: "Lisbon, Portugal",
          accent: "var(--blue)",
          bullets: [
            "Unified SQL, Excel and API data into a SSOT - improving quality and alignment",
            "ETL automation with Python and Power Query (M) - ~30h/month saved",
            "4x reduction in commercial Power BI dashboard refresh time",
            "KPI dashboards for Sales and Marketing leadership",
            "Proposal tools with 50% faster delivery speed",
            "End-to-end process mapping across Sales, Operations and Finance"
          ]
        },
        {
          role: "Communication & Social Media Insights Assistant",
          company: "PUCRS - Pontifical Catholic University of RS",
          period: "May 2017 - Oct 2023",
          location: "Porto Alegre, Brazil",
          accent: "var(--lav)",
          bullets: [
            "Analysis of reach, engagement and performance on institutional channels",
            "KPI dashboards to guide content planning and campaign decisions",
            "Consolidated multi-platform reporting into a single dashboard",
            "Supported a 3x increase in social media budget based on delivered results",
            "Career progression: Intern (2017) -> Assistant (2019) -> Communication Associate (2021)"
          ]
        }
      ],
      education: [
        {
          title: "Master's in Media, Culture and Visual Technologies",
          note: "Approved with honors",
          school: "PUCRS",
          period: "2020-2022",
          accent: "var(--lav)"
        },
        {
          title: "Postgraduate in Data Science and AI",
          note: "Merit-based scholarship",
          school: "PUCRS",
          period: "2021-2022",
          accent: "var(--blue)"
        },
        {
          title: "Bachelor's in Journalism",
          note: "Porto Alegre, Brazil",
          school: "PUCRS",
          period: "2015-2019",
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

  projects: [
    {
      id: 1,
      category: "powerbi",
      template: 1,
      featured: true,
      title: "Fonte Unica de Verdade",
      subtitle: "SSOT comercial para lideranca de Vendas e Marketing",
      desc: "Unificacao de dados dispersos em SQL, Excel e APIs em um Single Source of Truth (SSOT) robusto para a area comercial da MOP.\n\nO projeto eliminou inconsistencias entre fontes, permitiu que liderancas de Vendas, Marketing, Operacoes e Financeiro trabalhassem com os mesmos numeros em tempo real - e acabou com a paralisia de decisao causada por relatorios contraditorios.\n\nO dashboard foi construido com foco em clareza executiva: cada visual tem um proposito, cada metrica tem um dono.",
      year: "2024-2025",
      tools: ["Power BI", "DAX", "SQL", "Excel"],
      tags: ["SSOT", "KPI", "Vendas", "Marketing", "BI"],
      results: [
        { value: "4x", label: "Reducao no tempo de refresh" },
        { value: "100%", label: "Alinhamento entre areas" },
        { value: "4", label: "Departamentos integrados" }
      ],
      embedUrl: "",
      codeSnippet: "",
      imageCaption: "Dashboard executivo - KPIs de Vendas & Marketing"
    },
    {
      id: 2,
      category: "powerbi",
      template: 6,
      featured: false,
      title: "Painel de Precificacao",
      subtitle: "Benchmarking e estrategia de bid para midia OOH",
      desc: "Dashboard de analise competitiva e precificacao de midia Out-of-Home para apoiar a estrategia de propostas comerciais da MOP.\n\nO painel cruza dados de mercado, historico de campanhas e performance por praca geografica para identificar oportunidades de pricing e pontos de perda competitiva.\n\nFerramentas de proposta geradas pelo sistema aumentaram a velocidade de entrega em 50%.",
      year: "2024",
      tools: ["Power BI", "Excel", "SQL"],
      tags: ["Precificacao", "OOH", "Midia", "Estrategia"],
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
      category: "tableau",
      template: 1,
      featured: true,
      title: "Audiencia Institucional",
      subtitle: "Consolidacao de metricas multiplataforma - PUCRS",
      desc: "Consolidacao de dados de redes sociais, email marketing e web analytics em um unico painel de audiencia para a PUCRS.\n\nO projeto unificou metricas antes dispersas em planilhas manuais em um dashboard unico e automatizado - permitindo que a equipe de comunicacao tomasse decisoes de conteudo baseadas em dados reais de performance.\n\nO trabalho sustentou um aumento de 3x no orcamento de midias sociais ao demonstrar ROI mensuravel em eventos e campanhas institucionais.",
      year: "2019-2023",
      tools: ["Tableau", "Google Analytics", "Google Sheets"],
      tags: ["Social Media", "Audiencia", "Analytics", "Comunicacao"],
      results: [
        { value: "3x", label: "Aumento de orcamento em social" },
        { value: "1", label: "Dashboard unificado (antes eram 12 planilhas)" }
      ],
      embedUrl: "",
      codeSnippet: "",
      imageCaption: "Painel de audiencia multiplataforma"
    },
    {
      id: 4,
      category: "python",
      template: 2,
      featured: true,
      title: "Automacao de ETL",
      subtitle: "Pipelines automaticos com Python e Power Query",
      desc: "Desenvolvimento de pipelines ETL automatizados com Python (Pandas) e M (Power Query) para eliminar trabalho manual de coleta, transformacao e carga de dados na MOP.\n\nO processo anterior envolvia exportacoes manuais, copias entre planilhas e reconciliacao manual de fontes - consumindo ~30 horas por mes de trabalho operacional.\n\nApos a automacao: dados chegam processados, validados e prontos para analise. O tempo de refresh do dashboard Power BI caiu de 4 horas para 1 hora.",
      year: "2024",
      tools: ["Python", "Pandas", "Power Query (M)", "SQL"],
      tags: ["ETL", "Automacao", "Pipeline", "Pandas"],
      results: [
        { value: "30h", label: "Economizadas por mes" },
        { value: "4x", label: "Mais rapido no refresh" },
        { value: "0", label: "Erros manuais de dados" }
      ],
      embedUrl: "",
      codeSnippet: "import pandas as pd\nfrom pathlib import Path\n\n# Carrega multiplas fontes\ndef load_sources(config: dict) -> dict:\n    frames = {}\n    for name, path in config['sources'].items():\n        frames[name] = pd.read_csv(path, encoding='utf-8')\n        print(f'  ok {name}: {len(frames[name])} linhas')\n    return frames\n\n# Transforma e consolida\ndef transform(frames: dict) -> pd.DataFrame:\n    merged = (\n        frames['sales']\n        .merge(frames['targets'], on='month', how='left')\n        .merge(frames['clients'], on='client_id', how='left')\n    )\n    merged['achievement'] = merged['actual'] / merged['target']\n    return merged.dropna(subset=['client_id'])\n\nif __name__ == '__main__':\n    config = {'sources': {\n        'sales': 'data/sales.csv',\n        'targets': 'data/targets.csv',\n        'clients': 'data/clients.csv'\n    }}\n    df = transform(load_sources(config))\n    df.to_parquet('output/consolidated.parquet', index=False)\n    print(f'Pipeline concluido - {len(df)} registros exportados.')",
      imageCaption: "Fluxo do pipeline de dados"
    },
    {
      id: 5,
      category: "experimentos",
      template: 5,
      featured: false,
      title: "NLP em Releases",
      subtitle: "Processamento de linguagem natural aplicado a comunicacao institucional",
      desc: "Experimento de analise de sentimento e extracao de entidades em releases institucionais da PUCRS usando Python e modelos de NLP.\n\nO objetivo foi explorar se e possivel prever a cobertura jornalistica com base em caracteristicas linguisticas do press release - tom, densidade de informacao, presenca de citacoes e dados quantitativos.\n\nProjeto em carater exploratorio. Resultados parciais indicam correlacao entre presenca de dados no primeiro paragrafo e maior taxa de cobertura.",
      year: "2022",
      tools: ["Python", "spaCy", "HuggingFace", "Jupyter"],
      tags: ["NLP", "Jornalismo", "IA", "Linguistica"],
      results: [
        { value: "200+", label: "Releases analisados" },
        { value: "74%", label: "Acuracia de sentimento" }
      ],
      embedUrl: "",
      codeSnippet: "",
      imageCaption: "Mapa de entidades extraidas dos releases"
    },
    {
      id: 6,
      category: "pesquisa",
      template: 3,
      featured: true,
      title: "Dados como Declaracao",
      subtitle: "Ensaio - A epistemologia do numero em jornalismo de dados",
      desc: "Todo dado e uma declaracao sobre o mundo. A escolha de o que medir, como medir e como apresentar nao e neutra - e editorial.\n\nEste ensaio explora como o jornalismo de dados herdou tensoes da estatistica classica (o que e significativo?) e do jornalismo narrativo (o que e verdadeiro?), e como essa heranca dupla cria tanto sua forca quanto seus pontos cegos.\n\nArticula-se em torno de tres casos de uso - visualizacoes eleitorais, dashboards de saude publica e rankings universitarios - para argumentar que a transparencia metodologica e o equivalente moderno da assinatura do reporter.\n\nEscrito durante o Mestrado em Midia, Cultura e Tecnologias Visuais na PUCRS (2020-2022).",
      year: "2021",
      tools: ["R", "PUCRS", "Revisao bibliografica"],
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

  archived: []
};
