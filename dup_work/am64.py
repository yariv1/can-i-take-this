p='airline_medication_b13.js'
s=open(p,encoding='utf8',newline='').read()
nl='\r\n' if '\r\n' in s else '\n'
i=s.index("// ---------------- AEROMEXICO")
j=s.index("// ---------------- ALASKA",i)
b=s[i:j]
B=chr(92)+chr(39)
b=b.replace("    const P1 = ['https://www.aicm.com.mx/wp-content/uploads/2023/09/GuiaDelPasajero.pdf'","    const P2 = ['https://www.aicm.com.mx/informacionalpasajero/Archivos/GuiaAICM2014.pdf', 'Mexico City International Airport (AICM): Informaci"+chr(243)+"n al pasajero (2014 security guide, in Spanish)', 'Medicines, liquids, diabetes, oxygen'];"+nl+"    const P1 = ['https://www.aicm.com.mx/wp-content/uploads/2023/09/GuiaDelPasajero.pdf'",1)
b=b.replace("        gap('pills', 'Pills & tablets', 'x', 'Keep it with you', P1, 'AICM', 'ordinary pills and tablets'),","""        card('pills', 'Pills & tablets', 'go', 'Reasonable amount', 'Medicines for your trip', 'The older AICM security guide allows medicines, in a reasonable quantity for your needs and itinerary, without putting them in the clear bag.', [
          'AICM 2014 security guide: medicines, baby milk and food, and special dietary products are allowed, and do not have to go in the resealable plastic bag if the quantity is reasonable for the passenger need and itinerary.',
          'This is the airport guide, not Aeromexico, and it is from 2014.'
        ], [P2]),""".replace('\n',nl))
b=b.replace("        gap('liquids', 'Liquid medication', 'x', 'Over 100 ml (3.4 oz)', P1, 'AICM', 'liquid medication over 100 ml'),","""        card('liquids', 'Liquid medication', 'go', 'Over 100 ml (3.4 oz)', 'Liquid medicine', 'AICM exempts medicines from the 100 ml and clear-bag rule in a reasonable quantity; other liquids over 100 ml must go in checked baggage.', [
          'AICM 2014 security guide: people under medical treatment may carry liquids, aerosols and gels above 100 ml; ordinary cosmetic and hygiene liquids are limited to 100 ml containers in one resealable bag of up to 1 litre.',
          'AICM 2014 security guide: oxygen is allowed only as medical gaseous oxygen cylinders up to 5 kg gross with a prescription, or concentrators certified by the civil aviation authority with a prescription.'
        ], [P2]),""".replace('\n',nl))
b=b.replace("          'This is the rule at Mexico City airport; the guide is not Aeromexico"+B+"s own.'","          'The older AICM 2014 security guide says diabetics may enter with the medicines and syringes needed for the trip without showing the prescription, and recommends carrying a diabetes patient card. The two guides differ, so carry a prescription.',"+nl+"          'This is the rule at Mexico City airport; the guide is not Aeromexico"+B+"s own.'")
b=b.replace("[P1], true),","[P1, P2], true),",1)
b=b.replace("        ['Pills, liquid size limit, cold storage?', NP]","        ['Pills and liquid medicine (2014 AICM guide)?', 'Allowed in a reasonable quantity, outside the clear bag'],"+nl+"        ['Cold storage?', NP]")
s=s[:i]+b+s[j:]
open(p,'w',encoding='utf8',newline='').write(s)
