# Batch 1 (27 November 2026): Ethiopian alcohol, China Southern perfume, Lithuania tobacco, MEA alcohol, EgyptAir perfume
import json

D = '2026-11-27'
CHK = '27 November 2026'
IATA_URL = 'https://www.iata.org/contentassets/6fea26dd84d24b26a7a1fd5788561d6e/dgr-67-en-2.3.a.pdf'

p = 'topics_new.json'
raw = open(p, encoding='utf8', newline='').read()
d = json.loads(raw)

# ---------------- Ethiopian alcohol
ETC = 'https://www.ethiopianairlines.com/us/information/rules-and-regulations/conditions-of-carriage'
ETL = 'https://www.ethiopianairlines.com/us/services/services-at-the-airport/lounges-at-addis-ababa'
ETR = 'https://www.ethiopianairlines.com/uk/information/baggage-information/restricted-items'
q = d['Ethiopian Airlines']['alcohol']
q['answer'] = ("No Ethiopian Airlines page we read gives its own quantity limit for alcohol in your bags. The industry figure is 5 L per person for drinks above 24% and up to 70%, "
               "and Ethiopian's conditions of carriage let it refuse or act against a passenger who appears to be under the influence.")
cust = q['sections'][1]
old = 'which is why the card is marked unofficial.'
assert old in cust['p']
cust['p'] = cust['p'].replace(old, 'which is why we treat it as unofficial.')
q['sections'] = [
    {"h": "🥂 What Ethiopian Airlines says about drink and passengers",
     "p": "From Ethiopian&rsquo;s conditions of carriage, its Addis Ababa lounge page and its restricted items page, read 27 November 2026.",
     "table": {"head": ["Situation", "Ethiopian Airlines wording, in short"], "rows": [
         ["Boarding or in flight", "It may deny boarding or take action during the flight if a passenger appears to be under the influence of alcohol or drugs"],
         ["Addis Ababa lounges, age", "Guests under 21 are not permitted to drink alcohol in any Ethiopian Airlines lounge"],
         ["Addis Ababa lounges, service", "Staff may refuse drinks to a guest who appears intoxicated or behaves unruly"]]},
     "list": ["<strong>Not on those pages:</strong> a litre limit for your baggage, or a rule on drinking a bottle you brought yourself."]},
    {"h": "🍷 Bottle limits when the airline states none",
     "p": "IATA&rsquo;s dangerous goods table (2026), which is industry guidance and not Ethiopian wording: drinks up to 24% alcohol are unrestricted; above 24% and up to 70%, they must be in retail packaging, in receptacles of no more than 5 L, with 5 L per person in total. Security liquid limits still apply to your cabin bag. See <a href=\"/plane/alcohol/\">alcohol on a plane</a>."},
    cust]
q['sources'] = [[ETC, 'Ethiopian Airlines &mdash; Conditions of carriage'], [ETL, 'Ethiopian Airlines &mdash; Lounges at Addis Ababa'], [ETR, 'Ethiopian Airlines &mdash; Restricted items'],
                [IATA_URL, 'Unofficial source: IATA &mdash; Dangerous Goods Regulations, Table 2.3.A (67th edition, 1 January 2026)']]
q['unofficial'] = False
q['checked'] = CHK

# ---------------- China Southern perfume
CZG = 'https://www.csair.com/h5/cn/haiwai/asia/Seoul/1al3mc82p5km4.shtml'
CAAC = 'http://www.caac.gov.cn/INDEX/HLFW/HKLXCS/202303/t20230316_217597.html'
q = d['China Southern']['perfume']
q['answer'] = ("China Southern counts perfume as a liquid: in the cabin each container may be 100 ml at most, and its guide says a 500 ml perfume has to be checked. "
               "On flights inside China only own-use cosmetics may ride in hand luggage, one of each kind. Its FAQ answers a plain NO to boarding with hairspray.")
faq = q['sections'][0]
faq['table']['rows'] = [faq['table']['rows'][0]]
faq['list'] = ["<strong>Not on the pages we read:</strong> a China Southern quantity limit for perfume in checked baggage."]
q['sections'] = [
    {"h": "🧴 What China Southern&rsquo;s liquids guide says about perfume",
     "p": "From China Southern&rsquo;s own Chinese-language baggage guide (Seoul station page), read 27 November 2026, translated by us.",
     "table": {"head": ["Point", "Guide"], "rows": [
         ["Counted as liquids", "Perfume and deodorant; creams, lotions and oils; mascara and lip gloss; toothpaste; shaving foam, hair spray and deodorant spray; hair gel, shower gel and contact lens solution"],
         ["A 500 ml perfume", "Not allowed in the cabin; it can only be checked"],
         ["What the 100 ml measures", "The size of the container, not how much is left in it"],
         ["Bag", "One resealable transparent bag of at most 1 litre per passenger"],
         ["Bought after security", "Liquids bought in the secure waiting area may be taken on board"]]}},
    {"h": "🇨🇳 Flights inside China are stricter",
     "p": "From the Civil Aviation Administration of China page on baggage (published March 2023), read 27 November 2026, translated by us. This is the national rule, not China Southern wording.",
     "table": {"head": ["On a domestic flight", "National rule"], "rows": [
         ["Liquids in hand luggage", "Not allowed, apart from your own cosmetics, toothpaste and shaving cream"],
         ["Cosmetics", "One of each kind, in a container of at most 100 ml, opened for inspection"],
         ["Toothpaste and shaving cream", "One of each, at most 100 g or 100 ml"],
         ["Duty-free from an international leg", "Kept only if you stay in the same airport&rsquo;s secure area, show the receipt, keep the sealed bag intact and pass screening; if you leave the secure area, check it"]]},
     "list": ["<strong>Not named:</strong> the notice does not say perfume by name when it lists the cosmetics exception."]},
    faq,
    {"h": "Checked-bag and per-bottle limits",
     "p": "Industry guidance from IATA&rsquo;s 2026 dangerous goods table, not China Southern wording: perfume, colognes and toiletry aerosols are permitted in cabin and checked bags without airline approval, up to 0.5 kg or 0.5 L for each article and 2 kg or 2 L altogether, with aerosol valves capped."}]
q['sources'] = [[CZG, 'China Southern &mdash; Baggage guide: banned and restricted items, liquids (in Chinese)'], q['sources'][0], [CAAC, 'Civil Aviation Administration of China &mdash; Baggage rules (in Chinese)'], q['sources'][1]]
q['checked'] = CHK

# ---------------- MEA alcohol
MEAR = 'https://www.mea.com.lb/english/traveler-info/baggage-info/restricted-items'
MEAC = 'https://www.mea.com.lb/english/plan-and-book/legal-notices/conditions-of-carriage'
q = d['Middle East Airlines']['alcohol']
q['answer'] = ("Middle East Airlines lists alcoholic drinks of up to 70% alcohol by volume, 5 L in total per person, as allowed in hand and checked baggage, and asks you to check the destination's allowance when booking. "
               "Its page also caps liquid containers in hand baggage at 100 ml. Entering Lebanon, adults may bring 2 L of spirits or 4 L of another drink.")
cust = q['sections'][1]
q['sections'] = [
    {"h": "🍷 What MEA says about alcohol in your bags",
     "p": "From MEA&rsquo;s own &ldquo;Restricted Items&rdquo; page, read 27 November 2026 in a copy archived on 26 September 2024; the live site refuses our reader.",
     "table": {"head": ["Point", "MEA rule"], "rows": [
         ["Strength", "Not more than 70% alcohol by volume"],
         ["Quantity", "5 L in total per person"],
         ["Hand baggage", "Yes, with the remark to check at booking the quantity allowed at your destination"],
         ["Checked baggage", "Yes, with the same remark"],
         ["Liquid containers in hand baggage", "At most 100 ml, in one clear zip bag of up to 1 litre, shown separately at security"]]},
     "list": ["<strong>Packing a bottle from home:</strong> because of the 100 ml line on the same page, a full-size bottle belongs in checked baggage."]},
    {"h": "🧾 Drinking on board MEA",
     "p": "From MEA&rsquo;s conditions of carriage, read 27 November 2026 in a copy archived on 23 September 2024.",
     "table": {"head": ["Case", "What MEA may do"], "rows": [
         ["Impaired by alcohol before flying", "Refuse carriage where your state causes discomfort to others or a hazard or risk"],
         ["Ignoring crew instructions on alcohol", "Take measures including restraint, disembark you, refuse onward carriage; offences on board may be prosecuted"]]}},
    {"h": "How the industry table compares",
     "p": "IATA&rsquo;s 2026 dangerous goods table, industry guidance, leaves drinks up to 24% unrestricted and applies its 5 L per person to those above 24% and up to 70%, in retail packaging. MEA&rsquo;s page words its 5 L for anything up to 70%, so plan on MEA&rsquo;s figure."},
    cust]
q['sources'] = [[MEAR, 'Middle East Airlines &mdash; Restricted items'], [MEAC, 'Middle East Airlines &mdash; Conditions of carriage'], q['sources'][1],
                [IATA_URL, 'Unofficial source: IATA &mdash; Dangerous Goods Regulations, Table 2.3.A (67th edition, 1 January 2026)']]
q['unofficial'] = False
q['checked'] = CHK

# ---------------- EgyptAir perfume
MSC = 'https://www.egyptair.com/en/fly/baggage/Pages/carry-on-baggage.aspx'
q = d['EgyptAir']['perfume']
q['answer'] = ("In EgyptAir hand luggage, perfume goes in containers of 100 ml or less, all in one resealable 1-litre bag shown separately at screening; larger bottles can go in checked baggage. "
               "Its restricted items page also forbids compressed gases such as aerosols, without saying whether toiletry sprays are meant.")
gas = q['sections'][0]
gas['list'] = ["<strong>How the two EgyptAir pages fit:</strong> the restricted items page does not name perfume or toiletry sprays, while the carry-on page names sprays and aerosols among the liquids allowed in small containers. Ask EgyptAir before packing a pressurised spray."]
q['sections'] = [
    {"h": "🧴 What EgyptAir says about perfume in hand luggage",
     "p": "From EgyptAir&rsquo;s &ldquo;Carry-on baggage&rdquo; page, read 27 November 2026 in a copy archived on 30 September 2026; the live page refused our reader.",
     "table": {"head": ["Point", "EgyptAir rule"], "rows": [
         ["Covered", "Perfumes, sprays, creams, mascara, toothpaste, lip gloss and other liquids, aerosols, gels and pastes"],
         ["Container", "Not greater than 100 ml each"],
         ["Bag", "One resealable transparent bag of no more than one litre (about 20 x 20 cm) per passenger, presented separately"],
         ["Bigger bottles", "Can be packed in checked baggage"],
         ["Duty-free perfume", "Allowed from any airport or airline, sealed at purchase with the receipt in a red-bordered security bag; keep it shut until your final destination"],
         ["Connecting with duty-free", "Tell the security officer, so the bag can be resealed if it has to be opened"],
         ["Flying from or within Egypt", "Passengers at Egyptian airports are asked to follow the same rules"]]},
     "list": ["<strong>At the checkpoint:</strong> the page says security may exceptionally open bottles, or not permit a liquid."]},
    gas,
    {"h": "Per-bottle and total limits",
     "p": "From IATA&rsquo;s 2026 dangerous goods table, which EgyptAir&rsquo;s restricted items page cites as a basis but which these figures come from directly: toiletry and medicinal articles, perfume included, may total 2 kg or 2 L per person, with no single article above 0.5 kg or 0.5 L and aerosol release valves protected."}]
q['sources'] = [[MSC, 'EgyptAir &mdash; Carry-on baggage'], q['sources'][0], q['sources'][1]]
q['checked'] = CHK
open(p, 'w', encoding='utf8', newline='').write(json.dumps(d, ensure_ascii=False, indent=1) + ('\n' if raw.endswith('\n') else ''))

# ---------------- Lithuania tobacco
LRT = 'https://www.lrt.lt/en/news-in-english/19/2587120/lithuanian-parliament-rejects-proposal-to-raise-tobacco-purchase-age-to-21'
LAW = 'https://assets.tobaccocontrollaws.org/uploads/legislation/Lithuania/Lithuania-TC-Law.pdf'
p = 'country_unique.json'
raw = open(p, encoding='utf8', newline='').read()
u = json.loads(raw)
e = u['tobacco']['lithuania']
assert 'more' not in e
e['more'] = [
    {"h": "Buying age for tobacco in Lithuania",
     "p": ["Public broadcaster LRT reported on 11 June 2025 that Lithuanian law allows tobacco to be bought from the age of 18, and that parliament had just rejected a bill to raise that age to 21: 26 members voted for it, 30 against and 30 abstained."],
     "src": "Unofficial source read 27 November 2026: LRT.lt, news in English, 11 June 2025.",
     "unofficial": True, "link": [LRT, "LRT: parliament rejects raising the tobacco age to 21"]},
    {"h": "Where you may not smoke or vape in Lithuania",
     "p": ["The tobacco control law bans smoking and e-cigarettes at health care sites and children's education and care sites, in indoor workplaces apart from designated smoking areas, in shared parts of buildings where non-smokers may be forced to breathe the smoke, in public transport (trains and aircraft have their own wording), in restaurants, cafés, bars, clubs, casinos and other venues serving the public (cigar and pipe clubs excepted), and in a vehicle carrying anyone under 18 or a pregnant person.",
           "Municipal councils may also ban smoking in parks, squares and other public places. Under-18s may not smoke or possess tobacco products, and shops may not sell single cigarettes or packs of fewer than 20."],
     "src": "Unofficial source read 27 November 2026: an English copy of Law No I-1143 as amended to 18 October 2018, on the Tobacco Control Laws website. Later amendments were not checked; the official legal database refused our reader.",
     "unofficial": True, "link": [LAW, "Tobacco Control Laws: Lithuania's tobacco control law (English copy, PDF)"]}]
open(p, 'w', encoding='utf8', newline='').write(json.dumps(u, ensure_ascii=False, separators=(',', ':')) + ('\n' if raw.endswith('\n') else ''))

# ---------------- logs and dates
l = json.load(open('ladder_log.json', encoding='utf8'))


def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = D
    l[k] = x


k = 'airline/ethiopian-airlines/alcohol'
lg(k, 'official', 'read 2026-11-27: conditions of carriage, Addis Ababa lounges and restricted items pages, ' + ' '.join([ETC, ETL, ETR]))
k = 'airline/china-southern/perfume-aerosols'
lg(k, 'official', 'read 2026-11-27: China Southern baggage guide (Chinese), ' + CZG)
lg(k, 'official', 'read 2026-11-27: CAAC baggage page (Chinese), ' + CAAC)
lg(k, 'official', 'tried 2026-11-27: csair.com/tw liquids page HTTP 404')
k = 'airline/middle-east-airlines/alcohol'
lg(k, 'official', 'read 2026-11-27: MEA restricted items (Wayback 20240926161951) and conditions of carriage (Wayback 20240923120820), ' + MEAR + ' ' + MEAC)
k = 'airline/egyptair/perfume-aerosols'
lg(k, 'official', 'read 2026-11-27: EgyptAir carry-on baggage page (Wayback 20260930154024; live page Cloudflare 403 in curl and pane), ' + MSC)
k = 'country/lithuania/tobacco'
lg(k, 'official', 'tried 2026-11-27: e-seimas consolidated law, browser pane blocked by Cloudflare (403)')
lg(k, 'reliable', 'read 2026-11-27: LRT.lt 2025-06-11, ' + LRT)
lg(k, 'reliable', 'read 2026-11-27: English copy of Law I-1143 (to 18 October 2018), ' + LAW)
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1))

raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
for u_ in ['/airline/ethiopian-airlines/alcohol/', '/airline/china-southern/perfume-aerosols/', '/airline/middle-east-airlines/alcohol/', '/airline/egyptair/perfume-aerosols/', '/country/lithuania/tobacco/']:
    ov[u_] = D
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + ('\n' if raw.endswith('\n') else ''))
print('ok')
