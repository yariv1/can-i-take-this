# PRIORITY QUEUE (user rule 2026-10-08): work ONLY from this file, highest demand first. Nothing else.
Source: GSC top 1,000 queries by impressions, 3 months to 2026-10-08 (GSC_QUERY_ANALYSIS.md). Each item: official source only (read by me, never from a search summary), rebuild page, audit_seo + audit_dup, preview link, wait for "deploy".

## STEP 0 (agreed with the user at the end of session 17, NOT STARTED): DEMAND DISCOVERY PASS
GSC only shows queries we already appeared for (~10% of 102K impressions). Before building more pages, find the high-demand topics where we have NO page or a weak one:
1. Check demand for ~10 seed topics around what the site covers ("can you bring X on a plane", "vape in [country]", "[airline] baggage", duty free / cash limits, liquids, power bank, medication, pets) with the free Ahrefs keyword tool (use 2-3 word seeds + Questions tab, see reference_ahrefs_free_tool_limits) and Google autocomplete; Google Trends only as a disclosed stand-in (throttling how-to in memory).
2. Compare with our existing pages (do we have a page? is it rebuilt?).
3. Output ONE ranked list (demand high to low) of: (a) queries with no page, (b) queries where our page is weak/ignored. That list REPLACES the order below. The user wants the discovery result in a short table, then decides.
Until the list exists, pause the airline pages and Turkey page (each is only ~15-30 impressions).

## Items (demand = GSC impressions in 3 months, pos = average position)
| # | Page(s) | Impr | Pos | Status |
|---|---------|------|-----|--------|
| 1 | Egypt vaping /country/egypt/vaping/ | 873 | 62 | DEPLOYED 2026-10-08 (20c882fef). Title "Can You Vape in Egypt? 2026 Law and Customs Rules", customs decree 430/2021 section (country_vape_extra.js). No official Egyptian traveller rule on vapes exists; the page says so |
| 2 | Generic liquids ("how many ml allowed on a plane", "is 50 ml allowed") | 509 | 76 | DEPLOYED. Pillar blog/liquids-100ml-rule-2026 already matched queries; FAQPage schema added site-wide for cl-num markup; guides/liquids links to the 3 answer pages. Position depends on competition |
| 3 | Airline baggage pages | ~4,500 total | 45-80 | Rebuilt so far 38/78: the earlier 34 + Ryanair, Turkish Airlines, SAS, Qantas (all DEPLOYED). British Airways SKIPPED: cabin sizes and per-cabin checked allowances exist only inside BA's JS calculator; only extras/fees/infant/overweight are readable; revisit if the calculator can be read. Remaining by demand (baggage/all topics): Transavia 30/54, Oman Air 27/49, Emirates 23/39, Cathay 16/50, LOT 15/37, TAP 11, Air France 22, Finnair 19, Kuwait 14, Vietnam 18, Alaska 8. Already top 10 (skip): Ethiopian, Austrian, Pegasus, ANA, Air Europa |
| 4 | Duty free by country | ~310 | 25-43 | Australia BUILT (country_alcohol.js, /country/australia/alcohol/, UNDEPLOYED). Bulgaria BLOCKED: customs.bg refuses connections (WebFetch and Chrome); the Bulgarian figures were seen only in a search summary, so not used; user decided "we wait". Bulgaria stays on the EU master. Turkey (28 impr), Spain (25), France (13) still to do: add to DATA in country_alcohol.js |
| 5 | Turkey vaping 79 (pos 45), Cuba disposable vapes 57 (pos 28) | 136 | | todo (add to country_vape_extra.js from an official source) |
| 6 | Power bank: Singapore 69 (pos 40); Ethiopian/Icelandair already top 10 | | | todo |
Parked (low demand): plants & seeds for more countries (Korea and Thailand done), EU/other country tobacco/cash, medication, pets, food.

## Rebuilt-page checklist (how each item is done)
Official page read by me in full (Chrome if WebFetch fails) -> add data module entry -> `node build.js` -> `node audit_seo.js --fail` -> `node audit_dup.js` -> preview link (localhost:5055) -> user says "deploy".
