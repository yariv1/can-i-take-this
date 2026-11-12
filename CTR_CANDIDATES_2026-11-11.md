# CTR candidates, GSC 28 days to 2026-11-09 (59.6K impressions, 465 clicks, CTR 0.8%, avg position 18.7)

## A. Ranking top 10, CTR under 2% = title/meta test group (step 3)
food/south-korea (637 impr, 5 clicks, pos 8.9), food/malaysia (519, 8, 8.5), food/dominican-republic (514, 6, 7.9),
country/philippines/plants-seeds (436, 0, 8.7), food/thailand (406, 3, 8.9), food/norway (364, 4, 10.5),
airline/qantas/liquids (397, 1, 9.8), airline/qantas/perfume-aerosols (334, 2, 8.0), food/colombia (320, 6, 6.7),
food/indonesia (304, 5, 7.3), food/nepal (301, 4, 6.5), country/india/plants-seeds (306, 5, 6.7), food/sri-lanka (250, 5, 6.2).
Test group = first 10 above; control = same-shape pages left untouched (e.g. food/vietnam, food/finland, food/peru).

## B. High impressions, 0 clicks, position 50+ = a CTR fix does NOT help (ranking/content problem, step 2)
airline/singapore-airlines/baggage-allowance (789 impr, pos 54.4; queries: baggage rules 112, hand luggage size 39, business class allowance 29),
airline/lufthansa/baggage-allowance (353), airline/american-airlines/wifi (318), airline/cathay-pacific/power-bank (333),
airline/air-new-zealand/baggage-allowance (282), airline/klm/power-bank (274), airline/turkish-airlines/power-bank (271).

## C. Rule
No title/meta edit on more than 40 pages without written approval (audit_seo_change_scope.js).

## D. TEST (prepared 2026-11-12, meta description only, titles unchanged, via seo_restore.json)
Test group (8 food pages, baseline 28d to 2026-11-09, clicks/impr, pos): south-korea 5/637 p8.9, malaysia 8/519 p8.5, dominican-republic 6/514 p7.9,
thailand 3/406 p8.9, norway 4/364 p10.5, colombia 6/320 p6.7, indonesia 5/304 p7.3, nepal 4/301 p6.5.
New description = verdict first, facts taken only from each page's own sourced answer. Control = all other food pages (e.g. vietnam, finland, peru, philippines).
Read-out 4 weeks after deploy: CTR of test vs control in GSC (same 28-day window). GSC shows almost no query text for these pages (e.g. south-korea 591 impr, 4 queries visible), so the test is judged on CTR only.
