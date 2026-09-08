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
- **Inter** — weights 400/500/600 — body, UI, chips/tabs. Base `body` font.
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
- **Regular** (`.bcard`) — `<a>`. Column: image (140px) → body. Radius 13px. *(Currently unused
  on the live hub; reserved for future real articles.)*
- **Soon** (`.bcard-soon`) — non-link placeholder. Dashed border. Column: image/placeholder
  (140px) → body (tag → title → "Coming soon" date). Radius 13px.

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
