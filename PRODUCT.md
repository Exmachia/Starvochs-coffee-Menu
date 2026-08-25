# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router, TypeScript) + Tailwind CSS. Migrating from a plain static HTML/CSS/JS site (assembled by a Python `build.py` script) as part of this project; the migration is a mechanical 1:1 port before any visual redesign work.

## Users

Both first-time visitors discovering the brand and existing/repeat local customers, roughly equally. A repeat customer checks which branch (sucursal) is open, where it is, or what's on the menu before walking in. A first-time visitor (via social media or word of mouth) is deciding whether to try the place — the site needs to sell the brand's personality as much as list the menu.

## Product Purpose

A menu + brand site for Starvochs Coffee, a real specialty coffee shop owned by the user's father, themed around a red Volkswagen Beetle ("Vocho"). It shows the drink menu with prices, storefront locations & hours, and the brand's story, so a visitor can decide what to order and where/when to visit. There is no online ordering — confirmed by the site's own copy: "Aún no tomamos pedidos por WhatsApp ni apps... te esperamos en persona."

## Positioning

The Vocho theme and brand story/personality *is* the differentiator — a red Vocho, good coffee, and the founder's spirit of sharing it with whoever shows up. Confirmed directly by the user: this is not a product-attribute claim (specialty sourcing, unique recipes) — it's the brand identity itself that a neighboring café could not truthfully copy.

## Operating Context

Physical café with multiple sucursales (branches). Visitors overwhelmingly use the site on mobile — the existing menu is a mobile-first tap-through experience (sticky category tabs, a bottom-sheet item modal, a hash-based share/deep-link so a shared drink link opens straight to that item). Walk-in ordering only, no delivery or ordering-app integration today. Currently deployed on Vercel (`starvochs-coffee-menu.vercel.app`).

## Capabilities and Constraints

Menu and location data are hardcoded content (no CMS/backend) in the current implementation and will remain hardcoded in the Next.js migration, at least initially — whether a CMS is wanted later is undecided and not assumed. No ordering/checkout capability exists or is planned. Google Analytics (gtag) is wired in.

## Brand Commitments

- **The logo is fixed and must not be redesigned or altered as part of this project.** Confirmed explicitly by the user: it is the business's real, established logo (a circular badge — red Vocho with a coffee cup — despite structurally echoing the Starbucks roundel shape). This is a deliberate exception carved out during product-truth interview; do not revisit it without the user raising it again.
- The cream/pine-green/red palette (`--bg:#F4E9CE`, `--heading:#173625`, `--accent:#C22A2E`) and the three custom fonts (Fredoka display, Caveat handwritten accent, Work Sans body) originate from a physical poster tied to the brand identity. Not explicitly locked the way the logo is, but strongly established — treat as the default continuity to preserve and confirm with the user before materially altering in the redesign phase.

## Evidence on Hand

- Real menu data: categories (Más Vendidos/destacados, Café Caliente, cold drinks, frappés, extras, etc.) with real items and prices, currently in `src/menu-script.js`.
- Real contact/social: Facebook (`StarvochsCoffee`), WhatsApp (`+52 312 550 7416`), Instagram (`@starvochs_coffee`).
- Real logo asset at `assets/logo.png` (+ `logo-original.png`).
- **Historia (brand story) page has no real content yet** — current copy explicitly says it's still being written ("Todavía estamos escribiendo esta parte, para contártela bien"). Future work must not fabricate a founding story or history; needs real input from the user/family before that page can be finished.
- **Sucursales (branch locations/hours) page also has no real data** — corrected after fully reading the source (an earlier pass wrongly assumed this page had real content). It shows the same "still figuring this out, message us on WhatsApp" placeholder as Historia. This is more urgent than Historia: "where/when can I visit" is the site's single most important task for a physical café, and it currently cannot be completed on the site at all. Needs real address/hours data per branch from the user before this page can be finished — do not fabricate it.

## Product Principles

1. In-person-only business — the site's job is to get people through the door, not to process an order.
2. Mobile-first — most visitors view this on a phone, often near or deciding between physical locations.
3. The Vocho story is the brand, not a garnish — surfaces should carry that personality rather than reading as a generic café template.
4. The logo is fixed; the rest of the visual system serves it, it doesn't get redesigned around it.
5. Don't invent unverified facts (pricing, hours, history) — only ship what's confirmed in the existing code/copy or given directly by the user.

## Accessibility & Inclusion

No project-specific requirement established beyond standard web accessibility already present in the current implementation (visible focus states, `aria-label`s, `prefers-reduced-motion` handling) — carry these forward, no additional standard specified.
