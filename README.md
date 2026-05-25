# Copper Fox Interiors — Website

Static marketing site for **Copper Fox Interiors** — a home staging & interior design
studio. Plain HTML/CSS/JS, no build step. Designed for GitHub Pages.

## Status: 🟡 Placeholder scaffold

All copy, contact details, images, and links are **placeholders** marked `[PLACEHOLDER]`
or `[ ... ]`. Real content to be filled in as the client provides it.

## Brand direction

From the client's content brief — the site should feel **airy, calm, elegant, intentional,
refined, elevated**. *"The site should breathe."* Like a luxury boutique hotel brand /
high-end interiors editorial / architectural design studio — **not a busy decorating website**.

- **Palette — warm neutrals only:** ivory · soft black · charcoal · mushroom taupe · warm gray · muted copper accents
- **Type:** sophisticated serif headlines (Cormorant Garamond) over clean minimal sans (Jost) — Architectural Digest / luxury fashion editorial
- **Photography:** moody natural light, layered textures, organic materials, upscale-but-lived-in, editorial composition. Avoid bright farmhouse / cluttered / staged-stock.
- **Motion:** restrained — subtle scroll reveal + gentle hover only

## Pages

| File | Purpose |
|------|---------|
| `index.html`     | Home — cinematic hero, statement, portfolio/about/services previews, testimonial, CTA |
| `portfolio.html` | Filterable project portfolio (placeholder tiles) |
| `about.html`     | Story, founder bio, philosophy, process, stats |
| `services.html`  | Home Staging · Interior Design · Staging & Design Consulting |
| `contact.html`   | Inquiry form (front-end only) + info card |
| `404.html`       | Not-found page |

## Structure

```
css/styles.css     palette + all styles (airy · editorial · warm neutrals)
js/main.js         mobile nav, portfolio filter, form handling, scroll reveal
site/images/       drop logo, hero, project photos here (see README in folder)
CNAME              copperfoxinteriors.co
robots.txt, sitemap.xml
```

## To finish before launch

- [ ] Replace every `[PLACEHOLDER]` / `[ ... ]` with real copy
- [ ] Add cinematic hero photo/video, founder portrait, and project photos (real projects only)
- [ ] Add real logo + favicon set
- [ ] Set real phone / email / address / hours / social links
- [ ] Wire the contact form to a handler (Formspree, Netlify Forms, etc.)
- [ ] Fill in the LocalBusiness JSON-LD in `index.html`
- [ ] **Remove the `.placeholder-banner` div** from the top of each page

## Local preview

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Staging

Staging uses the shared `demosite.densanon.com` CNAME during development — swap `CNAME`
to that value while previewing, then to `copperfoxinteriors.co` at cutover.
