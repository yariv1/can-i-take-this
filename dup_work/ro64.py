import json
p='country_unique.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['tobacco']['romania']
e['p'].append("Press reports of 6 to 8 August 2026 describe Joint Order No. 1,613/956/2026 of ANAF and the Romanian Customs Authority, published in the Official Gazette on 6 August. It sets reference periods over which tobacco and alcohol that one person brings from another EU country are added together: 40 days for tobacco products and one year for alcohol, within the Fiscal Code limits of 800 cigarettes, 400 cigarillos up to 3 g each, 200 cigars and 1 kg of smoking tobacco. The order also creates an electronic register in which customs records each finding on a form signed by the officer and the person; a copy can be requested within seven days. Authorities use it to check that the trips are occasional and for own use, a condition from Emergency Ordinance 68/2025. Press says exceeding the limits when goods no longer count as own use can bring fines of 20,000 to 100,000 lei and confiscation.")
e['src']=e['src']+" Adevarul.ro (8 August 2026), a news report on the joint order, read 24 November 2026; we did not read the order text itself."
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,separators=(',',':'))+('\n' if raw.endswith('\n') else ''))
