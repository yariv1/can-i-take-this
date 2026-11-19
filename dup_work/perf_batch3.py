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

# ---------- Kuwait Airways ----------
e = d['Kuwait Airways']['perfume']
e['answer'] = ("Kuwait Airways' baggage page names liquids, aerosols, perfume, hair spray, toiletries and medicines containing alcohol, and gives two limits: 100 ml per container in the cabin and 2 kg or 2 L in total in the hold. "
               "The page does not break the rule down by product.")
e['sections'] = [sec('🧴 What Kuwait Airways says about perfume and aerosols',
                     'From the Kuwait Airways baggage information page (a test copy of the site, read 17 November 2026). The page lists the topics and two numbers but no detail for each product.',
                     ['Question', 'Kuwait Airways page'],
                     [['Products it names', 'Liquids, aerosols, perfume, hair spray, toiletries and medicines containing alcohol'],
                      ['Cabin baggage', 'A limit of 100 ml is mentioned'],
                      ['Hold baggage', 'A limit of 2 kg or 2 L is mentioned'],
                      ['Duty-free', 'Purchases are mentioned as a separate topic']],
                     ['<strong>Not on the page:</strong> the quantity per container in the hold, the bag for the cabin, and what happens to bigger containers. The live site did not open for us, so confirm with Kuwait Airways before you fly.'])]
e['sources'] = [['https://dev-aem.kuwaitairways.com/kw/en/baggage-information/free-baggage.html', 'Kuwait Airways &mdash; Baggage information (test copy of the site)']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/kuwait-airways/perfume-aerosols'] = {'official': ['read 2026-11-17: dev-aem.kuwaitairways.com baggage information (topic list, 100 ml cabin, 2 kg/2 L hold; no per-product detail); live kuwaitairways.com page did not open'], 'reliable': [], 'other': ['IATA table removed from page: replaced by the airline numbers'], 'date': '2026-11-17'}

# ---------- Oman Air ----------
e = d['Oman Air']['perfume']
e['answer'] = ("Oman Air's dangerous goods policy allows perfumes, hair sprays, colognes and medicines containing alcohol in both hand and checked baggage without airline approval, "
               "up to 2 kg or 2 L in total and 0.5 kg or 0.5 L for each item, and adds that the rules of the airport you fly from also apply.")
e['sections'] = [sec('🧴 What Oman Air says about perfumes and hair sprays',
                     'From the Oman Air Dangerous Goods Policy page (read 17 November 2026; the page shows only a 2026 copyright).',
                     ['Question', 'Oman Air rule'],
                     [['Which items', 'Non-radioactive toilet articles and medicines, including hair sprays, perfumes, colognes and medicines containing alcohol'],
                      ['Hand and checked baggage', 'Allowed in both'],
                      ['Oman Air approval', 'Not required'],
                      ['Quantity per passenger', 'No more than 2 kg or 2 L in total'],
                      ['Each single item', 'No more than 0.5 kg or 0.5 L'],
                      ['Non-flammable aerosols for sport or home use', 'Allowed within the same limits'],
                      ['Alcohol content of 24% to 70%', 'Allowed in retail packaging; above 70% is prohibited'],
                      ['Local rules', 'The page says airport-specific restrictions also apply']],
                     ['<strong>Not on the page:</strong> a separate cabin limit. The 100 ml liquid rule at security comes from the airport, so check the airport you leave from.'])]
e['sources'] = [['https://www.omanair.com/en/dangerous-goods-policy', 'Oman Air &mdash; Dangerous Goods Policy']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/oman-air/perfume-aerosols'] = {'official': ['read 2026-11-17: https://www.omanair.com/en/dangerous-goods-policy'], 'reliable': [], 'other': ['IATA table removed from page: replaced by the airline text'], 'date': '2026-11-17'}

# ---------- Royal Jordanian ----------
e = d['Royal Jordanian']['perfume']
e['answer'] = ("Royal Jordanian treats perfumes, shaving foam and deodorants as liquids at security: containers of at most 100 ml in one sealed transparent 1-litre bag per passenger, with medicines and baby food exempt. "
               "Its dangerous goods rules also list hair sprays and perfumes among items with quantity limits, without stating the numbers, and forbid aerosols such as camping gas.")
e['sections'] = [sec('🧴 What Royal Jordanian says about perfumes and aerosols',
                     'From the Royal Jordanian page "What not to carry" (read 17 November 2026; the page shows no date).',
                     ['Question', 'Royal Jordanian rule'],
                     [['Perfume, shaving foam, deodorant, gels', 'Allowed through security only in small quantities'],
                      ['Container size', 'No more than 100 ml each'],
                      ['Bag', 'One transparent re-sealable 1-litre plastic bag per passenger, completely sealed'],
                      ['Medicines and special foods such as baby food', 'Do not need to go in the bag, but must be shown at the security check'],
                      ['Hair sprays, perfumes and other toiletry aerosols', 'Listed among items with specific quantity limits; the page does not state the numbers'],
                      ['Aerosols such as camping gas', 'On the forbidden list']],
                     ['<strong>Not on the page:</strong> the quantity limits for toiletry aerosols. Dangerous goods rules apply on all Royal Jordanian flights, so confirm the numbers with the airline.'])]
e['sources'] = [['https://www.rj.com/en/info-and-tips/baggage-information/what-not-to-carry', 'Royal Jordanian &mdash; What not to carry']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/royal-jordanian/perfume-aerosols'] = {'official': ['read 2026-11-17: https://www.rj.com/en/info-and-tips/baggage-information/what-not-to-carry'], 'reliable': [], 'other': ['IATA table removed from page: replaced by the airline text'], 'date': '2026-11-17'}

# ---------- Ethiopian ----------
e = d['Ethiopian Airlines']['perfume']
e['answer'] = ("Ethiopian Airlines allows hair sprays, perfumes and medicines containing alcohol in both carry-on and checked baggage, with no more than 0.5 kg or 0.5 L per article and 2.0 kg or 2.0 L in total. "
               "Flammable liquids such as lighter fuel and paint are not allowed in either bag.")
e['sections'] = [sec('🧴 What Ethiopian Airlines says about perfumes and hair sprays',
                     'From the Ethiopian Airlines Restricted Items page, United States site (read 17 November 2026; the page shows only a 2026 copyright).',
                     ['Question', 'Ethiopian Airlines rule'],
                     [['Hair sprays, perfumes, medicines containing alcohol', 'Allowed in carry-on and in checked baggage'],
                      ['One article', 'No more than 0.5 kg or 0.5 L'],
                      ['All such articles together', 'No more than 2.0 kg or 2.0 L'],
                      ['Flammable liquids and solids, such as lighter or heating fuel, paints and thinners', 'Not allowed in carry-on or checked baggage']],
                     ['<strong>Not on the page:</strong> a carry-on liquid size limit. The page only says carry-on rules may restrict liquids and gels, so check the rule of the airport you fly from.'])]
e['sources'] = [['https://www.ethiopianairlines.com/us/information/baggage-information/restricted-items', 'Ethiopian Airlines &mdash; Restricted Items (United States site)']]
e['checked'] = CHK; e['unofficial'] = False
log['airline/ethiopian-airlines/perfume-aerosols'] = {'official': ['read 2026-11-17: https://www.ethiopianairlines.com/us/information/baggage-information/restricted-items'], 'reliable': [], 'other': ['IATA table removed from page: replaced by the airline text'], 'date': '2026-11-17'}

wr('topics_new.json', d)
L = rd('ladder_log.json')
for k, v in log.items(): L[k] = v
# GOL and Saudia: tiers 1, 2a, 2b tried and named; they stay on the global rule
L['airline/gol/perfume-aerosols'] = {
  'official': ['tried 2026-11-17: voegol.com.br carry-on page HTTP 403; voegol.com.br/en/fazendo-as-malas4 HTTP 403'],
  'reliable': ['tried 2026-11-17: ANAC news page on domestic carry-on rules shows a captcha wall (not bypassed); Azul page read but it is another airline'],
  'other': ['read 2026-11-17: Melhores Destinos GOL carry-on article (16 May 2023): no aerosol or perfume rule; search results mention GOL domestic limits (4 aerosols, 300 ml/g) as snippets only, not read'], 'date': '2026-11-17'}
L['airline/saudia/perfume-aerosols'] = {
  'official': ['tried 2026-11-17: saudia.com baggage allowances page: bot-detection wall (not bypassed)'],
  'reliable': ['tried 2026-11-17: King Khalid airport (kkia.sa) page HTTP 403; Zawya 2010 Jeddah press release appeared as snippet only'],
  'other': ['tried 2026-11-17: Arab News and blog results are 2009-2010 snippets, not read; page stays on the global IATA rule'], 'date': '2026-11-17'}
wr('ladder_log.json', L)
print('ok')
