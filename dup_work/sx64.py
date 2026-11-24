p='airline_medication_b12.js'
s=open(p,encoding='utf8',newline='').read()
nl='\r\n' if '\r\n' in s else '\n'
i=s.index("slug: 'sunexpress'")
k=s.rindex("    add({",0,i)
j=s.index("faq: [",i)
b=s[i:j]
b=b.replace("        gap('pills', 'Pills & tablets', 'x', 'Keep it with you', P1, 'SunExpress', 'ordinary pills and tablets'),","""        card('pills', 'Pills & tablets', 'go', 'Keep it with you', 'Medicines for the trip', 'Turkey civil aviation authority (SHGM): medicines needed during the trip are exempt from the liquid limits if you can show proof of need; this is the authority, not SunExpress.', [
          'SHGM brochure on liquid restrictions at Turkish airports: medicines for use during the trip are an exception, with a prescription carrying the passenger identity or a health report or document, and in the original packaging.',
          'SHGM: security staff may ask you to prove the need, or to taste the medicine or liquid.'
        ], [P2]),""".replace('\n',nl))
b=b.replace("        gap('needles', 'Insulin & syringes', 'x', 'Needles, syringes, injections', P1, 'SunExpress', 'needles and syringes'),","""        card('needles', 'Insulin & syringes', 'go', 'Carry with proof', 'Insulin, glucose meters, lancets', 'SHGM says insulin and other essential liquid medicines may go in hand baggage, in amounts above 100 ml too, if the need is proven.', [
          'SHGM diabetes page: passengers who need insulin may carry essential liquid medicines for the trip, and amounts above the 100 ml limit may be allowed if the need is proven; confirm in advance with the airline and the departure airport.',
          'SHGM: carry the documents your doctors gave you, and carry the equipment (glucose meter, lancets, spare batteries) and medicines in hand baggage; insulin kept in the hold can be exposed to harmful temperatures or lost with the bag.',
          'SHGM: if you use an insulin pump or a continuous glucose monitor, ask the airline for firm advice on using it in flight.'
        ], [P2]),""".replace('\n',nl))
b2=b
s=s[:i]+b2+s[j:]
# add P2 const before add({
s=s[:k]+"    const P2 = ['https://web.shgm.gov.tr/tr/s/4877-10-asilar', 'Turkish Civil Aviation Directorate General (SHGM): Diabetes and liquid restrictions brochure', 'Medicines, insulin, liquids'];"+nl+s[k:]
open(p,'w',encoding='utf8',newline='').write(s)
