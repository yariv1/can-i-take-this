# Article QA gate (mandatory before every preview link and before every deploy)

The user must never be the only QA. Run the gate yourself, every article, every time:

```
node update_rates.js && node build.js
node audit_article_qa.js <slug>      # must print PASS, exit code 0
```

## What the gate checks (automatically)
1. **Currency, RUNTIME:** loads the real built page with the real `units.js` + `currency.js` in jsdom, switches the site currency to USD, EUR and GBP and reads the DOM. Any foreign-currency amount under 3,000 that is still shown unconverted is a FAIL (legal-limit pages such as customs/duty-free/declaration/-by-country are exempt, same as `currency.js`).
2. **Currency, static:** `convertText` on every text node for USD/EUR/GBP (catches regex gaps), NaN/undefined output.
3. **Images:** the four files exist with the exact names, 800x400 (card, hero) and 800x320 (inline), hero and inline images are used in the page, hub card exists, every `<img>` has a real alt (15+ chars).
4. **Wiring:** `ARTICLES_LIST.md` row, `BLOG_SYSTEM.md` row, `sitemap.xml`, title, meta description length.
5. **Typography:** no inline font-size below 0.85rem in the article.
6. **Structure:** exactly one article `<h1>`, an official sources block, a "Checked <Month Year>" line, no NaN/undefined/[object].

7. **Card grids:** a flex-column `*-card` in the article CSS must have its footer pinned with `margin-top:auto` (DESIGN_SYSTEM 8.11).

8. **SEO, site-wide:** `node audit_seo.js --fail` must pass (see SEO_RULES.md): one real H1, title and description rules, social tags, WebPage/Article schema with dateModified, sitemap lastmod, related links. The rules live in `seo_post.js`, not in articles.

Old articles (pre-ETIAS) still show legacy FAILs in the all-articles run (missing BLOG_SYSTEM rows, old image names). Those are known documentation gaps; the gate for a NEW article must be clean. A currency FAIL anywhere is always real.

## What the gate cannot see (do it in the browser pane, then say so)
- 360px width (Galaxy S22 class), light and dark theme, header fits.
- Bento grids (DESIGN_SYSTEM 8.13): at 900px the cards show two column offsets, at 375px one, with unequal heights and no horizontal scroll.
- Tables: at a 900px viewport the table wrapper must not scroll horizontally (`wrap.scrollWidth <= wrap.clientWidth`); row headers are short names only (DESIGN_SYSTEM 8.12).
- Looking at the finished page: stat strips, tables, grids, flag images load. In a card grid, check that the footers of neighbouring cards sit on the same line (measure with JS `bottom - footer.bottom`, it must be equal for all cards).
- Images: view each at full size; read every sign/board/note text; compare with the article claim (IMAGE_PROMPT_GUIDE section 12).

## Incident log
### 2026-10-04: euro amounts not converted when the currency is USD (ETIAS article)
- **What happened:** the ETIAS article showed "€20" in the fee card and stat strip while the header currency was USD. The user saw it by chance on a screenshot. The same bug affected every € or £ amount on the whole site.
- **Root cause:** `currency.js` treated USD as "authored text, do nothing" (`cur === 'USD' || ...` early return in `transform`, plus tooltip and mouse guards). That was correct while every price was written in dollars. A European article (euro fee) broke the assumption. The earlier audit (`audit_currency.js`, default target INR) never tested the USD target, and no per-article check existed.
- **Fix:** USD mode now converts € and £ to "~$" with the published-price tooltip; rates load async, then `cittUnits.refresh()`.
- **Prevention:** `audit_article_qa.js` (runtime currency check in USD/EUR/GBP). Verified: with the old guard restored the gate fails with four "€ shown unconverted" lines; with the fix it passes.
- **Process lesson:** a rule that says "X is handled automatically" is not proof. Test the actual rendered page in each mode (USD, EUR, GBP) for every new article, with a script, before showing the user a link.

## AIRLINE NAMES ALWAYS GET THE AIRLINE LOGO (HARD, user order 2026-10-10)
Whenever an airline name starts a list item, checklist line or table row in an article, the marker next to it is that airline's real logo (gstatic flights logo by IATA code), never a generic emoji or coloured dot. Implemented once in build.js (`airLogoIcons` inside `decorateIcons`, name-to-IATA map `LOGO_AIR`), so every article gets it automatically; add a new airline to `LOGO_AIR` when an article names one that is not listed. Tables use the `logo()` helper. Check the preview: no emoji next to an airline name.

## AIRLINE LOGO LAYOUT IN TABLES (HARD, user order 2026-10-10)
Every airline cell in a table or list is built the same way: the logo in a fixed 32 x 32 px box (object-fit: contain, so wide logos and square logos take the same space), then the airline name to its right on the same line, never the name stacked under the logo. Done once in build.js (`TBL_LOGO_RE` inside `airLogoIcons`), which rewrites the `logo(code, name)` helper output on every page. Keep using `logo(code, name)` in new article files; never hand-build a different layout.

## NO DASHED LINES IN ILLUSTRATIONS (HARD, user order 2026-10-10)
Size illustrations (`bagSvg`) never draw a dashed reference outline. To compare two sizes, draw two solid bags side by side with `second: { h, w, d, label }`. The helper ignores `refH`/`refW` and the `.ref` dashed style is not used. When a new illustration helper is written, no dashed or dotted guide lines either.

## LOGO ROWS ARE VERTICALLY CENTRED (HARD, user order 2026-10-10)
In lists, the airline logo and its text are centred on the same horizontal axis (the logo list item uses align-items:center and the marker has no top padding). Implemented once in build.js `airLogoIcons` (it rewrites the whole `cl-item` opening). Never put a hand-made `<img>` into a `cl()` marker: use any short placeholder (a bullet) and let `airLogoIcons` swap it by the airline name that starts the item. After a build, measure in the browser: logo centre minus text centre must be within 1 px.

## TO-DO LISTS (HARD, user order 2026-10-10)
A "Before you fly" style step list is a to-do list: the heading has NO checkbox icon (never a big green check before a title) and every step starts with a small CHECKED checkbox (18 px, green #2FCF9B fill, dark #08111f checkmark, `todo-box`), not a number. Done once in build.js `todoLists` (it strips the heading check mark and swaps numeric `cl()` markers that follow a check-mark heading). In article files write the heading as `<h2>✅ Title</h2>` and the steps as `cl([['1', ...], ...])`; the generator does the rest. Heading check marks on any other heading are stripped too.
