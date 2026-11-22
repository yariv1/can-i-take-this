exec(open('C:/Users/yariv/Utility Website/can-i-take-this/dup_work/cv_batch7.py', encoding='utf8').read().split("add('CN'")[0])
WHO = 'WHO country profile read 2026-10-08 (base card)'

add('NZ', 'new-zealand', [sec('🛃 What New Zealand Customs says about vaporisers and tobacco',
    'From the New Zealand Customs Service pages "Equipment for smoking or taking drugs" (under prohibited and restricted items) and "Duty-free shopping", read on 22 November 2026. Customs lists vaporisers and their parts among the methamphetamine and cannabis utensils that you cannot bring in.',
    ['Item', 'What NZ Customs says'],
    [['Vaporisers and their parts', 'Prohibited, listed with methamphetamine and cannabis utensils'],
     ['Exception', 'Vaporisers approved as a medical device by an overseas regulator; tobacco pipes are also allowed'],
     ['Duty-free tobacco', '50 cigarettes, or 50 g of cigars or tobacco products, or 50 g of a mixture'],
     ['Above the limit', 'Declare it on the Traveller Declaration and pay duty and GST; undeclared tobacco is seized and destroyed, and you may be fined or prosecuted'],
     ['Age for tobacco concession', '17 or older']],
    ['<strong>Not read:</strong> any Customs allowance for nicotine e-liquid itself. Declare a vape on the New Zealand Traveller Declaration and ask Customs if unsure.'])],
    [['Can I bring a vaporiser into New Zealand?', 'The New Zealand Customs page on equipment for smoking or taking drugs lists vaporisers and their parts as prohibited, except vaporisers approved as a medical device by an overseas regulator. Declare it on arrival and ask Customs if you are unsure.']],
    [['https://www.customs.govt.nz/travel-to-and-from-new-zealand/prohibited-and-restricted-items/equipment-for-smoking-or-taking-drugs', 'New Zealand Customs Service - Equipment for smoking or taking drugs'],
     ['https://www.customs.govt.nz/travel-to-and-from-new-zealand/duty-free-shopping', 'New Zealand Customs Service - Duty-free shopping']],
    {'official': ['read 2026-11-22: NZ Customs equipment for smoking or taking drugs page (vaporisers and parts prohibited, medical-device exception) and duty-free shopping page (50 cigarettes / 50 g)'], 'reliable': [WHO], 'other': ['none needed: national customs pages read'], 'date': '2026-11-22'})
X['NZ']['card'] = {'status': 'stop', 'head': 'Vaporisers are prohibited at the border.', 'lines': ['New Zealand Customs lists vaporisers and their parts as prohibited, except those approved as a medical device by an overseas regulator. Declare it and check with Customs before you pack one.']}

add('AR', 'argentina', [sec('⚖️ What the Argentine government says about the 2026 change',
    'From the Argentine government news item "Nuevo marco normativo para los productos de tabaco y nicotina" (argentina.gob.ar, read on 22 November 2026) on Ministry of Health Resolution 549/2026. The WHO 2023 profile above still shows the older import ban; the Ministry says its new framework replaces the prohibition scheme. It does not state a traveller allowance.',
    ['Point', 'What the Ministry of Health says'],
    [['Resolution', '549/2026, Ministry of Health'],
     ['Old scheme', 'A prohibition, which the Ministry says did not stop access or use'],
     ['New scheme', 'Registration, control and oversight; a National Registry of Tobacco and Nicotine Products (RNPTN)'],
     ['Legal status', 'E-cigarettes, vapes, heated tobacco devices, vaping liquids and nicotine pouches are treated as tobacco products under Law 26.687'],
     ['Flavours', 'Only tobacco-flavour liquids and sticks, and tobacco or menthol pouches'],
     ['Disposable pre-filled e-cigarettes', 'Expressly prohibited'],
     ['Traveller allowance', 'Not stated']],
    ['<strong>Not read:</strong> the text of Resolution 549/2026, the ANMAT disposition and any customs (ARCA) traveller rule. Do not bring disposables, and confirm with Argentine customs before you carry any vape.'])],
    [['Is the vape import ban still in force in Argentina?', 'WHO (2023 profile, data as at 2022) lists an import ban. The Argentine Ministry of Health announced in 2026 that Resolution 549/2026 replaces the prohibition with a registration and control system and prohibits disposable pre-filled vapes. No traveller limit is published, so check with customs.']],
    [['https://www.argentina.gob.ar/noticias/nuevo-marco-normativo-para-los-productos-de-tabaco-y-nicotina', 'Argentina.gob.ar - Nuevo marco normativo para los productos de tabaco y nicotina (Resolution 549/2026)']],
    {'official': ['read 2026-11-22: argentina.gob.ar news item on Ministry of Health Resolution 549/2026 (prohibition replaced by registry, disposables prohibited); ARCA traveller page not found by search'], 'reliable': [WHO], 'other': ['none needed: government page read'], 'date': '2026-11-22'})
X['AR']['keepSchema'] = False
X['AR']['ttl'] = 'Vaping in Argentina 2026: Rules Changing'
X['AR']['desc'] = 'Is vaping legal in Argentina? Ministry of Health Resolution 549/2026 replaces the old ban with a registry; disposables are prohibited. WHO 2023 data shows the old ban.'
X['AR']['card'] = {'status': 'warn', 'head': 'Rules changed in 2026: check customs.', 'lines': ['The Ministry of Health says Resolution 549/2026 replaces the old prohibition with a registry and bans disposable vapes. No traveller allowance is published.']}

add('US', 'united-states', [sec('🛃 What the FDA says about importing e-cigarettes',
    'From the FDA page "Importing and Exporting" (tobacco products), read on 22 November 2026. It sets the rule for tobacco products imported into the United States. It is not a traveller allowance and does not give a quantity for personal vapes.',
    ['Point', 'What the FDA says'],
    [['Who must comply', 'Tobacco products imported or offered for import must meet the Federal Food, Drug, and Cosmetic Act and the Tobacco Control Act'],
     ['If requirements are not met', 'The imported tobacco products are subject to refusal of admission (section 801)'],
     ['Import alerts', 'On 3 January 2025 the FDA updated import alerts 98-07 and 98-06 to treat imported e-cigarette products separately from other tobacco products'],
     ['Traveller quantity', 'Not stated on the page']],
    ['<strong>Not read:</strong> any CBP or FDA rule on the number of vapes a traveller may carry. Declare vapes to CBP and expect that unauthorised products can be refused admission.'])],
    [['Can I bring a vape into the United States?', 'The FDA says imported tobacco products that do not meet US requirements can be refused admission, and it treats imported e-cigarettes under separate import alerts. It publishes no traveller quantity on that page, so declare vapes to CBP.']],
    [['https://www.fda.gov/tobacco-products/products-guidance-regulations/importing-and-exporting', 'U.S. FDA - Importing and Exporting (tobacco products)']],
    {'official': ['read 2026-11-22: FDA tobacco importing and exporting page: refusal of admission under FD&C Act section 801, import alerts 98-07 and 98-06 updated 2025-01-03, no traveller quantity; CBP traveller page for vapes not found by search'], 'reliable': [WHO], 'other': ['none needed: federal authority page read'], 'date': '2026-11-22'})

add('LK', 'sri-lanka', [sec('🛃 What Sri Lanka Customs says about cigarettes in passenger baggage',
    'From the Sri Lanka Customs Passenger Services Directorate page and the Customs passenger guide ("Travellers"), read on 22 November 2026. The directorate page says cigarettes, cigars, beedies and snuff are not allowed in personal baggage. Neither page names e-cigarettes or vape liquid.',
    ['Point', 'What Sri Lanka Customs says'],
    [['Cigarettes, cigars, beedies, snuff', 'Not allowed as personal baggage, accompanied or unaccompanied'],
     ['Airline crew', 'No allowance'],
     ['Restricted or prohibited articles', 'Listed in Schedule B of the Customs Ordinance'],
     ['False declaration', 'Loses the exemptions and is dealt with under the Customs Ordinance'],
     ['E-cigarettes and vape liquid', 'Not named on either page']],
    ['<strong>Not read:</strong> Schedule B and any Customs rule on e-cigarettes. Ask the Customs Information Desk (+94 11 2221333) before bringing a vape.'])],
    [['Can I bring a vape into Sri Lanka?', 'Sri Lanka Customs says cigarettes, cigars, beedies and snuff are not allowed in personal baggage and does not name e-cigarettes. Ask Customs before you pack one.']],
    [['https://www.customs.gov.lk/about-us/directorates-and-divisions/passenger-services-directorate/', 'Sri Lanka Customs - Passenger Services Directorate'],
     ['https://www.customs.gov.lk/personal/travellers/', 'Sri Lanka Customs - Travellers']],
    {'official': ['read 2026-11-22: Sri Lanka Customs passenger services directorate page (cigarettes, cigars, beedies, snuff not allowed as baggage) and passenger guide page: no vape word'], 'reliable': [WHO], 'other': ['none needed: national customs pages read'], 'date': '2026-11-22'})

add('CO', 'colombia', [sec('🛃 What DIAN says about the traveller baggage allowance',
    'From the DIAN page "Modalidad de viajeros" (read on 22 November 2026). It sets value and unit limits for baggage goods. It does not name tobacco, e-cigarettes or vape liquid.',
    ['Item', 'What DIAN says'],
    [['Goods for personal or family use, carried with you', 'Up to USD 2,000, no more than 10 units of the same kind, tax free'],
     ['Household, sport or work-related goods', 'USD 3,000 limit, 3 units of each; tax free if carried with you'],
     ['Goods above the allowance', '15% single tax (tributo unico) and Form 530'],
     ['Mobile phones', 'No more than 3, declared on Form 530'],
     ['Commercial quantities', 'Not covered by the traveller regime'],
     ['E-cigarettes and vape liquid', 'Not named on the page']],
    ['<strong>Not read:</strong> any DIAN or health-ministry rule on e-cigarettes. A few devices for your own use fit the generic 10-unit rule, but confirm with DIAN.'])],
    [['Is there a limit for vapes in Colombia?', 'DIAN allows personal goods up to USD 2,000 and no more than 10 units of the same kind, with 15% tax above that, and does not name e-cigarettes. Confirm with DIAN before you travel.']],
    [['https://www.dian.gov.co/Viajeros-y-Servicios-aduaneros/Paginas/Modalidad-viajeros.aspx', 'DIAN - Modalidad de viajeros']],
    {'official': ['read 2026-11-22: DIAN modalidad de viajeros page: USD 2,000, 10 units of the same kind, 15% single tax, form 530, no vape word'], 'reliable': [WHO], 'other': ['none needed: national customs page read'], 'date': '2026-11-22'})

add('VN', 'vietnam', [sec('⚖️ What WHO and the Vietnamese government say about the ban',
    'Unofficial source (reliable): WHO Viet Nam statement of 11 December 2025, and the Vietnamese Government News item of the same day on the amended Investment Law (both read on 22 November 2026). Vietnam Customs could not be read, so no passenger rule is quoted.',
    ['Point', 'What the sources say'],
    [['Resolution 173/2024/QH15 (November 2024)', 'Prohibits production, trade, importation, harbouring, transportation and use of e-cigarettes and heated tobacco products (WHO Viet Nam)'],
     ['Amended Investment Law (11 December 2025)', 'Bans investment and business activity in e-cigarettes and heated tobacco from 2026, with no exceptions for these products (WHO Viet Nam; Government News)'],
     ['Passenger rule', 'Not stated in either source']],
    ['<strong>Not read:</strong> the resolution text, the customs rule for travellers and the penalty decree. Treat a vape as not to be brought into Vietnam.'])],
    [['Can I bring a vape into Vietnam?', 'WHO Viet Nam describes Resolution 173/2024/QH15 as prohibiting the importation, transportation and use of e-cigarettes and heated tobacco products. Do not pack a vape for Vietnam and confirm with Vietnamese customs.']],
    [['https://www.who.int/vietnam/news/detail/11-12-2025-world-health-organization-welcomes-national-assembly-s-strong-stance-on-banned-e-cigarettes-and-heated-tobacco-products', 'Unofficial source: WHO Viet Nam - National Assembly stance on banned e-cigarettes (11 December 2025)'],
     ['https://en.baochinhphu.vn/print/viet-nam-passes-law-banning-e-cigarette-heated-tobacco-businesses-111251211151656139.htm', 'Vietnamese Government News - Viet Nam passes law banning e-cigarette, heated tobacco businesses']],
    {'official': ['Vietnam General Department of Customs: no traveller page found by search for vapes, not read'], 'reliable': ['read 2026-11-22: WHO Viet Nam statement 2025-12-11 (Resolution 173/2024/QH15 prohibits importation) and Vietnamese Government News 2025-12-11 (Investment Law); ' + WHO], 'other': ['press (Tuoi Tre, VnExpress, Straits-type travel news) seen in search for fines, not used'], 'date': '2026-11-22'})

add('SA', 'saudi-arabia', [sec('📰 What Saudi press reports about customs and e-cigarettes',
    'Less reliable source (press): Saudi Gazette / Okaz, 30 August 2020, and industry news site 2Firsts, 27 February 2023 (both read on 22 November 2026). The ZATCA (customs) pages could not be opened from here, so the figures are as reported and may have changed.',
    ['Date', 'What the press reports'],
    [['30 August 2020 (Saudi Gazette)', 'Saudi Customs banned import of shisha, e-cigarettes and accessories through shipping companies and individuals\' websites; seized items are confiscated and a fine imposed. SFDA-licensed companies may import commercial quantities'],
     ['27 February 2023 (2Firsts, citing the customs authority)', 'Non-frequent adult travellers may carry up to 25 disposable e-cigarettes, at most 125 per person every three months']],
    ['<strong>Not read:</strong> the ZATCA traveller pages and the current rule. Confirm the limit with Saudi customs before you travel.'])],
    [['How many vapes can I bring into Saudi Arabia?', 'Industry news (2Firsts, February 2023) reports that adult travellers may carry up to 25 disposable e-cigarettes, at most 125 per three months. This is press, not the customs page, so confirm with ZATCA.']],
    [['https://www.2firsts.com/news/saudi-arabia-allows-limited-entry-of-e-cigarettes', 'Less reliable source (press): 2Firsts - Saudi Arabia allows limited entry of e-cigarettes (2023)'],
     ['https://saudigazette.com.sa/article/597279/SAUDI-ARABIA/Customs-ban-individuals-from-importing-electronic-cigarettes', 'Less reliable source (press): Saudi Gazette - Customs ban individuals from importing e-cigarettes (2020)']],
    {'official': ['zatca.gov.sa FAQ 321 and tobacco quantity pages: no response on curl, navigation failed in browser pane 2026-11-22'], 'reliable': [WHO], 'other': ['read 2026-11-22: Saudi Gazette 2020-08-30 and 2Firsts 2023-02-27 (lower reliability press)'], 'date': '2026-11-22'})

k = 'country/belgium/vaping'
L[k].setdefault('official', []).append('2026-11-22: finance.belgium.be traveller page: captcha wall, not bypassed')
L[k].setdefault('reliable', []).append('read 2026-11-22: ECC Belgium (European Consumer Centre) page on online sale of e-cigarettes: online sales and imports from foreign webshops prohibited in Belgium; e-cigarettes treated like tobacco products (not a traveller allowance)')
add('BE', 'belgium', [sec('⚖️ What the European Consumer Centre Belgium says about e-cigarettes',
    'Unofficial source (reliable): European Consumer Centre Belgium, page "Online sale of e-cigarettes" (read on 22 November 2026). It is about buying from webshops, not about what you carry in a bag. The Belgian customs page for travellers (finance.belgium.be) sits behind a captcha and was not opened.',
    ['Point', 'What ECC Belgium says'],
    [['Online sales and imports from foreign webshops', 'Prohibited in Belgium; a parcel can be intercepted and confiscated by Customs & Excise'],
     ['Legal status', 'E-cigarettes are treated like tobacco products'],
     ['Bans listed', 'Use in enclosed public spaces, sale to under-18s, online sales, advertising except in newsagents and specialist shops'],
     ['Traveller allowance', 'Not stated']],
    ['<strong>Not read:</strong> the Belgian customs rule for travellers. Ask Belgian customs before carrying more than a device and a few pods.'])],
    [['Can I order a vape online to Belgium?', 'No. ECC Belgium says online sales of e-cigarettes, including from webshops abroad, are prohibited, and such parcels can be confiscated by customs.']],
    [['https://www.eccbelgium.be/themes/services-in-europe/health-services/online-sale-of-e-cigarettes', 'Unofficial source: European Consumer Centre Belgium - Online sale of e-cigarettes']],
    L['country/belgium/vaping'])
wrx(); wrl()
