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

# ---- Air China power bank: official page now read ----
e = d['Air China']['power']
e['answer'] = ("Air China's lithium battery page treats power banks as spare batteries that must travel in the cabin, not in checked bags: up to 100 Wh is allowed, 100-160 Wh needs the airline's approval with at most two spares, "
               "over 160 Wh is prohibited, and a power bank may not be used to charge devices in flight.")
e['sections'] = [sec('🔋 What Air China says about power banks',
                     'From the Air China mobile site page "Lithium battery" (read 19 November 2026, translated from Chinese; the page shows no date).',
                     ['Question', 'Air China wording'],
                     [['Spare batteries up to 100 Wh', 'May be carried on board'],
                      ['100 Wh to 160 Wh', 'Only with airline approval; at most two spare batteries of this size; they cannot be checked'],
                      ['Over 160 Wh', 'Prohibited in carry-on and checked baggage'],
                      ['Power banks', 'Count as spare batteries and must be carried in the cabin, not checked'],
                      ['Power bank of 100-160 Wh', 'Carrier approval needed; not to be used to charge electronic devices in flight'],
                      ['Power bank with a power switch', 'Keep it switched off for the whole flight'],
                      ['Protection', 'Each spare battery protected against short circuits: original retail packaging, tape over the terminals, or a separate plastic bag or case']],
                     ['<strong>Not on this page:</strong> where to stow a power bank and the domestic 3C-mark ban. The regulator&rsquo;s notice below covers the 3C rule.']),
                 sec('Chinese regulator: power banks without a 3C mark',
                     'From the Civil Aviation Administration of China (CAAC) news notice of 26 June 2025, translated from Chinese and read 19 November 2026. It is regulator guidance, not Air China wording.',
                     ['Question', 'CAAC notice'],
                     [['Power bank with no 3C mark, an unclear mark, or a recalled model or batch', 'Not allowed on domestic flights'],
                      ['Start date', '28 June 2025'],
                      ['Scope', 'Domestic (within-China) flights only'],
                      ['At security', 'Staff stop non-compliant power banks; airports set up places to give up or store them']])]
e['sources'] = [['https://m.airchina.com.cn/c/invoke/xlxxnext/xlxxnext6@pg', 'Air China &mdash; Lithium battery'],
                ['https://www.caac.gov.cn/XWZX/MHYW/202506/t20250626_227805.html', 'Unofficial source (aviation regulator): CAAC &mdash; Ban on power banks without 3C marks, 26 June 2025']]
e['checked'] = CHK; e['unofficial'] = False
L['airline/air-china/power-bank'] = {'official': ['read 2026-11-19: Air China mobile site lithium battery page m.airchina.com.cn (power banks cabin only, 100 Wh, 100-160 Wh approval, over 160 Wh prohibited, no charging in flight)'], 'reliable': ['read 2026-11-19: CAAC notice of 2025-06-26 on 3C-marked power banks, domestic flights from 2025-06-28'], 'other': [], 'date': '2026-11-19'}

# ---- China Southern power bank: official page now read ----
e = d['China Southern']['power']
e['answer'] = ("China Southern's English page on power banks and spare lithium batteries says they can only go in the carry-on, up to 100 Wh is fine, 100-160 Wh must be declared for approval with at most 2 spares, "
               "over 160 Wh is forbidden, and a power bank must stay off for the whole flight and cannot charge a device.")
e['sections'] = [sec('🔋 What China Southern says about power banks',
                     'From the China Southern page on power banks and spare lithium batteries (csair.com, English, read 19 November 2026; the page shows no date).',
                     ['Question', 'China Southern wording'],
                     [['Where', 'Spare lithium batteries and power banks can only be placed in carry-on baggage'],
                      ['Up to 100 Wh', 'No declaration needed; a reasonable amount may be carried'],
                      ['Over 100 Wh up to 160 Wh', 'Declare to China Southern for approval; limited to 2 spare batteries in the carry-on'],
                      ['Over 160 Wh', 'Forbidden (powered wheelchairs with lithium batteries are excepted)'],
                      ['Protection', 'Each battery in its original retail packaging, a plastic bag or a protective case, or with tape over exposed electrodes'],
                      ['In flight', 'Power banks must be powered off for the whole flight and cannot charge devices on the plane'],
                      ['Damaged or recalled batteries', 'Prohibited'],
                      ['No clear power rating', 'Prohibited']],
                     ['<strong>Not on this page:</strong> where to stow a power bank. The page applies its Wh tiers to spare lithium batteries and does not separately restate them for power banks, so confirm with China Southern if unsure.']),
                 sec('Chinese regulator: older CAAC notice',
                     'From the CAAC notice on rules for passengers carrying power banks (published 7 August 2014, republished 2015), translated from Chinese and read 19 November 2026. It is regulator guidance, not China Southern wording.',
                     ['Question', 'CAAC notice'],
                     [['Whose power bank', 'For the passenger&rsquo;s own use only'],
                      ['100 to 160 Wh', 'Only with airline approval, and no more than two per passenger'],
                      ['No rating marked', 'Prohibited if the rated energy is not marked and cannot be worked out'],
                      ['Working out Wh', 'Volts x amp-hours; if only mAh is marked, divide by 1,000 first']])]
e['sources'] = [['https://www.csair.com/sg/en/orders/order/lkxlzldcdyxgd/', 'China Southern &mdash; Safety tips for transporting lithium batteries'],
                ['http://www.caac.gov.cn/XXGK/XXGK/TZTG/201511/t20151105_11173.html', 'Unofficial source (aviation regulator): CAAC &mdash; Rules on passengers carrying power banks']]
e['checked'] = CHK; e['unofficial'] = False
L['airline/china-southern/power-bank'] = {'official': ['read 2026-11-19: China Southern English page csair.com lkxlzldcdyxgd (power banks carry-on only, 100 Wh, 100-160 Wh approval max 2, over 160 Wh forbidden, no charging in flight)'], 'reliable': ['read 2026-11-19: CAAC notice on passengers carrying power banks (2014-08-07 text, 2015 republished)'], 'other': [], 'date': '2026-11-19'}

# ---- Gulf Air liquids: correct the status code ----
e = d['Gulf Air']['liquids']
e['answer'] = e['answer'].replace('(403 and 402)', '(403)')
L['airline/gulf-air/liquids']['official'] = ['tried 2026-11-19: gulfair.com baggage information page HTTP 403 (also HTTP 403 earlier)']

# ---- timed-out pages: log the real retries (second attempt 2026-11-19, plain fetch and curl, 25 s) ----
def addtry(key, text):
    if key in L:
        L[key]['official'] = [x for x in L[key]['official'] if x != text] + [text]
addtry('airline/klm/alcohol', 'retried 2026-11-19: klm.com restricted items hand baggage page: timeout again on WebFetch (60 s) and on curl (25 s)')
addtry('airline/etihad-airways/alcohol', 'retried 2026-11-19: etihad.com prohibited items page: timeout again on WebFetch (60 s) and curl (25 s)')
addtry('airline/indigo/liquids', 'retried 2026-11-19: goindigo.in dangerous goods policy page: timeout again on curl (25 s)')
addtry('airline/united/alcohol', 'retried 2026-11-19: united.com dangerous goods page: timeout again on curl (25 s)')

wr('topics_new.json', d)
wr('ladder_log.json', L)
print('ok')
