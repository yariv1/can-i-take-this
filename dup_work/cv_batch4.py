import json
ROOT = 'C:/Users/yariv/Utility Website/can-i-take-this/'
def rd(f): return json.loads(open(ROOT + f, encoding='utf8').read())
X = rd('vape_extra.json')
L = rd('ladder_log.json')
def wrx():
    open(ROOT + 'vape_extra.json', 'w', encoding='utf8', newline='').write(json.dumps(X, indent=1, ensure_ascii=False))
def wrl():
    open(ROOT + 'ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(L, indent=1, ensure_ascii=False).replace('\n', '\r\n'))
def sec(h, p, head, rows, lst=None):
    s = {'h': h, 'p': p, 'table': {'head': head, 'rows': rows}}
    if lst: s['list'] = lst
    return s
def add(code, slug, sections, faq, src, log):
    e = X.get(code)
    if e:
        e['sections'] = sections + [s for s in e['sections'] if s['h'] not in [t['h'] for t in sections]]
        e['faq'] = faq + e['faq']
        e['src'] = src + e.get('src', [])
        e['keepSchema'] = True
    else:
        X[code] = {'sections': sections, 'faq': faq, 'src': src, 'keepSchema': True}
    L['country/' + slug + '/vaping'] = log

add('SK', 'slovakia', [sec('🛃 What the Slovak Financial Administration says about e-cigarette refills',
    'From the Financial Administration press release "Import of smokeless tobacco products from third countries with exemption from import payments" (19 February 2025, translated from Slovak, read 21 November 2026). The rules apply to goods brought in from outside the EU for personal use and have applied since 1 February 2025.',
    ['Item', 'What the Financial Administration says'],
    [['E-cigarette refills (called products related to tobacco products)', 'Same limits as smokeless tobacco products: 2 consumer packages when not travelling by air, 5 times that by air'],
     ['Combining products', 'Any combination is allowed while the shares of the allowed amounts add up to no more than 100%'],
     ['Cigarettes', '40 by road, rail or sea, 200 by air'],
     ['Age', 'Nobody under 17 may bring in tobacco products, smokeless tobacco products or related products'],
     ['Which imports count', 'Occasional imports for the traveller or household, or gifts; the release gives no millilitre figure for a refill']],
    ['<strong>Penalties:</strong> illegal import from third countries is a customs offence or a crime and can lead to a fine, seizure and confiscation of the goods.',
     '<strong>Not read:</strong> a millilitre figure for refills, and the allowance for e-liquid bought in another EU state.'])],
    [['How much e-cigarette liquid can I bring into Slovakia from outside the EU?', 'The Financial Administration treats e-cigarette refills like smokeless tobacco products: 2 consumer packages when not travelling by air and 5 times that by air, as a share of one combined allowance. It gives no millilitre figure.'],
     ['Is there an age limit for bringing vapes into Slovakia?', 'Yes. The Financial Administration says nobody under 17 may bring in tobacco products, smokeless tobacco products or related products such as refills.']],
    [['https://www.financnasprava.sk/sk/pre-media/novinky/archiv-noviniek/detail-novinky/_dovoz-btv-ts/bc', 'Slovak Financial Administration - Import of smokeless tobacco products from third countries (Slovak)']],
    {'official': ['read 2026-11-21: Financial Administration press release 2025-02-19 (browser pane): ITV/e-cigarette refills 2 consumer packages, 5x by air, age 17'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['excise page financnasprava.sk/en/.../excise-duties read 2026-11-21: no e-cigarette refill text'], 'date': '2026-11-21'})

add('CY', 'cyprus', [sec('🛃 What Cyprus Customs says about e-cigarette liquid',
    'From the Department of Customs and Excise pages "Channel system and concessions" (last updated 5 February 2020) and "Excise Duties - General Information", both read 21 November 2026. The allowance page lists tobacco products but not vapes.',
    ['Item', 'What Cyprus Customs says'],
    [['Allowance list for travellers entering Cyprus', 'Cigarettes 200, cigarillos 100, cigars 50 or smoking tobacco 250 g; e-cigarette liquid is not named'],
     ['Other goods for personal use or gifts', 'Value up to 430 euros per person, 175 euros for travellers under 15'],
     ['Under 17', 'No relief on tobacco products and alcohol'],
     ['Excise on e-cigarette liquid', 'Liquid used in electronic cigarettes, whether or not it contains nicotine: 0.12 euro per ml'],
     ['More than the allowance, or restricted goods', 'Use the red channel and declare them']],
    ['<strong>Not read:</strong> any Cyprus Customs figure in millilitres for travellers, and whether liquid counts as "other goods" under the 430 euro cap.'])],
    [['Is there a limit in millilitres for vape liquid in Cyprus?', 'The Department of Customs and Excise page for travellers names no limit for e-cigarette liquid. It lists tobacco allowances and a 430 euro value cap for other goods.'],
     ['Is nicotine-free vape liquid taxed in Cyprus?', 'The Customs excise page says liquid used in electronic cigarettes is subject to excise duty of 0.12 euro per ml whether or not it contains nicotine.']],
    [['https://www.mof.gov.cy/mof/customs/customs.nsf/All/D8E0334067181B47C22572BF002DF37C?OpenDocument=', 'Cyprus Customs and Excise - Travellers, channel system and concessions'],
     ['https://www.mof.gov.cy/mof/customs/customs.nsf/All/A2C3593B5465A799422577D6002FEAC4', 'Cyprus Customs and Excise - Excise duties, general information']],
    {'official': ['read 2026-11-21: Cyprus customs traveller allowances page (updated 2020-02-05) and excise general information page: e-liquid EUR 0.12/ml, no traveller ml figure'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['none needed: national customs pages read'], 'date': '2026-11-21'})

add('GR', 'greece', [sec('🛃 What the Greek Customs authority says about e-cigarette refill fluids',
    'From the Independent Authority for Public Revenue (AADE) page "Other National Taxes" (English, no date shown, read 21 November 2026). It is an information page on national excise duty, not a traveller allowance table.',
    ['Item', 'What AADE says'],
    [['E-cigarette replenishment fluids', 'Subject to national excise duty, outside the harmonised EU excise rules'],
     ['Electrically heated tobacco products', 'Subject to the same national excise page'],
     ['Status of the page', 'Informative; the texts are not binding for the Administration and do not replace the legal acts in force']],
    ['<strong>Not read:</strong> any AADE figure in millilitres for travellers bringing e-liquid in luggage. Ask Greek Customs before bringing more than a small supply.'])],
    [['Is e-cigarette liquid taxed in Greece?', 'AADE lists electronic cigarette replenishment fluids among the products under national excise duty. It gives no traveller allowance in millilitres on that page.']],
    [['https://www.aade.gr/en/customs/other-national-taxes', 'Greek Independent Authority for Public Revenue (AADE) - Other national taxes']],
    {'official': ['read 2026-11-21: AADE other national taxes page: excise on e-cigarette replenishment fluids, no traveller figure'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['AADE customs booklet 2021 (search result only, not read in full): tobacco only'], 'date': '2026-11-21'})

for slug, t in {'bulgaria': '2026-11-21: customs.bg traveller summary page: browser navigation refused or failed, not bypassed; WebSearch earlier gave no vape figure',
 'bahrain': '2026-11-19: customs.gov.bh duty-free page: 403 on WebFetch and curl; archive copy not fetched',
 'maldives': '2026-11-19: customs.gov.mv restricted items page: 403 on WebFetch and curl; archive copy not fetched'}.items():
    k = 'country/' + slug + '/vaping'
    if k in L: L[k].setdefault('other', []).append(t)
wrx(); wrl()
