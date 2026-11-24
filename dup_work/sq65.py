import json
p='topics_new.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['Singapore Airlines']['perfume']
sec={"h":"🛫 What Changi Airport says about perfume and sprays at security","p":"From the Changi Airport page \"Security & Baggage Restrictions\", Liquids, Aerosols, Gels tab (changiairport.com, read 24 November 2026). It applies to every flight leaving Singapore, whatever the airline.",
"table":{"head":["Point","Changi Airport rule"],"rows":[
["Cabin container size","Nothing over 100 ml gets through, even if partly filled; grams and millilitres count the same"],
["Bag","One clear resealable bag per person, closed, all containers together not above 1 litre, shown separately at the screening point"],
["Perfume and sprays","Perfumes, deodorants, hairspray, shaving foam and spray deodorants are all listed as liquids, aerosols and gels"],
["Over the limit","Anything that does not meet the rules must be thrown away before screening, or checked in"],
["Bought at Changi","Over-100 ml duty-free stays in the shop's sealed tamper-evident bag with the receipt visible"],
["Flights to the EU or Switzerland","Only liquids in sealed tamper-evident bags with the SGP code, bought in the Changi transit area, are allowed onboard"]]},
"list":["<strong>Exemptions:</strong> baby food, breast milk with an infant, and items shown with a genuine doctor's letter."]}
e['sections'].append(sec)
e['faq'].append(["Can I carry a full-size perfume through Changi?","Not in the cabin unless it is a duty-free purchase kept sealed in its tamper-evident bag with the receipt. Otherwise containers over 100 ml go in checked baggage."])
e['sources'].append(["https://www.changiairport.com/en/fly/security-and-baggage-restrictions.html","Changi Airport &mdash; Security & Baggage Restrictions"])
out=json.dumps(d,ensure_ascii=False,indent=1)
open(p,'w',encoding='utf8',newline='').write(out+('\n' if raw.endswith('\n') else ''))
l=json.load(open('ladder_log.json',encoding='utf8'))
k='airline/singapore-airlines/perfume-aerosols'
x=l.get(k) or {}
x.setdefault('official',[]).append("https://www.changiairport.com/en/fly/security-and-baggage-restrictions.html")
x['date']='2026-11-24'
l[k]=x
s=json.dumps(l,ensure_ascii=False,indent=1).replace('\n','\r\n')
open('ladder_log.json','w',encoding='utf8',newline='').write(s)
