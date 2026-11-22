import json
p='country_unique.json'
d=json.load(open(p,encoding='utf8'))
L=["https://www.brusselsairport.be/en/passenger/travel-planner/customs/","Brussels Airport: Customs"]
S="Reliable unofficial source, read 22 November 2026: Brussels Airport customs page. It is the airport operator's page, not Belgian customs, which it points to for full details."
d['tobacco']['belgium']={"h":"What Brussels Airport says about tobacco","p":["Brussels Airport's customs page gives travellers from outside the EU up to 200 cigarettes or 250 g of tobacco for the green exit. Above that, use the red exit; if customs finds more than the exempt quantity you pay duties and taxes and a fine.","The page says Belgian customs mainly checks quantities of alcohol, tobacco and perfume and the total value of purchases, and that different limits apply from another EU country. Confirm with Belgian customs."],"src":S,"link":L}
d['alcohol']['belgium']={"h":"What Brussels Airport says about alcohol","p":["Brussels Airport's customs page gives travellers from outside the EU up to 1 litre of spirits or 2 litres of wine at the green exit. The red exit is for anyone above the limits, and a check is always possible.","Other goods, perfume included, must total under 430 euros, and cash or gold of 10,000 euros or more also goes through the red exit. Different limits apply from another EU country, so confirm with Belgian customs."],"src":S,"link":L}
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,separators=(',',':'),ensure_ascii=False))
