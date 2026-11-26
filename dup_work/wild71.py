# Official sources read 26 November 2026: picking wild plants (FI, DK, NL, PL, SK) and Belgium's disposable e-cigarette ban
import json

b = open('build.js', encoding='utf8', newline='').read()
old = "(CUP.link&&!CV)?"
needle = "extra:(CV?CV.html:'')+(CD?CD.html:'')+(CUP?("
assert b.count(needle) == 1
fn = ("function CUMORE(e){return ((e&&e.more)||[]).map(function(m){return '<section class=\"bd-sec\"><h2>'+m.h+'</h2>'+m.p.map(function(x){return '<p>'+x+'</p>';}).join('')+'<p class=\"bd-chk\">'+m.src+'</p></section>'"
      "+'<div class=\"bd-src\"><div class=\"h\">'+(m.unofficial?'⚠ Unofficial source':'✓ Official source')+'</div><a href=\"'+m.link[0]+'\" target=\"_blank\" rel=\"noopener noreferrer\">'+m.link[1]+'</a></div>';}).join('');}")
nl = '\r\n' if '\r\n' in b else '\n'
first = 'const CUNIQ_URLS=new Set();'
assert b.count(first) == 1
b = b.replace(first, fn + nl + first)
b = b.replace(needle, "extra:(CV?CV.html:'')+(CD?CD.html:'')+CUMORE(CUP)+(CUP?(")
open('build.js', 'w', encoding='utf8', newline='').write(b)

p = 'country_unique.json'
raw = open(p, encoding='utf8', newline='').read()
u = json.loads(raw)

def more(cn, h, ps, src, link):
    e = u['plants'][cn]
    assert 'more' not in e
    e['more'] = [{"h": h, "p": ps, "src": src, "link": link}]

more('finland', 'Picking wild plants in Finland under everyman’s rights',
     ["Parks & Wildlife Finland says everyman’s rights let you pick wild berries, mushrooms and plants, as long as they are not protected species. They do not let you cut or damage growing trees, gather dry wood or fallen trees, or collect moss or lichen.",
      "Nature reserves are stricter: as a rule, collecting plants or parts of plants there needs a permit that is granted only for scientific research, and soil may not be dug out. Reserve rules differ, so read the page of the place you visit."],
     "Official source read 26 November 2026: Luontoon (Metsähallitus, Parks & Wildlife Finland), \"Everyman’s rights\". It is about picking in Finland, not about the plant rules of the country you fly home to.",
     ["https://www.luontoon.fi/en/articles/everymans-rights", "Luontoon (Metsähallitus): Everyman’s rights"])
more('denmark', 'Gathering plants from the Danish countryside',
     ["The Danish leaflet on gathering says you may gather anywhere on state-owned land, but on private land only what you can reach from the road or path you are on. Take no more than would fill a hat, only for your own use, and leave species that are scarce where you are.",
      "Never dig up plants: the leaflet says it is unlawful. On state land you may cut twigs from deciduous trees more than 10 metres tall and pick pine cones up from the ground, not off the trees."],
     "Official source read 26 November 2026: the English leaflet on gathering from the countryside on the Danish Environmental Protection Agency site (edit.mst.dk). The leaflet is undated.",
     ["https://edit.mst.dk/media/l2fk3fva/guide-enkeltsider-eng-sanke.pdf", "Danish Environmental Protection Agency: gathering from the countryside (PDF)"])
more('netherlands', 'Protected plants in the Netherlands',
     ["The Dutch government’s environment information point (IPLO) says national rules cover possessing, trading, transporting, importing and exporting protected plants and their products. They apply to species under the CITES regulation, the EU Habitats Directive and the Bern Convention, among others.",
      "Depending on the species, the activity is banned, exempted or needs an environmental permit. The State Secretary for agriculture and nature, or the province, is the competent authority, and import and export go through designated customs offices. Check a species before you carry a wild plant out of the country."],
     "Official source read 26 November 2026: IPLO, \"Rijksregels handel en bezit van beschermde dieren en planten\" (in Dutch, translated by us).",
     ["https://iplo.nl/regelgeving/regels-voor-activiteiten/activiteiten-natuur/rijksregels-handel-bezit-beschermde-dieren-planten/", "IPLO: national rules on protected animals and plants (in Dutch)"])
more('poland', 'Wild protected plants in Poland: what you may not take',
     ["Poland’s regulation on plant species protection, section 6, bans for wild plants of the listed protected species: deliberately destroying, picking or damaging them, collecting them, keeping them, and selling, offering, swapping or giving them away. Transporting is banned for species marked for that ban.",
      "The same section bans bringing specimens of these species in from abroad and taking them out of Poland. Exceptions run through permits from the regional or general director for environmental protection. The species are listed in the annexes."],
     "Official source read 26 November 2026: Regulation of the Minister of the Environment of 9 October 2014 on the protection of plant species (Journal of Laws 2014, item 1409, text as published, from the Sejm’s legal database, in Polish, translated by us). Later amendments were not checked.",
     ["https://api.sejm.gov.pl/eli/acts/DU/2014/1409/text.pdf", "Polish Journal of Laws 2014, item 1409 (PDF, in Polish)"])
more('slovakia', 'Protected plants in Slovakia',
     ["Section 34 of Slovakia’s Nature and Landscape Protection Act, 543/2002, forbids deliberately picking, collecting, cutting, digging up or destroying a protected plant where it grows in the wild.",
      "It also forbids keeping, transporting, selling, swapping or offering a protected plant. That second ban does not apply to a protected plant that did not come from the wild, or one covered by an official exception."],
     "Official source read 26 November 2026: Act 543/2002, section 34, consolidated text in force from 10 November 2026 on the Justice Ministry’s Slov-Lex site (in Slovak, translated by us).",
     ["https://static.slov-lex.sk/static/SK/ZZ/2002/543/20261110.html", "Slov-Lex: Act 543/2002 on nature and landscape protection (in Slovak)"])
out = json.dumps(u, ensure_ascii=False, separators=(',', ':'))
open(p, 'w', encoding='utf8', newline='').write(out + ('\n' if raw.endswith('\n') else ''))

p = 'vape_extra.json'
raw = open(p, encoding='utf8', newline='').read()
v = json.loads(raw)
BE = 'https://news.belgium.be/fr/la-belgique-interdit-les-e-cigarettes-jetables'
e = v['BE']
e['sections'].insert(0, {"h": "⚖️ What the Belgian government says about disposable e-cigarettes",
    "p": "From the federal government’s news portal, release of 29 July 2024 on the amended royal decree of 28 October 2016 (in French, translated by us), read 26 November 2026.",
    "table": {"head": ["Point", "What the release says"], "rows": [
        ["Disposable e-cigarettes", "Marketing them is banned from 1 January 2025, with or without nicotine; this means prefilled, non-rechargeable products"],
        ["Online sale", "Already banned since 28 December 2016 for e-cigarettes with nicotine, and since 7 May 2023 for those without"],
        ["Enforcement", "Stocks found are withdrawn from the market; breaking the ban is punishable with an administrative fine"]]},
    "list": ["<strong>Not in the release:</strong> a rule on a disposable vape carried by a traveller for their own use. The ban it describes is on putting products on the market."]})
e.setdefault('faq', []).insert(0, ["Are disposable vapes banned in Belgium?", "Their sale is: the federal government says disposable e-cigarettes, with or without nicotine, may not be marketed from 1 January 2025. The release gives no rule for a traveller’s own device."])
e['src'] = [[BE, "News.belgium: Belgium bans disposable e-cigarettes (in French)"]] + (e.get('src') or [])
out = json.dumps(v, ensure_ascii=False, indent=1)
open(p, 'w', encoding='utf8', newline='').write(out + ('\n' if raw.endswith('\n') else ''))

l = json.load(open('ladder_log.json', encoding='utf8'))
def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = '2026-11-26'
    l[k] = x
for c in ['finland', 'denmark', 'netherlands', 'poland', 'slovakia']:
    m = u['plants'][c]['more'][0]
    lg('country/%s/plants-seeds' % c, 'official', 'read 2026-11-26: ' + m['link'][1] + ', ' + m['link'][0])
lg('country/belgium/vaping', 'official', 'read 2026-11-26: news.belgium.be 29 Jul 2024 disposable e-cigarette ban (browser pane), ' + BE)
lg('country/hungary/plants-seeds', 'official', 'tried 2026-11-26: njt.hu Act LIII 1996: curl no response, browser pane navigation failed')
lg('country/luxembourg/plants-seeds', 'official', 'tried 2026-11-26: Legilux ELI links for 8 Jan 2010 returned other regulations; FAOLEX copies were other texts')
lg('country/belgium/cash', 'official', 'tried 2026-11-26: finance.belgium.be cash page: empty page in the browser pane')
t = json.dumps(l, ensure_ascii=False, indent=1)
open('ladder_log.json', 'w', encoding='utf8', newline='').write(t)

raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
for c in ['finland', 'denmark', 'netherlands', 'poland', 'slovakia']:
    ov['/country/%s/plants-seeds/' % c] = '2026-11-26'
ov['/country/belgium/vaping/'] = '2026-11-26'
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + ('\n' if raw.endswith('\n') else ''))
print('ok')
