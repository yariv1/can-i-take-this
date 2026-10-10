# GSC "Request indexing" list (2026-10-08), about 10 URLs a day, in priority order

Rule: new URLs and the pages with the most search demand that we rebuilt come first. Do NOT request the 27 EU country pages for tobacco, alcohol, plants and cash: their canonical now points to the EU master pages. After each deploy also resubmit https://canitakethis.co/sitemap.xml.

## Day 1 (REQUESTED 2026-10-08: first 9; China Southern hit the quota and moved to Day 2)
https://canitakethis.co/country/european-union/tobacco/
https://canitakethis.co/country/european-union/alcohol/
https://canitakethis.co/country/european-union/plants-seeds/
https://canitakethis.co/country/egypt/vaping/
https://canitakethis.co/airline/wizz-air/baggage-allowance/
https://canitakethis.co/airline/lufthansa/baggage-allowance/
https://canitakethis.co/airline/singapore-airlines/baggage-allowance/
https://canitakethis.co/airline/air-china/baggage-allowance/
https://canitakethis.co/airline/air-new-zealand/baggage-allowance/

## Day 2 (starts with the one left over from Day 1)
https://canitakethis.co/airline/china-southern/baggage-allowance/
https://canitakethis.co/country/european-union/cash/
https://canitakethis.co/airline/virgin-australia/baggage-allowance/
https://canitakethis.co/airline/etihad-airways/baggage-allowance/
https://canitakethis.co/airline/philippine-airlines/baggage-allowance/
https://canitakethis.co/airline/icelandair/baggage-allowance/
https://canitakethis.co/airline/ryanair/vape-e-cigarette/
https://canitakethis.co/airline/ryanair/alcohol/
https://canitakethis.co/airline/air-arabia/baggage-allowance/
https://canitakethis.co/airline/china-eastern/baggage-allowance/
https://canitakethis.co/country/sri-lanka/vaping/

## Day 3
https://canitakethis.co/airline/turkish-airlines/vape-e-cigarette/
https://canitakethis.co/airline/singapore-airlines/vape-e-cigarette/
https://canitakethis.co/airline/wizz-air/vape-e-cigarette/
https://canitakethis.co/airline/easyjet/vape-e-cigarette/
https://canitakethis.co/airline/lufthansa/vape-e-cigarette/
https://canitakethis.co/country/cuba/vaping/
https://canitakethis.co/country/turkey/vaping/
https://canitakethis.co/country/norway/plants-seeds/
https://canitakethis.co/country/united-states/plants-seeds/
https://canitakethis.co/country/australia/plants-seeds/

## Day 4 (blog, still TO REQUEST in GSC_INDEXING_TRACKER.md)
https://canitakethis.co/blog/travel-safety/
https://canitakethis.co/blog/travel-warning-mexico-2026/
https://canitakethis.co/blog/level-4-travel-advisory-countries-2026/
https://canitakethis.co/blog/travel-warning-caribbean-2026/
https://canitakethis.co/blog/is-turks-and-caicos-safe-2026/
https://canitakethis.co/blog/travel-warning-by-country-2026/
https://canitakethis.co/blog/tsa-precheck-touchless-id-2026/
https://canitakethis.co/blog/uk-eta-for-us-citizens-2026/
https://canitakethis.co/blog/etias-travel-authorization-2026/
https://canitakethis.co/blog/can-you-fly-without-a-real-id-2026/

## Later (lower priority)
Other rebuilt baggage pages: aer-lingus, klm, qatar-airways, latam, air-canada, air-india, american-airlines, aegean, swiss, jetblue, norwegian, malaysia-airlines, aeromexico, frontier, indigo, thai-airways, el-al, easyjet, korean-air, iberia, japan-airlines, eurowings (URL pattern /airline/<slug>/baggage-allowance/).
Other airline vape/alcohol pages: pegasus, qatar-airways, etihad-airways, klm, sas, china-eastern, air-europa, turkish-airlines (alcohol), emirates (alcohol).
Other country vaping pages: thailand, india, australia, singapore, japan, mexico, brazil (URL pattern /country/<slug>/vaping/); non-EU plants pages: united-kingdom, canada, japan, singapore, switzerland.

## Added 2026-10-08 (deploy 20c882fef), request in this order
1. /country/egypt/vaping/ (rebuilt, re-request even though requested before)
2. /airline/ryanair/baggage-allowance/
3. /airline/turkish-airlines/baggage-allowance/
4. /blog/liquids-100ml-rule-2026/ (FAQ schema added)
5. /country/south-korea/plants-seeds/
6. /country/thailand/plants-seeds/
7. /country/brazil/plants-seeds/ and 8. /country/mexico/plants-seeds/ (never requested)

## Added 2026-10-08 (second deploy)
9. /airline/sas/baggage-allowance/
10. /airline/qantas/baggage-allowance/

## Added 2026-10-08 (third deploy edafe74fe), request FIRST on the next request day
11. /plane/cigarettes/ (NEW page, highest demand: Ahrefs >1000 for "can you bring cigarettes on a plane")
12. /country/australia/alcohol/ (rebuilt from the Australian Border Force page)

## Added 2026-10-08 (fourth deploy 87f41bf23): 7 plane pages rebuilt in the new style, re-request AFTER the items above
13. /plane/liquids/  14. /plane/vape-e-cigarette/  15. /plane/power-bank/  16. /plane/alcohol/  17. /plane/lighter/  18. /plane/perfume-aerosols/  19. /plane/sharp-objects/

## Added 2026-10-09 (fifth deploy): 78 airline hub pages /airline/<slug>/ rebuilt in the new style. LOW priority, request last. Start with the biggest airlines: /airline/lufthansa/, /airline/air-china/, /airline/singapore-airlines/, /airline/wizz-air/, /airline/ryanair/, /airline/turkish-airlines/, then the rest. Never validate "Page with redirect".

## Added 2026-10-09 (sixth deploy d2509e355), request FIRST with the cigarettes page
20. /blog/united-carry-on-size-2026/ (NEW, demand: Ahrefs >10,000 for "united carry on size"). Re-check later: the 52 blog articles got the new "More in <section>" card (low priority, no request needed).

Added 2026-10-09 (United baggage rebuild)
- /airline/united/baggage-allowance/ (rebuilt, request again)

Added 2026-10-10 (Emirates and Qatar baggage rebuilds)
- /airline/emirates/baggage-allowance/ (rebuilt)
- /airline/qatar-airways/baggage-allowance/ (rebuilt)

Added 2026-10-10 (Hawaiian carry-on article + Air Canada retitle)
- /blog/hawaiian-airlines-carry-on-size-2026/ (new)
- /airline/air-canada/baggage-allowance/ (retitled: leads with carry-on size, request again)
