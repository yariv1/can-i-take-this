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

# ---------- Aer Lingus ----------
e = d['Aer Lingus']['power']
e['answer'] = ("Aer Lingus's Guide to Dangerous Goods (January 2026, revision 5 of 14 April 2026) lets spare lithium-ion batteries and power banks of 100 Wh or less go in the carry-on only, with a maximum of 2 spares per person, "
               "and says power banks must not be used or charged during the flight.")
e['sections'] = [sec('🔋 What Aer Lingus says about power banks',
                     'From the Aer Lingus PDF "Guide to Dangerous Goods" (January 2026, revision 5 dated 14 April 2026), read 19 November 2026.',
                     ['Question', 'Aer Lingus guide'],
                     [['Spare batteries and power banks', 'Carry-on baggage; the table marks checked baggage as not permitted'],
                      ['Power banks', 'Treated as spare batteries because their main purpose is to be a power source'],
                      ['Lithium-ion size', 'Watt-hour rating must not exceed 100 Wh'],
                      ['Lithium metal', 'Lithium content must not exceed 2 g'],
                      ['How many', 'Each person is limited to 2 spare batteries; the operator may approve more'],
                      ['Protection', 'Each battery individually protected against short circuit'],
                      ['In flight', 'Power banks must not be used or charged during the flight'],
                      ['E-cigarettes with batteries', 'Carry-on, individually protected against accidental activation']],
                     ['<strong>Not in the guide:</strong> where to stow the power bank in the cabin. Ask Aer Lingus or follow the crew&rsquo;s instruction.'])]
e['sources'] = [['https://www.aerlingus.com/media/pdfs/guide-to-dangerous-goods.pdf', 'Aer Lingus &mdash; Guide to Dangerous Goods (PDF, January 2026)']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/aer-lingus/power-bank'] = {'official': ['read 2026-11-19: Aer Lingus Guide to Dangerous Goods PDF January 2026 rev 5 (14/04/2026): spare batteries 100 Wh, max 2, power banks no use or charging'], 'reliable': [], 'other': ['IATA guidance text replaced by the airline text'], 'date': '2026-11-19'}

# ---------- Israir ----------
e = d['Israir']['power']
e['answer'] = ("Israir's pages sit behind a waiting-room queue, so this page uses the Israel Airports Authority's Ben Gurion security page: it is forbidden to put lithium-ion and lithium-metal batteries in baggage checked into the aircraft hold, "
               "and the page links to IATA's lithium battery guidance for more detail.")
e['sections'] = [sec('🔋 What Ben Gurion airport says about lithium batteries',
                     'From the Israel Airports Authority page "Ben Gurion Airport" on security (read 19 November 2026; undated). It is airport guidance, not Israir wording.',
                     ['Question', 'Israel Airports Authority'],
                     [['Lithium-ion and lithium-metal batteries in checked baggage', 'Forbidden in baggage checked into the cargo section of the aircraft'],
                      ['Laptops', 'Remove from carry bags in advance at security'],
                      ['More detail', 'The page links to IATA&rsquo;s lithium battery guidance']],
                     ['<strong>Not on the page:</strong> a Wh limit, a number of power banks and whether you may use one on board. Ask Israir, and see the IATA guidance.'])]
e['sources'] = [['https://www.iaa.gov.il/en/airports/ben-gurion/securitybgn/', 'Unofficial source (airport operator): Israel Airports Authority &mdash; Ben Gurion security']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/israir/power-bank'] = {'official': ['tried 2026-11-19: israir.co.il pages redirect to a waiting-room queue (queue-it); not bypassed'], 'reliable': ['read 2026-11-19: Israel Airports Authority Ben Gurion security page (lithium batteries forbidden in checked baggage)'], 'other': [], 'date': '2026-11-19'}

# ---------- Arkia ----------
e = d['Arkia']['power']
e['answer'] = ("Arkia's terms returned an error (403), so this page uses the Israel Airports Authority's Ben Gurion &quot;useful information&quot; page, whose safety list names lithium-ion and lithium-metal batteries among items forbidden in luggage. "
               "The sentence is badly worded, so confirm what it means for a power bank with Arkia.")
e['sections'] = [sec('🔋 What the Ben Gurion safety list says about lithium batteries',
                     'From the Israel Airports Authority Terminal 1 &quot;useful information&quot; page, section &quot;Items forbidden to carry on board&quot; (read 19 November 2026; undated). It is airport text, not Arkia wording.',
                     ['Question', 'Israel Airports Authority'],
                     [['Lithium-ion and lithium-metal batteries', 'Listed as forbidden in luggage to the belly of the plane or in hand luggage'],
                      ['Power banks by name', 'Not mentioned'],
                      ['Wording', 'The sentence is garbled (it mentions sending gas containers), so its exact meaning is unclear']],
                     ['<strong>This conflicts with airline rules</strong> that allow power banks of up to 100 Wh in the carry-on, so do not rely on this line alone. Check Arkia and the IATA guidance.'])]
e['sources'] = [['https://www.iaa.gov.il/en/airports/ben-gurion/terminal1sevices/', 'Unofficial source (airport operator): Israel Airports Authority &mdash; Terminal 1 useful information']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/arkia/power-bank'] = {'official': ['tried 2026-11-19: docs.arkia.co.il general terms and arkia.co.il legal terms HTTP 403'], 'reliable': ['read 2026-11-19: Israel Airports Authority Terminal 1 useful information page (lithium batteries listed as forbidden items; garbled sentence)'], 'other': [], 'date': '2026-11-19'}

# ---------- Air China (CAAC 2025 notice) ----------
e = d['Air China']['power']
e['answer'] = ("Air China's own pages did not give a power bank rule, so this page uses the Civil Aviation Administration of China (CAAC): since 28 June 2025 passengers may not take power banks without a clear 3C mark, or from a recalled model or batch, on domestic flights.")
e['sections'] = [sec('🔋 What the Chinese aviation regulator says about power banks',
                     'From the CAAC news notice of 26 June 2025, "CAAC bans passengers from carrying power banks without 3C marks or under recall on domestic flights" (read 19 November 2026, translated from Chinese). It is regulator guidance, not Air China wording.',
                     ['Question', 'CAAC notice'],
                     [['Power bank with no 3C mark, an unclear mark, or a recalled model or batch', 'Not allowed on domestic flights'],
                      ['Start date', '28 June 2025'],
                      ['Scope', 'Domestic (within-China) flights; the notice does not cover international flights'],
                      ['At security', 'Staff inspect power banks strictly and stop non-compliant ones going on board'],
                      ['Passengers who cannot take theirs', 'Airports set up places to give up or store power banks temporarily'],
                      ['Information', 'Warnings by broadcast, screens, posters and prompts at security and check-in']],
                     ['<strong>Not in the notice:</strong> Wh limits and use in flight. Those come from older CAAC notices and Air China&rsquo;s own rules, so confirm them with Air China.'])]
e['sources'] = [['https://www.caac.gov.cn/XWZX/MHYW/202506/t20250626_227805.html', 'Unofficial source (aviation regulator): CAAC &mdash; Ban on power banks without 3C marks, 26 June 2025']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/air-china/power-bank'] = {'official': ['tried 2026-11-19: airchina.com power bank pages: no readable rule (earlier attempts logged)'], 'reliable': ['read 2026-11-19: CAAC notice of 2025-06-26 on 3C-marked power banks, domestic flights from 2025-06-28'], 'other': [], 'date': '2026-11-19'}

# ---------- China Southern (CAAC 2014 notice) ----------
e = d['China Southern']['power']
e['answer'] = ("China Southern's own pages did not give a power bank rule, so this page uses the Civil Aviation Administration of China (CAAC) notice on power banks: carry-on only, up to 100 Wh without approval, 100-160 Wh with airline approval and no more than two, "
               "over 160 Wh forbidden, and no use to charge other devices in flight.")
e['sections'] = [sec('🔋 What the Chinese aviation regulator says about power banks',
                     'From the CAAC notice on rules for passengers carrying power banks (published 7 August 2014; the page shows later versions of the notice from 2015), read 19 November 2026, translated from Chinese. It is regulator guidance, not China Southern wording.',
                     ['Question', 'CAAC notice'],
                     [['Whose power bank', 'For the passenger&rsquo;s own use only'],
                      ['Where', 'Carry-on or on the person; strictly prohibited in checked baggage'],
                      ['Up to 100 Wh', 'Allowed without airline approval'],
                      ['100 to 160 Wh', 'Only with airline approval, and no more than two per passenger'],
                      ['Over 160 Wh', 'Prohibited'],
                      ['No rating marked', 'Prohibited if the rated energy is not marked and cannot be worked out from other marked values'],
                      ['In flight', 'Do not use it to charge other devices; if it has a switch, keep it off for the whole flight'],
                      ['Working out Wh', 'Volts x amp-hours; if only mAh is marked, divide by 1,000 first']],
                     ['<strong>Newer rule:</strong> since 28 June 2025 domestic flights also ban power banks with no clear 3C mark. China Southern may apply stricter limits.'])]
e['sources'] = [['http://www.caac.gov.cn/XXGK/XXGK/TZTG/201511/t20151105_11173.html', 'Unofficial source (aviation regulator): CAAC &mdash; Rules on passengers carrying power banks']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/china-southern/power-bank'] = {'official': ['tried 2026-11-19: csair.com power bank pages: no readable rule (earlier attempts logged)'], 'reliable': ['read 2026-11-19: CAAC notice on passengers carrying power banks (2014-08-07 text, 2015 republished)'], 'other': [], 'date': '2026-11-19'}

wr('topics_new.json', d)
L = rd('ladder_log.json')
for k, v in log.items(): L[k] = v
wr('ladder_log.json', L)
print('ok')
