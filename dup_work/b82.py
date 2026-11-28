# Batch 9 (28 November 2026): the pages at 51-52% duplicate; airline alcohol cards corrected for carriers that restrict alcohol in the cabin
import json

D = '2026-11-28'
DT = '28 November 2026'
R = 'read 28 November 2026'


def load(p):
    raw = open(p, encoding='utf8', newline='').read()
    return raw, json.loads(raw)


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


# ================= vaping
vraw, v = load('vape_extra.json')


def vsec(code, section, src=(), faq=None):
    e = v[code]
    e['sections'].insert(0, section)
    e['src'] = list(src) + e['src']
    if faq:
        e['faq'] = e.get('faq', []) + [faq]


PLU = 'https://api.sejm.gov.pl/eli/acts/DU/2026/1214/text/T/D20261214L.pdf'
vsec('PL', {"h": "🏛️ Where you may not vape in Poland, and the fine",
            "p": "Official source read 28 November 2026: the consolidated Act on protecting health against the effects of tobacco use (Dziennik Ustaw 2026, item 1214, in Polish, translated by us), articles 5, 6 and 13.",
            "list": ["E-cigarettes may not be used in healthcare facilities, schools, universities, social care units, indoor workplaces, culture and leisure venues, bars and restaurants.",
                     "The same applies on public transport, in passenger buildings, at transport stops, in sports halls, in children’s play areas and in other indoor places open to the public.",
                     "A town council may add further vapour-free public places.",
                     "Vaping where it is banned carries a fine of up to 500 złoty (article 13).",
                     "E-cigarettes and refill containers may not be supplied to anyone under 18."]},
     [[PLU, "Sejm legal database: consolidated tobacco law, Dziennik Ustaw 2026 item 1214 (in Polish)"]],
     ["Can I vape on a Polish tram or while waiting at the stop?", "No. The law names public transport, passenger buildings and transport stops, with a fine of up to 500 złoty."])

HUU = 'https://njt.jog.gov.hu/jogszabaly/1999-42-00-00'
vsec('HU', {"h": "🏛️ Hungary treats vaping like smoking",
            "p": "Official source read 28 November 2026: Act XLII of 1999 on the protection of non-smokers on the National Legislation Database (njt.jog.gov.hu, in Hungarian, translated by us), sections 2, 2/A and 7.",
            "list": ["Outside marked smoking spots, no e-cigarettes in the public rooms of places open to the public, on public transport or at work.",
                     "Pedestrian underpasses, enclosed passageways and public playgrounds are covered, with a 5 metre margin around a playground.",
                     "So are passenger areas of the railway, and transport stops and waiting areas, including 5 metres around an open one, plus 10 metres from a health provider’s public entrance.",
                     "Hotel rooms let and marked as smoking rooms are an exception.",
                     "For breaches in public outdoor areas, wardens can fine up to 30,000 forints on the spot; the health authority imposes a separate health protection fine on people aged 14 or over."]},
     [[HUU, "National Legislation Database: Act XLII of 1999 (in Hungarian)"]],
     ["Can I vape at a Budapest tram stop?", "No. The act bans it at transport stops and waiting areas, and within 5 metres of an open one."])

PTU = 'https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=1066&tabela=leis'
vsec('PT', {"h": "🏛️ Portugal’s smoking law covers vapes with nicotine",
            "p": "Official source read 28 November 2026: Law 37/2007, consolidated text on the site of the Lisbon Regional Public Prosecutor’s Office (in Portuguese, translated by us), articles 2, 4, 5, 15 and 25.",
            "list": ["Using an e-cigarette with nicotine counts as smoking, so it is banned wherever smoking is banned.",
                     "That includes workplaces, public services, health and school buildings, shops and shopping centres, hotels, restaurants and bars, museums and show venues.",
                     "It also covers airports, rail, bus and ferry terminals, the public areas of the metro, public transport and taxis.",
                     "Many of these places allow it in their open-air areas, and some may set aside smoking rooms.",
                     "E-cigarettes may not be sold to anyone under 18."]},
     [[PTU, "Lisbon Public Prosecutor’s Office: Law 37/2007, consolidated (in Portuguese)"]],
     ["Can I vape in a Lisbon metro station?", "Not with nicotine: the law bans it in the public areas of the metro."])

QAU = 'https://extranet.who.int/fctcapps/sites/default/files/2023-04/qatar_2018_annex-1_law_on_control_of_tobacco_and_its_derivatives_2016.pdf'
vsec('QA', {"h": "⚖️ What Qatar’s tobacco law says about e-cigarettes",
            "p": "Official text read 28 November 2026: Law No. 10 of 2016 on the control of tobacco and its derivatives, in the English copy filed with Qatar’s 2018 report to the WHO tobacco treaty secretariat.",
            "list": ["Article 7 bans importing, circulating, displaying, selling, distributing or making electronic cigarettes, and names no exception for personal use.",
                     "Breaking article 7 carries up to six months in prison, a fine of up to 100,000 riyals, or both (article 16).",
                     "On conviction a court may order the e-cigarettes confiscated, re-exported or destroyed, whatever the quantity (article 20)."]},
     [[QAU, "WHO treaty secretariat: Qatar Law No. 10 of 2016 (English copy)"]],
     ["What is the penalty for bringing a vape into Qatar?", "The law bans importing e-cigarettes and allows up to six months in prison, a fine of up to 100,000 riyals, or both, with confiscation."])

JMU = 'https://www.moh.gov.jm/programmes-policies/tobacco-control/'
vsec('JM', {"h": "🏛️ Where Jamaica bans vaping",
            "p": "Official source read 28 November 2026: the Ministry of Health and Wellness tobacco control page on the Public Health (Tobacco Control) Regulations, 2013.",
            "list": ["Holding a lit or electronic tobacco product is banned in enclosed public places, enclosed workplaces and public vehicles.",
                     "Even without a roof it is banned at government buildings, health facilities and pharmacies, sports facilities, schools, bus stops and station or port waiting areas.",
                     "Also on beaches, in parks and heritage sites, in outdoor dining areas and markets, at public swimming pools and at outdoor gatherings, and in areas for children.",
                     "The ban reaches 5 metres from the entrances, exits, windows and air intakes of those places."]},
     [[JMU, "Jamaica Ministry of Health and Wellness: Tobacco control"]],
     ["Can I vape on the beach in Jamaica?", "No. The Health Ministry lists beaches among the places where holding an electronic tobacco product is banned."])

KEU = 'https://www.the-star.co.ke/business/kenya/2026-11-26-mps-back-tougher-tobacco-controls-but-seek-safeguards-for-businesses'
vsec('KE', {"h": "📰 A bill before Kenya’s Parliament would bring vapes under the tobacco law",
            "p": "Less reliable than a law text (newspaper report): The Star, Kenya, 26 November 2026, read 28 November 2026. This is a bill, not law yet.",
            "list": ["The National Assembly health committee wants the Tobacco Control (Amendment) Bill, 2024 passed, with amendments.",
                     "It would place e-cigarettes, vaping devices, heated tobacco, nicotine pouches and synthetic nicotine under the Tobacco Control Act, 2007.",
                     "The committee kept a ban on selling these products online and restrictions on flavoured nicotine products.",
                     "Makers and importers would need the health minister’s approval before bringing products to market.",
                     "Source: " + link(KEU, "The Star: MPs back tougher tobacco controls")]},
     faq=["Is Kenya changing its vape law?", "A bill backed by a parliamentary health committee in November 2026 would bring vapes under the Tobacco Control Act; it was not law when we read the report."])

MAU = 'https://www.lodj.ma/Maroc-Des-fevrier-2026-une-norme-obligatoire-encadrera-les-cigarettes-electroniques-et-produits-sans-fumee_a148653.html?print=1'
vsec('MA', {"h": "📰 A product standard for vapes sold in Morocco from February 2026",
            "p": "Less reliable source (news site): L’ODJ, 21 October 2025, in French, read 28 November 2026. It is newer than the WHO table above.",
            "list": ["From February 2026, e-cigarettes, heated tobacco and nicotine pouches sold in Morocco must meet a mandatory standard of IMANOR, the national standards institute.",
                     "The standard covers composition, labelling, traceability and safety, with eleven items of information required on each pack.",
                     "Firms may not market the products without a certificate of conformity; the duty falls mainly on importers.",
                     "The article describes rules for sellers and gives no traveller quantity.",
                     "Source: " + link(MAU, "L’ODJ: mandatory standard for e-cigarettes (in French)")]})

USU = 'https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21'
vsec('US', {"h": "🪪 Buying vapes in the United States: age 21",
            "p": "Official source read 28 November 2026: the FDA page “Tobacco 21”.",
            "list": ["Since 20 December 2019 it has been illegal for a retailer to sell any tobacco product, e-cigarettes included, to anyone under 21.",
                     "Since 30 September 2024 retailers must check photo ID for buyers under 30.",
                     "These products may not be sold from vending machines where people under 21 are present or allowed in."]},
     [[USU, "U.S. FDA: Tobacco 21"]],
     ["Will a US shop ask for my passport to sell me a vape?", "The FDA requires retailers to check photo ID for anyone under 30, and sales to under-21s are illegal."])
save('vape_extra.json', vraw, v, indent=1)

# ================= country sections
uraw, u = load('country_unique.json')


def more(cat, c, h, p, src, url, label):
    u[cat][c].setdefault('more', []).append({"h": h, "p": p, "src": src, "side": True, "link": [url, label]})


more('tobacco', 'poland', 'Buying cigarettes in Poland: the sales rules',
     ['Cigarettes may not be sold loose or in packs of fewer than 20. Tobacco products and e-cigarettes may not be sold from vending machines, or from self-service shelves outside duty-free shops, and may not be supplied to anyone under 18.',
      'On smoking itself, the owner or manager of premises used as accommodation may exempt individual rooms from the indoor ban. Smoking where it is banned carries a fine of up to 500 złoty.'],
     'Official source read 28 November 2026: the consolidated tobacco law (Dziennik Ustaw 2026, item 1214, in Polish, translated by us), articles 5a, 6 and 13, in the Sejm legal database.',
     PLU, 'Sejm legal database: tobacco law, 2026 consolidated text (in Polish)')
more('tobacco', 'portugal', 'Smoking rooms and open-air exceptions in Portugal',
     ['Law 37/2007 bans smoking in a long list of places, but at many of them it is allowed in open-air areas. At service stations the open-air exception does not reach the refuelling zones, and on sea and river ferries smoking is allowed on open decks, subject to the operator’s rules.',
      'Show venues, casinos, shopping centres, restaurants and passenger terminals are among the places that may set aside smoking spaces, for adults only, with their own ventilation and no bar or food service. Hotels may keep up to 40% of rooms or floors for smokers.',
      'Cigarettes may not be sold to under-18s, by phone, post or internet, or in promotional or cut-price packs.'],
     'Official source read 28 November 2026: Law 37/2007, consolidated text (in Portuguese, translated by us), articles 4, 5 and 15, on the Lisbon Regional Public Prosecutor’s Office site.',
     PTU, 'Lisbon Public Prosecutor’s Office: Law 37/2007 (in Portuguese)')
MTU = 'https://era.org.mt/topic/trade-protected-species/'
more('plants', 'malta', 'Protected plants: check with Malta’s environment authority first',
     ['Plant health is only half of the rule. The Environment and Resources Authority (ERA) says many cacti species, various plant extracts used in cosmetics and supplements, and timbers such as rosewood are listed under CITES, the endangered species convention, and need compliance checks and prior authorisation, especially when brought from outside the EU.',
      'ERA recommends checking before bringing in plant or animal products from outside the EU, online purchases included. Owners must keep the CITES papers, and a specimen without them may be seized.'],
     'Official source read 28 November 2026: Environment and Resources Authority, Trade in protected species and CITES.',
     MTU, 'ERA Malta: Trade in protected species and CITES')
BEU = 'https://www.health.belgium.be/en/animals-and-plants/animals/cites-and-endangered-species/are-you-going-holiday-abroad-think-carefully'
more('plants', 'belgium', 'Souvenirs made from protected plants',
     ['Belgium’s federal health service warns that a souvenir on open sale abroad is not necessarily legal to bring home. Products from protected species imported illegally may be seized by customs, and you may be fined.',
      'Its list of souvenirs allowed without CITES papers includes up to three cactus rainsticks per person, up to four crocodile leather products and up to 125 g of sturgeon caviar in individually marked containers.'],
     'Official source read 28 November 2026: FPS Public Health, “Are you going on holiday abroad? Think carefully before buying a souvenir” (11 April 2016), in the Internet Archive copy because the live page refused our reader.',
     BEU, 'FPS Public Health Belgium: Holiday souvenirs and CITES')
HRU = 'https://carina.gov.hr/featured/information-for-passengers-natural-persons/wild-species/6718'
more('plants', 'croatia', 'Protected species: when Croatia asks for a CITES permit',
     ['Croatian Customs says protected wild species, plants included, may cross the border only with the permit or certificate of the competent authority, handed to a customs officer at the border office.',
      'Personal and household items, specimens among them, can be exempt, for example when they are in the personal luggage of someone arriving from or leaving for a country outside the EU, or among the belongings of someone moving home. The page states these conditions briefly, so ask customs before relying on the exemption.'],
     'Official source read 28 November 2026: Croatian Customs Administration, Wild species.',
     HRU, 'Croatian Customs: Wild species')
JOU = 'https://www.amlu.gov.jo/ebv4.0/root_storage/en/eb_list_page/instructions_for_declaring_cash_and_cross-border_bearer_negotiable_instruments_for_the_year_2021.pdf'
u['cash']['jordan'] = {
    "h": "Declaring cash in Jordan: what the instructions say",
    "p": ['Jordan’s 2021 instructions require every person arriving or leaving to declare cash and bearer negotiable instruments to the Customs Department, on its form, when their total value is more than 10,000 Jordanian dinars or the equivalent. Foreign currency is converted at Central Bank of Jordan rates.',
          'The duty covers money carried on you, in luggage or in a vehicle, and money sent as a shipment or by post. For someone not fully capable, such as a child, the guardian or other responsible person answers for the declaration.',
          'Customs may ask where the money comes from and what it is for. Customs controls apply, and money can be seized, when there is no declaration, a false one, or a suspected link to money laundering or other crime.'],
    "src": 'Official source read 28 November 2026: Instructions for declaring cash and cross-border bearer negotiable instruments for 2021, in the English translation (marked not official) on the Anti-Money Laundering Unit site, in the Internet Archive copy because the live site did not open for us.',
    "link": [JOU, 'Jordan Anti-Money Laundering Unit: Cash declaration instructions, 2021 (PDF)']}
JMJ = 'https://jis.gov.jm/persons-entering-jamaica-with-money-exceeding-us10000-must-declare-it/'
JMF = 'https://www.fid.gov.jm/joint-enforcement-at-nmia-leads-to-poca-convictions-travelers-fined-after-declaring-large-cash-sums/'
u['cash']['jamaica'] = {
    "h": "Declaring cash when you arrive in Jamaica",
    "p": ['The Financial Investigations Division (FID) says anyone entering with more than US$10,000 or the equivalent, in cash, cheque or any other instrument, must declare it on the online C5 customs and immigration form at enterjamaica.gov.jm.',
          'State where the money comes from and be ready to prove it, for instance with a payslip. The FID says having the money is not the problem; failing to declare it can put you before the courts.'],
    "src": 'Official source read 28 November 2026: Jamaica Information Service, the government news agency, interview with the FID (22 November 2024).',
    "link": [JMJ, 'Jamaica Information Service: money over US$10,000 must be declared'],
    "more": [{"h": "Leaving Jamaica with cash: what a 2025 case shows",
              "p": ['The FID reports that two men flying to Curaçao declared US$64,408 and US$50,000, were charged under section 101A of the Proceeds of Crime Act, pleaded guilty and were fined $200,000 each.',
                    'The money was said to come from payments by a Jamaican wholesaler. Customs reminded the public that cash payments of J$1 million or more are prohibited under the Act, even when split into linked smaller sums, so a declaration does not make such a payment lawful.'],
              "src": 'Official source read 28 November 2026: Financial Investigations Division release on convictions at Norman Manley International Airport (13 October 2025).',
              "side": True,
              "link": [JMF, 'FID Jamaica: airport convictions under the Proceeds of Crime Act']}]}
save('country_unique.json', uraw, u, separators=(',', ':'))

# ================= food
fraw, f = load('food_extra.json')


def sc(when, status, tag, *lines):
    return {"when": when, "status": status, "tag": tag, "lines": list(lines)}


def topic(i, label, status, verdict, head, scen, src=None, official=None):
    t = {"id": i, "label": label, "status": status, "verdict": verdict, "head": head, "scen": scen}
    if src:
        t["src"] = src
        t["official"] = official
    return t


VSD = ['https://www.moa.gov.jm/sites/default/files/DECEMBER%202%202025%20update%20DOMESTIC%20IMPORT%20OF%20ANIMAL%20and%20animal%20products%20document%20for%20NMIA%20and%20MBJ.pdf', 'Jamaica Veterinary Services Division: animal products for personal use (updated 2 December 2025, PDF)']
JAI = f['Jamaica']['sources'][0]
old = {t['id']: t for t in f['Jamaica']['topics']}
for k in ('produce', 'coconut'):
    old[k]['src'] = [JAI]
    old[k]['official'] = False
f['Jamaica'] = {
    "checked": DT,
    "answer": "Jamaica’s Veterinary Services Division lets travellers bring a short list of animal products, up to 5 kg, without a permit. Meat, poultry, fish and pasteurised dairy beyond that need a permit and must come from the USA or Canada, up to 45 kg. Eggs, raw honey, conch, lobster and unpasteurised cheese are banned. Declare every animal product. Fruit, vegetables and plants need a phytosanitary certificate, according to the IATA Travel Centre.",
    "sources": [VSD, JAI],
    "faq": [["Can I bring cheese into Jamaica?", "Pasteurised cheese needs a veterinary import permit and must come from the USA or Canada, up to 45 kg. Unpasteurised cheese is prohibited."],
            ["Can I bring fried or salted fish?", "Yes, cooked, salted, dried or smoked fish up to 5 kg needs no permit, in original packaging or clearly identifiable, with proof of origin and subject to inspection."],
            ["What about fruit and vegetables?", "They require a phytosanitary certificate, according to the IATA Travel Centre."],
            ["Are eggs allowed?", "No. Table eggs and hatching eggs of domestic poultry are prohibited."]],
    "topics": [
        topic('meat', 'Meat & fish', 'warn', 'Depends', 'Some fish and canned goods are free of permits; fresh and cured meat is not.', [
            sc('Up to 5 kg without a permit', 'go', 'Allowed', 'Salted, dried or smoked fish and shrimp, cooked fish, and commercially sealed canned fish.', 'Canned corned beef, Vienna sausage and Spam from the USA or Canada only.', 'No uncooked meat or poultry; keep original packaging with proof of origin. Everything can still be inspected.'),
            sc('Meat, poultry and other seafood', 'warn', 'Permit', 'Beef, lamb, goat and poultry, processed and cured kinds included, need a veterinary import permit, as do other fish and shellfish: up to 45 kg, from the USA or Canada.'),
            sc('Restricted or banned', 'stop', 'Restricted', 'Meat, poultry, fish, dairy and pet food from Asia, Europe, Africa, Central and South America, the Dominican Republic, Haiti and some Caribbean countries are restricted: ask the permit office first.', 'Restricted too: US pork other than sealed cans, canned pork ham, raw or cured pork ham and raw chicken.', 'Live or processed conch and lobster are prohibited.')]),
        topic('dairy', 'Dairy, eggs & honey', 'warn', 'Depends', 'Pasteurised dairy needs a permit; eggs and raw honey are banned.', [
            sc('Milk, cheese and butter', 'warn', 'Permit', 'Pasteurised milk, cheese and butter need a veterinary permit, up to 45 kg, from the USA or Canada.', 'Unpasteurised cheese and butter are prohibited.'),
            sc('Eggs and honey', 'stop', 'Not allowed', 'Table eggs and hatching eggs of domestic poultry are prohibited.', 'So are raw honey and honey products.'),
            sc('Baby and dry foods, up to 5 kg', 'go', 'Allowed', 'Infant formula, nutritional drinks, dry drink mixes, baked goods and puddings without meat, cereals, sweets and instant noodle soups need no permit.')]),
        old['produce'],
        old['coconut'],
        topic('declare', 'Declare it', 'warn', 'Declare', 'Declare every animal product on arrival.', [
            sc('The C5 form', 'warn', 'Declare', 'The law requires travellers to declare all products of animal origin on the electronic C5 passenger form: answer yes to item 1 under “I am bringing”.')])],
}
CUB = ['https://onlinetours.es/blog/cuba/que-se-puede-llevar-a-cuba/', 'Less reliable source: Onlinetours travel blog on Cuban customs rules (2025, in Spanish)']
c = f['Cuba']
c['topics'] = [t for t in c['topics'] if t['id'] not in ('fresh', 'notread')]
c['topics'] += [
    topic('fresh', 'Meat, dairy, eggs & produce', 'stop', 'Fresh banned', 'A travel blog lists fresh animal and plant foods as banned.', [
        sc('Fresh and cured meat', 'stop', 'Not allowed', 'Fresh, raw or frozen meat without official health certification, and sausages or hams that are not vacuum packed.'),
        sc('Dairy and honey', 'stop', 'Not allowed', 'Fresh milk, yoghurt and other fresh dairy, and honey that is unprocessed or uncertified.'),
        sc('Fruit, vegetables and plants', 'stop', 'Not allowed', 'Fresh fruit, vegetables and tubers, even for your own use, and plants, seeds, cuttings, bulbs and fresh flowers.'),
        sc('Processed food', 'go', 'Accepted', 'The blog says animal or plant food is accepted only when industrially processed, vacuum packed and visibly labelled, such as canned goods, nuts and biscuits.')], [CUB], False),
    topic('duty', 'Duty on food', 'warn', 'Exempt', 'The blog reports a duty exemption for food.', [
        sc('Food in a separate bag', 'go', 'Duty free', 'Food, toiletries and medicines for personal use are reported free of duty with no value or weight limit, packed apart from the rest of your luggage.', 'The measure dates from July 2021 and has been extended more than once: the blog describes it as in force in October 2025, so check before you fly.')], [CUB], False)]
c['checked'] = DT
c['answer'] = "Cuba’s own customs pages did not give us a traveller food rule, so this comes from two unofficial sources. The IATA Travel Centre says canned food and treated animal products are strictly regulated and usually need a permit. A 2025 travel blog says fresh meat, fresh dairy, fresh fruit and vegetables, plants and seeds are banned, while industrially processed, vacuum-packed and labelled food is accepted. Neither names eggs, and the IATA page shows no date, so confirm with Cuban customs."
c['sources'] = c['sources'] + [CUB]
c['faq'] = [["Can I bring canned food into Cuba?", "The IATA page lists canned food as strictly regulated, usually needing a permit before arrival; a 2025 travel blog says labelled canned goods are accepted. Ask Cuban customs."],
            ["Can I bring fresh meat or fruit?", "A 2025 travel blog lists both as banned: uncertified fresh meat, and fresh fruit and vegetables even for personal use."],
            ["Is food taxed?", "The blog reports a duty exemption for food for personal use, packed separately; check it is still in force."]]
save('food_extra.json', fraw, f, indent=1)

# ================= airline topic pages
traw, t = load('topics_new.json')


def tsec(a, k, h, p, items, faq=None, first=False):
    e = t[a][k]
    s = {"h": h, "p": p, "list": items}
    e['sections'].insert(0, s) if first else e['sections'].append(s)
    if faq:
        e['faq'] = e.get('faq', []) + [faq]
    return e


TAPU = 'https://flytap.com/en-rs/baggage/dangerous-goods'
tsec('TAP Air Portugal', 'power', '🔋 Spare batteries and smart bags on TAP',
     'From TAP’s “Forbidden and dangerous items” page on flytap.com, read 28 November 2026.',
     ['Spare batteries up to 100 Wh travel in hand baggage only, and TAP’s approval is needed for more than 20.',
      'Spare batteries of 100 to 160 Wh need approval, with no more than two per passenger.',
      'Devices with batteries up to 100 Wh need approval when you carry more than 15.',
      'A smart bag with a removable battery may be checked once the battery is out and carried into the cabin.',
      link(TAPU, 'TAP: Forbidden and dangerous items')])
A3U = 'https://en.aegeanair.com/travel-info/travelling-with-aegean/baggage/dangerous-goods/'
tsec('Aegean', 'power', '🛄 A power bank left in a checked bag at Athens',
     'From Aegean’s Dangerous Goods page, in the Internet Archive copy of 26 October 2026; read 28 November 2026.',
     ['Since 8 September 2026 Athens International Airport screens checked bags more closely for items banned from the hold, power banks, spare lithium batteries and e-cigarettes among them.',
      'A found item is removed in a camera-monitored area with an airport representative present, then sent for recycling.',
      'The airport leaves a notice inside the bag saying what was taken out.',
      link(A3U, 'Aegean: Prohibited items and baggage guidelines')])
AYU = 'https://www.finnair.com/en/baggage-on-finnair-flights/travelling-with-restricted-items'
e = tsec('Finnair', 'power', '🔋 What Finnair’s restricted items page adds',
         'From Finnair’s “Travelling with restricted items” page, in the Internet Archive copy of 24 October 2026; read 28 November 2026.',
         ['Power banks travel in the cabin only, at most two per person.',
          'Keep them where you can watch them, preferably on you, and tell the crew at once if one overheats or bulges.',
          'Using a power bank to charge your devices, and charging it from the aircraft outlet, are both banned.',
          'Lithium-ion batteries over 160 Wh, and lithium metal batteries over 2 g, are forbidden in all baggage.',
          'Protect the terminals: original packaging, tape, or a separate bag or case for each battery.',
          link(AYU, 'Finnair: Travelling with restricted items')],
         ['How many power banks can I take on Finnair?', 'At most two per person, in the cabin only.'])
e['answer'] = "Finnair allows at most two power banks per person, in the cabin only, and bans both charging them from the aircraft outlet and using them to charge your devices during the flight."
e['sections'][0]['list'] = [x for x in e['sections'][0]['list'] if 'Not on the page' not in x] or ['The FAQ gives no number or size limit; the next section does.']
AYF = 'https://www.finnair.com/en/frequently-asked-questions/food-and-diets/is-smoking-or-drinking-alcohol-allowed-on-board--3767742'
e = tsec('Finnair', 'alcohol', '🥂 Drinking your own bottle on a Finnair flight',
         'From Finnair’s answer “Is smoking or drinking alcohol allowed on board?”, in the Internet Archive copy of 1 September 2026; read 28 November 2026.',
         ['Drinking alcohol you brought yourself is not allowed: the aircraft is a licensed area for serving and selling alcohol.',
          'Drinks served on board are the ones you may have, and Finnair asks passengers to drink responsibly.',
          link(AYF, 'Finnair: smoking and drinking on board')],
         ['Can I drink my own alcohol on Finnair?', 'No. The aircraft is a licensed area, so only drinks served on board may be consumed.'])
e['sections'][0]['list'] = [x for x in e['sections'][0]['list'] if 'Not on the page' not in x] or ['For drinking on board, see the next section.']
KEI = 'https://www.airport.kr/ap_en/1468/subview.do'
tsec('Korean Air', 'alcohol', '🛍️ Duty-free bottles at Incheon, before you connect',
     'Not from Korean Air: from Incheon International Airport’s “Transfer Security Screening Information” page, read 28 November 2026.',
     ['Liquids go in the cabin only in containers of 100 ml or less, in a sealed transparent 1-litre bag.',
      'Duty-free purchases are carried only when packed in a duty-free liquid item bag.',
      'Airports abroad can apply other transfer rules and may take your bottle, so check the connecting country with Korean Air or your agent.',
      link(KEI, 'Incheon Airport: Transfer security screening')])
KQU = 'https://www.kenya-airways.com/en-us/policies/conditions-of-carriage/'
e = tsec('Kenya Airways', 'alcohol', '📜 Drinking on board: what Kenya Airways’ conditions say',
         'From Kenya Airways’ Conditions of Carriage, in the Internet Archive copy of 18 June 2026; read 28 November 2026. They set no bottle limit.',
         ['Rules on drinking alcohol on board sit in separate regulations that the airline gives on request.',
          'Carriage may be refused if your condition, including impairment from alcohol or drugs, is a hazard or risk (article 7).',
          'Ignoring crew instructions on alcohol can lead to restraint, removal at any point and prosecution (article 11).',
          link(KQU, 'Kenya Airways: Conditions of carriage')])
e['answer'] = "Kenya Airways states no bottle limit that we found: its conditions keep onboard drinking rules in separate regulations available on request. For bottles in your bags the IATA limit applies, 5 L per person for drinks above 24% up to 70%, and the Kenyan customs allowance is below."
LOU = 'https://lotnisko-chopina.pl/en/news/security-control-modernisation/'
LOD = 'https://deeparrival.com/news/warsaw-chopin-airport-100ml-liquid-limit-ends-november-2026/'
tsec('LOT Polish', 'perfume', '🛫 Perfume through security at Warsaw Chopin Airport',
     'Not from LOT: Warsaw Chopin Airport’s notice of 6 May 2026 and a news report of 3 November 2026 (Deep Arrival, less reliable), both read 28 November 2026.',
     ['The airport’s notice keeps the old rule while new scanners are installed: containers of 100 ml or less in one transparent resealable bag of up to 1 litre.',
      'Deep Arrival reported that lanes in zones A and B and Fast Track already took containers of up to 2 litres, and that the airport expected every checkpoint to follow by the end of November.',
      'Until you know your lane has a new scanner, pack perfume over 100 ml in your checked bag.',
      link(LOU, 'Warsaw Chopin Airport: security modernisation') + '; ' + link(LOD, 'Deep Arrival: Warsaw liquid limit')])
IBU = 'https://help.iberia.com/frequently_asked_question/can-i-smoke-e-cigarettes-on-an-iberia-flight'
IBE = 'https://www.iberia.com/gb/luggage/electronic-devices/'
e = tsec('Iberia', 'vape', '🎒 Where Iberia wants your vape during the flight',
         'From Iberia’s help centre answer “Can I smoke e-cigarettes on an Iberia flight?” and its electronic devices page, in Internet Archive copies of May and June 2026; read 28 November 2026.',
         ['Carry it in its case or a protective bag.',
          'On board, keep it in your pocket, the seat pocket or under the seat in front: overhead lockers are strictly forbidden.',
          'Do not use or recharge it.',
          'Flights to Venezuela will not let these devices into the country, where their sale and use are prohibited.',
          link(IBU, 'Iberia help: e-cigarettes') + '; ' + link(IBE, 'Iberia: electronic devices')],
         ['Can my vape go in the overhead locker on Iberia?', 'No. Iberia says to keep it in a pocket, the seat pocket or under the seat in front.'])
e['sections'][0]['list'] = [x for x in e['sections'][0]['list'] if 'Not on the page' not in x] + ['<strong>Not on these pages:</strong> a battery size or e-liquid limit for vapes.']
MSU = 'https://www.egyptair.com/eanew/Updated_conditions_of_carriage_Mar13.pdf'
tsec('EgyptAir', 'vape', '📜 EgyptAir’s non-smoking rule',
     'From EgyptAir’s Conditions of Carriage (the 2010 edition on egyptair.com, in the Internet Archive copy of April 2025), read 28 November 2026. They do not name e-cigarettes.',
     ['All EgyptAir flights are non-smoking, and smoking is prohibited in every area of the aircraft (article 11.3).',
      'The airline may refuse to carry a passenger who fails to observe the non-smoking rule (article 7.1.11).',
      'Passengers who ignore crew instructions on smoking may be restrained, put off the aircraft and prosecuted (article 11).',
      'The text is older than most vaping rules, so treat a vape as covered and ask before assuming otherwise.',
      link(MSU, 'EgyptAir: Conditions of carriage (PDF)')])
OZU = 'https://flyasiana.com/C/KR/EN/contents/restricted-transport-items'
tsec('Asiana', 'vape', '🧳 Keeping a vape and spare batteries on Asiana',
     'From Asiana’s Restricted Items page (Korea edition, in English) on flyasiana.com, read 28 November 2026.',
     ['Tape the terminals of spare batteries or put each one in its own clear zip bag, and carry it on your person: the overhead bin is strictly prohibited.',
      'Asiana says power banks, e-cigarettes and wireless heating devices found in the cabin, at check-in counters or in lounges are disposed of at once because of fire risk.',
      'It warns that some countries, such as Thailand, Taiwan, Vietnam and Singapore, completely ban bringing in e-cigarettes.',
      link(OZU, 'Asiana: Restricted items (Korea edition)')],
     ['Which destinations does Asiana warn about for vapes?', 'It names Thailand, Taiwan, Vietnam and Singapore as examples of countries that ban importing e-cigarettes.'])
PSL = 'https://philstarlife.com/amp/article/445511-power-banks-exceeding-160wh-not-longer-allowed-flights'
tsec('Philippine Airlines', 'power', '🇵🇭 The Philippine aviation regulator’s power bank limits',
     'Not from PAL: a PhilStar Life report (7 March 2025) of a reminder by the Civil Aviation Authority of the Philippines (CAAP), read 28 November 2026. Less reliable than the authority’s own text, and older than PAL’s advisory above.',
     ['Power banks are not allowed in checked baggage; hand carry is permitted.',
      'Up to 100 Wh needs no approval, 100 to 160 Wh needs the airline’s approval, and above 160 Wh may not fly.',
      'PAL’s own advisory above stops at 100 Wh per power bank, so on PAL plan on that stricter figure.',
      link(PSL, 'PhilStar Life: CAAP power bank reminder')])

ACU = 'https://pcm.ca.amadeus.com/HK/GB/General-Conditions-of-Carriage-for-Passengers-and-Baggage'
e = t['Air China']['alcohol']
old_s = e['sections']
caac = old_s[1]
caac['p'] = "The Civil Aviation Administration of China (CAAC) travel guide for flights in China gives the same cabin answer. The page is in Chinese and the figures below are translated by us."
caac.pop('list', None)
cus = old_s[2]
cus['p'] = cus['p'].replace(' The official customs site could not be read.', '')
e['sections'] = [{"h": "🍷 What Air China says about alcohol",
                  "p": "From Air China’s General Conditions of Carriage for Passengers and Baggage, article 6.2.5.8, on its Amadeus-hosted booking site, read 28 November 2026.",
                  "table": {"head": ["Question", "Air China rule"], "rows": [["Cabin bag", "No: alcoholic drinks travel only as checked baggage"], ["Packaging", "Retail packaging with complete, clear labels; solid, sealed outer packing so nothing leaks"], ["Container size", "5 L or less each"], ["24% alcohol or less", "No quantity limit"], ["Above 24% up to 70%", "Up to 5 L per passenger"], ["Above 70%", "Refused"], ["Stricter local law", "Applies for the origin, transit and destination"]]}},
                 caac, cus]
e['answer'] = "Air China takes alcoholic drinks as checked baggage only: in retail packaging, containers of 5 L or less, no quantity limit up to 24% alcohol, 5 L per passenger above 24% up to 70%, and nothing above 70%."
e['faq'] = [["Can I carry alcohol in the cabin on Air China?", "No. Air China’s conditions say alcoholic drinks can only be transported as checked baggage."],
            ["How much alcohol can I check on Air China?", "Up to 24% there is no quantity limit; above 24% up to 70% it is 5 L per passenger; above 70% is refused."]]
e['sources'] = [[ACU, "Air China &mdash; General Conditions of Carriage for Passengers and Baggage"]] + [s for s in e['sources'] if 'iata.org' not in s[0]]
e['unofficial'] = False
e['checked'] = DT
save('topics_new.json', traw, t, indent=1)


# ================= Saudia medication
def med(file, marker, html):
    s = open(file, encoding='utf8', newline='').read()
    assert s.count(marker) == 1, marker
    i = s.index(marker)
    j = s.index('])', i) + 2
    assert s[j:j + 3] != ' + '
    s = s[:j] + ' + ' + json.dumps(html, ensure_ascii=False) + s[j:]
    open(file, 'w', encoding='utf8', newline='').write(s)


SVP = 'https://www.saudia.com/pages/before-flying/special-assistance/medif'
SVH = 'https://www.saudia.com/before-flying/special-assistance/special-care/travel-health-requirements'
items = ['Tell Saudia how the pregnancy is progressing when you book and again at check-in.',
         'Travel is allowed up to the 8th month without medical clearance, but clearance is needed if the birth is expected within 4 weeks, the progress or due date is uncertain, there were earlier multiple births, or complications are expected.',
         'After week 32 the page asks for a MEDIF form completed by a doctor, valid for 10 days from issue.',
         'Carriage is refused from 35 weeks.',
         'An older Saudia health page (copy of July 2023) gives 7 days for the certificate, so ask which applies. It also says newborns are accepted after their first week, or from 48 hours old with medical clearance.']
med('airline_medication_b14.js', "extra: steps(['Carry your medicine in its original packaging with the prescription.'",
    '<section class="bd-sec"><h2>Flying pregnant or with a newborn on Saudia</h2><p>From Saudia’s medical information form page (Internet Archive copy of August 2025) because the live page blocked our reader; read 28 November 2026.</p><ul>' + ''.join('<li>' + x + '</li>' for x in items) + '</ul><p class="bd-chk">Sources: ' + link(SVP, 'Saudia: Medical information form') + '; ' + link(SVH, 'Saudia: Travel health requirements') + '</p></section>')

# ================= pets: Malaysia from the MAQIS page itself
s = open('canitakethis.html', encoding='utf8', newline='').read()
i = s.index('"Malaysia":{"src":{"label":"USDA APHIS')
j = s.index(',"Colombia":{', i)
pet = {"src": {"label": "MAQIS (Malaysian Quarantine and Inspection Services) — Importing pets into Malaysia (in Malay)", "url": "https://www.maqis.gov.my/index.php/haiwan-kesayangan/"},
       "head": "Dogs and cats need a MAQIS import permit, a microchip and a vet certificate used within 7 days.",
       "lines": ["MAQIS says a dog or cat must be at least 3 months old and travel with a valid MAQIS import permit and an ISO 11784/11785 microchip.",
                 "The exporting country’s veterinary authority issues the health certificate, and the animal must leave within 7 days of that date. Bring the vaccination book or pet passport with vaccine, treatment and health history.",
                 "Restricted breeds need the MAQIS Director General’s written approval before you apply for the permit.",
                 "Quarantine length depends on the exporting country; animals that need it go to a quarantine station on arrival, and must fly straight to the designated landing point.",
                 "The US agriculture department adds that the permit is applied for through the MAQIS online system, ePermit Dagangnet. The MAQIS guide dates from 2016 (read 28 November 2026 in an archived copy), so confirm before travel."]}
s = s[:i] + '"Malaysia":' + json.dumps(pet, ensure_ascii=False, separators=(',', ':')) + s[j:]
open('canitakethis.html', 'w', encoding='utf8', newline='').write(s)

# ================= airline alcohol cards: the generic "carry it on" answer is wrong for these carriers
AL = {
    'Saudia': {"label": "Saudia — Terms and passenger advice", "url": "https://www.saudia.com/pages/help/useful-links/legal-and-terms-and-conditions/saudia-terms-conditions-passenger-advice-notices-and-liability", "chk": "23 November 2026",
               "c": ["stop", "No - Saudia does not carry alcohol.", ["Saudia says it does not serve alcohol, or permit guests to carry or drink it, on its flights.", "Saudi Arabia also bans importing alcohol."]],
               "h": ["stop", "No - not in checked bags either.", ["Saudia does not permit guests to carry alcohol on its flights.", "Saudi Arabia also bans importing alcohol."]]},
    'Air China': {"label": "Air China — General Conditions of Carriage", "url": ACU, "chk": DT,
                  "c": ["stop", "No - checked baggage only.", ["Air China says alcoholic drinks can only be transported as checked baggage."]],
                  "h": ["go", "Yes - in your checked bag.", ["Retail packaging, each container 5 L or less.", "24% or less: no quantity limit. Above 24% to 70%: 5 L per passenger. Above 70%: refused."]]},
    'China Southern': {"label": "China Southern — General Conditions of Carriage", "url": "https://www.csair.com/cts-products/cts/fastdfs/20260626/3edae764dd49418582ef740225391b1a.pdf", "chk": "22 November 2026",
                       "c": ["warn", "Only if bought after security.", ["China Southern bans alcohol in carry-on unless you bought it in the terminal’s sterile area after security.", "Alcohol from anywhere else goes in your checked bag, and you may not drink your own on board."]],
                       "h": ["go", "Yes - in your checked bag.", ["24% or less: unrestricted.", "Above 24% to 70%: 5 L net per person. Above 70%: not accepted."]]},
    'China Eastern': {"label": "China Eastern — General Conditions for Transportation", "url": "https://www.ceair.com/global/en_static/Announcement/TravelTips/dsGeneralCondition/chinaEasternLuggageRules/domesticRules/202201/W020260724485859129374.pdf", "chk": "22 November 2026",
                      "c": ["warn", "Only if bought in the terminal.", ["China Eastern says alcohol must go in checked baggage, except what you buy in the passenger terminal.", "You may not drink your own alcohol on board."]],
                      "h": ["go", "Yes - in your checked bag.", ["24% or less: no restriction.", "Above 24% to 70%: 5 L per passenger. Above 70%: prohibited."]]},
    'Air India': {"label": "Air India — Restricted baggage and prohibited items", "url": "https://www.airindia.com/in/en/travel-information/baggage-guidelines/restricted-baggage.html", "chk": "18 October 2026",
                  "c": ["warn", "Not in carry-on, with exceptions.", ["Air India marks alcoholic drinks as not allowed in carry-on.", "It notes exceptions for international transfer passengers under its liquids policy."]],
                  "h": ["go", "Yes - in your checked bag.", ["5 L net per person between 24% and 70% alcohol.", "Original retail packaging, each receptacle 5 L or less."]]},
    'Volaris': {"label": "Volaris — Restricted and forbidden items", "url": "https://cms.volaris.com/en/travel-info/baggage-policy/restricted-and-forbidden-items/", "chk": DT,
                "c": ["stop", "No - checked baggage only.", ["Volaris says alcoholic beverages travel in checked baggage only."]],
                "h": ["go", "Yes - in your checked bag.", ["Up to 5 L per passenger.", "No more than 70% alcohol by volume."]]},
}
sub('canitakethis.html', "      var LR=cat==='liquids'?LIQ_RULES[airline]:null;\n",
    "      var AR=cat==='alcohol'?ALC_RULES[airline]:null;\n"
    "      if(AR){\n"
    "        var av=carry?AR.c:AR.h,ar=R(av[0],av[1],av[2],'From '+airline+\"'s own published rules, checked \"+AR.chk+'. Rules change, so confirm with the airline before you fly.');\n"
    "        ar.source={label:AR.label,url:AR.url,sub:'Alcohol rules'};ar.sources=[ar.source];return ar;\n"
    "      }\n"
    "      var LR=cat==='liquids'?LIQ_RULES[airline]:null;\n")
sub('canitakethis.html', 'var LIQ_RULES={', 'var ALC_RULES=' + json.dumps(AL, ensure_ascii=False, separators=(',', ':')) + ';\nvar LIQ_RULES={')

# ================= logs
l = json.load(open('ladder_log.json', encoding='utf8'))


def lg(key, tier, text):
    x = l.get(key) or {}
    x.setdefault(tier, []).append(text)
    x['date'] = D
    l[key] = x


def off(key, text):
    lg(key, 'official', R + ': ' + text)


def rel(key, text):
    lg(key, 'reliable', R + ': ' + text)


off('country/poland/vaping', 'consolidated tobacco law DU 2026/1214 ' + PLU)
off('country/poland/tobacco', 'consolidated tobacco law DU 2026/1214 ' + PLU)
off('country/hungary/vaping', 'Act XLII of 1999 ' + HUU)
off('country/portugal/vaping', 'Law 37/2007 consolidated ' + PTU)
off('country/portugal/tobacco', 'Law 37/2007 consolidated ' + PTU)
off('country/qatar/vaping', 'Law 10 of 2016 ' + QAU)
off('country/jamaica/vaping', 'MOH tobacco control page ' + JMU)
off('country/united-states/vaping', 'FDA Tobacco 21 ' + USU)
off('country/kenya/vaping', 'no official text newer than the WHO profile found for vapes; bill pending')
rel('country/kenya/vaping', 'The Star 26 November 2026 ' + KEU)
off('country/morocco/vaping', 'searched for the IMANOR order and law 66-20 text; not opened')
rel('country/morocco/vaping', 'L’ODJ 21 October 2025 ' + MAU + '; medias24 and laverite.ma refused our reader')
off('country/malta/plants-seeds', 'ERA CITES page ' + MTU)
off('country/belgium/plants-seeds', 'FPS Public Health souvenirs page, archived copy ' + BEU)
off('country/croatia/plants-seeds', 'Croatian Customs wild species ' + HRU)
off('country/jordan/cash', '2021 cash declaration instructions, archived copy ' + JOU)
off('country/jamaica/cash', 'JIS ' + JMJ + ' ; FID ' + JMF)
off('food/jamaica', 'VSD personal use list, 2 December 2025 ' + VSD[0])
rel('food/jamaica', 'IATA Travel Centre kept for produce and coconut')
off('food/cuba', 'aduana.gob.cu home page opened; no traveller food page readable (404, then no connection)')
rel('food/cuba', 'Onlinetours travel blog ' + CUB[0])
off('pets/malaysia', 'MAQIS pet import page, archived copy of 27 November 2026')
off('airline/tap-air-portugal/power-bank', 'TAP dangerous goods page ' + TAPU)
off('airline/aegean/power-bank', 'Aegean dangerous goods, archived 26 October 2026 ' + A3U)
off('airline/finnair/power-bank', 'Finnair restricted items, archived 24 October 2026 ' + AYU)
off('airline/finnair/alcohol', 'Finnair FAQ, archived 1 September 2026 ' + AYF)
off('airline/korean-air/alcohol', 'Korean Air restricted items page already quoted; no transfer page found')
rel('airline/korean-air/alcohol', 'Incheon Airport transfer screening ' + KEI)
off('airline/kenya-airways/alcohol', 'Conditions of carriage, archived 18 June 2026 ' + KQU)
off('airline/lot-polish/perfume-aerosols', 'LOT hazardous materials page already quoted')
rel('airline/lot-polish/perfume-aerosols', 'Warsaw Chopin Airport ' + LOU + ' ; Deep Arrival ' + LOD)
off('airline/iberia/vape-e-cigarette', 'Iberia help centre and devices page, archived ' + IBU)
off('airline/egyptair/vape-e-cigarette', 'Conditions of carriage PDF, archived April 2025 ' + MSU)
off('airline/asiana/vape-e-cigarette', 'Asiana restricted items, Korea edition ' + OZU)
off('airline/philippine-airlines/power-bank', 'PAL restricted items page needs scripts; CAAP release not archived')
rel('airline/philippine-airlines/power-bank', 'PhilStar Life ' + PSL)
off('airline/air-china/alcohol', 'Air China General Conditions of Carriage 6.2.5.8 ' + ACU)
off('airline/saudia/medication', 'Saudia MEDIF page (archived August 2025) and health page (archived July 2023) ' + SVP)
for a in ('saudia', 'china-southern', 'china-eastern', 'air-india', 'volaris'):
    off('airline/' + a + '/alcohol', 'card aligned with the airline rule quoted on the page')
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))

raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
for k in ['country/%s/vaping' % x for x in ('poland', 'hungary', 'portugal', 'qatar', 'jamaica', 'kenya', 'morocco', 'united-states')] + [
        'country/poland/tobacco', 'country/portugal/tobacco', 'country/malta/plants-seeds', 'country/belgium/plants-seeds', 'country/croatia/plants-seeds', 'country/jordan/cash', 'country/jamaica/cash',
        'food/jamaica', 'food/cuba', 'pets/malaysia', 'airline/tap-air-portugal/power-bank', 'airline/aegean/power-bank', 'airline/finnair/power-bank', 'airline/finnair/alcohol', 'airline/korean-air/alcohol',
        'airline/kenya-airways/alcohol', 'airline/lot-polish/perfume-aerosols', 'airline/iberia/vape-e-cigarette', 'airline/egyptair/vape-e-cigarette', 'airline/asiana/vape-e-cigarette', 'airline/philippine-airlines/power-bank', 'airline/saudia/medication'] + [
        'airline/%s/alcohol' % x for x in ('air-china', 'saudia', 'china-southern', 'china-eastern', 'air-india', 'volaris')]:
    ov['/' + k + '/'] = D
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + ('\n' if raw.endswith('\n') else ''))
print('ok')
