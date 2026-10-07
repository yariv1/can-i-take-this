# Airline baggage detail pages (baggage_detail.js)

**Why:** GSC (2026-10-07) showed ~517 baggage queries ("X baggage allowance", position 45-75, 0 clicks). Competitors are 1,000-2,600 word guides; our pages were 76-255 words. Airlines with an entry in `baggage_detail.js` get a full reference page (answer, stat strip, tables, FAQ with FAQPage markup, sources, "Checked <date>"); all other airlines keep the short fare-block page.

**Done (checked 7 October 2026, read on the airline's own pages):** batch 1 (`baggage_detail.js`): Wizz Air, Lufthansa, Singapore Airlines, Air China, Air New Zealand. Batch 2 (`baggage_detail2.js`): Etihad Airways, Qatar Airways, KLM, China Southern, Aer Lingus.

Batch 3 (`baggage_detail3.js`, `baggage_detail3b.js`, checked 7 October 2026, read on own pages): Virgin Australia, Icelandair, Eurowings, Japan Airlines, Philippine Airlines. Icelandair content is in card modals (click each card, step with the arrows); Philippine Airlines allowances are per route and per ticketing date, so only unambiguous rows are shown.

Batch 4 (`baggage_detail4.js`, checked 7 October 2026, own pages): Air Arabia, China Eastern, LATAM, Air Canada, Air India, American Airlines, Aegean, Swiss, JetBlue, Norwegian, Malaysia Airlines, Aeromexico, Frontier, IndiGo, Thai Airways, El Al, easyJet, Korean Air, Iberia. Skipped (no verifiable own-page figures yet): Arkia, Copa. In progress: Vietnam Airlines. Next by GSC impressions: Vietnam, Turkish, ITA, Southwest, SAS, Alaska, LOT, British Airways, Saudia, flydubai, Finnair, Emirates, then the rest.

**Rules (HARD):**
- Add an airline only after reading its OWN baggage pages (cabin, checked, fees). Never type a number from a third-party blog. If the airline's site blocks scripts, read it in a normal browser (Claude in Chrome) as done for these five; PDFs: download and extract text.
- State only what the page says. Where fees vary by date/route, give the airline's own range and say so. Do not paraphrase into a rule the airline did not state (an inference once slipped into a label and was removed).
- Every entry: `title`, `desc` (about 150 chars, with the numbers), `answer`, 4 `stats`, `sections` (h2 with emoji, optional p, table, list), 6 FAQ (include the exact query phrasings from GSC: baggage allowance, cabin size, weight limit, fees), `sources` (the pages read).
- Re-read the sources when the airline changes its rules (the page says "Checked <date>").

**Next candidates by GSC impressions (not yet done):** Turkish, Emirates, Air Arabia, IndiGo, Air India.

**How to read hard sites (learned in batch 2):** web fetch is blocked or times out on most airline sites; use Claude in Chrome. If `get_page_text` returns only a title, the content is in accordions or tabs: read `document.body` text nodes with a TreeWalker (skip SCRIPT/STYLE) so hidden accordion text is included, and print in slices of about 950 characters (longer outputs are truncated; strings that look like cookie/query data are blocked, so strip `=`, `&`, `?`). A table whose merged cells flatten badly (China Southern carry-on) must be checked with a screenshot. Where an airline publishes several tables by ticket issue date or promo (Etihad Business and First), give only the figures that are stable and tell the reader to use the allowance on the ticket.

**Measure:** compare clicks/impressions for `/airline/<slug>/baggage-allowance/` against `gsc_baseline_pages_2026-10-07.csv` after 3-4 weeks.
