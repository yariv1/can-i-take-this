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

# Estonia
add('EE', 'estonia', [sec('🛃 What the Estonian Tax and Customs Board says about tobacco liquid',
    'From the Tax and Customs Board (EMTA) page "From a third country to Estonia" (last updated 27 October 2026, read 19 November 2026) and its news item on the e-liquid excise, which gives the EU figure. The page says "tobacco liquid", not "e-cigarette"; it does not name e-cigarettes.',
    ['Item', 'What EMTA says'],
    [['Tobacco liquid, arriving from a country outside the EU', '20 ml (from 1 January 2023), for travellers aged 18 or over'],
     ['Tobacco liquid, arriving from another EU member state', '50 ml, per the EMTA news item on the e-liquid excise'],
     ['Other alternative tobacco product', '20 g'],
     ['Smoking tobacco (can include up to 20 g heated tobacco)', '50 g by road or sea, 250 g by air (up to 100 g heated)'],
     ['How the quantities combine', 'Each quantity counts as 100% of the allowance and quantities can be combined up to 100% in total'],
     ['Buying online or by post', 'Not allowed: tobacco products and e-liquids cannot be delivered to Estonia by distance selling']],
    ['<strong>Flavours:</strong> EMTA adds that liquids for e-cigarettes must continue to contain no flavourings apart from tobacco and menthol, so a flavoured liquid bought abroad may not be sold here.',
     '<strong>Not read:</strong> whether a device with a pre-filled pod counts as tobacco liquid; EMTA does not say.'])],
    [['How much vape liquid can I bring into Estonia?', 'EMTA lists 20 ml of tobacco liquid for travellers aged 18 or over arriving from outside the EU. Its news item gives 50 ml for travellers arriving from another EU member state.'],
     ['Can I order vape liquid online to Estonia?', 'No. EMTA says tobacco products and e-liquids cannot be delivered to Estonia by distance selling.']],
    [['https://www.emta.ee/en/private-client/consignments-travel-moving/travel/third-country-estonia', 'Estonian Tax and Customs Board - From a third country to Estonia'],
     ['https://www.emta.ee/en/news/excise-duty-exemption-e-liquids-ends', 'Estonian Tax and Customs Board - Excise duty exemption for e-liquids ends']],
    {'official': ['read 2026-11-19: EMTA travel page (updated 2026-10-27): 20 ml tobacco liquid, non-EU; EMTA news item: 50 ml from EU, distance-selling ban'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['none needed: national customs page read'], 'date': '2026-11-19'})

# Latvia
add('LV', 'latvia', [sec('🛃 What the Latvian State Revenue Service says about e-cigarette liquid',
    'From the State Revenue Service (VID) page "Travelling within the European Union" (published 31 October 2022, read 19 November 2026). It covers duty-paid goods bought in another EU state; the page does not give a figure for travellers from outside the EU.',
    ['Item', 'What VID says'],
    [['Liquid for electronic cigarettes (EU, duty paid)', '300 ml'],
     ['Tobacco substitute products', '300 g'],
     ['Under 18', 'No tobacco or alcohol allowance'],
     ['Above the allowance', 'Must be declared at the border and excise duty paid to the State Revenue Service on the excess']],
    ['<strong>Not read:</strong> a VID figure for e-liquid carried in from outside the EU. Ask VID before bringing more than a small supply from a non-EU country.',
     '<strong>Online:</strong> VID states that buying tobacco products and e-cigarettes with their cartridges from online stores, and receiving them by mail, is prohibited under the Law on the Handling of Tobacco Products.'])],
    [['How much e-cigarette liquid can I bring into Latvia from another EU country?', 'VID lists 300 ml of liquid for electronic cigarettes, plus 300 g of tobacco substitute products, for goods bought duty paid in another EU member state. More than that must be declared.'],
     ['Can I order e-cigarettes online to Latvia?', 'VID says buying tobacco products and e-cigarettes in online stores and receiving them by mail is prohibited.']],
    [['https://www.vid.gov.lv/en/travelling-within-european-union', 'Latvian State Revenue Service - Travelling within the European Union']],
    {'official': ['read 2026-11-19: VID Travelling within the EU (published 2022-10-31): 300 ml e-cigarette liquid, 300 g tobacco substitutes, EU duty paid'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['none needed: national tax authority page read; no non-EU figure on the page'], 'date': '2026-11-19'})

# Hungary
add('HU', 'hungary', [sec('🛃 What the Hungarian Tax and Customs Authority says about "fluid charge"',
    'From the NAV English travel FAQ "Tobacco products" (no date shown on the page, read 19 November 2026). NAV calls e-liquid "fluid charge". The figures are for goods brought in from outside the EU and depend on how you travel.',
    ['Item', 'What NAV says'],
    [['Fluid charge, arriving by air', '75 ml, duty and tax free (with 200 cigarettes, 100 cigarillos, 50 cigars or 250 g of tobacco)'],
     ['Fluid charge, arriving by road or rail', '15 ml (with 40 cigarettes, 20 cigarillos, 10 cigars or 50 g of tobacco)'],
     ['Age', 'Only travellers aged 17 or over may bring in tobacco products'],
     ['If you bring more', 'NAV imposes a customs administrative fine and seizes or confiscates the excess tobacco products']],
    ['<strong>Not read:</strong> a NAV figure for fluid charge carried from another EU country, and a statement on whether nicotine-free liquid counts. The page lists the allowances as alternatives that can be combined proportionally.'])],
    [['How much vape liquid can I bring into Hungary?', 'NAV lists 75 ml of fluid charge for travellers arriving by air from outside the EU and 15 ml by road or rail, free of duty and tax, for travellers aged 17 or over.'],
     ['What happens if I bring more than the limit into Hungary?', 'NAV says it imposes a customs administrative fine and seizes or confiscates the excess tobacco products.']],
    [['https://nav.gov.hu/en/intormation_on_customs_matters/travel-guides---faq/english/tobacco-products', 'Hungarian Tax and Customs Authority (NAV) - Tobacco products travel FAQ']],
    {'official': ['read 2026-11-19: NAV English travel FAQ tobacco products (undated, footer 2026): fluid charge 75 ml air, 15 ml road/rail'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['none needed: national customs page read'], 'date': '2026-11-19'})

# Slovenia
add('SI', 'slovenia', [sec('🛃 What the Slovenian Financial Administration says about e-cigarette filler',
    'From the Financial Administration (FURS) page "Import of alcoholic beverages and tobacco products" (refreshed 23 September 2020, read 19 November 2026). The page is old, so check it before you travel.',
    ['Item', 'What FURS says'],
    [['Filler for electronic cigarettes, from another EU member state, for personal use', '100 ml without excise duty'],
     ['Travellers from outside the EU', 'The page gives tobacco quantities only (cigarettes, cigarillos, cigars, smoking tobacco) and no e-cigarette filler figure'],
     ['Travellers under 17 from outside the EU', 'No relief on tobacco and alcohol']],
    ['<strong>Not read:</strong> a current FURS figure for e-cigarette filler from outside the EU. Ask FURS before bringing more than a small supply.'])],
    [['How much e-cigarette liquid can I bring into Slovenia from another EU country?', 'FURS lists 100 ml of filler for electronic cigarettes as personal-use goods without excise duty when brought from another EU member state. The page was refreshed in September 2020.']],
    [['https://www.fu.gov.si/en/life_events_individuals/import_of_alcoholic_beverages_and_tobacco_products', 'Slovenian Financial Administration (FURS) - Import of alcoholic beverages and tobacco products']],
    {'official': ['read 2026-11-19: FURS import of alcohol and tobacco page (refreshed 2020-09-23): 100 ml e-cigarette filler from EU, no non-EU figure'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['none needed: national tax authority page read'], 'date': '2026-11-19'})

# Croatia
add('HR', 'croatia', [sec('🛃 What the Croatian Customs Administration says about e-liquid in luggage',
    'From the Customs Administration page "Relief from duties and restrictions on the import of goods in the passenger personal luggage" (English version, no date shown, read 19 November 2026). The figures are exemptions from excise duty for goods arriving from outside the EU.',
    ['Item', 'What the Customs Administration says'],
    [['E-liquid', '10 ml exempt'],
     ['Heated tobacco product', '50 g exempt'],
     ['Cigarettes', '200 by air, 40 by other transport'],
     ['Age', 'The excise exemption may not apply to travellers under 17'],
     ['More than the limit', 'Not allowed in; a declared excess must be sent back abroad. An undeclared excess means the traveller is detained until the infringement is processed']],
    ['<strong>Border-area residents:</strong> people living in the border area have a separate daily allowance and the usual value and volume limits do not apply to them.',
     '<strong>Not read:</strong> the Croatian-language version of the page.'])],
    [['How much vape liquid can I bring into Croatia?', 'The Customs Administration lists 10 ml of e-liquid and 50 g of heated tobacco product as exempt in a passenger\'s luggage arriving from outside the EU. A declared excess must be sent back abroad.'],
     ['Can a child bring e-liquid into Croatia?', 'The Customs Administration says the excise exemption may not apply to travellers under 17.']],
    [['https://carina.gov.hr/featured/information-for-passengers-natural-persons/relief-from-duties-and-restrictions-on-the-import-of-goods-in-the-passenger-s-personal-luggage/6715', 'Croatian Customs Administration - Relief from duties and restrictions, passenger luggage']],
    {'official': ['read 2026-11-19: Croatian Customs Administration passenger luggage page (undated): e-liquid 10 ml, heated tobacco 50 g'], 'reliable': ['read 2026-11-19: WHO country profile PDF, tobacco use prevalence table'], 'other': [], 'date': '2026-11-19'})

# Luxembourg
add('LU', 'luxembourg', [sec('🛃 What Luxembourg Customs says about e-liquids in luggage',
    'From the Customs page for travellers arriving from outside the EU (French, last updated 30 July 2026) and the Customs FAQ on e-liquids (French, last updated 8 May 2026), both read 19 November 2026 and translated.',
    ['Item', 'What Luxembourg Customs says'],
    [['Where e-liquids sit in the traveller allowance', 'In the "other goods" group, with heated tobacco and nicotine pouches: no millilitre figure is given'],
     ['Value cap for other goods from outside the EU', '430 euros by air or sea, 300 euros for other travellers; 175 euros for travellers under 15'],
     ['Under 17', 'No duty-free tobacco or alcohol'],
     ['Excise on e-liquid', '0.12 euro per ml'],
     ['Pack sizes allowed on the market', 'Refill bottles up to 10 ml, disposable devices and cartridges up to 2 ml, nicotine up to 20 mg/ml'],
     ['Buying at a distance', 'Remote buying and selling of e-liquids is prohibited']],
    ['<strong>Not read:</strong> any customs figure in millilitres for travellers from outside the EU or from another EU state.'])],
    [['Is there a limit in millilitres for vape liquid in Luxembourg?', 'Luxembourg Customs does not give one. E-liquids are listed with heated tobacco and nicotine pouches under other goods, within a value cap of 430 euros by air or sea and 300 euros for other travellers.'],
     ['Can I order e-liquid online to Luxembourg?', 'No. Luxembourg Customs says remote buying and selling of e-liquids is prohibited.']],
    [['https://douanes.public.lu/fr/voyages-demenagement/franchises/hors-ce.html', 'Luxembourg Customs - Arriving from outside the EU (French)'],
     ['https://douanes.public.lu/fr/support/faq/e-liquides.html', 'Luxembourg Customs - E-liquids FAQ (French)']],
    {'official': ['read 2026-11-19: douanes.public.lu non-EU arrivals page (updated 2026-07-30) and e-liquids FAQ (updated 2026-05-08)'], 'reliable': ['read 2026-11-19: WHO country profile PDF, tobacco use prevalence table'], 'other': [], 'date': '2026-11-19'})

wrx(); wrl()
