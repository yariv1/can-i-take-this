import json
p='country_unique.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
assert json.dumps(d,ensure_ascii=False,separators=(',',':'))==raw or json.dumps(d,ensure_ascii=False,separators=(',',':'))+'\n'==raw
e=d['plants']['bulgaria']
e['h']="Plants and seeds in Bulgaria: the card, the Bulgarian phytosanitary ordinance and an unofficial source"
e['p'].insert(0,"Bulgaria's Ordinance No. 8 of 27 February 2015 on phytosanitary control (as amended in 2018, published by the Ministry of Agriculture) names the Bulgarian Food Safety Agency as the only competent state body for plant-health control, and says imports of regulated plants and plant products go through border inspection points at the border crossings. Article 19 says no control and no certificate are needed where there is no pest risk and the plants are not on its restricted list, have no special requirements, and are brought in small quantities for the traveller's own consumption during the journey. Inspectors can release a consignment, hold it for a laboratory test, or place it under quarantine.")
e['p'].append("The ordinance is older than the current EU plant-health regulation, which is stricter for seeds and plants brought from outside the EU. We therefore keep the EU rule above as the safe one: do not count on the small-quantity exception for seeds or plants for planting, and ask the Bulgarian Food Safety Agency before you bring them.")
e['src']="Source read: Ordinance No. 8 of 27 February 2015 on phytosanitary control (mzh.government.bg, in Bulgarian), read 24 November 2026; it may have been overtaken by EU rules. The UK government (FCDO) entry requirements page, read 16 November 2026, is an unofficial source: it is another country's travel advice."
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,separators=(',',':'))+('\n' if raw.endswith('\n') else ''))
