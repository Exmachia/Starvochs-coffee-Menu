#!/usr/bin/env python3
"""Assemble the site's pages from src/*-template.html + partials/.

Fonts, brand CSS and JS are plain static files under assets/ now (no more
base64 inlining) so the browser caches them once across every page.

Usage:
    python3 build.py

Edit src/<page>-template.html (markup/page-specific CSS) or
partials/navbar.html / partials/footer.html (shared chrome), then rerun this.
"""
import pathlib
import shutil

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
PARTIALS = ROOT / "partials"
ASSETS = ROOT / "assets"

PAGES = {
    "home-template.html": "index.html",
    "menu-template.html": "menu.html",
    "sucursales-template.html": "sucursales.html",
    "historia-template.html": "historia.html",
}


def main():
    navbar = (PARTIALS / "navbar.html").read_text()
    footer = (PARTIALS / "footer.html").read_text()
    analytics = (PARTIALS / "analytics.html").read_text()

    for src_name, out_name in PAGES.items():
        tpl = (SRC / src_name).read_text()
        out = (
            tpl.replace("__NAVBAR__", navbar)
            .replace("__FOOTER__", footer)
            .replace("__ANALYTICS__", analytics)
        )
        (ROOT / out_name).write_text(out)
        print(f"Built {out_name}")

    # Keep the menu's JS in assets/ (served directly) in sync with its editable source.
    shutil.copyfile(SRC / "menu-script.js", ASSETS / "menu.js")
    print("Synced assets/menu.js")


if __name__ == "__main__":
    main()
