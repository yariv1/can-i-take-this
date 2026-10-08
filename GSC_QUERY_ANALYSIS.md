# GSC query analysis (read live from Search Console, 3 months to 2026-10-07, Web)

Source: Performance > Queries, top 1,000 rows by impressions (9,731 impressions = ~10% of the 99.3K total; Google hides the rest). Method: table rows read from the page, clustered by regex. Re-run the same way after 3-4 weeks.

## Demand by topic (visible queries)
baggage 4,553 impr (538 queries) | vape 1,276 (56) | power bank 1,065 (125) | alcohol/duty free 706 (88) | liquids 697 (40) | medication 283 | pets 278 | tobacco 216 | plants/seeds 187 | cash 87 | food 71.

## Airlines by query impressions (all topics)
singapore 522, lufthansa 501, wizz 475, air china 435, air new zealand 245, etihad 211, aer lingus 205, qatar 192, icelandair 183, china southern 176, klm 140, **ryanair 119 (not rebuilt)**, air arabia 117, thai 115, philippine 111, turkish 100, eurowings 97, china eastern 86, latam 82, **ana 82**, aegean 80, **ethiopian 77**, japan airlines 73, **austrian 64**, virgin australia 63, malaysia 61, swiss 60, sas 58, **transavia 54**, indigo 51, iberia 51, **cathay 50**, **oman air 49**, air canada 48, emirates 47, korean 47, **pegasus 44**, **kenya 41**, easyjet 41, copa 40, **air europa 40**, air india 38, lot 37, sunexpress 36, norwegian 36 (bold = still the short page).
Insight: the same airlines are searched for baggage, power bank, liquids, vape and alcohol, e.g. Ryanair has no baggage-only demand: "ryanair liquids", "ryanair hand luggage liquids", "can i take my vape on ryanair", "e cigarette ryanair".

## What people type (intent, by impressions)
allowance 2,672 | rules/policy ("can i / can you / is it allowed") 2,552 | vape 1,285 | cabin/carry-on size 1,169 | power bank 1,057 | alcohol 770 | liquids/ml 736 | price/fee/cost 364 | year in query (2024-2026) 308 | weight/kg 285 | checked/hold 218.

## Non-airline queries (country / topic), 2,985 impr
Egypt vaping family ~600 impr: "can you vape in egypt", "is vaping legal in egypt", "egypt vape laws", "can you take vapes to egypt", "vaping in egypt 2024/2025" (positions 54-66).
Seeds: "can i bring seeds with me into india in small quantity" 64, "can i take seeds to sweden from ireland" 49, "can i bring tomato seeds back home" 43.
Duty free: "what duty free can you bring from bulgaria" 64, "duty free allowance australia" 30, "... turkey" 28, "... in spain" 25, "duty free tobacco" 41.
Other: "can you bring disposable vapes to cuba" 56, "adderall lebanon" 32, "tramadol dominican republic" 12, "can i take my vape to turkey", pets ("shipping pets to kenya" 30, "cat travel to cyprus" 26, "pet immigration to new zealand" 25).
Liquids (no airline): "how many ml are you allowed on a plane" 82, "is 50 ml allowed on a plane" 65, "ml limit on flights" 40 (position ~78).
Power bank: "<airline> power bank rules" / "battery policy" for Singapore, KLM, Icelandair, Ethiopian, China Eastern, Air Europa, SAS, Pegasus.

## Gaps this implies
1. Baggage: rebuild order should follow the airline list above (Ryanair, ANA, Ethiopian, Austrian, Transavia, Cathay, Oman Air, Pegasus, Kenya, Air Europa are higher than several smaller ones already queued).
2. Each airline's power-bank, liquids, vape/e-cigarette and alcohol pages need real content for the same airlines (66/78 power-bank pages have verified data, the vape and liquids pages are thin).
3. "Rules/policy" and year phrasings: titles and H2s must use "can you ... on <airline>" and the year.
4. Country: vaping Egypt/Cuba/Turkey, seeds by country, duty free by country (Bulgaria, Australia, Turkey, Spain), pets by country; these pages are ~200 words.
5. Generic liquids answer pages ("how many ml are you allowed on a plane") rank at ~78.

## Demand clusters, re-read 2026-10-08 (top 1,000 queries by impressions, 3 months, 9,852 impr; entity / topic, impressions, avg position)
We HAVE a page for each of these; Google shows them at position 40-80 because they were thin/duplicated. Rebuild in this order:
1. Egypt vaping 873 (pos 62, 18 queries: "can you vape in egypt", "is vaping legal in egypt", year variants) - biggest single cluster; page = /country/egypt/vaping/
2. Generic liquids answer ("how many ml are you allowed on a plane", "is 50 ml allowed") 509 (pos 76) - liquids pillar/ounces pages
3. Airline baggage (already rebuilt, awaiting re-index): Lufthansa 464, Air China 435, Singapore 365, Wizz 293, Air NZ 222, Etihad 172, China Southern 165, Aer Lingus 145. Not yet rebuilt: see handoff list (Ryanair etc.).
4. Duty free by country: unnamed 147 (pos 43), Australia 98 (pos 40), Bulgaria 64 (pos 25 - closest to page 1)
5. Turkey vaping 79 (pos 45), Cuba disposable vapes 57 (pos 28)
6. Power bank: Ethiopian 75 (pos 8), Icelandair 64 (pos 9), Singapore 69 (pos 40) - already near page 1
Plants/seeds is small (India 64 at pos 8 is already top 10).
