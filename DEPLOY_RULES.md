# canitakethis.co — Deploy Rules & Post-Mortem
*Written after painful experience. Every rule here exists because something broke.*

---

## THE CARDINAL RULES

### 1. `canitakethis.html` IS the homepage source — NEVER `index.html`
`build.js` reads `const SRC = path.join(__dirname, 'canitakethis.html')` and **overwrites** `index.html` on every build.
- Fix homepage → fix `canitakethis.html`
- Every zip that touches the homepage must include `canitakethis.html`

### 2. Always ship `canitakethis.html` + `build.js` together

### 3. CHK_BODY extraction uses the LAST `<script>` — not the first
- Must use `matchAll` + take last: `[...html.matchAll(...)][last]`

### 4. Every shell function is a separate code path — fix ALL 6
`shell()`, `airShell()`, `countryShell()`, `airPlaneShell()`, `guideShell()`, `tShell()`

### 5. No `${fn()}` inside double-quoted string vars — dead literal text

### 6. `guideShell` already renders `<h1>` — never put one in `BODY_*` vars

### 7. Images must be in `assets/blog/` AND committed via `git add -A`

### 8. Topbar: Blog + Light toggle grouped in `div.topbar-right`

---

## MANDATORY IMAGE PROMPTS — EVERY NEW ARTICLE

Before the zip is packaged, deliver in the same message as the preview HTML:
- One prompt per `<figure>` in the article
- Every image file must have a UNIQUE filename — never use the same file twice
- Images already in repo still get listed for the record
- Format: filename → size → ChatGPT prompt (see BLOG_SYSTEM.md Step 5)

---

## MANDATORY PREVIEW BEFORE EVERY DEPLOY

- Generate actual article HTML using guideShell() → deliver as downloadable `.html` file
- User opens it in their browser — both light and dark mode
- Only after explicit user approval → package zip and write CC prompt
- A widget or inline render is NOT a preview

---

## SVG IN ARTICLES — CRITICAL RULES

- `c-blue`, `c-red`, `c-green` ramp classes = widget-only. **NEVER use in guideShell articles.**
- All SVG colors via explicit CSS vars: `var(--surface)`, `var(--text)`, `var(--muted)`, `var(--accent)`
- Blue must switch: `#1E86D6` light / `#4CC2FF` dark via `[data-theme="dark"]` CSS rule
- No hardcoded dark hex fills — they break light mode
- **FLOWCHARTS: do not use SVG flowcharts.** Use checklist or prose instead.
- After every SVG change: check light mode mentally — would all text be readable on white?

---

## PRE-SHIP CHECKLIST (run before every zip)

```
node -c build.js   → SYNTAX OK required
```

- [ ] `html.matchAll` used for CHK_SCRIPT_M (not `html.match`)
- [ ] CHK_BODY strips `</head><body>` prefix
- [ ] All 6 shells have `topbar-right` wrapping Blog+toggle
- [ ] No `${functionCall(...)}` inside double-quoted string vars
- [ ] No `<h1>` inside any `BODY_*` var going through `guideShell`
- [ ] All `BODY_*` image paths match actual files in `assets/blog/`
- [ ] Every `<figure>` uses a UNIQUE image filename
- [ ] All new image files noted for CC to commit
- [ ] No SVG `c-ramp` classes in article body
- [ ] No hardcoded dark hex fills in SVGs
- [ ] Preview HTML approved by user
- [ ] Image prompts delivered
- [ ] `canitakethis.html` in zip if homepage changed

---

## CC PROMPT TEMPLATE

```
Unzip ~/Downloads/citt-vN.zip into the repo root at "C:\Users\yariv\Utility Website\can-i-take-this"
(overwrite existing files), then:

1. Run `node build.js` — confirm no errors, ~2010+ pages generated
2. Verify:
   - blog/index.html: [specific checks]
   - blog/[new-slug]/index.html: exists, correct H1, no duplicate H1
   - sitemap.xml: contains /blog/[new-slug]/
3. Confirm image files exist in assets/blog/:
   - [list every image file]
4. Run `git add -A`
5. Commit: "[message]"
6. Push to main

New URLs this deploy: [list]
New image files to commit: [list]
```

---

## WHAT BROKE — LESSONS LEARNED

| Error | Root cause | Rule added |
|-------|-----------|------------|
| v1–v4 | Blog button position wrong; `canitakethis.html` not in zip | Cardinal rules 1+2 |
| v5–v6 | CHK_BODY used first `<script>` → homepage blank | Cardinal rule 3 |
| v7 | Homepage still broken after partial fix | Emergency revert |
| v8 | `canitakethis.html` omitted from zip | Cardinal rule 2 |
| v9 | `${arCard(...)}` dead in double-quoted string | Cardinal rule 5 |
| v10 | Not all 6 shells updated | Cardinal rule 4 |
| v11 | All shells fixed — PASSED | — |
| v12 session | Same image used twice in one article | Image must be unique per figure |
| v12 session | SVG c-ramp classes invisible in guideShell | Never use c-ramp in articles |
| v12 session | Hardcoded dark hex fills broke light mode | Use CSS vars + fill-opacity tints |
| v12 session | SVG flowcharts broken repeatedly | Do not use SVG flowcharts |
| v12 session | No preview before shipping | Preview mandatory before every zip |
| v12 session | Orphan `<hr>` left after removing section | Always check for orphan elements |
| v12 session | Image prompts missing or incomplete | Prompts mandatory, one per figure |
