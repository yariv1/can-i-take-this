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

add('FI', 'finland', [sec('🛃 What the Finnish Tax Administration says about nicotine products',
    'From two pages of the Finnish Tax Administration (vero.fi, English): "Bringing alcohol and tobacco with you from trips outside Finland" (last updated 12 November 2025) and "Ordering tobacco and nicotine products from abroad" (last updated 9 February 2025), both read 21 November 2026. The Finnish Customs page on e-cigarette liquid sits behind a challenge page and could not be read.',
    ['Item', 'What the Tax Administration says'],
    [['Nicotine pouches and snus carried from outside Finland', 'From 2026: at most 1,000 g of each of the two products for personal use, carried with you'],
     ['Above 1,000 g', 'Excise duty is due on the part over the limit'],
     ['Other tobacco products carried for personal use', 'Exempt from duty if you carry them with you by the means of transport you travel with'],
     ['Ordering from a seller abroad', 'Not allowed in Finland for tobacco products, electronic cigarettes, liquids containing nicotine, snus or nicotine pouches'],
     ['If such a product is received anyway', 'The authority can impose taxes and duties']],
    ['<strong>Not read:</strong> a millilitre figure for nicotine liquid in luggage, which the Finnish Customs page covers. The Tax Administration pages name nicotine liquid only in the ordering rule.'])],
    [['Can I order vape liquid with nicotine to Finland?', 'No. The Finnish Tax Administration says that in Finland you may not order tobacco products, electronic cigarettes, liquids containing nicotine, snus or nicotine pouches from sellers in other countries.'],
     ['How much snus or nicotine pouches can I bring into Finland?', 'From 2026 the Tax Administration allows at most 1,000 g of each of snus and non-liquid smokeless nicotine products for personal use, carried with you.']],
    [['https://vero.fi/en/individuals/tax-cards-and-tax-returns/arriving_in_finland/bringing-alcohol-and-tobacco-to-finland/bringing-alcohol-and-tobacco-with-you-from-trips-outside-finland/', 'Finnish Tax Administration - Bringing alcohol and tobacco with you from trips outside Finland'],
     ['https://vero.fi/en/individuals/tax-cards-and-tax-returns/arriving_in_finland/bringing-alcohol-and-tobacco-to-finland/ordering-tobacco-and-nicotine-products-from-a-seller-abroad/', 'Finnish Tax Administration - Ordering tobacco and nicotine products from abroad']],
    {'official': ['read 2026-11-21: vero.fi (Finnish Tax Administration) traveller page (updated 2025-11-12): pouches and snus 1,000 g; ordering page (updated 2025-02-09): no ordering of e-cigarettes or nicotine liquid'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['tulli.fi e-cigarette traveller page: HTTP 403 with challenge page 2026-11-21, not bypassed; Finnish Customs 10 ml figure seen in a search summary only, not stated on this page'], 'date': '2026-11-21'})

add('LB', 'lebanon', [sec('⚖️ What a tobacco-control legal database lists for e-cigarettes in Lebanon',
    'Unofficial source: Tobacco Control Laws (Campaign for Tobacco-Free Kids), "Main Policies - E-Cigarettes, Lebanon", last updated 22 October 2026, read 21 November 2026. It summarises Law No. 174 and Ministry of Finance Resolution No. 877/2015. The Lebanese customs pages name no vape rule for travellers.',
    ['Item', 'What the database lists'],
    [['Retail sale of e-cigarettes', 'Allowed, subject to restrictions under the law'],
     ['Sale over the internet', 'Allowed'],
     ['Use in indoor public places, workplaces and public transport', 'Some restrictions'],
     ['Health warnings on packaging', 'Required'],
     ['Manufacturer or importer disclosures or notification', 'Required'],
     ['Retail licence or equivalent approval', 'Required'],
     ['Maximum nicotine concentration', 'Not required (no limit set)']],
    ['<strong>Not read:</strong> a Lebanese customs figure for e-liquid or devices in luggage. The database covers sale and use, not what a traveller may carry in.'])],
    [['Are e-cigarettes legal in Lebanon?', 'The Tobacco Control Laws database lists the retail sale of e-cigarettes as allowed in Lebanon, subject to restrictions, with health warnings, importer notification and a retail licence required. It says nothing about a traveller allowance.']],
    [['https://www.tobaccocontrollaws.org/legislation/lebanon/e-cigarettes', 'Unofficial source: Tobacco Control Laws - E-cigarettes, Lebanon (Campaign for Tobacco-Free Kids)']],
    {'official': ['Lebanese customs traveller pages: no vape text (search results and tariff pages only, 2026-11-21)'], 'reliable': ['read 2026-11-21: Tobacco Control Laws Lebanon e-cigarettes page (updated 2026-10-22): sale allowed with restrictions, Law 174, MoF Resolution 877/2015'], 'other': [], 'date': '2026-11-21'})

add('KW', 'kuwait', [sec('📰 What Gulf News reports about Kuwait\'s new nicotine rules',
    'Less reliable source (press): Gulf News, "Kuwait bans online tobacco sales and sets minimum age at 21" (last updated 16 August 2026), reporting Ministerial Resolution No. 237 of 2026 as published by Al Anbaa. The Kuwait customs and health ministry pages were not read.',
    ['Item', 'What Gulf News reports'],
    [['When the rules start', '1 January 2027'],
     ['What they cover', 'Import, manufacture, packaging, distribution, sale, display, advertising, promotion and use of tobacco and nicotine products, including electronic cigarettes and heated tobacco'],
     ['Minimum age', '21 to buy or be supplied with tobacco, nicotine or nicotine-delivery products'],
     ['Online and delivery sales', 'Banned, including websites, apps, social media and delivery services'],
     ['Use of e-cigarettes', 'Smoking restrictions are extended to electronic cigarettes and heated tobacco products']],
    ['<strong>Not read:</strong> the text of the resolution itself, and any traveller allowance for devices or liquid. Until the rules take effect, confirm with Kuwait customs before bringing a vape.'])],
    [['Is vaping restricted in Kuwait?', 'Gulf News reports that Ministerial Resolution No. 237 of 2026 starts on 1 January 2027, sets a minimum age of 21 for nicotine products, bans online sales and extends smoking restrictions to electronic cigarettes.']],
    [['https://gulfnews.com/world/gulf/kuwait/kuwait-bans-online-tobacco-sales-and-sets-minimum-age-at-21-1.500642680', 'Less reliable source (press): Gulf News - Kuwait bans online tobacco sales and sets minimum age at 21']],
    {'official': ['Kuwait General Administration of Customs and Ministry of Health pages: no readable vape rule found 2026-11-21'], 'reliable': ['Tobacco Control Laws Kuwait e-cigarettes page read 2026-11-21: no data available (last updated 2021-12-22)'], 'other': ['read 2026-11-21: Gulf News 2026-08-16 (lower reliability, press): Ministerial Resolution 237/2026, effective 2027-01-01, min age 21, online sales banned, import covered'], 'date': '2026-11-21'})

for slug, t in {'bahrain': '2026-11-21: Tobacco Control Laws Bahrain e-cigarettes page read: no data available (updated 2019-09-17). goodsacrossborders Bahrain vape page read: generic template text with a medium-confidence label and figures that disagree with the official duty-free list; not used. Official customs.gov.bh 403.'}.items():
    k = 'country/' + slug + '/vaping'
    if k in L: L[k].setdefault('other', []).append(t)
wrx(); wrl()
