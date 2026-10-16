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
