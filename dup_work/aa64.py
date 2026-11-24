p='airline_medication_b10.js'
s=open(p,encoding='utf8',newline='').read()
nl='\r\n' if '\r\n' in s else '\n'
i=s.index("slug: 'air-arabia'")
k=s.rindex("    add({",0,i)
j=s.index("faq: [",i)
b=s[i:j]
old="        gap('pills', 'Pills & tablets', 'x', 'Medicine in general', P, 'Air Arabia', 'where to pack everyday tablets'),"
assert old in b
new="""        card('pills', 'Pills & tablets', 'warn', 'Controlled ones need a permit', 'Medicines for the UAE', 'The UAE Government (not Air Arabia) lets you bring ordinary prescribed medicines for personal use in normal quantity; narcotic and psychotropic medicines are controlled and some medicines need a Ministry of Health permit.', [
          'UAE Government portal (u.ae), Drugs and controlled medicines: you may bring in other prescribed medicines for personal use in normal quantity, and to import some medicines you need a permit from the Ministry of Health and Prevention.',
          'The same page says narcotic and psychotropic drugs (controlled drug class A) and semi-controlled class B drugs are neither freely available in the UAE nor freely imported, and that recreational drugs are banned under Federal Law by Decree No. 30 of 2021.',
          'The portal links a Ministry service to request permission to import medicines for personal use.'
        ], [P2]),""".replace('\n',nl)
b=b.replace(old,new)
s=s[:i]+b+s[j:]
s=s[:k]+"    const P2 = ['https://u.ae/en/information-and-services/health-and-fitness/Health-and-wellbeing/drugs-and-controlled-medicines', 'UAE Government portal: Drugs and controlled medicines', 'Prescribed and controlled medicines for personal use'];"+nl+s[k:]
open(p,'w',encoding='utf8',newline='').write(s)
