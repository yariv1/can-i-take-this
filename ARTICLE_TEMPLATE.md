# Article Template — canitakethis.co Blog
*Copy this file. Fill in the blanks. Never start from scratch.*

---

## Frontmatter (for your reference — not read by build.js)

```
title:      "[Article title]"
slug:       [url-slug-here]
tag:        [Category name]
excerpt:    "[1–2 sentence excerpt for the card]"
date:       [Year]
hero_image: blog-[slug]-hero.webp
hero_alt:   "[Descriptive alt text for hero image]"
min_read:   [N]
```

---

## build.js variable name

```
BODY_[SLUG_UPPERCASE_UNDERSCORES]
```
Example: slug `liquids-2026-traps` → `BODY_LIQUIDS_2026`

---

## GUIDES array entry (copy into build.js)

```js
{url:'/blog/[slug]/',slug:'[slug]',
 title:'[Article H1] | canitakethis.co',
 desc:'[~150 char meta description — plain text, no quotes]',
 h1:'[Article H1 — same as title minus site name]',
 body:BODY_[NAME]}
```

---

## Hub card (add to BODY_BLOG_INDEX)

### Promote from bcard-soon to bcard-featured:
```html
<a class="bcard-featured" href="/blog/[slug]/">
  <div class="bcard-img-wrap">
    <img src="/assets/blog-[slug]-hero.webp" alt="[alt]" width="800" height="400">
  </div>
  <div class="bcard-body">
    <span class="tag tag-neutral bcard-tag">[Category] <span class="bcard-new">New</span></span>
    <h2 class="bcard-title">[Title]</h2>
    <p class="bcard-excerpt">[Excerpt]</p>
    <span class="bcard-read">Read article →</span>
  </div>
</a>
```

### Or add as regular bcard (when 2+ articles exist in category):
```html
<a class="bcard" href="/blog/[slug]/">
  <div class="bcard-img-wrap">
    <img src="/assets/blog-[slug]-hero.webp" alt="[alt]" width="800" height="400">
  </div>
  <div class="bcard-body">
    <span class="tag tag-neutral bcard-tag">[Category]</span>
    <h3 class="bcard-title">[Title]</h3>
    <p class="bcard-excerpt">[Excerpt]</p>
    <span class="bcard-read">Read article →</span>
  </div>
</a>
```

---

## Article body HTML (BODY_* var content)

Paste this structure. Delete sections not needed. Never skip the meta bar, hero, or footer disclaimer.

```html
<!-- ① META BAR — always first -->
<div class="art-meta">
  <span class="tag tag-neutral">[Category]</span>
  <span class="art-meta-sep">·</span>
  <span>Updated [Year]</span>
  <span class="art-meta-sep">·</span>
  <span>[N] min read</span>
</div>

<!-- ② HERO IMAGE — always second -->
<figure class="art-hero">
  <img src="/assets/blog-[slug]-hero.webp" alt="[alt]" width="800" height="400">
  <figcaption>[One-line caption]</figcaption>
</figure>

<!-- ③ INTRO — 2–3 short paragraphs, no components yet -->
<p>[Hook paragraph — what changed, why it matters now.]</p>
<p>[Short version / TL;DR of the article.]</p>

<hr>

<!-- ④ SECTION — use components to break up every section -->
<h2>[Section heading]</h2>

<p>[1–2 sentences of context before the component.]</p>

<!-- PICK components as needed: -->

<!-- Callout (key rule / official standard) -->
<div class="callout">
  <div class="callout-icon">🌐</div>
  <div>
    <strong>[Heading]</strong>
    <ul>
      <li>[Point]</li>
    </ul>
  </div>
</div>

<!-- Airline cards -->
<div class="airline-rules">
  <div class="ar-card">
    <div class="ar-head">
      <span class="ar-logo"><img src="https://www.gstatic.com/flights/airline_logos/70px/[IATA].png" alt="[IATA]" onerror="this.style.display='none'"></span>
      <div>
        <div class="ar-name">[Airline]</div>
        <div class="ar-date">[Date]</div>
      </div>
    </div>
    <div class="ar-rule">[Rule]</div>
    <span class="ar-pill [strict|mod]">[Label]</span>
  </div>
</div>

<!-- Country pills -->
<div class="country-row">
  <span class="cpill"><span class="cpill-flag">🇺🇸</span> <strong>[Country]</strong> — [rule]</span>
</div>

<!-- Stat strip -->
<div class="stat-strip">
  <div class="stat-box">
    <div class="stat-num">[N]</div>
    <div class="stat-label">[Label]</div>
  </div>
</div>

<!-- Timeline -->
<div class="timeline">
  <div class="tl-head">🔥 [Title]</div>
  <div class="tl-item">
    <div class="tl-icon">✈️</div>
    <div class="tl-body">
      <span class="tl-when">[Month Year · Airline · Location]</span>
      [Description.]
    </div>
  </div>
</div>

<!-- Inline figure -->
<figure class="art-fig">
  <img src="/assets/blog-[slug]-[name].webp" alt="[alt]" width="800" height="320">
  <figcaption>[Caption]</figcaption>
</figure>

<!-- Wh tiers (batteries articles only) -->
<div class="wh-tiers">
  <div class="wh-tier green"><div class="wh-label">Green zone</div><div class="wh-val">&lt; 100 Wh</div><div class="wh-mah">≈ up to 27,000 mAh</div><div class="wh-verdict">✓ Carry-on OK</div></div>
  <div class="wh-tier amber"><div class="wh-label">Amber zone</div><div class="wh-val">100–160 Wh</div><div class="wh-mah">27,000–43,000 mAh</div><div class="wh-verdict">⚠ Airline approval</div></div>
  <div class="wh-tier red"><div class="wh-label">Red zone</div><div class="wh-val">&gt; 160 Wh</div><div class="wh-mah">43,000+ mAh</div><div class="wh-verdict">✗ Banned entirely</div></div>
</div>

<hr>

<!-- ⑤ CHECKLIST SECTION — always near the end -->
<h2>How to [action] — quick checklist</h2>

<div class="checklist">
  <div class="cl-item"><span class="cl-num">1</span><div><strong>[Label.]</strong> [Supporting sentence.]</div></div>
  <div class="cl-item"><span class="cl-num">2</span><div><strong>[Label.]</strong> [Supporting sentence.]</div></div>
</div>

<!-- ⑥ FOOTER DISCLAIMER — always last -->
<p><em>Rules change and vary by nationality, route, and fare. Always confirm with the airline or the official customs authority before you travel. Updated [Year].</em></p>
```

---

## Images needed checklist

For each article, produce:

| File | Dimensions | Notes |
|------|-----------|-------|
| `blog-[slug]-hero.webp` | 800×400px | Used in hub card + article hero |
| `blog-[slug]-[optional].webp` | 800×320px | Inline figure if needed |

Place in `/assets/` in repo root.

---

## Consistency rules (never break these)

- ✅ Meta bar always immediately after `<h1>`
- ✅ Hero image always immediately after meta bar
- ✅ Footer disclaimer always last line of body
- ✅ `<hr>` between every major section
- ✅ At least one component per section (no walls of plain paragraphs)
- ✅ Airline cards always use gstatic logo URLs with `onerror` fallback
- ✅ Tag text matches hub card tag text exactly (same string, same category)
- ✅ Image paths always `/assets/blog-[slug]-[name].webp`
- ✅ `width` and `height` attributes always on every `<img>`
- ✅ Excerpt in hub card ≤ 2 sentences, matches article opening tone

