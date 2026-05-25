# Copper Fox Interiors — Website

Static marketing site for **Copper Fox Interiors** — a full-service interior design &
property staging studio in the **Pacific Northwest** (Seattle · Bellevue · Portland +
surrounding). Founder: **Jaclyn**. Plain HTML/CSS/JS, no build step. For GitHub Pages.

## Status: 🟡 Placeholder scaffold (built to the approved design mockup)

Layout and structure follow the client's homepage mockup. Real structural copy (taglines,
service names, service area, studio description) is in place; genuinely-unverified specifics
are still marked `[PLACEHOLDER]` / `[ ... ]`.

## Brand direction

Airy, calm, elegant, intentional, refined, elevated — *"the site should breathe."* Like a
luxury boutique hotel brand / high-end interiors editorial / architectural design studio.

- **Palette — warm neutrals only:** ivory · soft black · charcoal · mushroom taupe · warm gray · muted copper
- **Type:** Cormorant Garamond serif headlines over Jost sans
- **Photography:** moody natural light, layered textures, organic materials, upscale-but-lived-in, editorial. Avoid bright farmhouse / cluttered / staged-stock.
- **Motion:** restrained — subtle scroll reveal + gentle hover

## Pages

| File | Purpose |
|------|---------|
| `index.html`        | Home — cinematic left-aligned hero, "Thoughtful Design" statement + collage, 4-up services, "Spaces with Intention" feature, partner strip, testimonial, CTA banner |
| `about.html`        | Story, founder (Jaclyn), philosophy, process, stats |
| `services.html`     | The 4 services (detail sections + process) |
| `portfolio.html`    | Filterable project portfolio (placeholder tiles) |
| `for-realtors.html` | Pitch for realtors & developers + partner strip |
| `contact.html`      | Inquiry form (front-end only) + info card |
| `404.html`          | Not-found page |

**Services:** Full-Service Interior Design · New Construction & Renovation ·
Property Staging & Investor Design · For Realtors & Developers.

## ⚠️ Needs real/verified content before launch

- [ ] **Testimonial** — currently a placeholder. Use a real, attributed client review only (per studio policy: no fabricated quotes).
- [ ] **Partner logos** (realtor strip) — confirm each partnership is real and that logo usage is cleared; replace `[ Brokerage ]` placeholders with approved logos.
- [ ] **Founder** — fill Jaclyn's last name + real bio.

## Structure

```
css/styles.css     palette + base styles + mockup-aligned components
js/main.js         mobile nav, portfolio filter, form handling, scroll reveal
site/images/       drop logo (fox emblem), hero, collage, project photos here
CNAME              demosite.densanon.com (staging) — set to copperfoxinteriors.co at cutover
robots.txt, sitemap.xml
```

## To finish before launch

- [ ] Replace remaining `[PLACEHOLDER]` / `[ ... ]` copy
- [ ] Add fox logo emblem + favicon set (placeholder is a triangle glyph)
- [ ] Add cinematic hero photo/video, collage images, project photos (real projects only)
- [ ] Set real Instagram / Pinterest links (phone + email are wired)
- [ ] **Connect the contact form** — see below
- [ ] Add a real testimonial; confirm + clear the realtor partner logos
- [ ] **Remove the `.placeholder-banner` div** from the top of each page

## Connecting the contact form (Formspree)

The contact form (`contact.html`) is fully wired to submit via `fetch` with validation,
a honeypot, and success/error states — it just needs an endpoint. Submissions are
delivered by **Formspree** to **copperfoxinteriors@yahoo.com**. One-time setup:

1. Go to **formspree.io**, sign up (free tier = 50 submissions/mo) using
   `copperfoxinteriors@yahoo.com`.
2. Create a new form; copy the form ID (looks like `xyzabcde` in
   `https://formspree.io/f/xyzabcde`).
3. In `contact.html`, replace `REPLACE_WITH_FORM_ID` in the form `action` with that ID.
4. Submit the form once and click the confirmation email Formspree sends to the inbox.

Until the ID is set, the form shows a friendly "email us directly" message instead of
pretending to send. No backend or server required.

## Local preview

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Staging

`CNAME` = `demosite.densanon.com` (shared staging) during development. Canonical tags +
sitemap already point to production `copperfoxinteriors.co`; swap `CNAME` to that at cutover.
