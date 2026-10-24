# GSC request queue (updated 2026-10-14)

One list, in the order to request indexing: **tier 0 first** (Google confirmed it has NOT indexed these), then the tiers below. Work top to bottom, about 10 per day while GSC allows. After each session write the date next to what you requested and mirror it in `GSC_INDEXING_TRACKER.md`.

**Order = what users search for:** inside each tier the order follows our own Search Console impressions (90 days): airlines and countries that already get the most impressions come first; airline Baggage pages count triple; medication pages rank by the demand of their drug and country; blog articles follow the Ahrefs-sized topics. Wi-Fi, Compensation and Customer Service pages have no search data yet (new page types), so they come after the pages with proven demand.

**How it was made:** Tier 0 = the 84 URLs in Search Console > Pages > "Discovered, currently not indexed" (report of 2026-10-09; 56 medication, 13 airline, 10 country, 3 food, 2 blog). Tiers 1 to 6 = every other sitemap URL (2,010) with NO impression in the last 90 days (read 2026-10-14) minus what you already requested; those may be not indexed yet or indexed without showing: GSC cannot tell. The report also shows 2 "Page with redirect" URLs (the /airline/<slug>/ overview URLs, do not request) and sitemap.xml under "Crawled, not indexed" (harmless). Pages built after Oct 9 are not in the report yet. Country, medication, pets and /plane/ pages not in tier 0 mostly have impressions and are not listed.

**Do NOT request:** `/airline/<slug>/` overview URLs (redirect to Baggage), the 27 EU country pages for tobacco, alcohol, plants and cash (canonical points to the EU master pages).

**Finding (90 days):** no Wi-Fi page, no Compensation page, no Customer Service page and only 2 of 72 blog articles appear in the Pages report.

## 2026-10-25 status (read this first)
REQUESTED 2026-10-25 (quota 10/10, all verified NOT on Google by URL Inspection first): airline/volaris/baggage-allowance, airline/virgin-atlantic/perfume-aerosols, airline/lufthansa/compensation, airline/iberia/compensation, blog/us-travel-programs, blog/medications, blog/entry-permits, blog/food-agriculture, blog/customs-money, blog/batteries-electronics.
NEXT QUOTA: 1. blog/airline-fees-policies (NOT on Google, verified 2026-10-25). Then from the Discovered list (not yet inspected): country/european-union/cash, medication/into/hungary, medication/adderall/switzerland, medication/benadryl/singapore, medication/sudafed/china, medication/vicks-inhaler/china. Verify each with URL Inspection first.
Re-crawl due: 2026-10-23 requests (saudia/kuwait-airways/MEA medication, hong-kong vaping, bahrain/oman plants, caribbean warning, westjet/hawaiian liquids, brazil tobacco) still show Discovered/Crawled in the report; check by URL Inspection in a few days.

## 2026-10-23 status (read this first; supersedes the 2026-10-17 NEXT QUOTA list below)
REQUESTED 2026-10-23 (done by Claude in the user's GSC, "Indexing requested" confirmed, quota 10/10): airline/saudia/medication, airline/kuwait-airways/medication, airline/middle-east-airlines/medication, country/hong-kong/vaping (re-crawl), country/bahrain/plants-seeds (re-crawl), country/oman/plants-seeds (re-crawl), blog/travel-warning-caribbean-2026, airline/westjet/liquids, airline/hawaiian-airlines/liquids, country/brazil/tobacco.
NEXT QUOTA (URL Inspection 2026-10-23: NOT on Google): 1. airline/volaris/baggage-allowance 2. airline/virgin-atlantic/perfume-aerosols. Then re-verify others one by one before requesting (the Page indexing report is stale: 6 of 14 listed "Discovered" URLs were already on Google).
ALREADY ON GOOGLE (URL Inspection 2026-10-23, do not request): blog/duty-free-tobacco-allowance-by-country-2026, blog/tsa-precheck-touchless-id-2026, blog/travel-warning-mexico-2026, country/hong-kong/tobacco, country/chile/plants-seeds, country/philippines/cash, airline/virgin-atlantic/baggage-allowance, medication/into/austria, food/costa-rica. Still waiting from 2026-10-17: blog/duty-free-alcohol-allowance-by-country-2026.

## 2026-10-17 status (older)
REQUESTED 2026-10-17 (done): blog/duty-free-alcohol-allowance-by-country-2026, blog/duty-free-tobacco-allowance-by-country-2026, blog/duty-free-allowance-by-country-2026, blog/duty-free-bag-extra-carry-on-2026, blog/is-turks-and-caicos-safe-2026, blog/travel-warning-by-country-2026, blog/level-4-travel-advisory-countries-2026, blog/carry-on-size-by-airline, airline/gulf-air/baggage-allowance, airline/pegasus/baggage-allowance

NEXT QUOTA, in this order (checked with GSC URL inspection 2026-10-17: Page indexing "Discovered/Crawled, not indexed"):
1. https://canitakethis.co/airline/ethiopian-airlines/baggage-allowance/
2. https://canitakethis.co/airline/air-europa/baggage-allowance/
3. https://canitakethis.co/airline/avianca/baggage-allowance/
4. https://canitakethis.co/airline/asiana/baggage-allowance/
5. https://canitakethis.co/medication/benadryl/japan/
6. https://canitakethis.co/medication/benadryl/italy/
7. https://canitakethis.co/medication/benadryl/australia/
8. https://canitakethis.co/country/hong-kong/tobacco/
9. https://canitakethis.co/country/brazil/tobacco/
10. https://canitakethis.co/food/united-arab-emirates/

Already on Google (URL inspection 2026-10-17, do not request): airline/united, austrian, vueling, tap-air-portugal, brussels-airlines baggage; medication/into/japan, thailand, italy; country/india/tobacco was listed earlier but inspects as on Google; blog/duty-free-allowance-by-country-2026.

## Tier 0 CONFIRMED NOT INDEXED by Google (Search Console Page indexing, Oct 9 report: "Discovered, currently not indexed"), most-searched first (84)
https://canitakethis.co/airline/ethiopian-airlines/baggage-allowance/
https://canitakethis.co/airline/pegasus/baggage-allowance/
https://canitakethis.co/airline/austrian/baggage-allowance/
https://canitakethis.co/airline/gulf-air/baggage-allowance/
https://canitakethis.co/airline/tap-air-portugal/baggage-allowance/
https://canitakethis.co/country/philippines/cash/
https://canitakethis.co/country/india/tobacco/
https://canitakethis.co/airline/vueling/baggage-allowance/
https://canitakethis.co/airline/asiana/baggage-allowance/
https://canitakethis.co/blog/duty-free-allowance-by-country-2026/
https://canitakethis.co/blog/duty-free-bag-extra-carry-on-2026/
https://canitakethis.co/airline/brussels-airlines/baggage-allowance/
https://canitakethis.co/airline/vietnam-airlines/power-bank/
https://canitakethis.co/airline/avianca/baggage-allowance/
https://canitakethis.co/airline/united/baggage-allowance/
https://canitakethis.co/airline/korean-air/perfume-aerosols/
https://canitakethis.co/country/chile/plants-seeds/
https://canitakethis.co/airline/air-europa/baggage-allowance/
https://canitakethis.co/country/kenya/vaping/
https://canitakethis.co/food/united-arab-emirates/
https://canitakethis.co/country/brazil/tobacco/
https://canitakethis.co/country/hong-kong/tobacco/
https://canitakethis.co/country/kuwait/plants-seeds/
https://canitakethis.co/country/lebanon/cash/
https://canitakethis.co/country/denmark/cash/
https://canitakethis.co/food/costa-rica/
https://canitakethis.co/medication/tramadol/croatia/
https://canitakethis.co/medication/sudafed/croatia/
https://canitakethis.co/medication/sudafed/thailand/
https://canitakethis.co/medication/codeine/fiji/
https://canitakethis.co/medication/ritalin/hungary/
https://canitakethis.co/medication/tramadol/south-korea/
https://canitakethis.co/medication/tramadol/oman/
https://canitakethis.co/medication/sudafed/oman/
https://canitakethis.co/medication/tramadol/russia/
https://canitakethis.co/medication/tramadol/philippines/
https://canitakethis.co/medication/benadryl/japan/
https://canitakethis.co/medication/benadryl/jamaica/
https://canitakethis.co/medication/tramadol/kuwait/
https://canitakethis.co/medication/benadryl/italy/
https://canitakethis.co/medication/sudafed/sweden/
https://canitakethis.co/medication/ritalin/greece/
https://canitakethis.co/medication/sudafed/indonesia/
https://canitakethis.co/medication/tramadol/malta/
https://canitakethis.co/country/ukraine/tobacco/
https://canitakethis.co/food/slovenia/
https://canitakethis.co/medication/sudafed/austria/
https://canitakethis.co/medication/sudafed/china/
https://canitakethis.co/medication/tramadol/georgia/
https://canitakethis.co/medication/tramadol/saudi-arabia/
https://canitakethis.co/medication/benadryl/australia/
https://canitakethis.co/medication/into/hungary/
https://canitakethis.co/medication/sudafed/georgia/
https://canitakethis.co/medication/codeine/australia/
https://canitakethis.co/medication/ritalin/estonia/
https://canitakethis.co/medication/ritalin/nigeria/
https://canitakethis.co/medication/ritalin/argentina/
https://canitakethis.co/medication/ritalin/mauritius/
https://canitakethis.co/medication/benadryl/estonia/
https://canitakethis.co/medication/cbd-oil/united-kingdom/
https://canitakethis.co/medication/codeine/serbia/
https://canitakethis.co/medication/adderall/philippines/
https://canitakethis.co/medication/codeine/estonia/
https://canitakethis.co/medication/vicks-inhaler/romania/
https://canitakethis.co/medication/benadryl/costa-rica/
https://canitakethis.co/medication/benadryl/poland/
https://canitakethis.co/medication/benadryl/singapore/
https://canitakethis.co/medication/vicks-inhaler/china/
https://canitakethis.co/medication/cbd-oil/philippines/
https://canitakethis.co/medication/into/italy/
https://canitakethis.co/medication/vicks-inhaler/costa-rica/
https://canitakethis.co/medication/vicks-inhaler/poland/
https://canitakethis.co/medication/adderall/iceland/
https://canitakethis.co/medication/adderall/sri-lanka/
https://canitakethis.co/medication/into/south-africa/
https://canitakethis.co/medication/cbd-oil/iceland/
https://canitakethis.co/medication/adderall/malaysia/
https://canitakethis.co/medication/adderall/switzerland/
https://canitakethis.co/medication/adderall/kenya/
https://canitakethis.co/medication/cbd-oil/cyprus/
https://canitakethis.co/medication/adderall/nigeria/
https://canitakethis.co/medication/into/malta/
https://canitakethis.co/medication/into/austria/
https://canitakethis.co/medication/cbd-oil/panama/

## Tier 1 Airline rule pages with no impressions (90 days), airlines people search most first (79)
https://canitakethis.co/airline/kenya-airways/liquids/
https://canitakethis.co/airline/egyptair/perfume-aerosols/
https://canitakethis.co/airline/arkia/vape-e-cigarette/
https://canitakethis.co/airline/arkia/alcohol/
https://canitakethis.co/airline/qantas/power-bank/
https://canitakethis.co/airline/icelandair/vape-e-cigarette/
https://canitakethis.co/airline/icelandair/perfume-aerosols/
https://canitakethis.co/airline/royal-air-maroc/vape-e-cigarette/
https://canitakethis.co/airline/korean-air/vape-e-cigarette/
https://canitakethis.co/airline/sunexpress/perfume-aerosols/
https://canitakethis.co/airline/united/liquids/
https://canitakethis.co/airline/israir/alcohol/
https://canitakethis.co/airline/philippine-airlines/power-bank/
https://canitakethis.co/airline/ana/baggage-allowance/
https://canitakethis.co/airline/kuwait-airways/alcohol/
https://canitakethis.co/airline/air-europa/liquids/
https://canitakethis.co/airline/air-europa/vape-e-cigarette/
https://canitakethis.co/airline/air-europa/perfume-aerosols/
https://canitakethis.co/airline/air-europa/alcohol/
https://canitakethis.co/airline/indigo/perfume-aerosols/
https://canitakethis.co/airline/flydubai/liquids/
https://canitakethis.co/airline/qatar-airways/vape-e-cigarette/
https://canitakethis.co/airline/aeromexico/vape-e-cigarette/
https://canitakethis.co/airline/aer-lingus/perfume-aerosols/
https://canitakethis.co/airline/asiana/perfume-aerosols/
https://canitakethis.co/airline/delta/liquids/
https://canitakethis.co/airline/copa-airlines/alcohol/
https://canitakethis.co/airline/air-canada/vape-e-cigarette/
https://canitakethis.co/airline/gol/liquids/
https://canitakethis.co/airline/gol/perfume-aerosols/
https://canitakethis.co/airline/gol/alcohol/
https://canitakethis.co/airline/singapore-airlines/alcohol/
https://canitakethis.co/airline/frontier/liquids/
https://canitakethis.co/airline/easyjet/power-bank/
https://canitakethis.co/airline/american-airlines/power-bank/
https://canitakethis.co/airline/american-airlines/vape-e-cigarette/
https://canitakethis.co/airline/american-airlines/perfume-aerosols/
https://canitakethis.co/airline/southwest/perfume-aerosols/
https://canitakethis.co/airline/vueling/liquids/
https://canitakethis.co/airline/avianca/vape-e-cigarette/
https://canitakethis.co/airline/avianca/alcohol/
https://canitakethis.co/airline/alaska-airlines/alcohol/
https://canitakethis.co/airline/south-african-airways/power-bank/
https://canitakethis.co/airline/brussels-airlines/perfume-aerosols/
https://canitakethis.co/airline/transavia/liquids/
https://canitakethis.co/airline/azul/liquids/
https://canitakethis.co/airline/azul/power-bank/
https://canitakethis.co/airline/azul/vape-e-cigarette/
https://canitakethis.co/airline/azul/perfume-aerosols/
https://canitakethis.co/airline/azul/alcohol/
https://canitakethis.co/airline/middle-east-airlines/baggage-allowance/
https://canitakethis.co/airline/middle-east-airlines/liquids/
https://canitakethis.co/airline/middle-east-airlines/vape-e-cigarette/
https://canitakethis.co/airline/middle-east-airlines/perfume-aerosols/
https://canitakethis.co/airline/middle-east-airlines/alcohol/
https://canitakethis.co/airline/virgin-atlantic/baggage-allowance/
https://canitakethis.co/airline/virgin-atlantic/liquids/
https://canitakethis.co/airline/virgin-atlantic/power-bank/
https://canitakethis.co/airline/virgin-atlantic/vape-e-cigarette/
https://canitakethis.co/airline/virgin-atlantic/perfume-aerosols/
https://canitakethis.co/airline/virgin-atlantic/alcohol/
https://canitakethis.co/airline/hawaiian-airlines/baggage-allowance/
https://canitakethis.co/airline/hawaiian-airlines/liquids/
https://canitakethis.co/airline/hawaiian-airlines/power-bank/
https://canitakethis.co/airline/hawaiian-airlines/vape-e-cigarette/
https://canitakethis.co/airline/hawaiian-airlines/perfume-aerosols/
https://canitakethis.co/airline/hawaiian-airlines/alcohol/
https://canitakethis.co/airline/westjet/baggage-allowance/
https://canitakethis.co/airline/westjet/liquids/
https://canitakethis.co/airline/westjet/power-bank/
https://canitakethis.co/airline/westjet/vape-e-cigarette/
https://canitakethis.co/airline/westjet/perfume-aerosols/
https://canitakethis.co/airline/westjet/alcohol/
https://canitakethis.co/airline/volaris/baggage-allowance/
https://canitakethis.co/airline/volaris/liquids/
https://canitakethis.co/airline/volaris/power-bank/
https://canitakethis.co/airline/volaris/vape-e-cigarette/
https://canitakethis.co/airline/volaris/perfume-aerosols/
https://canitakethis.co/airline/volaris/alcohol/

## Tier 2 Blog articles with no impressions (big topics first) (60)
https://canitakethis.co/blog/tsa-precheck-vs-global-entry-vs-clear-2026/
https://canitakethis.co/blog/tsa-precheck-cost-how-to-apply-2026/
https://canitakethis.co/blog/global-entry-cost-application-interview-2026/
https://canitakethis.co/blog/clear-vs-tsa-precheck-2026/
https://canitakethis.co/blog/can-you-fly-without-a-real-id-2026/
https://canitakethis.co/blog/etias-travel-authorization-2026/
https://canitakethis.co/blog/uk-eta-for-us-citizens-2026/
https://canitakethis.co/blog/tsa-precheck-touchless-id-2026/
https://canitakethis.co/blog/travel-warning-mexico-2026/
https://canitakethis.co/blog/level-4-travel-advisory-countries-2026/
https://canitakethis.co/blog/travel-warning-caribbean-2026/
https://canitakethis.co/blog/travel-warning-by-country-2026/
https://canitakethis.co/blog/is-turks-and-caicos-safe-2026/
https://canitakethis.co/blog/power-bank-rules-by-airline-2026/
https://canitakethis.co/blog/liquids-100ml-rule-2026/
https://canitakethis.co/blog/customs-cash-declaration-2026/
https://canitakethis.co/blog/duty-free-tobacco-allowance-by-country-2026/
https://canitakethis.co/blog/duty-free-alcohol-allowance-by-country-2026/
https://canitakethis.co/blog/japan-customs-declaration-2026/
https://canitakethis.co/blog/customs-declaration-forms-by-country-2026/
https://canitakethis.co/blog/jetblue-baggage-fees-2026/
https://canitakethis.co/blog/southwest-baggage-fees-2026/
https://canitakethis.co/blog/american-airlines-baggage-fees-2026/
https://canitakethis.co/blog/delta-baggage-fees-2026/
https://canitakethis.co/blog/how-much-liquid-can-you-put-in-checked-bag-2026/
https://canitakethis.co/blog/how-many-ounces-can-you-bring-on-a-plane-2026/
https://canitakethis.co/blog/is-it-a-liquid-tsa-list-2026/
https://canitakethis.co/blog/baby-food-pouches-on-a-plane-2026/
https://canitakethis.co/blog/food-you-can-take-on-a-plane-list-2026/
https://canitakethis.co/blog/food-tsa-vs-customs-2026/
https://canitakethis.co/blog/australia-nz-biosecurity-fines-2026/
https://canitakethis.co/blog/pill-organizers-vs-original-bottles-2026/
https://canitakethis.co/blog/liquid-medication-exemption-2026/
https://canitakethis.co/blog/syringes-epipens-insulin-ice-packs-2026/
https://canitakethis.co/blog/controlled-substances-painkillers-abroad-2026/
https://canitakethis.co/blog/medication-time-zones-2026/
https://canitakethis.co/blog/is-deodorant-a-liquid-2026/
https://canitakethis.co/blog/aerosols-on-a-plane-2026/
https://canitakethis.co/blog/carry-on-size-limits-by-airline-2026/
https://canitakethis.co/blog/cbd-medical-cannabis-travel-2026/
https://canitakethis.co/blog/ozempic-glp1-travel-rules-2026/
https://canitakethis.co/blog/banned-medications-by-country-2026/
https://canitakethis.co/blog/power-bank-rules-2026-crackdown/
https://canitakethis.co/blog/vapes-country-rules-2026/
https://canitakethis.co/blog/delta-carry-on-size-2026/
https://canitakethis.co/blog/jetblue-carry-on-size-2026/
https://canitakethis.co/blog/american-airlines-carry-on-size-2026/
https://canitakethis.co/blog/alaska-airlines-carry-on-size-2026/
https://canitakethis.co/blog/southwest-carry-on-size-2026/
https://canitakethis.co/blog/frontier-carry-on-size-2026/
https://canitakethis.co/blog/medications/
https://canitakethis.co/blog/batteries-electronics/
https://canitakethis.co/blog/airline-fees-policies/
https://canitakethis.co/blog/carry-on-size-by-airline/
https://canitakethis.co/blog/us-travel-programs/
https://canitakethis.co/blog/entry-permits/
https://canitakethis.co/blog/travel-safety/
https://canitakethis.co/blog/packing-rules/
https://canitakethis.co/blog/customs-money/
https://canitakethis.co/blog/food-agriculture/

## Tier 3 Wi-Fi pages (pilot, test 2026-11-03; demand not proven yet) (65)
https://canitakethis.co/airline/jetblue/wifi/
https://canitakethis.co/airline/sas/wifi/
https://canitakethis.co/airline/norwegian/wifi/
https://canitakethis.co/airline/ita-airways/wifi/
https://canitakethis.co/airline/austrian/wifi/
https://canitakethis.co/airline/virgin-atlantic/wifi/
https://canitakethis.co/airline/united/wifi/
https://canitakethis.co/airline/southwest/wifi/
https://canitakethis.co/airline/turkish-airlines/wifi/
https://canitakethis.co/airline/alaska-airlines/wifi/
https://canitakethis.co/airline/air-india/wifi/
https://canitakethis.co/airline/ethiopian-airlines/wifi/
https://canitakethis.co/airline/malaysia-airlines/wifi/
https://canitakethis.co/airline/egyptair/wifi/
https://canitakethis.co/airline/qantas/wifi/
https://canitakethis.co/airline/icelandair/wifi/
https://canitakethis.co/airline/gulf-air/wifi/
https://canitakethis.co/airline/vietnam-airlines/wifi/
https://canitakethis.co/airline/royal-jordanian/wifi/
https://canitakethis.co/airline/thai-airways/wifi/
https://canitakethis.co/airline/china-eastern/wifi/
https://canitakethis.co/airline/royal-air-maroc/wifi/
https://canitakethis.co/airline/wizz-air/wifi/
https://canitakethis.co/airline/aegean/wifi/
https://canitakethis.co/airline/cathay-pacific/wifi/
https://canitakethis.co/airline/korean-air/wifi/
https://canitakethis.co/airline/eurowings/wifi/
https://canitakethis.co/airline/iberia/wifi/
https://canitakethis.co/airline/lufthansa/wifi/
https://canitakethis.co/airline/air-france/wifi/
https://canitakethis.co/airline/el-al/wifi/
https://canitakethis.co/airline/philippine-airlines/wifi/
https://canitakethis.co/airline/etihad-airways/wifi/
https://canitakethis.co/airline/ana/wifi/
https://canitakethis.co/airline/air-europa/wifi/
https://canitakethis.co/airline/indigo/wifi/
https://canitakethis.co/airline/klm/wifi/
https://canitakethis.co/airline/flydubai/wifi/
https://canitakethis.co/airline/saudia/wifi/
https://canitakethis.co/airline/qatar-airways/wifi/
https://canitakethis.co/airline/lot-polish/wifi/
https://canitakethis.co/airline/aer-lingus/wifi/
https://canitakethis.co/airline/oman-air/wifi/
https://canitakethis.co/airline/british-airways/wifi/
https://canitakethis.co/airline/asiana/wifi/
https://canitakethis.co/airline/ryanair/wifi/
https://canitakethis.co/airline/copa-airlines/wifi/
https://canitakethis.co/airline/gol/wifi/
https://canitakethis.co/airline/air-new-zealand/wifi/
https://canitakethis.co/airline/singapore-airlines/wifi/
https://canitakethis.co/airline/virgin-australia/wifi/
https://canitakethis.co/airline/latam/wifi/
https://canitakethis.co/airline/frontier/wifi/
https://canitakethis.co/airline/easyjet/wifi/
https://canitakethis.co/airline/swiss/wifi/
https://canitakethis.co/airline/japan-airlines/wifi/
https://canitakethis.co/airline/emirates/wifi/
https://canitakethis.co/airline/vueling/wifi/
https://canitakethis.co/airline/avianca/wifi/
https://canitakethis.co/airline/brussels-airlines/wifi/
https://canitakethis.co/airline/transavia/wifi/
https://canitakethis.co/airline/middle-east-airlines/wifi/
https://canitakethis.co/airline/hawaiian-airlines/wifi/
https://canitakethis.co/airline/westjet/wifi/
https://canitakethis.co/airline/volaris/wifi/

## Tier 4 Compensation and customer-service pages (15)
https://canitakethis.co/airline/delta/compensation/
https://canitakethis.co/airline/united/compensation/
https://canitakethis.co/airline/southwest/compensation/
https://canitakethis.co/airline/jetblue/compensation/
https://canitakethis.co/airline/ryanair/compensation/
https://canitakethis.co/airline/easyjet/compensation/
https://canitakethis.co/airline/british-airways/compensation/
https://canitakethis.co/airline/lufthansa/compensation/
https://canitakethis.co/airline/air-france/compensation/
https://canitakethis.co/airline/klm/compensation/
https://canitakethis.co/airline/wizz-air/compensation/
https://canitakethis.co/airline/aer-lingus/compensation/
https://canitakethis.co/airline/iberia/compensation/
https://canitakethis.co/airline/turkish-airlines/compensation/
https://canitakethis.co/airline/turkish-airlines/customer-service/

## Tier 5 Food pages with no impressions (11)
https://canitakethis.co/food/japan/
https://canitakethis.co/food/australia/
https://canitakethis.co/food/canada/
https://canitakethis.co/food/netherlands/
https://canitakethis.co/food/saudi-arabia/
https://canitakethis.co/food/ireland/
https://canitakethis.co/food/sweden/
https://canitakethis.co/food/slovakia/
https://canitakethis.co/food/ukraine/
https://canitakethis.co/food/latvia/
https://canitakethis.co/food/lithuania/

## Tier 6 Hubs and other (5)
https://canitakethis.co/blog/
https://canitakethis.co/guides/
https://canitakethis.co/country/european-union/cash/
https://canitakethis.co/about/
https://canitakethis.co/contact/


## 2026-10-18 live GSC check (Page indexing, read in Chrome): NOT indexed now = 91 "Discovered - currently not indexed" + 21 "Crawled - currently not indexed" (+2 redirects). Indexed 1.98K.
Do NOT request: /airline/<slug>/ overview URLs (e.g. /airline/qantas/ redirects), austrian/united/vueling baggage-allowance (URL inspection says on Google), 5 Wi-Fi pages already requested (delta, american-airlines, air-canada, finnair, tap-air-portugal), medication/into/italy (on Google), sitemap.xml.
BEST 25 TO REQUEST NEXT (order = demand per page type from GSC 28 days: food 106 impr/page, airline baggage 97, power bank 90, perfume 66, plants 61, tobacco 46, cash 37, vaping 15, medication 18):
1 https://canitakethis.co/airline/ethiopian-airlines/baggage-allowance/
2 https://canitakethis.co/airline/air-europa/baggage-allowance/
3 https://canitakethis.co/airline/avianca/baggage-allowance/
4 https://canitakethis.co/airline/asiana/baggage-allowance/
5 https://canitakethis.co/food/united-arab-emirates/
6 https://canitakethis.co/food/costa-rica/
7 https://canitakethis.co/airline/vietnam-airlines/power-bank/
8 https://canitakethis.co/airline/korean-air/perfume-aerosols/
9 https://canitakethis.co/country/chile/plants-seeds/
10 https://canitakethis.co/country/kuwait/plants-seeds/
11 https://canitakethis.co/country/hong-kong/tobacco/
12 https://canitakethis.co/country/brazil/tobacco/
13 https://canitakethis.co/country/india/tobacco/
14 https://canitakethis.co/country/philippines/cash/
15 https://canitakethis.co/country/lebanon/cash/
16 https://canitakethis.co/country/kenya/vaping/
17 https://canitakethis.co/food/slovenia/
18 https://canitakethis.co/airline/westjet/alcohol/
19 https://canitakethis.co/airline/westjet/vape-e-cigarette/
20 https://canitakethis.co/medication/benadryl/japan/
21 https://canitakethis.co/medication/benadryl/italy/
22 https://canitakethis.co/medication/benadryl/australia/
23 https://canitakethis.co/medication/sudafed/thailand/
24 https://canitakethis.co/blog/travel-warning-mexico-2026/
25 https://canitakethis.co/blog/tsa-precheck-touchless-id-2026/
Rest of the not-indexed list (about 70 medication pages: adderall, ritalin, tramadol, sudafed, codeine, cbd-oil, vicks-inhaler, medication/into/austria|hungary|malta|south-africa; blog hubs; norwegian/aer-lingus/british-airways Wi-Fi/compensation) = lower demand, request after the 25.

## 2026-10-18 CORRECTION (verified one by one with GSC URL Inspection, not from the Page indexing report)
The Page indexing report is STALE: it listed 112 "not indexed" URLs, but many of them are already on Google. The "BEST 25" list above is WRONG and must not be used. Only the URLs below were verified with URL Inspection on 2026-10-18.
VERIFIED NOT ON GOOGLE (request these, in this order = demand per page type):
1 https://canitakethis.co/food/costa-rica/  (Discovered - currently not indexed)
2 https://canitakethis.co/country/chile/plants-seeds/  (Discovered - currently not indexed)
3 https://canitakethis.co/country/hong-kong/tobacco/  (Discovered - currently not indexed)
4 https://canitakethis.co/country/philippines/cash/  (not on Google)
5 https://canitakethis.co/country/kenya/vaping/  (Discovered - currently not indexed)
6 https://canitakethis.co/blog/travel-warning-mexico-2026/  (not on Google)
7 https://canitakethis.co/blog/tsa-precheck-touchless-id-2026/  (Discovered - currently not indexed)
8 https://canitakethis.co/medication/sudafed/thailand/  (not on Google)
9 https://canitakethis.co/medication/sudafed/china/  (not on Google)
10 https://canitakethis.co/medication/into/austria/  (Discovered - currently not indexed)
11 https://canitakethis.co/medication/into/south-africa/  (not on Google)
INSPECT SAYS "Page with redirect" (do not request, check why): country/brazil/tobacco, blog/travel-warning-caribbean-2026.
VERIFIED ALREADY ON GOOGLE (do not request): airline/ethiopian-airlines, air-europa, asiana, avianca baggage-allowance; airline/vietnam-airlines/power-bank; airline/korean-air/perfume-aerosols; airline/westjet alcohol and vape; airline/norwegian/wifi; airline/aer-lingus/compensation; airline/british-airways/compensation; country/kuwait/plants-seeds; country/india/tobacco; country/lebanon/cash; country/ukraine/tobacco; food/slovenia; food/united-arab-emirates; medication/benadryl/japan, italy, australia.
NOT YET VERIFIED: the other ~65 medication pages, 8 blog hub pages, country/european-union/cash, 5 Wi-Fi pages already requested. Method that works: GSC search box -> paste URL -> Enter -> read "URL is on Google" / "URL is not on Google" (about 12 s per URL).

## REQUESTED 2026-10-18 (user requested in GSC; verified not on Google by URL Inspection before)
https://canitakethis.co/food/costa-rica/ REQUESTED 2026-10-18
https://canitakethis.co/country/chile/plants-seeds/ REQUESTED 2026-10-18
https://canitakethis.co/country/hong-kong/tobacco/ REQUESTED 2026-10-18
https://canitakethis.co/country/philippines/cash/ REQUESTED 2026-10-18
https://canitakethis.co/country/kenya/vaping/ REQUESTED 2026-10-18
https://canitakethis.co/blog/travel-warning-mexico-2026/ REQUESTED 2026-10-18
https://canitakethis.co/blog/tsa-precheck-touchless-id-2026/ REQUESTED 2026-10-18
https://canitakethis.co/medication/sudafed/thailand/ REQUESTED 2026-10-18
https://canitakethis.co/medication/sudafed/china/ REQUESTED 2026-10-18
https://canitakethis.co/medication/into/austria/ REQUESTED 2026-10-18
https://canitakethis.co/medication/into/south-africa/ REQUESTED 2026-10-18

## NEXT 10 to request (verified NOT on Google with URL Inspection on 2026-10-18, after the 11 requested above)
https://canitakethis.co/airline/singapore-airlines/wifi/ TO REQUEST
https://canitakethis.co/airline/lufthansa/wifi/ TO REQUEST
https://canitakethis.co/airline/lufthansa/compensation/ TO REQUEST
https://canitakethis.co/airline/klm/wifi/ TO REQUEST
https://canitakethis.co/airline/cathay-pacific/wifi/ TO REQUEST
https://canitakethis.co/airline/qantas/wifi/ TO REQUEST
https://canitakethis.co/medication/sudafed/indonesia/ TO REQUEST
https://canitakethis.co/medication/sudafed/oman/ TO REQUEST
https://canitakethis.co/medication/vicks-inhaler/china/ TO REQUEST
https://canitakethis.co/medication/vicks-inhaler/poland/ TO REQUEST
Verified ON Google in this round (do not request): wifi of emirates, qatar-airways, united, southwest, turkish-airlines, air-france, british-airways, ana, japan-airlines, korean-air, thai-airways, etihad-airways, swiss, austrian, iberia, aegean, air-new-zealand; compensation of ryanair, easyjet, klm, delta; medication sudafed/croatia, sweden, austria; tramadol/croatia; codeine/fiji; adderall/kenya; ritalin/argentina; vicks-inhaler/romania.

## 2026-10-18 QUOTA EXCEEDED: GSC refused more requests after the 11 above. NONE of the 10 below were requested. Request them tomorrow (2026-10-19) in this order; re-verify with URL Inspection first only if more than 2 days pass.
1 https://canitakethis.co/airline/singapore-airlines/wifi/ TO REQUEST
2 https://canitakethis.co/airline/lufthansa/wifi/ TO REQUEST
3 https://canitakethis.co/airline/lufthansa/compensation/ TO REQUEST
4 https://canitakethis.co/airline/klm/wifi/ TO REQUEST
5 https://canitakethis.co/airline/cathay-pacific/wifi/ TO REQUEST
6 https://canitakethis.co/airline/qantas/wifi/ TO REQUEST
7 https://canitakethis.co/medication/sudafed/indonesia/ TO REQUEST
8 https://canitakethis.co/medication/sudafed/oman/ TO REQUEST
9 https://canitakethis.co/medication/vicks-inhaler/china/ TO REQUEST
10 https://canitakethis.co/medication/vicks-inhaler/poland/ TO REQUEST

## 2026-10-24 (deploy b0ce3ca6e): content corrected, optional re-crawl
airline/aeromexico/medication (title, description, H1 and body rewritten from the current AICM guide) and airline/volaris/medication (needles card). Request re-crawl with the next quota. No new URLs in this deploy.
