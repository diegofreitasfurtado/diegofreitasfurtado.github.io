"""
team_metadata.py
================
Metadata canônica das seleções nacionais que disputaram Copas do Mundo.

Decisão de design IMPORTANTE:
Mantemos times historicamente distintos como entidades separadas (West Germany ≠ Germany,
Yugoslavia ≠ Serbia, USSR ≠ Russia). Isso preserva fidelidade histórica. Quem quiser
agregar pode usar o campo `successor_team_id` para rolar.

Cada time tem:
  - team_id: código curto (3-4 letras), determinístico
  - name_en: nome canônico em inglês (igual ao do dataset martj42)
  - name_pt: tradução em português brasileiro
  - confederation: AFC, CAF, CONCACAF, CONMEBOL, OFC, UEFA
  - successor_team_id: para times extintos, qual entidade os "sucede" (analítico)
"""

from __future__ import annotations

# Estrutura: name_en -> dict
TEAMS: dict[str, dict[str, str | None]] = {
    # ===== CONMEBOL =====
    "Argentina":     {"id": "ARG", "name_pt": "Argentina",          "confed": "CONMEBOL", "successor": None},
    "Bolivia":       {"id": "BOL", "name_pt": "Bolívia",            "confed": "CONMEBOL", "successor": None},
    "Brazil":        {"id": "BRA", "name_pt": "Brasil",             "confed": "CONMEBOL", "successor": None},
    "Chile":         {"id": "CHI", "name_pt": "Chile",              "confed": "CONMEBOL", "successor": None},
    "Colombia":      {"id": "COL", "name_pt": "Colômbia",           "confed": "CONMEBOL", "successor": None},
    "Ecuador":       {"id": "ECU", "name_pt": "Equador",            "confed": "CONMEBOL", "successor": None},
    "Paraguay":      {"id": "PAR", "name_pt": "Paraguai",           "confed": "CONMEBOL", "successor": None},
    "Peru":          {"id": "PER", "name_pt": "Peru",               "confed": "CONMEBOL", "successor": None},
    "Uruguay":       {"id": "URU", "name_pt": "Uruguai",            "confed": "CONMEBOL", "successor": None},
    "Venezuela":     {"id": "VEN", "name_pt": "Venezuela",          "confed": "CONMEBOL", "successor": None},

    # ===== UEFA =====
    "Albania":       {"id": "ALB", "name_pt": "Albânia",            "confed": "UEFA",     "successor": None},
    "Austria":       {"id": "AUT", "name_pt": "Áustria",            "confed": "UEFA",     "successor": None},
    "Belgium":       {"id": "BEL", "name_pt": "Bélgica",            "confed": "UEFA",     "successor": None},
    "Bosnia and Herzegovina": {"id": "BIH", "name_pt": "Bósnia e Herzegovina", "confed": "UEFA", "successor": None},
    "Bulgaria":      {"id": "BUL", "name_pt": "Bulgária",           "confed": "UEFA",     "successor": None},
    "Croatia":       {"id": "CRO", "name_pt": "Croácia",            "confed": "UEFA",     "successor": None},
    "Czech Republic":{"id": "CZE", "name_pt": "República Tcheca",   "confed": "UEFA",     "successor": None},
    "Czechoslovakia":{"id": "TCH", "name_pt": "Tchecoslováquia",    "confed": "UEFA",     "successor": "CZE"},
    "Denmark":       {"id": "DEN", "name_pt": "Dinamarca",          "confed": "UEFA",     "successor": None},
    "England":       {"id": "ENG", "name_pt": "Inglaterra",         "confed": "UEFA",     "successor": None},
    "France":        {"id": "FRA", "name_pt": "França",             "confed": "UEFA",     "successor": None},
    "Germany":       {"id": "GER", "name_pt": "Alemanha",           "confed": "UEFA",     "successor": None},
    "Germany DR":    {"id": "GDR", "name_pt": "Alemanha Oriental",  "confed": "UEFA",     "successor": "GER"},
    "East Germany":  {"id": "GDR", "name_pt": "Alemanha Oriental",  "confed": "UEFA",     "successor": "GER"},
    "Greece":        {"id": "GRE", "name_pt": "Grécia",             "confed": "UEFA",     "successor": None},
    "Hungary":       {"id": "HUN", "name_pt": "Hungria",            "confed": "UEFA",     "successor": None},
    "Iceland":       {"id": "ISL", "name_pt": "Islândia",           "confed": "UEFA",     "successor": None},
    "Ireland":       {"id": "IRL", "name_pt": "Irlanda",            "confed": "UEFA",     "successor": None},
    "Republic of Ireland": {"id": "IRL", "name_pt": "Irlanda",      "confed": "UEFA",     "successor": None},
    "Italy":         {"id": "ITA", "name_pt": "Itália",             "confed": "UEFA",     "successor": None},
    "Netherlands":   {"id": "NED", "name_pt": "Holanda",            "confed": "UEFA",     "successor": None},
    "Northern Ireland": {"id": "NIR", "name_pt": "Irlanda do Norte","confed": "UEFA",     "successor": None},
    "Norway":        {"id": "NOR", "name_pt": "Noruega",            "confed": "UEFA",     "successor": None},
    "Poland":        {"id": "POL", "name_pt": "Polônia",            "confed": "UEFA",     "successor": None},
    "Portugal":      {"id": "POR", "name_pt": "Portugal",           "confed": "UEFA",     "successor": None},
    "Romania":       {"id": "ROU", "name_pt": "Romênia",            "confed": "UEFA",     "successor": None},
    "Russia":        {"id": "RUS", "name_pt": "Rússia",             "confed": "UEFA",     "successor": None},
    "Scotland":      {"id": "SCO", "name_pt": "Escócia",            "confed": "UEFA",     "successor": None},
    "Serbia":        {"id": "SRB", "name_pt": "Sérvia",             "confed": "UEFA",     "successor": None},
    "Serbia and Montenegro": {"id": "SCG", "name_pt": "Sérvia e Montenegro", "confed": "UEFA", "successor": "SRB"},
    "Slovakia":      {"id": "SVK", "name_pt": "Eslováquia",         "confed": "UEFA",     "successor": None},
    "Slovenia":      {"id": "SVN", "name_pt": "Eslovênia",          "confed": "UEFA",     "successor": None},
    "Soviet Union":  {"id": "URS", "name_pt": "União Soviética",    "confed": "UEFA",     "successor": "RUS"},
    "Spain":         {"id": "ESP", "name_pt": "Espanha",            "confed": "UEFA",     "successor": None},
    "Sweden":        {"id": "SWE", "name_pt": "Suécia",             "confed": "UEFA",     "successor": None},
    "Switzerland":   {"id": "SUI", "name_pt": "Suíça",              "confed": "UEFA",     "successor": None},
    "Turkey":        {"id": "TUR", "name_pt": "Turquia",            "confed": "UEFA",     "successor": None},
    "Türkiye":       {"id": "TUR", "name_pt": "Turquia",            "confed": "UEFA",     "successor": None},
    "Ukraine":       {"id": "UKR", "name_pt": "Ucrânia",            "confed": "UEFA",     "successor": None},
    "Wales":         {"id": "WAL", "name_pt": "País de Gales",      "confed": "UEFA",     "successor": None},
    "West Germany":  {"id": "FRG", "name_pt": "Alemanha Ocidental", "confed": "UEFA",     "successor": "GER"},
    "Yugoslavia":    {"id": "YUG", "name_pt": "Iugoslávia",         "confed": "UEFA",     "successor": "SRB"},
    "FR Yugoslavia": {"id": "YUG", "name_pt": "Iugoslávia",         "confed": "UEFA",     "successor": "SRB"},

    # ===== CONCACAF =====
    "Canada":        {"id": "CAN", "name_pt": "Canadá",             "confed": "CONCACAF", "successor": None},
    "Costa Rica":    {"id": "CRC", "name_pt": "Costa Rica",         "confed": "CONCACAF", "successor": None},
    "Cuba":          {"id": "CUB", "name_pt": "Cuba",               "confed": "CONCACAF", "successor": None},
    "El Salvador":   {"id": "SLV", "name_pt": "El Salvador",        "confed": "CONCACAF", "successor": None},
    "Haiti":         {"id": "HAI", "name_pt": "Haiti",              "confed": "CONCACAF", "successor": None},
    "Honduras":      {"id": "HON", "name_pt": "Honduras",           "confed": "CONCACAF", "successor": None},
    "Jamaica":       {"id": "JAM", "name_pt": "Jamaica",            "confed": "CONCACAF", "successor": None},
    "Mexico":        {"id": "MEX", "name_pt": "México",             "confed": "CONCACAF", "successor": None},
    "Panama":        {"id": "PAN", "name_pt": "Panamá",             "confed": "CONCACAF", "successor": None},
    "Trinidad and Tobago": {"id": "TRI", "name_pt": "Trinidad e Tobago", "confed": "CONCACAF", "successor": None},
    "United States": {"id": "USA", "name_pt": "Estados Unidos",     "confed": "CONCACAF", "successor": None},

    # ===== AFC =====
    "Australia":     {"id": "AUS", "name_pt": "Austrália",          "confed": "AFC",      "successor": None},
    "China PR":      {"id": "CHN", "name_pt": "China",              "confed": "AFC",      "successor": None},
    "Indonesia":     {"id": "IDN", "name_pt": "Indonésia",          "confed": "AFC",      "successor": None},
    "Iran":          {"id": "IRN", "name_pt": "Irã",                "confed": "AFC",      "successor": None},
    "Iraq":          {"id": "IRQ", "name_pt": "Iraque",             "confed": "AFC",      "successor": None},
    "Israel":        {"id": "ISR", "name_pt": "Israel",             "confed": "AFC",      "successor": None},
    "Japan":         {"id": "JPN", "name_pt": "Japão",              "confed": "AFC",      "successor": None},
    "Kuwait":        {"id": "KUW", "name_pt": "Kuwait",             "confed": "AFC",      "successor": None},
    "North Korea":   {"id": "PRK", "name_pt": "Coreia do Norte",    "confed": "AFC",      "successor": None},
    "Korea DPR":     {"id": "PRK", "name_pt": "Coreia do Norte",    "confed": "AFC",      "successor": None},
    "Qatar":         {"id": "QAT", "name_pt": "Catar",              "confed": "AFC",      "successor": None},
    "Saudi Arabia":  {"id": "KSA", "name_pt": "Arábia Saudita",     "confed": "AFC",      "successor": None},
    "South Korea":   {"id": "KOR", "name_pt": "Coreia do Sul",      "confed": "AFC",      "successor": None},
    "Korea Republic":{"id": "KOR", "name_pt": "Coreia do Sul",      "confed": "AFC",      "successor": None},
    "United Arab Emirates": {"id": "UAE", "name_pt": "Emirados Árabes Unidos", "confed": "AFC", "successor": None},

    # ===== CAF =====
    "Algeria":       {"id": "ALG", "name_pt": "Argélia",            "confed": "CAF",      "successor": None},
    "Angola":        {"id": "ANG", "name_pt": "Angola",             "confed": "CAF",      "successor": None},
    "Cameroon":      {"id": "CMR", "name_pt": "Camarões",           "confed": "CAF",      "successor": None},
    "Cape Verde":    {"id": "CPV", "name_pt": "Cabo Verde",         "confed": "CAF",      "successor": None},
    "DR Congo":      {"id": "COD", "name_pt": "República Democrática do Congo", "confed": "CAF", "successor": None},
    "Zaïre":         {"id": "ZAI", "name_pt": "Zaire",              "confed": "CAF",      "successor": "COD"},
    "Egypt":         {"id": "EGY", "name_pt": "Egito",              "confed": "CAF",      "successor": None},
    "Ghana":         {"id": "GHA", "name_pt": "Gana",               "confed": "CAF",      "successor": None},
    "Ivory Coast":   {"id": "CIV", "name_pt": "Costa do Marfim",    "confed": "CAF",      "successor": None},
    "Côte d'Ivoire": {"id": "CIV", "name_pt": "Costa do Marfim",    "confed": "CAF",      "successor": None},
    "Morocco":       {"id": "MAR", "name_pt": "Marrocos",           "confed": "CAF",      "successor": None},
    "Nigeria":       {"id": "NGA", "name_pt": "Nigéria",            "confed": "CAF",      "successor": None},
    "Senegal":       {"id": "SEN", "name_pt": "Senegal",            "confed": "CAF",      "successor": None},
    "South Africa":  {"id": "RSA", "name_pt": "África do Sul",      "confed": "CAF",      "successor": None},
    "Togo":          {"id": "TOG", "name_pt": "Togo",               "confed": "CAF",      "successor": None},
    "Tunisia":       {"id": "TUN", "name_pt": "Tunísia",            "confed": "CAF",      "successor": None},

    # ===== OFC =====
    "New Zealand":   {"id": "NZL", "name_pt": "Nova Zelândia",      "confed": "OFC",      "successor": None},

    # ===== Outras / históricas =====
    "Dutch East Indies": {"id": "DEI", "name_pt": "Índias Orientais Neerlandesas", "confed": "AFC", "successor": "IDN"},
}


def get_team_id(name: str) -> str:
    """Retorna team_id canônico. Se não encontrado, usa SLUG do nome."""
    if name in TEAMS:
        return TEAMS[name]["id"]
    # Fallback: gera ID baseado no nome para não quebrar pipeline
    return name.upper().replace(" ", "")[:4]


def get_team_record(name: str) -> dict[str, str | None]:
    """Retorna registro completo do time. Se desconhecido, gera record mínimo."""
    if name in TEAMS:
        return {"name_en": name, **TEAMS[name]}
    return {
        "name_en": name,
        "id": get_team_id(name),
        "name_pt": name,
        "confed": "UNKNOWN",
        "successor": None,
    }
