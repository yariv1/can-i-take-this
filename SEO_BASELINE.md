# SEO baseline (created 2026-10-12; update before ANY cross-site SEO change, see SEO_RULES.md CHANGE CONTROL)

Source: Google Search Console, property sc-domain:canitakethis.co, Performance, Web, 28 days, read 2026-10-12 (data ends Oct 9). Format: date, clicks, impressions, CTR, average position.

| Date | Clicks | Impressions | CTR | Pos |
|---|---|---|---|---|
| Oct 9 | 0 | 5 | 0% | 19.4 |
| Oct 8 | 0 | 19 | 0% | 33.9 |
| Oct 7 | 0 | 16 | 0% | 34.7 |
| Oct 6 | 13 | 1,965 | 0.7% | 13.2 |
| Oct 5 | 14 | 2,364 | 0.6% | 13.7 |
| Oct 4 | 18 | 2,793 | 0.6% | 15.2 |
| Oct 3 | 26 | 2,621 | 1% | 13.2 |
| Oct 2 | 19 | 2,642 | 0.7% | 15.4 |
| Oct 1 | 12 | 2,661 | 0.5% | 14.5 |
| Sep 30 | 21 | 2,483 | 0.8% | 11.0 |
| Sep 29 | 23 | 2,439 | 0.9% | 11.7 |
| Sep 28 | 19 | 2,389 | 0.8% | 11.7 |
| Sep 27 | 24 | 2,650 | 0.9% | 13.2 |
| Sep 26 | 15 | 2,755 | 0.5% | 13.2 |
| Sep 25 | 27 | 2,522 | 1.1% | 12.0 |
| Sep 24 | 8 | 2,486 | 0.3% | 15.3 |
| Sep 23 | 15 | 2,286 | 0.7% | 14.7 |
| Sep 22 | 20 | 2,226 | 0.9% | 13.6 |
| Sep 21 | 19 | 2,416 | 0.8% | 12.9 |
| Sep 20 | 15 | 2,526 | 0.6% | 13.4 |
| Sep 19 | 13 | 2,639 | 0.5% | 14.5 |
| Sep 18 | 15 | 2,295 | 0.7% | 16.4 |
| Sep 17 | 12 | 1,903 | 0.6% | 17.1 |

28-day totals as of the last good read: 408 clicks, 58.2K impressions, CTR 0.7%, position 15.8.

Top pages before the drop (28 days; clicks / impressions / position): /medication/into/dominican-republic/ 9 / 245 / 8.4; /food/colombia/ 8 / 231 / 7.0; /food/south-korea/ 6 / 1,165 / 8.7; /food/seychelles/ 6 / 97 / 5.1; /country/thailand/plants-seeds/ 5 / 216 / 6.8; /airline/pegasus/power-bank/ 5 / 155 / 6.2; /medication/into/peru/ 5 / 117 / 8.7; /food/kenya/ 5 / 98 / 5.5; /airline/ethiopian-airlines/liquids/ 4 / 555 / 7.4; /food/taiwan/ 4 / 554 / 9.4; /country/india/plants-seeds/ 4 / 514 / 7.7; /food/malaysia/ 4 / 286 / 8.9; /country/indonesia/plants-seeds/ 4 / 145 / 5.6.

Recovery log (add a row each check; see SEO_INCIDENT_2026-10-07.md section 6):
| Check date | Impressions/day (last full days) | Clicks/day | Notes |
|---|---|---|---|
| 2026-10-12 | about 5-19 (Oct 7-9) | 0 | text restore deployed d40804f0a; sitemap resubmit + top-page indexing requests asked of the user |

## Check 2026-10-12 (early recheck)
- GSC performance: data still ends Oct 9 (Oct 7: 16, Oct 8: 19, Oct 9: 5 impressions; 0 clicks). No recovery visible yet (GSC lags 2-3 days; restore deployed Oct 12).
- GSC sitemaps: sitemap.xml Success, last read Oct 9, 1,967 discovered. Resubmit via the form produced no visible change (already registered).
- GA, Sep 14 - Oct 11: 1,003 sessions; Direct 556, Organic Search 441, AI Assistant small. Home card last 7 days: 176 active users (+15.8%), Singapore 83 (likely bot traffic).

## TEST GROUP: food pages rebuilt from official sources (deployed 2026-10-12)
- Change (content only; title, description, H1 unchanged): 8 of the 85 /food/<country>/ pages replaced the generic 7-card template with a chip + card page built from the country's OWN official pages (food_detail*.js, food_topics*.js). Pages: south-korea, norway, mauritius, taiwan, romania, iceland, argentina, serbia. Control: the other 77 food pages (untouched).
- Why: the food template said the same generic sentence for every country (default rule in canitakethis.html FOOD_RULES.def); Google's Sept 2026 spam update (24 Sep to ~8 Oct) coincides with the traffic collapse (SEO_INCIDENT_2026-10-07.md).
- Baseline (GSC, 90 days to Oct 9, clicks/impressions): norway 9/1001, mauritius 9/493, south-korea 8/1844, taiwan 5/1195, romania 4/293, serbia 4/508, iceland 3/181, argentina 3/55. Last 3 days (Oct 7-9) near zero everywhere.
- Rollback: delete a country's entry in food_detail*.js / food_topics*.js (build falls back to the template page) or revert to git tag pre-food-rebuild-2026-10-12.
- Measure: compare impressions/clicks of the 8 vs the 77 on 2026-10-26 and 2026-11-09. If the 8 recover first, extend to more countries; if not, the cause is elsewhere.

### Check 13 Oct 2026 (user request, before the planned Oct 15)
GSC (newest data Oct 10): Oct 7: 16, Oct 8: 19, Oct 9: 5, Oct 10: 8 impressions, 0 clicks; before Oct 7: 1,965-2,793 impressions/day, 12-26 clicks/day. No recovery.
GA traffic acquisition: Sep 29-Oct 5: 317 sessions (Direct 161, Organic Search 154, AI Assistant 2). Oct 6-12: 318 sessions (Direct 273, Organic Search 45). Oct 9-12: 170 sessions (Direct 153, Organic 17). Oct 12 alone: 48 sessions (Direct 35, Organic 13, Unassigned 6). Organic fell about 70% week on week; Direct rose (likely bots/unattributed).

### Check 15 Oct 2026 (session 29, partial: GSC Pages/Queries/Page indexing; GA not read yet)
Page indexing (data of 9 Oct): 1.97K indexed, 88 not indexed (85 "Discovered, currently not indexed": 56 medication, 14 airline, 10 country, 3 food, 2 blog; "Crawled not indexed" = sitemap.xml only; 2 redirect URLs = /airline/<slug>/ overviews). Last 90 days: 0 clicks on any of the 72 blog articles; 30 of them got 161 impressions in total, average positions 40-90 (is-deodorant 39 impressions, banned-medications 21, customs-cash 12, vapes 10, carry-on-size-limits 10). The 1,000-row Pages report has no Wi-Fi, Compensation or Customer Service page. URL inspection of /blog/tsa-precheck-cost-how-to-apply-2026/: URL is on Google, crawled Oct 6, canonical correct, found via sitemap. Impressions by query theme (90 days): baggage 5,661 (1,000+ queries), power bank 1,756 (632), vape 1,716 (331), carry-on 1,512 (830), liquid 1,005 (520), alcohol 752 (378). Still to do: GSC by date (28 days) and GA acquisition for the Oct 15 comparison, then Oct 20.

## 2026-10-18 GSC by page type (28 days, Web, top 1,000 pages by clicks; site total 412 clicks / 58.4K impressions)
Airline pages (pages / clicks / impressions / impr per page): liquids 65/25/8,234/127; baggage-allowance 72/2/6,979/97; power-bank 67/32/6,060/90; alcohol 69/38/4,731/69; perfume-aerosols 69/18/4,556/66; vape 65/27/3,439/53. Country pages: plants-seeds 53/50/3,248/61; tobacco 41/7/1,877/46; cash 35/4/1,303/37; alcohol 47/5/1,299/28; vaping 31/7/475/15. Food 74/106/7,825/106; medication-into 224/84/3,933/18.
Reading: airline pages have higher impressions per page for liquids/alcohol/perfume/vape; country plants-seeds is the strongest country topic (best clicks per page, 50 clicks on 53 pages); country vaping is the weakest (15 impr/page). Query-level split not pulled.
