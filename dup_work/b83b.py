# Batch 10, part 2 (28 November 2026): sourced sections for the next most duplicated pages
import json

D = '2026-11-28'
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


# ================= vaping
vraw, v = load('vape_extra.json')


def vsec(code, h, p, items, src=None, faq=None):
    e = v[code]
    e['sections'].insert(0, {"h": h, "p": p, "list": items})
    if src:
        e['src'] = [src] + e['src']
    if faq:
        e['faq'] = e.get('faq', []) + [faq]


UA = 'https://www.tobaccocontrollaws.org/legislation/ukraine/e-cigarettes'
vsec('UA', '🚇 Where vaping is off limits in Ukraine',
     'Unofficial source: the Tobacco Control Laws database, Ukraine e-cigarette policies (updated 23 January 2024), read 28 November 2026. It summarises Law 2899-IV as amended; the official text did not open for us.',
     ['E-cigarettes may not be used anywhere smoking is banned, which takes in public transport and nearly all indoor public places and workplaces.',
      'Airports are an exception: they have ventilated, signed smoking rooms where vaping is allowed, limited to five per cent of the terminal area.',
      'Sales are allowed, with limits on where e-cigarettes may be sold, on vending machines and on the buyer’s age.',
      'Source: ' + link(UA, 'Tobacco Control Laws: Ukraine, e-cigarettes')],
     faq=['Is there anywhere to vape inside a Ukrainian airport?', 'A legal database says only in the designated, ventilated smoking rooms.'])
LK = 'https://www.tobaccocontrollaws.org/legislation/sri-lanka/e-cigarettes'
vsec('LK', '📜 The 2016 regulations behind Sri Lanka’s vape ban',
     'Unofficial source: the Tobacco Control Laws database, Sri Lanka e-cigarette policies (updated 11 February 2024), read 28 November 2026.',
     ['The Prohibited Tobacco Products Regulations, No. 1 of 2016, ban making, importing, selling and offering for sale e-cigarettes.',
      'Their wording speaks of e-cigarettes that contain tobacco, but the database says the ban is applied to all e-cigarettes, so a nicotine-free device is no safe exception.',
      'The database found no law on using one in indoor public places or on transport; that does not make bringing one in lawful.',
      'Source: ' + link(LK, 'Tobacco Control Laws: Sri Lanka, e-cigarettes')],
     faq=['Does a zero-nicotine vape avoid Sri Lanka’s ban?', 'A legal database says the 2016 regulations are applied to all e-cigarettes, so do not count on it.'])
FJA = 'https://www.laws.gov.fj/Acts/DisplayAct/3041'
FJN = 'https://www.fijivillage.com/news/cabinet-backs-review-of-tobacco-laws-to-address-vaping-and-illicit-trade-9b499a/'
vsec('FJ', '🏝️ Fiji’s tobacco law names e-cigarettes, and is under review',
     'Official source for the first point: the contents of the Tobacco Control Act 2010 on laws.gov.fj, in the Internet Archive copy of February 2026. The review is a news report (Fijivillage, 16 November 2026, unofficial). Both read 28 November 2026.',
     ['The Act’s headings put e-cigarettes inside its advertising ban and require wholesalers and retailers of e-cigarettes to register.',
      'Cabinet has backed a review of the Act and of the 2012 regulations, covering vaping, smoke-free places, online sales and penalties, led by the health ministry.',
      'A review is not yet a new law, so check again close to your trip.',
      'Source: ' + link(FJN, 'Fijivillage: Cabinet backs review of tobacco laws')],
     src=[FJA, 'Laws of Fiji: Tobacco Control Act 2010'])
HRW = 'https://www.croatiaweek.com/croatian-cafes-face-smoking-crackdown/'
vsec('HR', '☕ Café terraces and the fines for vaping indoors in Croatia',
     'Unofficial source (news report): Croatia Week on inspections in 2025, read 28 November 2026.',
     ['The indoor ban counts a closed terrace as indoors; an open one is where hospitality venues let guests smoke.',
      'The report gives fines of €600 to €2,000 for individuals and up to €20,000 for companies.',
      'It counted 181 venues in violation out of 389 checked by the State Inspectorate that year.',
      'Source: ' + link(HRW, 'Croatia Week: Croatian cafés face smoking crackdown')],
     faq=['Can I vape on a closed café terrace in Croatia?', 'No: a news report says a closed terrace counts as an indoor space, with fines of €600 to €2,000 for individuals.'])
ESU = 'https://www.boe.es/buscar/act.php?id=BOE-A-2005-21261'
vsec('ES', '🚆 Where Spain’s law forbids vaping',
     'Official source read 28 November 2026: Law 28/2005, consolidated text on boe.es (in Spanish, translated by us), additional provision 12 and article 20.',
     ['Nicotine vaping devices may not be used in public administration buildings, or in health centres including their grounds.',
      'Nor in schools and training centres, apart from open-air areas of universities and adult-only centres away from entrances.',
      'The ban covers urban and intercity public transport, trains, ships and the aircraft of Spanish airlines, plus fenced children’s playgrounds.',
      'Penalties follow the tobacco rules: minor offences run from €30 to €600, with a cap of €30 for an isolated case of smoking where banned.'],
     src=[ESU, 'BOE: Law 28/2005 on tobacco (in Spanish)'], faq=['Can I vape on a Spanish train?', 'No. The law names rail transport among the places where nicotine vaping devices may not be used.'])
SKU = 'https://static.slov-lex.sk/static/SK/ZZ/2004/377/20230101.html'
vsec('SK', '🏪 Where e-cigarettes may not be sold in Slovakia',
     'Official source read 28 November 2026: Act 377/2004 on the protection of non-smokers, version in force from 1 January 2023 on slov-lex.sk (in Slovak, translated by us), sections 6 and 7.',
     ['No sales to anyone under 18, and none from vending machines.',
      'Food shops may sell them only from a separate area or stand; shops mainly for children may not sell them at all.',
      'Schools, student halls, playgrounds, health facilities and social care facilities are off limits for sales.',
      'Distance sellers must run an age check that confirms the buyer is 18.',
      'The smoking ban in section 7 is worded for smoking; the part we read does not say whether it reaches vapes, so follow venue signs.'],
     src=[SKU, 'Slov-Lex: Act 377/2004 (in Slovak)'])
RUU = 'https://www.alta.ru/tamdoc/13fz0015/'
vsec('RU', '🚭 Russia bans nicotine vaping in the same places as smoking',
     'Unofficial copy of the law text on Alta-Soft: Federal Law 15-FZ, article 12 as amended in July 2020 (in Russian, translated by us), read 28 November 2026.',
     ['Consuming nicotine products, vaping included, is banned in schools, cultural and sports venues, health and spa facilities, offices and workplaces.',
      'On the move it is banned on aircraft, long-distance trains and ships, all city and suburban transport, suburban rail platforms, metro stations and inside rail, bus, air and river terminals.',
      'Outdoors, keep 15 metres from entrances to stations, airports, ports and metro stations; playgrounds, beaches and filling stations are covered too.',
      'Hotels, shops, markets, cafés, restaurants, lifts and the shared areas of apartment blocks are also on the list.',
      'Source: ' + link(RUU, 'Alta-Soft: Federal Law 15-FZ (in Russian)')],
     faq=['Can I vape in a Russian hotel room?', 'Article 12 lists premises used for hotel and temporary accommodation services among the places where nicotine consumption is banned.'])
NLU = 'https://www.rijksoverheid.nl/onderwerpen/roken/regels-vapes'
vsec('NL', '🌷 Vapes in the Netherlands: flavours, places and limits',
     'Official source read 28 November 2026: the national government page “Regels voor vapes” on rijksoverheid.nl (in Dutch, translated by us).',
     ['Since 1 July 2020 the public smoking ban applies to vapes with and without nicotine, for instance in cafés, restaurants, public buildings and workplaces.',
      'Flavoured vapes have been banned since 1 January 2024; tobacco flavour remains allowed.',
      'They may be sold only to adults of 18 or older, and from 2026 only in specialist tobacco shops.',
      'A tank may hold at most 2 ml and a refill pack at most 10 ml.'],
     src=[NLU, 'Rijksoverheid: Rules for vapes (in Dutch)'], faq=['Can I buy a fruit-flavoured vape in Amsterdam?', 'No. Flavours other than tobacco have been banned since 1 January 2024.'])
NPT = 'https://tobaccoreporter.com/2025/07/01/nepal-court-lifts-ban-on-e-cigarettes/'
NPL = 'https://commonlaw.com.np/publications/tobacco-law-in-nepal'
vsec('NP', '⚖️ Nepal: a court ruling in 2025 cuts against the import ban',
     'Unofficial sources: Tobacco Reporter (1 July 2025) and a Nepali law firm’s guide (Commonlaw, 2026), both read 28 November 2026. They are newer than the WHO table above and disagree with each other in part.',
     ['Tobacco Reporter says the Patan High Court ordered the government to lift its limits on vape imports and sales, because a 2015 tobacco directive did not justify blocking trade.',
      'The law firm still calls importing devices without approval illegal and personal possession a grey area, decided case by case.',
      'It says vaping is banned in government offices, health and school buildings, public transport, airports, workplaces and indoor restaurants and hotels.',
      'Until customs confirms otherwise, treat bringing a vape as risky.',
      'Sources: ' + link(NPT, 'Tobacco Reporter: court lifts ban') + '; ' + link(NPL, 'Commonlaw: tobacco law in Nepal')])
LTL = 'https://www.lrt.lt/en/news-in-english/19/1731525/lithuania-bans-flavoured-e-cigarettes'
vsec('LT', '🍓 Why Lithuania took flavoured vapes off the shelves',
     'Unofficial source (public broadcaster’s news report): LRT, 1 July 2022, read 28 November 2026.',
     ['From 1 July 2022 flavoured electronic cigarettes could no longer be sold in Lithuania.',
      'The report says the aim was to curb teenage vaping, and quotes the drug and tobacco control department’s interim head: use among 15 to 16 year olds was among the highest in Europe.',
      'Source: ' + link(LTL, 'LRT: Lithuania bans flavoured e-cigarettes')])
save('vape_extra.json', vraw, v, indent=1)

# ================= country sections
uraw, u = load('country_unique.json')


def more(cat, c, h, p, src, url, label):
    u[cat][c].setdefault('more', []).append({"h": h, "p": p, "src": src, "side": True, "link": [url, label]})


MTU = 'https://legislation.mt/eli/sl/315.4/eng/pdf'
more('tobacco', 'malta', 'Where you may not light up in Malta',
     ['Smoking any tobacco product is banned in every enclosed area, meaning a roofed space with more than one wall or side, whether it is permanent or temporary.',
      'A hotel room used for sleeping and occupied only by smokers is an exception, as is a designated smoking room in a licensed casino. Smoking is also banned in playgrounds and public gardens with children’s play equipment.'],
     'Official source read 28 November 2026: Smoking in Public Places Regulations, S.L. 315.04, on legislation.mt.',
     MTU, 'Legislation Malta: Smoking in Public Places Regulations (PDF)')
LVU = 'https://likumi.lv/ta/en/en/id/282077'
more('tobacco', 'latvia', 'Smoking bans in Latvia, and the age of 20',
     ['It is banned to smoke at public transport stop shelters and platforms, in playgrounds, in parks, squares and bathing places outside marked spots, and in stairwells and other shared areas of apartment blocks.',
      'Cafés and restaurants are covered too, except open-air ones in designated spots; so is public transport, taxis included, and anywhere in the presence of a child or a pregnant woman. A hotel may set aside smoking rooms.',
      'Since 1 January 2025 the law also restricts smoking, and the keeping of tobacco, for adults under 20.'],
     'Official source read 28 November 2026: the Latvian tobacco handling law, sections 10 and 10.2, on likumi.lv.',
     LVU, 'Likumi.lv: tobacco handling law')
IEU = 'https://revisedacts.lawreform.ie/eli/2002/act/6/revised/en/pdf?annotations=true'
more('tobacco', 'ireland', 'Ireland’s workplace smoking ban and its fine',
     ['Section 47 bans smoking a tobacco product in a specified place: places of work, including aircraft, trains, ships and public vehicles, health premises, schools, State buildings open to the public, cinemas and theatres, licensed premises and registered clubs.',
      'Dwellings, prisons, places with no roof and outdoor areas walled on no more than half of their perimeter fall outside it, as do certain bedrooms in registered accommodation. The offence carries a fine of up to €3,000.'],
     'Official source read 28 November 2026: Public Health (Tobacco) Act 2002, revised to 20 July 2026, sections 5 and 47, on the Law Reform Commission’s revised acts site.',
     IEU, 'Law Reform Commission: Public Health (Tobacco) Act 2002, revised (PDF)')
SEU = 'https://www.tullverket.se/endangeredanimalsandplants.4.311bf4f016e69d6ea0dcb5.html'
more('plants', 'sweden', 'What Swedish Customs says about protected and prohibited plants',
     ['Crossing Sweden’s border with endangered plants, or products made from them, is prohibited without special authorisation. EU and Swedish rules apply on top of the CITES convention, and breaking them can lead to a fine or prison.',
      'Customs adds that some plants need authorisation and certificates, that moving some is completely prohibited, and that soil and other organic growing media are restricted as well.'],
     'Official source read 28 November 2026: Swedish Customs (Tullverket), Animals and plants, in the Internet Archive copy of May 2026 because the live page refused our reader.',
     SEU, 'Tullverket: Endangered animals and plants')
save('country_unique.json', uraw, u, separators=(',', ':'))

# ================= food: Maldives from the customs tourist guide
fraw, f = load('food_extra.json')
MVC = ['https://www.customs.gov.mv/d/tourist.pdf', 'Maldives Customs Service: guide for tourists (PDF, undated)']
m = f['Maldives']
iata = m['sources'][0]
old = {t['id']: t for t in m['topics']}
m['sources'] = [MVC, iata]
m['checked'] = '28 November 2026'
m['answer'] = "Maldives Customs bans importing pork and its by-products without prior approval from the Ministry of Economic Development, and says all plants need a valid phytosanitary or sanitary certificate, with inspection and approval by the Ministry of Fisheries and Agriculture. For other animal products, the IATA Travel Centre says a sanitary certificate and inspection are needed. Neither source gives a food quantity limit, and the customs guide is undated."
m['faq'] = [["Can I bring pork into the Maldives?", "Not without prior approval: Maldives Customs cites Law 4/1975, with the permit issued by the Ministry of Economic Development."],
            ["What about other animal products?", "The IATA Travel Centre says they require a sanitary certificate and inspection by the Ministry of Fisheries and Agriculture."],
            ["Do plants need a certificate?", "Yes. Customs says all plants need a valid phytosanitary or sanitary certificate and must be inspected and approved."]]
old['pork'].update({"head": "Pork needs prior approval.", "src": [MVC], "official": True,
                    "scen": [{"when": "Pork and its by-products", "status": "warn", "tag": "Permit", "lines": ["Customs says importing them without prior approval is prohibited under the Import Prohibition Act, Law 4/1975.", "The permit comes from the Ministry of Economic Development."]}]})
old['plants'].update({"head": "All plants need a certificate and inspection.", "src": [MVC], "official": True,
                      "scen": [{"when": "Plants", "status": "warn", "tag": "Certificate", "lines": ["Customs says every plant needs a valid phytosanitary or sanitary certificate.", "It must be inspected and approved by the Ministry of Fisheries and Agriculture."]}]})
old['animal'].update({"src": [iata], "official": False})
old['notread'].update({"head": "Neither source covers every food.", "src": [iata], "official": False,
                       "scen": [{"when": "Foods that are not named", "status": "warn", "tag": "Ask first", "lines": ["Neither the customs guide nor the IATA page names dairy, eggs, fruit or vegetables, and neither gives a food quantity limit.", "Both are undated: ask Maldives Customs before you pack fresh food."]}]})
m['topics'] = [old['pork'], old['plants'], old['animal'], old['notread']]
m.pop('unofficial', None)
save('food_extra.json', fraw, f, indent=1)

# ================= airline topic pages
traw, t = load('topics_new.json')


def tsec(a, k, h, p, items, faq=None):
    e = t[a][k]
    e['sections'].append({"h": h, "p": p, "list": items})
    if faq:
        e['faq'] = e.get('faq', []) + [faq]
    return e


SVU = 'https://www.saudia.com/en-SA/manage/baggage/prohibited-items'
e = tsec('Saudia', 'vape', '🧳 What Saudia’s prohibited items page says by country',
         'From Saudia’s “Prohibited items in baggage and cabin” page, in the Internet Archive copy of April 2026; read 28 November 2026.',
         ['In its section on the Chinese aviation authority’s rules, e-cigarettes of all kinds appear among items not to pack in checked baggage.',
          'In its section on Oman customs law, electronic cigarettes are on the prohibited list.',
          'So on a trip touching China keep any vape out of the hold, and do not take one into Oman.',
          link(SVU, 'Saudia: Prohibited items')],
         ['Can I fly Saudia to Oman with a vape?', 'Saudia’s page lists electronic cigarettes among items prohibited under Oman customs law.'])
e['sections'][0]['list'] = ['<strong>Not in this article:</strong> a general rule on hand or checked baggage, or a battery limit; the country rules Saudia gives are below.']
G9U = 'https://www.airarabia.com/-/media/conditions-of-carriage/20251215_gcoc_english_version_air-arabia.pdf'
tsec('Air Arabia', 'vape', '📜 Vaping on board in Air Arabia’s conditions',
     'From Air Arabia’s General Conditions of Carriage (file dated 15 December 2025 on airarabia.com), articles 14.2 and 14.3, read 28 November 2026.',
     ['Smoking, electronic and other artificial forms included, is not permitted on board.',
      'A passenger who breaks the rule may be restrained, removed or refused onward carriage, and reported to the police.',
      'The airline may refuse to carry the passenger again and require them to repay costs, including those of a diversion.',
      link(G9U, 'Air Arabia: General Conditions of Carriage (PDF)')],
     ['What happens if I vape on an Air Arabia flight?', 'The conditions allow restraint, removal, a police report, refusal of future carriage and recovery of costs.'])
NZU = 'https://www.aviation.govt.nz/assets/passenger/posters-and-flyers/What-can-you-take-on-the-plane.pdf'
tsec('Air New Zealand', 'vape', '🥝 What New Zealand’s aviation regulator says about vapes',
     'Not from Air New Zealand: the Civil Aviation Authority’s poster “What can you take on the plane”, in the Internet Archive copy because the live file did not open for us; read 28 November 2026.',
     ['E-cigarettes and vapes with batteries cannot go in checked luggage, because of the fire risk; carry them on.',
      'The same applies to power banks and spare batteries.',
      'One lighter may travel on your person, never in a bag, and blue-flame cigar lighters are not permitted.',
      link(NZU, 'CAA New Zealand: What can you take on the plane (PDF)')])
LAU = 'https://brasilturis.com.br/2026/05/21/anac-atualiza-regras-para-transporte-de-power-banks-em-voos/'
tsec('LATAM', 'power', '🇧🇷 Brazil’s power bank limits from 2026',
     'Not from LATAM: a Brasilturis report (21 May 2026, in Portuguese, less reliable than the regulator’s own text) on the campaign by Brazil’s aviation agency ANAC, the Ports and Airports Ministry and the airline association Abear; read 28 November 2026.',
     ['Up to two power banks of at most 100 Wh each per passenger.',
      'From 100 to 160 Wh the airline must authorise them at the check-in desk; above 160 Wh they do not fly.',
      'They go in hand baggage, under the seat in front or in the seat pocket, not in the overhead bin, and never in checked bags.',
      'The advice is also not to plug them into the aircraft’s USB sockets.',
      link(LAU, 'Brasilturis: new power bank rules (in Portuguese)')],
     ['Does Brazil allow a 150 Wh power bank?', 'Only with the airline’s authorisation at check-in, according to a report on the ANAC rules.'])
DXU = 'https://www.thenationalnews.com/business/aviation/2026/02/11/no-need-to-remove-liquids-and-laptops-at-airport-dubai-installs-ai-powered-hand-luggage-scanners/'
tsec('flydubai', 'liquids', '🛄 New scanners at Dubai International in 2026',
     'Not from flydubai: The National (11 February 2026), an unofficial news source, read 28 November 2026.',
     ['Dubai Airports said it would upgrade more than 100 hand-luggage scanners during 2026, with six already working at the time.',
      'The paper reports that the new machines let travellers leave laptops and liquids, including containers over 100 ml, in their bags.',
      'It did not say the rollout was complete, and the airport’s FAQ above still gives 100 ml, so pack to that limit unless your checkpoint says otherwise.',
      link(DXU, 'The National: Dubai installs new hand-luggage scanners')])
ATU = 'https://www.euronews.com/2026/01/30/liquid-anxiety-which-european-airports-have-scrapped-the-100ml-limit'
tsec('Aegean', 'liquids', '🏛️ Athens is still a 100 ml airport',
     'Not from Aegean: Euronews (30 January 2026), an unofficial news source, read 28 November 2026.',
     ['Athens was among the airports where the 100 ml limit stayed in place.',
      'Airport authorities told Euronews that they plan to introduce scanners allowing 2 litres in early 2027, once expansion works are finished.',
      'A bottle bought or carried under a looser rule elsewhere can therefore be stopped on the way home through Athens.',
      link(ATU, 'Euronews: which airports have scrapped the 100 ml limit')],
     ['When will Athens allow bigger liquid bottles?', 'Airport authorities told Euronews in January 2026 that they plan 2-litre scanners in early 2027.'])
save('topics_new.json', traw, t, indent=1)


# ================= medication
def med(file, marker, h, p, items, links):
    s = open(file, encoding='utf8', newline='').read()
    assert s.count(marker) == 1, marker
    i = s.index(marker)
    j = s.index('])', i) + 2
    assert s[j:j + 3] != ' + '
    html = '<section class="bd-sec"><h2>' + h + '</h2><p>' + p + '</p><ul>' + ''.join('<li>' + x + '</li>' for x in items) + '</ul><p class="bd-chk">Source: ' + links + '</p></section>'
    s = s[:j] + ' + ' + json.dumps(html, ensure_ascii=False) + s[j:]
    open(file, 'w', encoding='utf8', newline='').write(s)


MHU = 'https://www.malaysiaairlines.com/au/en/plan-your-trip/health-medical.html'
med('airline_medication_b10.js', "extra: steps(['Carry documents showing your medical needs.'", 'Medical clearance deadlines on Malaysia Airlines',
    'From Malaysia Airlines’ “Health and medical” page (Australian edition, Internet Archive copy of April 2023 because the live page returned an error, so confirm the current deadlines); read 28 November 2026.',
    ['The MEDIF form, filled in by you and your doctor, goes to the airline’s medical desk: at least 10 working days ahead for a stretcher or an infant incubator.',
     'Your own portable oxygen concentrator needs it 3 calendar days ahead; a rented one 3 days from Kuala Lumpur and 10 days from other airports. Other medical cases and devices: 3 calendar days.',
     'An approved MEDIF is valid for 20 calendar days. Portable medical electronic devices must be FAA approved.',
     'A normal pregnancy needs no clearance, but bring a doctor’s fit-to-fly letter; travel is not recommended after 32 weeks with a multiple pregnancy, or after 36 with a single one.'],
    link(MHU, 'Malaysia Airlines: Health and medical'))
AZU = 'https://www.voeazul.com.br/us/en/medif'
med('airline_medication_b10.js', "extra: steps(['Keep essential medicine in your cabin bag.'", 'Azul’s medical form (MEDIF): when and for whom',
    'From Azul’s own MEDIF page on voeazul.com.br, read 28 November 2026.',
    ['Passengers with a condition that needs special attention in flight, such as recent surgery or an unstable condition, must present a MEDIF completed and signed by their doctor, under article 9 of ANAC Resolution 280.',
     'Send it at least 72 working hours before the flight; Azul’s aviation doctors answer within 48 hours, and carriage depends on their approval.',
     'No authorisation is needed for diabetes, high blood pressure or cholesterol, arthritis or artificial limbs that are controlled and stable.',
     'Passengers who cannot follow safety instructions or manage their physical needs alone must travel with an adult companion.'],
    link(AZU, 'Azul: MEDIF'))
KUU = 'https://www.kuwaitairways.com/en/services/optionalservices/Pages/medical-attention.aspx'
med('airline_medication_b14.js', "extra: steps(['Carry medicine in its original packaging with the prescription.', 'Bring proof", 'Stretchers and incubators on Kuwait Airways',
    'From Kuwait Airways’ “Medical Attention” page, in the Internet Archive copy of February 2025; read 28 November 2026.',
    ['Give 48 hours’ notice to travel on a stretcher or to carry an incubator; contact a Kuwait Airways sales office, which arranges it with the airline’s medical and engineering departments.',
     'The page lists a 700% surcharge for a stretcher in economy class, and incubator fares of 300% of the normal one-way fare in peak season and 200% off peak.',
     'On flights to and from the United States a safety assistant must go with a stretcher or incubator passenger: aged at least 16, of full mobility and not looking after anyone else who needs help.',
     'Wheelchairs are free of charge.'],
    link(KUU, 'Kuwait Airways: Medical attention'))

# ================= logs
l = json.load(open('ladder_log.json', encoding='utf8'))


def lg(key, tier, text):
    x = l.get(key) or {}
    x.setdefault(tier, []).append(R + ': ' + text)
    x['date'] = D
    l[key] = x


def off(k, x):
    lg(k, 'official', x)


def rel(k, x):
    lg(k, 'reliable', x)


off('country/ukraine/vaping', 'zakon.rada.gov.ua law 2899-IV: archive copy had no text, live site rate limited')
rel('country/ukraine/vaping', UA)
off('country/sri-lanka/vaping', 'nata.gov.lk home page carries no e-cigarette text')
rel('country/sri-lanka/vaping', LK)
off('country/fiji/vaping', 'Tobacco Control Act 2010 contents ' + FJA)
rel('country/fiji/vaping', FJN)
off('country/croatia/vaping', 'sabor.hr notice on the 2025 amendment adds nothing on vaping use')
rel('country/croatia/vaping', HRW)
off('country/spain/vaping', 'Law 28/2005 ' + ESU)
off('country/slovakia/vaping', 'Act 377/2004 ' + SKU)
off('country/russia/vaping', 'official portal not found; law text read as a copy')
rel('country/russia/vaping', RUU)
off('country/netherlands/vaping', NLU)
off('country/nepal/vaping', 'no official court or customs text found')
rel('country/nepal/vaping', NPT + ' ; ' + NPL)
off('country/lithuania/vaping', 'e-seimas consolidated tobacco law: refused our reader (Cloudflare), not bypassed')
rel('country/lithuania/vaping', LTL)
off('country/malta/tobacco', MTU)
off('country/latvia/tobacco', LVU)
off('country/ireland/tobacco', IEU)
off('country/sweden/plants-seeds', 'archived copy ' + SEU)
off('food/maldives', MVC[0])
rel('food/maldives', 'IATA Travel Centre kept for other animal products')
off('airline/saudia/vape-e-cigarette', 'archived April 2026 ' + SVU)
off('airline/air-arabia/vape-e-cigarette', G9U)
off('airline/air-new-zealand/vape-e-cigarette', 'CAA New Zealand poster, archived ' + NZU)
off('airline/latam/power-bank', 'LATAM help article already quoted')
rel('airline/latam/power-bank', LAU)
off('airline/flydubai/liquids', 'flydubai pages timed out earlier')
rel('airline/flydubai/liquids', DXU)
off('airline/aegean/liquids', 'Aegean liquids page already quoted')
rel('airline/aegean/liquids', ATU)
off('airline/malaysia-airlines/medication', 'archived ' + MHU)
off('airline/azul/medication', AZU)
off('airline/kuwait-airways/medication', 'archived ' + KUU)
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))

raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
for k in ['country/%s/vaping' % x for x in ('ukraine', 'sri-lanka', 'fiji', 'croatia', 'spain', 'slovakia', 'russia', 'netherlands', 'nepal', 'lithuania')] + [
        'country/malta/tobacco', 'country/latvia/tobacco', 'country/ireland/tobacco', 'country/sweden/plants-seeds', 'food/maldives'] + [
        'airline/' + x for x in ('saudia/vape-e-cigarette', 'air-arabia/vape-e-cigarette', 'air-new-zealand/vape-e-cigarette', 'latam/power-bank', 'flydubai/liquids', 'aegean/liquids',
                                 'malaysia-airlines/medication', 'azul/medication', 'kuwait-airways/medication')]:
    ov['/' + k + '/'] = D
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + ('\n' if raw.endswith('\n') else ''))
print('ok')
