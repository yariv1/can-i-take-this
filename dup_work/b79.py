# Batch 6 (27 November 2026): the twenty-two pages at 54% duplicate, plus the Panama country page (newer law)
import json

D = '2026-11-27'
R = 'read 27 November 2026'


def load(p):
    raw = open(p, encoding='utf8', newline='').read()
    return raw, json.loads(raw)


def tail(raw):
    return '\n' if raw.endswith('\n') else ''


def link(url, label):
    return '<a href="' + url + '" target="_blank" rel="noopener">' + label + '</a>'


def sub(p, a, b, n=1):
    s = open(p, encoding='utf8', newline='').read()
    assert s.count(a) == n, (p, a[:60], s.count(a))
    open(p, 'w', encoding='utf8', newline='').write(s.replace(a, b))


PH15 = 'https://lawphil.net/statutes/repacts/ra2022/ra_11900_2022.html'
MT = 'https://legislation.mt/eli/cap/315/eng/pdf'
LBM = 'https://www.moph.gov.lb/en/Pages/0/22374/tobacco-program'
LBT = 'https://www.tobaccocontrollaws.org/legislation/lebanon/e-cigarettes'
JP = 'https://www.mhlw.go.jp/content/001601120.pdf'
IDH = 'https://www.hukumonline.com/berita/a/penjualan-rokok-dalam-pp-kesehatan-lt66aee26d8d053/'
ET = 'https://faolex.fao.org/docs/pdf/eth208821.pdf'
CZ = 'https://mzd.gov.cz/nejcastejsi-dotazy-a-odpovedi-na-tema-noveho-tzv-protikurackeho-zakona-c-65-2017-sb/'
HR = 'https://assets.tobaccocontrollaws.org/uploads/legislation/Croatia/Croatia-2025-Amding-Act-native.pdf'
CO = 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=240576'
PA = 'https://www.prensa.com/sociedad/regulacion-sobre-cigarrillos-electronicos-empezara-a-aplicarse-el-jueves-31-de-julio-en-panama/'

raw, v = load('vape_extra.json')


def vsec(code, section, src, faq=None):
    e = v.setdefault(code, {"sections": [], "faq": [], "src": [], "keepSchema": True})
    assert not any(s['h'] == section['h'] for s in e['sections'])
    e['sections'].insert(0, section)
    e['src'] = src + e['src']
    if faq:
        e['faq'].append(faq)


vsec('PH', {
    "h": "🚭 Where you may not vape in the Philippines",
    "p": "Unofficial source: section 15 of Republic Act 11900 of 2022 on LawPhil, a private legal database, " + R + ". Vaping is banned in all indoor public places except designated vaping areas and shop product demonstrations.",
    "table": {"head": ["Banned outright in", "Detail"], "rows": [
        ["Youth centres", "Schools, colleges, universities, youth hostels and recreation facilities for under-18s"],
        ["Health sites", "Inside hospitals, clinics, health centres, nursing homes and laboratories"],
        ["Fire risk areas", "Gas stations and stores of flammable or explosive materials, plus elevators and stairwells"],
        ["Travel and eating places", "Public transport, airport and ship terminals, train and bus stations, restaurants and conference halls (designated areas excepted)"],
        ["Also", "Food preparation areas, places of worship and government premises (designated areas excepted at government offices)"]]}},
    [[PH15, "Unofficial source: LawPhil, Republic Act 11900"]])

vsec('MT', {
    "h": "💶 What breaking Malta’s smoking law costs",
    "p": "From the Tobacco (Smoking Control) Act, chapter 315, article 18, on the government’s legislation site, " + R + ". The database cited further down reports that the smoking rules are applied to e-cigarettes in public places.",
    "table": {"head": ["Offence", "Penalty in the Act"], "rows": [
        ["First conviction", "Fine of €232.94 to €1,164.69"],
        ["An offence lasting more than a day", "A further €23.29 to €116.47 for each day"],
        ["Second or later conviction", "The fines, and on the prosecution’s request up to three months in prison and suspension of the premises’ or vehicle’s licence for one week to one month"]]}},
    [[MT, "Malta: Tobacco (Smoking Control) Act, chapter 315 (PDF)"]])

vsec('LB', {
    "h": "🏥 Smoke-free places in Lebanon under Law 174",
    "p": "Lebanon’s Ministry of Public Health quotes article 5 of Law 174 of 2011, " + R + ": smoking or lighting a tobacco product, or using such products, is forbidden in all indoor places, workplaces and public transport.",
    "table": {"head": ["Point", "Detail"], "rows": [
        ["Are e-cigarettes covered?", "Yes, as tobacco alternatives, according to the Tobacco Control Laws database (unofficial)"],
        ["Outdoors", "The database says outdoor areas of health, education and sports facilities must be smoke free too"],
        ["Hotels", "They may set aside 20% of rooms for smoking, according to the database"]]}},
    [[LBM, "Lebanon Ministry of Public Health: tobacco programme"]])

assert 'JP' not in v
vsec('JP', {
    "h": "💊 How much nicotine vape liquid Japan lets you bring",
    "p": "From the health ministry’s questions and answers on importing medicines (dated 30 June 2025), question 67, " + R + " (in Japanese, translated by us). In Japan, cartridges and liquid containing nicotine count as medicines.",
    "table": {"head": ["Item", "Without an import confirmation certificate"], "rows": [
        ["Nicotine liquid", "Up to one month’s supply: 120 ml"],
        ["Nicotine cartridges", "Up to 60"],
        ["Cartridges and liquid together", "Added together against the same one-month limit"],
        ["Vaporising device for them", "One, plus one spare if needed"],
        ["More than these amounts", "An import confirmation certificate is needed"],
        ["Nicotine-free liquid and its device", "Not regulated by this medicines law"]]}},
    [[JP, "Japan Ministry of Health: import questions and answers (PDF, in Japanese)"]],
    ["Can I bring nicotine e-liquid into Japan?", "Yes, up to one month’s supply (120 ml of liquid or 60 cartridges) for your own use without an import confirmation certificate, according to Japan’s health ministry. More needs the certificate."])
v['JP']['card'] = {"status": "warn", "head": "Personal import limit: 120 ml of nicotine liquid.",
                   "lines": ["Japan’s health ministry allows up to 120 ml of nicotine liquid or 60 cartridges for personal use without a certificate.",
                             "One vaporising device, plus one spare if needed, comes in without a certificate.",
                             "Above these amounts you need an import confirmation certificate."]}

vsec('ID', {
    "h": "🔞 Who may be sold vapes in Indonesia, and where",
    "p": "Unofficial source: Hukumonline, a legal news service, on Government Regulation 28 of 2024, articles 434 and 442, " + R + " (in Indonesian, translated by us).",
    "table": {"head": ["Rule on selling tobacco and e-cigarettes", "Detail"], "rows": [
        ["Buyer", "No sales to anyone under 21 or to pregnant women"],
        ["Near schools and playgrounds", "No sales within 200 metres"],
        ["Smoke-free areas", "No sales there, except in a spot set aside for selling"],
        ["Machines and online", "No self-service machines, and no websites or apps without age checks"]]}},
    [[IDH, "Unofficial source: Hukumonline on Government Regulation 28/2024 (in Indonesian)"]])

vsec('ET', {
    "h": "⛓️ The penalty in Ethiopia’s law",
    "p": "Unofficial source: a scanned copy of Proclamation 1112/2019 in the Federal Negarit Gazette, held on FAO’s FAOLEX database, " + R + ".",
    "table": {"head": ["Point", "Proclamation 1112/2019"], "rows": [
        ["Covered device", "An electronic nicotine delivery system, with its cartridge, tank and parts"],
        ["Penalty for making, importing, wholesaling, distributing, storing or selling one", "Simple imprisonment of three months to three years and a fine of 1,000 to 200,000 birr"],
        ["Selling tobacco to a person under 21", "Imprisonment of at least three months, or a fine of 1,000 to 3,000 birr"]]},
    "list": ["<strong>For a traveller:</strong> the penalty is worded around trade acts such as importing and storing, with no stated exception for your own device."]},
    [[ET, "Unofficial source: FAOLEX copy of Proclamation 1112/2019 (PDF)"]])

vsec('CZ', {
    "h": "🚏 Where vaping is banned in Czechia",
    "p": "From the Czech Health Ministry’s questions and answers on the smoking law, Act 65/2017, " + R + " (in Czech, translated by us). The ministry says e-cigarettes are banned wherever the law bans smoking, with an exception for food and drink venues. The page dates from the law’s introduction.",
    "table": {"head": ["Place", "Vaping"], "rows": [
        ["Public transport platforms, shelters and waiting rooms", "Banned"],
        ["Hospitals, schools and children’s playgrounds", "Banned"],
        ["Sports halls, shopping centres and theatres", "Banned"],
        ["Restaurants, bars and cafés", "Not banned by this law; the operator may still forbid it"],
        ["Public spaces near schools", "A town may ban it by local decree"]]}},
    [[CZ, "Czech Health Ministry: questions on Act 65/2017 (in Czech)"]])

vsec('HR', {
    "h": "🏠 Croatia’s indoor ban covers vapes with and without nicotine",
    "p": "Unofficial source: a copy of Croatia’s 2025 amendment to its tobacco law, article 8, on the Tobacco Control Laws website, " + R + " (in Croatian, translated by us).",
    "table": {"head": ["Rule", "Detail"], "rows": [
        ["All enclosed public places", "Smoking, e-cigarettes with or without nicotine, waterpipes and heated tobacco are banned"],
        ["Sales", "E-cigarettes, refills and disposable cartridges may not be sold to anyone under 18"]]}},
    [[HR, "Unofficial source: Tobacco Control Laws, copy of the 2025 amending act (PDF, in Croatian)"]])

vsec('CO', {
    "h": "📜 Law 2354 of 2024: smoke-free now means aerosol-free",
    "p": "From Law 2354 of 9 May 2024 on the Colombian government’s legal database Función Pública, " + R + " (in Spanish, translated by us).",
    "table": {"head": ["Change", "What the law says"], "rows": [
        ["Products now covered", "Electronic nicotine systems, similar nicotine-free systems, heated tobacco and oral nicotine products, alongside tobacco"],
        ["Meaning of “smoke-free”", "Read as free of smoke and of aerosols"],
        ["What that does", "The rules of the 2009 tobacco law on use, sale, advertising and promotion now reach vaping"]]}},
    [[CO, "Función Pública: Law 2354 of 2024 (in Spanish)"]])
v['CO']['indoor'] = "Since Law 2354 of 9 May 2024, Colombia reads its smoke-free rules as covering aerosols too, so places closed to smoking are closed to vaping."
v['CO']['desc'] = "Is vaping legal in Colombia? No general ban, but since 2024 smoke-free places are aerosol-free too. See the law and customs notes."

vsec('PA', {
    "h": "🚫 Panama’s rules on where you may vape since August 2025",
    "p": "Unofficial source: La Prensa, a Panamanian newspaper, 22 July 2025, " + R + " (in Spanish, translated by us). It reports health ministry Resolution 146 of 31 January 2025, in force from 13 August 2025, issued after the Supreme Court struck down the 2022 ban in a ruling of 14 May 2024.",
    "table": {"head": ["Point", "What the newspaper reports"], "rows": [
        ["No use in", "Public and private offices, transport and terminals, workplaces, schools and health sites"],
        ["Also no use in", "Enclosed places open to the public, such as churches, salons, internet cafés, restaurants, bars, clubs and hotels, and sports areas"],
        ["Products", "E-cigarettes with or without nicotine, and their accessories"],
        ["Sales", "None to minors; advertising and sponsorship banned"]]}},
    [[PA, "Unofficial source: La Prensa on the e-cigarette rules (in Spanish)"]])
v['PA']['indoor'] = "Panama’s health ministry rules in force since 13 August 2025 bar vaping in offices, transport, terminals, enclosed public places, workplaces, schools and health sites, La Prensa reports."
v['PA']['desc'] = "Is vaping legal in Panama? The 2022 ban was struck down in 2024; rules since 2025 bar vaping in many places. See what applies."
open('vape_extra.json', 'w', encoding='utf8', newline='').write(json.dumps(v, ensure_ascii=False, indent=1) + tail(raw))

# a newer national rule replaces the WHO wording on indoor use
sub('country_vape.js', "function build(c) {", "function build(c) {\n  const OV = (EXTRA[c.code] || {}).indoor, indoorLine = (n, d) => OV || indoorText(n, d); // newer national rule than the WHO table, written in vape_extra.json")
s = open('country_vape.js', encoding='utf8', newline='').read()
head, body = s.split("indoorLine = (n, d) => OV || indoorText(n, d);", 1)
assert body.count('indoorText(cn, D)') >= 5
body = body.replace('indoorText(cn, D)', 'indoorLine(cn, D)')
open('country_vape.js', 'w', encoding='utf8', newline='').write(head + "indoorLine = (n, d) => OV || indoorText(n, d);" + body)
sub('vape_extra.js', "    sec: { h: 'Vaping law in ' + cn + ' (WHO profile)', p },", "    sec: { h: 'Vaping law in ' + cn + ' (WHO profile)', p: p + (NEWER[a] ? ' ' + NEWER[a] : '') },")
sub('vape_extra.js', "const E = {};\n", "const E = {};\n// law changed after the WHO 2023 data: say so on the airline page (details in its own section)\nconst NEWER = { 'Copa Airlines': 'This is out of date: Panama’s ban was struck down in 2024, as the update on this page explains.', 'Avianca': 'Since this was compiled, Colombia has extended its smoke-free rules to vapes, as the update on this page explains.' };\n") if "const E = {};\n" in open('vape_extra.js', encoding='utf8', newline='').read() else sub('vape_extra.js', "const E = {};\r\n", "const E = {};\r\n// law changed after the WHO 2023 data: say so on the airline page (details in its own section)\r\nconst NEWER = { 'Copa Airlines': 'This is out of date: Panama’s ban was struck down in 2024, as the update on this page explains.', 'Avianca': 'Since this was compiled, Colombia has extended its smoke-free rules to vapes, as the update on this page explains.' };\r\n")

# ---------------- country plants and cash
JO = 'https://leap.unep.org/en/countries/jo/national-legislation/resolution-noz24-2016-identify-perennial-or-rare-trees-and-wild'
PHB = 'https://customs.gov.ph/foreign-currency/'
BHL = 'https://www.lloc.gov.bh/Legislation/HTM/K5406'
raw, u = load('country_unique.json')


def more(cat, c, items):
    e = u[cat][c]
    assert 'more' not in e
    e['more'] = items


more('plants', 'jordan', [{
    "h": "Wild plants and rare trees you must not cut in Jordan",
    "p": ["Resolution Z/24 of 2016 lists perennial and rare forest trees and wild plants threatened with extinction, and bans cutting them. It was issued under article 34 of Agriculture Law 13 of 2015, which sets the penalties.",
          "The summary we read does not print the species list or the amounts, so do not cut or dig up a wild plant without asking the Ministry of Agriculture."],
    "src": "Unofficial source read 27 November 2026: summary of the resolution on the UNEP Law and Environment Assistance Platform, a United Nations legal database fed by FAO.",
    "unofficial": True, "side": True,
    "link": [JO, "Unofficial source: UNEP-LEAP, Jordan Resolution Z/24 of 2016"]}])

e = u['cash']['philippines']
e['h'] = "What the UK government says about cash in the Philippines"
e['p'] = ["The UK government’s travel advice for the Philippines says you cannot bring in more than 50,000 pesos and must declare foreign cash or cheques worth more than 10,000 US dollars on a form on arrival."]
more('cash', 'philippines', [{
    "h": "The separate limit on Philippine pesos",
    "p": ["Foreign money is declared; pesos are capped. The Bureau of Customs notice says no one may bring or take out pesos in notes, coins, cheques or money orders above PHP 50,000.00 without authorisation from the central bank, Bangko Sentral ng Pilipinas.",
          "Foreign currency and bearer instruments, such as traveller’s cheques and bank drafts, above US$10,000 or the equivalent must be declared."],
    "src": "Official source read 27 November 2026: Bureau of Customs, foreign currency notice to travellers, in the Internet Archive copy saved on 14 September 2025 because the live site refused our reader.",
    "link": [PHB, "Bureau of Customs: foreign currency notice to travellers"]}])

more('cash', 'bahrain', [{
    "h": "What Bahrain’s law says about moving money across the border",
    "p": ["Law 54 of 2006 added a disclosure system to the anti-money-laundering law. It says every traveller is guaranteed the right to bring money into the country or take it out under the law.",
          "The finance minister may set a ceiling above which money has to be disclosed. The law also defines illegal cross-border transfer: moving money without the disclosure the system requires, or to launder money or finance terrorism."],
    "src": "Official source read 27 November 2026: Law No. 54 of 2006 on Bahrain’s Legislation and Legal Opinion Commission website (in Arabic, translated by us). We did not find a published ceiling amount.",
    "side": True,
    "link": [BHL, "Bahrain Legislation Commission: Law 54 of 2006 (in Arabic)"]}])
open('country_unique.json', 'w', encoding='utf8', newline='').write(json.dumps(u, ensure_ascii=False, separators=(',', ':')) + tail(raw))

# ---------------- airline topic pages
SAC = 'https://www.flysaa.com/documents/d/south-african-airways/saa-conditions-of-carriage-march-2022'
ARK = 'https://ssr.arkia.co.il/he/luggage-information'
BJ = 'https://english.beijing.gov.cn/travellinginbeijing/essentials/inboundtourismfacilitationmeasures/202603/t20260325_4566181.html'
MEA = 'https://www.mea.com.lb/english/traveler-info/baggage-info/restricted-items'
KE = 'https://www.koreanair.com/contents/plan-your-travel/baggage/restricted-item'
raw, t = load('topics_new.json')


def tsec(a, k, section, faq=None, first=False):
    e = t[a][k]
    assert not any(s['h'] == section['h'] for s in e['sections'])
    if first:
        e['sections'].insert(0, section)
    else:
        e['sections'].append(section)
    if faq:
        e['faq'] = e.get('faq', []) + [faq]


tsec('South African Airways', 'alcohol', {
    "h": "🚫 Drinking your own alcohol on South African Airways",
    "p": "From South African Airways’ Conditions of Carriage, March 2022 edition, article 8.1.2, " + R + ".",
    "table": {"head": ["Point", "SAA rule"], "rows": [
        ["Alcohol not served by the crew", "Drinking it is a listed ground for refusing or removing you, duty free purchases included"],
        ["What the airline may do", "Among other steps, confiscate the alcohol, remove you, refuse onward or future carriage and report you to the police"]]},
    "list": ["Source: " + link(SAC, "South African Airways: Conditions of Carriage, March 2022 (PDF)")]},
    ["Can I drink my duty-free alcohol on South African Airways?", "No. The conditions of carriage list drinking alcohol that the crew has not served you, duty free included, as a ground for removal."], first=True)

tsec('South African Airways', 'vape', {
    "h": "🔕 Vaping instructions and smoke detectors on SAA",
    "p": "From South African Airways’ Conditions of Carriage, March 2022 edition, articles 8.1.2 and 12.1, " + R + ".",
    "table": {"head": ["Situation", "What the conditions say"], "rows": [
        ["Ignoring staff instructions on smoking or vaping", "A listed ground for refusing to carry you"],
        ["Caught earlier smoking, trying to smoke or tampering with a smoke detector", "SAA may refuse you, even if it happened on a previous flight"],
        ["Breaking instructions on board", "The crew may take measures including restraint; you may be disembarked, refused carriage and prosecuted"]]},
    "list": ["Source: " + link(SAC, "South African Airways: Conditions of Carriage, March 2022 (PDF)")]})

tsec('Copa Airlines', 'vape', {
    "h": "🇵🇦 What changed in Panama for vapers",
    "p": "Not from Copa: La Prensa, a Panamanian newspaper, 22 July 2025, " + R + " (in Spanish, translated by us). It concerns the ground in Copa’s home country, not the cabin.",
    "table": {"head": ["When", "Change"], "rows": [
        ["14 May 2024", "The Supreme Court declared the 2022 law banning e-cigarettes unconstitutional"],
        ["13 August 2025", "Health ministry Resolution 146 took effect: no sales to minors, no advertising"],
        ["Same resolution", "No vaping in places such as offices, transport terminals, restaurants, bars and hotels"]]},
    "list": ["Source: " + link(PA, "La Prensa, unofficial (in Spanish)")]},
    ["Are vapes banned in Panama?", "Not any more: the Supreme Court struck down the ban in 2024. Since August 2025 health ministry rules restrict sale, advertising and where you may vape, La Prensa reports."], first=True)

tsec('Avianca', 'vape', {
    "h": "🇨🇴 Where vaping now counts as smoking in Colombia",
    "p": "Not an Avianca rule: Colombia’s Law 2354 of 9 May 2024 on the government database Función Pública, " + R + " (in Spanish, translated by us).",
    "table": {"head": ["Point", "Effect for a passenger on the ground"], "rows": [
        ["“Smoke-free” signs and areas", "They now mean free of aerosols as well, so do not vape where smoking is barred"],
        ["Nicotine-free devices", "Covered as well as nicotine ones"],
        ["Heated tobacco and nicotine pouches", "Brought under the same tobacco law"]]},
    "list": ["Source: " + link(CO, "Función Pública: Law 2354 of 2024 (in Spanish)")]},
    ["Can I vape in Colombia after landing?", "Not where smoking is banned: since Law 2354 of 2024, smoke-free places in Colombia are also free of aerosols."], first=True)

tsec('Arkia', 'power', {
    "h": "🎒 Where Arkia suggests you keep a portable charger",
    "p": "From Arkia’s baggage page (in Hebrew, translated by us), " + R + ".",
    "table": {"head": ["Point", "Arkia baggage page"], "rows": [
        ["Small bag under the seat in front", "Up to 40 × 30 × 20 cm on international flights; Arkia names a portable charger among the essentials it should hold, with documents, wallet, medicines and phone"],
        ["Wet batteries", "Listed among dangerous goods that may not be carried in baggage or on your body"]]},
    "list": ["Source: " + link(ARK, "Arkia: baggage information (in Hebrew)")]})

tsec('Air China', 'perfume', {
    "h": "🧳 A bottle over 100 ml at Beijing Capital Airport",
    "p": "Not from Air China: the Beijing municipal government’s English site, article of 25 March 2026, " + R + ". It applies to departures from Beijing Capital Airport, domestic and international.",
    "table": {"head": ["Situation", "What the airport offers"], "rows": [
        ["Cosmetics or personal care products over 100 ml stopped at security", "Temporary storage, in general for up to 30 days"],
        ["Where", "Passenger service centres at Terminal 3 and on level B2 of Terminal 2"],
        ["Questions", "Airport hotline +86-10-96158"]]},
    "list": ["Source: " + link(BJ, "Beijing government: temporary storage at Capital Airport")]},
    ["What can I do with a perfume over 100 ml at Beijing Capital Airport?", "The airport has a temporary storage service for security-restricted items, including cosmetics over 100 ml, generally for up to 30 days."])

ko = t['Korean Air']['power']
ko['answer'] = "Korean Air takes power banks in the cabin only, two per person, with airline approval for those over 100 Wh up to 160 Wh, and strictly prohibits using or charging them on board."
ko['sections'] = [{
    "h": "🔋 What Korean Air says about power banks",
    "p": "From the Korean Air page \"Restricted items\", section Power banks and spare batteries, " + R + ".",
    "table": {"head": ["Question", "Korean Air rule"], "rows": [
        ["Where", "Carry-on only; checked baggage prohibited"],
        ["Power banks", "2 per person; over 100 Wh up to 160 Wh needs airline approval"],
        ["Spare batteries up to 100 Wh", "5 per person; the page also says to get approval at check-in if you carry more than 6"],
        ["Spare batteries over 100 Wh up to 160 Wh", "2 per person with approval, and no more than 2 in total together with power banks of that size"],
        ["Over 160 Wh", "Not permitted at all"],
        ["More than 6 spares of up to 100 Wh", "Only for special purposes such as medical use, on your person, 20 at most"],
        ["Protection", "Each in a clear plastic bag, or terminals taped; never in the overhead bin"],
        ["Use and charging on board", "Power banks strictly prohibited; spare batteries only for medical devices such as an oxygen concentrator or CPAP"]]}},
    {"h": "🧳 Smart luggage on Korean Air",
     "p": "From the same page.",
     "table": {"head": ["Suitcase battery", "Rule"], "rows": [
         ["Cannot be removed", "Not carried, in the cabin or checked"],
         ["Removable", "Take it out and carry it in the cabin, protected against short circuit; over 160 Wh is banned"]]}}]
ko['faq'] = [["Can I use my power bank on Korean Air?", "No, the use and charging of power banks on board are strictly prohibited."],
             ["Can I check my power bank on Korean Air?", "No, power banks are prohibited in checked baggage."],
             ["How many power banks can I take on Korean Air?", "Two per person; one over 100 Wh and up to 160 Wh needs airline approval."]]
ko['checked'] = '27 November 2026'

me = t['Middle East Airlines']['power']
me['answer'] = "MEA’s restricted items page (saved September 2024) takes power banks of up to 100 Wh in the cabin only, 100 to 160 Wh with approval, and none from Iraqi airports except Erbil’s small ones. Since 27 March 2026 the ICAO rule also limits you to two, with no recharging in flight."
old = me['sections'][0]
old['h'] = "🔋 What the ICAO rule adds"
old['table']['rows'] = [r for r in old['table']['rows'] if not r[0].startswith("MEA")]
old.pop('list', None)
me['sections'].insert(0, {
    "h": "🔋 What MEA’s restricted items page says about batteries",
    "p": "From MEA’s page \"Restricted items\", " + R + " in the Internet Archive copy saved on 26 September 2024, because MEA’s site refuses access from our location.",
    "table": {"head": ["Item", "MEA rule"], "rows": [
        ["Lithium-ion up to 100 Wh, power banks included", "Cabin only, protected against short circuit; never checked"],
        ["Lithium-ion over 100 Wh up to 160 Wh", "Subject to MEA’s approval; never checked"],
        ["Power banks from Iraqi airports", "Not accepted, except at Erbil, where banks under 10,000 mAh may go in hand luggage"],
        ["Smart suitcase, removable battery under 100 Wh", "Bag may be checked once the battery is removed and carried in the cabin"],
        ["Hoverboards and Airwheels with lithium batteries", "Not accepted"]]}})
me['faq'] = [["How many power banks can I carry on MEA?", "The ICAO rule from 27 March 2026 limits passengers to two; MEA’s own page (2024) accepts them up to 100 Wh in the cabin."],
             ["Can I recharge a power bank on a MEA flight?", "Under the ICAO standard, passengers are prohibited from recharging power banks during flights."],
             ["Can I take a power bank on MEA from Iraq?", "MEA’s restricted items page says power banks are not accepted from Iraqi airports, except Erbil for banks under 10,000 mAh in hand luggage."]]
me['sources'] = [[MEA, "MEA &mdash; Restricted items"]] + me['sources']
me['checked'] = '27 November 2026'
me['unofficial'] = False
open('topics_new.json', 'w', encoding='utf8', newline='').write(json.dumps(t, ensure_ascii=False, indent=1) + tail(raw))

# ---------------- home app power bank rules
s = open('canitakethis.html', encoding='utf8', newline='').read()
i = s.index('"Korean Air":{"n":"2"')
j = s.index('}', i) + 1
new = '"Korean Air":' + json.dumps({"n": "2", "wh": 100, "use": "ban", "chk": "27 November 2026", "mid": "Cabin only, with Korean Air's approval; two per person at most.", "note": "Using or charging a power bank on board is strictly prohibited.", "keep": "Cabin only, never checked and never in the overhead bin. Tape the terminals or bag each one.", "url": KE}, separators=(',', ':'))
mea = '"Middle East Airlines":' + json.dumps({"n": "2", "wh": 100, "use": "unk", "chk": "27 November 2026", "mid": "Cabin only, with MEA's approval; never checked.", "note": "MEA's page (2024) takes up to 100 Wh in the cabin; the limit of two comes from the ICAO rule of 27 March 2026.", "keep": "No power banks are accepted from Iraqi airports, except Erbil (under 10,000 mAh in hand luggage).", "url": MEA}, separators=(',', ':'))
s = s[:i] + new + ',' + mea + s[j:]
open('canitakethis.html', 'w', encoding='utf8', newline='').write(s)

# ---------------- airline medication pages
KQ = 'https://www.kenya-airways.com/en/plan/special-care/medical-special-support/'
EW = 'https://www.eurowings.com/en/information/on-board/travelling-healthy.html'


def sec(h, p, items, src, url, label):
    return ('<section class="bd-sec"><h2>' + h + '</h2><p>' + p + '</p><ul>' + ''.join('<li>' + x + '</li>' for x in items) +
            '</ul><p class="bd-chk">' + src + ' ' + link(url, label) + '</p></section>')


def med(file, marker, html):
    s = open(file, encoding='utf8', newline='').read()
    assert s.count(marker) == 1, marker
    i = s.index(marker)
    j = s.index('])', i) + 2
    assert s[j:j + 3] != ' + ', 'already patched'
    s = s[:j] + ' + ' + json.dumps(html, ensure_ascii=False) + s[j:]
    open(file, 'w', encoding='utf8', newline='').write(s)


med('airline_medication_b9.js', "extra: steps(['Keep prescription medication in the labelled pharmacy packaging.', 'Carry syringes only together", sec(
    '📋 When Kenya Airways needs a medical clearance',
    'Kenya Airways’ medical support page lists who has to be cleared before flying.',
    ['You need clearance after a recent major event such as a heart attack or stroke, surgery in the previous two weeks, an existing heart or breathing condition, a history of clots in the lung or thrombophlebitis, or an unstable mental illness.',
     'The same applies if you need a stretcher, oxygen, a portable oxygen concentrator, a ventilator, a medical procedure in flight or battery-powered medical equipment other than a CPAP.',
     'Send the completed MEDIF form to doctors.kq@kenya-airways.com at least 24 hours before travel.',
     'It must be filled in in English, signed and stamped, and is valid for 7 days from issue. A return trip needs a new one.'],
    'Official source ' + R + ':', KQ, 'Kenya Airways: medical and special needs assistance'))

med('airline_medication_b9.js', "extra: steps(['Pack 1.5 to 2 times your expected medication in hand baggage.'", sec(
    '🤰 Flying Eurowings while pregnant',
    'Eurowings sets these terms on the same health page.',
    ['With an uncomplicated pregnancy you may fly without a gynaecologist’s certificate up to the end of week 36, which is up to four weeks before the due date.',
     'From week 28 Eurowings recommends carrying a current medical certificate.',
     'It should confirm the pregnancy is without complications, that it does not stop you flying, and give the due date.'],
    'Official source ' + R + ':', EW, 'Eurowings: travelling healthy'))

# ---------------- logs and dates
l = json.load(open('ladder_log.json', encoding='utf8'))


def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = D
    l[k] = x


done = [
    ('country/philippines/vaping', 'reliable', 'LawPhil RA 11900 s.15, ' + PH15),
    ('country/malta/vaping', 'official', 'legislation.mt Cap 315 art 18, ' + MT),
    ('country/lebanon/vaping', 'official', 'Lebanon MoPH tobacco programme, ' + LBM),
    ('country/japan/vaping', 'official', 'MHLW import Q&A 2025-06-30 Q67, ' + JP),
    ('country/indonesia/vaping', 'reliable', 'Hukumonline on PP 28/2024, ' + IDH),
    ('country/ethiopia/vaping', 'reliable', 'FAOLEX scan of Proclamation 1112/2019, ' + ET),
    ('country/czechia/vaping', 'official', 'Czech MoH FAQ Act 65/2017, ' + CZ),
    ('country/croatia/vaping', 'reliable', 'copy of 2025 amending act, ' + HR),
    ('country/colombia/vaping', 'official', 'Ley 2354 de 2024, ' + CO),
    ('country/panama/vaping', 'reliable', 'La Prensa 2025-07-22, ' + PA),
    ('country/jordan/plants-seeds', 'reliable', 'UNEP-LEAP Resolution Z/24 of 2016, ' + JO),
    ('country/philippines/cash', 'official', 'Bureau of Customs foreign currency (Wayback 20250914), ' + PHB),
    ('country/bahrain/cash', 'official', 'LLOC Law 54 of 2006, ' + BHL),
    ('airline/south-african-airways/alcohol', 'official', 'SAA conditions of carriage March 2022, ' + SAC),
    ('airline/south-african-airways/vape-e-cigarette', 'official', 'SAA conditions of carriage March 2022, ' + SAC),
    ('airline/copa-airlines/vape-e-cigarette', 'reliable', 'La Prensa 2025-07-22, ' + PA),
    ('airline/avianca/vape-e-cigarette', 'official', 'Ley 2354 de 2024, ' + CO + ' ; avianca contract PDF no answer, avianca.com 403'),
    ('airline/arkia/power-bank', 'official', 'Arkia baggage information, ' + ARK),
    ('airline/air-china/perfume-aerosols', 'official', 'Beijing government storage article, ' + BJ),
    ('airline/korean-air/power-bank', 'official', 'Korean Air restricted items (browser pane), ' + KE),
    ('airline/middle-east-airlines/power-bank', 'official', 'MEA restricted items (Wayback 20240926; live site bans our region, not bypassed), ' + MEA),
    ('airline/kenya-airways/medication', 'official', 'Kenya Airways medical support, ' + KQ),
    ('airline/eurowings/medication', 'official', 'Eurowings travelling healthy, ' + EW)]
for k, tier, s in done:
    lg(k, tier, 'read 2026-11-27: ' + s)
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))

raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
for k, _, _ in done:
    ov['/' + k + '/'] = D
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + tail(raw))
print('ok', len(done))
