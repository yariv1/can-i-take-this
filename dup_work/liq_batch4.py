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

# ---------- Alaska (airline news posts) ----------
e = d['Alaska Airlines']['liquids']
e['answer'] = ("Alaska's own news posts tell travellers that the TSA allows one quart-sized bag of liquids, aerosols, gels, creams and pastes, each item 3.4 ounces (100 ml) or less, and that larger or extra liquids must be checked. "
               "Alaska's current baggage pages did not open for us, so these posts (2022 and 2023) are the newest Alaska wording we read.")
e['sections'] = [sec('💧 What Alaska says about liquids at security',
                     'From two posts on news.alaskaair.com: "10 travel tips to soak up the last of summer" (31 August 2022) and "How to travel like an Alaska Airlines pro" (31 March 2023), read 19 November 2026.',
                     ['Question', 'Alaska wording'],
                     [['What you may carry', 'One quart-sized bag of liquids, aerosols, gels, creams and pastes'],
                      ['Each item', '3.4 ounces (100 milliliters) or less'],
                      ['Larger or extra liquids', 'You need to check them'],
                      ['At the checkpoint', 'Keep the bag easy to reach; in general lanes put it in a bin by itself for x-ray'],
                      ['TSA PreCheck and similar programs', 'Members can keep liquids and laptops in the carry-on']],
                     ['<strong>Not in the posts:</strong> exemptions for medicine and baby items, duty-free bottles, and anything newer than 2023. The TSA officer makes the final call.'])]
e['sources'] = [['https://news.alaskaair.com/alaska-airlines/summer-travel-tips/', 'Alaska Airlines &mdash; 10 travel tips (news, 2022)'],
                ['https://news.alaskaair.com/guest-experience/how-to-travel-like-an-alaska-airlines-pro/', 'Alaska Airlines &mdash; How to travel like an Alaska Airlines pro (news, 2023)']]
e['checked'] = CHK; e['unofficial'] = False
L['airline/alaska-airlines/liquids'] = {'official': ['tried 2026-11-19: alaskaair.com travel tips page HTTP 406', 'read 2026-11-19: news.alaskaair.com summer travel tips (2022-08-31) and how to travel like a pro (2023-03-31): one quart bag, 3.4 oz, check larger liquids'], 'reliable': [], 'other': ['IATA text replaced by the airline posts'], 'date': '2026-11-19'}

# ---------- United (TSA) ----------
e = d['United']['liquids']
e['answer'] = ("United's pages timed out, so this page gives the TSA rule on liquids, aerosols and gels: a quart-sized bag of containers of 3.4 ounces (100 ml) or less in the carry-on, larger containers in checked baggage, and medications and infant and child nourishment exempt.")
e['sections'] = [sec('💧 What the TSA says about liquids, aerosols and gels',
                     'From the TSA page "Liquids, Aerosols, and Gels Rule" (read 19 November 2026; undated). It is a US federal rule, not United wording.',
                     ['Question', 'TSA wording'],
                     [['Carry-on', 'A quart-sized bag of liquids, aerosols, gels, creams and pastes'],
                      ['Container size', 'Travel-sized, 3.4 ounces (100 milliliters) or less per item'],
                      ['Larger containers', 'Pack them in checked baggage'],
                      ['Exemptions', 'Medications, and infant and child nourishment; the page links to separate pages with details']],
                     ['<strong>Not on the page:</strong> United&rsquo;s own wording, how many bags are allowed, and duty-free bottles. Ask United about those.'])]
e['sources'] = [['https://www.tsa.gov/travel/security-screening/liquids-aerosols-gels-rule', 'Unofficial source (US government): TSA &mdash; Liquids, aerosols, and gels rule']]
e['checked'] = CHK; e['unofficial'] = True
L['airline/united/liquids'] = {'official': ['tried 2026-11-19: united.com pages: WebFetch timeouts (60 s) and curl timeout (25 s); search of united.com for liquids returned no United page'], 'reliable': ['read 2026-11-19: TSA liquids, aerosols and gels rule page'], 'other': [], 'date': '2026-11-19'}

wr('topics_new.json', d)
wr('ladder_log.json', L)
print('ok')
