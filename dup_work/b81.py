# Batch 8 (28 November 2026): the fourteen pages at 53% duplicate or more; Maldives vape ban and Latvia age limit corrected; EU food pages gain the Swiss/Norway exception
import json

D = '2026-11-28'
DT = '28 November 2026'
R = 'read 28 November 2026'


def load(p):
    raw = open(p, encoding='utf8', newline='').read()
    return raw, json.loads(raw)


def tail(raw):
    return '\n' if raw.endswith('\n') else ''


def save(p, raw, obj, **kw):
    out = json.dumps(obj, ensure_ascii=False, **kw)
    if '\r\n' in raw:
        out = out.replace('\n', '\r\n')
    open(p, 'w', encoding='utf8', newline='').write(out + (('\r\n' if '\r\n' in raw else '\n') if raw.endswith('\n') else ''))


def link(url, label):
    return '<a href="' + url + '" target="_blank" rel="noopener">' + label + '</a>'


def sub(p, a, b, n=1):
    s = open(p, encoding='utf8', newline='').read()
    if '\r\n' in s:
        a, b = a.replace('\n', '\r\n'), b.replace('\n', '\r\n')
    assert s.count(a) == n, (p, a[:60], s.count(a))
    open(p, 'w', encoding='utf8', newline='').write(s.replace(a, b))


def sc(when, status, tag, *lines):
    return {"when": when, "status": status, "tag": tag, "lines": list(lines)}


def topic(i, label, status, verdict, head, scen, src=None, official=None):
    t = {"id": i, "label": label, "status": status, "verdict": verdict, "head": head, "scen": scen}
    if src:
        t["src"] = src
        t["official"] = official
    return t


# ================= food
CNL = ['https://www.beijing.gov.cn/zhengce/zhengcefagui/qtwj/202204/W020220418641448394727.docx', 'Beijing municipal government: China’s list of animals, plants and products banned from carry-in or post (in Chinese, Word file)']
CNS = ['https://english.shanghai.gov.cn/en-ImmigrationCustoms/20241120/c3a5f1e4d3444229a8bbf9659bd50e31.html', 'Shanghai government: customs question with the English text of the list (20 November 2024)']
CNI = ['https://infopages.traveldoc.aero/Customs/CHN/Plain', 'IATA Travel Centre: China customs, prohibited and restricted goods (undated)']
MAI = ['https://infopages.traveldoc.aero/Customs/MAR/Plain', 'IATA Travel Centre: Morocco customs, prohibited and restricted goods (undated)']
MAH = ['https://fr.hespress.com/268867-268867.html', 'Hespress with the MAP agency: ONSSA bans plants carried by travellers (21 June 2022, in French)']
MAG = ['https://www.bladi.net/img/pdf/guide-mre-douane-maroc-2.pdf', 'Copy on bladi.net of the Moroccan customs guide for residents abroad (undated, in French)']
BNT = ['https://bntnews.bg/news/bfsa-seizes-over-a-tonne-of-animal-products-without-documents-at-kapitan-andreevo-border-crossing-1398750news.html', 'Bulgarian National Television: animal products seized at Kapitan Andreevo (16 June 2026)']
EU = ['https://europa.eu/youreurope/citizens/travel/carry/meat-dairy-animal/index_en.htm', 'European Union (Your Europe): Taking animal products, food or plants with you']

raw, f = load('food_extra.json')
f['China'] = {
    "checked": DT,
    "answer": "China bans travellers from carrying or posting in meat, dairy, eggs, fresh fruit and vegetables, seeds and a series of other animal and plant products. The list comes from the Ministry of Agriculture and Rural Affairs and the General Administration of Customs (Announcement 470 of 2021). It lets through only items approved by the national authorities that come with an official quarantine certificate from the exporting country.",
    "sources": [CNL, CNS],
    "faq": [["Can I bring cheese, ham or eggs into China?", "No. Meat and meat products, dairy and eggs are all named on the list."],
            ["Can I bring fruit into China?", "Fresh fruit and vegetables are banned. The list does not name dried fruit, so declare it and let customs decide."],
            ["Is there a personal allowance?", "The list gives none: it bans the named items without a quantity threshold."],
            ["Does a transit stop count?", "Shanghai’s government quotes the same list when asked about fruit carried through on an overnight transit, so pack nothing on it if you leave the airport."]],
    "topics": [
        topic('meat', 'Meat, dairy & eggs', 'stop', 'Not allowed', 'Meat, dairy and eggs cannot be carried in.', [
            sc('Meat, raw or cooked', 'stop', 'Not allowed', 'Raw and cooked meat, offal and meat products are on the banned list.'),
            sc('Milk and dairy', 'stop', 'Not allowed', 'Raw, pasteurised, sterilised, formulated and fermented milk, cream, butter, cheese, condensed milk and other dairy products are named.'),
            sc('Eggs and bird’s nest', 'stop', 'Not allowed', 'Fresh, preserved and salted eggs, liquid egg, eggshells and egg-yolk sauce are named.', 'Bird’s nest is banned too, except the commercially sterilised canned kind.')]),
        topic('produce', 'Fruit, vegetables & seeds', 'stop', 'Not allowed', 'Fresh fruit, vegetables and seeds are banned.', [
            sc('Fresh produce and flowers', 'stop', 'Not allowed', 'Fresh fruit, fresh vegetables and cut flowers are on the list.'),
            sc('Seeds, leaf and soil', 'stop', 'Not allowed', 'Seeds, seedlings and other plant material that can propagate are listed, and so are tobacco leaf, soil and organic growing media.')]),
        topic('fish', 'Fish & seafood', 'warn', 'Mostly banned', 'Aquatic animal products are banned, with a narrow exception.', [
            sc('Fish and seafood products', 'warn', 'Narrow exception', 'The list names aquatic animal products.', 'Its exception, in the English text Shanghai publishes: dried, cooked and fermented aquatic animal products made into edible sauces.')]),
        topic('permit', 'Documents & permits', 'warn', 'Certificate', 'An exception needs approval and a quarantine certificate.', [
            sc('A listed item with paperwork', 'warn', 'Both needed', 'An item on the list falls outside the ban only with approval from the competent state authority and an official quarantine certificate from the exporting country or region.')]),
        topic('epi', 'Epidemic areas & declaring', 'warn', 'Declare', 'Declare animal and plant products.', [
            sc('Animals, plants and their derivatives', 'warn', 'Declare', 'The IATA Travel Centre says they must be declared and are subject to restrictions and quarantine on arrival.'),
            sc('Food from an epidemic-stricken area', 'stop', 'Not allowed', 'The same page prohibits foodstuff from such an area that may be harmful to humans and livestock.')], [CNI], False)],
}
f['Morocco'] = {
    "checked": DT,
    "answer": "Morocco does not let travellers bring in plants, ornamental plants or seeds: the food safety office ONSSA announced the ban on 21 June 2022 against the Xylella fastidiosa bacterium and said such items are seized and destroyed. A customs guide for Moroccans living abroad asks for an ONSSA veterinary certificate for animal products and a phytosanitary certificate for plant products. We read a press report and a copy of that guide, not a current ONSSA or customs page.",
    "sources": [MAH, MAG, MAI],
    "faq": [["Can I bring plants or seeds into Morocco?", "No. ONSSA’s June 2022 announcement bans every type of plant, ornamental plant and seed carried by travellers."],
            ["Can I bring meat or cheese into Morocco?", "Only with a veterinary certificate, according to the customs guide and the IATA Travel Centre."],
            ["Is there a food allowance in kilos?", "None of the three sources gives one."]],
    "topics": [
        topic('plants', 'Plants & seeds', 'stop', 'Not allowed', 'Travellers may not bring in plants or seeds.', [
            sc('Plants, ornamental plants and seeds in luggage', 'stop', 'Not allowed', 'ONSSA announced that travellers entering Morocco may not bring in any type of plant, and that such items are seized and destroyed.', 'We found no later notice lifting the ban.'),
            sc('Why the ban exists', 'warn', 'Plant disease', 'It aims to keep out Xylella fastidiosa, which ONSSA describes as a threat to more than 350 species, including olive, citrus, vine and almond.')]),
        topic('animal', 'Meat & dairy', 'warn', 'Certificate', 'Animal products need a veterinary certificate.', [
            sc('Products of animal origin', 'warn', 'Certificate', 'The customs guide lists animals and animal products among imports that need a veterinary certificate from the services of ONSSA.', 'The IATA Travel Centre words it as a health certificate from a veterinarian in the country of origin, and says the goods may be inspected.')]),
        topic('fresh', 'Fruit & vegetables', 'warn', 'Ask first', 'Plant products need a phytosanitary certificate.', [
            sc('Plant products', 'warn', 'Certificate', 'The customs guide lists plant products among imports that need a phytosanitary certificate from ONSSA’s services.', 'It does not name fruit or vegetables one by one, so ask Moroccan customs before you pack them.')])],
    "unofficial": True,
}
b = f['Bulgaria']
b['answer'] = "Arriving from most countries outside the EU, you meet the EU personal-import rules in Bulgaria: no meat or dairy, limited fruit, vegetables, eggs and honey, fish up to 20 kg and up to 2 kg of baby or medical food. Food for your own use from Andorra, Iceland, Liechtenstein, Norway, San Marino or Switzerland is treated like food moving inside the EU. Bulgarian Customs Agency and Food Safety Agency pages did not open for us."
b['checked'] = DT
meat = b['topics'][0]
assert meat['id'] == 'meat'
meat['head'] = 'No meat or dairy from most non-EU countries.'
meat['scen'][0]['lines'][0] = 'The EU page forbids meat and dairy for travellers from non-EU countries, apart from the exceptions on this card.'
meat['scen'].append(sc('From Andorra, Iceland, Liechtenstein, Norway, San Marino or Switzerland', 'go', 'Own use', 'The EU page counts these six with the EU countries: meat and dairy for your own consumption may come with you, unless a local animal-disease restriction applies.', 'Fruit, vegetables and cut flowers from them follow the inside-the-EU rule: grown there and free from pests.'))
assert b['topics'][-1]['id'] == 'notread'
b['topics'][-1] = topic('border', 'Border checks', 'warn', 'Checked', 'Bulgaria seizes animal products that lack papers.', [
    sc('Kapitan Andreevo crossing, June 2026', 'warn', 'Seized', 'Food safety inspectors working with customs found 206 kg of dairy products without the required documents in a Bulgarian-registered car.', 'The goods were seized and due to be destroyed.')], [BNT], False)
b['faq'][0] = ["Can I bring salami or white cheese into Bulgaria from a non-EU country?", "Not from most of them, for example Turkey or Serbia: the EU ban applies. The exceptions are the Faroe Islands and Greenland (up to 10 kg) and the six countries treated like the EU, among them Switzerland and Norway."]
assert b['faq'][-1][0].startswith('Did you read')
b['faq'].pop()

VAR = [
    "Meat or dairy for your own use may travel into {c} from Switzerland or Norway: the EU’s Your Europe page counts them, with Andorra, Iceland, Liechtenstein and San Marino, alongside the EU countries.",
    "The ban does not reach food for yourself carried to {c} from Andorra, Iceland, Liechtenstein, Norway, San Marino or Switzerland, which Your Europe treats like EU countries.",
    "Flying into {c} from Zurich or Oslo is different: Your Europe applies the inside-the-EU rule to Switzerland and Norway (also Iceland, Liechtenstein, Andorra and San Marino), so own-use meat and dairy are allowed.",
]
EUF = ['Cyprus', 'Estonia', 'Hungary', 'Lithuania', 'Luxembourg', 'Malta', 'Poland', 'Portugal', 'Slovakia', 'Slovenia', 'Denmark', 'Greece', 'Netherlands']
for i, c in enumerate(EUF):
    e = f[c]
    tid = 'outside' if c == 'Netherlands' else 'meat'
    t = [x for x in e['topics'] if x['id'] == tid]
    assert len(t) == 1 and 'Switzerland' not in json.dumps(e), c
    t = t[0]
    t['scen'].append(sc('From Switzerland, Norway and four neighbours', 'go', 'Own use', VAR[i % 3].format(c='the Netherlands' if c == 'Netherlands' else c)))
    if not any('youreurope' in s[0] for s in e['sources']):
        assert 'src' not in t, c
        t['src'] = e['sources'] + [EU]
        t['official'] = not e.get('unofficial')
save('food_extra.json', raw, f, indent=1)

# ================= vaping
rawv, v = load('vape_extra.json')


def vsec(code, section, src, faq=None):
    e = v[code]
    e['sections'].insert(0, section)
    e['src'] = src + e['src']
    if faq:
        e['faq'] = e.get('faq', []) + faq


SAU = 'https://www.moh.gov.sa/en/Ministry/Rules/Documents/Anti-Tobacco-Executive-Regulations.pdf'
vsec('SA', {"h": "⚖️ What Saudi Arabia’s anti-smoking law says about vaping",
            "p": "Official source read 28 November 2026: the Anti-Smoking Law and its Implementing Regulations published by the Ministry of Health, in the Internet Archive copy because the ministry site did not open for us. It governs use and sale, not what customs lets you carry.",
            "list": ["Regulation 2.1 counts electronic smoking systems as smoking, so the law’s smoking bans cover vapes.",
                     "Banned places include mosques and their yards, government bodies, schools, hospitals and workplaces.",
                     "All public transport, airplanes included, plus bus and train stations and airports are covered, as are restaurants, cafés and fuel stations.",
                     "Smoking in a banned place carries a fine of SAR 200 (Article 14).",
                     "Where a smoking area is set aside, under-18s may not enter it."]},
     [[SAU, "Saudi Ministry of Health: Anti-Smoking Law and Implementing Regulations"]],
     [["Can I vape at a Saudi airport?", "Airports are on the regulation’s list of banned places, and electronic smoking systems count as smoking; the fine in the law is SAR 200."]])

LVP = 'https://lvportals.lv/skaidrojumi/371405-no-1-janvara-stajas-speka-smekesanas-ierobezojumi-lidz-20-gadu-vecumam-2025'
vsec('LV', {"h": "🔞 Latvia’s age limit for vapes is now 20",
            "p": "Official source read 28 November 2026: LV portāls, the state publisher’s explanation of the amended law on tobacco and e-cigarettes (31 December 2024, in Latvian, translated by us).",
            "list": ["Since 1 January 2025 e-cigarettes and refill tanks may not be sold to or bought by anyone under 20.",
                     "An adult under 20 may not smoke or keep smoking products; buying or holding an e-cigarette at that age brings a warning or a fine of up to €15.",
                     "Drawing such a person into smoking or into using tobacco substitutes carries a fine of €35 to €700.",
                     "E-cigarette liquids with flavourings other than tobacco may no longer be placed on the market.",
                     "A shop employee who sells to someone under 20 faces €280 to €700."]},
     [[LVP, "LV portāls: age limit of 20 for smoking products from 1 January 2025 (in Latvian)"]],
     [["Can a 19-year-old visitor vape in Latvia?", "The law bars adults under 20 from keeping e-cigarettes, with a warning or a fine of up to €15; the explanation we read names no exception for visitors."]])
v['LV']['age'] = 'Latvia’s law sets 20 since 1 January 2025 for buying e-cigarettes and refill tanks; the older WHO profile still shows 18.'

ATJ = 'https://www.jusline.at/gesetz/tabakg/paragraf/12'
vsec('AT', {"h": "🚭 Where you may not vape in Austria",
            "p": "Unofficial source read 28 November 2026: jusline.at’s consolidated copy of the Tobacco and Non-Smoker Protection Act, sections 1, 12, 13 and 14, in German, translated by us; the government legal database did not open for us.",
            "list": ["The Act counts e-cigarettes and their liquids as related products, and its smoking bans apply to using them.",
                     "Covered: rooms used for teaching, meetings or school sport, places where children are looked after (outdoor areas included), multipurpose halls and festival tents.",
                     "Covered too: every guest area of restaurants, bars and cafés except open-air ones.",
                     "Public transport is included, and so is a private car carrying someone under 18.",
                     "The ban extends to other indoor public places, where a separate smoking room may be set up in generally accessible areas.",
                     "Using one where it is banned and signposted costs up to €100, or up to €1,000 for a repeat."]},
     [[ATJ, "Unofficial source: jusline.at: Austrian Tobacco and Non-Smoker Protection Act, §12"]],
     [["Can I vape in an Austrian restaurant or car?", "Not in a restaurant’s indoor guest areas, and not in a private car with a passenger under 18, under the Act as reproduced on jusline.at."]])

SI87 = 'https://src.gov.sc/wp-content/uploads/2023/11/SI-87-Customs-Management-Prohibited-and-Restricted-Goods-Regulations-2023.pdf'
SCB = 'https://nationalassembly.sc/sites/default/files/2024-05/Bill%204%202024%20-%20Tobacco%20Control%20%28Amendment%29%20Bill%202024.pdf'
s = v['SC']['sections'][1]
a = ' The official customs rule for travellers could not be read, so treat this as background and confirm with customs.'
assert a in s['p']
s['p'] = s['p'].replace(a, ' Treat it as background: it is not an official Seychelles page.')
s.pop('list', None)
assert v['SC']['faq'][0][0] == 'Can I bring a vape to Seychelles?'
v['SC']['faq'][0][1] = "The 2023 customs regulations leave e-cigarettes out of the ban on tobacco lookalikes, while the secondary profile GSTHR calls their import banned. Ask Seychelles customs before you pack one."
vsec('SC', {"h": "📜 What Seychelles’ customs regulations say about e-cigarettes",
            "p": "Official sources read 28 November 2026: the Customs Management (Prohibited and Restricted Goods) Regulations, 2023 (SI 87, Revenue Commission copy) and the Tobacco Control (Amendment) Bill, 2024 on the National Assembly site.",
            "list": ["The first schedule of prohibited goods bans non-tobacco products made to resemble tobacco, and expressly excludes electronic cigarettes, their e-liquids and cartridges.",
                     "The 2024 Bill described e-cigarettes as freely marketed and sold at the time, and proposed to regulate their import, supply and sale.",
                     "Under the Bill, someone importing devices or liquid for personal consumption would not have to meet its health-warning or flavour rules.",
                     "We found no text confirming that the Bill was passed.",
                     "This conflicts with the secondary profile further down, which calls imports banned."]},
     [[SI87, "Seychelles Revenue Commission: Prohibited and Restricted Goods Regulations, 2023 (SI 87)"], [SCB, "National Assembly of Seychelles: Tobacco Control (Amendment) Bill, 2024"]])

MV1 = 'https://presidency.gov.mv/Press/Article/32159'
MV2 = 'https://presidency.gov.mv/Press/Article/33779'
MVV = 'https://corporate.visitmaldives.com/?p=23716'
m = v['MV']
ps = m['sections'][0]
a = ' The Maldives Customs pages returned 403, so no official page was read.'
assert a in ps['p']
ps['p'] = ps['p'].replace(a, '')
ps['list'] = ["<strong>Where the accounts differ:</strong> the press reports fines for importing, while Visit Maldives (November 2024) describes a device being held without penalty. Confirm with Maldives Customs."]
m['faq'] = [["What happens to a vape I arrive with?", "Visit Maldives said in November 2024 that it is confiscated at the border and returned when you leave, without a penalty; Atoll Times reports fines of 50,000 rufiyaa plus 10,000 per device for importing."]]
vsec('MV', {"h": "⚖️ Maldives law: vapes are banned",
            "p": "Official sources read 28 November 2026: President’s Office releases of 13 November 2024 and 21 May 2025 on the amendments to the Tobacco Control Act, and the Visit Maldives notice of 9 November 2024.",
            "list": ["The first amendment bans the import, sale, free distribution and use of e-cigarettes, vaping devices and products made for them.",
                     "The second amendment, ratified in May 2025, also names possession and covers accessories.",
                     "Visit Maldives gives the dates: no import from 15 November 2024, and no possession, use or sale from 15 December 2024, for residents and visitors.",
                     "It says a visitor arriving with a vaporiser is not penalised or refused entry: the device is taken at the border and returned on departure."]},
     [[MV2, "President’s Office of the Maldives: Second Amendment to the Tobacco Control Act (21 May 2025)"],
      [MV1, "President’s Office of the Maldives: First Amendment to the Tobacco Control Act (13 November 2024)"],
      [MVV, "Visit Maldives: new regulations on vaporiser products (9 November 2024)"]])
m['card'] = {"status": "stop", "head": "Banned: leave your vape at home.", "lines": ["Maldives law bans importing, possessing and using e-cigarettes, for visitors too. Visit Maldives says a vape you arrive with is held at the border until you leave."]}
m['lead'] = "Maldives law now bans e-cigarettes: importing, selling and using them is prohibited, and the 2025 amendment also names possession. WHO’s 2023 country profile (data as at 2022) predates the ban."
m['travel'] = "Do not pack a vape or e-liquid for the Maldives. Import has been banned since 15 November 2024, and the ban applies to visitors."
m['indoor'] = "The Maldives has banned using e-cigarettes altogether since 15 December 2024, so there is no place where a visitor may vape."
m['ttl'] = "Vaping in Maldives 2026: Banned"
m['desc'] = "Vapes are banned in the Maldives, for visitors too: no import since 15 November 2024, no possession or use since 15 December 2024. What happens at the border."
save('vape_extra.json', rawv, v, indent=1)

# The "what the WHO profile and the general rule" filler is wrong or repeated where national rules are now on the page
rawu, u = load('country_unique.json')
removed = []
for c in ['maldives', 'seychelles', 'latvia', 'austria', 'saudi-arabia']:
    for k in ('vape', 'vaping'):
        e = u.get(k, {}).get(c)
        if e and e.get('h', '').endswith('the WHO profile and the general rule') and not e.get('more'):
            del u[k][c]
            removed.append(c)
print('generic vape section removed:', removed)
save('country_unique.json', rawu, u, separators=(',', ':'))

sub('country_vape.js', "  const rows = [\n    ['General bans on e-cigarettes'",
    "  const XO = EXTRA[c.code] || {}; // newer national law than the WHO table, written in vape_extra.json\n  if (XO.lead) lead = XO.lead;\n  if (XO.travel) travel = XO.travel;\n  const rows = [\n    ['General bans on e-cigarettes'")
sub('country_vape.js', "D.minAge ? 'WHO reports a minimum age of sale of '", "XO.age ? XO.age : D.minAge ? 'WHO reports a minimum age of sale of '")
sub('country_vape.js', "  list.push('<strong>On the plane:</strong>",
    "  if (XO.lead) list.push('<strong>Ban row out of date:</strong> a newer national law is set out below.');\n  if (XO.age) list.push('<strong>Age row out of date:</strong> a newer national age limit is set out below.');\n  list.push('<strong>On the plane:</strong>")

# ================= airline topic pages
rawt, t = load('topics_new.json')


def tsec(a, k, section, faq=None, first=False):
    e = t[a][k]
    if first:
        e['sections'].insert(0, section)
    else:
        e['sections'].append(section)
    if faq:
        e['faq'] = e.get('faq', []) + [faq]
    return e


TRC = 'https://www.transavia.com/en-EU/conditions/conditions-of-carriage/'
e = tsec('Transavia', 'alcohol', {"h": "🥂 Drinking your own alcohol on a Transavia flight",
    "p": "From Transavia’s General Conditions of Carriage on transavia.com, read 28 November 2026.",
    "list": ["Only alcoholic drinks bought on board may be consumed there, so your duty-free bottle stays closed.",
             "Cabin crew may restrict both the sale and the drinking of alcohol for safety reasons.",
             "The conditions except alcoholic drinks from the risky substances that may never travel in baggage.",
             "Source: " + link(TRC, 'Transavia: General Conditions of Carriage')]},
    ["Can I drink my own alcohol on Transavia?", "No. Transavia’s conditions allow passengers to consume only alcoholic drinks bought on board."])
a = "Transavia's help pages returned an error (403), so this page gives"
assert a in e['answer']
e['answer'] = e['answer'].replace(a, 'This page gives')
e['checked'] = DT

MXP = 'https://www.milanomalpensa-airport.com/en/assistance/baggage-rules'
e = tsec('ITA Airways', 'perfume', {"h": "🛫 Perfume at Milan’s airports",
    "p": "From the baggage rules of the Milan airports operator, read 28 November 2026. It is the airports’ rule, not an ITA Airways rule.",
    "list": ["At Linate and Malpensa Terminal 1, liquids, aerosols and gels may go in containers of up to 2 litres, without taking them out of hand baggage.",
             "At Malpensa Terminal 2 the limit is 100 ml per container, in a clear plastic bag taken out of hand baggage.",
             "So check your Malpensa terminal before you pack a full-size bottle.",
             "Source: " + link(MXP, 'Milan Malpensa airport: baggage rules (unofficial for ITA Airways)')]},
    ["Can I carry a large perfume bottle through Milan?", "Up to 2 litres per container at Linate and Malpensa Terminal 1; only 100 ml at Malpensa Terminal 2."])

UXA = 'https://www.aireuropa.com/us/en/aea/travel-information/security/safety-measures-and-liquids.html'
e = t['Air Europa']['perfume']
ae = e['sections'][0]
drop = ('Size of each container', 'Medicines and special diets', 'Perfume bought at the airport or on board')
rows = ae['table']['rows']
kept = [r for r in rows if r[0] not in drop]
assert len(rows) - len(kept) == 3, rows
ae['table']['rows'] = kept
ae['h'] = '🇪🇸 What Spanish airports add, per Aena'
ae['p'] = 'From the Aena hand luggage page, read 17 November 2026 (the page shows only a 2026 copyright). Aena runs the Spanish airports; this is not an Air Europa page.'
ae['list'] = ['Source: ' + link(e['sources'][0][0], 'Aena: Hand luggage (unofficial for Air Europa)')]
tsec('Air Europa', 'perfume', {"h": "🧴 What Air Europa says about perfume and sprays",
    "p": "From Air Europa’s page on safety measures and liquids, read 28 November 2026.",
    "list": ["Perfumes, gels, creams, oils, lotions and toothpaste count as liquids, and so do aerosols, foams and deodorants.",
             "In hand baggage: containers of up to 100 ml inside one transparent resealable bag of up to 1 litre, one bag per passenger, shown separately at security.",
             "Larger amounts are allowed for liquid medicines needed on the journey, baby food, breast milk and sterilised water for babies, presented at security.",
             "Shop purchases made after security or on board may travel in the sealed bag with the receipt.",
             "Chemical substances, gases and incapacitating sprays are not permitted."]},
    ["Can I take perfume in my Air Europa cabin bag?", "Yes, in a container of up to 100 ml inside your single 1-litre resealable bag."], first=True)
e['answer'] = 'Air Europa counts perfume and sprays as liquids: in hand baggage they travel in containers of up to 100 ml, all inside one transparent resealable bag of up to 1 litre per passenger. Larger bottles bought after security or on board may travel sealed with the receipt.'
e['sources'] = [[UXA, 'Air Europa &mdash; Safety measures and liquids']]
e['unofficial'] = False
e['checked'] = DT

EIE = 'https://www.aerlingus.com/media/pdfs/conditions-of-carriage-emerald-airlines-feb-2026.pdf'
tsec('Aer Lingus', 'vape', {"h": "✈️ Aer Lingus Regional flights: carry it, never use it",
    "p": "From the Conditions of Carriage for flights operated by Emerald Airlines, which flies as Aer Lingus Regional, published on aerlingus.com (February 2026 file); read 28 November 2026.",
    "list": ["You may carry electronic cigarettes on board.",
             "Using an electronic cigarette, or any other kind of cigarette, on board the aircraft is strictly forbidden.",
             "Source: " + link(EIE, 'Aer Lingus: Conditions of Carriage, Emerald Airlines flights')]},
    ["Can I use my vape on an Aer Lingus Regional flight?", "No. The Emerald Airlines conditions let you carry it on board but strictly forbid using it."])
save('topics_new.json', rawt, t, indent=1)

# ================= airline medication pages


def sec(h, p, items, url, label):
    return '<section class="bd-sec"><h2>' + h + '</h2><p>' + p + '</p><ul>' + ''.join('<li>' + x + '</li>' for x in items) + '</ul><p class="bd-chk">Source: ' + link(url, label) + '</p></section>'


def med(file, marker, html):
    s = open(file, encoding='utf8', newline='').read()
    assert s.count(marker) == 1, marker
    i = s.index(marker)
    j = s.index('])', i) + 2
    assert s[j:j + 3] != ' + '
    s = s[:j] + ' + ' + json.dumps(html, ensure_ascii=False) + s[j:]
    open(file, 'w', encoding='utf8', newline='').write(s)


SN = 'https://www.goindigo.in/travel-information/en/passengers-with-special-needs.html'
med('airline_medication_b13.js', "extra: steps(['Pack medication in cabin baggage.'", sec('Portable oxygen concentrators on IndiGo',
    'From IndiGo’s page for passengers with special needs, in the Internet Archive copy of July 2025 because the live page did not open for us; read 28 November 2026.',
    ['Ask IndiGo at least 48 hours before departure to carry or use one.',
     'Only concentrators approved by the US Federal Aviation Administration are accepted, in hand or checked baggage, free of charge and subject to conditions.',
     'One used on board may weigh no more than 7 kg and sits under the seat in front during taxi, take-off and landing.',
     'Users are given a window seat, though not in rows 1, 12 and 13.',
     'Before checking a concentrator in, take out its lithium battery and keep the battery in your hand baggage.',
     'If cabin pressure drops, use the aircraft’s oxygen mask, not the concentrator.'], SN, 'IndiGo: Passengers with special needs'))
CZC = 'https://www.csair.com/cts-products/cts/fastdfs/20260626/3edae764dd49418582ef740225391b1a.pdf'
med('airline_medication_b13.js', "extra: steps(['Take the medical certification with you.'", sec('Oxygen concentrators, pregnancy and medical certificates',
    'From China Southern’s General Conditions of Carriage for Passengers and Baggage (June 2026 file on csair.com), read 28 November 2026.',
    ['Apply at least 48 hours ahead to use a portable oxygen concentrator, and bring a medical certificate, issued no more than 10 days before the flight, saying you need it throughout and are fit to fly.',
     'Batteries and spares must last the flight time plus three hours; China Southern does not promise power at your seat.',
     'Concentrator users are seated by a window where possible and never in an exit row.',
     'More than 32 and less than 36 weeks pregnant: bring a doctor’s certificate stating the week, issued within 30 days before the flight, and sign a risk notice.',
     'The conditions also list passengers who need intravenous injections among the cases that call for a medical certificate of fitness to fly.'], CZC, 'China Southern: General Conditions of Carriage'))

# ================= logs
l = json.load(open('ladder_log.json', encoding='utf8'))


def lg(key, tier, text):
    x = l.get(key) or {}
    x.setdefault(tier, []).append(text)
    x['date'] = D
    l[key] = x


lg('food/china', 'official', R + ': carry-in ban list (beijing.gov.cn Word file; english.shanghai.gov.cn English text)')
lg('food/morocco', 'reliable', R + ': Hespress/MAP and H24info on the ONSSA ban; copy of ADII guide (bladi.net). douane.gov.ma rejected the request; onssa.gov.ma home page showed no traveller rule')
lg('food/bulgaria', 'reliable', R + ': BNT 16 June 2026; Your Europe EN and BG. bfsa.egov.bg and customs.bg did not open (curl, pane)')
lg('country/maldives/vaping', 'official', R + ': presidency.gov.mv 32159 and 33779; Visit Maldives notice')
lg('country/latvia/vaping', 'official', R + ': LV portals 371405')
lg('country/austria/vaping', 'reliable', R + ': jusline.at TNRSG 1, 12, 13, 14; ris.bka.gv.at returned 503')
lg('country/saudi-arabia/vaping', 'official', R + ': MOH Anti-Smoking Law regulations (Wayback)')
lg('country/seychelles/vaping', 'official', R + ': SI 87 of 2023; Bill 4 of 2024')
for k, tx in [('airline/transavia/alcohol', TRC), ('airline/air-europa/perfume-aerosols', UXA), ('airline/aer-lingus/vape-e-cigarette', EIE),
              ('airline/indigo/medication', SN), ('airline/china-southern/medication', CZC)]:
    lg(k, 'official', R + ': ' + tx)
lg('airline/ita-airways/perfume-aerosols', 'reliable', R + ': ' + MXP)
save('ladder_log.json', open('ladder_log.json', encoding='utf8', newline='').read(), l, indent=1)

rawo = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(rawo)
paths = ['food/china', 'food/morocco', 'food/bulgaria'] + ['food/' + c.lower() for c in EUF]
paths += ['country/%s/vaping' % c for c in ['maldives', 'latvia', 'austria', 'saudi-arabia', 'seychelles']]
paths += ['airline/transavia/alcohol', 'airline/ita-airways/perfume-aerosols', 'airline/air-europa/perfume-aerosols', 'airline/aer-lingus/vape-e-cigarette', 'airline/indigo/medication', 'airline/china-southern/medication']
for p in paths:
    ov['/' + p + '/'] = D
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in rawo else out + tail(rawo))
print('ok', len(paths))
