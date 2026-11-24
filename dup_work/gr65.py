import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['GR']
sec={"h":"⚖️ What Greek law (Law 4419/2016) sets for e-cigarettes and refill liquid","p":"Reliable secondary source: the handbook \"Basic legislative requirements for nicotine liquid for e-cigarettes\" (in Greek), published on the tax news site taxheaven.gr and read on 24 November 2026. It describes Law 4419/2016, which applies EU Directive 2014/40/EU. It sets product rules for the market, not a traveller allowance.","table":{"head":["Point","What the handbook says"],"rows":[
 ["Nicotine strength","Not more than 20 mg/ml"],
 ["Refill containers","Nicotine liquid is sold only in refill containers of at most 10 ml; disposable vials or cartridges at most 2 ml"],
 ["Device","Child-resistant and tamper-proof, protected against breakage and leakage, with leak-free refilling"],
 ["Additives","No vitamins, caffeine, taurine or additives with cancer-causing, mutagenic or reproduction-toxic properties"],
 ["Packaging","Ingredients, nicotine content, batch number and the warning that the product contains nicotine, a highly addictive substance; a Greek leaflet inside"],
 ["Not covered","Nicotine-free e-liquid, and products licensed as medicines or medical devices"],
 ["Market checks","Local health services, trade services, chemical services and Customs"]]},
 "list":["<strong>What this means:</strong> a refill over 10 ml or stronger than 20 mg/ml does not meet Greek product rules for sale. The handbook states no limit for what a traveller carries in luggage."]}
e['sections']=[sec]+e['sections']
e['faq'].insert(1,["What are the nicotine and bottle limits for vapes in Greece?","Greek Law 4419/2016, as summarised in a Greek handbook, allows nicotine liquid up to 20 mg/ml in refill containers of at most 10 ml, with disposable cartridges at most 2 ml. These are product rules for sale, not a traveller allowance."])
e['src']=[["https://www.taxheaven.gr/circulars/25199/egxeiridio","Taxheaven: handbook on the basic legal requirements for nicotine liquid for e-cigarettes (Law 4419/2016)"]]+e['src']
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
