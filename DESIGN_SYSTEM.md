# canitakethis.co — DESIGN SYSTEM (Single Source of Truth)

> **Rule zero:** This file is authoritative. Before changing any color, size, weight, radius,
> spacing, or hover behavior, check it here first. After any approved change, update this file
> in the same session. Values below are extracted from the real `build.js` — not invented.
> If code and this doc ever disagree, that is a bug to be reconciled, not ignored.

> **Golden rule for every color:** every color has a **dark** value and a **light** value.
> Never hardcode a single hex where a theme pair is needed — use a CSS variable so light mode
> resolves automatically. Hardcoded hexes are only acceptable when the value is intentionally
> identical in both themes (and that intent must be noted here).

---

## 0. Theme mechanism

- Theme is set on `<html data-theme="dark|light">`, persisted in `localStorage['citt-theme']`, default `dark`.
- Dark tokens live in `:root,[data-theme="dark"]{…}`. Light overrides in `[data-theme="light"]{…}`.
- **These token blocks are duplicated inside every shell** (`shell`, `airShell`, `countryShell`,
  `airPlaneShell`, `guideShell`, `tShell`). A token change must be applied to **every shell that
  defines it**, or themes drift between page types. Not all shells define all tokens (see §1).

---

## 1. Color tokens (dark / light)

Canonical values. A blank light cell means the token isn't redefined in light mode (inherits dark — audit before relying on it).

| Token | Dark | Light | Meaning / usage |
|---|---|---|---|
| `--bg` | `#0E1428` | `#ECEAE1` | Page background base |
| `--glow` | `#1A2542` | `#FFFFFF` | Radial glow at top of page |
| `--surface` | `#161F3A` | `#FFFFFF` | Card / panel / chip / tab background |
| `--surface-2` | `#22304F` | `#F0EEE4` | Secondary surface (placeholders, toggled states) |
| `--line` | `#2A3A5E` | `#DED9CB` | Borders, dividers, hairlines |
| `--text` | `#EDF0F7` | `#1B2233` | Primary text |
| `--muted` | `#8A96B8` | `#6B7488` | Secondary / muted text |
| `--accent` | `#4CC2FF` | `#1E86D6` | Links, accents, CTA background, featured title |
| `--go` | `#2FCF9B` | `#2FCF9B` | Verdict: allowed (same both themes) |
| `--warn` | `#F5B841` | `#F5B841` | Verdict: check first (same both themes) |
| `--stop` | `#FF6B6B` | `#FF6B6B` | Verdict: not allowed (same both themes) |
| `--info` | `#4CC2FF` | `#4CC2FF` | Verdict: info (same both themes) |
| `--card` | `#182238` | `#FFFFFF` | Country/plane pass-card background |
| `--card-text` | `#EDF0F7` | `#141414` | Pass-card text |
| `--card-muted` | `#98A4C2` | `#6A6A6A` | Pass-card muted text |
| `--card-line` | `#2A3A5E` | `#E7E3D6` | Pass-card border |
| `--card-notch` | `#0E1428` | `#ECEAE1` | Pass-card notch cut (countryShell/airPlaneShell) |
| `--card-sub` | `#1E2A46` | `#F4F1E8` | Pass-card sub-panel (help block) |
| `--card-sub-line` | `#2A3A5E` | `#E4DFCE` | Pass-card sub-panel border |
| `--tg-neutral` | `#C2CCE4` | `#333333` | Tag text: neutral |
| `--tg-green` | `#54DDAD` | `#0F6F49` | Tag text: green |
| `--tg-amber` | `#F3C765` | `#8A6410` | Tag text: amber |
| `--tg-stop` | `#FF9A9A` | `#A23131` | Tag text: stop |
| `--mark-bg` | `#26324E` | `#333A48` | Logo mark background |
| `--sel-bg` | `#4CC2FF` | `#1B2233` | Selected chip/tab background |
| `--sel-text` | `#08111f` | `#FFFFFF` | Selected chip/tab text |
| `--ntc-title` | `#FFC9A7` | `#E88345` | Notice box title (airShell) |
| `--ntc-text` | `#9E8373` | `#9C4E1E` | Notice box text |
| `--ntc-stroke` | `#9E8373` | `#E59868` | Notice box border |
| `--ntc-bg` | `rgba(158,131,115,.10)` | `rgba(229,152,104,.14)` | Notice box fill |
| `--more-t` | `#A4B0CF` | `#6B7488` | "Show more" text (countryShell) |
| `--more-th` | `#D2DAEF` | `#1B2233` | "Show more" text hover |
| `--more-hbg` | `#161F3A` | `#FFFFFF` | "Show more" hover background |

### Non-token literals in use (intentional, both-theme-aware)
- **Blog card hover background:** dark `#192443`, light `#F2F2F2`. Applied via explicit
  `[data-theme='light']` override (see §5). These are the *only* sanctioned hover-bg literals.
- **`.bcard-new` badge:** background `rgba(47,207,155,.15)`, text `#2FCF9B` (green, both themes).
- **`.cta` text:** `#fff` (white on accent, both themes).

---

## 2. Typography

**Font families** (imported from Google Fonts):
- **Space Grotesk** — weights 500/600/700 — headings, titles, brand, card titles.
- **Inter** — weights 300/400/500/600 — body, UI, chips/tabs. Base `body` font. Weight 300 is loaded for the light-text rule below.
- **Space Mono** — weights 400/700 — labels, tags, dates, category labels, badges.

**Base:** `body{font-size:16px;line-height:1.55}` (guide/air/country shells use Inter;
the simple `shell()` uses the system sans stack at `16px/1.55`).

**Scale (blog hub / guide `prose`):**
| Use | Font | Size | Weight | Line-height |
|---|---|---|---|---|
| Hub H1 (`.hub-head h1`) | Space Grotesk | `2rem` | 700 | 1.1 |
| Guide H1 (`.guide-h1`) | Space Grotesk | `1.9rem` | 700 | 1.15 |
| Prose H2 | Space Grotesk | `1.4rem` | 700 | 1.2 |
| Prose H3 | Space Grotesk | `1.1rem` | 600 | 1.3 |
| Prose P | Inter | inherit (16px) | 400 | 1.65 |
| Featured card title | Space Grotesk | `1.2rem` | 700 | 1.25 |
| Regular card title | Space Grotesk | `.97rem` | 700 | 1.3 |
| Soon card title | Space Grotesk | `.97rem` | **400** | 1.3 |
| Featured excerpt | Inter | `.92rem` | 400 | 1.6 |
| Regular excerpt | Inter | `.85rem` | 400 | 1.5 |
| Card "Read →" | Inter | `.85rem`/`.82rem` | 600 | — |
| Card tag (`.bcard-tag`) | Space Mono | `.7rem` | 700 (inherited from `.tag`) | — |
| Category label | Space Mono | `.72rem` | 700 | letter-spacing 1.5px, uppercase |
| Soon card date | Space Mono | `.72rem` | 400 | — |

**LIGHT TEXT AFTER A BOLD LEAD (HARD RULE, added 2026-10-06):** body text inside checklist items (`.cl-item`) and descriptive table cells (`.cox-t td`) is Inter **300**; the bold lead-in / labels inside them (`<strong>`, `<b>`, row-header `th`) stay **600**. Reason: 400 on the dark background reads too heavy next to a bold lead. Any new list/table component of this kind must follow it. The CSS lives in `build.js` (`.cl-item>div:last-child`) and `carryon_pages.js` (`.cox-t td`). Keep contrast at WCAG AA (colour is unchanged).

---

## 3. Spacing, radius, sizing

**Radii:**
- `16px` — featured card
- `13px` — regular card, soon card
- `12px` — CTA, callouts, most panels
- `10px` — logo mark, small inputs
- `999px` — pills (chips, tabs, blog header link, theme toggle)

**Layout widths:** `.wrap` max-width `720px` (simple shell) / `760px` (guide/air/country shells).

**Card image heights:** featured `min-height:200px`; regular & soon `140px`.

**Grid:**
- `.bcard-grid` → `repeat(auto-fill,minmax(220px,1fr))`, gap `1.1em`, margin-bottom `2.2em`.
- `.bcard-featured` → 1 col mobile; `@media(min-width:580px)` → `1.1fr 1fr` (image left, text right).

**Transitions:** cards `.18s`; chips/tabs `.14s`; theme fade `.25s`.

---

## 4. Components

### 4.1 CTA button (`.cta`)
`background:var(--accent); color:#fff; padding:12px 20px; radius:12px; font-weight:700; text-decoration:none`.

### 4.2 Chips (`.chip`) & Tabs (`.tab`)
`background:var(--surface); border:1px solid var(--line); radius:999px; color:var(--text);
font Inter 13.5px; padding:9px 14px/15px`. Selected (`.on`): `background:var(--sel-bg);
color:var(--sel-text); border-color:var(--sel-bg)`.

### 4.3 Tags (`.tag` family)
Base `.tag`: inline-flex, Space Mono, uppercase. Color variants use `--tg-*` tokens on tinted
backgrounds. `.bcard-tag` overrides size to `.7rem`.

### 4.4 Verdict pass-cards (country/plane)
Backed by `--card*` tokens; status color from `--go/--warn/--stop/--info`.

---

## 5. Blog hub cards (locked spec)

Three card types share one hover behavior. **All three are the source of truth for blog UI.**

### 5.1 Structure
- **Featured** (`.bcard-featured`) — `<a>`. Grid: image left half / text right half ≥580px.
  Body: tag → title → excerpt → "Read article →". Radius 16px.
- **Regular** (`.bcard`) — `<a>`. Column: image (140px) → body. Radius 13px. Used in the section
  swipe rows (image 120px, no "Read article →", see 5.4) and in the section-page grid (full card).
- **Soon** (`.bcard-soon`) — non-link placeholder. Dashed border. Column: image/placeholder
  (140px) → body (tag → title → "Coming soon" date). Radius 13px.

### 5.1b Hub section layout (HARD, user design 2026-10-04; code: `blog_sections.js`, CSS `BLOGSEC.CSS`)
Each blog hub section, top to bottom:
1. `.cat-label` (icon + section name, unchanged).
2. **Featured card** (`.bcard-featured`, see 5.1) = the first card of the section.
3. `.sec-more`: right-aligned accent link "More on **SECTION NAME** →" (name uppercase, 0.92rem, 600) to `/blog/<section-slug>/`. Shown for EVERY section, also with one article (SEO, future growth).
4. `.bcard-scroll`: horizontal swipe row of all remaining cards. Card width 200px (230px ≥640px), image 120px (forced, overrides the inline 140px), title up to 4 lines, **no "Read article →"**, scroll-snap, bleeds to the screen edge (margin -18px), carousel scrollbar per 8.10 (thin, accent track colours as `.hg-row`). Hidden when the section has one article.
Section page `/blog/<slug>/`: title, "← All articles" link, intro line (INTROS in blog_sections.js), featured card, then `.bcard-grid` of the remaining full cards (one column on phones). Sitemap priority 0.8. No duplicate cat-label (the h1 is the name).
Article meta tag (`.art-meta .tag`) is auto-converted to `a.tag.tag-neutral.tag-link` to its section page (hover: accent colour, focus ring). Never hand-write that link.

### 5.2 Colors (locked this session)
| Element | Color | Notes |
|---|---|---|
| Featured excerpt | `var(--text)` | = `#EDF0F7` dark / `#1B2233` light |
| Featured title | `var(--text)`, links tint via accent | title inherits text |
| Soon card title | `var(--text)`, **weight 400** | |
| Soon card tag | `var(--accent)` | = `#4CC2FF` dark / `#1E86D6` light |
| `.bcard-new` badge | `#2FCF9B` on `rgba(47,207,155,.15)` | green, both themes |

### 5.3 Hover (locked — applies identically to ALL cards)
The **only** hover effect is a background color change:
- Dark: `background:#192443`
- Light: `background:#F2F2F2`
- **No** border/stroke color change.
- **No** box-shadow.
- **No** text underline anywhere (enforced via
  `.bcard-featured,.bcard,.bcard-soon,… *{text-decoration:none !important}`).

```css
.bcard-featured,.bcard,.bcard-soon,.bcard-featured *,.bcard *,.bcard-soon *{text-decoration:none !important}
.bcard-featured:hover,.bcard:hover,.bcard-soon:hover{background:#192443;text-decoration:none}
.bcard-featured:hover *,.bcard:hover *,.bcard-soon:hover *{text-decoration:none}
[data-theme='light'] .bcard-featured:hover,[data-theme='light'] .bcard:hover,[data-theme='light'] .bcard-soon:hover{background:#F2F2F2}
```

> **⚠ KNOWN BUG (not yet approved to fix):** in the current `build.js` the light-mode hover
> selector reads `.bcard-featured:hover,[data-theme='light'] .bcard:hover,…` — the **featured
> selector is missing its `[data-theme='light']` prefix**. Effect: the featured card turns
> `#F2F2F2` on hover in **dark mode too**, overriding `#192443`. Correct first selector should be
> `[data-theme='light'] .bcard-featured:hover`. Flagged for a one-fix approval.

---

## 6. Change protocol (how we avoid the nightmare)

1. **Locate before editing.** `grep` the exact rule in `build.js`; never edit from memory.
2. **Theme pairs.** Any color change ships a dark value AND a light value. If using a raw hex,
   justify why it's theme-identical here.
3. **Scope precisely.** Confirm which selector(s) — featured vs regular vs soon vs tag vs title —
   before touching. When unsure, ask, don't guess.
4. **All 6 shells** when touching shared tokens/topbar: `shell`, `airShell`, `countryShell`,
   `airPlaneShell`, `guideShell`, `tShell`.
5. **JS-string CSS.** Blog hub CSS lives inside a double-quoted JS string in `guideShell`; use
   `\n` (escaped), never a literal newline. No `${fn()}` inside double-quoted string vars.
   No `<h1>` in `BODY_*` (guideShell adds it).
6. **Verify:** `node -c build.js` must pass before every delivery.
7. **Preview = downloadable .html** via `guideShell()` against the body var. Never a widget.
8. **Update this file** in the same session as the change.

---

## 7. Changelog

- **2026-10-06:** light text (Inter 300) after a bold lead in checklist items and table cells (§2).
- **2026-10-01:** added §8.10 — article scrollbars must match the home-page carousel scrollbar (`:has(>table)` + `.scroll-x` in guideShell CSS).

- **This session:** featured excerpt → `var(--text)`; soon title weight → 400; soon tag →
  `var(--accent)`; unified card hover (bg `#192443`/`#F2F2F2`, no stroke/shadow/underline).
  Flagged featured light-hover selector bug (§5.3).

---

## 8. Article page components (guideShell)

All classes below are defined inside `guideShell` CSS and are available in every `BODY_*` article var. Use these — never invent new classes or inline styles.

### 8.1 Figures (images)

| Class | Use | Notes |
|---|---|---|
| `art-hero` | Hero image at top of article | `<figure class="art-hero"><img ...><figcaption>...</figcaption></figure>` |
| `art-fig` | Inline article image | Same structure as art-hero. **Always use this class — plain `<figure>` has no styling.** |

Both get: border-radius, border `var(--line)`, overflow hidden, caption styled with `var(--muted)` on `var(--surface)` background.

### 8.2 Callout box

```html
<div class="callout">
  <div class="callout-icon">💡</div>
  <div><strong>Label:</strong> Body text here.</div>
</div>
```
Left accent border `var(--accent)`, background `var(--surface)`. Use for key warnings, tips, rules.

### 8.3 Checklist

```html
<div class="checklist">
  <div class="cl-item"><span class="cl-num">1</span>Item text</div>
  <div class="cl-item"><span class="cl-num">✅</span>Item text</div>
  <div class="cl-item"><span class="cl-num">❌</span><div><strong>Title.</strong> Detail text.</div></div>
</div>
```
`cl-num` accepts numbers, emoji, or icons. Each item is a card on `var(--surface)`.

### 8.4 Stat strip

```html
<div class="stat-strip">
  <div class="stat-box"><div class="stat-num">100ml</div><div class="stat-label">Description</div></div>
</div>
```
Auto-fill grid. `stat-num` in `var(--accent)`, large. Use for 2–4 key facts.

### 8.5 Timeline

```html
<div class="timeline">
  <div class="tl-head">Title</div>
  <div class="tl-item">
    <div class="tl-icon">✈️</div>
    <div class="tl-body"><span class="tl-when">Label</span>Body text.</div>
  </div>
</div>
```
Bordered card, icon left column, `tl-when` in `var(--muted)` Space Mono. Use for history, events, steps.

### 8.6 Blockquote

```html
<blockquote><p>Quote text.</p></blockquote>
```
Left border `var(--accent)`, background `var(--surface)`, text `var(--muted)`.

### 8.7 Article meta
(The category tag is turned into a link to its blog section page at build time by `blog_sections.js`; write it as a plain span.)

```html
<div class="art-meta">
  <span class="tag tag-neutral">Category</span>
  <span class="art-meta-sep">&middot;</span>
  <span>Updated 2026</span>
  <span class="art-meta-sep">&middot;</span>
  <span>X min read</span>
</div>
```
Always the first element in every article body.

### 8.8 Icon usage — mandatory

Icons make articles scannable. Humans do not consume content as walls of text. **Every article must use icons throughout.**

**Where icons are required:**
- Every `.cl-item` in a `.checklist` — emoji in `cl-num` (✅ ❌ 💊 ⚠️ 💡 etc.)
- Every `.tl-item` in a `.timeline` — emoji in `tl-icon`
- Every `.callout` — emoji in `callout-icon` (💡 ⚠️ 🔍 ❗)
- Section headers (`h2`) — lead with a relevant emoji where it aids scanning
- Lists (`<ul>`) with 4+ items — consider converting to `.checklist` with icons instead

**Icon selection:**
- Use semantically relevant emoji — ✅/❌ for allowed/banned, 💊 for medicine, ✈️ for flights, ⚠️ for warnings, 💡 for tips, 🔍 for updates/research
- Never use decorative-only icons that add noise without meaning
- Consistent within a block — don't mix ✅ and 👍 for the same concept

**Minimum icon density per article:**
- At least one `.callout` with icon
- At least one `.checklist` with icons
- No section longer than 3 prose paragraphs without a visual component (callout, checklist, stat-strip, timeline, or art-fig)

### 8.9 Rules

- **Every article MUST start with** `art-meta` → `art-hero` figure
- **Every inline image MUST use** `class="art-fig"` — plain `<figure>` has no styling (invisible container)
- **No `<h1>`** in body — `guideShell` renders it
- **No `${fn()}`** inside double-quoted JS string vars
- Use components freely — callouts, checklists, stat strips make articles scannable; walls of prose do not

### 8.10 Horizontal scrollbars (HARD RULE — same everywhere)
- **Updated 2026-10-04 (user):** all scrollbars come from ONE generator, `scrollbar_css.js` (`.h(selector)` horizontal, `.v(selector)` vertical). Default colour for the thumb AND both arrows is **#2F416A** (calm); the light-blue accent appears ONLY on hover, and left arrow / thumb / right arrow each highlight separately. Track `var(--surface)`, bar 16px, thumb 8px visible, chevron arrows via `::-webkit-scrollbar-button` (Firefox gets `scrollbar-color:#2F416A`, no arrows). Never set `scrollbar-color`/`scrollbar-width` in Chromium-targeted rules (it disables the custom arrows). Used by `.hg-row`, `.bcard-scroll`, article table wrappers (`.prose div:has(>table)`, `.prose .scroll-x`) and `.cur-toggle .cu-list`; new scrollers must call the generator.
- **Blog hub swipe rows (`.hs` > `.bcard-scroll` + `.hs-bar`, blog_sections.js):** custom bar, native scrollbar hidden. Prev/next buttons jump exactly ONE card (card width + gap), thumb draggable, track click jumps, arrows disabled at the ends, bar spans the card column (same left/right edge as the featured card), hidden on touch (`hover:none`) and when nothing overflows. Colours #2F416A default, accent on hover per part. `.hg-row` (home) keeps its floating arrows and uses the thumb-only native bar (`SBCSS.h(sel,true)`).
- **Progress/validity bars in articles must not use the light-blue accent** (they read as scrollbars): fill `var(--muted)`, 10px track.
- In articles this is automatic: `guideShell` CSS applies it to any `.prose div:has(>table)` (table wrappers) and to `.prose .scroll-x`. Wrap every new table in a `<div>` directly around the `<table>`, or add class `scroll-x` to any other scroller. Never leave the browser-default white scrollbar.
- Never ship a new scroller (table, carousel, code block, chart) without checking its scrollbar against the home page.

## Header back button (`.back-btn`)
- Left of the logo in every page header (all pages except the home page/app). Markup lives in a
  `.topbar-left` wrapper with `.brand`; on the older `<header>` pages it replaces the `‹` link.
- 34×34, radius 10px, `--surface` bg, 1px `--line` border, icon `--text` (arrow-left, 18px).
  Hover: icon + border → `--accent`. Active: bg `--surface-2`. Focus-visible: 2px `--accent` outline.
- Behavior (inline `onclick`): same-origin referrer + history → `history.back()` (browser restores
  the previous page's scroll position); otherwise follows `href` (`/`, or `/blog/` on articles).
- Phone header sizing (wordmark hidden ≤640px, theme button icon only ≤420px) is now owned by `units.js` — see "Unit switch" below. This older ≤420px/≤370px note is superseded.
- New blog articles must copy the topbar from an existing article so they inherit it.

## Unit switch (`units.js`) — HARD RULE, every page, every template

Site-wide length/weight switch. One shared file, `/units.js`, loaded with `<script src="/units.js" defer></script>` right after `/feedback.js` in **every** page template (home/app, airShell, countryShell, airPlaneShell, guideShell, blog hub). A new template without that line is a bug.

- **Control:** a dropdown pill "in · lb ▾" injected into `.topbar-right`, just before the theme button (a template must keep a `.topbar-right` with `#themeToggle`). Menu rows: "Inches · pounds", "Centimetres · kilograms". Inch first (US audience first). Not a two-segment toggle — it was too wide on phones.
- **Phones, header (HARD RULE, set by the user 2026-10-04):** the header must fit the back button, logo mark, Blog pill, unit dropdown and theme button at 360-412px wide (Galaxy S22 is the reference device) with no overlap and no horizontal scroll.
  - **<=640px:** the wordmark (`.brand h1`, "can i take this?") is hidden on every phone; the logo mark stays. Tablet and desktop show it.
  - **<=420px:** the unit trigger gets tighter padding and the Light/Dark button is icon only (sun in dark theme, moon in light theme, inline SVG written in each template's `__lbl` and initial markup). The label is hidden by `units.js` CSS.
  - Both rules live in the CSS string inside `units.js` (not in the templates). A new template must still have `.brand h1` for the wordmark, `.topbar-right` and `#themeToggle`, and must be checked at 360px, 412px and 640px before deploy.
- **Regression check:** `node audit_units.js` converts every built page in both modes and lists leftovers, stat strips with the unit in the label, and false positives. Run it after changing `units.js` or adding a new page type. Known false positives in its output: the word "in" in the imperial-left-in-metric list ("17 in the UK"), and dual forms that intentionally keep both units.
- **Choice:** saved in `localStorage['citt-units']` ('imp' | 'met'). First visit: browser language region (US, LR, MM = imperial), else timezone, else imperial. No IP lookup. `<html data-units>` mirrors it.
- **Scope:** length (cm/in) and weight (kg/lb) only. NOT volume (ml/oz), grams or currency.
- **How content converts:** at runtime `units.js` rewrites visible text nodes (and anything the app draws later, via MutationObserver). Authored HTML is never changed, so search engines see the original. Write content normally in the airline's own unit; do not pre-convert.
- **Dual forms** "22 × 14 × 9 in (56 × 36 × 23 cm)" and "22 in / 56 cm" are recognised and reordered so the chosen unit comes first. Different quantities in brackets (e.g. "10 kg (55 × 40 × 24 cm)") both convert.
- **Stat strips:** put the number in `.stat-num` and the unit word first in `.stat-label` ("inches, carry-on bag"); `units.js` converts the pair.
- **Opt-out:** `data-units="keep"` on an element, and any table whose header row names both inches and centimetres (explicit two-column tables stay as written).
- **Bare "in"** is only treated as inches after a dimension (`9 in` after `x`) or before punctuation/total/max/etc. Amounts after `$ £ € ¥` are ignored. Thousands (10,000) are not touched.
- **Checks before deploy:** `node -c units.js`; load one airline page, one article and the app; switch both ways. Audit scripts compare converted text in both modes.

## Currency switch (`currency.js`) — HARD RULE, every page, every template
- Header: a currency dropdown ("USD ▾", code only) in `.topbar-right`, LEFT of the unit switch, loaded right after `units.js` (`<script src="/currency.js" defer>`; it needs `window.cittUnits.addTransform`, so it must load after `units.js`). Menu: search box, "Popular" (USD, EUR, GBP, CAD, AUD + the visitor's regional currency from browser language, then timezone; no IP lookup), then "All currencies" A-Z (the 30 ECB currencies + EUR). Phones (≤640px): menu is fixed, 12px from each edge. Header verified at 360px (no overflow).
- Default is ALWAYS USD (authored text). Choice saved in `localStorage['citt-currency']`. The regional currency is only offered in the quick list, never auto-selected.
- Converted amounts REPLACE the published ones (user decision 2026-10-04): "₹7,680" (no ~ prefix, removed 2026-10-04 at user request). Source currencies converted: `$`, `US$`, `USD n`, `€`, `EUR n`, `£`, `GBP n` (ranges "$40–$45" and "$40–45" included). Prefixed dollars (A$, C$, NZ$, S$, HK$, R$ ...) and "AUD $" are NOT converted (phase 2).
- Never converted: amounts of 3,000 or more (legal limits such as cash declarations), anything on pages whose path matches `/country/`, `customs`, `duty-free`, `declaration`, `-by-country`, and any element inside `data-currency="keep"`. Titles/meta stay in USD (static).
- Hover (desktop) or tap on a converted amount shows a tooltip: "Published price: $79.75 · Converted at the ECB rate of <date>. Approximate." (caret hit-test on the text node; `.cur-tip` has `data-currency="keep"`).
- Rounding: ≥1000 → 3 significant figures; ≥10 → whole number; <10 → the currency's decimals. Formatting via `Intl.NumberFormat('en-US', symbol)` so CAD = CA$, AUD = A$ (never a bare `$` for non-USD).
- Rates: `rates.json` (ECB euro reference rates, EUR base, date inside). **Run `node update_rates.js` before every `node build.js` deploy** (keeps the old file if the ECB is unreachable). ECB has no CORS, so rates are a same-origin snapshot; the date shown is the ECB publication date.
- Shared pipeline: `units.js` `processText` applies unit conversion, then every transform registered with `cittUnits.addTransform`. Never touch text nodes from another script. Regression: `node audit_currency.js [CUR]`.

### Header pill height and currency flags (added 2026-10-04, HARD RULE)
- **Every pill in `.topbar-right` is exactly 34px tall** (blog link, currency, units, theme button), the same as the 34×34 back button. The rule lives in the `CSS` string of `units.js` (`box-sizing:border-box;height:34px;display:inline-flex;align-items:center`) and overrides each template's own padding. Any new header control must use the same 34px; verified at 360px, desktop, home, app and article templates (all 34.0px).
- **Currency flags:** menu rows are `[24px round flag] [currency name] ... [CODE muted]`; the trigger is `[18px flag] USD ▾`. Flags come from `https://flagcdn.com/<cc>.svg` (same source as articles, never emoji), EUR uses the EU flag; the `FLAG` map is in `currency.js` (add a flag whenever a currency is added). At ≤420px the trigger shows the flag only (the code is hidden, the `aria-label` carries "Currency: USD (US dollar)") so the four pills fit a 360px header.

## Text on light-blue fills, check icon and step numbers (added 2026-10-04, HARD RULE)
- **Dark text on every light-blue fill.** Any element whose background is the light blue (`--accent` in the dark theme = `#4CC2FF`, a selected chip, selected menu row, primary button, number badge) MUST use dark text `#08111f` in the dark theme. In the light theme the accent is the darker `#1E86D6`, where white text stays. Pattern: `color:#08111f` in the base rule plus `[data-theme="light"] <selector>{color:#fff}`. Reference implementation: the carry-on class chips ("Economy (Classic & Flex)"), `.units-toggle` / `.cu-item` selected rows. Fixed 2026-10-04: `.cta`, `.lqx-chip[aria-pressed=true]`, `.cbx-chip[aria-pressed=true]`. Never ship white text on `#4CC2FF`. Audit in the browser: loop all elements, bg `rgb(76,194,255)` with a light text colour must return nothing.
- **Never use the ✅ or keycap (1️⃣) emoji in articles' visible text.** The OS draws them with a white check/digit on a coloured box that cannot be recoloured. `build.js` `decorateIcons()` (run on every guide/blog body inside `guideShell`) swaps them automatically: `✅` → `<span class="ico-ok">` (light-green box `#6FD08C` with a DARK check, both themes) and `1️⃣`…`9️⃣` → `<span class="num-ic">` (light-blue badge, dark digit in the dark theme, white digit on `#1E86D6` in the light theme). Tags/attributes are never touched. Other emoji (❌, ⚠️, 🪪 …) stay as emoji.
- **Wordmark hides when the header is narrow.** `units.js` makes `.topbar` an inline-size container and hides `.brand h1` ("can i take this?") when the topbar is narrower than 540px (home and app column is ~404px wide even on desktop, articles ~724px keep the wordmark), in addition to the ≤640px viewport rule.

- **USD also converts € and £ (2026-10-04, user request):** currency.js no longer skips conversion in USD mode; € / £ / EUR / GBP amounts become "$" with the published-price tooltip. Rates load async, then `cittUnits.refresh()`. Same exemptions apply (>=3,000, /country/, data-currency="keep").
