#!/usr/bin/env python3
"""Rebuild index.html from src/ + assets/ (inlines fonts and logo as base64).

Usage:
    python3 build.py

Edit src/menu-template.html (markup/CSS) or src/menu-script.js (data/behavior),
then rerun this to regenerate the self-contained index.html.
"""
import base64
import pathlib

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
ASSETS = ROOT / "assets"


def b64(path: pathlib.Path) -> str:
    return base64.b64encode(path.read_bytes()).decode("ascii")


def main():
    tpl = (SRC / "menu-template.html").read_text()
    script = (SRC / "menu-script.js").read_text()

    out = (
        tpl.replace("__SCRIPT__", script)
        .replace("__FREDOKA_B64__", b64(ASSETS / "fonts" / "fredoka.woff2"))
        .replace("__CAVEAT_B64__", b64(ASSETS / "fonts" / "caveat.woff2"))
        .replace("__WORKSANS_B64__", b64(ASSETS / "fonts" / "worksans.woff2"))
        .replace("__LOGO_B64__", b64(ASSETS / "logo.png"))
    )

    out_path = ROOT / "index.html"
    out_path.write_text(out)
    print(f"Built {out_path} ({len(out):,} bytes)")


if __name__ == "__main__":
    main()
