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
- Naming convention:
  - Hub card (featured or grid): `blogHome-[slug]-card.webp` — 800×400px
  - Article hero: `blog-[slug]-hero.webp` — 800×400px
  - Inline figures: `blog-[slug]-inArticle-1.webp`, `-inArticle-2.webp`, ... — 800×320px
- Write down every filename before touching build.js

### Image variety rule — mandatory
- Every image must illustrate a DIFFERENT beat/section of the article — never the same scene or subject reshot at a different angle
- Before writing prompts, map each image to the specific section it illustrates
- Images exist to create visual interest and break up text, not to decorate — if two images could swap sections without anyone noticing, they're too similar and need to be redesigned
- Vary subject, setting, and composition across all images in one article (e.g. don't run "medication + bag" three times — mix in a different setting/subject like a checkpoint, a counter abroad, a passport, a map)

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
[Subject, angle, lighting, style, colours. No text, no overlays, no logos. Size: 800 × 400px.]

**Image 2 — [Role]**
Filename: `blog-[slug]-[descriptor2].webp`
[Subject, angle, lighting, style, colours. No text, no overlays, no logos. Size: 800 × 320px.]

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

## Typography & accessibility — mandatory, applies to every article

- **No tiny font sizes.** Floor of `0.8rem` (12.8px) for any label/badge/caption text (`cat-label`, `bcard-tag`, `ar-pill`, `wh-label`, dates), and `0.85rem`+ for any body/caption/rule text (`ar-rule`, figcaptions, `cl-num`, etc). Never ship a class at `10px`/`.65rem`/`.68rem`/`.7rem` again.
- **WCAG AA contrast, every color pair.** Any text color against its actual background must hit **4.5:1** (3:1 only for genuinely large/bold display text). This includes `--muted` text on `--bg`/`--surface` in BOTH themes, and colored pill/badge text against its tinted background. Check with a contrast calculator before shipping a new color, don't eyeball it.
  - Light theme `--muted` was `#6B7488` (3.89:1 against `--bg`, an AA fail) — fixed to `#60687A`. Don't reintroduce a lighter value here.
- **Dimmed text is a bug, not a style choice.** If a reviewer says "I can barely read this," that's the signal — fix the class in the shared CSS block (in `guideShell`'s `<style>`), not just the one instance that got flagged, since every article shares this stylesheet.
- When adding a NEW small-text class, sanity-check its font-size and contrast against this rule before shipping — don't wait to be told.
- **Card grid "Read article" links always sit at the card's bottom edge, never floating right after a variable-length title.** Card title is clamped to 2 lines (`-webkit-line-clamp:2`, ellipsis on overflow — long titles truncate, they never push the layout) and the read-link/date is pinned with `margin-top:auto` inside a flex column whose body has `flex:1`. This applies to both `.bcard` and `.bcard-soon` card variants. Never let a title's natural length determine where the bottom link sits — every card in a row must align regardless of title length.

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
| `blog-vapes-country-rules-hero.webp` | 800×400px | Hub card (vapes) | ✅ live |
| `blog-vapes-country-rules-2026-hero.webp` | 800×400px | Vapes article hero | ✅ live |
| `blog-vapes-country-rules-2026-inArticle-1.webp` | 800×320px | Vapes article inline 1 | ✅ live |
| `blog-vapes-country-rules-2026-inArticle-2.webp` | 800×320px | Vapes article inline 2 | ✅ live |
| `blogHome-carry-on-size-limits-by-airline-2026-card.webp` | 800×400px | Hub card (carry-on) | ✅ live |
| `blog-carry-on-size-limits-by-airline-2026-hero.webp` | 800×400px | Carry-on article hero | ✅ live |
| `blog-carry-on-size-limits-by-airline-2026-inArticle-1.webp` | 800×450px | Carry-on article inline 1 | ✅ live |
| `blog-carry-on-size-limits-by-airline-2026-inArticle-2.webp` | 800×450px | Carry-on article inline 2 | ✅ live |
| `blogHome-aerosols-on-a-plane-2026-card.webp` | 800×400px | Hub card (aerosols) | ✅ live |
| `blog-aerosols-on-a-plane-2026-hero.webp` | 800×400px | Aerosols article hero | ✅ live |
| `blog-aerosols-on-a-plane-2026-inArticle-1.webp` | 800×450px | Aerosols article inline 1 | ✅ live |
| `blog-aerosols-on-a-plane-2026-inArticle-2.webp` | 800×450px | Aerosols article inline 2 | ✅ live |
| `blogHome-duty-free-allowance-by-country-2026-card.webp` | 800×400px | Hub card (duty-free allowance) | ✅ live |
| `blog-duty-free-allowance-by-country-2026-hero.webp` | 800×400px | Duty-free allowance hero | ✅ live |
| `blog-duty-free-allowance-by-country-2026-inArticle-1.webp` | 800×320px | Duty-free allowance inline 1 | ✅ live |
| `blog-duty-free-allowance-by-country-2026-inArticle-2.webp` | 800×320px | Duty-free allowance inline 2 | ✅ live |
| `blogHome-duty-free-tobacco-allowance-by-country-2026-card.webp` | 800×400px | Hub card (duty-free tobacco) | ⏳ pending |
| `blog-duty-free-tobacco-allowance-by-country-2026-hero.webp` | 800×400px | Duty-free tobacco hero | ⏳ pending |
| `blog-duty-free-tobacco-allowance-by-country-2026-inArticle-1.webp` | 800×320px | Duty-free tobacco inline 1 | ⏳ pending |
| `blog-duty-free-tobacco-allowance-by-country-2026-inArticle-2.webp` | 800×320px | Duty-free tobacco inline 2 | ⏳ pending |
| `blogHome-food-you-can-take-on-a-plane-list-2026-card.webp` | 800×400px | Hub card (food list) | ⏳ pending |
| `blog-food-you-can-take-on-a-plane-list-2026-hero.webp` | 800×400px | Food list hero | ⏳ pending |
| `blog-food-you-can-take-on-a-plane-list-2026-inArticle-1.webp` | 800×320px | Food list inline 1 | ⏳ pending |
| `blog-food-you-can-take-on-a-plane-list-2026-inArticle-2.webp` | 800×320px | Food list inline 2 | ⏳ pending |
| `blogHome-baby-food-pouches-on-a-plane-2026-card.webp` | 800×400px | Hub card (baby food) | ⏳ pending |
| `blog-baby-food-pouches-on-a-plane-2026-hero.webp` | 800×400px | Baby food hero | ⏳ pending |
| `blog-baby-food-pouches-on-a-plane-2026-inArticle-1.webp` | 800×320px | Baby food inline 1 | ⏳ pending |
| `blog-baby-food-pouches-on-a-plane-2026-inArticle-2.webp` | 800×320px | Baby food inline 2 | ⏳ pending |
| `blogHome-power-bank-rules-by-airline-2026-card.webp` | 800×400px | Hub card (power bank by airline) | ⏳ pending |
| `blog-power-bank-rules-by-airline-2026-hero.webp` | 800×400px | Power bank by airline hero | ⏳ pending |
| `blog-power-bank-rules-by-airline-2026-inArticle-1.webp` | 800×320px | Power bank by airline inline 1 | ⏳ pending |
| `blog-power-bank-rules-by-airline-2026-inArticle-2.webp` | 800×320px | Power bank by airline inline 2 | ⏳ pending |
| `blogHome-is-it-a-liquid-tsa-list-2026-card.webp` | 800×400px | Hub card (is it a liquid list) | ⏳ pending |
| `blog-is-it-a-liquid-tsa-list-2026-hero.webp` | 800×400px | Is it a liquid list hero | ⏳ pending |
| `blog-is-it-a-liquid-tsa-list-2026-inArticle-1.webp` | 800×320px | Is it a liquid list inline 1 | ⏳ pending |
| `blog-is-it-a-liquid-tsa-list-2026-inArticle-2.webp` | 800×320px | Is it a liquid list inline 2 | ⏳ pending |
| `blogHome-how-many-ounces-can-you-bring-on-a-plane-2026-card.webp` | 800×400px | Hub card (ounces) | ⏳ pending |
| `blog-how-many-ounces-can-you-bring-on-a-plane-2026-hero.webp` | 800×400px | Ounces hero | ⏳ pending |
| `blog-how-many-ounces-can-you-bring-on-a-plane-2026-inArticle-1.webp` | 800×320px | Ounces inline 1 | ⏳ pending |
| `blog-how-many-ounces-can-you-bring-on-a-plane-2026-inArticle-2.webp` | 800×320px | Ounces inline 2 | ⏳ pending |
| `blogHome-how-much-liquid-can-you-put-in-checked-bag-2026-card.webp` | 800×400px | Hub card (checked bag) | ⏳ pending |
| `blog-how-much-liquid-can-you-put-in-checked-bag-2026-hero.webp` | 800×400px | Checked bag hero | ⏳ pending |
| `blog-how-much-liquid-can-you-put-in-checked-bag-2026-inArticle-1.webp` | 800×320px | Checked bag inline 1 | ⏳ pending |
| `blog-how-much-liquid-can-you-put-in-checked-bag-2026-inArticle-2.webp` | 800×320px | Checked bag inline 2 | ⏳ pending |
| `blogHome-duty-free-alcohol-allowance-by-country-2026-card.webp` | 800×400px | Hub card (duty-free alcohol) | ⏳ pending |
| `blog-duty-free-alcohol-allowance-by-country-2026-hero.webp` | 800×400px | Duty-free alcohol hero | ⏳ pending |
| `blog-duty-free-alcohol-allowance-by-country-2026-inArticle-1.webp` | 800×440px | Duty-free alcohol inline 1 (Hong Kong) | ⏳ pending |
| `blog-duty-free-alcohol-allowance-by-country-2026-inArticle-2.webp` | 800×440px | Duty-free alcohol inline 2 (Mauritius) | ⏳ pending |
| `blogHome-japan-customs-declaration-2026-card.webp` | 800×400px | Hub card (Japan customs declaration) | ✅ live |
| `blog-japan-customs-declaration-2026-hero.webp` | 800×400px | Japan customs declaration hero | ✅ live |
| `blog-japan-customs-declaration-2026-inArticle-1.webp` | 800×320px | Japan customs declaration inline 1 | ✅ live |
| `blog-japan-customs-declaration-2026-inArticle-2.webp` | 800×320px | Japan customs declaration inline 2 | ✅ live |
| `blogHome-customs-declaration-forms-by-country-2026-card.webp` | 800×400px | Hub card (declaration forms by country) | ✅ live |
| `blog-customs-declaration-forms-by-country-2026-hero.webp` | 800×400px | Declaration forms hero | ✅ live |
| `blog-customs-declaration-forms-by-country-2026-inArticle-1.webp` | 800×320px | Declaration forms inline 1 | ✅ live |
| `blog-customs-declaration-forms-by-country-2026-inArticle-2.webp` | 800×320px | Declaration forms inline 2 | ✅ live |

*(Note: this registry only tracks images added since the Vapes article — it does not have entries for the 8 Medications articles or the Customs/Food articles. Treat it as a partial log, not a complete inventory. Don't infer an image is missing just because it's absent from this table — check `assets/blog/` directly.)*

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
| `liquids-100ml-rule-2026` | How Many ml Can You Take on a Plane? The 100ml Liquids Rule (2026) | Liquids & Packing | hero + bag-rule |

### Placeholder cards (hub)
| Planned title | Category | Image ready |
|---------------|----------|-------------|
| Flying with a Vape: The Country-by-Country Minefield | Vapes | ⏳ no |
| Carry-On Size Wars: Which Airlines Actually Enforce It | Carry-on | ⏳ no |

### Live articles
| Slug | Title | Category | Images |
|------|-------|----------|--------|
| `power-bank-rules-2026-crackdown` | Power Banks on Planes: What Actually Changed in 2026 | Batteries & Electronics | blog-power-bank-2026-hero.webp, blog-power-bank-wh-tiers.webp |
| `liquids-100ml-rule-2026` | How Many ml Can You Take on a Plane? The 100ml Liquids Rule (2026) | Liquids & Packing | blog-liquids-2026-hero.webp, blog-liquids-bag-rule.webp |

### Sentinels in build.js
```
/*BLOG_V1*/         ← body vars + guideShell CSS injection
/*GUIDES_V1*/       ← guides+blog forEach loop
```

---

## Vapes article — added this session

| Slug | Title | Category | Images |
|------|-------|----------|--------|
| `vapes-country-rules-2026` | Flying with a Vape: The Country-by-Country Minefield | Vapes & E-Cigs | blog-vapes-country-rules-2026-hero.webp, blog-vapes-country-rules-2026-inArticle-1.webp, blog-vapes-country-rules-2026-inArticle-2.webp |

## Content uniqueness (HARD)
Read CONTENT_UNIQUENESS_RULES.md before writing any article or sibling page set; run `node audit_duplicates.js` as the gate.

## Airline baggage fees articles (2026-10-03)

| Slug | Title | Category | Images |
|------|-------|----------|--------|
| `southwest-baggage-fees-2026` | southwest baggage fees 2026 | Airline Fees | blogHome-southwest-baggage-fees-2026-card.webp, blog-southwest-baggage-fees-2026-hero.webp, blog-southwest-baggage-fees-2026-inArticle-1.webp, blog-southwest-baggage-fees-2026-inArticle-2.webp |
| `american-airlines-baggage-fees-2026` | american-airlines baggage fees 2026 | Airline Fees | blogHome-american-airlines-baggage-fees-2026-card.webp, blog-american-airlines-baggage-fees-2026-hero.webp, blog-american-airlines-baggage-fees-2026-inArticle-1.webp, blog-american-airlines-baggage-fees-2026-inArticle-2.webp |
| `delta-baggage-fees-2026` | delta baggage fees 2026 | Airline Fees | blogHome-delta-baggage-fees-2026-card.webp, blog-delta-baggage-fees-2026-hero.webp, blog-delta-baggage-fees-2026-inArticle-1.webp, blog-delta-baggage-fees-2026-inArticle-2.webp |
| `jetblue-baggage-fees-2026` | JetBlue baggage fees 2026 | Airline Fees | blogHome-jetblue-baggage-fees-2026-card.webp, blog-jetblue-baggage-fees-2026-hero.webp, blog-jetblue-baggage-fees-2026-inArticle-1.webp, blog-jetblue-baggage-fees-2026-inArticle-2.webp |

## Airline carry-on size articles (2026-10-04)

| Slug | Title | Category | Images |
|------|-------|----------|--------|
| `delta-carry-on-size-2026` | delta carry-on size 2026 | Carry-On Size | blogHome-delta-carry-on-size-2026-card.webp, blog-delta-carry-on-size-2026-hero.webp, blog-delta-carry-on-size-2026-inArticle-1.webp, blog-delta-carry-on-size-2026-inArticle-2.webp |
| `jetblue-carry-on-size-2026` | jetblue carry-on size 2026 | Carry-On Size | blogHome-jetblue-carry-on-size-2026-card.webp, blog-jetblue-carry-on-size-2026-hero.webp, blog-jetblue-carry-on-size-2026-inArticle-1.webp, blog-jetblue-carry-on-size-2026-inArticle-2.webp |
| `american-airlines-carry-on-size-2026` | american-airlines carry-on size 2026 | Carry-On Size | blogHome-american-airlines-carry-on-size-2026-card.webp, blog-american-airlines-carry-on-size-2026-hero.webp, blog-american-airlines-carry-on-size-2026-inArticle-1.webp, blog-american-airlines-carry-on-size-2026-inArticle-2.webp |
| `alaska-airlines-carry-on-size-2026` | alaska-airlines carry-on size 2026 | Carry-On Size | blogHome-alaska-airlines-carry-on-size-2026-card.webp, blog-alaska-airlines-carry-on-size-2026-hero.webp, blog-alaska-airlines-carry-on-size-2026-inArticle-1.webp, blog-alaska-airlines-carry-on-size-2026-inArticle-2.webp |
| `southwest-carry-on-size-2026` | southwest carry-on size 2026 | Carry-On Size | blogHome-southwest-carry-on-size-2026-card.webp, blog-southwest-carry-on-size-2026-hero.webp, blog-southwest-carry-on-size-2026-inArticle-1.webp, blog-southwest-carry-on-size-2026-inArticle-2.webp |
| `frontier-carry-on-size-2026` | frontier carry-on size 2026 | Carry-On Size | blogHome-frontier-carry-on-size-2026-card.webp, blog-frontier-carry-on-size-2026-hero.webp, blog-frontier-carry-on-size-2026-inArticle-1.webp, blog-frontier-carry-on-size-2026-inArticle-2.webp |
| `tsa-precheck-vs-global-entry-vs-clear-2026` | tsa precheck vs global entry vs clear | US Travel Programs | blogHome-tsa-precheck-vs-global-entry-vs-clear-2026-card.webp, blog-tsa-precheck-vs-global-entry-vs-clear-2026-hero.webp, blog-tsa-precheck-vs-global-entry-vs-clear-2026-inArticle-1.webp, blog-tsa-precheck-vs-global-entry-vs-clear-2026-inArticle-2.webp | pending images |
| `tsa-precheck-cost-how-to-apply-2026` | tsa precheck cost how to apply | US Travel Programs | blogHome-tsa-precheck-cost-how-to-apply-2026-card.webp, blog-tsa-precheck-cost-how-to-apply-2026-hero.webp, blog-tsa-precheck-cost-how-to-apply-2026-inArticle-1.webp, blog-tsa-precheck-cost-how-to-apply-2026-inArticle-2.webp | pending images |
| `global-entry-cost-application-interview-2026` | global entry application interview | US Travel Programs | blogHome-global-entry-cost-application-interview-2026-card.webp, blog-global-entry-cost-application-interview-2026-hero.webp, blog-global-entry-cost-application-interview-2026-inArticle-1.webp, blog-global-entry-cost-application-interview-2026-inArticle-2.webp | pending images |
| `clear-vs-tsa-precheck-2026` | clear vs tsa precheck | US Travel Programs | blogHome-clear-vs-tsa-precheck-2026-card.webp, blog-clear-vs-tsa-precheck-2026-hero.webp, blog-clear-vs-tsa-precheck-2026-inArticle-1.webp, blog-clear-vs-tsa-precheck-2026-inArticle-2.webp | pending images |
| `can-you-fly-without-a-real-id-2026` | can you fly without a real id | US Travel Programs | blogHome-can-you-fly-without-a-real-id-2026-card.webp, blog-can-you-fly-without-a-real-id-2026-hero.webp, blog-can-you-fly-without-a-real-id-2026-inArticle-1.webp, blog-can-you-fly-without-a-real-id-2026-inArticle-2.webp | pending images |
| `etias-travel-authorization-2026` | etias travel authorization | Entry Permits | blogHome-etias-travel-authorization-2026-card.webp, blog-etias-travel-authorization-2026-hero.webp, blog-etias-travel-authorization-2026-inArticle-1.webp, blog-etias-travel-authorization-2026-inArticle-2.webp | pending images |
| `uk-eta-for-us-citizens-2026` | uk eta for us citizens | Entry Permits | blogHome-uk-eta-for-us-citizens-2026-card.webp, blog-uk-eta-for-us-citizens-2026-hero.webp, blog-uk-eta-for-us-citizens-2026-inArticle-1.webp, blog-uk-eta-for-us-citizens-2026-inArticle-2.webp | pending images |
| `tsa-precheck-touchless-id-2026` | tsa precheck touchless id | US Travel Programs | blogHome-tsa-precheck-touchless-id-2026-card.webp, blog-tsa-precheck-touchless-id-2026-hero.webp, blog-tsa-precheck-touchless-id-2026-inArticle-1.webp, blog-tsa-precheck-touchless-id-2026-inArticle-2.webp | pending images |

Source file for these six bodies: `carryon_pages.js` (SVG size diagrams generated from the numbers).

## Visual article rule (HARD, 2026-10-04)
Articles must not be walls of text: hero + inline photos, stat strip, tables with icons (not data in prose), icon bullets / checklists, callouts, and a to-scale SVG diagram where the data is a size. Icons are mandatory (DESIGN_SYSTEM 8.8). Airline carry-on bodies are generated from `carryon_pages.js` (`bagSvg()` draws the size diagrams from the numbers); fees articles are BODY_*FEES_ARTICLE vars in build.js.
Hub sections now: Medications, Batteries & Electronics, **Airline Fees & Policies** (American featured card + Southwest, Delta, JetBlue), **Carry-On Size by Airline** (6 cards), Packing Rules, Customs & Money, Food & Agriculture.

## Units (applies to every article)
Every article page loads `/units.js` (already in `guideShell`). Write numbers in the airline's own unit; the reader's in·lb / cm·kg dropdown in the header converts them. In stat strips keep the number in `.stat-num` and the unit word first in `.stat-label`. For SVG size diagrams labels convert automatically. Do not add manual converted copies except the dual form "22 × 14 × 9 in (56 × 36 × 23 cm)" which `units.js` reorders. Full rules: DESIGN_SYSTEM.md "Unit switch".

- **QA gate (2026-10-04):** every new article must pass `node audit_article_qa.js <slug>` before the preview link and again before deploy; see ARTICLE_QA.md.

## Blog hub sections and section pages (2026-10-04, user design)
- `blog_sections.js` parses `BODY_BLOG_INDEX` in build.js at build time. Per section the hub shows: label, featured card (the FIRST card of the section; non-Medications sections get an excerpt from the article `desc`), "More on <SECTION> →", then a swipe row of the other cards WITHOUT "Read article →". Every section also gets `/blog/<section-slug>/` (featured + full-width grid, same cards) and is in the sitemap.
- Adding an article: add the card to its section in BODY_BLOG_INDEX as before (wire script). New section = new `cat-label` + an entry in `INTROS` in blog_sections.js (build throws otherwise). Section slug = lowercase name, "&" dropped, hyphens.
- Article tag (art-meta) is linked to its section page automatically. Articles missing from the hub (aerosols, carry-on-size-limits-by-airline, duty-free-bag-extra-carry-on, is-deodorant-a-liquid, liquids-100ml-rule, vapes-country-rules) have no section/link: known gap, ask before adding.
- Gate: audit_article_qa.js checks the tag link; section dirs are skipped.
