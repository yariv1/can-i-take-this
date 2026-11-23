import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
u=d['UA']
cust={"h":"🛃 What the Customs Code of Ukraine says about tobacco and excise goods",
"p":"From the Customs Code of Ukraine (zakon.rada.gov.ua), articles 374 and 376, read on 23 November 2026 from an archived copy of the 2025 text. The code does not name e-cigarettes or e-liquid, so the vape rule has to be read from the State Customs Service, which treats e-cigarette liquid as excise goods.",
"table":{"head":["Point","What the code says"],
"rows":[["Duty-free personal goods","Goods worth up to 1,000 euro in hand or accompanied baggage, but excise goods are excluded from this allowance (article 374)"],
["Tobacco allowance","Adults 18+: 200 cigarettes, or 50 cigars, or 250 g of tobacco, or a mix up to 250 g in total (article 376)"],
["Age","Tobacco products may not be brought in by anyone under 18"],
["Short trips","If you were away from Ukraine less than 24 hours, tobacco and alcohol are taxed whatever the quantity"]]},
"list":["<strong>What this means:</strong> the 200-cigarette figure is for tobacco, not a vape allowance. No official figure for e-liquid was found, so confirm with the State Customs Service before bringing more than one device and a few refills."]}
u['sections']=[cust]+u['sections']
u['sections'][1]['p']=u['sections'][1]['p'].replace(" The official customs rule for travellers could not be read, so treat this as background and confirm with customs."," Treat it as background.")
u['sections'][1]['list']=["<strong>Not found:</strong> a Ukrainian customs figure for e-liquid carried by a traveller."]
u['faq'].insert(1,["Is there a duty-free allowance for vapes in Ukraine?","Not by name. The Customs Code allows adults 200 cigarettes, 50 cigars or 250 g of tobacco, and excludes excise goods from the 1,000 euro allowance. E-liquid is treated as an excise good, so ask customs before you bring more than you need."])
u['src']=[["https://zakon.rada.gov.ua/laws/show/4495-17","Customs Code of Ukraine, articles 374 and 376"]]+u['src']
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
