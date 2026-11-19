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

# ---------- El Al ----------
e = d['El Al']['perfume']
e['answer'] = ("El Al's terms of carriage say medicines and toiletries needed during the journey, such as hairsprays and perfumes, may be carried in limited quantities, "
               "while compressed gases and flammable liquids such as lighter fuel are forbidden in passenger baggage. The El Al dangerous goods table covers alcohol (24% to 70%, 5 L per person) but has no perfume row.")
e['sections'] = [sec('🧴 What El Al says about hairsprays and perfumes',
                     'From the El Al summary of terms of contract (a PDF created in June 2018) and the El Al table "Allowable Dangerous Goods carried by passengers on Aircraft" (document ENGLY-443-069, revision of October 2022), both read 17 November 2026.',
                     ['Question', 'El Al wording'],
                     [['Hairsprays and perfumes', 'Medicines and toiletries in limited quantities required during the journey may be carried'],
                      ['Compressed gases (butane, oxygen, gas cylinders)', 'Must not be carried in passenger baggage'],
                      ['Flammable liquids and solids (lighter fuel, paints, thinners, fire lighters)', 'Must not be carried in passenger baggage'],
                      ['Alcoholic drinks of 24% to 70%', 'Allowed in carry-on and checked bags, 5 L net per person, no airline approval needed'],
                      ['Drinks under 24% (wine, beer)', 'No restriction'],
                      ['Insulin syringes', 'Allowed in both bags, no approval']],
                     ['<strong>Not in the El Al papers:</strong> a quantity in litres for perfume, and the carry-on liquid size. The English liquids page of elal.com did not load for us, so check the 100 ml rule with El Al or with the Israel Airports Authority before you fly.'])]
e['sources'] = [['https://book.elal.com/newBooking/pdfTicketLinks/ENGLISH.pdf', 'El Al &mdash; Summary of terms of contract (PDF, 2018)'],
                ['https://www.elal.com/SiteCollectionDocuments/Baggage/Materials/Dangerous-EN-May19.pdf', 'El Al &mdash; Allowable dangerous goods carried by passengers (PDF, revision October 2022)']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/el-al/perfume-aerosols'] = {'official': ['read 2026-11-17: El Al summary of terms of contract PDF (2018): hairsprays and perfumes in limited quantities; read 2026-11-17: El Al dangerous goods table PDF (rev. Oct 2022): alcohol 24-70% 5 L, no perfume row; elal.com liquids pages returned empty content'], 'reliable': [], 'other': ['IATA table removed from page: replaced by the airline text'], 'date': '2026-11-17'}

# ---------- Air Arabia ----------
e = d['Air Arabia']['perfume']
e['answer'] = ("Air Arabia's prohibited items page lets toiletries and aerosols travel in checked baggage up to 2 kg or 2 L per passenger and 0.5 kg or 0.5 L per item, with the release valve protected. "
               "The page says nothing about perfume by name or about the cabin, and it bans disabling sprays such as pepper spray in both bags.")
e['sections'] = [sec('🧴 What Air Arabia says about toiletries and aerosols',
                     'From the Air Arabia help page "Prohibited items" under baggage enquiries (read 17 November 2026; the page shows no date).',
                     ['Question', 'Air Arabia rule'],
                     [['Toiletries and aerosols in checked baggage', 'Permitted within limits'],
                      ['Total per passenger', 'No more than 2 kg or 2 L'],
                      ['One item', 'No more than 0.5 kg or 0.5 L'],
                      ['Aerosol release valve', 'Must be protected against accidental release'],
                      ['Pepper spray, mace and other disabling sprays', 'Banned in cabin baggage and on the person; not accepted in checked baggage'],
                      ['Lighter fuel, heater fuel, paint, butane, propane', 'Listed as dangerous goods'],
                      ['Perfume and cologne by name', 'Not mentioned']],
                     ['<strong>Not on the page:</strong> the cabin liquid limit and a rule for aerosols in the cabin. Check the departure airport&rsquo;s 100 ml rule, and ask Air Arabia if you plan to carry perfume in the cabin.'])]
e['sources'] = [['https://www.airarabia.com/en/help/baggage-enquiries/prohibited-items_baggage-enquiries', 'Air Arabia &mdash; Prohibited items (baggage enquiries)']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/air-arabia/perfume-aerosols'] = {'official': ['read 2026-11-17: https://www.airarabia.com/en/help/baggage-enquiries/prohibited-items_baggage-enquiries (checked toiletries and aerosols 2 kg/2 L, 0.5 each; no perfume, no cabin rule)'], 'reliable': [], 'other': ['IATA table removed from page: replaced by the airline text'], 'date': '2026-11-17'}

# ---------- Aegean (EU rule, Commission page) ----------
e = d['Aegean']['perfume']
e['answer'] = ("Aegean's own pages returned an error (403), so this is the EU rule that applies on departures from Athens and every other EU airport: perfume and aerosols count as liquids, "
               "so each container in the cabin holds at most 100 ml, all inside one transparent resealable bag of up to one litre.")
e['sections'] = [sec('🧴 What the EU rule says about perfume and aerosols in the cabin',
                     'From the European Commission page "Information for air travellers" (aviation security, read 17 November 2026; the page shows no date). It is the rule of the EU, not Aegean wording, so check Aegean for anything stricter.',
                     ['Question', 'EU rule'],
                     [['What counts as a liquid', 'Gels, aerosols, pastes, lotions, liquid-solid mixtures; the page lists perfumes and shaving foam among examples'],
                      ['Container size', 'Each container no more than 100 ml'],
                      ['Bag', 'One transparent re-sealable plastic bag of up to one litre'],
                      ['Duty-free', 'Allowed if the item and the receipt stay sealed in the security bag given at purchase'],
                      ['Medicines, baby food and milk', 'May exceed 100 ml for use during the trip; you may be asked to prove they are genuine'],
                      ['Banned items', 'Some are banned in both hand and hold bags, and the page points to a separate hold-luggage list']],
                     ['<strong>Not on this page:</strong> Aegean&rsquo;s own limits for aerosols in the hold. Ask Aegean if you pack large sprays in a checked bag.'])]
e['sources'] = [['https://transport.ec.europa.eu/transport-modes/air/aviation-security/information-air-travellers_en', 'Unofficial source: European Commission &mdash; Information for air travellers']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/aegean/perfume-aerosols'] = {'official': ['tried 2026-11-17: en.aegeanair.com dangerous goods, liquids in baggage, conditions and notices, baggage allowance pages: all HTTP 403'], 'reliable': ['read 2026-11-17: European Commission information for air travellers page (EU liquids rule); tried Athens airport aia.gr security page HTTP 403'], 'other': [], 'date': '2026-11-17'}

# ---------- Israir (Israel Airports Authority + Mako) ----------
e = d['Israir']['perfume']
e['answer'] = ("Israir's baggage pages sit behind a waiting-room wall, so this is the Ben Gurion airport side: the Israel Airports Authority lets duty-free perfumes and sprays through only sealed in the shop packet, "
               "and a January 2026 Mako article says Ben Gurion officially follows the European 100 ml and 1-litre bag rule.")
e['sections'] = [sec('🧴 What Ben Gurion airport says about perfume and sprays',
                     'From the Israel Airports Authority Ben Gurion security page (read 17 November 2026, undated). These are airport rules, not Israir wording.',
                     ['Question', 'Israel Airports Authority'],
                     [['Duty-free perfumes, alcohol and sprays bought at Ben Gurion', 'Can be taken to Europe or to the USA when sealed in the special packet from the shop'],
                      ['Liquids from home or other shops', 'Not covered by the easing'],
                      ['US first stop', 'The sealed packet must go into the suitcase there'],
                      ['Hand luggage, forbidden items', 'The page names scissors, knives, nail files, pepper spray and work tools']],
                     ['<strong>Not on the page:</strong> the 100 ml limit. That figure comes from the news article below.']),
                 sec('What the press says about the 100 ml rule',
                     'From a Mako travel article by Ilan Arnon (28 January 2026, a news outlet, so lower reliability). It does not name Israir.',
                     ['Question', 'As reported'],
                     [['Container size', 'Each liquid container up to 100 ml'],
                      ['Bag', 'One transparent resealable bag, up to 1 litre in total'],
                      ['Duty-free perfume over 100 ml', 'Only in the sealed, unopened shop bag with the receipt inside'],
                      ['Enforcement', 'Passengers report it is applied unevenly, and the article advises not to rely on that']])]
e['sources'] = [['https://www.iaa.gov.il/en/airports/ben-gurion/securitybgn/', 'Unofficial source (airport operator): Israel Airports Authority &mdash; Ben Gurion security'],
                ['https://www.mako.co.il/travel-israel/Article-a5263f9867afb91026.htm', 'Unofficial source (news, lower reliability): Mako &mdash; liquids at Ben Gurion, 28 January 2026']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/israir/perfume-aerosols'] = {'official': ['tried 2026-11-17: israir.co.il baggage policy and terms pages redirect to a waiting-room queue (queue-it); not bypassed'], 'reliable': ['read 2026-11-17: Israel Airports Authority Ben Gurion security page'], 'other': ['read 2026-11-17: Mako article 2026-01-28 (liquids 100 ml / 1 L at Ben Gurion; lower reliability)'], 'date': '2026-11-17'}

# ---------- Arkia ----------
e = d['Arkia']['perfume']
e['answer'] = ("Arkia's contract terms (arkia.co.il and docs.arkia.co.il) returned an error (403), so this is the Israeli airport side: Ben Gurion applies a 100 ml limit per container in one 1-litre bag, "
               "and duty-free perfume over 100 ml must stay in the sealed shop bag with its receipt.")
e['sections'] = [sec('🧴 What Israeli airport sources say before an Arkia flight',
                     'From the Israel Airports Authority Ben Gurion security page (undated) and a Mako article of 28 January 2026, both read 17 November 2026. Neither names Arkia, so confirm with Arkia, especially for flights from Eilat or abroad.',
                     ['Question', 'Source says'],
                     [['Liquids in the cabin', 'Mako: containers up to 100 ml in a single transparent resealable bag of 1 litre'],
                      ['Perfume bought in duty-free', 'IAA: sealed in the shop packet. Mako: over 100 ml only unopened, with the receipt inside'],
                      ['Spray products', 'IAA: duty-free sprays may go to Europe and the USA when sealed; Mako quotes a luggage firm saying Ben Gurion rarely objects to sprays, while other airports apply 100 ml'],
                      ['Pepper spray', 'IAA: not allowed in hand luggage']],
                     ['<strong>Not found:</strong> an Arkia page on perfume, aerosols or liquids; the airline only lists broad dangerous goods in its terms, so ask Arkia if you carry a large spray.'])]
e['sources'] = [['https://www.iaa.gov.il/en/airports/ben-gurion/securitybgn/', 'Unofficial source (airport operator): Israel Airports Authority &mdash; Ben Gurion security'],
                ['https://www.mako.co.il/travel-israel/Article-a5263f9867afb91026.htm', 'Unofficial source (news, lower reliability): Mako &mdash; liquids at Ben Gurion, 28 January 2026']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/arkia/perfume-aerosols'] = {'official': ['tried 2026-11-17: docs.arkia.co.il general terms HTTP 403; arkia.co.il legal terms HTTP 403'], 'reliable': ['read 2026-11-17: Israel Airports Authority Ben Gurion security page'], 'other': ['read 2026-11-17: Mako article 2026-01-28 (lower reliability)'], 'date': '2026-11-17'}

wr('topics_new.json', d)
L = rd('ladder_log.json')
for k, v in log.items(): L[k] = v
L['airline/middle-east-airlines/perfume-aerosols'] = {
  'official': ['tried 2026-11-17: mea.com.lb liquids and food, hand baggage, flammable and chemical items, luggage on MEA, baggage information pages: all HTTP 403'],
  'reliable': ['read 2026-11-17: Beirut airport site (beirutairport.gov.lb) home page: only lithium batteries and fresh produce rules, no liquids or aerosols rule'],
  'other': ['tried 2026-11-17: 961 article on Lebanon ISF travel rules returned only a headline; page stays on the global IATA rule'], 'date': '2026-11-17'}
wr('ladder_log.json', L)
print('ok')
