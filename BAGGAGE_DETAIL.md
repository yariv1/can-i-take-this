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

**Remaining on the short page (found 12 Oct 2026, 38 airlines at first; done since: Delta, Southwest, British Airways, Finnair, Air France via baggage_detail11-13.js):** alaska-airlines (alaskaair.com blocks scripts and WebFetch; read in Chrome with the shadow-DOM walker), vueling (help.vueling.com 403 on WebFetch, use Chrome), cathay-pacific, ana, austrian, brussels-airlines, tap-air-portugal, transavia, lot-polish, ita-airways, pegasus, sunexpress, air-europa, vietnam-airlines, saudia, flydubai, gulf-air, oman-air, kuwait-airways, royal-jordanian, middle-east-airlines, egyptair, ethiopian-airlines, kenya-airways, south-african-airways, royal-air-maroc, asiana, avianca, azul, gol, copa-airlines, arkia, israir. Slim format (stats, 2-3 sections, 5 FAQ, sources), read on own pages only, disclose what was not read.

**How to read hard sites (learned in batch 2):** web fetch is blocked or times out on most airline sites; use Claude in Chrome. If `get_page_text` returns only a title, the content is in accordions or tabs: read `document.body` text nodes with a TreeWalker (skip SCRIPT/STYLE) so hidden accordion text is included, and print in slices of about 950 characters (longer outputs are truncated; strings that look like cookie/query data are blocked, so strip `=`, `&`, `?`). A table whose merged cells flatten badly (China Southern carry-on) must be checked with a screenshot. Where an airline publishes several tables by ticket issue date or promo (Etihad Business and First), give only the figures that are stable and tell the reader to use the allowance on the ticket.

**Measure:** compare clicks/impressions for `/airline/<slug>/baggage-allowance/` against `gsc_baseline_pages_2026-10-07.csv` after 3-4 weeks.

Batch 7 (`baggage_detail7.js`, checked 12 October 2026, own pages): Virgin Atlantic (new airline; topics in `airline_topics4.js`).

Batch 8 (`baggage_detail8.js`, checked 12 October 2026, own pages): Hawaiian Airlines (new airline; topics in `airline_topics5.js`).

Batch 9 (`baggage_detail9.js`, checked 12 October 2026, own pages): WestJet (new airline; topics in `airline_topics6.js`).

Batch 10 (`baggage_detail10.js`, checked 12 October 2026, own pages): Volaris (new airline; topics in `airline_topics7.js`).


Batches 11-15 (checked 12 October 2026, own pages, slim format, files baggage_detail11-15.js): Delta, Southwest, British Airways, Finnair, Air France, ANA, Austrian, TAP Air Portugal, Brussels Airlines, LOT Polish, ITA Airways, Pegasus, Air Europa. Blocked, need the user's Chrome: Alaska (error page), Vueling (403), Cathay Pacific (calculator only), SunExpress (Cloudflare challenge).

Batches 16-18 (checked 12 October 2026, own pages, baggage_detail16-18.js): flydubai, Oman Air, Ethiopian Airlines, Kenya Airways, South African Airways, Royal Air Maroc, Royal Jordanian (all deployed).

Batches 20-21 (12 Oct 2026): Israir (Hebrew page, English URL 404) and Arkia (arkia.com terms pages; fee document not read) done, 15 airlines remain.
**STILL ON THE SHORT PAGE (end of 12 Oct 2026, 15 airlines) and why:** alaska-airlines (error page to automation), vueling (403), cathay-pacific (calculator only), sunexpress, egyptair, middle-east-airlines (Cloudflare blocks automation), saudia (fares page loads by JS), kuwait-airways (site timeout), copa-airlines (JS app, empty text), gulf-air (adult allowance not stated on the page), vietnam-airlines and asiana (route/cabin labels of the piece tables do not load), transavia (hold baggage page not read), avianca, azul, gol, arkia, israir (not tried). Blocked ones need the user to open the page in his Chrome, or a different route. Do not publish thin pages for them.

Batch 19 (baggage_detail19.js): Avianca deployed. Tried and skipped: azul (error page), gol (conflicting carry-on rules and unlabelled fees). Not tried: arkia, israir.

Batch 22 (12 Oct 2026): Vietnam Airlines and Asiana deployed. Tried in the user Chrome and NOT built: Saudia (carry-on page read: Guest 1 bag 56x45x25 cm 7 kg, Business 12 kg; but no checked-bag allowance by fare on any reachable page), Gulf Air (adult allowance not published, fare-family and route based), Cathay Pacific (allowance only in the baggage calculator), Copa (pages render empty; help article has no figures), Kuwait Airways (site connection timeout), Alaska (error page even in Chrome). Not tried yet: Vueling, SunExpress, EgyptAir, Middle East Airlines, Transavia, Azul, GOL. 13 airlines remain on the short page.

Batch 23 (13 Oct 2026): Vueling (help.vueling.com), Transavia (help center) and GOL (voegol.com.br/en) built, not yet deployed. Still short page (10): Saudia, Gulf Air, Cathay Pacific, Copa, Kuwait Airways, Alaska (no usable figures, see batch 22 note), SunExpress, EgyptAir, Middle East Airlines (Cloudflare verification page even in the user Chrome; readable only if the user passes the check in the tab), Azul (page gives sizes and loyalty-tier bags but not what each fare includes).

**Source rule widened (user, 14 Oct 2026):** the airline's own page comes first. If it cannot be read, a reliable, familiar third-party source may be used, read in full, named and dated, and the page carries the Unofficial source heading (DS 8.21, `unofficial` reason line). Never blogs of unknown origin or AI summaries; say what was not confirmed.

Batch 24-25 (14 Oct 2026, ticket-style rebuild of old-layout pages): EgyptAir and SunExpress (own pages, user ticked Cloudflare), Azul (own Portuguese Bagagens page), Copa (own Help Center fare-class article, undated), Alaska (UNOFFICIAL: LugLess guide, undated, label per DS 8.21; `unofficial` field in the detail entry, `checked` field overrides the date). Still on the old layout: Cathay Pacific (calculator only), Saudia (no checked-bag figures on own pages; MakeMyTrip contradicts the fare rows), Gulf Air (calculator only; third-party guides conflict), Kuwait Airways (site timeout), Middle East Airlines (country block IL). Files: baggage_detail24.js, baggage_detail25.js, baggage_cards2.js, baggage_cards3.js.

Batch 26 (14 Oct 2026, own pages, thin pages that state only what the airline's pages say): Saudia (carry-on page, additional baggage page, branded fares page: no checked bags per fare stated), Gulf Air (baggage information page: calculator only, fixed limits stated), Cathay Pacific (Economy fares page + FAQ pages: Light 1x23 kg, Essential/Flex 2x23 kg, cabin 7 kg; calculator for cabin class and membership). Still on the old layout: Kuwait Airways (kuwaitairways.com times out from the user's Chrome; the search result URLs are kuwaitairways.com/en/is/free-baggage and .../en/is/pages/baggageservice.aspx, retry from another network), Middle East Airlines (country block IL). Files: baggage_detail26.js, baggage_cards3.js.
