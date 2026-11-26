# Law texts read 26 November 2026: Costa Rica (RECAUCA), Georgia, Romania, Nigeria
import json

def load(p):
    raw = open(p, encoding='utf8', newline='').read()
    return raw, json.loads(raw)

# --- country_unique: Costa Rica tobacco + alcohol, Nigeria tobacco
p = 'country_unique.json'
raw, u = load(p)
CR = 'https://faolex.fao.org/docs/pdf/sica205787.pdf'
CRL = 'RECAUCA: Central American Customs Code Regulation, Resolution 224-2008 (FAOLEX, in Spanish)'
u['tobacco']['costa-rica'] = {
    "h": "What the Central American customs regulation says about tobacco in Costa Rica",
    "p": ["Costa Rica applies the regional customs regulation (RECAUCA). Article 578 counts as traveller baggage up to 500 grams of manufactured tobacco, in any form, for each adult traveller, provided it is not for trade.",
          "Article 579 says every arriving traveller makes a declaration on the customs service's form, with one form for a family group. Costa Rica may since have simplified this, so follow what you are asked at the airport.",
          "Article 581 gives the baggage exemption to unaccompanied baggage too, if it arrives within the three months before or after you do and comes from your country of residence or a country you visited.",
          "The Travel Doc customs page, an unofficial source, gives the same 500 gram figure."],
    "src": "Official source read 26 November 2026: RECAUCA (Resolution 224-2008 of the regional council of ministers), articles 578, 579 and 581, in Spanish on FAO's FAOLEX database. Later amendments were not checked. Unofficial source read 16 November 2026: Travel Doc customs information page for Costa Rica.",
    "link": [CR, CRL]}
u['tobacco']  # keep order
u['alcohol']['costa-rica'] = {
    "h": "What the Central American customs regulation says about alcohol in Costa Rica",
    "p": ["Article 578 of the regional customs regulation (RECAUCA), which Costa Rica applies, counts as traveller baggage up to five litres of wine, spirits or liquor for each adult traveller, provided it is not for trade.",
          "Article 583 says baggage is checked on a risk basis. A check is compulsory for unaccompanied baggage, when no declaration was filed, or on a well-founded suspicion, and goods found undeclared in that check are seized.",
          "Article 582 covers a separate exemption for goods that are not baggage: they must not be for trade or prohibited, and you must have been outside the customs territory for at least 72 hours.",
          "The Travel Doc customs page, an unofficial source, gives the same five litres and sets the age at 18."],
    "src": "Official source read 26 November 2026: RECAUCA (Resolution 224-2008 of the regional council of ministers), articles 578, 582 and 583, in Spanish on FAO's FAOLEX database. Later amendments were not checked. Unofficial source read 16 November 2026: Travel Doc customs information page for Costa Rica.",
    "link": [CR, CRL]}
old = u['tobacco']['nigeria']
u['tobacco']['nigeria'] = {
    "h": "What Nigeria's National Tobacco Control Act 2015 says",
    "p": ["Section 9 bans smoking on public transport, including aircraft, ships, railway coaches, tricycles and other vehicles (except a vehicle used only by the smoker), and in listed indoor public places. Section 11 sets a fine of at least ₦50,000 or six months in prison for smoking where it is banned.",
          "Section 15 bans selling tobacco to anyone under 18, and sales by mail or over the internet. Smoked tobacco may be sold only in intact packs of at least 20 sticks, and smokeless tobacco in packs of at least 30 grams.",
          "These are rules on use and sale, not a customs allowance. For the allowance, the Travel Doc customs page lists 200 grams of all tobacco products as free to import, with no age limit."],
    "src": "Law text read 26 November 2026: National Tobacco Control Act 2015, sections 9, 11 and 15, in a printout from a private legal website (lawyersonline.ng) hosted on FAO's FAOLEX database. Unofficial source read 16 November 2026: Travel Doc customs information page for Nigeria (undated; it names no publisher). The official customs site could not be read.",
    "link": ["https://faolex.fao.org/docs/pdf/nig192387.pdf", "National Tobacco Control Act 2015, Nigeria (copy on FAOLEX)"]}
out = json.dumps(u, ensure_ascii=False, separators=(',', ':'))
open(p, 'w', encoding='utf8', newline='').write(out + ('\n' if raw.endswith('\n') else ''))

# --- vape_extra: Georgia (official), Romania (law copy)
p = 'vape_extra.json'
raw, v = load(p)
g = v['GE']
GU = 'https://matsne.gov.ge/en/document/view/1160150'
g['sections'].insert(0, {"h": "⚖️ What Georgia's Law on Tobacco Control says about e-cigarettes",
    "p": "From the Law of Georgia on Tobacco Control, consolidated English text on the Legislative Herald (matsne.gov.ge), with amendments listed up to 18 March 2025, read 26 November 2026.",
    "table": {"head": ["Point", "What the law says"], "rows": [
        ["What counts", "An electronic cigarette includes single-use and refillable devices and their cartridges and tanks"],
        ["Nicotine cartridges", "Nicotine-containing material, cartridges and capsules are counted as tobacco products; the device is a tobacco accessory"],
        ["Age", "No sale to anyone under 18"],
        ["Where it may not be sold", "Schools, medical, sports and cultural institutions, public institutions and vending machines, among others"],
        ["Online and post", "Retail sale on the internet or by mail is banned, with an exception for accessories and devices that show no tobacco industry brand or trade name"],
        ["Smoking indoors", "Article 10 bans tobacco smoking inside buildings and on public transport, with listed exceptions"],
        ["Brought in by travellers", "Article 9 says the law's standards (except Article 10) do not apply to amounts allowed by the Customs Code, brought by air in one calendar day, or otherwise once in 30 days"]]},
    "list": ["<strong>Not in this law:</strong> a number of devices or millilitres a traveller may bring; that is set by customs law."]})
g.setdefault('faq', []).insert(0, ["Can I order e-cigarette liquid online in Georgia?", "Georgia's tobacco control law counts nicotine cartridges and liquids as tobacco products and bans retail sale of tobacco products on the internet or by mail."])
g['src'] = [[GU, "Legislative Herald of Georgia: Law on Tobacco Control (consolidated, English)"]] + (g.get('src') or [])
r = v['RO']
RU = 'https://legeaz.net/monitorul-oficial-906-2016/legea-201-2016-conditii-fabricare-prezentare-vanzare-tutun-tigari'
r['sections'].insert(1, {"h": "🧪 What Law 201/2016 requires of vape products sold in Romania",
    "p": "Unofficial copy: the text of Law 201/2016 as published in the Official Gazette, on the private legal site legeaz.net, read in Romanian on 26 November 2026. These are rules for products put on the market, not a baggage allowance.",
    "table": {"head": ["Item", "Rule for products on sale"], "rows": [
        ["Nicotine refill bottle", "At most 10 ml"],
        ["Cartridge or tank", "At most 2 ml"],
        ["Nicotine strength", "At most 20 mg per ml"],
        ["Leaflet in the pack", "Instructions, storage, that use is not recommended for young people and non-smokers, contraindications, adverse effects, addiction and toxicity, maker contact"],
        ["Health warning", "States that the product contains nicotine, which is highly addictive"],
        ["Advertising", "Banned in online services, the press and print (trade publications excepted), on radio, in cinemas and on billboards"]]},
    "list": ["<strong>Not confirmed:</strong> whether this copy includes later amendments. The official legislation portal did not respond."]})
r.setdefault('faq', []).append(["What nicotine strength may vape liquid have in Romania?", "Law 201/2016, read in an unofficial copy, limits products on sale to 20 mg of nicotine per ml, refill bottles to 10 ml and cartridges or tanks to 2 ml."])
r['src'] = (r.get('src') or []) + [[RU, "Unofficial copy: Law 201/2016 on legeaz.net (in Romanian)"]]
out = json.dumps(v, ensure_ascii=False, indent=1)
open(p, 'w', encoding='utf8', newline='').write(out + ('\n' if raw.endswith('\n') else ''))

l = json.load(open('ladder_log.json', encoding='utf8'))
def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = '2026-11-26'
    l[k] = x
lg('country/costa-rica/tobacco', 'official', 'read 2026-11-26: RECAUCA Resolution 224-2008 arts 578, 579, 581, ' + CR)
lg('country/costa-rica/alcohol', 'official', 'read 2026-11-26: RECAUCA Resolution 224-2008 arts 578, 582, 583, ' + CR)
lg('country/nigeria/tobacco', 'official', 'read 2026-11-26: National Tobacco Control Act 2015 ss 9, 11, 15 (lawyersonline.ng printout on FAOLEX), https://faolex.fao.org/docs/pdf/nig192387.pdf')
lg('country/georgia/vaping', 'official', 'read 2026-11-26: Law on Tobacco Control consolidated English, ' + GU)
lg('country/romania/vaping', 'official', 'tried 2026-11-26: legislatie.just.ro: no response to curl')
lg('country/romania/vaping', 'reliable', 'read 2026-11-26: Law 201/2016 copy on legeaz.net, ' + RU)
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1).replace('\n', '\r\n'))
print('ok')
