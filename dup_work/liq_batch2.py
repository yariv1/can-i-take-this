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

# ---------- Asiana power bank: official notice now read ----------
e = d['Asiana']['power']
e['answer'] = ("Asiana's notice \"Carry-on regulations and storage guidelines for power banks and electronic cigarettes\" (posted 17 April 2026, as of 20 April) bans power banks from checked baggage, bans using or charging them on board, "
               "and tells passengers to keep them on their person or in the seat pocket, not in the overhead bins. Over 100 Wh and up to 160 Wh needs airline approval, and over 160 Wh is prohibited.")
e['sections'] = [sec('🔋 What Asiana says about power banks',
                     'From the Asiana notice posted 17 April 2026 on flyasiana.com (Thailand English site), read 19 November 2026. The quantity table is garbled in the page text, so the counts below are the ones the notice states in words.',
                     ['Question', 'Asiana notice'],
                     [['Checked baggage', 'Power banks and spare batteries are prohibited'],
                      ['Using or charging on board', 'Strictly prohibited, for power banks and e-cigarettes'],
                      ['Overhead bins', 'Do not store power banks or e-cigarettes there; keep them on your person or in the seat pocket in front of you'],
                      ['Over 100 Wh up to 160 Wh', 'Up to two power banks and spare batteries, with airline approval'],
                      ['Over 160 Wh', 'Prohibited'],
                      ['Short-circuit protection', 'Each battery in a separate zipper bag, or tape over the terminals, or a protective cap'],
                      ['If a battery overheats or swells', 'Tell the cabin crew immediately']],
                     ['<strong>Unclear in the page text:</strong> the exact count for batteries of 100 Wh or less (the table seems to give 2 power banks and 5 spare batteries, but its columns are garbled). Check Asiana&rsquo;s notice before you fly.']),
                 sec('Korean transport ministry: the national rule',
                     'From the Korea Policy Briefing article on the 2-power-bank limit (April 2026), read 19 November 2026. It is government guidance, not Asiana wording.',
                     ['Question', 'Korean ministry (MOLIT)'],
                     [['Number per person', 'Up to 2 power banks from 20 April 2026'],
                      ['Size', '160 Wh or less, about 43,000 mAh each'],
                      ['Using a power bank in the cabin', 'Fully banned, including to charge a phone']])]
e['sources'] = [['https://flyasiana.com/C/TH/EN/customer/notice/detail?id=CM202604100002528761', 'Asiana Airlines &mdash; Carry-on regulations and storage guidelines for power banks and electronic cigarettes'],
                ['https://www.korea.kr/news/policyNewsView.do?newsId=148962298', 'Unofficial source (Korean government): Korea Policy Briefing &mdash; Power banks, 2 per person from the 20th']]
e['checked'] = CHK; e['unofficial'] = False
L['airline/asiana/power-bank'] = {'official': ['read 2026-11-19: Asiana notice 2026-04-17 on power bank and e-cigarette carry-on rules (flyasiana.com TH English site): checked ban, no use or charging, no overhead bins, 100-160 Wh approval; earlier notices (Jan 2026) and restricted items page timed out'], 'reliable': ['read 2026-11-19: Korea Policy Briefing policy news on the 2-power-bank limit (April 2026)'], 'other': [], 'date': '2026-11-19'}

# ---------- Aer Lingus liquids ----------
e = d['Aer Lingus']['liquids']
e['answer'] = ("Aer Lingus's own pages give the EU rule: liquids in hand luggage in containers of at most 100 ml, in one clear resealable bag of up to one litre per passenger. "
               "Dublin Airport has since relaxed this for departures from Dublin (since 17 September 2025: containers up to 2 litres, no clear bag), but other airports still apply the 100 ml rule.")
e['sections'] = [sec('💧 What Aer Lingus says about liquids',
                     'From the Aer Lingus factsheet "New EU security rules at airports" (a PDF on aerlingus.com that dates from the 2006 rules) and the Aer Lingus Hub article "Our tips for a smooth trip through Dublin Airport" (undated, an image from July 2022), both read 19 November 2026. Both are old.',
                     ['Question', 'Aer Lingus pages'],
                     [['Container size', 'Maximum 100 ml each'],
                      ['Bag', 'One transparent re-sealable plastic bag of not more than one litre per passenger; a single clear one-litre bag'],
                      ['What counts as a liquid', 'Pressurised container contents (shaving foam), drinks, soups, syrups, deodorants, creams, lotions, oils, perfumes, pastes, sprays, gels, mascara'],
                      ['Checked bags', 'You can still pack liquids in bags you check in'],
                      ['Medicines and baby food', 'Allowed in hand luggage for the trip; you may be asked for proof'],
                      ['Shop purchases', 'Liquids bought after the boarding pass check or on board an EU airline are not limited']],
                     ['<strong>Out of date for Dublin:</strong> see the next section. These Aer Lingus pages were written before the Dublin change.']),
                 sec('Dublin Airport: the rule has changed for departures from Dublin',
                     'From Dublin Airport&rsquo;s carry-on baggage page and its news item of 17 September 2025, read 19 November 2026. It is the airport operator&rsquo;s rule, not Aer Lingus wording.',
                     ['Question', 'Dublin Airport'],
                     [['Container size in hand luggage', 'Up to 2 litres per container; the 100 ml limit no longer applies'],
                      ['Clear plastic bag', 'No longer needed'],
                      ['Number of containers', 'No limit'],
                      ['Electronics and liquids', 'Can stay in the hand luggage at security'],
                      ['Why', 'New C3 scanners, which work like hospital CT scanners'],
                      ['Flying back to Dublin', 'Check the liquid rules at the departure airport; other UK and EU airports may still apply 100 ml']])]
e['sources'] = [['https://www.aerlingus.com/media/pdfs/prohib_items_factsheet.pdf', 'Aer Lingus &mdash; New EU security rules at airports (PDF)'],
                ['https://www.aerlingus.com/hub/our-tips-for-a-smooth-trip-through-dublin-airport/', 'Aer Lingus &mdash; Our tips for a smooth trip through Dublin Airport'],
                ['https://www.dublinairport.com/latest-news/2025/09/17/passenger-joy-as-security-rules-eased-at-dublin-airport', 'Unofficial source (airport operator): Dublin Airport &mdash; Security rules eased, 17 September 2025']]
e['checked'] = CHK; e['unofficial'] = False
L['airline/aer-lingus/liquids'] = {'official': ['read 2026-11-19: Aer Lingus EU liquids factsheet PDF (2006 rules) and Aer Lingus Hub Dublin tips page (2022): 100 ml, 1 L bag'], 'reliable': ['read 2026-11-19: Dublin Airport carry-on page and news item 2025-09-17 (2 L, no bag, C3 scanners)'], 'other': [], 'date': '2026-11-19'}

# ---------- SunExpress liquids (Istanbul Airport) ----------
e = d['SunExpress']['liquids']
e['answer'] = ("SunExpress's pages returned an error (403), so this page gives the Turkish airport rule as published by Istanbul Airport: liquids, aerosols and gels in containers of at most 100 ml, in a 1-litre ziplock bag, for carry-on only; medicines and baby food are allowed.")
e['sections'] = [sec('💧 What Istanbul Airport says about liquids in hand luggage',
                     'From the Istanbul Airport blog "Hand luggage restrictions" (read 19 November 2026; undated). It says the rule dates from 2012 under national and international legislation. It is airport guidance, not SunExpress wording.',
                     ['Question', 'Istanbul Airport'],
                     [['Container size', 'A maximum of 100 milliliters each'],
                      ['Bag', 'The containers must fit in a 1-liter ziplock bag; the page does not say how many bags are allowed'],
                      ['Checked baggage', 'The rule applies to carry-on bags, not to liquids placed in the hold'],
                      ['Medicines', 'Allowed when you show the documents for your medication'],
                      ['Baby food', 'Allowed in hand luggage if the baby is travelling; as much as necessary'],
                      ['Duty-free', 'Not mentioned']],
                     ['<strong>Not on the page:</strong> SunExpress&rsquo;s own wording and the EU rule for flights leaving the EU. The page advises checking size and other limits with your airline.'])]
e['sources'] = [['https://www.istairport.com/en/blog/hand-luggage-restrictions?locale=en', 'Unofficial source (airport operator): Istanbul Airport &mdash; Hand luggage restrictions']]
e['checked'] = CHK; e['unofficial'] = True
L['airline/sunexpress/liquids'] = {'official': ['tried 2026-11-19: sunexpress.com English hand baggage page HTTP 403'], 'reliable': ['read 2026-11-19: Istanbul Airport hand luggage restrictions blog (100 ml, 1 L ziplock bag, rule from 2012); tried dhmi.gov.tr liquid limitations PDF: DNS error'], 'other': [], 'date': '2026-11-19'}

# ---------- WestJet liquids ----------
e = d['WestJet']['liquids']
e['answer'] = ("WestJet's own pages do not state the liquid size; its carry-on page sends you to CATSA, and its restricted items page lets medicinal or toiletry aerosols travel in limited quantities. "
               "CATSA's rule is containers of 100 ml or less in one clear resealable bag of no more than 1 litre, with medication and baby items exempt.")
e['sections'] = [sec('💧 What WestJet says about liquids and aerosols',
                     'From the WestJet carry-on baggage page and the restricted and prohibited items page (US site), both read 19 November 2026; neither shows a date.',
                     ['Question', 'WestJet wording'],
                     [['Liquid, gel and aerosol sizes', 'Not stated; the page says CATSA regulates the size and packaging of all liquids, gels and aerosols'],
                      ['Medicinal or toiletry aerosols', 'Carry-on yes, subject to security limits; checked yes, in limited quantities'],
                      ['Aerosol release valves', 'Must be protected from accidental release'],
                      ['Duty-free alcohol bought after security', 'Can be carried on direct WestJet flights; must be checked on flights with transfers or connections, or if bought before security'],
                      ['Duty-free from EU partner airlines', 'Alcohol must be in the vendor&rsquo;s tamper-evident bag'],
                      ['Duty-free as an extra bag', 'Not allowed; it counts against your carry-on and personal item'],
                      ['Pepper spray, mace, bear spray', 'Not accepted in either bag type']],
                     ['<strong>Not on WestJet&rsquo;s pages:</strong> the 100 ml figure. It comes from CATSA below.']),
                 sec('CATSA: the screening rule in Canada',
                     'From the CATSA page "How to pack your carry-on" (last modified 4 July 2023, read 19 November 2026). It is the Canadian screening authority&rsquo;s rule, not WestJet wording.',
                     ['Question', 'CATSA'],
                     [['Container size', '100 ml / 100 grams (3.4 oz) or less'],
                      ['Bag', 'One transparent, closed and resealable plastic bag of no more than 1 L (1 qt)'],
                      ['Exempt', 'Medication, liquid baby formula and breast milk; pack them so they come out easily for inspection'],
                      ['Powders and granular material', 'Limited to 350 ml in total in the carry-on'],
                      ['Duty-free', 'Not mentioned on this page']])]
e['sources'] = [['https://www.westjet.com/en-ca/baggage/carry-on', 'WestJet &mdash; Carry-on baggage'],
                ['https://www.westjet.com/en-us/baggage/restricted-and-prohibited', 'WestJet &mdash; Restricted and prohibited items'],
                ['https://www.catsa-acsta.gc.ca/en/pack-your-carry', 'Unofficial source (Canadian screening authority): CATSA &mdash; How to pack your carry-on']]
e['checked'] = CHK; e['unofficial'] = True
L['airline/westjet/liquids'] = {'official': ['read 2026-11-19: WestJet carry-on baggage page and restricted and prohibited items page (no 100 ml figure; sends to CATSA)'], 'reliable': ['read 2026-11-19: CATSA how to pack your carry-on page (100 ml, 1 L bag, last modified 2023-07-04)'], 'other': [], 'date': '2026-11-19'}

wr('topics_new.json', d)
wr('ladder_log.json', L)
print('ok')
