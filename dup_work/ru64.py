import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['RU']
print([s['h'] for s in e['sections']], e['faq'][:1])
cust={"h":"🛃 What Russian Customs said about vapes and tobacco for travellers","p":"From the press service of the Federal Customs Service of Russia (FTS), notice of 5 October 2022 on the changed rules for importing goods for personal use into the Eurasian Economic Union (EAEU), as published by the customs news site Alta-Soft and read on 24 November 2026. It is an older notice: check the current rule before you travel.","table":{"head":["Point","What FTS said"],"rows":[
 ["E-cigarette sticks","From 8 October 2022 individuals may carry 200 sticks for electronic cigarettes that are officially on the tobacco products list"],
 ["Other tobacco","Unchanged: 200 cigarettes, 50 cigars or cigarillos, 250 g of tobacco; anything above the norm is banned"],
 ["Age","18 in Russia, Belarus, Kyrgyzstan and Armenia; 21 in Kazakhstan"],
 ["Legal basis","EAEU Council decision of 19 August 2022 No. 123 amending decision No. 107 of 20 December 2017"]]},
 "list":["<strong>What this means:</strong> the notice names e-cigarette sticks, not vape liquid or devices, so a refillable vape and its liquid are not covered by the figure; ask Russian customs."]}
e['sections']=[cust]+e['sections']
e['faq'].insert(1,["How many e-cigarette sticks can I bring into Russia?","The Federal Customs Service said in 2022 that individuals may carry 200 sticks for electronic cigarettes officially on the tobacco products list, with 200 cigarettes, 50 cigars or 250 g of tobacco as the other norms. Anything above the norm is banned."])
e['src']=[["https://www.alta.ru/external_news/93929/","Alta-Soft: Federal Customs Service of Russia notice on personal-use import rules (5 October 2022)"]]+e['src']
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
