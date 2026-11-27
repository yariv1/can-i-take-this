# Batch 2 (27 November 2026): Oman and Dominican Republic vaping, Luxembourg and Hungary plants, Greece tobacco
import json

D = '2026-11-27'


def load(p):
    raw = open(p, encoding='utf8', newline='').read()
    return raw, json.loads(raw)


def tail(raw):
    return '\n' if raw.endswith('\n') else ''


# ---------------- vaping
Q756 = 'https://qanoon.om/p/2023/cpa20230756/'
OMC = 'https://www.customs.gov.om/ar/traveller-services/'
R66 = 'https://assets.tobaccocontrollaws.org/uploads/legislation/Dominican%20Republic/Dominican-Republic-Res.-No.-66-2021-native.pdf'

raw, v = load('vape_extra.json')
om = v['OM']
rows = om['sections'][0]['table']['rows']
assert rows[1][0] == 'Trade'
rows[1][1] = 'Decree No. 698/2015 (Arts. 1, 2) banned their trade; it has since been repealed and replaced by Decision 756/2023, above'
om['sections'].insert(0, {
    "h": "⚖️ The e-cigarette decision now in force in Oman",
    "p": "Unofficial source: Consumer Protection Authority Decision 756/2023, signed 31 December 2023 and shown as published in Official Gazette 1527 of 7 January 2024, read 27 November 2026 on Qanoon.om, a private legal database that says it is not an official source (in Arabic, translated by us).",
    "table": {"head": ["Point", "Decision 756/2023"], "rows": [
        ["Banned", "Circulating (dealing in) e-cigarettes, e-shisha and their accessories"],
        ["Administrative fine", "Up to 1,000 Omani rials, doubled for a repeat breach"],
        ["Breach that continues", "50 rials for each day, 2,000 rials at most in total"],
        ["Seized goods", "Destroyed"],
        ["Older decision", "698/2015 is repealed"]]},
    "list": ["<strong>For a traveller:</strong> the decision is worded around circulation and does not mention a device in your own luggage. The Omani customs traveller page, read 27 November 2026, gives a 400-cigarette exemption and the text we read does not name e-cigarettes."]})
for f in om['faq']:
    if '698/2015' in f[1]:
        f[1] = "A legal database citing Ministerial Decree 327/2015 says importing e-cigarettes and e-shisha is banned, and Decision 756/2023 now bans dealing in them. Neither text we read states an exception for a traveller's own device, so ask Omani customs before you fly."
om['src'] = [[Q756, "Unofficial source: Qanoon.om, Decision 756/2023 banning e-cigarette circulation (Arabic)"], [OMC, "Royal Oman Police, customs: traveller services (Arabic)"]] + om['src']

do = v['DO']
do['sections'].insert(0, {
    "h": "🚭 Where vaping is banned in Dominican health sites",
    "p": "Unofficial source: Resolution 000066 of the Ministry of Public Health, signed 16 December 2021, read 27 November 2026 in a copy on the Tobacco Control Laws website (in Spanish, translated by us).",
    "table": {"head": ["Point", "Resolution 000066"], "rows": [
        ["Places", "All public and private health establishments, among them hospitals, clinics, laboratories, radiology centres, medical and dental offices and health ministry offices"],
        ["Outdoors", "The whole perimeter is included, with corridors, car parks and other outside areas"],
        ["Products", "Cigarettes, cigars, e-cigarettes or vaporisers and heated-tobacco devices"],
        ["Wider laws it cites", "Law 48-00, which bans smoking in enclosed spaces, and Law 16-19, which bans hookah in public and private places"]]},
    "list": ["<strong>Not in the resolution:</strong> any rule on bringing a vape or liquid into the country."]})
do['src'] = [[R66, "Unofficial source: Tobacco Control Laws, copy of Resolution 000066 (PDF, Spanish)"]] + do['src']
open('vape_extra.json', 'w', encoding='utf8', newline='').write(json.dumps(v, ensure_ascii=False, indent=1) + tail(raw))

# ---------------- plants and tobacco
LUX = 'https://environnement.public.lu/dam-assets/documents/natur/biodiversite/Loi-du-18-juillet-2018-concernant-la-protection-de-la-nature-et-des-ressources-naturelles.pdf'
HU = 'https://net.jogtar.hu/jogszabaly?docid=99600053.tv'
MB = 'https://www.moh.gov.gr/articles/health/domes-kai-draseis-gia-thn-ygeia/antimetwpish-eksarthsewn/loipes-eksarthseis/prostasia-twn-anhlikwn-apo-ton-kapno/'
GR1 = MB + '14245-xwroi-poy-apagoreyetai-to-kapnisma-kai-h-xrhsh-synafwn-proiontwn'
GR2 = MB + '14242-apagoreyseis-sthn-pwlhsh-kapnikwn-kai-synafwn-proiontwn'

raw, u = load('country_unique.json')


def more(cat, c, items):
    e = u[cat][c]
    assert 'more' not in e
    e['more'] = items


more('plants', 'luxembourg', [{
    "h": "Picking wild plants in Luxembourg",
    "p": ["Article 18 of the nature protection law forbids unjustified use, damage or destruction of wild plants. Picking for your own needs or for teaching is allowed, except for species that have protected status.",
          "Fully protected species may not be picked, cut, gathered, uprooted or damaged, and keeping, transporting, trading or offering specimens taken from the wild is banned, fresh or dried.",
          "For partially protected species, the parts above ground may be picked, kept and carried in small quantity for personal, non-commercial use. The parts below ground may not be removed, and selling or buying the parts above ground is banned. Taking more than a small quantity of them can bring a fine of 24 to 1,000 euros."],
    "src": "Official source read 27 November 2026: Law of 18 July 2018 on the protection of nature and natural resources (Mémorial A 771), articles 18, 20 and 75, on environnement.public.lu (in French, translated by us). Later amendments were not checked.",
    "link": [LUX, "environnement.public.lu: nature protection law of 18 July 2018 (PDF, in French)"]}])
more('plants', 'hungary', [{
    "h": "Protected wild plants in Hungary",
    "p": ["Section 42 of the nature conservation act forbids endangering protected plants, destroying or damaging them without a permit, and harming their habitats. A permit from the nature conservation authority is needed to collect a protected plant, its flower, fruit or propagating parts, and to keep, sell, swap or plant it.",
          "A permit is also needed to take a protected plant out of Hungary, bring one in or carry it through. For strictly protected species it can be granted only for nature conservation or another public interest. In protected natural areas, collecting needs the authority's permit under section 38."],
    "src": "Unofficial source read 27 November 2026: Act LIII of 1996 on nature conservation, text in force from 1 October 2026, on Net Jogtár, a publisher's free legal database (in Hungarian, translated by us). The government's own database did not respond to our reader.",
    "unofficial": True,
    "link": [HU, "Unofficial database Net Jogtár: Act LIII of 1996 (in Hungarian)"]}])
more('tobacco', 'greece', [{
    "h": "Where you may not smoke or vape in Greece",
    "p": ["Greece's Ministry of Health lists the places where Law 3730/2008 bans smoking and related products, e-cigarettes included: indoor workplaces; food and drink venues (their outdoor areas are exempt where open on at least two sides); waiting areas of every kind; airports outside designated smoking areas; transport stations and passenger port terminals; canteens; public transport and taxis; and any car carrying a child under 12.",
          "Internet and gaming venues and places where minors play sport or gather are on the list too. Law 5216/2025 puts similar bans on electrically heated products without tobacco."],
    "src": "Official source read 27 November 2026: Greek Ministry of Health, places where smoking and related products are banned (page dated 14 May 2026, in Greek, translated by us).",
    "link": [GR1, "Greek Ministry of Health: where smoking is banned (in Greek)"]},
    {"h": "Buying tobacco and e-cigarettes in Greece",
     "p": ["The ministry says selling or giving tobacco products, e-cigarettes, refills or herbal smoking products to minors is banned, and sellers must check proof of age. Vending-machine sales of tobacco are banned, as are sales at health and education sites."],
     "src": "Official source read 27 November 2026: Greek Ministry of Health, bans on the sale of tobacco and related products (page dated 14 May 2026, in Greek, translated by us).",
     "link": [GR2, "Greek Ministry of Health: sales bans (in Greek)"]}])
open('country_unique.json', 'w', encoding='utf8', newline='').write(json.dumps(u, ensure_ascii=False, separators=(',', ':')) + tail(raw))

# ---------------- logs and dates
l = json.load(open('ladder_log.json', encoding='utf8'))


def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = D
    l[k] = x


lg('country/oman/vaping', 'official', 'read 2026-11-27: Royal Oman Police customs traveller services page, ' + OMC)
lg('country/oman/vaping', 'reliable', 'read 2026-11-27: Qanoon.om copy of Consumer Protection Authority Decision 756/2023, ' + Q756)
lg('country/dominican-republic/vaping', 'official', 'tried 2026-11-27: Poder Judicial PDF of Law 16-19 HTTP 403, no Wayback copy')
lg('country/dominican-republic/vaping', 'reliable', 'read 2026-11-27: Tobacco Control Laws copy of Resolution 000066 of 2021, ' + R66)
lg('country/luxembourg/plants-seeds', 'official', 'read 2026-11-27: Law of 18 July 2018, articles 18, 20, 75, ' + LUX)
lg('country/hungary/plants-seeds', 'reliable', 'read 2026-11-27: Act LIII of 1996 on net.jogtar.hu (in force 1 October 2026), ' + HU)
lg('country/greece/tobacco', 'official', 'read 2026-11-27: Ministry of Health smoking ban places and sales bans, ' + GR1 + ' ' + GR2)
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))

raw, ov = load('lastmod_overrides.json')
for u_ in ['/country/oman/vaping/', '/country/dominican-republic/vaping/', '/country/luxembourg/plants-seeds/', '/country/hungary/plants-seeds/', '/country/greece/tobacco/']:
    ov[u_] = D
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + tail(raw))
print('ok')
