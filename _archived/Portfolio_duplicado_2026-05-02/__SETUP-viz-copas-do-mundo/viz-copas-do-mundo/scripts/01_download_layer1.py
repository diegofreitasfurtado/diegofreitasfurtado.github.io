"""
01_download_layer1.py
=====================
Baixa os arquivos brutos da Camada 1 (martj42/international_results).

Fonte: https://github.com/martj42/international_results
Licença: CC0 1.0 Universal (domínio público)
Cobertura: todas as partidas internacionais oficiais desde 1872 (~47k jogos),
incluindo todas as edições da Copa do Mundo da FIFA.

Uso:
    python 01_download_layer1.py
"""

from __future__ import annotations

import sys
from pathlib import Path
from typing import Final

import requests

BASE_URL: Final[str] = (
    "https://raw.githubusercontent.com/martj42/international_results/master"
)

FILES: Final[list[str]] = [
    "results.csv",
    "goalscorers.csv",
    "shootouts.csv",
    "former_names.csv",
]

# Caminho de saída relativo ao repo (scripts/ -> ../data/raw/martj42/)
OUT_DIR: Final[Path] = Path(__file__).resolve().parent.parent / "data" / "raw" / "martj42"


def download(filename: str) -> Path:
    url = f"{BASE_URL}/{filename}"
    target = OUT_DIR / filename
    print(f"[download] {url}")
    response = requests.get(url, timeout=60)
    response.raise_for_status()
    target.write_bytes(response.content)
    size_kb = target.stat().st_size / 1024
    print(f"  -> salvo em {target.relative_to(OUT_DIR.parent.parent.parent)} ({size_kb:.1f} KB)")
    return target


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for f in FILES:
        download(f)
    print(f"\nOK. {len(FILES)} arquivo(s) salvos em {OUT_DIR}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
