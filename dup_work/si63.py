import json
p='country_unique.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['plants']['slovenia']
e['p'].append("The Financial Administration (customs, FURS) page \"Import of plants and plant products\" gives the numbers. Small quantities from European countries need no inspection: fruit and raw vegetables 5 kg (not potatoes), seeds in original packaging not for sale 0.5 kg, flower bulbs and tubers 5 kg, one bouquet or wreath, one rootless Christmas tree, 3 indoor pot plants (not bonsai), 10 balcony plants or unlignified ornamental shrubs. Anything above that, or not banned, must be declared at the first EU entry point with a phytosanitary certificate from the country of origin; in Slovenia that means Port Koper, Ljubljana Jože Pučnik Airport or the Ljubljana customs post office (internet purchases).")
e['p'].append("Banned even in small amounts: potatoes, vines, citrus plants, bonsai and non-ornamental grasses. From the USA, Canada and China, plants with a root clod, conifers, chestnut, oak, apple, quince, pear, cherry, plum and other stone-fruit trees and roses are also banned.")
e['src']=e['src']+" Also read on 24 November 2026: fu.gov.si, Import of plants and plant products (page refreshed 26 October 2022)."
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,separators=(',',':'))+('\n' if raw.endswith('\n') else ''))
