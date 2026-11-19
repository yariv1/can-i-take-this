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

def sec(h, p, head, rows, lst=None):
    s = {'h': h, 'p': p, 'table': {'head': head, 'rows': rows}}
    if lst: s['list'] = lst
    return s

# ---------------- Air China ----------------
A = d['Air China']['perfume']
AC_URL = 'https://pcm.ca.amadeus.com/HK/GB/info/Checked-baggage-restrictions/'
caac = [s for s in A['sections'] if 'Chinese aviation authority' in s['h']]
A['answer'] = ("Air China's checked baggage page covers cosmetics that contain alcohol: each container may hold at most 5 L, there is no quantity limit at 24% alcohol or below, "
               "and a passenger may carry at most 5 L of products above 24% and up to 70%. For the cabin, the Chinese aviation authority's guide limits liquids to small travel containers.")
A['sections'] = [sec('🧴 What Air China says about cosmetics that contain alcohol',
                     'From the Air China checked baggage restrictions page, item 9 "Dry ice, liquid drinks, cosmetics containing alcohol, etc." (Hong Kong English edition, read 17 November 2026). Perfume and cologne are cosmetics that contain alcohol, but the page does not name them.',
                     ['Question', 'Air China rule (checked baggage)'],
                     [['Packaging', 'Clearly labelled and in its retail packaging'],
                      ['Size of one container', 'No more than 5 L'],
                      ['Alcohol content of 24% or less', 'No limit on the quantity carried'],
                      ['Alcohol content above 24% and up to 70%', 'A maximum of 5 L per passenger']],
                     ['<strong>Not on the page:</strong> a rule for aerosols such as hairspray, and any rule for the cabin. The page points to separate Air China pages for checked and unchecked baggage.'])] + caac
A['sources'] = [[AC_URL, 'Air China &mdash; Checked baggage restrictions (Hong Kong, English)'], A['sources'][-1] if 'caac' in json.dumps(A['sources'][-1]).lower() else A['sources'][0]]
A['checked'] = CHK; A['unofficial'] = False
log['airline/air-china/perfume-aerosols'] = {'official': ['read 2026-11-17: ' + AC_URL + ' (item 9 cosmetics containing alcohol; no aerosol rule)'], 'reliable': ['CAAC travel guide section kept (read earlier)'], 'other': ['IATA table removed from page: replaced by Air China rule'], 'date': '2026-11-17'}

# ---------------- JetBlue ----------------
J = d['JetBlue']['perfume']
JU = 'https://www.jetblue.com/help/prohibited-items'
J['answer'] = ("JetBlue treats hair spray and other liquids, gels and aerosols in the carry-on under the 3-1-1 rule: containers of 3.4 oz (100 ml) or less, all in one clear resealable quart bag. "
               "It permits hairspray, deodorant and similar toiletries in limited quantities, and lists other aerosols as prohibited flammables.")
J['sections'] = [sec('🧴 What JetBlue says about hairspray and toiletry aerosols',
                     'From the JetBlue page "Prohibited and Permitted with Exception Items" (read 17 November 2026).',
                     ['Question', 'JetBlue rule'],
                     [['Container size in the carry-on', '3.4 oz (100 ml) or less per container'],
                      ['Bag', 'All containers in one clear, resealable one-quart (one-litre) bag, one per customer, sealed and placed in the security bin'],
                      ['Hair spray, shampoo, hair gel, creams', 'Named on the page as liquids, gels and aerosols under the 3-1-1 rule'],
                      ['Hairspray, deodorant and similar toiletries', 'Permitted in limited quantities'],
                      ['Other aerosols', 'Listed as prohibited flammable items, except personal care or toiletry products in limited quantities'],
                      ['Bought after security', 'Liquids, gels and aerosols bought in the sterile area may be taken on board'],
                      ['Medications and medical liquids', 'May be exempt from the quart bag; declare them at the checkpoint']],
                     ['<strong>Not on the page:</strong> a rule for perfume and aerosols in checked bags. JetBlue sends readers to the FAA PackSafe and TSA sites for those.']),
                 sec('US limit for perfume and aerosols in checked bags (TSA)',
                     'The TSA perfume page (a US government page, not JetBlue, read 17 November 2026) says perfume is allowed in checked bags; the total of restricted medicinal and toiletry articles including aerosols is limited to 2 kg (70 oz) or 2 L (68 fl oz) per person, each container to 0.5 kg or 500 ml, and aerosol spray nozzles need caps or other protection.',
                     ['Question', 'TSA rule'],
                     [['Carry-on perfume', '3.4 oz (100 ml) or less'],
                      ['Checked bag total', '2 kg or 2 L per person'],
                      ['One container in a checked bag', '0.5 kg or 500 ml'],
                      ['Spray nozzles', 'Protected by a cap or other suitable means']])]
J['sources'] = [[JU, 'JetBlue &mdash; Prohibited and Permitted with Exception Items'], ['https://tsa.gov/travel/security-screening/whatcanibring/items/perfume', 'Unofficial source: TSA &mdash; Perfume']]
J['checked'] = CHK; J['unofficial'] = False
log['airline/jetblue/perfume-aerosols'] = {'official': ['read 2026-11-17: ' + JU], 'reliable': ['read 2026-11-17: TSA perfume page'], 'other': [], 'date': '2026-11-17'}

# ---------------- Alaska ----------------
K = d['Alaska Airlines']['perfume']
K['answer'] = ("Alaska Airlines' own restricted-items page could not be opened, so this follows the US government rule it flies under: hairspray and perfume of 3.4 oz (100 ml) or less in the carry-on, "
               "and in checked bags a total of 2 kg or 2 L per person, with caps on aerosol nozzles.")
K['sections'] = [sec('🧴 US rule for hairspray and perfume on Alaska flights (TSA)',
                     'Alaska Airlines operates under US rules, and its own prohibited-items page returned an error when we tried to read it. These two pages are from the US Transportation Security Administration, read 17 November 2026; the hairspray page was last updated 29 March 2023. A TSA officer makes the final decision at the checkpoint.',
                     ['Item', 'Carry-on', 'Checked bag'],
                     [['Hairspray', 'Allowed in containers of 3.4 oz (100 ml) or less', 'Allowed; the FAA limits the total of restricted medicinal and toiletry articles including aerosols'],
                      ['Perfume', 'Allowed in containers of 3.4 oz (100 ml) or less', 'Allowed; total 2 kg (70 oz) or 2 L (68 fl oz) per person, each container 0.5 kg or 500 ml'],
                      ['Aerosol nozzles and buttons', '-', 'Must have a cap or other protection against accidental release']],
                     ['<strong>Not read:</strong> any extra Alaska Airlines limit. Confirm with the airline before you fly.'])]
K['sources'] = [['https://tsa.gov/travel/security-screening/whatcanibring/items/hairspray', 'Unofficial source: TSA &mdash; Hairspray'], ['https://tsa.gov/travel/security-screening/whatcanibring/items/perfume', 'Unofficial source: TSA &mdash; Perfume']]
K['checked'] = CHK; K['unofficial'] = True
log['airline/alaska-airlines/perfume-aerosols'] = {'official': ['tried 2026-11-17: alaskaair.com prohibited items page HTTP 406; FAA PackSafe printable chart HTTP 403'], 'reliable': ['read 2026-11-17: TSA hairspray page and TSA perfume page'], 'other': ['none needed: reliable government source read'], 'date': '2026-11-17'}

# ---------------- KLM ----------------
L = d['KLM']['perfume']
L['answer'] = ("KLM's own pages did not load for us, so this follows the Dutch transport inspectorate and the EU: toiletries including aerosols and perfumes may travel in hand or hold baggage under conditions, "
               "large quantities of aerosols are banned from both, and in the cabin each container is limited to 100 ml in one 1-litre bag on flights leaving the EU.")
L['sections'] = [sec('🧴 What the Dutch authority says about perfume and aerosols',
                     'From the Human Environment and Transport Inspectorate (ILT) page "Carrying dangerous goods", read 17 November 2026. KLM is a Dutch airline, so this is the regulator for its home country. It is not a KLM page.',
                     ['Question', 'ILT page'],
                     [['Toiletries, including aerosols and perfumes', 'Can travel in your bags if certain conditions are met'],
                      ['Large quantities of aerosols', 'Banned from both hand and hold baggage (listed with flammable substances)'],
                      ['Permission', 'You may need to ask the airline, through customer service, special assistance or its contact form']],
                     ['<strong>Not on the page:</strong> volume or quantity limits. The page tells readers that airlines may apply stricter rules.']),
                 sec('What EU security rules say about aerosols in the cabin',
                     'From the EU Your Europe page on luggage restrictions, read 17 November 2026, for flights departing from EU airports such as Amsterdam.',
                     ['Question', 'EU rule'],
                     [['Container size', 'No more than 100 ml per container'],
                      ['Bag', 'One transparent plastic bag of up to 1 litre'],
                      ['Larger containers', 'Go in checked baggage'],
                      ['Medicines and baby food', 'Exempt from the 100 ml limit'],
                      ['Duty-free liquids', 'Allowed in the sealed security bag with the receipt, unopened until the final destination'],
                      ['Spray paint, fireworks, acids', 'Prohibited in cabin and checked baggage']])]
L['sources'] = [['https://english.ilent.nl/topics/aviation/passengers-and-residents-near-airports/carrying-dangerous-goods', 'Unofficial source: ILT (Dutch Human Environment and Transport Inspectorate) &mdash; Carrying dangerous goods'], ['https://www.europa.eu/youreurope/citizens/travel/carry/luggage-restrictions/index_en.htm', 'Unofficial source: EU Your Europe &mdash; Luggage restrictions']]
L['checked'] = CHK; L['unofficial'] = True
log['airline/klm/perfume-aerosols'] = {'official': ['tried 2026-11-17: klm.com restricted items hand baggage page timed out twice'], 'reliable': ['read 2026-11-17: ILT carrying dangerous goods page; EU Your Europe luggage restrictions; Schiphol liquids page HTTP 403'], 'other': ['none needed: regulator source read'], 'date': '2026-11-17'}

# ---------------- Ryanair ----------------
R = d['Ryanair']['perfume']
R['answer'] = ("Ryanair's help centre did not open for us (HTTP 403), so this follows the rules that apply on its flights: on flights leaving EU airports each container in the cabin is limited to 100 ml in one 1-litre bag, "
               "and at UK airports the Civil Aviation Authority limits toiletry aerosols such as hairspray and perfume to 0.5 L each and 2 L in total.")
R['sections'] = [sec('🧴 What EU security rules say about perfume and aerosols in the cabin',
                     'From the EU Your Europe page on luggage restrictions, read 17 November 2026. Ryanair is an Irish airline flying mainly from EU airports, but this is the EU rule, not a Ryanair page.',
                     ['Question', 'EU rule'],
                     [['Container size', 'No more than 100 ml per container, aerosols included'],
                      ['Bag', 'One transparent plastic bag of up to 1 litre'],
                      ['Larger containers', 'Go in checked baggage'],
                      ['Medicines and baby food', 'Exempt from the 100 ml limit'],
                      ['Duty-free liquids', 'Sealed security bag with the receipt, not opened before the final destination']]),
                 sec('What the UK Civil Aviation Authority says about perfume and hairspray',
                     'For Ryanair flights from UK airports. From the UK CAA page "Items that are allowed in baggage", read 17 November 2026; the page shows no date.',
                     ['Item', 'UK CAA rule'],
                     [['Toiletry articles including hairspray and perfumes', 'Allowed in checked and carry-on baggage without operator approval'],
                      ['One article', 'No more than 0.5 kg or 0.5 L'],
                      ['All such articles', 'No more than 2 kg or 2 L per person'],
                      ['Aerosol valves', 'Capped or otherwise protected'],
                      ['Cabin liquids over 100 ml', 'Not permitted through the security point']])]
R['sources'] = [['https://www.europa.eu/youreurope/citizens/travel/carry/luggage-restrictions/index_en.htm', 'Unofficial source: EU Your Europe &mdash; Luggage restrictions'], ['https://www.caa.co.uk/Passengers/Before-you-fly/Baggage/Items-that-are-allowed-in-baggage/', 'Unofficial source: UK Civil Aviation Authority &mdash; Items that are allowed in baggage']]
R['checked'] = CHK; R['unofficial'] = True
log['airline/ryanair/perfume-aerosols'] = {'official': ['tried 2026-11-17: help.ryanair.com permitted items section HTTP 403'], 'reliable': ['read 2026-11-17: EU Your Europe luggage restrictions; UK CAA items allowed in baggage'], 'other': ['none needed: regulator sources read'], 'date': '2026-11-17'}

# ---------------- Emirates ----------------
E = d['Emirates']['perfume']
E['answer'] = ("Emirates' dangerous goods page did not load for us, so this follows its home airport: Dubai Airports limits liquids, aerosols and gels in hand baggage to 100 ml per item and one litre in total, in one transparent resealable bag, "
               "with medication and baby milk exempt. The page does not name perfume.")
E['sections'] = [sec('🧴 What Dubai Airports says about aerosols and liquids in hand baggage',
                     'From the Dubai Airports baggage page (dubaiairports.ae), read 17 November 2026; the page shows no date. Dubai is the Emirates hub, but this is the airport operator, not Emirates.',
                     ['Question', 'Dubai Airports'],
                     [['Size of each item', 'No more than 100 ml'],
                      ['Total', 'No more than one litre'],
                      ['Bag', 'One transparent, re-sealable plastic bag inside your hand baggage'],
                      ['Exempt', 'Medication, baby milk or food, and special dietary items'],
                      ['Checked baggage', 'No allowance given; the page says to check the airline baggage policy and keep batteries, e-cigarettes and fuel cells out of checked bags']],
                     ['<strong>Not on the page:</strong> perfume is not named, and the page gives no rule for aerosols in checked bags. Emirates says certain items, perfumes among them, are subject to specific acceptance rules, so confirm with the airline.'])]
E['sources'] = [['https://dubaiairports.ae/information/baggage', 'Unofficial source: Dubai Airports &mdash; Baggage']]
E['checked'] = CHK; E['unofficial'] = True
log['airline/emirates/perfume-aerosols'] = {'official': ['tried 2026-11-17: emirates.com dangerous goods policy timed out three times; search snippet only says perfumes are subject to specific acceptance rules'], 'reliable': ['read 2026-11-17: Dubai Airports baggage page'], 'other': ['none needed: airport operator source read'], 'date': '2026-11-17'}

wr('topics_new.json', d)
L2 = rd('ladder_log.json')
for k, v in log.items(): L2[k] = v
wr('ladder_log.json', L2)
print('ok')
