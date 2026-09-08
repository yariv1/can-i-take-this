# canitakethis.co — Blog System Documentation
*Single source of truth. Update this file whenever anything changes.*

---

## Architecture

### How pages are generated
- `build.js` runs `node build.js` → generates all static HTML
- Blog pages go through `guideShell(o)` — same shell as `/guides/`
- Body content lives as inline JS string vars (`BODY_BLOG_INDEX`, `BODY_PB_ARTICLE`, etc.)
- All blog entries live in the `GUIDES` array, processed by `GUIDES.forEach`
- Sentinel: `/*BLOG_V1*/` guards the blog patch (idempotent)

### URL structure
```
/blog/                                      → blog hub index
/blog/power-bank-rules-2026-crackdown/     → article #1
/blog/liquids-100ml-rule-2026/             → article #2
/blog/[slug]/                              → future articles
```

---

## ARTICLE WRITING WORKFLOW — FOLLOW THIS EVERY TIME, NO EXCEPTIONS

### Step 1 — Plan images FIRST, before writing a single line of article body
- Decide exactly how many images the article will have
- Assign a UNIQUE filename to EACH image — never reuse the same filename twice in one article
- Standard sizes: hero = 800×400px, inline figure = 800×320px
- Write down every filename before touching build.js

### Step 2 — Write the article body
- Every `<figure>` must reference a DIFFERENT image file
- No two `<figure>` tags may have the same `src`
- No `<h1>` in body — guideShell provides it
- No `${fn()}` inside double-quoted string vars — dead literal text
- No raw newlines inside the JS string

### Step 3 — SVG illustrations
- Use explicit CSS vars only — NO `c-blue`, `c-red`, `c-green` ramp classes (widget-only, invisible in guideShell)
- Every SVG must have a `<style>` block with classes using `var(--surface)`, `var(--text)`, `var(--muted)`, `var(--accent)`
- Blue must switch modes: `fill:#1E86D6` light / `[data-theme="dark"]{fill:#4CC2FF}`
- Green, amber, red: hardcode — same in both modes
- No hardcoded dark hex fills (`#161F3A`, `#0d1f30`, etc.) as rect fills — use `var(--surface)` or `fill-opacity` tints
- viewBox always wide enough — no text clipping — verify before shipping
- FLOWCHARTS: do not attempt complex SVG flowcharts. They are unreliable. Use a simple checklist or prose instead.

### Step 4 — Generate preview HTML
- Run guideShell() against the new BODY var to produce a real .html file
- Present it for download — the user opens it in their browser
- DO NOT ship until user explicitly approves

### Step 5 — Image prompts
Deliver in the SAME message as the preview. One prompt per image file. Format:

```
## Image prompts for ChatGPT

**Image 1 — [Role]**
Filename: `blog-[slug]-[descriptor].webp`
Size: **800 × 400px** | WebP 70–75%

> [Subject, angle, lighting, style, colours. No text, no overlays, no logos.]

**Image 2 — [Role]**
Filename: `blog-[slug]-[descriptor2].webp`
Size: **800 × 320px** | WebP 70–75%

> [Subject, angle, lighting, style, colours. No text, no overlays, no logos.]

💡 In ChatGPT: request **landscape** format (1792×1024), then crop to target ratio.
```

Rules:
- Images already committed to repo → still list them with their prompt for the record
- Every `<figure>` in the article = one prompt entry
- Never list the same filename twice
- New files must be noted so CC knows to commit them

### Step 6 — Package zip only after user approves preview
- Zip: `citt-v[N].zip` containing `build.js` + any updated md files
- Write CC prompt ready to copy — no blanks

---

## IMAGE REGISTRY
### All images — current state

| File | Size | Used in | Status |
|------|------|---------|--------|
| `blog-power-bank-2026-hero.webp` | 800×400px | Hub featured card + PB article hero | ✅ live |
| `blog-power-bank-wh-tiers.webp` | 800×320px | PB article inline figure | ✅ live |
| `blog-liquids-100ml-rule-2026-card.webp` | 800×400px | Hub card (liquids) | ✅ live |
| `blog-liquids-100ml-rule-2026-hero.webp` | 800×400px | Liquids article hero | ✅ live |
| `blog-liquids-100ml-rule-2026-inArticle-1.webp` | 800×320px | Liquids article inline figure | ✅ live |
| `blog-vapes-country-rules-hero.webp` | 800×400px | Hub card (coming soon) | ⏳ pending article |
| `blog-carry-on-size-wars-hero.webp` | 800×400px | Hub card (coming soon) | ⏳ pending article |

---

## Images vs SVG illustrations — when to use each

Use **both freely within the same article**.

- **Webp image** — real photo/realistic visual (hero shot, product, airport scene)
- **Inline SVG** — diagram, chart, rule visualisation, schematic
- Combine freely — an article can have multiple images AND multiple SVGs
- When in doubt: photo → image, diagram → SVG, both useful → use both

---

## SVG light/dark mode — mandatory rules

ALL inline SVGs must work in both light and dark mode.

### CRITICAL: c-{ramp} classes DO NOT work in guideShell
`c-blue`, `c-red`, `c-green` etc. are widget-system only. In article SVGs they produce black fills and invisible text. Never use them.

### Always use a `<style>` block with these explicit classes:
```svg
<style>
  .bg{fill:var(--surface)}
  .card{fill:var(--surface-2)}
  .txt{font-family:Inter,sans-serif;font-size:13px;fill:var(--text)}
  .muted{font-family:Inter,sans-serif;font-size:11px;fill:var(--muted)}
  .head{font-family:Space Grotesk,sans-serif;font-weight:700;font-size:13px;letter-spacing:1.5px;fill:var(--muted)}
  .c-blue-t{fill:#1E86D6}
  .c-blue-s{stroke:#1E86D6}
  [data-theme="dark"] .c-blue-t{fill:#4CC2FF}
  [data-theme="dark"] .c-blue-s{stroke:#4CC2FF}
  .ok-txt{fill:#1a7a54}
  .no-txt{fill:#922020}
  [data-theme="dark"] .ok-txt{fill:#2FCF9B}
  [data-theme="dark"] .no-txt{fill:#FF6B6B}
</style>
```

### Color rules
| Color | Light | Dark | Use |
|-------|-------|------|-----|
| Blue | `#1E86D6` | `#4CC2FF` | Info, question nodes — MUST switch via CSS class |
| Green | `#2FCF9B` | `#2FCF9B` | Success / allowed — hardcode, same both modes |
| Amber | `#F5B841` | `#F5B841` | Warning — hardcode |
| Red | `#FF6B6B` | `#FF6B6B` | Banned / stop — hardcode |
| Backgrounds | `var(--surface)` | auto | Never hardcode dark hex |

### Colored panel (tinted):
```svg
<rect ... fill="none" stroke="#2FCF9B" stroke-width="1.5"/>
<rect ... fill="#2FCF9B" fill-opacity="0.08"/>
```
Never: `fill="#0a1f0a"` — hardcoded dark fill breaks light mode.

### viewBox rules
- Width: minimum 560px for 3-col panels, 620px+ for CT-style grids, 680px for flowcharts
- Always verify: longest text string fits inside its container
- No text clipping allowed — check before shipping

---

## FLOWCHARTS — DO NOT USE SVG
SVG flowcharts in the guideShell context are unreliable and have caused repeated failures. Replace with a simple `<div class="checklist">` or prose. If a flowchart is essential, flag it and discuss first.

---

## Image prompt format (ChatGPT)
See Step 5 above. Always delivered in same message as preview. Always one entry per `<figure>`. Never reuse a filename.

---

## Adding a new article — checklist

- [ ] Plan all image filenames BEFORE writing body
- [ ] Every `<figure>` has a unique `src` filename
- [ ] No `<h1>` in body
- [ ] No `${fn()}` in double-quoted strings
- [ ] All SVGs use explicit CSS vars (no c-ramp classes)
- [ ] Blue uses `.c-blue-t` / `.c-blue-s` with dark override
- [ ] No hardcoded dark hex fills
- [ ] viewBox wide enough — text not clipped
- [ ] node -c build.js passes
- [ ] Preview HTML generated and presented BEFORE zip
- [ ] Image prompts delivered in same message as preview
- [ ] Hub bcard-soon promoted to live bcard
- [ ] IMAGE REGISTRY updated
- [ ] `canitakethis.html` included in zip if hub changed

---

## Current blog state

### Live articles
| Slug | Title | Category | Images |
|------|-------|----------|--------|
| `power-bank-rules-2026-crackdown` | Power Banks on Planes: What Actually Changed in 2026 | Batteries & Electronics | hero + wh-tiers |
| `liquids-100ml-rule-2026` | The 100ml Rule in 2026: What Still Trips Travellers Up | Liquids & Packing | hero + bag-rule |

### Placeholder cards (hub)
| Planned title | Category | Image ready |
|---------------|----------|-------------|
| Flying with a Vape: The Country-by-Country Minefield | Vapes | ⏳ no |
| Carry-On Size Wars: Which Airlines Actually Enforce It | Carry-on | ⏳ no |

### Live articles
| Slug | Title | Category | Images |
|------|-------|----------|--------|
| `power-bank-rules-2026-crackdown` | Power Banks on Planes: What Actually Changed in 2026 | Batteries & Electronics | blog-power-bank-2026-hero.webp, blog-power-bank-wh-tiers.webp |
| `liquids-100ml-rule-2026` | The 100ml Rule in 2026: What Still Trips Travellers Up | Liquids & Packing | blog-liquids-2026-hero.webp, blog-liquids-bag-rule.webp |

### Sentinels in build.js
```
/*BLOG_V1*/         ← body vars + guideShell CSS injection
/*GUIDES_V1*/       ← guides+blog forEach loop
```
