# Smoking rules read 26 November 2026: Slovakia, Bulgaria (law texts), Belgium (VRT)
import json

p = 'country_unique.json'
raw = open(p, encoding='utf8', newline='').read()
u = json.loads(raw)
t = u['tobacco']

SK = 'https://static.slov-lex.sk/static/SK/ZZ/2004/377/20230101.html'
e = t['slovakia']
e['h'] = 'Tobacco in Slovakia: the luggage limits and where smoking is banned'
e['p'] += [
    "Slovakia's non-smokers protection law, Act 377/2004, section 7, bans smoking at public airports, on public passenger transport, in stations and stop shelters, on covered platforms and within four metres of open platforms. It also bans it in health facilities, schools, playgrounds, cultural and sports venues and shops, with room exceptions in some other places. Under-18s may not smoke or use e-cigarettes.",
    "Section 6 bans selling tobacco, e-cigarettes and nicotine pouches to anyone under 18 or from vending machines, and allows distance sales only with an age check."]
e['src'] += " Law read 26 November 2026: Act 377/2004, sections 6 and 7, consolidated text in force from 1 January 2023 on the Justice Ministry's Slov-Lex site (static.slov-lex.sk, in Slovak, translated by us)."

BG = 'https://assets.tobaccocontrollaws.org/uploads/legislation/Bulgaria/Bulgaria-Health-Act.pdf'
e = t['bulgaria']
e['h'] = 'Tobacco in Bulgaria: the customs allowance and the smoking ban'
e['p'] += [
    "Bulgaria's Health Act, article 56, bans smoking in indoor public places, which include places to stay, eat and be entertained. The exception for airports is a separate, sealed smoking room that under-18s may not enter. Article 56a also bans smoking outdoors beside nurseries and schools, on playgrounds, at children's events and at sports grounds and open-air cinemas and theatres during events.",
    "The Act's fine for breaking these bans is 300 to 500 levs, and 500 to 1,000 levs for a repeat. Those are the amounts in the translation we read, which predates Bulgaria's move to the euro."]
e['src'] += " Law read 26 November 2026: Health Act, articles 56 and 56a and the penalty article, in an English translation (amended to May 2020) hosted by Tobacco Control Laws, an unofficial copy."

VRT = 'https://www.vrt.be/vrtnws/en/2026/10/26/smoking-ban-on-outdoor-terraces-delayed-council-of-state-raises.consumer/'
e = t['belgium']
e['h'] = 'Tobacco in Belgium: the airport customs page and the delayed terrace ban'
e['p'] += [
    "Belgium's public broadcaster VRT reported on 26 October 2026 that the planned ban on smoking and vaping on and around cafe and restaurant terraces, due on 1 January 2027, is postponed after objections from the Council of State. The health minister's office said no new date was clear.",
    "VRT says the same package, announced in September 2025, would also end public smoking rooms, including those at airports. Treat it as planned, not yet in force."]
e['src'] += " Second unofficial source, read 26 November 2026: VRT NWS, \"Smoking ban on outdoor terraces delayed\"."
out = json.dumps(u, ensure_ascii=False, separators=(',', ':'))
open(p, 'w', encoding='utf8', newline='').write(out + ('\n' if raw.endswith('\n') else ''))

l = json.load(open('ladder_log.json', encoding='utf8'))
def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = '2026-11-26'
    l[k] = x
lg('country/slovakia/tobacco', 'official', 'read 2026-11-26: Act 377/2004 sections 6-7, ' + SK)
lg('country/bulgaria/tobacco', 'reliable', 'read 2026-11-26: Health Act English translation arts 56, 56a, ' + BG)
lg('country/belgium/tobacco', 'reliable', 'read 2026-11-26: VRT NWS 2026-10-26 terrace ban delayed, ' + VRT)
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1).replace('\n', '\r\n'))

raw = open('lastmod_overrides.json', encoding='utf8', newline='').read()
ov = json.loads(raw)
for c in ['slovakia', 'bulgaria', 'belgium']:
    ov['/country/' + c + '/tobacco/'] = '2026-11-26'
out = json.dumps(ov, indent=1)
open('lastmod_overrides.json', 'w', encoding='utf8', newline='').write(out.replace('\n', '\r\n') if '\r\n' in raw else out + ('\n' if raw.endswith('\n') else ''))
print('ok')
