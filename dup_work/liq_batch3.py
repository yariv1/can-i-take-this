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

# ---------- Oman Air (Oman Airports) ----------
e = d['Oman Air']['liquids']
e['answer'] = ("Oman Air's own pages (the Dangerous Goods notice and the baggage page) give no liquid size, so this page uses Oman Airports, the operator of Muscat airport: liquids or gels of 100 ml or less in hand luggage, all in a see-through plastic bag provided at the airport.")
e['sections'] = [sec('💧 What Oman Airports says about liquids in hand luggage',
                     'From the Oman Airports page "Security and customs" (read 19 November 2026; undated). It is airport guidance, not Oman Air wording. Oman Air&rsquo;s "Prohibited dangerous goods" notice (September 2022) says only that medical and toiletry items may not exceed 100 ml per container, with a total of 2 kg or 2 L, under the local authority&rsquo;s limits.',
                     ['Question', 'Oman Airports'],
                     [['Liquids and gels in hand luggage', 'Allowed at 100 ml or less'],
                      ['Bag', 'All liquids in a see-through plastic bag, provided at the airport'],
                      ['Screening', 'All hold and hand baggage is X-rayed after check-in; laptops and phones may need separate screening'],
                      ['Needles and syringes for a medical condition', 'Declare them and bring proof of the medical need'],
                      ['Prohibited items', 'You must disclose and surrender them before boarding; the airport and airlines do not store or return them'],
                      ['Duty-free', 'Not mentioned']],
                     ['<strong>Not on the page:</strong> the 1-litre bag size and exemptions for baby food. Ask Oman Air for those.'])]
e['sources'] = [['https://www.omanairports.co.om/en/security-customs', 'Unofficial source (airport operator): Oman Airports &mdash; Security and customs'],
                ['https://www.omanair.com/pdf/DangerNotice.pdf', 'Oman Air &mdash; Notice to passengers: prohibited dangerous goods (PDF, 2022)']]
e['checked'] = CHK; e['unofficial'] = True
L['airline/oman-air/liquids'] = {'official': ['read 2026-11-19: Oman Air dangerous goods notice PDF (2022): medical/toiletries 100 ml per container, 2 kg/L total; Oman Air baggage page has no liquids size'], 'reliable': ['read 2026-11-19: Oman Airports security and customs page (100 ml, see-through bag)'], 'other': [], 'date': '2026-11-19'}

# ---------- flydubai (Dubai Airports FAQ) ----------
e = d['flydubai']['liquids']
e['answer'] = ("flydubai's hand baggage and forbidden items pages timed out, so this page uses the Dubai Airports FAQ: liquids, aerosols and gels in the cabin at a capacity of no more than 100 ml, placed in a clear re-sealable plastic bag that is completely sealed.")
e['sections'] = [sec('💧 What Dubai Airports says about liquids in hand baggage',
                     'From the Dubai Airports FAQ, "Carry-on" section (read 19 November 2026; undated). It is airport guidance, not flydubai wording. The Dubai Airports baggage regulations page did not carry liquid text.',
                     ['Question', 'Dubai Airports FAQ'],
                     [['Liquids, aerosols and gels (LAGs)', 'Capacity of not more than 100 ml each'],
                      ['Bag', 'A clear re-sealable plastic bag, completely sealed or closed'],
                      ['1-litre bag size, exemptions, duty-free', 'Not on this page']],
                     ['<strong>Not on the page:</strong> the bag size, exemptions for medicine and baby food, and duty-free rules. Ask flydubai or check the Dubai Airports guidance.'])]
e['sources'] = [['https://dubaiairports.ae/faqs', 'Unofficial source (airport operator): Dubai Airports &mdash; FAQs']]
e['checked'] = CHK; e['unofficial'] = True
L['airline/flydubai/liquids'] = {'official': ['tried 2026-11-19: flydubai.com forbidden items page timeout, hand baggage page timeout (retried, user-interrupted once)'], 'reliable': ['read 2026-11-19: Dubai Airports FAQ carry-on answer (100 ml, clear re-sealable bag); tried Dubai Airports baggage regulations page: no liquids text'], 'other': [], 'date': '2026-11-19'}

# ---------- Middle East Airlines: log real attempts, page stays on global rule ----------
k = 'airline/middle-east-airlines/liquids'
L[k] = {'official': ['tried 2026-11-19: mea.com.lb liquids and food restricted items page HTTP 403 (also 403 on hand baggage, flammable, luggage and baggage information pages)'], 'reliable': ['read 2026-11-17: Beirut airport site home page: no liquids rule; tried 2026-11-19: Beirut airport search for passenger liquids page: none found'], 'other': ['tried 2026-11-17: 961 article on Lebanon ISF travel rules returned only a headline; page stays on the global IATA rule'], 'date': '2026-11-19'}

wr('topics_new.json', d)
wr('ladder_log.json', L)
print('ok')
