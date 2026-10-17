# Medication coverage by country (generated end of session 32, 2026-10-16)

**50 of 85 countries have rules read from official pages.** PER-MEDICINE = ingredient-level rows (pages /medication/<drug>/<country>/ exist for the brands in MED_PAGE). CATEGORY NOTE = the official page describes controlled substances as a category (country-level rule shown on every medication card of that country). NOT DONE = still on the general-rules wording; the reason column says what blocked it or that it was never tried.

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
| Greece | NOT DONE | | EOF/AADE: only approval-to-import via prefecture, no traveller page |
| Turkey | CATEGORY NOTE (MED_NOTE) | https://www.mfa.gov.tr/turkiye_ye-ait-gumruk-bilgileri.en.mfa |  |
| Netherlands | PER-MEDICINE ROWS (MED_VER) | https://www.government.nl/documents/question-and-answer/can-i-take-my-medication-abroad |  |
| Switzerland | CATEGORY NOTE (MED_NOTE) | https://www.swissmedic.ch/swissmedic/en/home/news/focus/einreise-in-die-schweiz-mit-medikamenten.html |  |
| Singapore | PER-MEDICINE ROWS (MED_VER) | https://www.hsa.gov.sg/travelling-with-medication-and-medical-devices/personal-medications/ |  |
| India | CATEGORY NOTE (MED_NOTE) | https://cdsco.gov.in/opencms/export/sites/CDSCO_WEB/Pdf-documents/Consumer_Section_PDFs/personal_use.pdf | session 34, 2026-10-16 |
| China | PER-MEDICINE ROWS (MED_VER) | https://english.shanghai.gov.cn/en-ImmigrationCustoms/20240516/632357dc3fbe483c923a5c296795b618.html |  |
| South Korea | CATEGORY NOTE (MED_NOTE) | https://www.mfds.go.kr/eng/brd/m_60/view.do?seq=75669 |  |
| Qatar | CATEGORY NOTE (MED_NOTE) | https://hukoomi.gov.qa/en/News/MOPH-Launches-Electronic-System-for-Controlled-Medicines-for-Travelers |  |
| Saudi Arabia | NOT DONE | | 2026-10-17: SFDA has a traveller clearance-permit service (CDS portal, news 4292351) but sfda.gov.sa is denied/reset from this machine; not read |
| Egypt | NOT DONE | | EDA pages cover outbound travel only (arrival rule not found) |
| Cyprus | CATEGORY NOTE (MED_NOTE) | https://www.moh.gov.cy/moh/phs/phs.nsf/drugsphych_en/drugsphych_en |  |
| Portugal | CATEGORY NOTE (MED_NOTE) | https://www.infarmed.pt/web/infarmed/legislacao/legislacao-farmaceutica-compilada/titulo-iii-medicamentos/capitulo-iii-estupefacientes-e-psicotropicos | session 34, 2026-10-16 |
| Austria | CATEGORY NOTE (MED_NOTE) | https://www.sozialministerium.gv.at/Themen/Gesundheit/Drogen-und-Sucht/Suchtmittel-NPS-Drogenausgangsstoffe/Suchtmittelhaltige-Arzneimittel-im-Reiseverkehr.html |  |
| Belgium | CATEGORY NOTE (MED_NOTE) | https://www.famhp.be/en/human_use/particular_products/specially_reglemented_substances/narcotics_psychotropics/informations_pour_les_voyageurs |  |
| Poland | CATEGORY NOTE (MED_NOTE) | https://www.gov.pl/web/chief-pharmaceutical-inspectorate/transport-of-narcotic-and-psychotropic-substances-necessary-for-medical-treatment-when-crossing-the-border-of-the-republic-of-poland |  |
| Mexico | CATEGORY NOTE (MED_NOTE) | https://www.anam.gob.mx/equipaje-y-franquicia/ | session 34, 2026-10-16 |
| Brazil | CATEGORY NOTE (MED_NOTE) | https://www.gov.br/anvisa/pt-br/assuntos/paf/regras-de-bagagem | session 34, 2026-10-16 |
| Argentina | NOT DONE | | argentina.gob.ar service page returns 500 |
| Chile | NOT DONE | | ispch.gob.cl denied/times out |
| Colombia | NOT DONE | | invima.gov.co resolution not reachable; dian.gov.co page has no medicine rule |
| Peru | NOT DONE | | SUNAT page only says medicines are part of baggage, no controlled-substance rule |
| South Africa | CATEGORY NOTE (MED_NOTE) | https://www.sars.gov.za/guide-to-duty-free-allowances-for-travellers/ | session 34, 2026-10-16 |
| Morocco | NOT DONE | | douane.gov.ma blocks the pane ("Request Rejected"); search snippets only, not read |
| Kenya | NOT DONE | | PPB pages cover commercial import authorisation only |
| Nigeria | NOT DONE | | NAFDAC pages are commercial import permits only |
| Ethiopia | CATEGORY NOTE (MED_NOTE) | http://www.efda.gov.et/wp-content/uploads/2023/06/Guideline-on-Medical-Products-Special-import-permit.pdf | session 34, 2026-10-16 |
| New Zealand | PER-MEDICINE ROWS (MED_VER) | https://www.medsafe.govt.nz/consumers/miet/importmedicines.asp |  |
| Ireland | CATEGORY NOTE (MED_NOTE) | https://www.gov.ie/en/department-of-health/services/travelling-into-ireland-from-schengen-countries-with-prescribed-narcotics-andor-psychotropic-substances/ |  |
| Sweden | CATEGORY NOTE (MED_NOTE) | https://www.tullverket.se/travellingwithmedicines.4.311bf4f016e69d6ea0d97b.html |  |
| Norway | CATEGORY NOTE (MED_NOTE) | https://www.dmp.no/en/manufacturing-import-and-retailing-of-medicines/importing-medicines-for-personal-use/bringing-medicines-into-norway-by-travel |  |
| Denmark | CATEGORY NOTE (MED_NOTE) | https://laegemiddelstyrelsen.dk/da/apoteker/medicin-indfoert-fra-udlandet/medicin-til-mennesker/indfoerer-du-medicin-som-indeholder-doping-eller-euforiserende-stoffer/ |  |
| Finland | NOT DONE | | fimea.fi and tulli.fi behind Cloudflare |
| Iceland | CATEGORY NOTE (MED_NOTE) | https://www.ima.is/medicinal-products/medicines-in-luggage-and-postal-shipments/ |  |
| Czechia | CATEGORY NOTE (MED_NOTE) | https://celnisprava.gov.cz/cz/dalsi-kompetence/informace-pro-fyzicke-osoby/Stranky/dovoz-vyvoz-a-pruvoz-navykovych-latek-a-leku.aspx |  |
| Hungary | CATEGORY NOTE (MED_NOTE) | https://ogyei.gov.hu/travelling_with_medicine |  |
| Romania | NOT DONE | | customs.ro behind Cloudflare; ANM has no traveller page |
| Bulgaria | NOT DONE | | 2026-10-17: customs.bg page on narcotic medicines (30 days, Art. 58) exists but is unreachable from here; not read |
| Croatia | CATEGORY NOTE (MED_NOTE) | https://carina.gov.hr/featured/information-for-passengers-natural-persons/bringing-in-medicine-and-narcotics/6745 |  |
| Slovenia | CATEGORY NOTE (MED_NOTE) | https://www.fu.gov.si/en/life_events_individuals/import_of_medications |  |
| Slovakia | NOT DONE | | SUKL page is a glossary entry about travelling OUT (certificate from regional pharmacist) |
| Serbia | CATEGORY NOTE (MED_NOTE) | https://www.carina.rs/en/passengers/passenger-custom-clerance/useful-information-for-passengers.html | session 34, 2026-10-16 |
| Ukraine | NOT DONE | | dls.gov.ua has no traveller page |
| Georgia | CATEGORY NOTE (MED_NOTE) | https://www.rs.ge/Media/Default/Images/CustomsBrochures/Prohibited%20and%20Permitted%20Medicines.pdf | session 34, 2026-10-16 |
| Russia | NOT DONE | | 2026-10-17: customs.gov.ru lekarstvennye-sredstva page exists but connection refused from here; not read |
| Malta | NOT DONE | | Medicines Authority page covers Maltese residents travelling out only |
| Luxembourg | NOT DONE | | only forms and generic customs pages, no readable traveller rule |
| Estonia | NOT DONE | | Ravimiamet page covers Estonians travelling out only |
| Latvia | CATEGORY NOTE (MED_NOTE) | https://www.zva.gov.lv/en/patients-and-public/medicines/purchase-medicines-pharmacy/carrying-medicines-and-out-country-and-receiving-them-post | session 34, 2026-10-16 |
| Lithuania | NOT DONE | | 2026-10-17: vvkt.lt behind Cloudflare; only a 2018 customs leaflet found, not read |
| Jordan | NOT DONE | | JFDA/customs pages found cover import permits for businesses only |
| Lebanon | NOT DONE | | MoPH pages are registration/COVID notices, no traveller rule |
| Kuwait | NOT DONE | | only a Dec 2025 news item on a new ministerial decision, no quantities/periods published |
| Bahrain | NOT DONE | | NHRA pages are pharmacy/dispensing rules and old parcel rules, no traveller page |
| Oman | NOT DONE | | moh.gov.om not reachable from here (DNS/denied) on 2026-10-16 |
| Indonesia | CATEGORY NOTE (MED_NOTE) | https://www.pom.go.id/storage/katabpom-dokumen/LXqn7aHCBH2EjRm5s5I3vofa67UQfnG8BENemKwd.pdf |  |
| Malaysia | NOT DONE | | pharmacy.moh.gov.my connection refused (guide: 1 month, not read in full) |
| Philippines | NOT DONE | | customs.gov.ph returns 403 (BOC guide 2026 and PDEA guideline not read) |
| Vietnam | NOT DONE | | 2026-10-17: customs.gov.vn pages load empty in the pane (Decree 163/2025 per search snippets; not read) |
| Cambodia | NOT DONE | | customs lists MoH certificate for drugs, no traveller rule |
| Sri Lanka | CATEGORY NOTE (MED_NOTE) | https://www.nmra.gov.lk/announcements/bringing-personal-medicines-into-sri-lanka |  |
| Nepal | NOT DONE | | no traveller page found (customs tia.customs.gov.np, DDA) |
| Hong Kong | PER-MEDICINE ROWS (MED_VER) | https://www.drugoffice.gov.hk/eps/do/en/consumer/news_informations/faq.html |  |
| Taiwan | CATEGORY NOTE (MED_NOTE) | https://web.customs.gov.tw/etaipei/singlehtml/3396?cntId=1c1ab06901934524b5c7494c42251bf7 |  |
| Maldives | CATEGORY NOTE (MED_NOTE) | https://www.customs.gov.mv/Individuals/Items%20for%20Personal%20Use/Individual-Prohibited-and-Restricted-Items-for-Import |  |
| Mauritius | CATEGORY NOTE (MED_NOTE) | https://www.mra.mu/index.php/customs1/travellers/13-customs/150-import-restrictions | session 34, 2026-10-16 |
| Seychelles | NOT DONE | | only prohibited-goods regulations, no traveller medicine rule |
| Fiji | CATEGORY NOTE (MED_NOTE) | https://www.health.gov.fj/wp-content/uploads/2024/05/Import-Permit-Guidelines-240305.pdf | session 34, 2026-10-16 |
| Costa Rica | NOT DONE | | ministeriodesalud.go.cr returns 403 / security block (JVD traveller document not read) |
| Panama | NOT DONE | | no traveller page on minsa.gob.pa; INCB table not used (checkbox layout ambiguous) |
| Dominican Republic | CATEGORY NOTE (MED_NOTE) | https://www.aduanas.gob.do/manual-del-viajero/ | session 34, 2026-10-16 |
| Jamaica | NOT DONE | | customs/MOH pages found: permit for controlled substances only, no traveller rule |
| Cuba | NOT DONE | | aduana.gob.cu FAQ covers duty exemption only, no traveller medicine rule |
