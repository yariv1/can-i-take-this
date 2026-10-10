# PRIORITY QUEUE (user rule 2026-10-08): work ONLY from this file, highest demand first. Nothing else.
Source: GSC top 1,000 queries by impressions, 3 months to 2026-10-08 (GSC_QUERY_ANALYSIS.md). Each item: official source only (read by me, never from a search summary), rebuild page, audit_seo + audit_dup, preview link, wait for "deploy".

## STEP 0 DEMAND DISCOVERY PASS: DONE 2026-10-08 (session 18). Result: US 'can you bring X on a plane / through TSA' queries hold the demand, we have ~0 impressions there. Ahrefs buckets (US): food through TSA >10,000; food on a plane >1000; cigarettes on a plane >1000 (8+ variants >100); medication on a plane >100; US cash limit >100; razor/batteries/carry-on vape/UK duty free/dog/Montenegro vape all <100 (dropped). BUILT+DEPLOYED: /plane/cigarettes/ (edafe74fe). NEXT: rebuild the food pages (blog/food-you-can-take-on-a-plane-list-2026, food-tsa-vs-customs-2026) for 'can you bring food through TSA' (no GSC impressions for them; SERP intent = solids fine, spreadable/liquid foods 3.4 oz, checked bag no liquid limit); then medication on a plane. Original spec below:
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

## TEMPLATE DEBT (found by the user 2026-10-08)
The 78 airline hub pages /airline/<name>/ still use the OLD shell() template: no global header, 'Related checks' chips, no answer card. Plane pages (7) were converted (airPlaneShell generic mode, 87f41bf23). Plan for hubs (~25 min): airline header + tabs + economy baggage card + topic tile grid; run audit_dup so hubs differ by airline data. Decision pending: user chose to deploy the plane pages first.

## UPDATE 2026-10-09 (session 18)
Ahrefs (US buckets): 'carry on size' >10,000 for Delta, American, Southwest, United, Frontier, JetBlue; 'baggage allowance' >1000 per airline (BA, Emirates, Turkish, Qatar, Delta, Southwest, Lufthansa); 'checked baggage' >1000. DONE: /blog/united-carry-on-size-2026/ (d2509e355). Food rebuild DROPPED (food list article is new, first impressions at pos 4.5). NEXT: (1) rebuild /airline/united/baggage-allowance/ (thin, 205 words) from united.com checked-bag pages; (2) airlines with >1000 baggage demand and no rebuild: Emirates, Qatar; BA parked; (3) other >10,000 carry-on airlines with no page of their own (check Spirit, Hawaiian, Allegiant are not in our airline list). Re-check food list + cigarettes + carry-on articles in GSC on 2026-11-01.

## UPDATE 2026-10-10 (session 19) - CURRENT ORDER
Deployed: United, Emirates, Qatar baggage rebuilds (baggage_detail6.js, 41 of 78 rebuilt), Air Canada baggage page retitled to lead with carry-on size, Hawaiian carry-on article (/blog/hawaiian-airlines-carry-on-size-2026/, 4 images). origin/main afe8ae688.
Ahrefs 2026-10-10 'X carry on size' buckets: US: Spirit >1000 (DROPPED: ceased operations 2026-05-02), Allegiant >1000 (BLOCKED: Cloudflare blocks the site for both Claude and the user; official page https://www.allegiantair.com/baggage-1, build only if the user pastes the text), Hawaiian >1000 (DONE), Air Canada >1000 (DONE, retitled), Ryanair >1000 and 'ryanair carry on size in inches' >1000; UK Ryanair >1000, 'in inches' >100; Ireland Ryanair >100; easyJet US >100 (low).
1. NEXT: Ryanair baggage page (data in baggage_detail5.js, entry 'Ryanair'): lead the title with the carry-on size and add the inch equivalents (free bag 40 x 30 x 20 cm = 15.7 x 11.8 x 7.9 in; Priority bag 55 x 40 x 20 cm = 21.7 x 15.7 x 7.9 in; verify every figure on ryanair.com first), same approach as the Air Canada retitle. No new article.
2. Then, only if wanted: easyJet inches (low, >100), then remaining GSC-impression baggage rebuilds (Transavia 30, Oman 27, Air France 22, Finnair 19, Vietnam 18, Cathay 16, LOT 15, Kuwait 14, TAP 11, Alaska 8): LOW demand, after everything above.
3. Then Turkey vaping, Cuba disposable vapes, Singapore power bank, Turkey/Spain/France duty free.
Re-check GSC for food list, cigarettes, carry-on articles, rebuilt hubs and baggage pages on 2026-11-01.
