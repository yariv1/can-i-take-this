import json
p='topics_new.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['United']['liquids']
e['sections'].append({"h":"🛩️ What the FAA says about toiletries and medicines in your bags","p":"From the FAA PackSafe page \"Medicinal & Toiletry Articles\" (faa.gov, read 24 November 2026). It is the US safety regulator's rule for any airline flying in the US, including United, and sits on top of the checkpoint limit above.",
"table":{"head":["Point","FAA wording"],"rows":[
["Allowed in","Carry-on and checked bags, for personal use"],
["Covers","Hairspray, hand sanitiser, aerosols, rubbing alcohol, inhalers, nail polish and remover, sunscreen, perfume, cologne, shaving cream, medicines"],
["Per container","No more than 0.5 kg (18 oz) or 500 ml (17 fl oz)"],
["Per person in total","No more than 2 kg (70 oz) or 2 L (68 fl oz)"],
["Aerosol nozzles","Must have a cap or other protection against accidental release"],
["Cabin checkpoint","Liquids, gels and aerosols in carry-on are still limited to 100 ml containers"],
["Quick test","If it does not touch your body when you use it, it probably does not qualify"]]},
"list":["<strong>Not on the page:</strong> anything specific to United; the FAA applies the same figures to every airline."]})
e.setdefault('faq',[]).append(["How much toiletry liquid can I pack in total on United?","The FAA caps medicinal and toiletry articles at 2 kg or 2 L per person, with no container above 0.5 kg or 500 ml. Carry-on containers must also be 100 ml or less."])
e['sources'].append(["https://www.faa.gov/hazmat/packsafe/medicinal-toiletry-articles","Unofficial source (US government): FAA PackSafe &mdash; Medicinal & Toiletry Articles"])
out=json.dumps(d,ensure_ascii=False,indent=1)
open(p,'w',encoding='utf8',newline='').write(out+('\n' if raw.endswith('\n') else ''))
l=json.load(open('ladder_log.json',encoding='utf8'))
k='airline/united/liquids'
x=l.get(k) or {}
x.setdefault('reliable',[]).append("https://www.faa.gov/hazmat/packsafe/medicinal-toiletry-articles")
x['date']='2026-11-24'
l[k]=x
open('ladder_log.json','w',encoding='utf8',newline='').write(json.dumps(l,ensure_ascii=False,indent=1).replace('\n','\r\n'))
