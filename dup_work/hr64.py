import json
p='country_unique.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['plants']['croatia']
e['p'].append("The Croatian page adds that the lists of plants allowed in with a third-country certificate are set by Implementing Regulation (EU) 2019/2072 as amended by Regulation (EU) 2021/2285 (Annex XI, parts A and B, and Annex XII). It says seeds and planting material may not be brought in through any other Croatian border crossing than those inspection posts, and that seeds or plants on the banned-species list, or any that skip the mandatory inspection, are always taken from the traveller. The inspectors work in the State Inspectorate's agriculture and plant health inspection sector, whose address on the page is Šubićeva 29, Zagreb.")
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,separators=(',',':'))+('\n' if raw.endswith('\n') else ''))
