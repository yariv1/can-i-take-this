# Source-ladder gaps found 26 November 2026: Bulgaria (official ministry text), Belgium (federal news portal), Nigeria (label the copy as unofficial)
import json

p = 'country_unique.json'
raw = open(p, encoding='utf8', newline='').read()
u = json.loads(raw)
t = u['tobacco']

BG = 'https://www.mh.government.bg/bg/normativni-aktove/zakoni/zakon-za-zdraveto/'
e = t['bulgaria']
assert e['p'][-1].startswith("The Act's fine")
e['p'][-1] = "Article 218 sets a fine of 300 to 500 levs for smoking where articles 56 or 56a(1) ban it, and 500 to 1,000 levs for a repeat. The Health Ministry's text still states the amounts in levs, although Bulgaria has since adopted the euro."
a = e['src'].index(' Law read 26 November 2026')
e['src'] = e['src'][:a] + " Official source read 26 November 2026: Health Act, articles 56, 56a and 218, consolidated Bulgarian text on the Ministry of Health site (mh.government.bg, amendments listed up to State Gazette 13 of 2026), translated by us."

e = t['belgium']
assert e['p'][-1].startswith('VRT says') and e['p'][-2].startswith("Belgium's public broadcaster")
e['p'][-2:] = [
    "The federal government's news portal reported on 15 September 2025 that the Council of Ministers had approved a draft changing the smoking law of 22 December 2009: no more smoking rooms in places open to the public and no smoking on terraces, from 1 January 2027. The draft then went to the Council of State.",
    "Belgium's public broadcaster VRT, an unofficial source, reported on 26 October 2026 that the terrace ban is postponed after objections from the Council of State, with no new date clear, and that the smoking rooms concerned include those at airports. Treat the changes as planned, not yet in force."]
a = e['src'].index(' Second unofficial source')
e['src'] = e['src'][:a] + " Official source read 26 November 2026: news.belgium.be, \"Interdiction de fumer dans certains lieux\" (15 September 2025, in French, translated by us). Second unofficial source, read the same day: VRT NWS, \"Smoking ban on outdoor terraces delayed\"."

e = t['nigeria']
assert e['p'][0].startswith('Section 9') and e['src'].startswith('Law text read')
e['p'][0] = 'In an unofficial copy of the Act, s' + e['p'][0][1:]
e['src'] = e['src'].replace('Law text read 26 November 2026:', 'Unofficial copy of the law, read 26 November 2026:', 1).replace(' hosted on FAO\'s FAOLEX database.', " hosted on FAO's FAOLEX database; we found no copy on a Nigerian government site.")
e['link'] = [e['link'][0], 'Unofficial copy: National Tobacco Control Act 2015, Nigeria (private printout on FAOLEX)']
out = json.dumps(u, ensure_ascii=False, separators=(',', ':'))
open(p, 'w', encoding='utf8', newline='').write(out + ('\n' if raw.endswith('\n') else ''))

l = json.load(open('ladder_log.json', encoding='utf8'))
def lg(k, tier, s):
    x = l.get(k) or {}
    x.setdefault(tier, []).append(s)
    x['date'] = '2026-11-26'
    l[k] = x
x = l['country/nigeria/tobacco']
moved = [s for s in x['official'] if 'lawyersonline' in s]
x['official'] = [s for s in x['official'] if 'lawyersonline' not in s]
x.setdefault('reliable', []).extend(moved)
lg('country/nigeria/tobacco', 'official', 'tried 2026-11-26: government copy of the Act: search found none on health.gov.ng, nafdac.gov.ng or tobaccocontrol.gov.ng; nesgroup gazette scan 404 (not a government site)')
lg('country/bulgaria/tobacco', 'official', 'read 2026-11-26: Health Act arts 56, 56a, 218 (Ministry of Health consolidated text), ' + BG)
lg('country/belgium/tobacco', 'official', 'read 2026-11-26: news.belgium.be 15 Sep 2025 smoking ban draft (browser pane), https://news.belgium.be/fr/interdiction-de-fumer-dans-certains-lieux')
open('ladder_log.json', 'w', encoding='utf8', newline='').write(json.dumps(l, ensure_ascii=False, indent=1).replace('\n', '\r\n'))
print('ok')
