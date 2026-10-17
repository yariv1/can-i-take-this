# Site audit, session 33 (2026-10-16)

What was checked automatically, what is verified by hand, and the work queue for the rest. Nothing here is a claim that the site is 100% correct.

## Automated, all pages (pass)
- Source states (OFFICIAL / UNOFFICIAL / BASED ON GLOBAL RULES) vs links: country, food, pets, medication (audit_source_state.js), airline and plane pages (audit_airline_state.js, NEW: 956 cards).
- Internal links, fonts, capsules, verdict labels, tabs, SEO change scope.

## External links (716 unique source links, fetched once)
- 542 answered 200. 19 network errors/timeouts, 8 x 406, 135 blocked by bot protection (403/401): NOT verified.
- Fixed dead links: ANA power-bank notice, UAE customs (u.ae, 17 pages), Etihad prohibited-items, Indonesia customs (Ngurah Rai host gone), Brussels Airlines liquids (FAQ host gone: the card now uses the generic airline source because no live Brussels page states the 100 ml rule).
- Still unverified (bot walls / timeouts): JetBlue (500 to bots), LOT, Air China, Kuwait Airways, Gulf Air, Israir, customs sites of Oman, Qatar, Kuwait, Morocco, Italy ministry, USDA APHIS.

## Airline facts vs official pages (numbers on our page found in the official page text)
- 246 pages (baggage, liquids, power bank). 134 had a readable official page, 112 were NOT readable by script (JS pages or bot walls).
- Readable pages where some numbers were not found (need a manual look, may be conversions or JS-rendered values):
  - aegean/baggage-allowance (8 kg, 13 kg)
  - aer-lingus/baggage-allowance (10 kg, 24 cm, 20 kg, 23 kg, 32 kg)
  - aer-lingus/power-bank (100 wh)
  - aeromexico/baggage-allowance (25 cm, 9.8 in)
  - air-china/baggage-allowance (23 kg)
  - air-new-zealand/baggage-allowance (3 in)
  - alaska-airlines/baggage-allowance (9 in, 145 in)
  - american-airlines/liquids (100 ml)
  - asiana/power-bank (160 wh)
  - azul/liquids (20 cm, 1 l, 300 ml)
  - cathay-pacific/power-bank (100 wh)
  - easyjet/liquids (100 ml, 000 ml)
  - emirates/baggage-allowance (1 l)
  - emirates/liquids (1 l)
  - emirates/power-bank (100 wh)
  - ethiopian-airlines/baggage-allowance (55 cm, 8 kg)
  - etihad-airways/liquids (1 l)
  - finnair/liquids (100 ml, 1 l, 20 cm)
  - finnair/power-bank (100 wh)
  - flydubai/power-bank (100 wh)
  - frontier/baggage-allowance (8 in, 10 in, 62 in, 110 in)
  - frontier/power-bank (100 wh)
  - gol/liquids (1 l)
  - gol/power-bank (160 wh)
  - gulf-air/liquids (100 ml, 1 l, 20 cm)
  - gulf-air/power-bank (100 wh)
  - iberia/baggage-allowance (57 in, 95 in)
  - indigo/baggage-allowance (7 kg, 115 cm, 3 kg, 8 kg, 32 kg)
  - indigo/liquids (100 ml)
  - israir/baggage-allowance (20 cm, 25 cm, 10 kg, 23 kg, 32 kg)
  - japan-airlines/baggage-allowance (300 in)
  - japan-airlines/liquids (1 l)
  - korean-air/power-bank (160 wh)
  - latam/baggage-allowance (158 cm)
  - malaysia-airlines/liquids (1 l)
  - malaysia-airlines/power-bank (100 wh)
  - pegasus/power-bank (100 wh)
  - royal-air-maroc/baggage-allowance (1 in)
  - royal-air-maroc/liquids (1 l, 20 cm)
  - royal-air-maroc/power-bank (100 wh)
  - royal-jordanian/baggage-allowance (45 kg, 203 cm, 80 in, 250 cm, 100 in)
  - royal-jordanian/power-bank (100 wh)
  - south-african-airways/liquids (100 ml, 20 cm, 1 l)
  - south-african-airways/power-bank (100 wh)
  - southwest/baggage-allowance (10 in, 50 lb)
  - tap-air-portugal/liquids (20 cm)
  - turkish-airlines/baggage-allowance (55 cm, 4 kg, 15 cm, 16 kg, 10 kg)
  - vietnam-airlines/baggage-allowance (23 cm, 15 cm, 12 kg, 18 kg, 9 in)
  - virgin-atlantic/baggage-allowance (10 kg, 56 cm, 15 cm, 12 kg, 16 kg)
  - virgin-atlantic/liquids (100 ml, 2 l)
  - virgin-atlantic/power-bank (100 wh, 160 wh, 10 cm)
  - virgin-australia/baggage-allowance ($72, $82, $92, $87)
  - volaris/baggage-allowance (35 kg, 250 cm, $180, $228, $174)
  - volaris/liquids (3 oz)
  - vueling/power-bank (100 wh)
  - westjet/baggage-allowance (203 cm, 80 in)
  - wizz-air/baggage-allowance (€13.00, €57.50, €65.00, €75.00, €55.00)
- Unreadable airlines (verify with a browser): aer-lingus [liquids]; aeromexico [liquids,power-bank]; air-canada [liquids,power-bank]; air-china [liquids]; air-france [baggage-allowance,liquids,power-bank]; alaska-airlines [liquids,power-bank]; arkia [baggage-allowance,liquids,power-bank]; austrian [baggage-allowance,liquids,power-bank]; avianca [liquids,power-bank]; azul [baggage-allowance,power-bank]; brussels-airlines [baggage-allowance,liquids,power-bank]; china-southern [power-bank]; copa-airlines [baggage-allowance,liquids,power-bank]; easyjet [power-bank]; egyptair [baggage-allowance,liquids,power-bank]; el-al [baggage-allowance,liquids,power-bank]; ethiopian-airlines [liquids]; eurowings [baggage-allowance,liquids,power-bank]; hawaiian-airlines [baggage-allowance,liquids,power-bank]; icelandair [baggage-allowance,liquids,power-bank]; israir [liquids,power-bank]; ita-airways [baggage-allowance,liquids,power-bank]; jetblue [baggage-allowance,liquids,power-bank]; kenya-airways [baggage-allowance,liquids,power-bank]; klm [baggage-allowance,liquids,power-bank]; korean-air [baggage-allowance,liquids]; kuwait-airways [baggage-allowance,liquids,power-bank]; lot-polish [baggage-allowance,liquids,power-bank]; lufthansa [baggage-allowance,liquids,power-bank]; middle-east-airlines [baggage-allowance,liquids,power-bank]; norwegian [baggage-allowance,liquids,power-bank]; oman-air [baggage-allowance,liquids,power-bank]; philippine-airlines [baggage-allowance,liquids,power-bank]; qatar-airways [power-bank]; ryanair [baggage-allowance,liquids,power-bank]; sas [baggage-allowance,liquids,power-bank]; saudia [baggage-allowance,liquids,power-bank]; southwest [liquids,power-bank]; sunexpress [baggage-allowance,liquids,power-bank]; swiss [baggage-allowance,liquids,power-bank]; thai-airways [baggage-allowance,liquids,power-bank]; transavia [baggage-allowance,liquids,power-bank]; turkish-airlines [liquids]; united [baggage-allowance,liquids,power-bank]; vueling [baggage-allowance,liquids]

## Not yet re-verified against sources
- Medication: the 38 note/per-medicine countries done in session 32 (read in full then, wording re-read now), and the 16 added in session 33 were checked against their pages.
- Country customs cards (alcohol, tobacco, cash, plants, vapes), food, pets: only structure/state checks, no fact re-check.
- Airline vape, perfume, alcohol tabs: general IATA rules with the airline website as source (now labelled as general rule).
- Wi-Fi and compensation tabs.

## Medication re-verification, line by line against the official page (session 34, 2026-10-16)
Method: each URL in MED_AUTH opened in the browser pane (or the PDF/list read as text) and every line compared. Status: verified = every line found on the page; fixed = wording corrected, see list.

### MED_NOTE countries
- verified: South Korea, Germany, France, Spain, Thailand, Netherlands, Norway, Iceland, Sweden, Belgium, Indonesia (BPOM infographic PDF), Qatar, Poland, Croatia, Hungary, Czechia, Denmark, Sri Lanka, Slovenia, Cyprus.
- fixed: Switzerland (removed "cannot be mailed", not on the page); Austria (Annex IX for Schengen, Annex X for non-Schengen, as the ministry's current German page says); Taiwan (added that amounts above the table need a TFDA permit); Ireland (the 3-month rule is for visitors from outside the Schengen area); Israel (removed "contact the Pharmaceutics Division", not on the page); United States (documents for mailed medicine are "suggested" by the FDA; the illegal-import sentence is for US citizens as the page says); Maldives (removed "contact the Maldives FDA", not on the page); Turkey (page gives no separate controlled-substance rule: said so, removed "check whether on the list").
- unreadable: Italy (salute.gov.it returns 504 / bot validation to the pane and to WebFetch on 2026-10-16; consulate .doc not opened because it triggers a download). Text kept as read in session 32; NOT re-verified today. Retry later.

### MED_VER per-medicine countries
- verified: Japan (all 27 rows: amounts 72 mg alprazolam, 1.2 g diazepam, 180 mg clonazepam, 90 mg lorazepam, 300 mg zolpidem, 6 g modafinil, 80 mg buprenorphine, 2.16 g methylphenidate checked by coordinates in the official table; 14 days / 3-month certificate / photos / one-month rule on the NCD page and MHLW Q&A), United Kingdom (schedules checked on the Home Office list), Singapore (Appendix A of the HSA document guide), Canada, New Zealand, United Arab Emirates (schedule of every ingredient checked row by row in the 2022 list), Hong Kong (every ingredient found in Cap. 134), China (Shanghai Customs page and both catalogues), Netherlands.
- fixed: Australia insulin (removed "keep insulin in your carry-on", only a case study on the TGA page); France buprenorphine (ANSM names high-dose buprenorphine).

### Added in session 34 (category notes from official pages, read in the pane or as PDF text)
Serbia (Customs Administration), Latvia (State Agency of Medicines), Georgia (Revenue Service brochure, undated), Mauritius (MRA), Dominican Republic (DGA Manual del Viajero), Fiji (Ministry of Health guidelines March 2024), Ethiopia (EFDA guideline May 2023, no controlled-substance rule), Portugal (Decree-Law 15/93 art. 13 on Infarmed), India (CDSCO notice + Customs guide), South Africa (SARS 3 months vs SAHPRA 1 month: both stated), Mexico (ANAM), Brazil (Anvisa + Receita Federal). 50 of 85 countries now have official-page rules. Reasons for the rest are in MEDICATION_COUNTRIES.md.
Failing audits not caused by this work (same result on main): audit_article_qa.js (41 blog articles), audit_dup.js (13 of 14 page types over limit).


---
# Earlier automated pass (main session)
# Site audit, session 33 (2026-10-16)

What was checked automatically, what is verified by hand, and the work queue for the rest. Nothing here is a claim that the site is 100% correct.

## Automated, all pages (pass)
- Source states (OFFICIAL / UNOFFICIAL / BASED ON GLOBAL RULES) vs links: country, food, pets, medication (audit_source_state.js), airline and plane pages (audit_airline_state.js, NEW: 956 cards).
- Internal links, fonts, capsules, verdict labels, tabs, SEO change scope.

## External links (716 unique source links, fetched once)
- 542 answered 200. 19 network errors/timeouts, 8 x 406, 135 blocked by bot protection (403/401): NOT verified.
- Fixed dead links: ANA power-bank notice, UAE customs (u.ae, 17 pages), Etihad prohibited-items, Indonesia customs (Ngurah Rai host gone), Brussels Airlines liquids (FAQ host gone: the card now uses the generic airline source because no live Brussels page states the 100 ml rule).
- Still unverified (bot walls / timeouts): JetBlue (500 to bots), LOT, Air China, Kuwait Airways, Gulf Air, Israir, customs sites of Oman, Qatar, Kuwait, Morocco, Italy ministry, USDA APHIS.

## Airline facts vs official pages (numbers on our page found in the official page text)
- 246 pages (baggage, liquids, power bank). 134 had a readable official page, 112 were NOT readable by script (JS pages or bot walls).
- Readable pages where some numbers were not found (need a manual look, may be conversions or JS-rendered values):
  - aegean/baggage-allowance (8 kg, 13 kg)
  - aer-lingus/baggage-allowance (10 kg, 24 cm, 20 kg, 23 kg, 32 kg)
  - aer-lingus/power-bank (100 wh)
  - aeromexico/baggage-allowance (25 cm, 9.8 in)
  - air-china/baggage-allowance (23 kg)
  - air-new-zealand/baggage-allowance (3 in)
  - alaska-airlines/baggage-allowance (9 in, 145 in)
  - american-airlines/liquids (100 ml)
  - asiana/power-bank (160 wh)
  - azul/liquids (20 cm, 1 l, 300 ml)
  - cathay-pacific/power-bank (100 wh)
  - easyjet/liquids (100 ml, 000 ml)
  - emirates/baggage-allowance (1 l)
  - emirates/liquids (1 l)
  - emirates/power-bank (100 wh)
  - ethiopian-airlines/baggage-allowance (55 cm, 8 kg)
  - etihad-airways/liquids (1 l)
  - finnair/liquids (100 ml, 1 l, 20 cm)
  - finnair/power-bank (100 wh)
  - flydubai/power-bank (100 wh)
  - frontier/baggage-allowance (8 in, 10 in, 62 in, 110 in)
  - frontier/power-bank (100 wh)
  - gol/liquids (1 l)
  - gol/power-bank (160 wh)
  - gulf-air/liquids (100 ml, 1 l, 20 cm)
  - gulf-air/power-bank (100 wh)
  - iberia/baggage-allowance (57 in, 95 in)
  - indigo/baggage-allowance (7 kg, 115 cm, 3 kg, 8 kg, 32 kg)
  - indigo/liquids (100 ml)
  - israir/baggage-allowance (20 cm, 25 cm, 10 kg, 23 kg, 32 kg)
  - japan-airlines/baggage-allowance (300 in)
  - japan-airlines/liquids (1 l)
  - korean-air/power-bank (160 wh)
  - latam/baggage-allowance (158 cm)
  - malaysia-airlines/liquids (1 l)
  - malaysia-airlines/power-bank (100 wh)
  - pegasus/power-bank (100 wh)
  - royal-air-maroc/baggage-allowance (1 in)
  - royal-air-maroc/liquids (1 l, 20 cm)
  - royal-air-maroc/power-bank (100 wh)
  - royal-jordanian/baggage-allowance (45 kg, 203 cm, 80 in, 250 cm, 100 in)
  - royal-jordanian/power-bank (100 wh)
  - south-african-airways/liquids (100 ml, 20 cm, 1 l)
  - south-african-airways/power-bank (100 wh)
  - southwest/baggage-allowance (10 in, 50 lb)
  - tap-air-portugal/liquids (20 cm)
  - turkish-airlines/baggage-allowance (55 cm, 4 kg, 15 cm, 16 kg, 10 kg)
  - vietnam-airlines/baggage-allowance (23 cm, 15 cm, 12 kg, 18 kg, 9 in)
  - virgin-atlantic/baggage-allowance (10 kg, 56 cm, 15 cm, 12 kg, 16 kg)
  - virgin-atlantic/liquids (100 ml, 2 l)
  - virgin-atlantic/power-bank (100 wh, 160 wh, 10 cm)
  - virgin-australia/baggage-allowance ($72, $82, $92, $87)
  - volaris/baggage-allowance (35 kg, 250 cm, $180, $228, $174)
  - volaris/liquids (3 oz)
  - vueling/power-bank (100 wh)
  - westjet/baggage-allowance (203 cm, 80 in)
  - wizz-air/baggage-allowance (€13.00, €57.50, €65.00, €75.00, €55.00)
- Unreadable airlines (verify with a browser): aer-lingus [liquids]; aeromexico [liquids,power-bank]; air-canada [liquids,power-bank]; air-china [liquids]; air-france [baggage-allowance,liquids,power-bank]; alaska-airlines [liquids,power-bank]; arkia [baggage-allowance,liquids,power-bank]; austrian [baggage-allowance,liquids,power-bank]; avianca [liquids,power-bank]; azul [baggage-allowance,power-bank]; brussels-airlines [baggage-allowance,liquids,power-bank]; china-southern [power-bank]; copa-airlines [baggage-allowance,liquids,power-bank]; easyjet [power-bank]; egyptair [baggage-allowance,liquids,power-bank]; el-al [baggage-allowance,liquids,power-bank]; ethiopian-airlines [liquids]; eurowings [baggage-allowance,liquids,power-bank]; hawaiian-airlines [baggage-allowance,liquids,power-bank]; icelandair [baggage-allowance,liquids,power-bank]; israir [liquids,power-bank]; ita-airways [baggage-allowance,liquids,power-bank]; jetblue [baggage-allowance,liquids,power-bank]; kenya-airways [baggage-allowance,liquids,power-bank]; klm [baggage-allowance,liquids,power-bank]; korean-air [baggage-allowance,liquids]; kuwait-airways [baggage-allowance,liquids,power-bank]; lot-polish [baggage-allowance,liquids,power-bank]; lufthansa [baggage-allowance,liquids,power-bank]; middle-east-airlines [baggage-allowance,liquids,power-bank]; norwegian [baggage-allowance,liquids,power-bank]; oman-air [baggage-allowance,liquids,power-bank]; philippine-airlines [baggage-allowance,liquids,power-bank]; qatar-airways [power-bank]; ryanair [baggage-allowance,liquids,power-bank]; sas [baggage-allowance,liquids,power-bank]; saudia [baggage-allowance,liquids,power-bank]; southwest [liquids,power-bank]; sunexpress [baggage-allowance,liquids,power-bank]; swiss [baggage-allowance,liquids,power-bank]; thai-airways [baggage-allowance,liquids,power-bank]; transavia [baggage-allowance,liquids,power-bank]; turkish-airlines [liquids]; united [baggage-allowance,liquids,power-bank]; vueling [baggage-allowance,liquids]

## Not yet re-verified against sources
- Medication: the 38 note/per-medicine countries done in session 32 (read in full then, wording re-read now), and the 16 added in session 33 were checked against their pages.
- Country customs cards (alcohol, tobacco, cash, plants, vapes), food, pets: only structure/state checks, no fact re-check.
- Airline vape, perfume, alcohol tabs: general IATA rules with the airline website as source (now labelled as general rule).
- Wi-Fi and compensation tabs.

## Airlines A to L: source check against the official pages (2026-10-16, built-in browser)

Method: each cited official link opened in the browser pane, page text compared with every number and rule on our page (sizes, weights, fees, 100 ml / 1 litre bag, power bank count, Wh, in-flight use). Where the cited page did not state our claim, the claim was removed or the card moved to Based on global rules (no link). Where the page could not be read today (Cloudflare check, blank page, site not reachable) the data is unchanged and marked unreadable: this is NOT a confirmation. Data changes are in canitakethis.html (LIQ_RULES, POWER_RULES); no baggage_detail file needed a number change.

| Airline | Tab | Result | Note |
|---|---|---|---|
| aegean | baggage allowance | verified |  |
| aegean | liquids | verified |  |
| aegean | power-bank | verified |  |
| aer-lingus | baggage allowance | verified | (inch conversions not stated on page) |
| aer-lingus | liquids | verified | (2014 PDF, labelled) |
| aer-lingus | power-bank | verified |  |
| aeromexico | baggage allowance | verified |  |
| aeromexico | liquids | fixed | no official page states 100 ml; card now Based on global rules |
| aeromexico | power-bank | fixed | added official rule (max 2, 100 Wh, personal item only, no recharge; use only above 10,000 ft) |
| air-arabia | baggage allowance | verified |  |
| air-arabia | liquids | verified |  |
| air-arabia | power-bank | fixed | page states no count, removed 'max 2' |
| air-canada | baggage allowance | verified |  |
| air-canada | liquids | verified | (official PDF) |
| air-canada | power-bank | verified | ; added 'pending approval by airport agents' to the 100-160 Wh line |
| air-china | baggage allowance | verified | (carry-on, checked PDF, domestic pages) |
| air-china | liquids | unreadable | no liquids rule page cited; card stays Based on global rules |
| air-china | power-bank | fixed | cited page shows only a menu; rule not readable, card now Based on global rules |
| air-europa | baggage allowance | verified |  |
| air-europa | liquids | verified |  |
| air-europa | power-bank | verified |  |
| air-france | baggage allowance | verified | (20x20 cm bag stated on the baggage page) |
| air-france | liquids | verified |  |
| air-france | power-bank | fixed | page states no in-flight use ban, set to 'no use rule published'; link now the readable .us page |
| air-india | baggage allowance | verified |  |
| air-india | liquids | verified |  |
| air-india | power-bank | verified |  |
| air-new-zealand | baggage allowance | verified |  |
| air-new-zealand | liquids | verified |  |
| air-new-zealand | power-bank | fixed | page states 2 x 100 Wh, carry-on only; removed unsourced use/seat rules |
| alaska-airlines | baggage allowance | unreadable | alaskaair.com blocks the browser pane; page stays labelled Unofficial (third-party fee page) |
| alaska-airlines | liquids | unreadable | (site error); 3.4 oz / 100 ml matches excerpt of the official travel-tips page in search results |
| alaska-airlines | power-bank | generic (no rule page cited) | Based on global rules (no rule page cited) |
| american-airlines | baggage allowance | verified |  |
| american-airlines | liquids | fixed | cited page states no quart-bag rule (refers to TSA); card now Based on global rules |
| american-airlines | power-bank | verified |  |
| ana | baggage allowance | verified |  |
| ana | liquids | verified |  |
| ana | power-bank | fixed | removed 'overhead is discouraged' (not on the notice); added terminal protection |
| asiana | baggage allowance | verified |  |
| asiana | liquids | verified |  |
| asiana | power-bank | fixed | source now Asiana's own restricted-items page (was Korean Air news); 100-160 Wh needs approval, max 2, no use/charge, not overhead |
| austrian | baggage allowance | verified |  |
| austrian | liquids | verified |  |
| austrian | power-bank | verified | (Lufthansa Group notice) |
| avianca | baggage allowance | verified |  |
| avianca | liquids | verified |  |
| avianca | power-bank | verified |  |
| arkia | baggage allowance | unreadable | (Cloudflare check blocks the pane); data unchanged from the 7 Oct reading |
| arkia | liquids | generic (no rule page cited) | Based on global rules |
| arkia | power-bank | generic (no rule page cited) | Based on global rules |
| british-airways | baggage allowance | verified | via excerpts of the official pages (live page is a calculator) |
| british-airways | liquids | verified |  |
| british-airways | power-bank | verified | (max 2, 100 Wh, seat power not for power banks, seat pocket/under seat) |
| azul | baggage allowance | verified | (Portuguese official page: 55x35x25 cm 10 kg, personal 45x35x20, checked 80x50x28 cm 23 kg) |
| azul | liquids | fixed | cited page is a ticket reseller (Gotogate), not Azul, and does not state 20x20 cm or the domestic aerosol rule; card now Based on global rules |
| azul | power-bank | generic (no rule page cited) | Based on global rules |
| brussels-airlines | baggage allowance | verified |  |
| brussels-airlines | liquids | fixed | carry-on page states the rule (100 ml printed capacity, 1 litre bag); card now Official with that link |
| brussels-airlines | power-bank | verified | (Lufthansa Group notice) |
| cathay-pacific | baggage allowance | verified | (fares page: cabin 7 kg; checked 1x23 Light, 2x23 Essential/Flex) |
| cathay-pacific | liquids | verified |  |
| cathay-pacific | power-bank | fixed | notice states max 2, carry-on only, no use/recharge; removed unsourced 100 Wh limit, seat position and Apr 2025 date |
| china-eastern | baggage allowance | verified |  |
| china-eastern | liquids | verified |  |
| china-eastern | power-bank | verified | (incl. 3C mark from 28 Jun 2025) |
| china-southern | baggage allowance | verified |  |
| china-southern | liquids | verified |  |
| china-southern | power-bank | unreadable | (page loads as an empty app); data unchanged |
| copa-airlines | baggage allowance | verified | (10 kg carry-on, 23 kg checked by fare) |
| copa-airlines | liquids | unreadable | (page renders no text); data unchanged |
| copa-airlines | power-bank | verified |  |
| delta | baggage allowance | verified |  |
| delta | liquids | fixed | removed the 16 oz / 70 oz checked-bag line (not on the cited page) |
| delta | power-bank | verified |  |
| easyjet | baggage allowance | verified |  |
| easyjet | liquids | fixed | cited cabin-bags page has no liquids text; card now Based on global rules |
| easyjet | power-bank | verified |  |
| egyptair | baggage allowance | unreadable | (Cloudflare check); data unchanged |
| egyptair | liquids | unreadable | (Cloudflare check); data unchanged |
| egyptair | power-bank | unreadable | (Cloudflare check); data unchanged |
| el-al | baggage allowance | verified | (carry-on 56x45x25 cm in conditions-of-carriage PDF; 23/32 kg and 8/12 kg on baggage pages) |
| el-al | liquids | unreadable | (page renders no text); data unchanged |
| el-al | power-bank | fixed | official battery table says 1 power bank per passenger up to 100 Wh (was 2) |
| emirates | baggage allowance | verified |  |
| emirates | liquids | verified |  |
| emirates | power-bank | verified | (1 power bank, under 100 Wh, no use, not overhead) |
| ethiopian-airlines | baggage allowance | verified |  |
| ethiopian-airlines | liquids | generic (no rule page cited) | Based on global rules |
| ethiopian-airlines | power-bank | verified | (max 2, 160 Wh, no use, not overhead) |
| etihad-airways | baggage allowance | verified | (5 kg and inch values not found; rest matches) |
| etihad-airways | liquids | verified |  |
| etihad-airways | power-bank | verified | (1 power bank, 100 Wh, no use; recommends not overhead) |
| eurowings | baggage allowance | verified |  |
| eurowings | liquids | verified |  |
| eurowings | power-bank | verified | (Lufthansa Group notice) |
| finnair | baggage allowance | verified |  |
| finnair | liquids | unreadable | (answer text does not render); data unchanged |
| finnair | power-bank | fixed | page states only the use/charge ban; removed unsourced max 2, 100 Wh and seat position |
| flydubai | baggage allowance | verified |  |
| flydubai | liquids | verified |  |
| flydubai | power-bank | verified | ; link moved to flydubai's Dangerous Goods page that states the rule (old page had only a list) |
| frontier | baggage allowance | verified | (sizes, weights, overweight/oversize fees; bag prices page not re-read) |
| frontier | liquids | verified |  |
| frontier | power-bank | generic (no rule page cited) | Based on global rules |
| gol | baggage allowance | verified |  |
| gol | liquids | verified | (Portuguese official notice) |
| gol | power-bank | fixed | page states carry-on only and new rules from 04/05/2026; removed unsourced max 2 / approval lines |
| gulf-air | baggage allowance | verified |  |
| gulf-air | liquids | fixed | cited page (special baggage / Zamzam) has no liquids rule; card now Based on global rules |
| gulf-air | power-bank | fixed | cited page only covers smart bags, no power bank rule; card now Based on global rules |
| hawaiian-airlines | baggage allowance | unreadable | (page loads blank in the pane); data unchanged |
| hawaiian-airlines | liquids | unreadable | (page loads blank); data unchanged |
| hawaiian-airlines | power-bank | unreadable | (page loads blank); data unchanged |
| iberia | baggage allowance | verified |  |
| iberia | liquids | verified |  |
| iberia | power-bank | verified | (max 2, 100 Wh, no use, not overhead) |
| icelandair | baggage allowance | unreadable | (overview page shows no numbers; detail pages redirect); data unchanged |
| icelandair | liquids | generic (no rule page cited) | Based on global rules |
| icelandair | power-bank | unreadable | (restrictions page redirects to the overview); data unchanged |
| indigo | baggage allowance | verified |  |
| indigo | liquids | fixed | cited cabin-baggage page has no liquids rule; card now Based on global rules |
| indigo | power-bank | fixed | page lists only 'capacity visible, over 160 Wh not allowed'; removed max 2 / approval / no-use lines |
| israir | baggage allowance | verified | (Hebrew official page) |
| israir | liquids | fixed | English link was dead; link moved to the Hebrew baggage policy that states the rule |
| israir | power-bank | generic (no rule page cited) | Based on global rules |
| ita-airways | baggage allowance | verified |  |
| ita-airways | liquids | verified | (1 L bag about 18 x 20 cm, 100 ml) |
| ita-airways | power-bank | verified | (Lufthansa Group notice) |
| japan-airlines | baggage allowance | verified |  |
| japan-airlines | liquids | verified |  |
| japan-airlines | power-bank | verified | ; removed unsourced 'avoid overhead' line |
| jetblue | baggage allowance | verified | (carry-on 22x14x9 in, personal 17x13x8 in, checked bag fees 2026) |
| jetblue | liquids | verified | (alcohol line not re-checked) |
| jetblue | power-bank | fixed | page states max 2, not in checked/overhead, no seat-power charge, no use to charge others; removed unsourced 100 Wh limit |
| kenya-airways | baggage allowance | verified |  |
| kenya-airways | liquids | generic (no rule page cited) | Based on global rules |
| kenya-airways | power-bank | generic (no rule page cited) | Based on global rules |
| klm | baggage allowance | verified |  |
| klm | liquids | verified |  |
| klm | power-bank | fixed | page says 100-160 Wh needs permission (added); rest verified |
| korean-air | baggage allowance | unreadable | (page loads blank in the pane); data unchanged |
| korean-air | liquids | unreadable | (page not reachable in the pane); data unchanged |
| korean-air | power-bank | fixed | the Korean Air newsroom notice states the full in-flight use ban, within-reach storage, no overhead; count and capacity limits are not stated there, removed |
| kuwait-airways | baggage allowance | unreadable | (site not reachable from the pane); data unchanged |
| kuwait-airways | liquids | unreadable | (site not reachable from the pane); data unchanged |
| kuwait-airways | power-bank | generic (no rule page cited) | Based on global rules |
| latam | baggage allowance | verified |  |
| latam | liquids | verified |  |
| latam | power-bank | verified |  |
| lot-polish | baggage allowance | verified |  |
| lot-polish | liquids | verified |  |
| lot-polish | power-bank | verified |  |
| lufthansa | baggage allowance | verified |  |
| lufthansa | liquids | verified | (100 ml line on carry-on page) |
| lufthansa | power-bank | verified | (Lufthansa Group notice) |

Totals (156 rows): verified 100, fixed 25, unreadable 20, generic 11.


---
## Country customs pages A to F, line by line against the official page (session 34, 2026-10-17)
Method: each source link opened in the browser pane (or the PDF read as text) and every number/rule compared. verified = found on the page; fixed = changed, see note; unreadable = page could not be read; global = no source specific to the category, the page now says BASED ON GLOBAL RULES.

Engine fix (affects all countries): generic fallback text ("often ~1 L", "typical limits", "high-risk plants", "often restricted") no longer carries the country's customs link and no longer shows OFFICIAL. Before, e.g. Argentina alcohol/tobacco/plants/vaping were labelled OFFICIAL with the ARCA cash page as source. Vape and plant pages that have their own WHO/official body now show a top card written from that body (WHO status, CFIA/DAFF/MAPA rule) instead of the generic line.

| Country | Alcohol | Tobacco | Cash | Plants | Vaping (WHO table) |
|---|---|---|---|---|---|
| Argentina | global | global | fixed (form is OM 2249A; under US$10,000 free, higher needs declaration; exit above limit by bank transfer) | global | verified |
| Australia | verified (ABF: 2.25 L) | fixed (ABF tobacco page: one unopened packet up to 25 cigarettes or 25 g, plus one open packet) | verified (AUSTRAC) , wording "penalties" | verified (DAFF) | verified |
| Austria, Belgium, Czechia, Cyprus, Denmark, Finland | verified (EU Your Europe, last checked 21/09/2026) | verified | verified (EU cash page), "seizure" removed | verified (EU master) | verified |
| Bulgaria, Croatia | verified | verified (lower limit land/sea) | verified | verified | verified |
| Estonia | verified | verified (lower limit all travellers) | verified | verified | fixed (WHO flavours: "Some are allowed", was "restricted") |
| France | verified (douane.gouv.fr read in full: 430 EUR, 1 L / 2 L, 4 L wine, 16 L beer, under-17) | verified | verified | verified | verified |
| European Union master | verified | verified | verified | verified | n/a |
| Bahrain | verified (customs.gov.bh) | verified | verified (no limit, may be asked to prove source) | global | verified |
| Brazil | fixed (baggage exemption is 12 L; 24 units is the arrival Free Shop limit) | fixed (10 packs, 25 cigars, 250 g tobacco; Free Shop 20 packs) | verified; "excess held or seized" removed (not on page) | verified (MAPA) | verified |
| Cambodia, Cuba, Ethiopia | global | global | global | global | verified |
| Canada | verified | verified | verified | verified (CFIA) | verified |
| Chile | verified (2.5 L) | verified | fixed ("more than US$10,000", as the page says) | global | verified |
| China | verified | fixed (cigars: 100 or more) | verified | global | verified |
| Colombia | global | global | verified (DIAN: above US$10,000) | global | verified |
| Costa Rica | verified | verified | verified (US$10,000 cash, US$50,000 securities, held) | global | verified |
| Dominican Republic | verified (DGA manual) | verified | verified | global | verified |
| Egypt | verified (decree 430/2021 + customs page: 1 L spirits) | verified (200 / 25 / 200 g, noted in passport: in the decree) | global (no passenger cash rule found) | global | fixed (customs travel page lists e-cigarettes as needing control-authority approval; page said customs never mention vapes) |
| Fiji | verified (FRCS, updated 18 Sep 2025) | verified | verified | global | verified |

Sources changed: Canada now uses the CBSA "visitors" pages (the old link was the guide for returning residents); Australia adds the ABF tobacco page and AUSTRAC; Brazil adds the Receita quota page; Egypt adds the English decree.
Vape table: all 26 WHO country PDFs downloaded and compared with country_vape_who.json (general ban, laws, indoor, ads, minimum age, flavours): 25 match, Denmark and Estonia flavours fixed. Other countries with "Some are restricted" in the JSON (DE, SA, NZ, UA, PH, CN, EG): CN and EG match the PDF; DE, SA, NZ, UA, PH are for the G-Z sessions to re-check against their PDFs, same error as Denmark/Estonia possible.

### Food and pets A to F
- Argentina food: SENASA page matches every row; removed "draw up a record and destroy in front of the traveller" (not on the page).
- Australia food: DAFF page does not ban meat, honey, nuts or fresh produce outright (meat has strict conditions and BICON, honey is permitted and inspected, approved nuts allowed, fresh produce not covered); those categories now say "declare it". Whole eggs without permit stay "Not allowed" (page says so).
- Canada food: CFIA lists items with limits (20 kg etc.), so the "Generally accepted" packaged-food claim was removed: all categories say "declare it".
- France + Austria, Belgium, Bulgaria, Croatia, Cyprus, Czechia, Denmark, Estonia, Finland food: Your Europe says from non-EU countries no meat or dairy; these now say "Not allowed" for meat and dairy and "declare it" for the rest, with the two EU links (before: generic, 9 of them without a source).
- Australia pets: DAFF "how to import" page: permit required, rabies vaccination/antibody-testing rules, post-entry quarantine (Mickleham). Removed "microchip, blood-titre test" claims that the page does not state; link now points to the how-to page instead of the home page.
- All pets pages: intro no longer lists "microchip, rabies titre test, permits".
- Other countries' food and pets: generic rule, no source, state BASED ON GLOBAL RULES (unchanged).
## Countries G to M: verification against the official pages (2026-10-17)
Method: each source link was opened in the built-in browser and read (blocked PDFs read with pdf.js in the page; WHO profiles compared field by field with `pdftotext`). Verified = every number/rule matches the page. Fixed = wording or number changed to what the page says, or a source added/removed so the label is true. Global = no readable official page for that category, the card says BASED ON GLOBAL RULES and keeps only the general rule. Per-category sources live in `CUSTOMS_CAT`, card text in `CUST_PATCH`, verified pet rules in `PET_VER` (canitakethis.html, block `GM_VERIFIED_V1`).
Not readable today (host refuses connection from this machine): Indonesia (beacukai.go.id), Kuwait (customs.gov.kw), Malaysia (customs.gov.my). Their numbers were removed, cards are now BASED ON GLOBAL RULES. Jordan and Lebanon have no customs source on the site at all (global).
Vape pages: the WHO table values were compared with all 25 WHO profile PDFs. Fixed: Germany flavours ("Some are banned"), Hungary and Lithuania ("All are banned", duplicate text and footnote digit), Mauritius (ENNDS text was repeated). Customs links that did not mention vapes were removed from the vape card.
Plants cards of EU countries now state the Commission rule (certificate needed; five fruit exceptions) instead of the generic "banned outright / declare without exception" text.

| Country | Alcohol | Tobacco | Cash | Plants | Vape | Food | Pets |
|---|---|---|---|---|---|---|---|
| Georgia | fixed ("on top of" removed, 30-day period only land/sea) | fixed (same) | verified | fixed (permit/certificate from brochure) | fixed (50 ml e-liquid line added) | global | global |
| Germany | verified (EU) | verified; EU "combine products" note fixed | fixed ("seizure" not on page) | fixed | fixed (WHO flavours) | verified (general rule, EU links) | global |
| Greece | verified | verified (air 200 / land-sea 40 list checked) | fixed | fixed | verified | global | global |
| Hong Kong | fixed (liquor >30% only, 24 h rule), source added | verified, source added | verified, source added | global | global (no WHO profile) | global | global |
| Hungary | verified | verified | fixed | fixed | fixed (WHO flavours text) | global | global |
| Iceland | verified | verified | fixed ("E-29" not on page removed) | fixed | fixed (new: island.is 20 units / 40 ml rule) | verified (MAST + island.is) | global |
| India | fixed, source added (CBIC) | fixed (100 cig / 25 cigars / 125 g), source added | fixed | fixed (restricted goods list) | verified | global | global |
| Indonesia | unreadable, now global | unreadable, now global | unreadable, now global | unreadable, now global | verified | global | global |
| Ireland | verified | verified | fixed | fixed | verified | global | fixed (unverified "strict" claim removed) |
| Israel | verified | verified | fixed (NIS 12,000 only on listed land exits/Gaza, other source added) | fixed | verified (customs link removed) | global | global |
| Italy | verified | verified | fixed | fixed | verified (customs link removed) | verified (general rule, EU links) | global |
| Jamaica | verified | verified | global (page has no cash rule) | global | verified (customs link removed) | global | global |
| Japan | verified | verified | fixed (gold bullion 90% over 1 kg, form wording) | verified (card text added) | verified | global | fixed (AQS rule: notification, 12 h / up to 180 days, no "permit") |
| Jordan | global | global | global | global | verified | global | global |
| Kenya | fixed (declare spirits >1 L, wine >2 L) | fixed (declare >250 g) | verified | fixed (restricted item) | verified | global | global |
| Kuwait | unreadable, now global | unreadable, now global | global | global | verified | global | global |
| Latvia | verified | verified | fixed | fixed | verified | global | global |
| Lebanon | global | global | global | global | verified | global | global |
| Lithuania | verified | verified | fixed | fixed | fixed (WHO flavours text) | global | global |
| Luxembourg | verified | verified | fixed | fixed | verified | global | global |
| Malaysia | global | global | global | global | verified | global | global |
| Maldives | fixed (prior approval wording) | verified | global (page has no cash rule) | verified | verified | global | global |
| Malta | verified | verified | fixed | fixed | verified | global | global |
| Mauritius | fixed (date wording, "merchandise for sale") | verified | verified | fixed (MRA import-restrictions page) | fixed (WHO text) | verified | fixed (permit, no pets as baggage, 1 month quarantine) |
| Mexico | verified, ANAM source added | verified, ANAM source added | fixed (fine 20-40%), ANAM source added | verified (2014 SENASICA notice, disclosed) | verified | global | global |
| Morocco | verified | verified | verified | fixed | verified (customs link removed) | global | global |

Open follow-ups: re-read Indonesia, Kuwait, Malaysia, Jordan, Lebanon when their hosts answer; Ireland and Iceland pet rules (DAFM/MAST) can be added as `PET_VER` rows; Georgia air-arrival period wording should be confirmed with the Revenue Service.
