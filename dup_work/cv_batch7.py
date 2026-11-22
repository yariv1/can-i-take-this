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

add('CN', 'china', [sec('🛃 What the Chinese customs guide says about e-cigarettes in luggage',
    'From the Customs clearance guide for inbound passengers on the Shanghai government English site (source: General Administration of Customs, updated 13 October 2025, read 21 November 2026). The guide lists what sends you to the red channel, so the figures below are the most you can carry without declaring.',
    ['Item', 'What the guide says'],
    [['E-cigarette devices', 'Declare if you carry more than 2'],
     ['E-cigarette cartridges (e-liquid), or cartridge-device products including disposable e-cigarettes', 'Declare if you carry more than 6, or if the total liquid is more than 12 ml'],
     ['Arriving from Hong Kong or Macao', 'All these duty-free limits are halved'],
     ['Cigarettes, cigars, tobacco', 'Declare more than 400 cigarettes, 20 cigars or 500 g of tobacco'],
     ['Alcohol', 'Declare more than 1,500 ml of drinks above 12% alcohol by volume']],
    ['<strong>Not read:</strong> the General Administration of Customs original and the other chapters of the guide, including any rule on nicotine strength. Ask Chinese customs before bringing more than a device and a few pods.'])],
    [['How many vapes can I bring into China?', 'The customs guide on the Shanghai government site says you must declare more than 2 e-cigarette devices, or more than 6 cartridges or disposable e-cigarettes, or a total of more than 12 ml of liquid. For arrivals from Hong Kong or Macao these limits are halved.']],
    [['https://english.shanghai.gov.cn/en-CustomsImmigration/20231212/9a3c7f512d464e0798be3fc76c8dd6f2.html', 'Shanghai Municipal Government - Customs clearance guide for inbound passengers (source: General Administration of Customs)']],
    {'official': ['read 2026-11-21: Shanghai government English guide, source General Administration of Customs, updated 2025-10-13: over 2 devices, over 6 cartridges or 12 ml liquid, halved from HK/Macao'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['Shantou customs guide PDF: certificate error 2026-11-21, not bypassed'], 'date': '2026-11-21'})

add('ID', 'indonesia', [sec('📰 What Indonesian tax news reports from Finance Ministry Regulation 82/2024',
    'Less reliable source (press): DDTCNews, "Olahan Tembakau dan Rokok Elektrik dari Luar Negeri Bisa Bebas Cukai" (6 November 2024, translated from Indonesian), quoting Article 36 of Finance Minister Regulation (PMK) No. 82/2024. The Directorate General of Customs and Excise pages could not be reached from here, so the figures are as reported.',
    ['Item', 'What DDTCNews reports (per adult passenger)'],
    [['Open-system liquid e-cigarette', 'Up to 30 ml excise-free'],
     ['Closed-system liquid e-cigarette', 'Up to 12 ml excise-free'],
     ['Solid e-cigarette', 'Up to 140 sticks or 40 capsules'],
     ['Cigarettes', 'Up to 200'],
     ['Heated tobacco and other processed tobacco', 'Up to 100 g'],
     ['Crew members', 'Open-system liquid 15 ml, closed-system 6 ml'],
     ['Parcels from abroad', 'Per recipient per shipment: open-system liquid 15 ml, closed-system 6 ml'],
     ['Several tobacco types together', 'Relief is given proportionally within each type\'s limit']],
    ['<strong>Not read:</strong> the regulation text, any later amendment, and a Customs page for travellers. The figures are from November 2024; confirm with Indonesian customs before you travel.'])],
    [['How much vape liquid can I bring into Indonesia?', 'DDTCNews, quoting PMK 82/2024, reports an excise-free limit per adult passenger of 30 ml for open-system liquid e-cigarettes or 12 ml for closed-system ones, plus 140 sticks or 40 capsules of solid e-cigarettes.']],
    [['https://news.ddtc.co.id/berita/nasional/1806663/olahan-tembakau-dan-rokok-elektrik-dari-luar-negeri-bisa-bebas-cukai', 'Less reliable source (press): DDTCNews - PMK 82/2024, tobacco products and e-cigarettes from abroad']],
    {'official': ['beacukai.go.id passenger goods pages: connection refused or host not found on WebFetch and curl 2026-11-19, retried 2026-11-21'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['read 2026-11-21: DDTCNews 2024-11-06 (lower reliability, tax press) quoting PMK 82/2024 Art. 36: 30 ml open, 12 ml closed, 140 sticks or 40 capsules'], 'date': '2026-11-21'})

add('MT', 'malta', [sec('🛃 What Malta Customs says about tobacco allowances',
    'From the Malta Customs page "Accompanied Excise Goods From EU or From Third Countries" (updated 18 December 2020, page last updated 22 January 2026, read 21 November 2026). The page covers tobacco and alcohol and does not name e-cigarettes or vape liquid.',
    ['Item', 'What Malta Customs says'],
    [['Tobacco from outside the EU (excise exemption, LN 72 of 2009)', '200 cigarettes, 100 cigarillos, 50 cigars or 250 g of smoking tobacco'],
     ['Tobacco bought duty paid in another EU state', 'Own use only; Malta may use guide levels as evidence, not lower than 800 cigarettes, 400 cigarillos, 200 cigars or 1 kg of smoking tobacco'],
     ['E-cigarette liquid', 'Not named on the page']],
    ['<strong>Not read:</strong> any Malta Customs figure for e-liquid or devices.'])],
    [['Is there a limit for vape liquid in Malta?', 'The Malta Customs page on accompanied excise goods lists only tobacco and alcohol limits and does not name e-cigarette liquid.']],
    [['https://mtca.gov.mt/customs/individual/accompanied-excise-goods-from-eu-or-from-third-countries', 'Malta Customs - Accompanied excise goods from the EU or from third countries']],
    {'official': ['read 2026-11-21: Malta Customs accompanied excise goods page (updated 2020-12-18, page 2026-01-22): tobacco limits only, no e-liquid'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['none needed: national customs page read'], 'date': '2026-11-21'})

for slug, t in {'romania': '2026-11-21: customs.ro non-EU arrivals page: HTTP 403 with a Cloudflare challenge page in the browser pane, not bypassed',
 'nigeria': '2026-11-21: web2.customs.gov.ng passenger concessions page: HTTP 522 connection timed out in the browser pane; search summary only mentions a tobacco allowance, no vape text',
 'philippines': '2026-11-21: customs.gov.ph 403 (earlier); only travel-guide sites with conflicting figures (200 ml e-juice, FDA approval for nicotine) found, not used',
 'italy': '2026-11-21: ADM traveller card PDF and ADM Modena press release seen in search only; summaries list tobacco limits, no e-liquid; not read in full'}.items():
    k = 'country/' + slug + '/vaping'
    if k in L: L[k].setdefault('other', []).append(t)
wrx(); wrl()
