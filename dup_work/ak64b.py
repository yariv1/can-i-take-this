p='airline_medication_b13.js'
s=open(p,encoding='utf8',newline='').read()
nl='\r\n' if '\r\n' in s else '\n'
# take poc card text
a=s.index("        card('poc', 'Oxygen concentrators'")
b=s.index("        ab(PA)",a)
poc=s[a:b]
s=s[:a]+s[b:]
i=s.index("slug: 'alaska-airlines'")
d=s.index("        card('devices'",i)
e=s.index("], [PA]),",d)+len("], [PA]),")
old=s[d:e]
import re
# extract head string of devices card (first args) keep id/label etc; rebuild with merged lines
lines=re.findall(r"'((?:[^'\]|\.)*)'",poc.split('[\n')[0]) if False else None
new=poc.replace("card('poc', 'Oxygen concentrators', 'warn', 'FAA-approved only, 150% battery', 'Portable oxygen concentrators and ventilators',","card('devices', 'Drips and oxygen', 'warn', 'FAA-approved POC only', 'Intravenous devices, personal oxygen',",1)
# add IV line
new=new.replace("        ], [P4, P3]),","          'Alaska Airlines: intravenous devices may not be suspended from the aircraft, so nothing interferes with the deployment of the emergency oxygen masks.'"+nl+"        ], [PA, P4, P3]),")
new=new.replace("until you","until you")
# the line before IV line needs comma
new=new.replace("flows 1","flows 1")
new=re.sub(r"(carry-on bags with special instructions[^\n]*?checkpoint\.')\r?\n          'Alaska Airlines: intravenous",r"\1,"+nl+"          'Alaska Airlines: intravenous",new)
s=s[:d]+new+s[e:]
open(p,'w',encoding='utf8',newline='').write(s)
