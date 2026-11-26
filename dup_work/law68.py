# Official sources read 26 November 2026: Danish e-cigarette Act, FOCA batteries, India Aircraft Rules, Norwegian Customs quotas
import json

def load(p):
    raw = open(p, encoding='utf8', newline='').read()
    return raw, json.loads(raw)

# --- Denmark vaping (vape_extra)
p = 'vape_extra.json'
raw, v = load(p)
DK = 'https://www.retsinformation.dk/eli/lta/2024/1166/pdf'
d = v['DK']
d['sections'].insert(0, {"h": "⚖️ What Denmark's e-cigarette law says about bringing vapes in",
    "p": "From the Danish Act on electronic cigarettes, consolidated notice no. 1166 of 4 November 2024 on retsinformation.dk, read in Danish on 26 November 2026 and translated by us.",
    "table": {"head": ["Point", "What the law says"], "rows": [
        ["Banned products (section 18 b)", "It is not allowed to bring in, buy, receive or possess nicotine e-cigarettes and refill containers that fall under the flavour ban, or whose liquid is over the nicotine limit"],
        ["Traveller exception", "Up to ten units in travel luggage for your own use are exempt, as is possessing up to ten units for your own use"],
        ["Flavour ban (section 25 a)", "Products with a characterising flavour may not be marketed in Denmark; menthol and tobacco flavour are the exceptions"],
        ["Where you may not vape (section 3)", "Schools and institutions for children, day care, public transport (including passenger aircraft operating under a Danish permit) and taxis"],
        ["Age (section 15)", "No sale to anyone under 18; shops ask for photo ID if in doubt"],
        ["Penalty (section 33)", "Breaking section 18 b, the use ban or the age rule is punished with a fine, unless a higher penalty applies under another law"]]},
    "list": ["<strong>Not checked:</strong> amendments made after November 2024. The nicotine limit itself is set in separate rules we did not read."]})
d.setdefault('faq', []).insert(0, ["Can I bring flavoured nicotine vapes into Denmark?", "Section 18 b of the Danish e-cigarette Act bans bringing in nicotine products with flavours other than menthol or tobacco, but exempts up to ten units in your travel luggage for your own use."])
d['src'] = [[DK, "Retsinformation: Danish Act on electronic cigarettes, notice no. 1166 of 2024 (in Danish)"]] + (d.get('src') or [])
out = json.dumps(v, ensure_ascii=False, indent=1)
open(p, 'w', encoding='utf8', newline='').write(out + ('\n' if raw.endswith('\n') else ''))

# --- airline pages (topics_new)
p = 'topics_new.json'
raw, t = load(p)

def add(a, k, sec, faq, src):
    e = t[a][k]
    e['sections'].append(sec)
    e.setdefault('faq', []).append(faq)
    e.setdefault('sources', []).append(src)

BZ = 'https://www.bazl.admin.ch/en/batteries'
add('Swiss', 'power',
    {"h": "🛫 What the Swiss aviation office says about spare batteries",
     "p": "From the Federal Office of Civil Aviation (FOCA/BAZL) page \"Batteries\" (bazl.admin.ch, read 26 November 2026). It is the national regulator's guidance, not Swiss International Air Lines wording.",
     "table": {"head": ["Point", "FOCA says"], "rows": [
         ["Damaged or faulty batteries", "Must not be carried at all"],
         ["Devices with a built-in battery up to 100 Wh", "May generally be carried; secure them against switching on by accident"],
         ["Loose spare batteries up to 100 Wh", "An appropriate number may be carried, each protected against short circuit by covering the contacts or using the original packaging"],
         ["Over 160 Wh", "Not allowed in passenger baggage"],
         ["Converting mAh to Wh", "Milliampere hours multiplied by volts, divided by 1,000"]]},
     "list": ["<strong>Example:</strong> a 20,000 mAh pack rated at 3.7 V works out to 74 Wh by that formula."]},
    ["How do I work out the watt hours of my power bank?", "FOCA's formula is milliampere hours multiplied by volts, divided by 1,000. A 20,000 mAh pack at 3.7 V is 74 Wh."],
    [BZ, "Swiss Federal Office of Civil Aviation &mdash; Batteries"])

IN = 'https://civilaviation.gov.in/sites/default/files/migration/moca_000947.pdf'
add('IndiGo', 'alcohol',
    {"h": "✈️ What India's Aircraft Rules say about drinking on board",
     "p": "From the Aircraft Rules, 1937, in the scanned copy on the Ministry of Civil Aviation website (marked updated February 2011), read 26 November 2026. This is Indian law, not IndiGo wording.",
     "table": {"head": ["Point", "What the Rules say"], "rows": [
         ["Domestic flights", "No domestic operator may serve an alcoholic drink on board, and no passenger on such a service may drink one on board"],
         ["Your own bottle", "The ban is on drinking on board, so it covers a bottle you brought yourself"],
         ["Intoxication", "No person in a state of intoxication may enter or be in an aircraft"],
         ["Crew", "Crew may not have taken an alcoholic drink within twelve hours before a flight"]]},
     "list": ["<strong>Check:</strong> replacement aircraft rules are reported to apply from 1 January 2027; we did not read them."]},
    ["Can I drink my own alcohol on a domestic IndiGo flight?", "No. The Aircraft Rules, 1937, say no passenger on a domestic air service in India may drink an alcoholic drink on board."],
    [IN, "Ministry of Civil Aviation: Aircraft Rules, 1937 (scanned copy)"])

NQ = 'https://www.toll.no/en/goods/alcohol-and-tobacco/quotas/'
add('Norwegian', 'vape',
    {"h": "🛃 What Norwegian Customs says when you land in Norway with a vape",
     "p": "From the Norwegian Customs (Tolletaten) page \"Alcohol and tobacco quotas\" (toll.no, marked updated 29 June 2026, read 26 November 2026). It applies at the border, whichever airline you fly.",
     "table": {"head": ["Product", "At the border"], "rows": [
         ["Nicotine e-cigarettes and e-liquid, tobacco or other flavour", "Not allowed without a medical certificate documenting that you use them to stop smoking"],
         ["Nicotine-free e-cigarettes with added flavours", "Not allowed"],
         ["Heated tobacco and waterpipe tobacco", "Not allowed"]]},
     "list": ["<strong>So:</strong> a vape that is fine in your cabin bag on the flight can still be refused when you land in Norway."]},
    ["Can I take my nicotine vape through customs in Norway?", "Norwegian Customs says nicotine e-cigarettes and e-liquid are not allowed without a medical certificate documenting smoking cessation."],
    [NQ, "Norwegian Customs: Alcohol and tobacco quotas"])
out = json.dumps(t, ensure_ascii=False, indent=1)
open(p, 'w', encoding='utf8', newline='').write(out + ('\n' if raw.endswith('\n') else ''))

l = json.load(open('ladder_log.json', encoding='utf8'))
def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = '2026-11-26'
    l[k] = x
lg('country/denmark/vaping', 'official', 'read 2026-11-26: Act on electronic cigarettes LBK 1166/2024 sections 3, 15, 18 b, 25 a, 33, ' + DK)
lg('airline/swiss/power-bank', 'official', 'read 2026-11-26: FOCA Batteries page, ' + BZ)
lg('airline/indigo/alcohol', 'official', 'read 2026-11-26: Aircraft Rules 1937 rule 24, ' + IN)
lg('airline/norwegian/vape-e-cigarette', 'official', 'read 2026-11-26: Norwegian Customs quotas page, ' + NQ)
lg('airline/ita-airways/power-bank', 'official', 'tried 2026-11-26: ENAC lithium battery pages: poster links only, no rule text')
lg('country/belgium/vaping', 'official', 'tried 2026-11-26: ejustice royal decree 2016 URL returned an error page')
lg('country/lithuania/tobacco', 'official', 'tried 2026-11-26: e-seimas consolidated tobacco control law PDF HTTP 403')
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1).replace('\n', '\r\n'))
print('ok')
