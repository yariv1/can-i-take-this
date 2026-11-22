exec(open('C:/Users/yariv/Utility Website/can-i-take-this/dup_work/cv_batch7.py', encoding='utf8').read().split("add('CN'")[0])
WHO = 'WHO country profile read 2026-10-08 (base card)'
D = '2026-11-22'

def g(code, slug, cc, name, rows, miss, q, a, official, extra_src=None, extra_log=None):
    src = [['https://gsthr.org/countries/profile/' + cc + '/e_cigarettes/', 'Less reliable source (secondary profile): Global State of Tobacco Harm Reduction - e-cigarettes in ' + name]]
    if extra_src: src = extra_src + src
    other = ['read ' + D + ': GSTHR e-cigarette profile for ' + name + ' (page updated 2026-11-16, secondary compilation, lower reliability)']
    if extra_log: other = extra_log + other
    add(code, slug, [sec('📰 What a secondary profile reports about e-cigarettes in ' + name,
        'Less reliable source (secondary profile): the Global State of Tobacco Harm Reduction (GSTHR) country page, updated 16 November 2026 and read on 22 November 2026. It compiles other sources and is not a customs page. The official customs rule for travellers could not be read, so treat this as background and confirm with customs.',
        ['Point', 'What GSTHR reports'], rows, ['<strong>Not read:</strong> ' + miss])],
        [[q, a]], src,
        {'official': [official], 'reliable': [WHO], 'other': other, 'date': D})

g('LT', 'lithuania', 'ltu', 'Lithuania',
  [['Legal status', 'Legal and regulated as tobacco products'],
   ['Sales', 'Sold in ordinary shops; online sales and health claims are banned'],
   ['Product limits', 'Nicotine up to 20 mg/ml, tanks of 2 ml or less, flavour restrictions'],
   ['Excise', 'Up to 10% of the rate on conventional cigarettes'],
   ['Age and public use', '18 and over; vaping restricted in public places']],
  'the Lithuanian customs traveller allowance for e-liquid and the current law text.',
  'Can I vape or bring e-liquid in Lithuania?', 'GSTHR describes e-cigarettes in Lithuania as legal and regulated like tobacco, with a 20 mg/ml nicotine cap and 2 ml tanks. It gives no traveller allowance, so check Lithuanian customs.',
  'muitine.lrv.lt traveller page and ntakd.lrv.lt e-cigarette page: HTTP 403 (Cloudflare) 2026-11-22, not bypassed; mano.muitine.lt same wall')

g('MA', 'morocco', 'mar', 'Morocco',
  [['Specific law', 'GSTHR says there is no specific e-cigarette law'],
   ['Personal import', 'Relayed from a vape retailer blog: bringing vapes for personal use is generally allowed; the profile advises checking the airline'],
   ['Minimum age', 'Unclear; the smoking age of 18 is suggested'],
   ['Public places', 'Smoking is banned in mosques, schools, hospitals and public transport; vaping there is not encouraged']],
  'any ADII (Moroccan customs) figure for travellers. Search results show customs duty and excise on e-cigarettes and a mandatory product standard from 2026, which are not baggage rules.',
  'Can I bring a vape to Morocco?', 'A secondary profile (GSTHR) says there is no specific e-cigarette law and relays that personal-use vapes are generally allowed, citing a vape retailer blog. Customs duties on e-cigarettes are high, so confirm the rule with Moroccan customs.',
  'douane.gov.ma circulars found in search cover domestic tax (TIC) on e-liquid and disposables, not a traveller allowance; finances.gov.ma ADII 2026 PDF: no response 2026-11-22')

g('NG', 'nigeria', 'nga', 'Nigeria',
  [['Specific rules', 'GSTHR cites other databases saying there are no specific e-cigarette regulations'],
   ['Status', 'Allowed; vapes are on sale in the country'],
   ['Use in public', 'Tobacco Control Laws is cited as reporting no ban on use indoors, at work or on public transport'],
   ['Age limit', 'None reported']],
  'any Nigeria Customs Service rule for passengers. Press in search results mention a House of Representatives review of the tobacco law and a customs seizure of expired disposables in cargo.',
  'Can I bring a vape to Nigeria?', 'A secondary profile (GSTHR) reports no specific e-cigarette rules in Nigeria and says vapes are on sale, but it gives no traveller allowance. Check with Nigeria Customs.',
  'customs.gov.ng passenger page: HTTP 522 2026-11-21; trade.gov Nigeria prohibited imports page read 2026-11-22: no e-cigarette entry')

g('CU', 'cuba', 'cub', 'Cuba',
  [['Specific law', 'GSTHR says there is no specific e-cigarette law'],
   ['Personal import', 'Some references say people cannot import them for personal use'],
   ['Customs position (press)', 'Directorio Cubano reports that Cuban customs cites Ministry of Public Health Resolution 23 of 2020 as the rule on non-commercial import and export of e-cigarettes, and says it applies even with a medical prescription']],
  'the text of Resolution 23/2020 and any aduana.gob.cu page that names e-cigarettes. The press report is secondary; the two sources do not agree on whether a specific rule exists.',
  'Can I bring a vape to Cuba?', 'Cuban customs, as reported by Directorio Cubano, cites Ministry of Health Resolution 23 of 2020 on non-commercial imports of e-cigarettes, with no exception for prescriptions. GSTHR says references suggest personal import is not allowed. Do not pack a vape for Cuba without written confirmation.',
  'aduana.gob.cu pages found by search (what you can and cannot import) do not name e-cigarettes in the summaries; not read in full',
  [['https://www.directoriocubano.info/?p=99663', 'Less reliable source (press): Directorio Cubano - customs position on e-cigarettes in Cuba']],
  ['read 2026-11-22: Directorio Cubano article reporting Aduana General position and MINSAP Resolution 23/2020 (lower reliability press)'])

g('JM', 'jamaica', 'jam', 'Jamaica',
  [['Legal status', 'Allowed, including online purchase'],
   ['Product rules', 'No limits on nicotine strength or flavours; no health warning required on packs'],
   ['Use in public', 'Restricted in public places']],
  'Jamaica Customs Agency traveller rules (the site had a certificate error) and any rule naming vapes.',
  'Is vaping legal in Jamaica?', 'A secondary profile (GSTHR) says vaping is allowed in Jamaica with no nicotine or flavour limits, but use in public places is restricted. It gives no traveller allowance, so check Jamaica Customs.',
  'jacustoms.gov.jm: TLS certificate error 2026-11-22, not bypassed')

g('CR', 'costa-rica', 'cri', 'Costa Rica',
  [['Legal status', 'Allowed, including online purchase'],
   ['Manufacturers', 'Must notify authorities of new products and put health warnings on packs'],
   ['Flavours and nicotine', 'No restrictions'],
   ['Age and public use', '18 to buy; vaping prohibited in public places']],
  'the Costa Rican customs traveller rule (hacienda.go.cr search results mention only general baggage articles and a USD 500 non-baggage exemption).',
  'Is vaping legal in Costa Rica?', 'A secondary profile (GSTHR) says e-cigarettes are legal in Costa Rica with a minimum age of 18 and a ban on use in public places. It gives no traveller allowance, so check Costa Rican customs.',
  'hacienda.go.cr and AduanaFacil traveller pages found by search: general baggage rules only, no vape rule read')

g('OM', 'oman', 'omn', 'Oman',
  [['Status (January 2025 data)', 'Banned: import, sale and use of vapes are described as illegal'],
   ['Advertising', 'Not clear that all advertising is banned'],
   ['Advice', 'Travellers should be aware of the strict rules to avoid legal problems']],
  'the Omani customs traveller page (no response), the legal text of the ban and anything newer than January 2025.',
  'Can I bring a vape to Oman?', 'A secondary profile (GSTHR, January 2025 data) describes vapes as banned in Oman, including import, sale and use. Do not pack one without written confirmation from Omani customs.',
  'customs.gov.om traveller services page: no response on curl, navigation failed in browser pane 2026-11-22')

g('UA', 'ukraine', 'ukr', 'Ukraine',
  [['Legal status', 'Legal, including sale and online purchase, but not from vending machines'],
   ['Product rules', 'Health warnings, notification of new products, authorised flavours only, nicotine up to 20 mg/ml'],
   ['Age and public use', '18 to buy; use restricted in public places']],
  'the State Customs Service traveller allowance for e-liquid. Its site says liquids for e-cigarettes are excise goods, but no traveller figure was read.',
  'Can I bring a vape to Ukraine?', 'A secondary profile (GSTHR) says e-cigarettes are legal in Ukraine with a 20 mg/ml nicotine cap and age 18. It gives no traveller allowance, so check the Ukrainian customs service.',
  'customs.gov.ua traveller pages found by search: tobacco limit article only, no e-liquid figure read')

g('ET', 'ethiopia', 'eth', 'Ethiopia',
  [['Status', 'Banned by law'],
   ['Regulated as', 'Not treated as a consumer, medicinal or tobacco product'],
   ['Prohibited activities', 'Manufacture, wholesale, distribution, sale and import for trade'],
   ['Advertising', 'Totally banned'],
   ['Online sellers', 'Claims of online sales could not be confirmed']],
  'any Ethiopian Customs Commission rule for travellers and the law text.',
  'Can I bring a vape to Ethiopia?', 'A secondary profile (GSTHR) says vaping is banned by law in Ethiopia, including import for trade. It does not say how a personal device is treated, so check with Ethiopian customs before you pack one.',
  'ecc.gov.et: only a tax calculator page found by search, no traveller rule')

g('NP', 'nepal', 'npl', 'Nepal',
  [['Legal status', 'Allowed by law, including sales'],
   ['Advertising', 'Banned'],
   ['Use in public', 'Restricted in public indoor spaces']],
  'the Nepal customs traveller rule for e-cigarettes.',
  'Is vaping legal in Nepal?', 'A secondary profile (GSTHR) says e-cigarettes and sales are allowed in Nepal, advertising is banned and indoor public use is restricted. It gives no traveller allowance, so check Nepal customs.',
  'Nepal Department of Customs traveller page: not found by search, not read')

g('SC', 'seychelles', 'syc', 'Seychelles',
  [['Status', 'Banned and regulated as tobacco products'],
   ['Prohibited', 'Import, sale and trade of devices and nicotine'],
   ['Personal use', 'Online sources suggest bringing vapes for personal use is not allowed (unverified)'],
   ['Advice', 'Check with the authorities before bringing anything']],
  'any Seychelles Revenue Commission rule for travellers.',
  'Can I bring a vape to Seychelles?', 'A secondary profile (GSTHR) says e-cigarettes are banned in Seychelles, including import, and that personal-use import is reportedly not allowed (unverified). Do not pack a vape without checking with the authorities.',
  'Seychelles Revenue Commission traveller page: not found by search, not read')

g('KH', 'cambodia', 'khm', 'Cambodia',
  [['Status', 'Banned by law'],
   ['Covered', 'Sale, import and advertising'],
   ['Use', 'Reported prevalence of vaping at 0% in 2021']],
  'the Cambodian customs rule for travellers and the text of the ban.',
  'Can I bring a vape to Cambodia?', 'A secondary profile (GSTHR) says e-cigarettes are banned in Cambodia, including sale, import and advertising. Do not pack one without checking with Cambodian customs.',
  'Cambodia General Department of Customs and Excise traveller page: not found by search, not read')

g('RU', 'russia', 'rus', 'Russia',
  [['Legal status', 'Permitted with regulation'],
   ['Product rules', 'Health warnings required; flavour limits; nicotine set at 20 mg/ml'],
   ['Online and machines', 'Buying online or from vending machines not allowed'],
   ['Advertising', 'Completely banned'],
   ['Use in public', 'No legal ban on public use']],
  'the Russian customs (FCS) rule on how many devices or how much liquid a traveller may carry.',
  'Can I bring a vape to Russia?', 'A secondary profile (GSTHR) says e-cigarettes are permitted in Russia with a 20 mg/ml nicotine cap and a full advertising ban. It gives no traveller allowance, so check Russian customs.',
  'customs.gov.ru traveller page: not found by search, not read')

g('JO', 'jordan', 'jor', 'Jordan',
  [['Legal status', 'Legal and regulated'],
   ['Trade', 'Import, sale and online purchase of devices and nicotine are permitted'],
   ['Prescription', 'Buying without a prescription is not allowed'],
   ['Advertising and public use', 'Advertising banned; vaping prohibited in public indoor places']],
  'the Jordan Customs traveller allowance (customs.gov.jo FAQs found by search list diplomat allowances only).',
  'Can I bring a vape to Jordan?', 'A secondary profile (GSTHR) says import and sale of e-cigarettes are permitted in Jordan but buying without a prescription is not allowed. It gives no traveller allowance, so check Jordan Customs.',
  'customs.gov.jo FAQ page read via search summary only: diplomat allowances, no passenger vape rule')

g('FJ', 'fiji', 'fji', 'Fiji',
  [['Legal status', 'Allowed, including online purchase'],
   ['Retail', 'Sale needs a licence'],
   ['Product rules', 'Health warnings required; no limits on flavours or nicotine'],
   ['Age and public use', '18 to buy; vaping prohibited in public places']],
  'the Fiji Revenue and Customs traveller allowance.',
  'Is vaping legal in Fiji?', 'A secondary profile (GSTHR) says vaping is allowed in Fiji, with licensed retail, health warnings and a ban on use in public places. It gives no traveller allowance, so check Fiji customs.',
  'frcs.org.fj traveller page: not found by search, not read')

g('BG', 'bulgaria', 'bgr', 'Bulgaria',
  [['Legal status', 'Allowed, including importation, sale, use and possession'],
   ['Product rules', 'Child-resistant and tamper-proof containers, health warnings, nicotine up to 20 mg/ml, tank up to 10 ml'],
   ['Age and public use', '18 to buy; vaping prohibited in public places']],
  'the Bulgarian customs traveller allowance for e-liquid. The customs.bg pages could not be opened.',
  'Can I bring a vape to Bulgaria?', 'A secondary profile (GSTHR) says e-cigarettes, including their import, are allowed in Bulgaria with a 20 mg/ml nicotine cap and a 10 ml tank limit. It gives no traveller allowance, so check Bulgarian customs.',
  'customs.bg traveller pages and 2026-01-13 Sofia airport seizure news: connection timeout 2026-11-22')

add('RO', 'romania', [sec('⚖️ What the Romanian e-cigarette law says, per Tobacco Control Laws',
    'Unofficial source (reliable): Tobacco Control Laws (Campaign for Tobacco-Free Kids legal database), e-cigarette page for Romania, last updated 11 May 2024 and read on 22 November 2026. It summarises Law 64 of 2024 and Law 201 of 2016. It is not a customs page.',
    ['Point', 'What the database reports'],
    [['Cross-border online sales', 'Distance sales of e-cigarettes to consumers in Romania are prohibited'],
     ['Use in public', 'Banned wherever smoking is banned; exceptions only for detention spaces and designated rooms in international airport transit areas'],
     ['Advertising', 'Restricted; many media banned and sponsorship banned'],
     ['Traveller allowance', 'Not stated']],
    ['<strong>Not read:</strong> the customs.ro traveller rule (HTTP 403 Cloudflare) and the law text. Ask Romanian customs before bringing more than a device and a few pods.'])],
    [['Can I buy vape liquid online for delivery to Romania?', 'Tobacco Control Laws reports that cross-border distance sales of e-cigarettes to consumers in Romania are prohibited. It gives no traveller baggage allowance.']],
    [['https://tobaccocontrollaws.org/legislation/romania/e-cigarettes', 'Unofficial source: Tobacco Control Laws - Romania e-cigarettes']],
    {'official': ['customs.ro non-EU arrivals page: HTTP 403 Cloudflare 2026-11-21, not bypassed'], 'reliable': ['read 2026-11-22: Tobacco Control Laws Romania e-cigarettes page (updated 2024-05-11): distance sales to Romanian consumers prohibited, public-use ban, advertising limits; ' + WHO], 'other': ['goodsacrossborders and aggregators seen in search, conflicting, not used'], 'date': D})

add('PH', 'philippines', [sec('⚖️ What Republic Act 11900 says about importers and age',
    'Unofficial source (reliable): the text of Republic Act No. 11900, the Vaporized Nicotine and Non-Nicotine Products Regulation Act (22 July 2022 law), as published by the Lawphil legal database and read on 22 November 2026. It regulates importation and trade. It does not set a traveller allowance, and the Bureau of Customs site could not be read (HTTP 403).',
    ['Point', 'What the Act says'],
    [['Scope', 'Regulates importation, manufacture, sale, packaging, distribution, use and communication of vapor products and novel tobacco products'],
     ['Minimum age', '18 years to buy, sell and use'],
     ['Product registration (Section 19)', 'Manufacturers and importers must register vapor devices, refills and heated tobacco products with the DTI'],
     ['Online sale (Section 8)', 'Allowed for sellers registered with the DTI or SEC, with age checks'],
     ['Traveller allowance', 'Not stated']],
    ['<strong>Not read:</strong> any Bureau of Customs rule for passengers or any later amendment. The Act is about trade; a traveller with a few personal pods should confirm with customs.'])],
    [['Is vaping legal in the Philippines?', 'Yes. Republic Act 11900 regulates rather than bans vapor products: age 18, DTI registration for importers and manufacturers, and registered online sellers. It does not set a traveller allowance, so check with the Bureau of Customs.']],
    [['https://lawphil.net/statutes/repacts/ra2022/ra_11900_2022.html', 'Unofficial source: Lawphil - Republic Act No. 11900 (Vaporized Nicotine and Non-Nicotine Products Regulation Act)']],
    {'official': ['customs.gov.ph: HTTP 403 2026-11-21 and again web.senate.gov.ph RA 11900 PDF 403 2026-11-22, not bypassed'], 'reliable': ['read 2026-11-22: Lawphil text of RA 11900 (sections 1-8, 19, 23, 27); ' + WHO], 'other': ['travel-guide sites with conflicting allowances (200 ml e-juice) not used'], 'date': D})
wrx(); wrl()
