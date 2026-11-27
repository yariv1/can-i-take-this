# Batch 5 (27 November 2026): the seventeen pages at 55% duplicate
import json

D = '2026-11-27'
R = 'read 27 November 2026'


def load(p):
    raw = open(p, encoding='utf8', newline='').read()
    return raw, json.loads(raw)


def tail(raw):
    return '\n' if raw.endswith('\n') else ''


# ---------------- vaping
ZA = 'https://www.sars.gov.za/wp-content/uploads/Legal/SCEA1964/Legal-LPrim-CE-Sch1P2A-Schedule-No-1-Part-2A.pdf'
NGA = 'https://faolex.fao.org/docs/pdf/nig192387.pdf'
NGB = 'https://businessday.ng/news/article/reps-to-review-tobacco-law-says-nicotine-drug-abuse-national-crisis/'
IL = 'https://www.tobaccocontrollaws.org/legislation/israel/e-cigarettes'
DE = 'https://www.gesetze-im-internet.de/juschg/__10.html'
CY = 'https://assets.tobaccocontrollaws.org/uploads/legislation/Cyprus/Cyprus-TC-Law-2017.pdf'
BH = 'https://bahraincustoms.gov.bh/en/duty-free-purchases'

raw, v = load('vape_extra.json')


def vsec(code, section, src, faq=None):
    e = v[code]
    assert not any(s['h'] == section['h'] for s in e['sections'])
    e['sections'].insert(0, section)
    e['src'] = src + e['src']
    if faq:
        e['faq'].append(faq)


za = v['ZA']
for s in za['sections']:
    s['list'] = [x.replace('Not read: any SARS rule or tariff note for e-cigarettes and liquid', 'Not found: any SARS traveller allowance for e-cigarettes and liquid').replace('<strong>Not read:</strong> any SARS rule or tariff note for e-cigarettes and liquid', '<strong>Not found:</strong> any SARS traveller allowance for e-cigarettes and liquid') for x in s.get('list', [])]
vsec('ZA', {
    "h": "💰 What South Africa’s excise tariff charges on vaping liquid",
    "p": "From the South African Revenue Service Customs and Excise Tariff, Schedule 1 Part 2A, issue dated 30 April 2026, " + R + ".",
    "table": {"head": ["Tariff line", "Excise duty"], "rows": [
        ["Nicotine products for inhalation without burning, other than tobacco sticks (2404.12)", "R3.29 per ml"],
        ["The same with nicotine substitutes (2404.19.10)", "R3.29 per ml"],
        ["E-cigarettes presented with vaping liquid, with or without nicotine (8543.40.10)", "R3.29 per ml"]]},
    "list": ["<strong>For a traveller:</strong> this is the tariff. It states no duty-free quantity for luggage, so ask SARS how it applies to what you carry."]},
    [[ZA, "SARS: Customs and Excise Tariff, Schedule 1 Part 2A (PDF)"]])

ng = v['NG']
vsec('NG', {
    "h": "📜 Why Nigeria’s 2015 smoking ban does not name vapes",
    "p": "Unofficial source: a reprint of the National Tobacco Control Act 2015 held on FAO’s FAOLEX database, " + R + ".",
    "table": {"head": ["Point", "What the Act says"], "rows": [
        ["Tobacco products, as defined", "Products made wholly or partly of leaf tobacco, for smoking, sucking, chewing or snuffing"],
        ["Where smoking tobacco is banned", "Public transport, listed indoor public places such as medical facilities, schools and workplaces, and homes shared with anyone under 18 (the smoker’s own room excepted)"],
        ["Minimum age for tobacco sales", "18"]]},
    "list": ["<strong>Review announced:</strong> BusinessDay reported on 25 February 2026 that a House of Representatives committee planned to review the Act to deal with e-cigarettes and vape devices. We found no passed change, so check before you travel."]},
    [[NGA, "Unofficial source: FAOLEX reprint of the National Tobacco Control Act 2015 (PDF)"], [NGB, "Unofficial source: BusinessDay on the planned review of the tobacco law"]])

vsec('IL', {
    "h": "🏢 Where vaping is restricted indoors in Israel, and the nicotine cap",
    "p": "Unofficial source: Tobacco Control Laws (Campaign for Tobacco-Free Kids legal database), Israel e-cigarette page last updated 20 July 2022, " + R + ".",
    "table": {"head": ["Point", "What the database reports"], "rows": [
        ["Use banned in listed places", "Among them government offices, hospitals, childcare facilities, preschools, and primary and secondary schools"],
        ["Designated smoking rooms allowed", "In other indoor public places and workplaces, such as malls, restaurants, bars, pubs and nightclubs"],
        ["Nicotine strength on sale", "E-cigarettes above 20 mg/ml may not be sold"]]},
    "list": ["<strong>Not stated:</strong> whether the 20 mg/ml sales cap applies to liquid in a traveller’s bag."]},
    [[IL, "Unofficial source: Tobacco Control Laws, e-cigarettes in Israel"]])

vsec('DE', {
    "h": "🔞 Under-18s and vapes in Germany",
    "p": "From section 10 of the Youth Protection Act (Jugendschutzgesetz) on the federal justice ministry’s law website, " + R + " (in German, translated by us). It covers nicotine-free e-cigarettes and e-shishas as well, and their containers.",
    "table": {"head": ["Rule", "What the law says"], "rows": [
        ["Handing over", "No giving or selling to children or young people in restaurants, shops or elsewhere in public"],
        ["Use in public", "Children and young people may not be allowed to vape"],
        ["Vending machines", "Not in public, unless placed or secured so that minors cannot use them"],
        ["Mail order", "May not be offered or delivered to children or young people"]]}},
    [[DE, "Official: Youth Protection Act, section 10 (in German)"]],
    ["Can a 17-year-old vape in public in Germany?", "No. Germany’s Youth Protection Act says children and young people may not be allowed to vape in public, including nicotine-free e-cigarettes."])

vsec('CY', {
    "h": "🚫 Where you may not vape in Cyprus",
    "p": "Unofficial source: the Law Commissioner’s English translation of the Protection of Health (Control of Smoking) Law 2017, amendments to 2020 included, in a copy on the Tobacco Control Laws website, " + R + ". The ban on e-cigarettes covers nicotine-free ones too.",
    "table": {"head": ["Where", "Rule"], "rows": [
        ["Indoor public places", "Banned, among them airports, ports, hospitals, schools, museums, cinemas, hotels, shopping malls, restaurants, cafés, bars, discos and internet cafés"],
        ["Exceptions", "Specially built waiting areas for boarding passengers at airports and ports, and certain designated hotel areas"],
        ["Outdoors", "Banned in school grounds and in hospital open areas, apart from designated spots at hospitals"],
        ["Vehicles", "Banned in public vehicles, and in a private car with a passenger under 18"],
        ["Workplaces", "Banned"],
        ["Maximum fine on conviction", "€2,000"]]}},
    [[CY, "Unofficial source: Tobacco Control Laws, copy of Cyprus Law 24(I)/2017 in English (PDF)"]])

bh = v['BH']
old = bh['sections'][0]
old['p'] = old['p'].replace(' Bahrain Customs could not be read from here (HTTP 403).', '')
old['list'] = ["<strong>Not read:</strong> the decision text and anything newer than 2019. It predates the customs list above, so ask Bahrain Customs if you carry more than a small personal supply."]
bh['faq'] = [["Can I bring a vape into Bahrain?", "Bahrain Customs lists 10 electronic cigarettes, one electronic hookah device, one electronic heating device and 60 ml of electronic hookah liquid among the duty-free items for travellers, for non-commercial use. A 2013 decision listed by Tobacco Control Laws bans importing and selling e-cigarettes and predates that list."]]
vsec('BH', {
    "h": "🛂 What Bahrain Customs lets travellers bring for vaping",
    "p": "From the Bahrain Customs page Duty Free Allowances, " + R + " in the Internet Archive copy saved on 8 February 2026, because the live site did not answer. The items are exempt from customs duty when carried by the traveller and not for trade.",
    "table": {"head": ["Item", "Duty-free amount"], "rows": [
        ["Electronic cigarettes", "10"],
        ["Electronic hookah device", "1"],
        ["Electronic heating device", "1"],
        ["Liquid for electronic hookah filling", "60 ml"]]},
    "list": ["<strong>Not covered:</strong> frequent travellers bringing goods regularly do not qualify for the exemption. The page puts the age condition of 18 on tobacco and alcohol."]},
    [[BH, "Bahrain Customs: Duty Free Allowances"]])
bh['card'] = {"status": "warn", "head": "Duty-free limit: 10 e-cigarettes and 60 ml of liquid.",
              "lines": ["Bahrain Customs lists 10 electronic cigarettes and 60 ml of electronic hookah liquid as duty-free for a traveller.",
                        "One electronic hookah device and one electronic heating device are on the same list.",
                        "Personal use only; frequent travellers bringing goods regularly do not qualify."]}
open('vape_extra.json', 'w', encoding='utf8', newline='').write(json.dumps(v, ensure_ascii=False, indent=1) + tail(raw))

# ---------------- country plants and tobacco
EEN = 'https://www.riigiteataja.ee/en/akt/520082026001?leiaKehtiv'
IE = 'https://revisedacts.lawreform.ie/eli/1976/act/39/section/21/revised/en/html'
PTA = 'https://www.agroportal.pt/o-azevinho-ilex-aquifolium-l-e-uma-especie-protegida-pelo-que-a-colheita-o-corte-total-ou-parcial-o-arranque-o-transporte-e-a-venda-sao-proibidos-em-portugal-continental/'
PTI = 'https://icnf.pt/api/file/doc/dec9fe218d76ab5f'
PH = 'https://lawphil.net/executive/execord/eo2017/eo_26_2017.html'

raw, u = load('country_unique.json')


def more(cat, c, items):
    e = u[cat][c]
    assert 'more' not in e
    e['more'] = items


more('plants', 'estonia', [{
    "h": "Picking wild plants in Estonia",
    "p": ["The Forest Act lets you stay in publicly owned forests, and in private forests that are not fenced or marked, and pick berries, mushrooms and nuts and gather ornamental branches, herbs and ornamental plants there. You must not unduly harm the owner’s interests, disturb game or protected animals while they breed or disturb other people, leave no permanent traces, and follow fire safety and the owner’s requirements.",
          "Protected species are different. The Nature Conservation Act bans harming plants and fungi in protected categories I and II, picking included. Category III species may not be destroyed or gathered to an extent that endangers them in that habitat, except in populations of little representativity."],
    "src": "Official source read 27 November 2026: Forest Act section 35 (version in force from 1 July 2026) and Nature Conservation Act section 55 (version in force from 1 September 2026), official English translations on Riigi Teataja.",
    "side": True,
    "link": [EEN, "Riigi Teataja: Nature Conservation Act"]}])
more('plants', 'ireland', [{
    "h": "Protected wild plants in Ireland",
    "p": ["Under section 21 of the Wildlife Act 1976, it is an offence without a licence to cut, pick, collect, uproot, injure or destroy a protected plant, or its flowers, roots, seeds or spores. Buying, selling, transporting or possessing it, alive or dead, is also covered, as is wilfully damaging its habitat.",
          "The species are listed in the Flora (Protection) Order 2022. The National Parks and Wildlife Service says the protection applies wherever the plants grow, not only on designated conservation sites."],
    "src": "Official sources read 27 November 2026: Law Reform Commission revised text of the Wildlife Act 1976, section 21, and the National Parks and Wildlife Service page on the Flora (Protection) Order 2022.",
    "side": True,
    "link": [IE, "Law Reform Commission: Wildlife Act 1976, section 21 (revised)"]}])
more('plants', 'portugal', [{
    "h": "Wild holly may not be picked in mainland Portugal",
    "p": ["Wild holly (azevinho) is protected in mainland Portugal under Decree-Law 423/89: picking it, cutting it wholly or partly, uprooting it, transporting it and selling it are banned.",
          "Wild and cultivated holly are hard or impossible to tell apart during transport or sale, so do not carry a cut branch without knowing where it came from."],
    "src": "Unofficial source read 27 November 2026: Agroportal, a farming news site, article of 2 December 2020 on Decree-Law 423/89 (in Portuguese, translated by us).",
    "unofficial": True, "side": True,
    "link": [PTA, "Unofficial source: Agroportal on the protection of wild holly (in Portuguese)"]},
    {"h": "In Portugal’s protected areas, leave plants where they are",
     "p": ["The visitor code of conduct of ICNF, Portugal’s nature conservation institute, asks people in protected areas not to pick plants or take geological samples, and not to light fires."],
     "src": "Official source read 27 November 2026: ICNF code of conduct for visitors to protected areas (leaflet, in Portuguese, translated by us).",
     "side": True,
     "link": [PTI, "ICNF: visitor code of conduct (PDF, in Portuguese)"]}])
more('tobacco', 'philippines', [{
    "h": "Smoking rules once you are in the Philippines",
    "p": ["Executive Order 26 of 2017 bans smoking in enclosed public places and public vehicles, moving or standing, except in designated smoking areas that meet the order’s standards.",
          "People under 18 may not smoke, buy or sell tobacco products, and may not enter a designated smoking area. Breaking the order carries the penalties of section 32 of Republic Act 9211 and other applicable laws."],
    "src": "Unofficial source read 27 November 2026: Executive Order No. 26 of 16 May 2017 on LawPhil, a private legal database. Local ordinances can be stricter and were not checked.",
    "unofficial": True, "side": True,
    "link": [PH, "Unofficial source: LawPhil, Executive Order No. 26 of 2017"]}])
open('country_unique.json', 'w', encoding='utf8', newline='').write(json.dumps(u, ensure_ascii=False, separators=(',', ':')) + tail(raw))

# ---------------- airline topic pages
SAS = 'https://www.flysas.com/en/travel-info/baggage/restricted-prohibited-items'
LHO = 'https://www.lufthansa.com/content/dam/lh/documents/during-your-trip/food-and-beverages/onboard-delights/lh_mobile-version_onboard-delights_en.pdf'
EGC = 'https://www.egyptair.com/en/Pages/Conditions-of-Carriage.aspx'
TPG = 'https://thepointsguy.com/news/fancy-a-cocktail-on-these-airlines-forget-about-it/'

raw, t = load('topics_new.json')

s = t['SAS']['power']
s['sections'].append({
    "h": "♿ Removed wheelchair batteries on SAS",
    "p": "From the same SAS page, " + R + ". A battery taken out of a wheelchair or other mobility device has higher limits than a spare phone or laptop battery.",
    "table": {"head": ["Battery", "SAS rule"], "rows": [
        ["Removed from a wheelchair or mobility device", "Up to 300 Wh"],
        ["Spare mobility batteries", "1 of up to 300 Wh, or 2 of up to 160 Wh each"],
        ["Protection", "In a protective pouch, or secured so it cannot be crushed or short-circuited"]]}})
s['faq'].append(["Can I take a spare wheelchair battery on SAS?", "Yes: one spare of up to 300 Wh, or two of up to 160 Wh each, protected from damage."])
s['checked'] = '27 November 2026'

lh = t['Lufthansa']['alcohol']
lh['sections'].append({
    "h": "🍺 Buying alcohol on board Lufthansa’s European flights",
    "p": "From Lufthansa’s Onboard Delights food and drink brochure, summer 2025 edition on lufthansa.com, " + R + ". Onboard Delights is the paid service on European flights scheduled to take more than 45 minutes.",
    "table": {"head": ["Drink bought on board", "Age rule"], "rows": [
        ["Alcoholic drinks", "Sold only to people aged 16 and over"],
        ["Spirits", "Sold only to people aged 18 and over"]]}})
lh['sources'].append([LHO, "Lufthansa &mdash; Onboard Delights brochure, summer 2025 (PDF)"])
lh['faq'].append(["How old must I be to buy alcohol on a Lufthansa flight?", "Lufthansa’s Onboard Delights brochure of summer 2025 sells alcoholic drinks only to people aged 16 and over, and spirits only to people aged 18 and over."])

eg = t['EgyptAir']['alcohol']
a0 = "EgyptAir's own rule could not be read; the"
assert a0 in eg['answer'], eg['answer']
eg['answer'] = eg['answer'].replace(a0, "EgyptAir’s conditions of carriage say you may not drink alcohol on board unless EgyptAir serves it to you. We did not find an EgyptAir limit for packing bottles: the")
eg['sections'].insert(0, {
    "h": "🚫 Drinking on board EgyptAir",
    "p": "From EgyptAir’s conditions of carriage, article 11.3, " + R + " in the Internet Archive copy saved on 24 December 2025.",
    "table": {"head": ["Question", "EgyptAir rule"], "rows": [
        ["Your own bottle, including duty free", "You may not drink it on board unless EgyptAir has served it to you"],
        ["Duty free bought from EgyptAir", "The same rule applies"],
        ["Being served", "EgyptAir may refuse to serve alcohol, or take back what it served, at its discretion"]]},
    "list": ["<strong>Older third-party report:</strong> The Points Guy (2018, updated 2019) quotes an EgyptAir spokesperson saying the airline does not serve alcohol but would provide set-ups on selected routes. Ask the crew before you open anything."]})
eg['sources'] = [[EGC, "EgyptAir &mdash; Conditions of Carriage"]] + eg['sources'] + [[TPG, "Unofficial source: The Points Guy on airlines that do not serve alcohol"]]
eg['faq'] = eg.get('faq', []) + [["Can I drink my duty-free alcohol on EgyptAir?", "No, not unless the crew serves it to you: article 11.3 of EgyptAir’s conditions of carriage forbids drinking alcohol on board that EgyptAir has not served."]]
eg['checked'] = '27 November 2026'
open('topics_new.json', 'w', encoding='utf8', newline='').write(json.dumps(t, ensure_ascii=False, indent=1) + tail(raw))

# ---------------- airline medication pages
WZ = 'https://www.wizzair.com/en-gb/information-and-services/travel-information/special-assistance'
FRS = 'https://www.flyfrontier.com/travel/travel-info/special-services/'
EFDA = 'https://www.efda.gov.et/wp-content/uploads/2025/09/Guideline-For-Medicine-and-Medicine-Raw-Material-Port-Clearance-version-001-2025.pdf'
ARK = 'https://ssr.arkia.co.il/he/content/special-assistance'


def sec(h, p, items, src, url, label):
    return ('<section class="bd-sec"><h2>' + h + '</h2><p>' + p + '</p><ul>' + ''.join('<li>' + x + '</li>' for x in items) +
            '</ul><p class="bd-chk">' + src + ' <a href="' + url + '" target="_blank" rel="noopener">' + label + '</a></p></section>')


def med(file, marker, html):
    s = open(file, encoding='utf8', newline='').read()
    assert s.count(marker) == 1, marker
    i = s.index(marker)
    j = s.index('])', i) + 2
    assert s[j:j + 3] != ' + ', 'already patched'
    s = s[:j] + ' + ' + json.dumps(html, ensure_ascii=False) + s[j:]
    open(file, 'w', encoding='utf8', newline='').write(s)


med('airline_medication_b8.js', "extra: steps(['Keep all medicine in your hand luggage.', 'Carry a medical certificate for insulin", sec(
    '🫁 Breathing devices, oxygen and pregnancy on Wizz Air',
    'The same Wizz Air page covers medical equipment. Tell the Special Assistance call centre at least 48 hours before departure.',
    ['A portable oxygen concentrator without compressed or liquid oxygen is allowed with proof of what it is and a medical Fit to Fly form; it must be one of the models Wizz Air lists, and it travels as a free extra item.',
     'At most 2 batteries for that equipment go in carry-on baggage, each protected against short circuit.',
     'A CPAP, BiPAP, nebuliser or ventilator may travel switched off without the form. Using it in flight needs a Fit to Fly form issued within 6 days of the flight.',
     'You may not bring your own oxygen container. Wizz Air can supply oxygen for an extra fee of 55 EUR, for passengers needing no more than 250 minutes of continuous supply at 2 litres a minute.',
     'Pregnant passengers may fly up to week 34, or week 32 with twins. After week 28 you need a medical certificate issued within 6 days of the flight.'],
    'Official source ' + R + ':', WZ, 'Wizz Air: Special Assistance Information'))

med('airline_medication_b7.js', "extra: steps(['Pack medicine in your carry-on, not in checked luggage.', 'Declare liquid medication over 3.4 oz", sec(
    '🫁 Oxygen concentrators, CPAP and wheelchair batteries on Frontier',
    'From Frontier’s Special Services page.',
    ['Cylinders of compressed or liquefied medical oxygen are never accepted, on board or in checked baggage.',
     'FAA-approved portable oxygen concentrators on Frontier’s list may be used on board. Show a completed Frontier medical authorization form, or a doctor’s statement covering the same points, at the airport.',
     'Bring charged batteries for at least 150% of the scheduled flight time, all in carry-on baggage; the aircraft power outlets are not available.',
     'A CPAP, ventilator or respirator used on board must carry a sticker showing it is approved for aircraft use.',
     'A removed lithium-ion wheelchair battery may be up to 300 Wh and goes in the cabin, with one spare of up to 300 Wh or two of up to 160 Wh.'],
    'Official source ' + R + ':', FRS, 'Frontier: Special Services'))

med('airline_medication_b9.js', "extra: steps(['Put all medication you may need in hand luggage.', 'Carry discharge summaries", sec(
    '🇪🇹 Bringing medicine into Ethiopia',
    'This is the rule of the Ethiopian Food and Drug Authority (EFDA), not of Ethiopian Airlines. It governs medicine imported for personal use.',
    ['You submit a request to EFDA for clearance, with a copy of your passport or national ID.',
     'Over-the-counter medicine needs no prescription; both it and prescription medicine are limited to a 90-day supply.',
     'Prescription medicine needs a valid prescription. For treatment over 90 days EFDA may allow up to a 6-month supply with full medical documents.',
     'Narcotics and psychotropics need a prescription issued within the last three months. A foreign one must show the prescriber’s full name, signature, registration number if available and the drug details, with the total quantity in words and numbers.'],
    'Official source ' + R + ':', EFDA, 'EFDA: port clearance guideline, section 6 (PDF, 2025)'))

med('airline_medication_b11.js', "extra: steps(['Carry only the amount of medicine you need on the way.', 'Ask Arkia about syringes", sec(
    '🤰 Flying Arkia while pregnant',
    'Arkia’s special assistance page sets these rules (in Hebrew, translated by us).',
    ['With one baby you may fly up to and including week 36; with more than one, up to and including week 32.',
     'From week 28 you need an official doctor’s document, in English, that expressly confirms you are fit to fly.',
     'You also sign Arkia’s liability release form, at any stage of pregnancy.',
     'For a return trip the document must cover both flights and state their dates.'],
    'Official source ' + R + ':', ARK, 'Arkia: special assistance (in Hebrew)'))

# ---------------- logs and dates
l = json.load(open('ladder_log.json', encoding='utf8'))


def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = D
    l[k] = x


for k, tier, s in [
    ('country/south-africa/vaping', 'official', 'SARS tariff Schedule 1 Part 2A, ' + ZA),
    ('country/nigeria/vaping', 'reliable', 'FAOLEX reprint of the Tobacco Control Act and BusinessDay, ' + NGA + ' ' + NGB),
    ('country/israel/vaping', 'reliable', 'Tobacco Control Laws e-cigarette page, ' + IL),
    ('country/germany/vaping', 'official', 'Youth Protection Act section 10, ' + DE),
    ('country/cyprus/vaping', 'reliable', 'copy of Law 24(I)/2017, ' + CY),
    ('country/bahrain/vaping', 'official', 'Bahrain Customs duty free page, Wayback 20260208 (live site no answer), ' + BH),
    ('country/estonia/plants-seeds', 'official', 'Riigi Teataja Forest Act and Nature Conservation Act (browser pane), ' + EEN),
    ('country/ireland/plants-seeds', 'official', 'Wildlife Act s.21 revised and NPWS, ' + IE),
    ('country/portugal/plants-seeds', 'official', 'ICNF visitor code, ' + PTI),
    ('country/portugal/plants-seeds', 'reliable', 'Agroportal on Decree-Law 423/89, ' + PTA),
    ('country/philippines/tobacco', 'reliable', 'LawPhil EO 26, ' + PH),
    ('airline/sas/power-bank', 'official', 'SAS restricted items page (browser pane), ' + SAS),
    ('airline/lufthansa/alcohol', 'official', 'Lufthansa Onboard Delights brochure, ' + LHO),
    ('airline/egyptair/alcohol', 'official', 'EgyptAir conditions of carriage, Wayback 20251224, ' + EGC),
    ('airline/wizz-air/medication', 'official', 'Wizz Air special assistance, ' + WZ),
    ('airline/frontier/medication', 'official', 'Frontier special services, ' + FRS),
    ('airline/ethiopian-airlines/medication', 'official', 'EFDA port clearance guideline, ' + EFDA),
    ('airline/arkia/medication', 'official', 'Arkia special assistance page; docs.arkia.co.il showed a Cloudflare block and was not bypassed, ' + ARK)]:
    lg(k, tier, 'read 2026-11-27: ' + s)
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))

raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
for k in ['country/south-africa/vaping', 'country/nigeria/vaping', 'country/israel/vaping', 'country/germany/vaping', 'country/cyprus/vaping', 'country/bahrain/vaping',
          'country/estonia/plants-seeds', 'country/ireland/plants-seeds', 'country/portugal/plants-seeds', 'country/philippines/tobacco', 'airline/sas/power-bank',
          'airline/lufthansa/alcohol', 'airline/egyptair/alcohol', 'airline/wizz-air/medication', 'airline/frontier/medication', 'airline/ethiopian-airlines/medication',
          'airline/arkia/medication']:
    ov['/' + k + '/'] = D
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + tail(raw))
print('ok')
