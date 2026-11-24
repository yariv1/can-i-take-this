p='airline_medication_b11.js'
s=open(p,encoding='utf8',newline='').read()
nl='\r\n' if '\r\n' in s else '\n'
i=s.index("slug: 'arkia'")
k=s.rindex("    add({",0,i)
j=s.index("faq: [",i)
b=s[i:j]
old="        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'Arkia', 'needles and syringes'),"
assert old in b
new="""        card('needles', 'Insulin & syringes', 'warn', 'Check the destination', 'Controlled medicines abroad', 'Israel Ministry of Health (not Arkia): check each destination country before you fly with narcotic or psychotropic medicines; a "permit to carry a controlled substance" is often needed.', [
          'Israel Ministry of Health, Pharmaceutics Division (page updated 28 May 2024): travellers leaving Israel with medicines must check the destination and transit countries, because some countries want documents for any amount and others only above a quantity.',
          'The Ministry says doctors may write up to three same-date prescriptions, about 92 days of treatment in all, marked as for a trip abroad, and the pharmacy asks the district pharmacist for approval and for the permit if one applies. Start at least one week before you leave.',
          'The pharmacy asks for a passport copy, a copy of the itinerary and a declaration that the medicines are for the patient alone.',
          'For a medicine that is not controlled, the page gives no rule for insulin or syringes: ask Arkia and your destination.'
        ], [P2]),""".replace('\n',nl)
b=b.replace(old,new)
s=s[:i]+b+s[j:]
s=s[:k]+"    const P2 = ['https://www.gov.il/en/pages/carrying-medication', 'Israel Ministry of Health: International travel with controlled substances, guidelines for travelers', 'Medicines abroad, permit to carry'];"+nl+s[k:]
s=s.replace("        ['Syringes, liquids, cold storage?', NP]"+nl+"      ],"+nl+"      extra: steps(['Carry only the amount of medicine you need on the way.'","        ['Controlled medicines abroad (Ministry of Health)?', 'Check the destination; a permit to carry is often needed; start a week ahead'],"+nl+"        ['Syringes, liquids, cold storage?', NP]"+nl+"      ],"+nl+"      extra: steps(['Carry only the amount of medicine you need on the way.'",1)
open(p,'w',encoding='utf8',newline='').write(s)
