import json
p='topics_new.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
k=d['Kenya Airways']['alcohol']
print(json.dumps(k['sections'][1],ensure_ascii=False)[:500])
k['sections'][1]={"h":"What the Kenya Revenue Authority says about bringing alcohol into Kenya (Kenya Airways' home country)","p":"This is the customs rule for people entering Kenya, not a rule stated by Kenya Airways for its cabin. From the Kenya Revenue Authority (KRA) page \"Passenger Terminal Clearance in Kenya\", read on 24 November 2026.","table":{"head":["Point","KRA"],"rows":[
 ["Spirits or liquor","Not more than 1 litre"],
 ["Wine","Not more than 2 litres"],
 ["Perfume and toilet water","Not more than half a litre in all, of which no more than a quarter may be perfume"],
 ["Tobacco","Cigarettes, cigars, cigarillos, tobacco and snuff, 250 g in all"],
 ["Duty-free bought on the ship or plane","Must be declared if it exceeds those limits (alcohol over 1 litre of spirits or 2 litres of wine)"],
 ["Declare","Currency of USD 10,000 or more, and gifts or goods for other people; give no false information on Form F88"]]},
 "list":["<strong>Note:</strong> the same KRA page also states a concession of USD 2,000 for personal and household goods and asks you to declare items worth over USD 500; a separate KRA FAQ PDF gives USD 500, so confirm the value limit with KRA. The alcohol limits above are the same in both."]}
k['sources'].append(["https://www.kra.go.ke/helping-tax-payers/faqs/passenger-terminal-clearance-in-kenya","Kenya Revenue Authority &mdash; Passenger Terminal Clearance in Kenya"])
k['checked']="24 November 2026"
a=d['Austrian']['perfume']
a['sections'].append({"h":"🛂 What the Austrian airports' security leaflet says about liquids","p":"Not from Austrian Airlines: from the security leaflet \"Security at Austria's airports\" (Sicherheit auf Österreichs Flughäfen), published by Vienna Airport (viennaairport.com PDF), read on 24 November 2026. It applies to flights leaving Austrian airports.","table":{"head":["Point","Austrian airports' leaflet"],"rows":[
 ["What counts as a liquid","Creams, pastes, sprays, the contents of pressurised cans and perfumes, as well as true liquids and gels"],
 ["Limit","Containers of 100 ml at most, in one transparent resealable bag of 1 litre at most, one per passenger, shown separately at the checkpoint"],
 ["Medicines and special foods","Not restricted and can stay outside the bag, with proof of genuine use; containers over 100 ml get a technical inspection"],
 ["Duty-free purchases","Must be presented in an intact tamper-proof bag with visible proof of purchase; containers over 100 ml get a technical inspection"],
 ["Batteries, lighters","The leaflet refers to the booked airline for its rules"]]},
 "list":["<strong>What this means:</strong> a perfume over 100 ml goes in checked baggage unless it is a duty-free bottle in its intact bag with the receipt."]})
a.setdefault('faq',[]).append(["Can I take a big duty-free perfume from Vienna in my hand luggage?","The Austrian airports' leaflet says duty-free purchases must be in an intact tamper-proof bag with visible proof of purchase, and containers over 100 ml are inspected technically."])
a['sources'].append(["https://viennaairport.com/jart/prj3/va/uploads/data-uploads/downloads/AOeV_Sicherheitsfolder/AOeV_Sicherheit.pdf","Vienna Airport &mdash; Security at Austria's airports (leaflet)"])
a['checked']="24 November 2026"
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
