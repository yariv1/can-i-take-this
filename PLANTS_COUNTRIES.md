# Plants & seeds: countries rebuilt from official pages (session 35, 2026-10-18)

Method (same as pets/food): read the official page in full, write ONLY what it says in our own words, say what was not read, unreadable countries stay generic (BASED ON GLOBAL RULES). Title, description, H1 and the single schema FAQ of every page stay as they were (SEO change guard); the visible "Quick answers" block carries the extra FAQ.

Tool: `node plants_add_country.js spec.json` (spec: country, src [[url,label]], srcPlain, date, lead, rows, notes, faq, card). It stores the entry in `plants_extra.json` (loaded by `country_plants.js`) and sets `CUSTOMS_CAT[country].plants` in `canitakethis.html`, so the page state follows the link (OFFICIAL SOURCE). Then `node build.js` and the guards.

Pages of the 12 earlier data countries (US, UK, Australia, Canada, Japan, Singapore, Switzerland, Brazil, Mexico, Norway, South Korea, Thailand) live in `country_plants_data.js`; the 27 EU countries share the Commission/Your Europe text by design (EU rule, identical).

## Done (14)
| Country | Source read |
|---|---|
| New Zealand | MPI "How to declare items when arriving in NZ" |
| Chile | SAG sworn-declaration procedure page |
| Hong Kong | AFCD "Import of plants" (page dated 2026-02-23) |
| Iceland | MAST "Import of plants" (Regulation 189/1990, traveller allowances) |
| Mauritius | MRA Customs import restrictions (agricultural items) |
| Fiji | BAF "Plant and plant products" |
| Sri Lanka | Dept. of Agriculture, NPQS passengers at Bandaranaike airport |
| Jamaica | JIS/Ministry notice on plant import permits + Ministry amnesty-bin notice (both Sept 2020) |
| Argentina | SENASA traveller page (products not permitted, Res. 295/1999) |
| China | GACC Customs Clearance Guide for International Passengers (read in the browser pane) |
| South Africa | Dept. of Agriculture statement on SAnews, 26 Dec 2024 |
| Israel | Israel Tax Authority customs guide for tourists (updated 30 Jul 2026; conditional-approval list, read in the pane) |
| Maldives | Maldives Customs: prohibited and restricted items for import (read in the pane) |
| Turkey | Ministry of Agriculture and Forestry, plant quarantine directorate pages (Hatay, Trabzon) |

## Tried, not readable / too thin (stay generic or keep existing link)
Seychelles (only a customs notice reprinted in a newspaper, not used), Malaysia (only the klia2 airport-operator page; MAQIS blocked), Taiwan (baphiq.gov.tw does not resolve), India (plantquarantineindia.nic.in unreachable; the CBIC passenger PDF only lists "plants and their produce" without conditions), Peru (gob.pe SENASA 418/restricted), Colombia (ICA host refused), Kenya (KRA page only lists "Plants and Plant material" as restricted), Georgia (RS PDF only lists "plant and/or animal, their parts" as declarable), Morocco (rejected), Indonesia (Perbarantin 5/2024 PDF is an abstract only), Nigeria (NAQS FAQ has no passenger rule), Vietnam, Serbia, UAE, Egypt, Russia, Costa Rica, Panama, Philippines (no readable official traveller page found).

Remaining generic non-EU pages: bahrain cambodia colombia costa-rica cuba dominican-republic egypt ethiopia georgia india indonesia jordan kenya kuwait lebanon malaysia morocco nepal nigeria oman panama peru philippines qatar russia saudi-arabia serbia seychelles taiwan ukraine united-arab-emirates vietnam.

Duplicate text (audit_duplicates.js, plants-seeds): 59% -> 54%. The rest is the identical EU wording on 27 pages.
