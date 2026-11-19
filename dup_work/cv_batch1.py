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

# ---------- Germany ----------
add('DE', 'germany', [sec('🛃 What German Customs says about e-cigarette liquids',
    'From the Zoll (German Customs) page "Travellers\' allowances" (English, read 19 November 2026; undated). It is customs guidance on what you may bring in; it does not cover using vapes in Germany.',
    ['Item', 'What Zoll says'],
    [['Liquids for e-cigarettes', 'Count as substitutes for tobacco products, listed under "other goods"'],
     ['Who may use the allowance', 'Persons aged 17 or older for tobacco substitutes'],
     ['Limit for tobacco substitutes', 'No quantity limit; they fall under the general value limit'],
     ['Value limit', '430 euros for air and sea travellers, 300 euros for other travellers, 175 euros for travellers under 15'],
     ['Tobacco products (for comparison)', '200 cigarettes, 100 cigarillos, 50 cigars or 250 g of tobacco, or a proportionate mix'],
     ['E-cigarette devices', 'Not mentioned on the page']],
    ['<strong>Not read:</strong> the page does not mention e-cigarette devices. It covers arrivals from outside the EU; check Zoll for rules when you travel within the EU.'])],
    [['Can I bring e-cigarette liquid into Germany?', 'Zoll treats liquids for e-cigarettes as tobacco substitutes with no quantity limit, inside the general value limit of 430 euros for air and sea travellers (persons aged 17 or older).'],
     ['Does Germany have a quantity limit for vape liquid?', 'The Zoll travellers\' allowances page sets no quantity limit for tobacco substitutes such as e-cigarette liquids; it applies a value limit instead.']],
    [['https://www.zoll.de/EN/Private-individuals/Travel/Entering-Germany/Duties-and-taxes/Travellers-allowances/travellers-allowances.html', 'Zoll (German Customs) - Travellers\' allowances']],
    {'official': ['read 2026-11-19: Zoll travellers allowances page (liquids = tobacco substitutes, value limit 430 EUR, age 17)'], 'reliable': ['WHO country profile read 2026-10-08 (kept as the base card)'], 'other': ['none needed: national customs page read'], 'date': '2026-11-19'})

# ---------- Spain ----------
add('ES', 'spain', [sec('🛃 What the Spanish Tax Agency says about e-cigarette liquid you carry in',
    'From the Agencia Tributaria page on exemptions from the tax on e-cigarette liquids and other tobacco-related products (last updated 27 March 2026, read 19 November 2026, translated from Spanish). It is a tax exemption page, not a ban or a health rule.',
    ['Item', 'What the Agencia Tributaria says'],
    [['Who is exempt', 'Travellers over 17 who personally bring products in from outside the internal territory'],
     ['E-liquid limit', '20 ml'],
     ['Nicotine pouches', '200'],
     ['Other nicotine products', '200 g'],
     ['Occasional parcel from one private person to another, with no payment', 'Exempt up to 10 ml of e-liquid, 30 nicotine pouches or 150 g of other nicotine products'],
     ['General traveller allowance', 'See the separate customs page: 430 euros by air or sea, 300 euros by land; tobacco 200 cigarettes']],
    ['<strong>Not read:</strong> what happens above 20 ml, and any ban on using vapes in Spain. The page is about the tax exemption, so confirm the customs treatment with the agency.'])],
    [['How much vape liquid can I bring into Spain?', 'The Agencia Tributaria exempts up to 20 ml of e-liquid from the special tax for travellers over 17 who bring it in personally from outside the internal territory.'],
     ['Can I send a vape to someone in Spain?', 'An occasional non-paid parcel between private individuals is exempt up to 10 ml of e-liquid, 30 nicotine pouches or 150 g of other nicotine products.']],
    [['https://sede.agenciatributaria.gob.es/Sede/impuestos-especiales-medioambientales/impuestos-especiales-fabricacion/liquidos-cigarrillos-electronicos-otros-productos-tabaco/exenciones.html', 'Agencia Tributaria - Exemptions: e-cigarette liquids and other tobacco-related products']],
    {'official': ['read 2026-11-19: Agencia Tributaria e-cigarette liquids tax exemption page, updated 2026-03-27 (20 ml for travellers over 17)'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['none needed: national tax agency page read'], 'date': '2026-11-19'})

# ---------- France ----------
add('FR', 'france', [sec('🛃 What French Customs says about e-cigarettes bought abroad',
    'From the Douane (French Customs) page "Calculation of duties and taxes on purchases abroad" (updated 15 October 2026, read 19 November 2026). It is a duty table, not a ban or a quantity limit.',
    ['Item', 'What Douane says'],
    [['Electronic cigarettes from outside the EU', 'Customs duty 3.7% and VAT 20% (customs nomenclature 8543 70 70)'],
     ['Legal basis cited', 'Commission Implementing Regulation (EU) 2019/1776 of 9 October 2019'],
     ['Above the exemption thresholds', 'Purchases from outside the EU are taxed, either at a flat rate or case by case under the Common Customs Tariff'],
     ['How duty is worked out', 'On the CIF value, with French VAT added to the duty'],
     ['Purchases inside the EU', 'Generally no duties, but VAT and excise are paid in the country of purchase'],
     ['Traveller allowance for e-cigarettes', 'Not stated; the page refers to a separate page for tobacco, alcohol and other goods']],
    ['<strong>Not read:</strong> any quantity limit for e-liquid, and the rule on using vapes in France. The page is a duty table.'])],
    [['Do I pay duty on a vape I bring into France?', 'French Customs lists electronic cigarettes from outside the EU at 3.7% customs duty and 20% VAT, applying when your purchases go above the exemption thresholds.'],
     ['Is there a limit on e-liquid for travellers in France?', 'The Douane duty page does not state a traveller allowance for e-cigarettes; it points to a separate page for tobacco, alcohol and other goods.']],
    [['https://www.douane.gouv.fr/en/fiche/calculation-duties-and-taxes-purchases-abroad', 'Douane (French Customs) - Calculation of duties and taxes on purchases abroad']],
    {'official': ['read 2026-11-19: Douane duties and taxes on purchases abroad page, updated 2026-10-15 (e-cigarettes 3.7% duty, 20% VAT)'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['none needed: national customs page read'], 'date': '2026-11-19'})

# ---------- Netherlands ----------
add('NL', 'netherlands', [sec('🛃 What Dutch Customs says about bringing a vape',
    'From the Douane (Dutch Customs) page "Bringing cigarettes or tobacco from abroad" (published 26 June 2025, updated 9 November 2026, read 19 November 2026, translated from Dutch).',
    ['Item', 'What Douane says'],
    [['E-cigarettes and vapes', 'You may bring them into the Netherlands only if they are for your own use'],
     ['Reselling', 'You may not put these products on the market, which means you may not sell or resell them'],
     ['More information', 'The page refers to the NVWA, the food and consumer product safety authority, for rules on buying vapes'],
     ['Tobacco from an EU country', '800 cigarettes, 200 cigars, 1 kg of tobacco or 400 cigarillos per person aged 17 or older'],
     ['Tobacco from outside the EU', '200 cigarettes, 50 cigars, 250 g of tobacco or 100 cigarillos, or a mix'],
     ['Over the allowance', 'Declare it at the "Goods to declare" exit by air or sea; a fine can follow if you do not declare']],
    ['<strong>Not read:</strong> an age limit for vapes and whether a vape must be declared. The page gives neither.'])],
    [['Can I bring a vape into the Netherlands?', 'Dutch Customs says e-cigarettes or vapes may be brought in only for your own use, and may not be sold on.'],
     ['Where do I find the Dutch rules on buying a vape?', 'The Douane page refers to the NVWA, the Netherlands Food and Consumer Product Safety Authority.']],
    [['https://www.douane.nl/onderwerpen/reizen-en-vakantie/aankopen-uit-het-buitenland/sigaretten-of-tabak/', 'Douane (Dutch Customs) - Bringing cigarettes or tobacco from abroad']],
    {'official': ['read 2026-11-19: Douane cigarettes or tobacco from abroad page, updated 2026-11-09 (vapes only for own use, no resale)'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['none needed: national customs page read'], 'date': '2026-11-19'})

# ---------- Ireland ----------
add('IE', 'ireland', [sec('🛃 What Irish Revenue says about the e-liquid tax',
    'From the Revenue page "E-liquid Products Tax (EPT)" (read 19 November 2026; undated). It is a tax page for suppliers; it does not set a traveller allowance.',
    ['Item', 'What Revenue says'],
    [['Start of the tax', 'E-liquid Products Tax came into effect on 1 November 2025'],
     ['Which products', 'Both nicotine-containing and non-nicotine e-liquid products'],
     ['Who pays', 'The supplier is liable to account for and pay the tax, on the first supply in the State'],
     ['Personal imports by travellers', 'Not covered on this page'],
     ['Rate and reliefs', 'The page links to separate sections that were not part of the text we read']],
    ['<strong>Not read:</strong> the rate, the reliefs and any rule for liquid a traveller carries in. Ask Revenue before bringing more than a personal supply.'])],
    [['Is there a tax on vape liquid in Ireland?', 'Yes: Revenue says the E-liquid Products Tax came into effect on 1 November 2025 and applies to nicotine and non-nicotine e-liquid products, paid by the supplier on first supply in the State.'],
     ['Does the Irish vape tax apply to what I carry in?', 'The Revenue EPT page does not cover personal imports by travellers, so confirm with Revenue.']],
    [['https://www.revenue.ie/en/companies-and-charities/excise-and-licences/ept/index.aspx', 'Revenue (Ireland) - E-liquid Products Tax (EPT)']],
    {'official': ['read 2026-11-19: Revenue EPT page (tax from 2025-11-01, supplier liable, travellers not covered)'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['none needed: national tax authority page read'], 'date': '2026-11-19'})

wrx(); wrl()
print('ok', len(X))
