import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['MT']
sec={"h":"⚖️ What Maltese regulations say about e-cigarettes","p":"Reliable secondary source: the Tobacco Control Laws database (Legal Consortium of the Campaign for Tobacco-Free Kids), page \"Main Policies - E-Cigarettes\" for Malta, last updated 22 April 2024, read from an archived copy on 24 November 2026. It quotes Maltese legal notices and is not a customs page.","table":{"head":["Point","What the database says"],"rows":[
 ["Nicotine strength","Liquid must not exceed 20 mg/ml (L.N. 67 of 2016, reg. 18(3)(b))"],
 ["Refill containers","Nicotine-containing refills must not exceed 10 ml; disposable cartridges must not exceed 2 ml"],
 ["Device safety","Child- and tamper-proof, protected against breakage and leakage, refilling without leakage"],
 ["Use in public places","Same restrictions as smoking: banned in public places except designated areas, on public transport and in private vehicles with a child under 16"],
 ["Online sales","Cross-border distance sales to consumers in Malta are prohibited"]]},
 "list":["<strong>What this means:</strong> a refill bigger than 10 ml or stronger than 20 mg/ml does not meet Maltese product rules; these are sale rules, not a traveller allowance."]}
e['sections']=[sec]+e['sections']
e['faq'].insert(1,["What are the nicotine and bottle limits for vapes in Malta?","Maltese regulations, as quoted by a legal database, cap nicotine liquid at 20 mg/ml and nicotine refill containers at 10 ml, with disposable cartridges at 2 ml. These are product rules for sale, not a traveller allowance."])
e['src']=[["https://www.tobaccocontrollaws.org/legislation/malta/e-cigarettes/main-policies","Tobacco Control Laws: E-cigarettes in Malta (Legal Consortium)"]]+e['src']
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
