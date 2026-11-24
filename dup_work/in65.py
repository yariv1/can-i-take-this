p='airline_medication_b13.js'
s=open(p,encoding='utf8',newline='').read()
q=chr(39)
i=s.find("slug: 'indigo'")
j=s.find("const P1",s.rfind("// ---------------- INDIGO",0,i))
k=s.find("\n",j)+1
s=s[:k]+"    const P2 = ["+q+"https://www.goindigo.in/content/dam/s6web/in/en/assets/documents/Ready-Reckoner-2025.pdf"+q+", "+q+"IndiGo: Meda Pax Ready Reckoner (medical team, FSI.006)"+q+", "+q+"Medical conditions and flying"+q+"];\n"+s[k:]
old="          "+q+"IndiGo: its list of items you may carry names \"Medicines (with proper prescription)\", \"Non-prescribed medicines\" and \"Medical equipment (without mercury content)\"."+q+"\n        ], [P1], true),"
assert old in s
new="          "+q+"IndiGo: its list of items you may carry names \"Medicines (with proper prescription)\", \"Non-prescribed medicines\" and \"Medical equipment (without mercury content)\"."+q+",\n          "+q+"IndiGo medical team ready reckoner: for passengers with controlled diabetes or heart conditions it says to carry medicines in hand baggage; it lists some conditions as permitted only with a fit-to-fly certificate not older than 72 hours."+q+"\n        ], [P1, P2], true),"
s=s.replace(old,new,1)
open(p,'w',encoding='utf8',newline='').write(s)
import json
l=json.load(open('ladder_log.json',encoding='utf8'))
x=l.get('airline/indigo/medication') or {}
x.setdefault('official',[]).append("read 2026-11-24: IndiGo Meda Pax Ready Reckoner PDF (medical team) and dangerous-goods page re-read in browser pane")
x['date']='2026-11-24'
l['airline/indigo/medication']=x
open('ladder_log.json','w',encoding='utf8',newline='').write(json.dumps(l,ensure_ascii=False,indent=1).replace('\n','\r\n'))
