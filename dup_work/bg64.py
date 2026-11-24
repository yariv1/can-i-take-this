import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
assert json.dumps(d,ensure_ascii=False,indent=1)==raw or json.dumps(d,ensure_ascii=False,indent=1)+'\n'==raw
e=d['BG']
cust={"h":"🛃 What the Bulgarian Customs Agency says","p":"From the Customs Agency (Agentsiya Mitnitsi) traveller page \"Goods in personal luggage\" (customs.bg, last updated 21 November 2022, read from an archived copy on 24 November 2026) and an Agency press release of 8 September 2026 reported by the Bulgarian news agency BTA.","table":{"head":["Point","What the Customs Agency says"],"rows":[
 ["Tobacco allowance for adults over 17","200 cigarettes by air (40 other travellers), 100 cigarillos (20), 50 cigars (10) or 250 g of smoking tobacco (50 g); e-liquid and vapes are not listed"],
 ["Value limit","EUR 430 for air and sea travellers, EUR 300 at land borders, for non-commercial goods"],
 ["E-cigarette liquid","Counts as a tobacco product with or without nicotine; excise of EUR 0.28 per millilitre, planned to reach EUR 0.34 by 2028"],
 ["Transport","Excise goods follow a special regime; the press release describes unstamped liquid seized from parcels"]]},
 "list":["<strong>What this means:</strong> the Agency gives no e-liquid allowance for travellers, so a few bottles for your own use are a matter to ask customs about; large quantities without excise stamps are seized."]}
e['sections']=[cust]+e['sections']
s1=e['sections'][1]
s1['list']=["<strong>Not found:</strong> a Bulgarian traveller allowance for e-liquid or vape devices on the customs pages."]
e['faq'].insert(1,["Does Bulgarian customs treat vape liquid as tobacco?","Yes. The Customs Agency says e-cigarette liquid, with or without nicotine, is a tobacco product with excise of EUR 0.28 per millilitre. Its traveller page lists only conventional tobacco allowances."])
e['src']=[["https://customs.bg/wps/portal/agency/home/info-citizens/info-traveling/goods-in-personal-luggage","Customs Agency (Bulgaria): Goods in personal luggage"],["https://www.bta.bg/bg/news/bulgaria/1199784-golyamo-kolichestvo-technosti-za-elektronni-tsigari-otkriha-mitnicheski-sluzhite","BTA: Customs Agency press release on e-liquid seized in parcels (8 September 2026)"]]+e['src']
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
