import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
u=d['MA']
cust={"h":"🛃 What Moroccan Customs (ADII) tells visitors they may bring",
"p":"From the ADII traveller guide \"À votre arrivée au Maroc\" (douane.gov.ma, read 23 November 2026 from an archived copy). The guide does not mention e-cigarettes or e-liquid. It lists what visitors may bring without declaration, and says anything outside these tolerances pays duties and taxes.",
"table":{"head":["Point","What the ADII guide says"],
"rows":[["Tobacco","200 grams of manufactured tobacco, duty-free and without declaration"],
["Goods without commercial character","Limited quantities up to 2,000 dirhams in total value, without formalities or duties"],
["Anything beyond these tolerances","Subject to duties and taxes, with a payment receipt issued by customs"]]},
"list":["<strong>What this means:</strong> there is no vape allowance in the guide. One device for your own use is the cautious choice; extra devices and bottles of liquid may be treated as goods that owe duty."]}
u['sections']=[cust]+u['sections']
u['sections'][1]['p']=u['sections'][1]['p'].replace(" The official customs rule for travellers could not be read, so treat this as background and confirm with customs."," Treat it as background.")
u['sections'][1]['list']=["<strong>Not found:</strong> an ADII figure for vapes carried by a traveller. Search results show customs duty and excise on e-cigarettes and a mandatory product standard from 2026, which are not baggage rules."]
u['faq'].insert(1,["Does Moroccan customs give a vape allowance?","No. The ADII visitor guide allows 200 grams of manufactured tobacco and goods up to 2,000 dirhams, and does not name vapes. Anything beyond the tolerances pays duties and taxes."])
u['src']=[["https://www.douane.gov.ma/dms_prod/loadDocument?documentId=76361","ADII (Moroccan customs): traveller guide, À votre arrivée au Maroc"]]+u['src']
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
