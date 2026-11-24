import json
p='country_unique.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['plants']['germany']
e['p'].insert(1,"The German-language customs page adds a list of plants you may not bring from outside the EU at all, apart from Switzerland and Liechtenstein: most conifers, some broadleaf trees (sweet chestnut, oak and poplar from North America), fruit trees and photinia, grapevines, citrus plants, loose soil and growing media, nightshade plants, potato tubers and many grass species. Plants infested with especially dangerous pests are banned too. The certificate is issued by the plant protection authority of the holiday country, and the page says the rules exist to keep dangerous diseases and pests out of German and EU crops.")
e['src']="Source read: zoll.de, Plant protection (English) and Pflanzen und Pflanzenprodukte im Reiseverkehr (in German, read 24 November 2026). Fine amounts are not on the pages."
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,separators=(',',':'))+('\n' if raw.endswith('\n') else ''))
