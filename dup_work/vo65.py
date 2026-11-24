p='airline_medication_b12.js'
s=open(p,encoding='utf8',newline='').read()
q=chr(39)
i=s.find("slug: 'volaris'")
j=s.find("const P1",s.rfind("// ---------------- VOLARIS",0,i))
k=s.find("\n",j)+1
P2="    const P2 = ["+q+"https://cms.volaris.com/en/travel-info/baggage-policy/restricted-and-forbidden-items/"+q+", "+q+"Volaris: Restricted and forbidden items"+q+", "+q+"Liquids, aerosols, medical batteries"+q+"];\n"
s=s[:k]+P2+s[k:]
old="        gap("+q+"liquids"+q+", "+q+"Liquid medication"+q+", "+q+"x"+q+", "+q+"Over 100 ml (3.4 oz)"+q+", P1, "+q+"Volaris"+q+", "+q+"liquid limits for medication"+q+"),\n"
pos=s.find(old,i)
assert pos>0
new=("        card("+q+"liquids"+q+", "+q+"Liquid medication"+q+", "+q+"warn"+q+", "+q+"No exemption stated"+q+", "+q+"Over 100 ml (3.4 oz)"+q+", "+q+"Volaris says liquids over 100 ml are not allowed in carry-on and gives no medicine exemption; aerosol containers are capped at 500 ml or 500 g."+q+", [\n"
 "          "+q+"Volaris restricted items page: liquids in containers larger than 100 ml are not permitted in carry-on baggage."+q+",\n"
 "          "+q+"Volaris: each personal-care aerosol container may not exceed 500 ml or 500 g."+q+",\n"
 "          "+q+"Volaris: devices with lithium batteries, including portable medical electronic devices, are accepted depending on battery capacity; the page notes some higher-capacity batteries are for medical use only."+q+"\n"
 "        ], [P2]),\n")
s=s[:pos]+new+s[pos+len(old):]
open(p,'w',encoding='utf8',newline='').write(s)
import json
l=json.load(open('ladder_log.json',encoding='utf8'))
k2='airline/volaris/medication'
x=l.get(k2) or {}
x.setdefault('official',[]).append("read 2026-11-24: Volaris restricted and forbidden items page, https://cms.volaris.com/en/travel-info/baggage-policy/restricted-and-forbidden-items/")
x['date']='2026-11-24'
l[k2]=x
open('ladder_log.json','w',encoding='utf8',newline='').write(json.dumps(l,ensure_ascii=False,indent=1).replace('\n','\r\n'))
