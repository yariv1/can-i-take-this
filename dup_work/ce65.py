p='airline_medication_b11.js'
s=open(p,encoding='utf8',newline='').read()
i=s.find("slug: 'china-eastern'")
a=s.rfind("{",0,s.rfind("add({",0,i)) if False else s.rfind("add({",0,i)
blk=s.find("const P1",s.rfind("// ---------------- CHINA",0,i))
q=chr(39)
ins="    const P3 = ["+q+"https://www.ceair.com/global/en_static/Announcement/TravelTips/SpecialPassengerServiceNotice/Sickpassenger/"+q+", "+q+"China Eastern: Sick passenger service notice"+q+", "+q+"Medical documents, fitness to fly"+q+"];\n"
# insert after P2 line in China Eastern block
j=s.find("const P2",s.rfind("// ---------------- CHINA",0,i))
k=s.find("\n",j)+1
s=s[:k]+ins+s[k:]
old="        gap("+q+"needles"+q
new_card=("        card("+q+"pills"+q+", "+q+"Pills & tablets"+q+", "+q+"warn"+q+", "+q+"Documents if unwell"+q+", "+q+"Medicine if you are ill or recovering"+q+", "+q+"China Eastern publishes no pill rule, but its sick passenger notice asks for a doctor document within 48 hours of travel."+q+", [\n"
 "          "+q+"China Eastern sick passenger notice: passengers who cannot care for themselves in flight, or with conditions that need a flight risk acknowledgment, must show a fitness-to-fly certificate, Certificate of Diagnosis or post-operative certificate."+q+",\n"
 "          "+q+"China Eastern: the certificate must be issued within 48 hours before travel by a Grade II or higher hospital in China, or an equivalent clinic or hospital overseas; Chinese hospitals add a stamp and doctor signature, overseas documents need only the signature."+q+",\n"
 "          "+q+"China Eastern: arrive at least 120 minutes before departure to complete check-in; portable oxygen concentrator requests need 48 hours notice."+q+"\n"
 "        ], [P3]),\n")
assert old in s
# only within china block: first occurrence after i
pos=s.find(old,i)
s=s[:pos]+new_card+s[pos:]
open(p,'w',encoding='utf8',newline='').write(s)
import json
l=json.load(open('ladder_log.json',encoding='utf8'))
x=l.get('airline/china-eastern/medication') or {}
x.setdefault('official',[]).append("https://www.ceair.com/global/en_static/Announcement/TravelTips/SpecialPassengerServiceNotice/Sickpassenger/")
x['date']='2026-11-24'
l['airline/china-eastern/medication']=x
x=l.get('airline/ethiopian-airlines/alcohol') or {}
x.setdefault('official',[]).append("https://www.ethiopianairlines.com/uk/information/baggage-information/restricted-items (no alcohol-beverage rule found)")
x['date']='2026-11-24'
l['airline/ethiopian-airlines/alcohol']=x
open('ladder_log.json','w',encoding='utf8',newline='').write(json.dumps(l,ensure_ascii=False,indent=1).replace('\n','\r\n'))
