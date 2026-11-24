import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['CU']
sec={"h":"🛃 What Cuban Customs and the health ministry resolution say about e-cigarettes","p":"Two reliable secondary sources, both read on 24 November 2026: the customs-advice site Aduaneando en Cuba (page updated 17 January 2026), which quotes Resolution 23 of 2020 of the Ministry of Public Health, and d-cuba's report of a clarification by the General Customs Service of 23 October 2023. Neither is a customs page itself, and we did not read the resolution.","table":{"head":["Point","What they report"],"rows":[
 ["Rule","Resolution 23/2020 (MINSAP), Art. 2: it is prohibited to import, have, transport or export e-cigarettes or other items that encourage drug use"],
 ["Scope","Customs says the ban applies to non-commercial import as well, and whether use is medicinal or recreational"],
 ["Medical prescription","The resolution does not exempt people who carry a prescription"],
 ["Why","Customs says e-cigarettes can hide cannabis extracts and calls its policy zero tolerance"],
 ["Seizures","Customs of Villa Clara reported more detections at the border in recent months"]]},
 "list":["<strong>What this means:</strong> do not pack a vape for Cuba. These reports describe a ban on import by any route; they do not give a tobacco allowance."]}
e['sections']=[sec]+e['sections']
e['sections'][1]['list']=["<strong>Not read:</strong> the text of Resolution 23/2020 itself and any aduana.gob.cu page that names e-cigarettes."]
e['faq'].insert(0,["Can I bring a vape to Cuba?","No, according to Cuban customs as reported: Resolution 23/2020 of the Ministry of Public Health prohibits importing e-cigarettes, and customs says this applies to non-commercial imports and to people with a medical prescription."])
e['src']=[["https://aduaneandoencuba.com/2023/10/24/la-importacion-de-cigarrillos-electronicos/","Aduaneando en Cuba: customs advice site on e-cigarette import (updated 17 January 2026)"],["https://d-cuba.com/actualidad/aduana-de-cuba-aclara-leyes-sobre-importacion-de-cigarrillos-electronicos","d-cuba: General Customs Service clarification on e-cigarettes (23 October 2023)"]]+e['src']
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
