import json
ROOT = 'C:/Users/yariv/Utility Website/can-i-take-this/'
def rd(f): return json.loads(open(ROOT + f, encoding='utf8').read())
X = rd('vape_extra.json')
L = rd('ladder_log.json')
def wrx():
    open(ROOT + 'vape_extra.json', 'w', encoding='utf8', newline='').write(json.dumps(X, indent=1, ensure_ascii=False))
def wrl():
    open(ROOT + 'ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(L, indent=1, ensure_ascii=False).replace('\n', '\r\n'))
def add(code, slug, sections, faq, src, log):
    X[code] = {'sections': sections, 'faq': faq, 'src': src, 'keepSchema': True}
    L['country/' + slug + '/vaping'] = log

def sec(h, p, head, rows, lst=None):
    s = {'h': h, 'p': p, 'table': {'head': head, 'rows': rows}}
    if lst: s['list'] = lst
    return s


# ---------- Portugal ----------
add('PT', 'portugal', [sec('🛃 What the Portuguese Tax Authority says about e-cigarette liquid',
    'From the Autoridade Tributaria "Travellers guide" (PDF, last modified 30 June 2026, read 19 November 2026, translated from Portuguese). It is the tax and customs allowance table, not a rule on using vapes.',
    ['Item', 'What the guide says'],
    [['Liquid for e-cigarettes in refill containers, reusable or not', '30 ml exempt from excise duty (IEC)'],
     ['Who the excise exemption covers', 'Travellers coming from third countries, third territories and EU member states'],
     ['Nicotine pouches', '20 g'],
     ['Heated tobacco', '250 g'],
     ['Other goods from third countries: value', '430 euros by air or sea, 300 euros by road or rail and private boats or aircraft'],
     ['Travellers under 17 from third countries', 'No exemption for tobacco products and alcohol'],
     ['Which channel', 'Green channel only if nothing is to be declared; use the red channel if in doubt']],
    ['<strong>Not read:</strong> whether the 30 ml figure now also covers nicotine-free liquid, which Portuguese tax law has taxed since 1 January 2024. Ask the authority before bringing more than a small supply.'])],
    [['How much vape liquid can I bring into Portugal?', 'The Autoridade Tributaria travellers guide lists 30 ml of e-cigarette liquid in refill containers as exempt from excise duty, for travellers from third countries and from EU member states.'],
     ['Is there an age limit for the Portuguese allowances?', 'Travellers under 17 coming from third countries get no exemption for tobacco products and alcohol, according to the guide.']],
    [['https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/Guia_viajantes.pdf', 'Autoridade Tributaria e Aduaneira - Travellers guide (PDF)']],
    {'official': ['read 2026-11-19: Autoridade Tributaria travellers guide PDF (modified 2026-06-30): e-liquid 30 ml excise exemption'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['none needed: national tax authority page read'], 'date': '2026-11-19'})

# ---------- Czechia ----------
add('CZ', 'czechia', [sec('🛃 What Czech Customs says about e-cigarette refills',
    'From the Celni sprava page "Quantity limits for goods carried by individuals" (read 19 November 2026, translated from Czech; the page shows only a version number). It covers goods carried by a person from other EU member states for personal consumption.',
    ['Item', 'What Celni sprava says'],
    [['E-cigarette refill containers (under other tobacco products)', '80 ml'],
     ['Where the limit applies', 'Goods carried by an individual from EU member states for personal consumption'],
     ['Limits for arrivals from third countries', 'Not on this page'],
     ['Age, excise per ml, seizure rules', 'Not on this page']],
    ['<strong>Not read:</strong> the limit for arrivals from outside the EU, the minimum age and the penalties. Search results from Czech Customs mention a 20 ml limit from third countries and an excise duty on refills, but we did not read those pages, so confirm with Celni sprava.'])],
    [['How much vape liquid can I carry in the Czech Republic?', 'Czech Customs lists 80 ml of e-cigarette refill containers in its quantity limits for goods carried by an individual from other EU member states for personal consumption.']],
    [['https://celnisprava.gov.cz/cz/dane/WebSPD/WebInFO/Stranky/InfoFO_limity_doprava.aspx', 'Celni sprava CR - Quantity limits for goods carried by individuals']],
    {'official': ['read 2026-11-19: Celni sprava quantity limits page (e-cigarette refills 80 ml, EU personal consumption)'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['none needed: national customs page read'], 'date': '2026-11-19'})

# ---------- Poland ----------
add('PL', 'poland', [sec('🛃 What Polish tax administration (KAS) says about e-cigarette liquid',
    'From the gov.pl article of the Krajowa Administracja Skarbowa "Planning a trip abroad? Remember this" (published 26 June 2021, read 19 November 2026, translated from Polish). It is old: search results for KAS also show a 2026 tourist guide with different figures that we could not read.',
    ['Item', 'What the KAS article says'],
    [['E-cigarette liquid, duty and tax free into the EU: air or sea travellers', '50 ml'],
     ['E-cigarette liquid: travellers by other transport', '10 ml'],
     ['Novel tobacco products: air or sea travellers', '0.04 kg'],
     ['Novel tobacco products: other transport', '0.008 kg'],
     ['Combining liquid and novel products', 'Allowed while the used percentages of each allowance add up to no more than 100%'],
     ['Disposable e-cigarettes and vaporisers', 'Not mentioned in the article']],
    ['<strong>Check before you travel:</strong> the figures are from 2021. The 2026 KAS tourist guide (granica.gov.pl) could not be opened, and it may give different limits.'])],
    [['How much e-cigarette liquid can I bring into Poland?', 'A 2021 KAS article gives 50 ml for travellers by air or sea and 10 ml for other transport, duty and tax free; check the current KAS tourist guide because the limits may have changed.']],
    [['https://www.gov.pl/web/kas/planujesz-zagraniczny-wyjazd-o-tym-pamietaj', 'KAS (Poland) - Planning a trip abroad? Remember this (2021)']],
    {'official': ['read 2026-11-19: gov.pl KAS article 2021-06-26 (e-liquid 50 ml air/sea, 10 ml other); tried granica.gov.pl 2026 tourist guide: redirect to home page'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['none needed: national tax administration page read'], 'date': '2026-11-19'})

wrx(); wrl()
print('ok', len(X))
