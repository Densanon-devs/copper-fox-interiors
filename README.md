# Copper Fox Interiors — Website

Static marketing site for **Copper Fox Interiors** (home staging & interior layout).
Plain HTML/CSS/JS, no build step. Designed for GitHub Pages.

## Status: 🟡 Placeholder scaffold

All copy, contact details, images, and links are **placeholders** marked `[PLACEHOLDER]`
or `[ ... ]`. Real content to be filled in as the client provides it.

## Pages

| File | Purpose |
|------|---------|
| `index.html`   | Home — hero, services, about teaser, stats, CTA |
| `about.html`   | Story, founder bio, process |
| `gallery.html` | Filterable project gallery (placeholder tiles) |
| `contact.html` | Contact form (front-end only) + info card |
| `404.html`     | Not-found page |

## Structure

```
css/styles.css     palette + all styles (dark · moody · luxury · timeless)
js/main.js         mobile nav, gallery filter, form handling, smooth scroll
site/images/       drop logo, hero, gallery photos here (see README in folder)
CNAME              copperfoxinteriors.co (placeholder — set to real domain)
robots.txt, sitemap.xml
```

## To finish before launch

- [ ] Replace every `[PLACEHOLDER]` / `[ ... ]` with real copy
- [ ] Add real logo, favicon set, hero image, and gallery photos (real projects only)
- [ ] Set real phone / email / address / hours / social links
- [ ] Wire the contact form to a handler (Formspree, Netlify Forms, etc.)
- [ ] Confirm production domain and update `CNAME`, canonical URLs, sitemap, schema
- [ ] **Remove the orange `.placeholder-banner` div** from the top of each page
- [ ] Fill in the LocalBusiness JSON-LD in `index.html`

## Local preview

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Staging

Staging uses the shared `demosite.densanon.com` CNAME during development — swap `CNAME`
to that value while previewing, then to the real domain at cutover.
