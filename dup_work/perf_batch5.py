import json
ROOT = 'C:/Users/yariv/Utility Website/can-i-take-this/'
def rd(f): return json.loads(open(ROOT + f, encoding='utf8').read())
def wr(f, d, crlf=True):
    s = json.dumps(d, indent=1, ensure_ascii=False)
    if crlf: s = s.replace('\n', '\r\n')
    open(ROOT + f, 'w', encoding='utf8', newline='').write(s)

d = rd('topics_new.json')
CHK = '17 November 2026'
log = {}
def sec(h, p, head=None, rows=None, lst=None):
    s = {'h': h, 'p': p}
    if head: s['table'] = {'head': head, 'rows': rows}
    if lst: s['list'] = lst
    return s

# ---------- Southwest ----------
e = d['Southwest']['perfume']
e['answer'] = ("Southwest's hazardous materials page bars aerosols from checked and carry-on bags under federal law, but makes an exception for medicinal and toilet articles in small quantities, up to 70 ounces in total. "
               "Hairspray and perfume fall under that exception; the page does not name them.")
e['sections'] = [sec('🧴 What Southwest says about aerosols and toiletries',
                     'From the Southwest Airlines Help Center article "Hazardous Materials" (read 17 November 2026; the article shows no date, only a 2026 copyright).',
                     ['Question', 'Southwest wording'],
                     [['Aerosols, paints, fireworks, oxygen cylinders, flammable liquids', 'Barred from aircraft in checked or carry-on bags under federal law, unless an exception applies'],
                      ['Medicinal and toilet articles', 'A special exception allows small quantities, up to 70 ounces in total, in your luggage'],
                      ['Perfume and hairspray by name', 'Not mentioned'],
                      ['Lithium batteries, power banks, e-cigarettes', 'Not allowed in checked bags; spare batteries go in the carry-on']],
                     ['<strong>Not on the page:</strong> the 3.4 oz carry-on liquid limit. That comes from the TSA checkpoint rule, so check the TSA before you pack a full-size spray.'])]
e['sources'] = [['https://support.southwest.com/helpcenter/article/hazardous-materials', 'Southwest Airlines &mdash; Hazardous Materials']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/southwest/perfume-aerosols'] = {'official': ['read 2026-11-17: https://support.southwest.com/helpcenter/article/hazardous-materials (aerosols barred, medicinal and toilet articles up to 70 oz exception)'], 'reliable': [], 'other': ['IATA table removed from page: replaced by the airline text'], 'date': '2026-11-17'}

# ---------- Vueling (airline-hosted dangerous goods table) ----------
e = d['Vueling']['perfume']
e['answer'] = ("Vueling's help pages returned an error (403), but its own site hosts the dangerous goods table for passengers (IATA table 2.3.A). It lets toiletries and aerosols travel up to 2 kg or 2 L in total and 0.5 kg or 0.5 L each, "
               "with valve caps, and forbids pepper spray and similar disabling sprays in every bag.")
e['sections'] = [sec('🧴 What the Vueling-hosted dangerous goods table says',
                     'From the PDF "Dangerous Goods Regulations, Table 2.3.A, Provisions for Dangerous Goods Carried by Passengers or Crew", published on static.vueling.com (read 17 November 2026; the file is an older IATA edition and shows no Vueling date).',
                     ['Question', 'Table 2.3.A'],
                     [['Hair sprays, perfumes, colognes, medicines containing alcohol', 'Permitted in carry-on and checked bags, no operator approval needed'],
                      ['Total net quantity per passenger', 'No more than 2 kg or 2 L'],
                      ['Single article', 'No more than 0.5 kg or 0.5 L'],
                      ['Aerosol release valves', 'Must be protected by a cap or other means'],
                      ['Pepper spray, mace', 'Forbidden on the person and in checked and carry-on bags'],
                      ['Alcoholic drinks of 24% to 70%', 'Checked bag only, retail packaging, up to 5 L per person'],
                      ['Hair curlers with hydrocarbon gas', 'Checked bag only (one per passenger); gas refills not allowed']],
                     ['<strong>Not in the table:</strong> the 100 ml cabin liquid limit. It is an airport security rule, so check the airport you leave from.'])]
e['sources'] = [['https://static.vueling.com/cms/media/1567252/dgr-59-en-2.3a___addendum_1.pdf', 'Vueling &mdash; Dangerous Goods Regulations, Table 2.3.A (PDF on vueling.com)']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/vueling/perfume-aerosols'] = {'official': ['tried 2026-11-17: help.vueling.com liquids in hand luggage HTTP 403', 'read 2026-11-17: Vueling-hosted DGR table 2.3.A PDF (static.vueling.com): toiletries 2 kg/2 L, 0.5 each, valves capped'], 'reliable': [], 'other': ['IATA table text replaced by the Vueling-hosted file wording and extras'], 'date': '2026-11-17'}

# ---------- Iberia (Aena) ----------
e = d['Iberia']['perfume']
e['answer'] = ("Iberia's pages returned an error (403), so this is the Spanish airport rule from Aena, the operator of Madrid-Barajas: liquids, perfumes, creams, aerosols, foams and gels go in containers of at most 100 ml, "
               "in one transparent resealable bag of about 20 x 20 cm per passenger, and the limit does not apply to checked luggage.")
e['sections'] = [sec('🧴 What Aena says about perfume and aerosols in hand luggage',
                     'From the Aena (Spanish airports) page on hand luggage (read 17 November 2026; undated, copyright 2026). It is an airport rule, not Iberia wording.',
                     ['Question', 'Aena wording'],
                     [['Liquids, perfumes, creams, aerosols, foams, gels', 'Individual containers not exceeding 100 ml'],
                      ['Bag', 'Transparent resealable plastic bag, 1 per passenger including children, about 20 x 20 cm; place it in the tray apart from the rest of the luggage'],
                      ['Duty-free and on-board purchases', 'Keep inside an approved sealed security bag with the receipt; do not open until the final destination'],
                      ['Liquid medicines and baby food', 'Exempt; carry the prescription or proof'],
                      ['Checked luggage', 'The liquid restrictions do not affect it']],
                     ['<strong>Not on the page:</strong> the Iberia rule for aerosols in the hold. Flammable aerosols are a dangerous-goods matter, so ask Iberia before packing a spray in a checked bag.'])]
e['sources'] = [['https://www.aena.es/en/passengers/baggage-controls/hand-luggage.html', 'Unofficial source (airport operator): Aena &mdash; Hand luggage']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/iberia/perfume-aerosols'] = {'official': ['tried 2026-11-17: iberia.com dangerous goods, hand luggage pages and ayuda.iberia.com: all HTTP 403'], 'reliable': ['read 2026-11-17: Aena hand luggage page (liquids, perfumes, aerosols 100 ml; checked bags unaffected)'], 'other': [], 'date': '2026-11-17'}

# ---------- Air France (French ministry) ----------
e = d['Air France']['perfume']
e['answer'] = ("Air France's pages timed out or returned errors, so this is the French civil aviation authority (DGAC) guidance on the French ecology ministry site: liquids, aerosols, gels and creams in flasks under 100 ml, in one closed bag of up to 1 litre, "
               "and aerosols must be checked against the cabin and hold rules before travel.")
e['sections'] = [sec('🧴 What the French authority says about perfume and aerosols',
                     'From the French ministry page "Items not permitted to be carried on airplanes or helicopters or subject to restrictions" (published 17 February 2022, updated 18 October 2023, read 17 November 2026). It is French authority guidance, not Air France wording.',
                     ['Question', 'French authority (DGAC)'],
                     [['What the security rule covers', 'All liquids, aerosols, gels, pastes, creams, lotions and mousses'],
                      ['Container size', 'Flasks and bottles of less than 100 mL'],
                      ['Bag', 'One closed plastic bag, transparent and re-closable, up to 1 L (about 20 x 20 cm) per passenger'],
                      ['Aerosols', 'DGAC asks passengers to follow the rules for aerosols in the cabin and hold, to check the airline, and to read the safety data sheet; no quantity is given'],
                      ['Duty-free liquids', 'Allowed in the sealed bag with the proof of purchase visible'],
                      ['Liquid medicines', 'Allowed in the quantity needed for the trip; keep the prescription'],
                      ['Item refused at security', 'Ask the airport about checking it in the hold, collecting it later, or posting it']],
                     ['<strong>Not on the page:</strong> Air France&rsquo;s own quantity limits for perfume. Confirm them with Air France.'])]
e['sources'] = [['https://www.ecologie.gouv.fr/en/public-policies/items-not-permitted-be-carried-airplanes-helicopters-subject-restrictions', 'Unofficial source (French civil aviation authority, DGAC): Ministry of Ecological Transition &mdash; Items not permitted on aircraft']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/air-france/perfume-aerosols'] = {'official': ['tried 2026-11-17: wwws.airfrance.fr aerosols/toiletries popin and prohibited products page: timeouts'], 'reliable': ['read 2026-11-17: French ecology ministry DGAC page on items not permitted on aircraft; tried Paris Aeroport regulated items page (empty content)'], 'other': [], 'date': '2026-11-17'}

# ---------- IndiGo (Kannur airport quoting BCAS) ----------
e = d['IndiGo']['perfume']
e['answer'] = ("IndiGo's own pages timed out, so this is the Indian security rule as published by Kannur Airport, which cites the Bureau of Civil Aviation Security (BCAS): liquids in hand baggage only in containers of 100 ml or less, "
               "in one clear resealable bag per passenger, with anything larger going in checked luggage.")
e['sections'] = [sec('🧴 What Indian airport security says about perfume and sprays',
                     'From the Kannur International Airport security page (read 17 November 2026; undated). It quotes the BCAS list and is not IndiGo wording.',
                     ['Question', 'Kannur Airport page (BCAS)'],
                     [['Liquids in hand baggage', 'Containers not greater than 100 ml each'],
                      ['Bag', 'One clear resealable plastic bag of liquids, aerosols and gels; each passenger may carry only one'],
                      ['What does not fit', 'Goes in checked luggage'],
                      ['Covered products', 'Gels, lotions, pastes, liquid cosmetics, foams'],
                      ['Flammable liquids, paints, thinners', 'Listed as prohibited in the cabin'],
                      ['Aerosols by name', 'Not mentioned on the page']],
                     ['<strong>Not on the page:</strong> a rule for sprays in checked bags, and IndiGo&rsquo;s own wording. Ask IndiGo before packing a large deodorant or perfume spray.'])]
e['sources'] = [['https://kannurairport.aero/corporate/security', 'Unofficial source (airport operator, citing BCAS): Kannur International Airport &mdash; Security']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/indigo/perfume-aerosols'] = {'official': ['tried 2026-11-17: goindigo.in dangerous goods policy and baggage policy pages: timeouts'], 'reliable': ['read 2026-11-17: Kannur International Airport security page (BCAS 100 ml liquids rule)'], 'other': [], 'date': '2026-11-17'}

# ---------- LATAM (BioBioChile on DGAC/JAC) ----------
e = d['LATAM']['perfume']
e['answer'] = ("LATAM's help pages and its IATA table returned an error (403), so this is a Chilean news report of the DGAC and JAC rules: flammable aerosols are banned on passenger flights, non-flammable aerosols and perfume are allowed in the cabin in containers of at most 500 ml, "
               "and LATAM's own cabin rule limits each liquid or aerosol to 100 ml.")
e['sections'] = [sec('🧴 What Chilean press reports about perfume and aerosols',
                     'From a BioBioChile article by Constanza Moncada (16 January 2023, Turismo y Viajes), which cites the Chilean DGAC and JAC. It is a news report, so treat it as lower reliability and check LATAM for the flight you take.',
                     ['Question', 'As reported'],
                     [['Flammable aerosols (air fresheners, insecticides, spray paint)', 'Prohibited on passenger flights'],
                      ['Non-flammable aerosols in the cabin', 'Up to 500 ml per container; the article gives both 1 L and 2 L as the total'],
                      ['Perfume on domestic flights', 'No restriction; 500 ml per container and 2 L or 2 kg in total for the airline it quotes'],
                      ['LATAM cabin rule quoted', '100 ml per liquid or aerosol container, in one clear 1-litre bag'],
                      ['Flights to the USA', 'Containers limited to 100 ml']],
                     ['<strong>Not in the article:</strong> the current LATAM wording. The article is from 2023 and contradicts itself on the aerosol total, so confirm with LATAM before you fly.'])]
e['sources'] = [['https://www.biobiochile.cl/noticias/turismo-y-viajes/noticias/2023/01/16/elementos-prohibidos-en-el-equipaje-que-se-puede-llevar-en-vuelos-nacionales.shtml', 'Unofficial source (news, lower reliability): BioBioChile &mdash; Items prohibited in luggage, 16 January 2023']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/latam/perfume-aerosols'] = {'official': ['tried 2026-11-17: latamairlines.com restricted cabin page (US and Chile) and LATAM IATA table PDF: HTTP 403'], 'reliable': ['tried 2026-11-17: Chile DGAC/JAC official document not found by search'], 'other': ['read 2026-11-17: BioBioChile article 2023-01-16 citing DGAC/JAC (lower reliability, dated)'], 'date': '2026-11-17'}

wr('topics_new.json', d)
L = rd('ladder_log.json')
for k, v in log.items(): L[k] = v
wr('ladder_log.json', L)
print('ok')
