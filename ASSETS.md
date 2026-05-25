# Copper Fox Interiors — Image Assets

Drop files into **`site/images/`** using the **exact filenames** below. Each slot already
has an `<img>` wired to that path with a graceful fallback: until the file exists, the
warm placeholder tile shows; the moment a correctly-named file is added, it appears
automatically — no code changes needed.

**Photography direction:** moody natural light · layered textures · organic materials ·
upscale-but-lived-in · editorial composition. Warm neutrals. Real Copper Fox projects only
(no stock, no bright farmhouse, no cluttered styling). Format: JPG or WebP, sRGB,
compressed for web (aim < 400 KB each; hero/CTA < 600 KB).

## Brand

| File | Use | Spec |
|------|-----|------|
| `logo-fox.svg`        | Header/footer fox emblem | SVG (transparent), ~80×90; falls back to a ▲ glyph if missing |
| `favicon.ico`         | Browser tab | 32×32 (multi-size ico ok) |
| `favicon-32x32.png`   | Browser tab | 32×32 PNG |
| `favicon-16x16.png`   | Browser tab | 16×16 PNG |
| `apple-touch-icon.png`| iOS home screen | 180×180 PNG |
| `og-image.jpg`        | Social share preview | 1200×630 |

## Home (`index.html`)

| File | Use | Spec / orientation |
|------|-----|--------------------|
| `hero.jpg`            | Full-bleed hero behind the headline | Landscape, ≥ 2000×1200. Keep the focal subject toward the **right** — text sits over the left third. |
| `collage-1.jpg`       | Statement collage — tall left tile | Portrait 3:4 |
| `collage-2.jpg`       | Statement collage — small | Portrait 3:4 |
| `collage-3.jpg`       | Statement collage — small | Portrait 3:4 |
| `collage-4.jpg`       | Statement collage — wide bottom tile | Landscape 3:2 |
| `featured-spaces.jpg` | "Spaces with Intention" wide image | Landscape, ≥ 1600 wide |
| `testimonial.jpg`     | Beside the client quote | Landscape 4:3 |
| `cta-landscape.jpg`   | "Let's create something beautiful" banner | Wide landscape (PNW scene), ≥ 2000 wide |

## Services (`services.html` + home services row)

Shared between the home 4-up row and the Services page detail sections:

| File | Service |
|------|---------|
| `service-interior-design.jpg`   | Full-Service Interior Design |
| `service-new-construction.jpg`  | New Construction & Renovation |
| `service-staging.jpg`           | Property Staging & Investor Design |
| `service-realtors.jpg`          | For Realtors & Developers |

Landscape 4:3 works for both placements.

## About (`about.html`)

| File | Use | Spec |
|------|-----|------|
| `founder-jaclyn.jpg` | Founder portrait | Portrait 4:5 |

## For Realtors (`for-realtors.html`)

| File | Use | Spec |
|------|-----|------|
| `realtors-feature.jpg` | "How It Works" wide image | Landscape, ≥ 1600 wide |

## Portfolio (`portfolio.html`)

| File | Spec |
|------|------|
| `project-01.jpg` … `project-09.jpg` | Portrait 4:5. Update each tile's `alt` text + caption to match the real project. |

## Partner logos (realtor strip) — ⚠️ verify first

Currently text placeholders. **Confirm each partnership is real and that logo usage is
cleared** before adding (Compass, Windermere, Realogy, John L. Scott, Sotheby's appear in
the mockup). When approved, add as `partner-*.svg` and swap the `[ Brokerage ]` spans for
`<img>` tags. Do not display brokerage logos that aren't authorized.

## Still to confirm (not images)

- Jaclyn's last name + bio · a real attributed testimonial · phone number · real Instagram &
  Pinterest URLs · contact-form handler (Formspree/Netlify) · remove the `.placeholder-banner`.
