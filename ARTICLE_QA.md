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

Old articles (pre-ETIAS) still show legacy FAILs in the all-articles run (missing BLOG_SYSTEM rows, old image names). Those are known documentation gaps; the gate for a NEW article must be clean. A currency FAIL anywhere is always real.

## What the gate cannot see (do it in the browser pane, then say so)
- 360px width (Galaxy S22 class), light and dark theme, header fits.
- Looking at the finished page: stat strips, tables, grids, flag images load. In a card grid, check that the footers of neighbouring cards sit on the same line (measure with JS `bottom - footer.bottom`, it must be equal for all cards).
- Images: view each at full size; read every sign/board/note text; compare with the article claim (IMAGE_PROMPT_GUIDE section 12).

## Incident log
### 2026-10-04: euro amounts not converted when the currency is USD (ETIAS article)
- **What happened:** the ETIAS article showed "€20" in the fee card and stat strip while the header currency was USD. The user saw it by chance on a screenshot. The same bug affected every € or £ amount on the whole site.
- **Root cause:** `currency.js` treated USD as "authored text, do nothing" (`cur === 'USD' || ...` early return in `transform`, plus tooltip and mouse guards). That was correct while every price was written in dollars. A European article (euro fee) broke the assumption. The earlier audit (`audit_currency.js`, default target INR) never tested the USD target, and no per-article check existed.
- **Fix:** USD mode now converts € and £ to "~$" with the published-price tooltip; rates load async, then `cittUnits.refresh()`.
- **Prevention:** `audit_article_qa.js` (runtime currency check in USD/EUR/GBP). Verified: with the old guard restored the gate fails with four "€ shown unconverted" lines; with the fix it passes.
- **Process lesson:** a rule that says "X is handled automatically" is not proof. Test the actual rendered page in each mode (USD, EUR, GBP) for every new article, with a script, before showing the user a link.
