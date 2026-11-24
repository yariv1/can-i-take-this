import json
p='topics_new.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['Austrian']['power']
e['sections'].append({"h":"⚡ Other battery points on the same Austrian page","p":"Also from Austrian's \"Electronic items and batteries\" page (UK English version, read 24 November 2026 in a browser, because the site blocks automated readers).",
"table":{"head":["Point","Austrian says"],"rows":[
["Damaged or recalled","Defective, damaged or manufacturer-recalled devices and batteries may not be carried at all"],
["Several cells in one case","The Wh of all cells in the casing are added up to decide if it is accepted"],
["Working out Wh","Ah x volts, or mAh x volts / 1,000"],
["Short circuits","Cover or insulate the contacts, or keep the bank in its retail packaging"],
["Spare batteries (not power banks)","Up to 20 in cabin baggage at 100 Wh or less; recharging on board is not permitted"],
["Confiscation","Items not allowed for transport risk being confiscated at the airport with no liability"]]},
"list":["<strong>Stricter rules:</strong> Austrian says it may apply tighter measures for safety and that some countries have stricter laws."]})
e['faq'].append(["How do I work out the Wh of my power bank for Austrian?","Multiply amp-hours by volts, or milliamp-hours by volts and divide by 1,000. For a pack of several cells, add the cells together."])
out=json.dumps(d,ensure_ascii=False,indent=1)
open(p,'w',encoding='utf8',newline='').write(out+('\n' if raw.endswith('\n') else ''))
l=json.load(open('ladder_log.json',encoding='utf8'))
k='airline/austrian/power-bank'
x=l.get(k) or {}
x.setdefault('official',[]).append("https://www.austrian.com/gb/en/electronic-devices-and-batteries")
x['date']='2026-11-24'
l[k]=x
open('ladder_log.json','w',encoding='utf8',newline='').write(json.dumps(l,ensure_ascii=False,indent=1).replace('\n','\r\n'))
