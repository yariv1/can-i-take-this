import json
ROOT = 'C:/Users/yariv/Utility Website/can-i-take-this/'
def rd(f): return json.loads(open(ROOT + f, encoding='utf8').read())
def wr(f, d, crlf=True):
    s = json.dumps(d, indent=1, ensure_ascii=False)
    if crlf: s = s.replace('\n', '\r\n')
    open(ROOT + f, 'w', encoding='utf8', newline='').write(s)

d = rd('topics_new.json')
CHK = '19 November 2026'
log = {}
def sec(h, p, head=None, rows=None, lst=None):
    s = {'h': h, 'p': p}
    if head: s['table'] = {'head': head, 'rows': rows}
    if lst: s['list'] = lst
    return s

# ---------- Norwegian (Avinor) ----------
e = d['Norwegian']['liquids']
e['answer'] = ("Norwegian's pages returned an error (403), so this page gives the rule of Avinor, the operator of Norway's airports: liquids in hand baggage in containers of at most 100 ml, in one transparent resealable bag of up to 1 litre per traveller, "
               "with liquid medicines and necessary baby food exempt.")
e['sections'] = [sec('💧 What Avinor says about liquids in hand luggage',
                     'From the Avinor page "Baggage rules" (read 19 November 2026; undated). It is airport guidance, not Norwegian wording.',
                     ['Question', 'Avinor wording'],
                     [['Container size', 'Max 100 ml each; a larger container is not allowed even if it is only partly full'],
                      ['Bag', 'One transparent resealable bag of up to 1 litre per traveller; free bags are given before security'],
                      ['Liquid medicines', 'Exempt from the 100 ml rule and need not go in the 1-litre bag'],
                      ['Baby food and breast milk', 'Necessary baby food is exempt; other food needed for the trip is also allowed'],
                      ['Water bottle', 'Allowed if empty at security; refill it in the terminal'],
                      ['Duty-free', 'The bag must be sealed with the receipt clearly visible inside; security can open it for analysis, and will reseal it on a transfer'],
                      ['Sealed drinks, yogurt, jam, honey', 'Treated as liquids'],
                      ['Checked baggage', 'Deodorant, perfume and toothpaste are allowed; for bottles, check the airline']],
                     ['<strong>Not on the page:</strong> Norwegian&rsquo;s own wording and its tax-free rules by destination. Ask Norwegian if you transfer.'])]
e['sources'] = [['https://www.avinor.no/en/practical-info/baggage-rules/', 'Unofficial source (airport operator): Avinor &mdash; Baggage rules']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/norwegian/liquids'] = {'official': ['tried 2026-11-19: norwegian.com restricted items in baggage page HTTP 403'], 'reliable': ['read 2026-11-19: Avinor baggage rules page (100 ml, 1 L bag, exemptions, duty-free bag)'], 'other': [], 'date': '2026-11-19'}

# ---------- Southwest (TSA) ----------
e = d['Southwest']['liquids']
e['answer'] = ("Southwest's carry-on policy page does not list liquids, so this page gives the TSA 3-1-1 rule that applies at every US checkpoint: a quart-sized bag of containers of 3.4 oz (100 ml) or less, with medications and infant and child nourishment exempt.")
e['sections'] = [sec('💧 What the TSA says about liquids in carry-on bags',
                     'From the TSA page on the liquids rule (read 19 November 2026; undated). It is a US federal rule, not Southwest wording. Southwest&rsquo;s Help Center carry-on page covers bag size only and points to a separate article on liquids that did not open for us.',
                     ['Question', 'TSA wording'],
                     [['Allowed in the carry-on', 'A quart-sized bag of liquids, aerosols, gels, creams and pastes, each in a container of 3.4 oz (100 ml) or less'],
                      ['Larger containers', 'Pack in checked baggage'],
                      ['An item that alarms', 'Needs additional screening'],
                      ['Exempt', 'Medications and infant and child nourishment (the page links to separate pages)'],
                      ['Duty-free from abroad, connecting to a US flight', 'Over 3.4 oz allowed only in a sealed tamper-evident bag with the receipt, bought within 48 hours; TSA still recommends checking it'],
                      ['Southwest carry-on size', '24 x 16 x 10 inches, one carry-on and one personal item']],
                     ['<strong>Not on the page:</strong> Southwest&rsquo;s own liquids wording. The TSA officer makes the final call at the checkpoint.'])]
e['sources'] = [['https://www.tsa.gov/travel/security-screening/liquids-rule', 'Unofficial source (US government): TSA &mdash; 3-1-1 liquids rule'],
                ['https://support.southwest.com/helpcenter/article/carryon-baggage-policy', 'Southwest Airlines &mdash; Carryon and personal item policy']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/southwest/liquids'] = {'official': ['read 2026-11-19: Southwest carry-on policy page (size only; liquids article not found by search)'], 'reliable': ['read 2026-11-19: TSA liquids rule 3-1-1 page'], 'other': [], 'date': '2026-11-19'}

# ---------- Gulf Air ----------
e = d['Gulf Air']['liquids']
e['answer'] = ("Gulf Air's baggage pages returned errors (403 and 402), so this is the Bahrain airport rule as reported by a local newspaper: each container in the cabin at most 100 ml, all in one transparent resealable bag of up to a litre, and containers over 100 ml confiscated at the gate.")
e['sections'] = [sec('💧 What Bahrain press reports about liquids in cabin baggage',
                     'From Gulf Weekly, a Bahrain publication, read 19 November 2026 (undated article, lower reliability). Check the current rule with Gulf Air or Bahrain Airport Company.',
                     ['Question', 'As reported'],
                     [['What counts as a liquid', 'Water, drinks, gels, pastes and aerosol contents such as toothpaste, perfume, deodorant and shaving foam; make-up, lotions, oils and sprays too'],
                      ['Container size', 'No more than 100 ml; larger containers are confiscated at the gate'],
                      ['Bag', 'One transparent resealable plastic bag of up to one litre (about 20 x 20 cm), shown separately at the X-ray'],
                      ['Exempt', 'Medicines, special dietary needs and baby food, ideally with a doctor letter'],
                      ['Duty-free', 'Allowed if bought in the sterile area or on board, with the receipt in the shop tamper-evident bag'],
                      ['Responsibility', 'Neither the airport nor airlines accept liability for items left behind or confiscated']],
                     ['<strong>Not in the article:</strong> Gulf Air wording and liquids in checked bags.'])]
e['sources'] = [['https://www.gulfweekly.com/Articles/335113', 'Unofficial source (newspaper, undated): Gulf Weekly &mdash; Bahrain airport baggage rules']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/gulf-air/liquids'] = {'official': ['tried 2026-11-19: gulfair.com baggage information page HTTP 402; earlier: HTTP 403'], 'reliable': ['tried 2026-11-17: Bahrain Ministry of Transportation prohibited items PDF HTTP 403'], 'other': ['read 2026-11-17: Gulf Weekly article https://www.gulfweekly.com/Articles/335113 (less reliable, undated press)'], 'date': '2026-11-19'}

# ---------- Israir (Mako) ----------
e = d['Israir']['liquids']
e['answer'] = ("Israir's pages sit behind a waiting-room queue, so this page uses a Mako article of 28 January 2026: Ben Gurion officially follows the European rule of 100 ml per container in one transparent resealable bag of up to 1 litre, though many passengers report uneven enforcement.")
e['sections'] = [sec('💧 What the Israeli press says about liquids at Ben Gurion',
                     'From a Mako travel article by Ilan Arnon (28 January 2026, updated the same day), translated from Hebrew and read 19 November 2026. It is a news report, so treat it as lower reliability. It does not name Israir.',
                     ['Question', 'As reported'],
                     [['Rule at Ben Gurion', 'Officially follows European rules'],
                      ['Container size', 'Each liquid container up to 100 ml'],
                      ['Bag', 'One transparent resealable bag, up to 1 litre in total'],
                      ['Enforcement', 'Many passengers report it is applied unevenly; the article advises against taking the risk'],
                      ['Sprays', 'A luggage company quoted says Ben Gurion rarely objects, but other airports apply the 100 ml limit'],
                      ['Duty-free perfume over 100 ml', 'Only in the sealed, unopened shop bag with the receipt inside']],
                     ['<strong>Not in the article:</strong> any Israir wording and the rule for checked bags.'])]
e['sources'] = [['https://www.mako.co.il/travel-israel/Article-a5263f9867afb91026.htm', 'Unofficial source (news, lower reliability): Mako &mdash; liquids at Ben Gurion, 28 January 2026']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/israir/liquids'] = {'official': ['tried 2026-11-17: israir.co.il baggage policy redirects to a waiting-room queue (queue-it); not bypassed'], 'reliable': ['tried 2026-11-19: Israel Airports Authority Ben Gurion security page has no 100 ml rule (duty-free sealed packet only)'], 'other': ['read 2026-11-19: Mako article 2026-01-28 (lower reliability)'], 'date': '2026-11-19'}

# ---------- Arkia (Israel Airports Authority) ----------
e = d['Arkia']['liquids']
e['answer'] = ("Arkia's terms returned an error (403), so this page uses the Israel Airports Authority's Ben Gurion security page: duty-free liquids, cosmetics, alcohol and sprays bought at Ben Gurion can go to Europe or the USA only when sealed in the special shop packet. "
               "The page does not state a 100 ml limit.")
e['sections'] = [sec('💧 What the Israel Airports Authority says about liquids',
                     'From the Israel Airports Authority page "Ben Gurion Airport" on security (read 19 November 2026; undated). It is airport guidance, not Arkia wording.',
                     ['Question', 'Israel Airports Authority'],
                     [['Duty-free liquids, cosmetics, alcohol and sprays bought at Ben Gurion', 'Allowed on flights to Europe, or connecting to Europe or the USA, when sealed in the special packet'],
                      ['Direct flights to the USA', 'Duty-free perfumes, alcohol and sprays allowed if sealed at the shop'],
                      ['Who it covers', 'Only duty-free purchases, not liquids brought from home or bought elsewhere'],
                      ['First US stop', 'The sealed security packet must go into the suitcase'],
                      ['Hand luggage', 'Sharp objects and gas containers will not be allowed']],
                     ['<strong>Not on the page:</strong> the 100 ml container limit and the 1-litre bag. For those, see the Israir page and ask Arkia.'])]
e['sources'] = [['https://www.iaa.gov.il/en/airports/ben-gurion/securitybgn/', 'Unofficial source (airport operator): Israel Airports Authority &mdash; Ben Gurion security']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/arkia/liquids'] = {'official': ['tried 2026-11-19: docs.arkia.co.il general terms and arkia.co.il legal terms HTTP 403'], 'reliable': ['read 2026-11-19: Israel Airports Authority Ben Gurion security page (duty-free sealed packet; no 100 ml rule)'], 'other': [], 'date': '2026-11-19'}

# ---------- Air France (French authority) ----------
e = d['Air France']['liquids']
e['answer'] = ("Air France's pages timed out, so this page gives the French civil aviation authority (DGAC) rule: liquids, aerosols, gels, pastes, creams, lotions and mousses in containers under 100 mL, in one closed transparent bag of up to 1 L, one per passenger. "
               "Duty-free liquids are allowed sealed with the proof of purchase visible.")
e['sections'] = [sec('💧 What the French authority says about liquids',
                     'From the French ministry page "Items not permitted to be carried on airplanes or helicopters or subject to restrictions" (published 17 February 2022, updated 18 October 2023, read 19 November 2026). It is French authority guidance, not Air France wording.',
                     ['Question', 'French authority (DGAC)'],
                     [['Covered by the rule', 'All liquids, aerosols, gels, pastes, creams, lotions, mousses, jams, soft cheeses and similar'],
                      ['Container size', 'Flasks and bottles of less than 100 mL'],
                      ['Bag', 'One closed plastic bag, transparent and re-closable, up to 1 L (about 20 x 20 cm), one per passenger'],
                      ['Duty-free', 'Bought at an airport or on board and kept in the airline&rsquo;s sealed bag: allowed; the bag stays sealed with the proof of purchase visible'],
                      ['Liquid medicines', 'Allowed in the quantity needed for the trip; keep the prescription or a medical certificate'],
                      ['Solid medicines', 'No restriction'],
                      ['Item refused at security', 'Ask the airport about checking it in the hold, collecting it later, or posting it']],
                     ['<strong>Not on the page:</strong> Air France&rsquo;s own wording and the rule for transfers. Ask Air France if you connect.'])]
e['sources'] = [['https://www.ecologie.gouv.fr/en/public-policies/items-not-permitted-be-carried-airplanes-helicopters-subject-restrictions', 'Unofficial source (French civil aviation authority, DGAC): Ministry of Ecological Transition &mdash; Items not permitted on aircraft']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/air-france/liquids'] = {'official': ['tried 2026-11-17: wwws.airfrance.fr liquids and security pages: timeouts'], 'reliable': ['read 2026-11-19: French ecology ministry DGAC page, updated 2023-10-18 (liquids under 100 mL, 1 L bag)'], 'other': [], 'date': '2026-11-19'}

# ---------- IndiGo (Kannur airport, BCAS) ----------
e = d['IndiGo']['liquids']
e['answer'] = ("IndiGo's pages timed out, so this page gives the Indian security rule as published by Kannur Airport, citing BCAS: liquids in hand baggage only in containers of 100 ml or less, in one clear resealable bag per passenger, and what does not fit goes in checked luggage.")
e['sections'] = [sec('💧 What Indian airport security says about liquids',
                     'From the Kannur International Airport security page (read 19 November 2026; undated). It quotes the BCAS list and is not IndiGo wording.',
                     ['Question', 'Kannur Airport page (BCAS)'],
                     [['Container size', 'Not greater than 100 ml each in hand baggage'],
                      ['Bag', 'One clear resealable plastic bag; each passenger may carry only one'],
                      ['Covered products', 'Gels, lotions, pastes, liquid cosmetics, foams'],
                      ['What does not fit the bag', 'Goes in checked luggage'],
                      ['Flammable liquids, paints, thinners', 'Prohibited in the cabin'],
                      ['Spices, powder or physical', 'Listed as prohibited in the cabin']],
                     ['<strong>Not on the page:</strong> IndiGo&rsquo;s own wording. The page warns that airlines may add measures, so check IndiGo.'])]
e['sources'] = [['https://kannurairport.aero/corporate/security', 'Unofficial source (airport operator, citing BCAS): Kannur International Airport &mdash; Security']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/indigo/liquids'] = {'official': ['tried 2026-11-19: goindigo.in baggage policy and dangerous goods pages: timeouts'], 'reliable': ['read 2026-11-19: Kannur International Airport security page (BCAS 100 ml liquids rule)'], 'other': [], 'date': '2026-11-19'}

# ---------- Aeromexico (AICM guide) ----------
e = d['Aeromexico']['liquids']
e['answer'] = ("Aeromexico's pages did not load, so this page uses the Mexico City airport (AICM) passenger guide: toiletries of liquid, cream, gel, aerosol or mousse consistency in containers of at most 100 ml (3.4 oz) in a resealable transparent bag of no more than 19 x 20 cm. "
               "The guide is a 2014 file, so confirm today's rule.")
e['sections'] = [sec('💧 What the Mexico City airport guide says about liquids',
                     'From the AICM passenger information guide (PDF, 2014), translated from Spanish and read 19 November 2026. It is the airport operator&rsquo;s text, not Aeromexico wording, and it is old.',
                     ['Question', 'AICM guide'],
                     [['Allowed in the cabin', 'Personal-care items of liquid, cream, gel, aerosol or mousse consistency'],
                      ['Container size', 'Not larger than 100 ml (3.4 oz)'],
                      ['Bag', 'Transparent, hermetically resealable (ziploc type), no larger than 19 x 20 cm (7.5 x 8 inches)'],
                      ['Also allowed', 'Juices, baby formula and breast milk when infants travel; prescribed diabetic medicines such as insulin with proof; non-prescription medicines up to 100 ml, including eye saline'],
                      ['Duty-free liquids', 'Handed to the passenger at boarding after the security check; with a connection in the USA or Canada they go in the checked bag']],
                     ['<strong>Not in the guide:</strong> a rule for checked bags and anything after 2014. Ask Aeromexico or check the AICM site.'])]
e['sources'] = [['https://www.aicm.com.mx/informacionalpasajero/Archivos/GuiaAICM2014.pdf', 'Unofficial source (airport operator): Mexico City airport &mdash; Passenger guide (2014)']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/aeromexico/liquids'] = {'official': ['tried 2026-11-19: world.aeromexico.com pages: DNS error (ENOTFOUND); beta.aeromexico.com guide: site error page'], 'reliable': ['read 2026-11-19: AICM passenger guide PDF (2014): liquids 100 ml, 19x20 cm bag'], 'other': [], 'date': '2026-11-19'}

wr('topics_new.json', d)
L = rd('ladder_log.json')
for k, v in log.items(): L[k] = v
wr('ladder_log.json', L)
print('ok')
