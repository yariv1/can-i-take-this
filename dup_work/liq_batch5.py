import json
ROOT = 'C:/Users/yariv/Utility Website/can-i-take-this/'
def rd(f): return json.loads(open(ROOT + f, encoding='utf8').read())
def wr(f, d, crlf=True):
    s = json.dumps(d, indent=1, ensure_ascii=False)
    if crlf: s = s.replace('\n', '\r\n')
    open(ROOT + f, 'w', encoding='utf8', newline='').write(s)

d = rd('topics_new.json')
L = rd('ladder_log.json')
CHK = '19 November 2026'
def sec(h, p, head=None, rows=None, lst=None):
    s = {'h': h, 'p': p}
    if head: s['table'] = {'head': head, 'rows': rows}
    if lst: s['list'] = lst
    return s

SRC = ['https://www.gov.br/portos-e-aeroportos/pt-br/assuntos/noticias/2026/07/conheca-as-principais-regras-e-orientacoes-para-evitar-imprevistos-no-embarque', 'Unofficial source (Brazilian government): Ministry of Ports and Airports &mdash; Main rules for boarding, 21 July 2026']
INTRO = 'From the Ministry of Ports and Airports news article "Learn the main rules and guidance to avoid problems at boarding" (21 July 2026, read 19 November 2026, translated from Portuguese). It is government guidance, not GOL wording.'

# ---------- GOL liquids ----------
e = d['GOL']['liquids']
e['answer'] = ("GOL's pages returned an error (403) and the ANAC page showed a captcha, so this page uses the Brazilian Ministry of Ports and Airports: on international flights liquids, creams, pastes and aerosols go in containers of up to 100 ml each, kept in a transparent bag. "
               "The article gives no limit for domestic flights.")
e['sections'] = [sec('💧 What the Brazilian government says about liquids in the cabin', INTRO,
                     ['Question', 'Ministry of Ports and Airports'],
                     [['International flights', 'Liquids, creams, pastes and aerosols in containers of up to 100 ml each, kept in a transparent bag'],
                      ['Domestic flights', 'The article states no liquid limit for domestic travel'],
                      ['Medicines for personal use', 'Allowed in the carry-on; medicines, infant formula and special foods may follow specific rules, especially with a prescription or medical justification'],
                      ['1-litre bag and free shop bottles', 'Not mentioned in the article']],
                     ['<strong>Not in the article:</strong> GOL&rsquo;s own wording. Ask GOL, and check the rule of the airport you fly back from.'])]
e['sources'] = [SRC]
e['checked'] = CHK; e['unofficial'] = True
L['airline/gol/liquids'] = {'official': ['tried 2026-11-19: voegol.com.br baggage pages HTTP 403 (earlier 2026-11-17: also 403)'], 'reliable': ['read 2026-11-19: Brazil Ministry of Ports and Airports news 2026-07-21 (international 100 ml, no domestic limit stated); tried ANAC liquids page: captcha wall, not bypassed'], 'other': [], 'date': '2026-11-19'}

# ---------- GOL power bank ----------
e = d['GOL']['power']
e['answer'] = ("GOL's pages returned an error (403), so this page uses the Brazilian Ministry of Ports and Airports: power banks only in the carry-on, up to two of 100 Wh (about 27,000 mAh) each, with airline approval for 100 to 160 Wh and a ban above 160 Wh.")
e['sections'] = [sec('🔋 What the Brazilian government says about power banks', INTRO,
                     ['Question', 'Ministry of Ports and Airports'],
                     [['Where', 'Only in carry-on baggage, because of the fire and explosion risk'],
                      ['How many', 'Up to two per passenger, each rated up to 100 Wh (about 27,000 mAh)'],
                      ['100 to 160 Wh', 'Needs prior authorization from the airline'],
                      ['Above 160 Wh', 'Prohibited']],
                     ['<strong>Not in the article:</strong> GOL&rsquo;s own wording and rules on use and stowage in flight. Ask GOL.'])]
e['sources'] = [SRC]
e['checked'] = CHK; e['unofficial'] = True
L['airline/gol/power-bank'] = {'official': ['tried 2026-11-19: voegol.com.br baggage pages HTTP 403'], 'reliable': ['read 2026-11-19: Brazil Ministry of Ports and Airports news 2026-07-21 (power banks carry-on only, 2 x 100 Wh, 100-160 approval, over 160 prohibited); tried ANAC power bank news page: captcha wall, not bypassed'], 'other': [], 'date': '2026-11-19'}

# ---------- Kenya Airways liquids (press quoting KAA) ----------
e = d['Kenya Airways']['liquids']
e['answer'] = ("Kenya Airways's baggage pages read for this page do not state a liquid size, and the Kenya Airports Authority pages returned an error (402), so this page uses a Kenyans.co.ke article from March 2022 that quotes KAA: lotions, creams and oils only in containers up to 100 ml, "
               "in a transparent resealable bag of no more than 1 litre, screened separately.")
e['sections'] = [sec('💧 What Kenyan press reports about liquids at the airport',
                     'From a Kenyans.co.ke article, "These personal items are not allowed at JKIA" (3 March 2022, read 19 November 2026). It quotes the Kenya Airports Authority. It is a news report, so treat it as lower reliability and check the current rule with KAA and Kenya Airways.',
                     ['Question', 'As reported'],
                     [['Container size', 'Lotions, creams and oils only in containers of up to 100 ml'],
                      ['Bag', 'A transparent resealable bag; KAA: "The capacity of the transparent plastic bag must not be greater than 1 litre"'],
                      ['Screening', 'Presented and screened separately from the other hand luggage'],
                      ['Items it lists', 'Lotions, perfumes, sprays, gels, pastes (including Vaseline and eye shadow) and pressurised containers such as shaving foam and deodorants'],
                      ['Bought after security, including duty-free', 'In tamper-evident bags, with proof of purchase'],
                      ['Medicine and baby food', 'Allowed in hand luggage if needed during the flight']],
                     ['<strong>Not in the article:</strong> Kenya Airways wording. The Kenya Airways hand baggage, restrictions and security pages we read give bag sizes and prohibited items but no liquid size.'])]
e['sources'] = [['https://www.kenyans.co.ke/news/73544-these-personal-items-are-not-allowed-jkia', 'Unofficial source (news, lower reliability): Kenyans.co.ke &mdash; These personal items are not allowed at JKIA, 3 March 2022']]
e['checked'] = CHK; e['unofficial'] = True
L['airline/kenya-airways/liquids'] = {'official': ['read 2026-11-19: Kenya Airways hand baggage, baggage restrictions, special baggage and baggage security guidelines pages: no liquid size stated'], 'reliable': ['tried 2026-11-19: Kenya Airports Authority hand luggage, security regulations, luggage regulations, before you fly and travel information pages: HTTP 402'], 'other': ['read 2026-11-19: Kenyans.co.ke article 2022-03-03 quoting KAA (100 ml, 1 L bag; lower reliability)'], 'date': '2026-11-19'}

wr('topics_new.json', d)
wr('ladder_log.json', L)
print('ok')
