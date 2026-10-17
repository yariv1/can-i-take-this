# Country vaping: sections from the countries' own official pages (session 35, 2026-10-18)

The 83 WHO-based vaping pages (`country_vape.js`) stay as they are. For countries whose own authority publishes the rule we add one section after the WHO table (table of what the page says, "Not read" note, extra visible FAQ, source in the "Official source" box and card text). Title, description, H1 and the schema FAQ of every page stay unchanged (`keepSchema`).

Tool: `node vape_add_country.js spec.json` -> `vape_extra.json` (keyed by ISO code; spec: code, sections[{h,p,table,list}], faq, src, card). Then `node build.js` and the guards. Hong Kong has no WHO profile, so its vaping page is built another way and is not covered yet.

## Done (15)
| Country | Source read |
|---|---|
| Singapore | HSA statement on enforcement against e-vaporisers (1 Aug 2024) |
| United Kingdom | GOV.UK, bringing goods into Great Britain for personal use (50 ml vaping liquid; the 1 Oct 2026 duty is not on the cached page) |
| Canada | CBSA "What visitors can bring into Canada" |
| Norway | Tolletaten, private importation of nicotine and tobacco products (ban from 1 Jan 2026) |
| Brazil | Anvisa news of 19 Apr 2024 (ban incl. hand luggage) |
| Mexico | ANAM "Mercancia que no puedes ingresar a Mexico" |
| India | Prohibition of Electronic Cigarettes Act 2019 (NTCP PDF) |
| Thailand | thailand.go.th joint summary (updated 11 Jul 2023) |
| Switzerland | BAZG duty-free allowances table (250 ml, 25 disposables) |
| United Arab Emirates | Dubai Customs prohibited and restricted goods (restricted, needs approval) |
| Australia | TGA "Vapes: information for individuals and patients" (traveller's exemption 2 vapes / 20 accessories / 200 mL) |
| Sweden | Tullverket, buying e-cigarettes and refills when travelling |
| South Korea | Korea Customs passenger guide (20 ml under 1% nicotine) |
| Mauritius | MRA selected prohibited goods list (quantity column not restated: layout unclear) |
| Iceland | island.is, what you can bring or order to Iceland |

Egypt and Turkey already had their own section (`country_vape_extra.js`).

## Tried, not used
Japan (customs pages only cover heat-not-burn duty; nicotine liquid not addressed), United States (CBP/FDA pages are about commercial seizures), Germany (zoll.de page gives tax only, no traveller figure), Netherlands (douane.nl pages did not mention vapes), Ireland (Revenue pages cover the e-liquid tax, not travellers), Qatar (customs traveller page does not mention e-cigarettes), Oman, Jordan, Cambodia, Sri Lanka, Vietnam, Nepal (no readable official page on e-cigarettes), New Zealand (customs page covers cannabis utensils, not nicotine vapes).

Duplicate text (audit_duplicates.js, country/*/vaping): 68% -> 63%.
