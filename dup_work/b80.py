# Batch 7 (27 November 2026): the fourteen pages at 53% duplicate or more; repeated template lines removed; China domestic liquid rule corrected
import json, os

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


# ---------------- 1. the "we could not find an official page" paragraph is wrong where the card is official
sub('build.js', "'+CUP.link[1]+'</a><p class=\"bd-why\">We could not find or read an official page for '+esc(cn)+'",
    "'+CUP.link[1]+'</a>'+([].concat(v.source||[]).some(function(s){return s&&s.url&&!s.unofficial;})?'</div>':'<p class=\"bd-why\">We could not find or read an official page for '+esc(cn)+'")
sub('build.js', "we just cannot confirm it 100%, so please check it with the customs authority too.</p></div>':", "we just cannot confirm it 100%, so please check it with the customs authority too.</p></div>'):")

# ---------------- 2. repeated lines on pages whose card is official
ADDED = ' The card above comes from the official page linked under it.'
PUB = 'The page names no publisher and shows no date, so confirm the figures with the customs authority before you travel.'
raw, u = load('country_unique.json')
trimmed = []
DIR = {'plants': 'plants-seeds', 'vape': 'vaping'}
for cat, v in u.items():
    for c, e in v.items():
        if not isinstance(e, dict) or ADDED not in e.get('src', ''):
            continue
        e['src'] = e['src'].replace(ADDED, '')
        if PUB in e.get('p', []) and 'names no publisher' in e['src']:
            e['p'] = [x for x in e['p'] if x != PUB]
        trimmed.append('country/%s/%s' % (c, DIR.get(cat, cat)))


def more(cat, c, items):
    e = u[cat][c]
    assert 'more' not in e
    e['more'] = items


PHD = 'https://lawphil.net/statutes/repacts/ra2013/ra_10586_2013.html'
CAG = 'http://www.caac.gov.cn/INDEX/HLFW/HKLXCS/202303/t20230316_217597.html'
SA = 'https://zatca.gov.sa/en/RulesRegulations/Taxes/Pages/customs_individual/Travel_pages/declare.aspx'
HR = 'https://narodne-novine.nn.hr/clanci/sluzbeni/2017_05_45_1047.html'

more('alcohol', 'philippines', [{
    "h": "Drink-driving in the Philippines",
    "p": ["Republic Act 10586 of 2013 makes it unlawful to drive a motor vehicle under the influence of alcohol. An officer with probable cause may test you.",
          "Where nobody is hurt, the penalty is three months in prison and a fine of 20,000 to 80,000 pesos. Fines rise to 100,000 to 200,000 pesos where someone is injured, and a first conviction suspends a non-professional licence for 12 months."],
    "src": "Unofficial source read 27 November 2026: Republic Act No. 10586 on LawPhil, a private legal database.",
    "unofficial": True, "side": True,
    "link": [PHD, "Unofficial source: LawPhil, Republic Act 10586"]}])
more('alcohol', 'china', [{
    "h": "Carrying bottles on a flight inside China",
    "p": ["Buying within the customs limit is one thing; flying onward is another. The civil aviation authority says alcoholic drinks may not be carried in hand luggage.",
          "In checked baggage they must be in labelled retail packaging, with containers of up to 5 L. Drinks of 24% alcohol or less have no quantity limit, drinks above 24% up to 70% are limited to 5 L per passenger, and anything above 70% may not travel at all."],
    "src": "Official source read 27 November 2026: Civil Aviation Administration of China, travel guidance on what you may carry and check (in Chinese, translated by us). Confirm with your airline.",
    "side": True,
    "link": [CAG, "Civil Aviation Administration of China: carry and check guidance (in Chinese)"]}])
more('cash', 'saudi-arabia', [{
    "h": "Where to declare in Saudi airports, and the fine",
    "p": ["The tax and customs authority says declaration is compulsory, arriving or leaving, for cash, bearer instruments, gold, precious metals, stones and fine jewellery worth SAR 60,000 or more.",
          "For cash, bearer instruments and precious metals of that value you must visit the declaration office even after declaring online. Departing passengers find it after check-in, before the departure hall; arrivals find it after passport control and baggage reclaim.",
          "Failing to declare brings a fine of 25% of the seized value the first time and 50% for a repeat, where a link to another crime or money laundering is ruled out."],
    "src": "Official source read 27 November 2026: ZATCA, declaration for travellers, in the Internet Archive copy saved on 18 May 2026 because the live site did not answer.",
    "link": [SA, "ZATCA: traveller declaration"]}])
more('tobacco', 'croatia', [{
    "h": "The 20-metre rule in Croatia",
    "p": ["Beyond the ban in enclosed public places, Croatia’s tobacco law bans smoking less than 20 metres from the entrance of a health-care building, and less than 20 metres from the entrance of a school or other education building.",
          "Smoking rooms are not allowed in premises used for health care or education."],
    "src": "Official source read 27 November 2026: Law on restricting the use of tobacco and related products, article 25, as first published in Narodne novine 45/2017 (in Croatian, translated by us). Later amendments changed the first paragraph.",
    "side": True,
    "link": [HR, "Narodne novine: tobacco law 45/2017 (in Croatian)"]}])
open('country_unique.json', 'w', encoding='utf8', newline='').write(json.dumps(u, ensure_ascii=False, separators=(',', ':')) + tail(raw))

# ---------------- 3. vaping
SZ = 'https://www.sz.gov.cn/zfgb/2019/gb1108/content/post_4963996.html'
RS = 'https://www.021.rs/story/Info/Srbija/357543/Novi-Zakon-o-duvanu-posebno-regulise-e-cigarete-Ovo-su-kljucne-tacke.html'
LU = 'https://paperjam.lu/article/news-en-guerre-ouverte-contre-la-cigarette'
KWN = 'https://www.emaratalyoum.com/politics/news/2026-08-16-1.2074483'
KWL = 'https://extranet.who.int/fctcapps/sites/default/files/kh-media/Kuwait-smoking.pdf'
raw, v = load('vape_extra.json')


def vsec(code, section, src):
    e = v[code]
    assert not any(s['h'] == section['h'] for s in e['sections'])
    e['sections'].insert(0, section)
    e['src'] = src + e['src']


vsec('CN', {
    "h": "🏙️ Shenzhen counts vaping as smoking",
    "p": "From the Shenzhen Special Economic Zone Smoking Control Regulation as published in the city government gazette, " + R + " (in Chinese, translated by us). It is a city rule; other Chinese cities set their own.",
    "table": {"head": ["Point", "Shenzhen rule"], "rows": [
        ["Definition", "“Smoking” includes using an e-cigarette, with or without nicotine"],
        ["Smoking where banned", "Ordered to stop, with a 50 yuan fine collected on the spot"],
        ["Refusing to stop", "200 yuan"],
        ["Obstructing enforcement", "500 yuan"]]}},
    [[SZ, "Shenzhen government gazette: smoking control regulation (in Chinese)"]])
vsec('RS', {
    "h": "🧪 What Serbia’s tobacco law changed for vapes",
    "p": "Unofficial source: the news site 021.rs, 5 November 2023, reporting the amendments to the Tobacco Law published in the official gazette, " + R + " (in Serbian, translated by us).",
    "table": {"head": ["Point", "As reported"], "rows": [
        ["Covered products", "E-cigarettes with or without nicotine, refill liquid, heated herbal products and nicotine pouches"],
        ["From 1 January 2025", "Nicotine limited to 2%, and disposable e-cigarettes to 2 ml of liquid"],
        ["Sales", "Banned to minors, at a distance and through personal offers"]]},
    "list": ["<strong>Not stated:</strong> any rule on what a traveller may carry in luggage."]},
    [[RS, "Unofficial source: 021.rs on the amended Tobacco Law (in Serbian)"]])
vsec('LU', {
    "h": "🛝 Luxembourg: vapes follow the smoking bans",
    "p": "Unofficial source: the business news site Paperjam, 10 August 2017, on the anti-tobacco law that had just taken effect, " + R + " (in French, translated by us).",
    "table": {"head": ["Smoking, and so vaping, banned", "Detail"], "rows": [
        ["Children’s playgrounds", "Banned"],
        ["Open sports grounds", "Banned while under-16s are playing there"],
        ["Private cars", "Banned with a child under 12 on board"],
        ["Fines reported", "€25 to €250"]]}},
    [[LU, "Unofficial source: Paperjam on the 2017 anti-tobacco law (in French)"]])
vsec('KW', {
    "h": "🚌 Smoking bans in Kuwait now, and sales limits from 2027",
    "p": "Unofficial sources, " + R + " (in Arabic, translated by us): a presentation hosted by WHO quoting article 56 of the Environment Protection Law 42 of 2014, and Emarat Al Youm of 16 August 2026 on the new ministerial resolution.",
    "table": {"head": ["Point", "What the sources say"], "rows": [
        ["Already in the 2014 law", "No smoking at all on public transport; in enclosed and semi-enclosed public places only in designated areas"],
        ["From 1 January 2027: vapes", "Treated like smoking in places where smoking is banned"],
        ["From 1 January 2027: where sold", "Not within 200 metres of educational institutions, and only at set-aside spots in cooperative societies"]]}},
    [[KWN, "Unofficial source: Emarat Al Youm on the 2026 resolution (in Arabic)"], [KWL, "Unofficial source: WHO-hosted presentation on Kuwait’s smoking law (PDF, in Arabic)"]])
open('vape_extra.json', 'w', encoding='utf8', newline='').write(json.dumps(v, ensure_ascii=False, indent=1) + tail(raw))

# ---------------- 4. airline topic pages
SWH = 'https://support.southwest.com/helpcenter/article/hazardous-materials'
LOT = 'https://www.lot.com/pl/en/regulations/conditions-of-carriage'
EGC = 'https://www.egyptair.com/en/Pages/Conditions-of-Carriage.aspx'
NO = 'https://www.norwegian.com/en/travel-info/baggage/batteries-on-board/'
RJ = 'https://www.rj.com/en/info-and-tips/conditions-of-carriage'
OM = 'https://www.omanair.com/storage/frontend/PDF/conditions_carriage.pdf'
raw, t = load('topics_new.json')


def tsec(a, k, section, faq=None):
    e = t[a][k]
    assert not any(s['h'] == section['h'] for s in e['sections'])
    e['sections'].append(section)
    if faq:
        e['faq'] = e.get('faq', []) + [faq]


tsec('Southwest', 'liquids', {
    "h": "🧴 Southwest’s own limit on toiletries in your bags",
    "p": "From Southwest’s Help Center article on hazardous materials, " + R + ".",
    "table": {"head": ["Item", "Southwest wording"], "rows": [
        ["Medicinal and toilet articles in your luggage", "Special exception for small quantities, up to 70 oz in total"],
        ["Aerosols, paints and flammable liquids", "Forbidden in checked and carry-on bags unless the regulations allow an exception"],
        ["E-cigarettes and spare batteries", "Not allowed in checked baggage"]]},
    "list": ["Source: " + link(SWH, "Southwest Help Center: hazardous materials")]},
    ["How much toiletry liquid can I pack on Southwest in total?", "Southwest’s hazardous materials article allows small quantities of medicinal and toilet articles in your luggage up to 70 oz in total; the carry-on liquids rule still applies at security."])
tsec('LOT Polish', 'alcohol', {
    "h": "🚫 Your own alcohol on a LOT flight",
    "p": "From LOT’s General Conditions of Carriage, articles 9.1.1 and 11.1, " + R + ".",
    "table": {"head": ["Point", "LOT conditions"], "rows": [
        ["Drinking alcohol you brought", "Strictly prohibited on board, as is smoking"],
        ["Rectified spirit", "Not accepted in baggage"],
        ["Other alcoholic drinks in baggage", "Only in originally sealed packages"]]},
    "list": ["Source: " + link(LOT, "LOT: General Conditions of Carriage")]},
    ["Can I drink my duty-free alcohol on LOT?", "No. LOT’s conditions of carriage strictly prohibit drinking alcohol you brought on board."])
tsec('EgyptAir', 'liquids', {
    "h": "📄 What EgyptAir’s conditions say about liquids in baggage",
    "p": "From EgyptAir’s conditions of carriage, article 8.3.1.1, " + R + " in the Internet Archive copy saved on 24 December 2025.",
    "table": {"head": ["Point", "Wording"], "rows": [
        ["Listed as unacceptable as baggage", "“Liquids of any kind”, in a list with explosives, gases, corrosives and poisons"],
        ["Stated exception", "Liquids in the passenger’s unchecked (cabin) baggage for use in the course of the journey"]]},
    "list": ["<strong>Read with care:</strong> this broad wording is stricter than usual airport practice for checked bags, so ask EgyptAir before packing bottles in the hold.", "Source: " + link(EGC, "EgyptAir: Conditions of Carriage")]},
    ["Can I check liquids on EgyptAir?", "EgyptAir’s conditions list liquids of any kind as unacceptable baggage, except those in your cabin bag for use on the journey, so ask EgyptAir before checking bottles."])
tsec('Norwegian', 'power', {
    "h": "🧳 Smart bags and wheelchair batteries on Norwegian",
    "p": "From the same Norwegian page, " + R + ".",
    "table": {"head": ["Item", "Norwegian rule"], "rows": [
        ["Smart bag, removable battery", "Take the battery out and carry it in hand baggage if the bag is checked"],
        ["Smart bag, fixed battery up to 2.7 Wh or 0.3 g lithium metal", "Allowed"],
        ["Smart bag, fixed battery above that", "Forbidden"],
        ["Battery removed from a mobility aid", "Hand baggage only, up to 300 Wh, at most 2"],
        ["E-cigarettes", "On your person only; no use or charging on board"]]}},
    ["Can I take a smart suitcase on Norwegian?", "Yes if the battery comes out or is no larger than 2.7 Wh; a bag with a bigger fixed battery is forbidden."])
tsec('Royal Jordanian', 'vape', {
    "h": "🚭 Royal Jordanian’s smoking policy",
    "p": "From Royal Jordanian’s Conditions of Carriage, conduct on board, " + R + ".",
    "table": {"head": ["Point", "What the conditions say"], "rows": [
        ["Smoking", "Not permitted on any Royal Jordanian flight"],
        ["Breaking your duties on board", "The airline may report the matter to police"],
        ["Measures", "May include physical restraint, removal from the aircraft or refusal to carry you further"]]},
    "list": ["Source: " + link(RJ, "Royal Jordanian: Conditions of Carriage")]})
tsec('Oman Air', 'vape', {
    "h": "⚠️ If you ignore crew instructions on smoking",
    "p": "From Oman Air’s Conditions of Carriage, article 11, " + R + ".",
    "table": {"head": ["Step", "Oman Air may"], "rows": [
        ["On the spot", "Restrain you, refuse boarding, take you off the aircraft or refuse onward and future carriage"],
        ["Authorities", "Report the matter to police; you may be prosecuted for offences on board"],
        ["Costs", "Claim back the cost of the measures taken, compensation to others affected and damage, and diversion costs"]]},
    "list": ["Source: " + link(OM, "Oman Air: Conditions of Carriage (PDF)")]})
open('topics_new.json', 'w', encoding='utf8', newline='').write(json.dumps(t, ensure_ascii=False, indent=1) + tail(raw))

# ---------------- 5. China domestic liquid rule, corrected from the aviation authority's current guidance
f = 'airline_medication_b13.js'
sub(f, "const P2 = ['http://www.caac.gov.cn/XXGK/XXGK/ZCFB/201511/t20151104_10912.html', 'Civil Aviation Administration of China: Announcement on restricting liquids on civil flights (2007, in Chinese)',",
    "const P2 = ['" + CAG + "', 'Civil Aviation Administration of China: what you may carry and check (in Chinese)',")
sub(f, "China civil aviation authority (CAAC, notice of 2007 still marked valid): patients may carry", "China civil aviation authority (CAAC, current travel guidance): patients may carry")
sub(f, "'CAAC notice, article 4: passengers with babies may carry liquid milk products, and diabetics or other patients may carry the liquid medicine they need, in a suitable quantity, once security checks confirm it is safe.'",
    "'CAAC guidance: liquid milk products needed for a baby and liquid medicine needed by diabetics or other patients may go in the cabin once the security check confirms them.'")
sub(f, "'CAAC notice, article 2: on international", "'CAAC guidance: on international")
sub(f, "'CAAC notice, article 1: on domestic flights you may carry up to 1 litre of liquids in total (not counting alcohol), after the bottles are opened for inspection.'",
    "'CAAC guidance: on domestic flights liquids may not go in the cabin, apart from your own cosmetics (one of each, up to 100 ml), toothpaste and shaving cream (one each).'")
f = 'airline_medication_b11.js'
sub(f, "'CAAC article 3: on domestic flights each liquid container may hold at most 100 ml and the total may not exceed 1,000 ml, except flammable and explosive liquids, which are banned.'",
    "'The authority’s current travel guidance is stricter on other liquids: none in the cabin on domestic flights except your own cosmetics (one of each, up to 100 ml), toothpaste and shaving cream, with needed medicine excepted after the security check. The 2008 figure of 1,000 ml in total no longer matches it.'")
sub(f, "          'The notice is dated 2008; the authority page still marks it as valid.'\r\n        ], [P2])," if "\r\n" in open(f, encoding='utf8', newline='').read() else "          'The notice is dated 2008; the authority page still marks it as valid.'\n        ], [P2]),",
    "          'The notice is dated 2008; the authority page still marks it as valid.'\n        ], [P2, ['" + CAG + "', 'Civil Aviation Administration of China: what you may carry and check (in Chinese)', 'Liquids, medicines']]),")

# ---------------- logs and dates
l = json.load(open('ladder_log.json', encoding='utf8'))


def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = D
    l[k] = x


done = [
    ('country/philippines/alcohol', 'reliable', 'LawPhil RA 10586, ' + PHD),
    ('country/china/alcohol', 'official', 'CAAC carry and check guidance, ' + CAG),
    ('country/saudi-arabia/cash', 'official', 'ZATCA declaration (Wayback 20260518; live site no answer), ' + SA),
    ('country/croatia/tobacco', 'official', 'Narodne novine 45/2017 art 25, ' + HR),
    ('country/china/vaping', 'official', 'Shenzhen smoking control regulation, ' + SZ),
    ('country/serbia/vaping', 'reliable', '021.rs 2023-11-05, ' + RS),
    ('country/luxembourg/vaping', 'reliable', 'Paperjam 2017-08-10, ' + LU),
    ('country/kuwait/vaping', 'reliable', 'Emarat Al Youm 2026-08-16 and WHO-hosted presentation, ' + KWN),
    ('airline/southwest/liquids', 'official', 'Southwest hazardous materials (browser pane), ' + SWH),
    ('airline/lot-polish/alcohol', 'official', 'LOT conditions of carriage (browser pane), ' + LOT),
    ('airline/egyptair/liquids', 'official', 'EgyptAir conditions of carriage (Wayback 20251224), ' + EGC),
    ('airline/norwegian/power-bank', 'official', 'Norwegian batteries on board, ' + NO),
    ('airline/royal-jordanian/vape-e-cigarette', 'official', 'Royal Jordanian conditions of carriage, ' + RJ),
    ('airline/oman-air/vape-e-cigarette', 'official', 'Oman Air conditions of carriage, ' + OM),
    ('airline/china-southern/medication', 'official', 'CAAC carry and check guidance, ' + CAG),
    ('airline/china-eastern/medication', 'official', 'CAAC 2008 notice and current guidance, ' + CAG)]
for k, tier, s in done:
    lg(k, tier, 'read 2026-11-27: ' + s)
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))

raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
for k in [d[0] for d in done] + trimmed:
    ov['/' + k + '/'] = D
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + tail(raw))
print('ok', len(done), 'trimmed', len(trimmed))
