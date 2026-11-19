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

# ---------- Aeromexico ----------
e = d['Aeromexico']['perfume']
e['answer'] = ("Aeromexico's own pages did not open for us, so this follows the guide of its home airport, Mexico City: in the cabin only cosmetic or personal-hygiene liquids, gels and aerosols are allowed, "
               "in containers of 100 ml or less (a bigger container is refused even if partly empty), all in one resealable bag of up to 1 litre, one bag per passenger.")
e['sections'] = [sec('🧴 What Mexico City airport says about perfume and aerosols in hand baggage',
                     'From the passenger information guide of Benito Juarez International Airport, Mexico City (the file name shows 2014, so the rules may have changed), read 17 November 2026. It is the airport operator, not Aeromexico.',
                     ['Question', 'Mexico City airport guide'],
                     [['What is allowed in the cabin', 'Only liquids, gels and aerosols for cosmetic or personal-hygiene use'],
                      ['Container size', 'No more than 100 ml (3.4 oz); a larger container is not allowed even if it holds less'],
                      ['Bag', 'One resealable plastic bag of up to 1 litre (about 20 x 20 cm) per passenger, closed completely'],
                      ['At the checkpoint', 'The bag goes in a separate tray; anything over 100 ml is left in the bins, so the guide recommends carrying it in checked baggage'],
                      ['Duty-free', 'Handed over at boarding; on a connection inside the US or Canada, duty-free liquids must go in checked baggage']],
                     ['<strong>Not on the guide:</strong> a limit for perfume in checked baggage, and any Aeromexico wording. Confirm with the airline before you fly.'])]
e['sources'] = [['https://www.aicm.com.mx/informacionalpasajero/Archivos/GuiaAICM2014.pdf', 'Unofficial source: Mexico City airport (AICM) &mdash; Passenger information guide']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/aeromexico/perfume-aerosols'] = {'official': ['tried 2026-11-17: world.aeromexico.com liquids page: DNS error for the tool; beta.aeromexico.com PDF: site error page'], 'reliable': ['read 2026-11-17: AICM passenger information guide PDF (airport operator, 2014 file)'], 'other': ['none needed: airport operator source read'], 'date': '2026-11-17'}

# ---------- Gulf Air ----------
e = d['Gulf Air']['perfume']
e['answer'] = ("Gulf Air's baggage page returns an error (403), so this is the Bahrain airport rule as reported by a local newspaper: perfume and deodorant count as liquids, "
               "each container in the cabin may hold at most 100 ml, all in one transparent resealable bag of up to a litre; containers over 100 ml are confiscated.")
e['sections'] = [sec('🧴 What Bahrain press reports about perfume and aerosols in cabin baggage',
                     'From Gulf Weekly, a Bahrain publication (Al Hilal Publishing), read 17 November 2026. The article is undated, so treat it as a lower-reliability source and check the current rule with Gulf Air or Bahrain Airport Company.',
                     ['Question', 'As reported'],
                     [['What counts as a liquid', 'Water, drinks, gels, pastes and the contents of aerosols such as toothpaste, perfume, deodorant and shaving foam; make-up, lotions, oils and sprays too'],
                      ['Container size', 'No more than 100 ml; containers over 100 ml are confiscated at the gate'],
                      ['Bag', 'One transparent resealable plastic bag, no more than one litre (about 20 x 20 cm), shown separately at the X-ray'],
                      ['Exempt', 'Medicines, special dietary needs and baby food, ideally with a doctor letter'],
                      ['Duty-free', 'Allowed if bought in the sterile area or on board, with the receipt in the shop tamper-evident bag'],
                      ['Responsibility', 'Neither the airport nor airlines accept liability for items left behind or confiscated']],
                     ['<strong>Not in the article:</strong> any Gulf Air wording or a rule for perfume in checked baggage.'])]
e['sources'] = [['https://www.gulfweekly.com/Articles/335113', 'Unofficial source (newspaper, undated): Gulf Weekly &mdash; Bahrain airport baggage rules']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/gulf-air/perfume-aerosols'] = {'official': ['tried 2026-11-17: gulfair.com baggage information HTTP 403'], 'reliable': ['tried 2026-11-17: Bahrain Ministry of Transportation prohibited items PDF HTTP 403; Bahrain Airport Company page not found'], 'other': ['read 2026-11-17: Gulf Weekly article https://www.gulfweekly.com/Articles/335113 (less reliable, undated press)'], 'date': '2026-11-17'}

# ---------- Frontier ----------
e = d['Frontier']['perfume']
e['answer'] = ("Frontier's bag options page lists aerosols among the hazardous items prohibited in checked bags, so hairspray and spray perfume belong in the carry-on, where the TSA allows containers of 3.4 oz (100 ml) or less.")
e['sections'] = [sec('🧴 What Frontier says about aerosols in checked bags',
                     'From the Frontier Airlines bag options page (read 17 November 2026). The page lists "aerosols" in its sentence on prohibited hazardous items.',
                     ['Question', 'Frontier rule'],
                     [['Aerosols in checked bags', 'Prohibited, listed with weapons, corrosives, explosives, radioactive materials, lithium batteries, oxidizers, flammables and toxins'],
                      ['Valuables', 'Do not pack medication, cash, electronics, car keys, documents or valuables in checked bags']],
                     ['<strong>Not on the page:</strong> a rule for liquids in the carry-on, and any mention of perfume or hairspray by name. Frontier sends readers to its Help Center.']),
                 sec('Carry-on perfume and hairspray under TSA rules',
                     'For the carry-on the page defers elsewhere, so this is the US TSA rule (TSA hairspray and perfume pages, read 17 November 2026), not Frontier wording: hairspray and perfume are allowed in containers of 3.4 oz (100 ml) or less, and a TSA officer makes the final call at the checkpoint.')]
e['sources'] = [['https://www.flyfrontier.com/travel/travel-info/bag-options/?mobile=true', 'Frontier Airlines &mdash; Bag options'], ['https://tsa.gov/travel/security-screening/whatcanibring/items/hairspray', 'Unofficial source: TSA &mdash; Hairspray']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/frontier/perfume-aerosols'] = {'official': ['read 2026-11-17: https://www.flyfrontier.com/travel/travel-info/bag-options/ (aerosols prohibited in checked bags)'], 'reliable': ['read 2026-11-17: TSA hairspray page'], 'other': [], 'date': '2026-11-17'}

# ---------- Avianca ----------
e = d['Avianca']['perfume']
e['answer'] = ("Avianca's help centre returns an error (403), so this follows what the El Dorado airport in Bogota is reported to apply: on international flights containers over 100 ml are refused, "
               "aerosols are prohibited above 100 ml, and perfume is allowed up to 1000 ml on domestic flights.")
e['sections'] = [sec('🧴 What El Dorado airport is reported to say about perfume and aerosols',
                     'From a Noticias RCN article of 26 January 2025, which attributes these examples to El Dorado airport in Bogota (Avianca\'s home hub); the article does not quote an official. It is a news report, so treat it as a lower-reliability source and check the current rule with Avianca.',
                     ['Question', 'As reported'],
                     [['Perfume on domestic flights', 'Up to 1000 ml'],
                      ['Perfume on international flights', 'Up to 100 ml'],
                      ['Shampoo, creams, perfume or deodorant in containers over 100 ml', 'Listed among the restrictions on international flights'],
                      ['Aerosols', 'Prohibited if the content exceeds 100 ml']],
                     ['<strong>Not in the article:</strong> any Avianca wording, a rule for aerosols on domestic flights, and a rule for checked baggage.'])]
e['sources'] = [['https://www.noticiasrcn.com/tendencias/equipaje-de-mano-2025-que-no-se-puede-llevar-844331', 'Unofficial source (news report): Noticias RCN &mdash; Equipaje de mano 2025 (26 January 2025)']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/avianca/perfume-aerosols'] = {'official': ['tried 2026-11-17: ayuda.avianca.com restricted items article HTTP 403'], 'reliable': ['tried 2026-11-17: OPAIN (El Dorado operator) circular 2010 read: no limits stated; Aerocivil text not found'], 'other': ['read 2026-11-17: Noticias RCN 26 Jan 2025 (less reliable news report of El Dorado examples)'], 'date': '2026-11-17'}

# ---------- Wizz Air ----------
e = d['Wizz Air']['perfume']
e['answer'] = ("Wizz Air's restricted-items page would not open for us (HTTP 405), so this follows the EU rule for flights leaving EU airports: perfume and sprays travel in cabin bags only in containers of 100 ml or less inside one transparent bag, and bigger bottles belong in the hold.")
e['sections'] = [sec('🧴 What EU rules say about perfume and sprays in a Wizz Air cabin bag',
                     'Wizz Air is based in Hungary and flies mainly from EU airports. This is the EU Your Europe luggage page (read 17 November 2026), written for passengers departing from the EU, not a Wizz Air page.',
                     ['Question', 'EU rule'],
                     [['A single perfume or spray', 'Cabin limit of 100 ml per container'],
                      ['Several containers', 'Together in one transparent plastic bag that holds no more than a litre'],
                      ['A bigger bottle', 'Put it in the hold bag instead'],
                      ['Medicines and baby food', 'Not subject to the 100 ml limit'],
                      ['Perfume from the airport shop', 'Keep it in the sealed security bag with the receipt until your final stop'],
                      ['Spray paint and similar', 'Never allowed in the cabin or the hold']],
                     ['<strong>Not on the EU page:</strong> any Wizz Air wording and a limit for perfume in the hold. Confirm with the airline before you fly.'])]
e['sources'] = [['https://www.europa.eu/youreurope/citizens/travel/carry/luggage-restrictions/index_en.htm', 'Unofficial source: EU Your Europe &mdash; Luggage restrictions']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/wizz-air/perfume-aerosols'] = {'official': ['tried 2026-11-17: wizzair.com restricted items help page HTTP 405'], 'reliable': ['read 2026-11-17: EU Your Europe luggage restrictions; bud.hu security screening page returned only a heading'], 'other': ['none needed: EU source read'], 'date': '2026-11-17'}

# ---------- Air Europa ----------
e = d['Air Europa']['perfume']
e['answer'] = ("Air Europa's liquids page returns an error (403), so this follows Aena, the operator of Spain's airports: perfumes, creams and sprays go in the cabin in containers of 100 ml or less, one clear 20 x 20 cm bag per passenger, "
               "while the liquid limits do not apply to checked luggage.")
e['sections'] = [sec('🧴 What Aena says about perfume and sprays in hand luggage',
                     'From the Aena hand luggage page, read 17 November 2026 (the page shows only a 2026 copyright). Aena runs the Spanish airports Air Europa flies from; this is not an Air Europa page.',
                     ['Question', 'Aena'],
                     [['Size of each container', 'Up to 100 ml'],
                      ['Bag', 'All containers in one transparent resealable bag of about 20 x 20 cm (1 litre), fully closed; one bag per passenger, children included'],
                      ['At security', 'The bag goes in a separate tray, and staff may ask you to open a container'],
                      ['Medicines and special diets', 'Allowed when needed on the trip; carry the prescription where possible'],
                      ['Perfume bought at the airport or on board', 'Allowed in the sealed security bag with the receipt, not opened before your final destination'],
                      ['Checked luggage', 'The liquid restrictions do not apply']],
                     ['<strong>Not on the page:</strong> any Air Europa wording and a limit for aerosols in checked luggage.'])]
e['sources'] = [['https://www.aena.es/en/passengers/baggage-controls/hand-luggage.html', 'Unofficial source: Aena &mdash; Hand luggage']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/air-europa/perfume-aerosols'] = {'official': ['tried 2026-11-17: aireuropa.com liquids page HTTP 403'], 'reliable': ['read 2026-11-17: Aena hand luggage page (Spanish airport operator)'], 'other': ['none needed: airport operator source read'], 'date': '2026-11-17'}

wr('topics_new.json', d)
L = rd('ladder_log.json')
for k, v in log.items(): L[k] = v
wr('ladder_log.json', L)
print('ok')
