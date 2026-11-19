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

# ---------- Southwest ----------
e = d['Southwest']['alcohol']
e['answer'] = ("Southwest's Sip and Ship page lets you check one case of wine (up to 12 bottles, 50 lb) for free if you are 21 or older and leave from a listed airport in California, Idaho, Oregon, Texas or Washington. "
               "The page does not give a general rule for liquor in carry-on or checked bags.")
e['sections'] = [sec('🍷 What Southwest says about checking wine',
                     'From the Southwest Airlines "Sip and Ship" page (read 19 November 2026; the page shows no date).',
                     ['Question', 'Southwest wording'],
                     [['Free case', 'One case of wine per passenger; extra, overweight or oversize cases pay the normal charges'],
                      ['Age', '21 or older'],
                      ['Case size', 'One box or wine suitcase, up to 12 bottles, 50 lb (22.7 kg) or less, 62 inches or less in total size'],
                      ['Packing', 'Sturdy, leak-proof container, padded, left unsealed; bottles in original unopened containers with the manufacturer label'],
                      ['Where', 'Departure from a participating airport in California, Idaho, Oregon, Texas or Washington; travel stays inside the U.S.'],
                      ['Inspection', 'An agent checks the case at the Help Desk or ticket counter, then seals and labels it'],
                      ['Breakage', 'Southwest does not accept liability for breakage of liquids or fragile items in checked luggage']],
                     ['<strong>Not on the page:</strong> spirits, beer, the alcohol-by-volume limit, and carry-on bottles. For those, the TSA liquid rule applies at the checkpoint.'])]
e['sources'] = [['https://www.southwest.com/sip-and-ship/', 'Southwest Airlines &mdash; Sip and Ship']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/southwest/alcohol'] = {'official': ['read 2026-11-19: https://www.southwest.com/sip-and-ship/ (wine case rules; no general liquor rule)'], 'reliable': [], 'other': ['IATA table removed from page: replaced by the airline text'], 'date': '2026-11-19'}

# ---------- Frontier ----------
e = d['Frontier']['alcohol']
e['answer'] = ("Frontier's special items list (July 2026 edition) accepts liquor in sealed retail packaging in checked bags only, up to 5 liters per passenger and no more than 70% alcohol by volume. "
               "Beer and wine of 24% or less are not regulated by Frontier, and your own drinks may not be consumed on board.")
e['sections'] = [sec('🥃 What Frontier says about alcoholic beverages',
                     'From the Frontier Airlines "Special items list: guidelines, fees, baggage acceptance" PDF (July 2026 edition), read 19 November 2026.',
                     ['Question', 'Frontier wording'],
                     [['Checked bag', 'Yes, in sealed retail packaging'],
                      ['Carry-on bag', 'No, except as described in the next row'],
                      ['Strength', 'No more than 70% alcohol by volume'],
                      ['Quantity', '5 liters per passenger'],
                      ['Beer and wine of 24% or less', 'Not regulated by Frontier except by international customs; no restriction'],
                      ['Carry-on exception', 'Only within the TSA liquid rule, or bought on the concourse after the security checkpoint'],
                      ['Leaving the sterile area', 'Alcohol over the TSA liquid limit must then be checked through the screening checkpoint'],
                      ['Drinking on board', 'Personal alcoholic beverages may not be consumed on the aircraft'],
                      ['Fees', 'The normal checked-bag price for your fare applies; overweight and oversize fees can add to it']],
                     ['<strong>Not on the list:</strong> import limits at your destination. Customs rules apply to alcohol on every Frontier route.'])]
e['sources'] = [['https://www.flyfrontier.com/media/1206/baggage_fragile-and-special-items.pdf', 'Frontier Airlines &mdash; Special items list (PDF, July 2026)']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/frontier/alcohol'] = {'official': ['read 2026-11-19: Frontier special items list PDF (July 2026): liquor 5 L, 70% max, checked only, TSA rule in carry-on'], 'reliable': [], 'other': ['IATA table removed from page: replaced by the airline text'], 'date': '2026-11-19'}

# ---------- Alaska ----------
e = d['Alaska Airlines']['alcohol']
e['answer'] = ("Alaska's own news site says its Mileage Plan members aged 21 or older can check a case of 12 bottles of wine with no baggage fee on flights leaving Washington, Oregon, California or Idaho, in professional packaging left unsealed for inspection. "
               "An Alaska travel post tells you to leave potent alcohol over 140 proof, like Everclear, at home.")
e['sections'] = [sec('🍷 What Alaska says about wine and strong spirits',
                     'From two pages on news.alaskaair.com: "Wine flies free" (published 17 August 2022) and "Gifts you can travel with, and gifts better left at home" (published 15 December 2015), both read 19 November 2026. The Alaska page on alcohol restrictions did not open for us.',
                     ['Question', 'Alaska wording'],
                     [['Free case of wine', '12 bottles, no baggage fee, on U.S. flights leaving WA, OR, CA or ID, operated by Alaska, Horizon or SkyWest'],
                      ['Who', 'Mileage Plan member aged 21 or older, with the number in the reservation at booking'],
                      ['Packing', 'Professional packaging with shipper box and insert; the box stays unsealed until an agent inspects it'],
                      ['Agent', 'Inspects, seals and labels the case FRAGILE'],
                      ['Loss and damage', 'A cardboard box is covered for loss, but damage is at the owner&rsquo;s risk'],
                      ['Spirits over 140 proof (70%)', 'Everclear and Bacardi 151 are named as items to leave at home'],
                      ['Government rules', 'The traveller must follow all rules on traveling with alcohol']],
                     ['<strong>Not in these posts:</strong> a carry-on liquor rule and a limit in litres. The 2015 post is old; check the current Alaska rule with the airline.'])]
e['sources'] = [['https://news.alaskaair.com/travel-tips/how-to-check-a-case-of-wine-for-free/', 'Alaska Airlines &mdash; Wine flies free (news, 2022)'],
                ['https://news.alaskaair.com/alaska-airlines/gifts-that-dont-fly/', 'Alaska Airlines &mdash; Gifts that don&rsquo;t fly (news, 2015)']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/alaska-airlines/alcohol'] = {'official': ['tried 2026-11-19: alaskaair.com alcohol restrictions page and contract of carriage rule 15: HTTP 406', 'read 2026-11-19: news.alaskaair.com wine flies free (2022-08-17) and gifts that dont fly (2015-12-15)'], 'reliable': [], 'other': ['IATA table removed from page: replaced by the airline text'], 'date': '2026-11-19'}

# ---------- Transavia (Dutch Customs, arrivals from EU) ----------
e = d['Transavia']['alcohol']
e['answer'] = ("Transavia's help pages returned an error (403), so this page gives the Dutch Customs allowance for alcohol you bring into the Netherlands from another EU country: per person aged 17 or older, 110 litres of beer, 90 litres of wine and 10 litres of spirits, duty-free.")
e['sections'] = [sec('🍺 What Dutch Customs allows on arrival from an EU country',
                     'From the Douane (Dutch Customs) page "Bringing alcohol from abroad" (published and updated 14 July 2026, read 19 November 2026). It is customs guidance, not Transavia wording, so check Transavia for the cabin 100 ml rule and for checked bags.',
                     ['Product', 'Per person, 17 or older'],
                     [['Beer', '110 litres'],
                      ['Wine', '90 litres, of which no more than 60 litres sparkling'],
                      ['Light liqueur or fortified wine (up to 22%)', '20 litres'],
                      ['Spirits (above 22%)', '10 litres'],
                      ['More than the allowance', 'You must show it is for personal use; Customs may ask for purchase receipts'],
                      ['Without proof', 'You pay tax, or the alcohol can be confiscated']],
                     ['<strong>Not on this page:</strong> Transavia&rsquo;s own bag rules. Non-EU arrivals have far lower limits; see the KLM page for those.'])]
e['sources'] = [['https://www.douane.nl/en/themes/travel-and-holiday/purchases-abroad/alcohol-from-abroad/', 'Unofficial source (customs authority): Douane &mdash; Bringing alcohol from abroad']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/transavia/alcohol'] = {'official': ['tried 2026-11-19: transavia.com liquids rules, hold luggage and food and drinks help pages: HTTP 403'], 'reliable': ['read 2026-11-19: Dutch Customs (douane.nl) bringing alcohol from abroad, updated 2026-07-14 (EU arrivals)'], 'other': [], 'date': '2026-11-19'}

# ---------- KLM (Dutch Customs, arrivals from outside EU) ----------
e = d['KLM']['alcohol']
e['answer'] = ("KLM's baggage pages timed out, so this page gives the Dutch Customs allowance for alcohol arriving in the Netherlands from outside the EU, which covers most KLM long-haul flights: per person aged 17 or older, 16 litres of beer, 4 litres of still wine and 1 litre of spirits.")
e['sections'] = [sec('🥂 What Dutch Customs allows on arrival from outside the EU',
                     'From the Douane (Dutch Customs) page "Bringing alcohol from abroad" (updated 14 July 2026, read 19 November 2026). It is customs guidance, not KLM wording; check KLM for the 100 ml cabin rule and for spirits above 70%.',
                     ['Product', 'Per person, 17 or older'],
                     [['Beer', '16 litres'],
                      ['Still wine', '4 litres; sparkling wine is not in this allowance'],
                      ['Spirits (above 22%) or light spirits (22% or less)', '1 litre of either, not both in full'],
                      ['Mixing', 'If you bring some of one, you may bring less of the other'],
                      ['More than the allowance', 'Declare it: at an airport use the &ldquo;Goods to declare&rdquo; exit; you pay duties, excise and VAT on the excess'],
                      ['Not declaring', 'An additional fine applies']],
                     ['<strong>Not on this page:</strong> KLM&rsquo;s own bag rules. For arrivals from another EU country, see the Transavia page.'])]
e['sources'] = [['https://www.douane.nl/en/themes/travel-and-holiday/purchases-abroad/alcohol-from-abroad/', 'Unofficial source (customs authority): Douane &mdash; Bringing alcohol from abroad']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/klm/alcohol'] = {'official': ['tried 2026-11-19: klm.com restricted items hand baggage and checked baggage pages: timeouts'], 'reliable': ['read 2026-11-19: Dutch Customs (douane.nl) bringing alcohol from abroad, updated 2026-07-14 (non-EU arrivals)'], 'other': [], 'date': '2026-11-19'}

# ---------- Etihad (UAE government portal) ----------
e = d['Etihad Airways']['alcohol']
e['answer'] = ("Etihad's pages timed out, so this page gives the UAE government allowance for alcohol arriving by air: no more than 4 litres, or 2 cartons of beer of 24 cans each (355 ml or less per can). Duty and VAT apply above that.")
e['sections'] = [sec('🍷 What the UAE government says about alcohol on arrival',
                     'From the UAE government portal u.ae, page "Customs clearance" (updated 27 October 2026, read 19 November 2026). It is the customs allowance, not Etihad wording.',
                     ['Question', 'u.ae'],
                     [['Spirits, wine and similar', 'Alcoholic beverages not exceeding 4 litres'],
                      ['Beer instead', '2 cartons of beer, 24 cans each, each can no more than 355 ml'],
                      ['Above the allowance', 'Customs duty applies, plus VAT']],
                     ['<strong>Not on the page:</strong> Etihad&rsquo;s rules for alcohol in cabin and checked bags, and any age condition. Ask Etihad, and note that bottles bought at duty free for a US-bound flight are treated differently at Abu Dhabi.'])]
e['sources'] = [['https://u.ae/en/information-and-services/visiting-and-exploring-the-uae/Tourist-services-and-information/Customs-clearance', 'Unofficial source (UAE government): u.ae &mdash; Customs clearance']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/etihad-airways/alcohol'] = {'official': ['tried 2026-11-19: etihad.com dangerous goods carriage guide PDF and prohibited items page: timeouts'], 'reliable': ['read 2026-11-19: u.ae customs clearance page (4 L or 2 cartons beer), updated 2026-10-27; tried Abu Dhabi airport pages: SSL error and HTTP 403'], 'other': [], 'date': '2026-11-19'}

wr('topics_new.json', d)
L = rd('ladder_log.json')
for k, v in log.items(): L[k] = v
wr('ladder_log.json', L)
print('ok')
