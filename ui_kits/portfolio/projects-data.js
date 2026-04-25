/**
 * ============================================================
 *  DIEGO FURTADO — DADOS DOS PROJETOS
 *  Arquivo editável no VS Code. O site lê daqui automaticamente.
 * ============================================================
 *
 *  COMO EDITAR:
 *  1. Abra este arquivo no VS Code
 *  2. Adicione, edite ou remova entradas no array PROJECTS abaixo
 *  3. Salve o arquivo e recarregue o site — as mudanças aparecem
 *
 *  CAMPOS DISPONÍVEIS POR PROJETO:
 *  ─────────────────────────────────────────────────────────────
 *  id          : número único (não repita)
 *  category    : "powerbi" | "tableau" | "python" | "experimentos" | "pesquisa"
 *  template    : 1 | 2 | 3 | 4 | 5 | 6  (veja descrição dos templates abaixo)
 *  title       : título do projeto
 *  subtitle    : subtítulo ou tagline curta
 *  desc        : descrição longa (suporta \n para parágrafo)
 *  year        : ano ou período (ex: "2024" ou "2024–2025")
 *  tools       : array de strings com ferramentas usadas
 *  tags        : array de strings com tags de tecnologia
 *  results     : array de objetos { value, label } para métricas de impacto
 *  embedUrl    : URL de iframe para dashboards (Power BI, Tableau etc.) — deixe "" se não tiver
 *  codeSnippet : trecho de código em string — deixe "" se não quiser
 *  imageCaption: legenda para área de imagem — deixe "" se não tiver
 *  featured    : true | false — se aparece em destaque na Home
 *
 *  TEMPLATES:
 *  1 → Dashboard Split   — painel de métricas à esquerda, embed à direita (Power BI, Tableau)
 *  2 → Terminal Dark     — fundo escuro, código em destaque (Python, SQL)
 *  3 → Editorial         — layout longo, ensaístico, citações (Pesquisa)
 *  4 → Magazine          — imagem full-bleed, tipografia forte (projetos visuais)
 *  5 → Experimental      — assimétrico, geométrico, ousado (Experimentos)
 *  6 → Case Study        — estruturado, fases, timeline (qualquer categoria)
 * ============================================================
 */

/* ── Configurações globais do site (editável aqui) ── */
window.SITE_CONFIG = {
  spotifyPlaylistId: "",  // Cole aqui o ID da playlist (ex: "37i9dQZF1DX...") sem a URL completa
  spotifyLabel: "O que estou ouvindo"
};

window.PROJECTS_DATA = {

  /* ══════════════════════════════════════
     CATEGORIAS — cores e metadados
  ══════════════════════════════════════ */
  categories: {
    powerbi: {
      label: "Power BI",
      color: "#FFEE00",
      colorDark: "#0C0D2A",
      textOnColor: "#0C0D2A",
      desc: "Business Intelligence e visualização executiva com Power BI e DAX."
    },
    tableau: {
      label: "Tableau",
      color: "#1B2585",
      colorDark: "#0C0D2A",
      textOnColor: "#FFFFFF",
      desc: "Dashboards analíticos e exploração visual de dados com Tableau."
    },
    python: {
      label: "Python",
      color: "#E0003D",
      colorDark: "#1A0008",
      textOnColor: "#FFFFFF",
      desc: "Automação, ETL, análise exploratória e engenharia de dados com Python."
    },
    experimentos: {
      label: "Experimentos",
      color: "#9494C8",
      colorDark: "#0C0D2A",
      textOnColor: "#FFFFFF",
      desc: "Projetos com tecnologias emergentes, ideias experimentais e prototipagem."
    },
    pesquisa: {
      label: "Pesquisa",
      color: "#E8607A",
      colorDark: "#1A0005",
      textOnColor: "#FFFFFF",
      desc: "Ensaios, análises e documentação de pesquisas em dados, mídia e comunicação."
    }
  },

  /* ══════════════════════════════════════
     PROJETOS
  ══════════════════════════════════════ */
  projects: [

    /* ── POWER BI ── */
    {
      id: 1,
      category: "powerbi",
      template: 1,
      featured: true,
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
      category: "powerbi",
      template: 6,
      featured: false,
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

    /* ── TABLEAU ── */
    {
      id: 3,
      category: "tableau",
      template: 1,
      featured: true,
      title: "Audiência Institucional",
      subtitle: "Consolidação de métricas multiplataforma — PUCRS",
      desc: "Consolidação de dados de redes sociais, email marketing e web analytics em um único painel de audiência para a PUCRS.\n\nO projeto unificou métricas antes dispersas em planilhas manuais em um dashboard único e automatizado — permitindo que a equipe de comunicação tomasse decisões de conteúdo baseadas em dados reais de performance.\n\nO trabalho sustentou um aumento de 3× no orçamento de mídias sociais ao demonstrar ROI mensurável em eventos e campanhas institucionais.",
      year: "2019–2023",
      tools: ["Tableau", "Google Analytics", "Google Sheets"],
      tags: ["Social Media", "Audiência", "Analytics", "Comunicação"],
      results: [
        { value: "3×", label: "Aumento de orçamento em social" },
        { value: "1", label: "Dashboard unificado (era 12 planilhas)" }
      ],
      embedUrl: "",
      codeSnippet: "",
      imageCaption: "Painel de audiência multiplataforma"
    },

    /* ── PYTHON ── */
    {
      id: 4,
      category: "python",
      template: 2,
      featured: true,
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
      codeSnippet: "import pandas as pd\nfrom pathlib import Path\n\n# Carrega múltiplas fontes\ndef load_sources(config: dict) -> dict:\n    frames = {}\n    for name, path in config['sources'].items():\n        frames[name] = pd.read_csv(path, encoding='utf-8')\n        print(f'  ✓ {name}: {len(frames[name])} linhas')\n    return frames\n\n# Transforma e consolida\ndef transform(frames: dict) -> pd.DataFrame:\n    merged = (\n        frames['sales']\n        .merge(frames['targets'], on='month', how='left')\n        .merge(frames['clients'], on='client_id', how='left')\n    )\n    merged['achievement'] = merged['actual'] / merged['target']\n    return merged.dropna(subset=['client_id'])\n\nif __name__ == '__main__':\n    config = {'sources': {\n        'sales':   'data/sales.csv',\n        'targets': 'data/targets.csv',\n        'clients': 'data/clients.csv'\n    }}\n    df = transform(load_sources(config))\n    df.to_parquet('output/consolidated.parquet', index=False)\n    print(f'Pipeline concluído — {len(df)} registros exportados.')",
      imageCaption: "Fluxo do pipeline de dados"
    },

    /* ── EXPERIMENTOS ── */
    {
      id: 5,
      category: "experimentos",
      template: 5,
      featured: false,
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

    /* ── PESQUISA ── */
    {
      id: 6,
      category: "pesquisa",
      template: 3,
      featured: true,
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

  ]
};
