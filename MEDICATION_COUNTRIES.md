# Medication coverage by country (generated end of session 32, 2026-10-16)

**38 of 85 countries have rules read from official pages.** PER-MEDICINE = ingredient-level rows (pages /medication/<drug>/<country>/ exist for the brands in MED_PAGE). CATEGORY NOTE = the official page describes controlled substances as a category (country-level rule shown on every medication card of that country). NOT DONE = still on the general-rules wording; the reason column says what blocked it or that it was never tried.

How to continue: read MEDICATION_WORKFLOW.md, take a NOT DONE country, find its official traveller page (WebSearch with allowed_domains, then read the page IN FULL with the built-in browser pane: mcp__Claude_Browser__navigate + javascript_tool document.body.innerText), then `node med_add_country.js note|verified spec.json`.

| Country | Status | Main source URL (first MED_AUTH link) | If NOT DONE: why |
|---|---|---|---|
| Israel | CATEGORY NOTE (MED_NOTE) | https://www.gov.il/en/pages/carrying-medication |  |
| United States | CATEGORY NOTE (MED_NOTE) | https://www.fda.gov/industry/import-basics/personal-importation |  |
| United Kingdom | PER-MEDICINE ROWS (MED_VER) | https://www.gov.uk/guidance/controlled-drugs-personal-licences |  |
| Japan | PER-MEDICINE ROWS (MED_VER) | https://www.ncd.mhlw.go.jp/en/application2.html |  |
| United Arab Emirates | PER-MEDICINE ROWS (MED_VER) | https://u.ae/en/information-and-services/health-and-fitness/Health-and-wellbeing/drugs-and-controlled-medicines |  |
| France | PER-MEDICINE ROWS (MED_VER) | https://ansm.sante.fr/vos-demarches/patient/voyager-avec-mes-medicaments |  |
| Germany | CATEGORY NOTE (MED_NOTE) | https://www.bfarm.de/EN/Federal-Opium-Agency/Narcotic-drugs/Travelling-with-narcotic-drugs/_artikel.html |  |
| Thailand | CATEGORY NOTE (MED_NOTE) | https://en.fda.moph.go.th/entrepreneurs-narcotic-drugs-and-psychotropic-substances/category/guidance-for-travelers-under-treatment-carrying-personal-medications-containing-narcotic-drugs-into-/ | rows NOT added: current FDA page gives schedules + quantities (used as MED_NOTE) but no ingredient list; the permit portal drug check is a dynamic app |
| Australia | PER-MEDICINE ROWS (MED_VER) | https://www.odc.gov.au/travellers/travelling-or-australia-medicines-and-medical-devices |  |
| Canada | PER-MEDICINE ROWS (MED_VER) | https://www.canada.ca/en/health-canada/services/health-concerns/controlled-substances-precursor-chemicals/controlled-substances/compliance-monitoring/travelling-into-and-out-of-canada-with-prescription-medication-containing-controlled-substances.html |  |
| Italy | CATEGORY NOTE (MED_NOTE) | https://conslondra.esteri.it/wp-content/uploads/2022/08/02_AssistenzaSociale_quantitativi_massimi_farmaci.doc | 2026-10-16 re-check: salute.gov.it page unreadable (504 / bot validation), text from session 32 NOT re-verified |
| Spain | CATEGORY NOTE (MED_NOTE) | https://www.aemps.gob.es/industria-farmaceutica/comercio-exterior/medicamentos-destinados-al-tratamiento-de-los-viajeros/ |  |
| Greece | NOT DONE |  | no traveller page found (EOF/AADE) |
| Turkey | CATEGORY NOTE (MED_NOTE) | https://www.mfa.gov.tr/turkiye_ye-ait-gumruk-bilgileri.en.mfa |  |
| Netherlands | PER-MEDICINE ROWS (MED_VER) | https://www.government.nl/documents/question-and-answer/can-i-take-my-medication-abroad |  |
| Switzerland | CATEGORY NOTE (MED_NOTE) | https://www.swissmedic.ch/swissmedic/en/home/news/focus/einreise-in-die-schweiz-mit-medikamenten.html |  |
| Singapore | PER-MEDICINE ROWS (MED_VER) | https://www.hsa.gov.sg/travelling-with-medication-and-medical-devices/personal-medications/ |  |
| India | NOT DONE |  | no traveller page found (NDPS Act only) |
| China | PER-MEDICINE ROWS (MED_VER) | https://english.shanghai.gov.cn/en-ImmigrationCustoms/20240516/632357dc3fbe483c923a5c296795b618.html |  |
| South Korea | CATEGORY NOTE (MED_NOTE) | https://www.mfds.go.kr/eng/brd/m_60/view.do?seq=75669 |  |
| Qatar | CATEGORY NOTE (MED_NOTE) | https://hukoomi.gov.qa/en/News/MOPH-Launches-Electronic-System-for-Controlled-Medicines-for-Travelers |  |
| Saudi Arabia | NOT DONE |  | SFDA and my.gov.sa block automated access (permit via Controlled Drugs System; not read) |
| Egypt | NOT DONE |  | EDA pages cover outbound travel only |
| Cyprus | CATEGORY NOTE (MED_NOTE) | https://www.moh.gov.cy/moh/phs/phs.nsf/drugsphych_en/drugsphych_en |  |
| Portugal | NOT DONE |  | no traveller page found (Infarmed) |
| Austria | CATEGORY NOTE (MED_NOTE) | https://www.sozialministerium.gv.at/Themen/Gesundheit/Drogen-und-Sucht/Suchtmittel-NPS-Drogenausgangsstoffe/Suchtmittelhaltige-Arzneimittel-im-Reiseverkehr.html |  |
| Belgium | CATEGORY NOTE (MED_NOTE) | https://www.famhp.be/en/human_use/particular_products/specially_reglemented_substances/narcotics_psychotropics/informations_pour_les_voyageurs |  |
| Poland | CATEGORY NOTE (MED_NOTE) | https://www.gov.pl/web/chief-pharmaceutical-inspectorate/transport-of-narcotic-and-psychotropic-substances-necessary-for-medical-treatment-when-crossing-the-border-of-the-republic-of-poland |  |
| Mexico | NOT DONE |  | embassy pages sit behind a Radware captcha; COFEPRIS page is about shipments, not travellers |
| Brazil | NOT DONE |  | ANVISA gov.br page does not render text (Portaria 344/98 + Portaria 6/1999: prescription copy needed) |
| Argentina | NOT DONE |  | argentina.gob.ar service page returns 500 |
| Chile | NOT DONE |  | ISP site times out |
| Colombia | NOT DONE |  | no traveller page found |
| Peru | NOT DONE |  | no traveller page found |
| South Africa | NOT DONE |  | official sources conflict (SAHPRA regulation 1 month vs SARS 3 months) |
| Morocco | NOT DONE |  | not tried yet |
| Kenya | NOT DONE |  | not tried yet |
| Nigeria | NOT DONE |  | not tried yet |
| Ethiopia | NOT DONE |  | not tried yet |
| New Zealand | PER-MEDICINE ROWS (MED_VER) | https://www.medsafe.govt.nz/consumers/miet/importmedicines.asp |  |
| Ireland | CATEGORY NOTE (MED_NOTE) | https://www.gov.ie/en/department-of-health/services/travelling-into-ireland-from-schengen-countries-with-prescribed-narcotics-andor-psychotropic-substances/ |  |
| Sweden | CATEGORY NOTE (MED_NOTE) | https://www.tullverket.se/travellingwithmedicines.4.311bf4f016e69d6ea0d97b.html |  |
| Norway | CATEGORY NOTE (MED_NOTE) | https://www.dmp.no/en/manufacturing-import-and-retailing-of-medicines/importing-medicines-for-personal-use/bringing-medicines-into-norway-by-travel |  |
| Denmark | CATEGORY NOTE (MED_NOTE) | https://laegemiddelstyrelsen.dk/da/apoteker/medicin-indfoert-fra-udlandet/medicin-til-mennesker/indfoerer-du-medicin-som-indeholder-doping-eller-euforiserende-stoffer/ |  |
| Finland | NOT DONE |  | Fimea and Customs sit behind Cloudflare |
| Iceland | CATEGORY NOTE (MED_NOTE) | https://www.ima.is/medicinal-products/medicines-in-luggage-and-postal-shipments/ |  |
| Czechia | CATEGORY NOTE (MED_NOTE) | https://celnisprava.gov.cz/cz/dalsi-kompetence/informace-pro-fyzicke-osoby/Stranky/dovoz-vyvoz-a-pruvoz-navykovych-latek-a-leku.aspx |  |
| Hungary | CATEGORY NOTE (MED_NOTE) | https://ogyei.gov.hu/travelling_with_medicine |  |
| Romania | NOT DONE |  | no traveller page found |
| Bulgaria | NOT DONE |  | customs.bg times out; MFA page is outbound only |
| Croatia | CATEGORY NOTE (MED_NOTE) | https://carina.gov.hr/featured/information-for-passengers-natural-persons/bringing-in-medicine-and-narcotics/6745 |  |
| Slovenia | CATEGORY NOTE (MED_NOTE) | https://www.fu.gov.si/en/life_events_individuals/import_of_medications |  |
| Slovakia | NOT DONE |  | no traveller page found |
| Serbia | NOT DONE |  | not tried yet |
| Ukraine | NOT DONE |  | not tried yet |
| Georgia | NOT DONE |  | not tried yet |
| Russia | NOT DONE |  | no traveller page found (Roszdravnadzor permits only) |
| Malta | NOT DONE |  | only outbound/forms pages found |
| Luxembourg | NOT DONE |  | forms found on sante.public.lu but rules not readable |
| Estonia | NOT DONE |  | Ravimiamet page covers Estonians travelling out only |
| Latvia | NOT DONE |  | not tried yet |
| Lithuania | NOT DONE |  | not tried yet |
| Jordan | NOT DONE |  | not tried yet |
| Lebanon | NOT DONE |  | not tried yet |
| Kuwait | NOT DONE |  | not tried yet |
| Bahrain | NOT DONE |  | not tried yet |
| Oman | NOT DONE |  | not tried yet |
| Indonesia | CATEGORY NOTE (MED_NOTE) | https://www.pom.go.id/storage/katabpom-dokumen/LXqn7aHCBH2EjRm5s5I3vofa67UQfnG8BENemKwd.pdf |  |
| Malaysia | NOT DONE |  | MOH pharmacy site times out (guide: 1 month, declare, Poisons Act 3rd Schedule psychotropics; NOT read in full) |
| Philippines | NOT DONE |  | customs.gov.ph returns 403 (PDEA guideline not read) |
| Vietnam | NOT DONE |  | customs.gov.vn page loads empty |
| Cambodia | NOT DONE |  | not tried yet |
| Sri Lanka | CATEGORY NOTE (MED_NOTE) | https://www.nmra.gov.lk/announcements/bringing-personal-medicines-into-sri-lanka |  |
| Nepal | NOT DONE |  | not tried yet |
| Hong Kong | PER-MEDICINE ROWS (MED_VER) | https://www.drugoffice.gov.hk/eps/do/en/consumer/news_informations/faq.html |  |
| Taiwan | CATEGORY NOTE (MED_NOTE) | https://web.customs.gov.tw/etaipei/singlehtml/3396?cntId=1c1ab06901934524b5c7494c42251bf7 |  |
| Maldives | CATEGORY NOTE (MED_NOTE) | https://www.customs.gov.mv/Individuals/Items%20for%20Personal%20Use/Individual-Prohibited-and-Restricted-Items-for-Import |  |
| Mauritius | NOT DONE |  | not tried yet |
| Seychelles | NOT DONE |  | not tried yet |
| Fiji | NOT DONE |  | not tried yet |
| Costa Rica | NOT DONE |  | not tried yet |
| Panama | NOT DONE |  | not tried yet |
| Dominican Republic | NOT DONE |  | not tried yet |
| Jamaica | NOT DONE |  | not tried yet |
| Cuba | NOT DONE |  | not tried yet |
