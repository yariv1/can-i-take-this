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

# ---------- Asiana (Korean ministry) ----------
e = d['Asiana']['power']
e['answer'] = ("Asiana's notices did not load for us, so this page gives the rule of Korea's transport ministry (MOLIT), which governs Asiana's home flights: from 20 April 2026 each passenger may carry up to 2 power banks of 160 Wh (about 43,000 mAh) or less, "
               "and using or charging them in the cabin is fully banned.")
e['sections'] = [sec('🔋 What the Korean transport ministry says about power banks',
                     'From the Korea Policy Briefing article "Power banks on passenger aircraft, only 2 per person from the 20th" (policy news, April 2026) and the MOLIT press release of 8 April 2026, both read 19 November 2026. It is government guidance, not Asiana wording, so check Asiana&rsquo;s own notice before you fly.',
                     ['Question', 'Korean ministry (MOLIT)'],
                     [['Number per person', 'Up to 2 power banks; before, Korea allowed 5 of 100 Wh or less'],
                      ['Size', '160 Wh or less, about 43,000 mAh each'],
                      ['Using a power bank in the cabin', 'Fully banned, including to charge a phone or other device'],
                      ['Charging the power bank itself', 'Banned in the cabin'],
                      ['Start date', '20 April 2026, after ICAO adopted the Korean proposal on 27 March 2026'],
                      ['Earlier measure still referred to', 'Power banks may not be stored in overhead bins']],
                     ['<strong>Not in the articles:</strong> packing against short circuits and the checked-bag ban. Those come from the airline and IATA rules, so confirm them with Asiana.'])]
e['sources'] = [['https://www.korea.kr/news/policyNewsView.do?newsId=148962298', 'Unofficial source (Korean government): Korea Policy Briefing &mdash; Power banks, 2 per person from the 20th'],
                ['https://www.korea.kr/briefing/pressReleaseView.do?newsId=156753374&call_from=rsslink', 'Unofficial source (Korean government): MOLIT press release, 8 April 2026']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/asiana/power-bank'] = {'official': ['tried 2026-11-19: flyasiana.com restricted items and power bank notices (Jan, Apr 2026): timeouts'], 'reliable': ['read 2026-11-19: Korea Policy Briefing policy news on the 2-power-bank limit (April 2026); read 2026-11-19: MOLIT press release headline of 2026-04-08'], 'other': [], 'date': '2026-11-19'}

# ---------- Frontier ----------
e = d['Frontier']['power']
e['answer'] = ("Frontier's pages say lithium batteries are prohibited in checked bags and that a smart bag's removable battery must stay in the carry-on, with batteries over 100 Wh not allowed. "
               "For power banks themselves the TSA rule applies: carry-on only, and with airline approval up to two spare batteries of 101-160 Wh.")
e['sections'] = [sec('🔋 What Frontier says about batteries',
                     'From the Frontier bag options page and special items list (July 2026 edition) and the Frontier help article on smart luggage, read 17-19 November 2026. None of them names power banks.',
                     ['Question', 'Frontier wording'],
                     [['Lithium batteries in checked bags', 'Listed with the hazardous items prohibited in checked bags'],
                      ['Smart bag with a removable battery', 'Battery must be removed before boarding and kept in the carry-on for the whole flight, terminals protected from short circuits'],
                      ['Smart bag battery above 100 Wh', 'Not allowed'],
                      ['At check-in', 'Tell the agent the battery type and size']],
                     ['<strong>Not on Frontier&rsquo;s pages:</strong> a rule that names power banks. The next section gives the US rule that covers them.']),
                 sec('Power banks under the TSA rule',
                     'From the TSA page on lithium batteries over 100 watt hours (read 19 November 2026, undated). It is a US federal rule, not Frontier wording.',
                     ['Question', 'TSA wording'],
                     [['Spare batteries and power banks', 'Carry-on baggage only; checked bags: no'],
                      ['101-160 Wh', 'With airline approval, up to two spare batteries per person'],
                      ['Batteries installed in a device', 'Fall under separate rules']])]
e['sources'] = [['https://faq.flyfrontier.com/help/can-i-bring-smart-luggage-on-my-flight', 'Frontier Airlines &mdash; Smart luggage'],
                ['https://www.flyfrontier.com/travel/travel-info/bag-options/?mobile=true', 'Frontier Airlines &mdash; Bag options'],
                ['https://www.tsa.gov/travel/security-screening/whatcanibring/items/lithium-batteries-more-100-watt-hours', 'Unofficial source (US government): TSA &mdash; Lithium batteries over 100 watt hours']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/frontier/power-bank'] = {'official': ['read 2026-11-19: Frontier smart luggage help article (battery over 100 Wh not allowed, removable battery in carry-on); read 2026-11-17: Frontier bag options (lithium batteries prohibited in checked bags); no page names power banks'], 'reliable': ['read 2026-11-19: TSA lithium batteries over 100 Wh page (power banks carry-on only, two 101-160 Wh with approval)'], 'other': [], 'date': '2026-11-19'}

# ---------- Alaska ----------
e = d['Alaska Airlines']['power']
e['answer'] = ("Alaska's own news site says spare batteries and power banks may only go in your carry-on bag, and its smart-bag policy (announced December 2017) requires the battery of a smart bag to come out and ride in the cabin when the bag is checked, "
               "or the bag cannot fly. Neither post gives a Wh limit.")
e['sections'] = [sec('🔋 What Alaska says about power banks and smart bags',
                     'From two posts on news.alaskaair.com: "Gifts you can travel with, and gifts better left at home" (15 December 2015) and "Alaska Airlines to put limits on smart bags" (1 December 2017, effective 15 January 2018), read 19 November 2026. Alaska&rsquo;s current onboard policy pages did not open for us.',
                     ['Question', 'Alaska wording'],
                     [['Spare batteries and power banks', 'Carry-on bag only'],
                      ['Bags powered by a lithium battery or power bank', 'Covered by the smart bag policy'],
                      ['Smart bag in the cabin', 'Allowed if it fits carry-on size limits and the battery can be taken out'],
                      ['Smart bag checked', 'The battery must be removed and carried in the cabin'],
                      ['Smart bag whose battery cannot be removed', 'Barred from the aircraft']],
                     ['<strong>Not in the posts:</strong> a watt-hour limit, a count of power banks and rules on using one in flight. The posts are old, so confirm the current Alaska rule.'])]
e['sources'] = [['https://news.alaskaair.com/alaska-airlines/gifts-that-dont-fly/', 'Alaska Airlines &mdash; Gifts that don&rsquo;t fly (news, 2015)'],
                ['https://news.alaskaair.com/alaska-airlines/smart-bags-on-planes/', 'Alaska Airlines &mdash; Limits on smart bags (news, 2017)']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/alaska-airlines/power-bank'] = {'official': ['tried 2026-11-19: alaskaair.com portable electronic devices and travel accessories pages: HTTP 406 and timeout', 'read 2026-11-19: news.alaskaair.com gifts that dont fly (2015-12-15) and smart bags (2017-12-01): power banks carry-on only; no Wh limit'], 'reliable': [], 'other': ['IATA guidance text replaced by the airline posts'], 'date': '2026-11-19'}

# ---------- Aeromexico (Mexico City airport guide) ----------
e = d['Aeromexico']['power']
e['answer'] = ("Aeromexico's pages did not load, so this page uses the Mexico City airport (AICM) passenger guide, which tells travellers to the United States that lithium batteries are banned from checked baggage under US rules. "
               "The guide is a 2014 file and gives no Wh limits or power bank count.")
e['sections'] = [sec('🔋 What the Mexico City airport guide says about lithium batteries',
                     'From the AICM passenger information guide (PDF, 2014), read 19 November 2026. It is the airport operator&rsquo;s text, not Aeromexico wording, and it is old.',
                     ['Question', 'AICM guide'],
                     [['Lithium batteries in checked baggage on flights to the USA', 'Banned since 1 January 2008 under US government rules'],
                      ['Where to read more', 'The guide points to the US TSA website for flights to the United States'],
                      ['Battery-powered drills and saws in hand baggage', 'Listed among tools that may cause serious injury']],
                     ['<strong>Not in the guide:</strong> a Wh limit, a number of power banks, and Aeromexico&rsquo;s own rule. Use the TSA rule for US flights and ask Aeromexico for the rest.'])]
e['sources'] = [['https://www.aicm.com.mx/informacionalpasajero/Archivos/GuiaAICM2014.pdf', 'Unofficial source (airport operator): Mexico City airport &mdash; Passenger guide (2014)']]
e['checked'] = CHK; e['unofficial'] = True
log['airline/aeromexico/power-bank'] = {'official': ['tried 2026-11-19: world.aeromexico.com lithium batteries page: DNS error (ENOTFOUND); beta.aeromexico.com guide PDF: site error page'], 'reliable': ['read 2026-11-19: AICM passenger guide PDF (2014): lithium batteries banned in checked baggage to the USA; no Wh limit'], 'other': [], 'date': '2026-11-19'}

wr('topics_new.json', d)
L = rd('ladder_log.json')
for k, v in log.items(): L[k] = v
wr('ladder_log.json', L)
print('ok')
