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

add('IL', 'israel', [sec('🛃 What the Israel Tax Authority says about tobacco and other goods',
    'From the Israel Tax Authority "Customs Guide for Tourists and Foreign Residents" (updated 30 July 2026, read 21 November 2026), the chapter on the green channel. The guide does not name e-cigarettes or vape liquid.',
    ['Item', 'What the guide says'],
    [['Tobacco in all its forms', 'Up to 250 g (cigarettes: up to 200, one carton) for each entrant'],
     ['Other items for personal use or as a gift', 'Value up to 200 US dollars for each entrant aged 2 and over'],
     ['Alcohol', '1 litre of spirits and 2 litres of wine for each entrant aged at least 18'],
     ['Alcoholic cosmetics (perfume)', 'Up to 250 ml for each entrant']],
    ['<strong>Not read:</strong> any line on vapes, e-liquid or nicotine, and the guide\'s other chapters (the red channel and items needing approval). Ask the Tax Authority before bringing more than a device and a small supply.'])],
    [['Does the Israel Tax Authority guide mention vapes?', 'The tourist customs guide chapter on the green channel lists tobacco in all its forms up to 250 g and 200 US dollars of other goods, and does not name e-cigarettes or vape liquid.']],
    [['https://www.gov.il/en/pages/guide-tourist-customs?chapterIndex=3', 'Israel Tax Authority - Customs Guide for Tourists and Foreign Residents']],
    {'official': ['read 2026-11-21: Israel Tax Authority tourist customs guide, green channel chapter (updated 2026-07-30): tobacco 250 g, USD 200 other goods, no vape text'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['other chapters of the guide are a script-driven page that returned no text; not read'], 'date': '2026-11-21'})

add('DK', 'denmark', [sec('🛃 What the Danish tax authority says about nicotine liquids',
    'From the Danish Tax Agency legal guidance, section E.A.5.4.5 "Afgiftens størrelse og beregning" (version 3.17, valid from 31 July 2026, translated from Danish, read 21 November 2026). It is the excise rate for nicotine liquids, not a traveller allowance.',
    ['Item', 'What the guidance says'],
    [['Nicotine liquid with 12 mg nicotine per ml or less', '1.50 kroner per ml'],
     ['Nicotine liquid with more than 12 mg nicotine per ml', '2.50 kroner per ml'],
     ['Container with no label, or a label that does not show the nicotine content', 'Taxed at the higher 2.50 kroner rate if the content cannot be established'],
     ['Nicotine products (pouches)', '10 ore per mg of nicotine']],
    ['<strong>Not read:</strong> a Danish Customs figure for how much liquid a traveller may bring in without tax. Ask the Danish Customs Agency before bringing more than a small supply.'])],
    [['How is vape liquid with nicotine taxed in Denmark?', 'The Danish Tax Agency guidance lists 1.50 kroner per ml for nicotine liquid with 12 mg per ml or less and 2.50 kroner per ml above that. Liquid with no readable nicotine label is taxed at the higher rate.']],
    [['https://info.skat.dk/data.aspx?oid=2350652', 'Danish Tax Agency - legal guidance E.A.5.4.5, size and calculation of the tax (Danish)']],
    {'official': ['read 2026-11-21: Danish Tax Agency legal guidance E.A.5.4.5 version 3.17 (valid 2026-07-31): nicotine liquid DKK 1.50 per ml up to 12 mg/ml, DKK 2.50 per ml above'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['F.A.29 travel goods page read 2026-11-21: no nicotine liquid rule for travellers'], 'date': '2026-11-21'})

add('MV', 'maldives', [sec('🚫 What Maldives news says about the vape ban and fines',
    'Less reliable source (local press): Atoll Times, "Customs seizes 800 vape cartridges at Velana International Airport" (7 August 2026), quoting Maldives Customs and the 2024 Tobacco Control Act amendments. The Maldives Customs pages returned 403, so no official page was read.',
    ['Item', 'What Atoll Times reports'],
    [['Import, sale and use of vaping products', 'Prohibited in the Maldives'],
     ['Fine for importing vaping devices or products', '50,000 rufiyaa, plus 10,000 rufiyaa for each device imported'],
     ['Fine for using a vaping product', '5,000 rufiyaa'],
     ['Latest seizure', '800 vape cartridges intercepted at Velana International Airport on 3 August 2026'],
     ['Enforcement', 'Customs and other agencies keep seizing vaping products and fining importers since the ban began in late 2024']],
    ['<strong>Not read:</strong> any Maldives Customs notice for tourists. Treat a vape as something that will be seized and fined, and confirm with Maldives Customs before you travel.'])],
    [['Can I bring a vape to the Maldives?', 'No. Atoll Times, quoting Maldives Customs, reports that importing, selling and using vaping products is prohibited, with a 50,000 rufiyaa fine for importing plus 10,000 rufiyaa per device.']],
    [['https://atolltimes.mv/post/news/16751', 'Less reliable source (press): Atoll Times - Customs seizes 800 vape cartridges at Velana International Airport']],
    {'official': ['customs.gov.mv restricted items page: 403 on WebFetch and curl 2026-11-19; archive copy not fetched'], 'reliable': ['Maldives High Commission UK customs page: browser navigation refused 2026-11-21'], 'other': ['read 2026-11-21: Atoll Times 2026-08-07 (lower reliability, press): import/sale/use prohibited, fines MVR 50,000 + 10,000 per device'], 'date': '2026-11-21'})

for slug, t in {'finland': '2026-11-21: tulli.fi e-cigarette traveller page: HTTP 403 with a Cloudflare challenge page in the browser pane, not bypassed (earlier WebFetch 403)',
 'bulgaria': '2026-11-21: customs.bg Important notice for travelers: browser navigation refused or failed, not bypassed'}.items():
    k = 'country/' + slug + '/vaping'
    if k in L: L[k].setdefault('other', []).append(t)
wrx(); wrl()
