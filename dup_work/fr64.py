import json
p='country_unique.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['plants']['france']
e['p'].append("The same page lists other rules that apply on top of the certificate. Plants and products from protected species need a CITES import permit shown to customs. Some fruit and vegetables from certain non-EU countries (the page cites Regulation 669/2009, annex I) are checked at the border and need a common entry document, and dried fruit from certain countries weighing over 20 kg gets reinforced health checks. Plants banned as narcotics, and the plants Stephania tetrandra and Aristolochia fangchi (decree 98-397 of 20 May 1998), are prohibited. Durians from Vietnam need an official certificate and border presentation above 5 kg fresh or 2 kg other. From French overseas departments the certificate is needed from the first gram. For questions, customs gives the free number 0 800 94 40 40 (+33 1 72 40 78 50 from abroad).")
e['src']="Source read: douane.gouv.fr, Comment voyager avec des plantes et végétaux ? (in French) and the customs procedure page for travellers bringing plants, fruit and vegetables from outside the EU (in French), read 24 November 2026. Seizure and fines are not on the pages."
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,separators=(',',':'))+('\n' if raw.endswith('\n') else ''))
