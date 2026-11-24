import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
def add(code,sec,faq,src):
    e=d[code]; e['sections']=[sec]+e['sections']; e['faq'].insert(1,faq); e['src']=[src]+e['src']
TCL="Tobacco Control Laws database (Legal Consortium of the Campaign for Tobacco-Free Kids), page \"Main Policies - E-Cigarettes\""
add('OM',{"h":"⚖️ What Omani decrees say about importing e-cigarettes","p":"Reliable secondary source: the "+TCL+" for Oman, last updated 27 August 2024, read from an archived copy on 24 November 2026. It quotes two Omani decrees and is not a customs page.","table":{"head":["Point","What the database says"],"rows":[
 ["Import","Ministerial Decree No. 327/2015 (Art. 1) bans the import of e-cigarettes and e-shisha"],
 ["Trade","Decree No. 698/2015 (Arts. 1, 2) bans their trade"],
 ["Use in public places","No law addresses it, so the database treats it as allowed"],
 ["Advertising","No law addresses it, so the database treats it as allowed"]]},
 "list":["<strong>What this means:</strong> the decrees ban import in general, with no traveller exception stated; do not rely on carrying a device in. The decrees themselves were not read."]},
 ["Is importing a vape into Oman banned?","A legal database citing Ministerial Decree 327/2015 says importing e-cigarettes and e-shisha is banned, and Decree 698/2015 bans trading them. It states no exception for a traveller's own device, so ask Omani customs before you fly."],
 ["https://www.tobaccocontrollaws.org/legislation/oman/e-cigarettes/main-policies","Tobacco Control Laws: E-cigarettes in Oman (Legal Consortium)"])
add('ET',{"h":"⚖️ What Ethiopian law says about e-cigarettes","p":"Reliable secondary source: the "+TCL+" for Ethiopia, last updated 7 March 2022, read from an archived copy on 24 November 2026. It quotes Ethiopian proclamations and is not a customs page.","table":{"head":["Point","What the database says"],"rows":[
 ["Ban","Food and Medicine Administration Proclamation No. 1112/2019, Sec. 46(2), bans manufacture, wholesale, distribution, sale or offer for sale, and import to trade of any e-cigarette or related technology product"],
 ["Use in public places","No law addresses it, so the database treats it as allowed"],
 ["Advertising","Banned under Advertisement Proclamation No. 759/2012, Art. 25(1)(f)"]]},
 "list":["<strong>What this means:</strong> the wording bans importing to trade; it does not state a rule for one device in a traveller's bag, so confiscation is possible and customs decides. The proclamation itself was not read."]},
 ["Is importing a vape into Ethiopia banned?","Ethiopian Proclamation 1112/2019, as quoted by a legal database, bans import to trade of e-cigarettes. It does not say what happens to one device a traveller carries, so ask Ethiopian customs before you fly."],
 ["https://www.tobaccocontrollaws.org/legislation/ethiopia/e-cigarettes/main-policies","Tobacco Control Laws: E-cigarettes in Ethiopia (Legal Consortium)"])
add('NG',{"h":"⚖️ What Nigerian law says about e-cigarettes","p":"Reliable secondary source: the "+TCL+" for Nigeria, last updated 7 March 2025, read from an archived copy on 24 November 2026. It is not a customs page.","table":{"head":["Point","What the database says"],"rows":[
 ["Sale","Not regulated, so allowed"],
 ["Use in public places","No law addresses it, so the database treats it as allowed"],
 ["Advertising","No general law; the National Film and Video Censors Board Regulations 2024 ban depicting or promoting e-cigarettes in films, music videos and skits"]]},
 "list":["<strong>What this means:</strong> no Nigerian rule stopping a traveller from carrying a vape was found in this source; the Customs Service decides at the border."]},
 ["Are vapes legal in Nigeria?","A legal database says the sale of e-cigarettes is not regulated in Nigeria and use in public places is not addressed by law, but film regulations of 2024 ban depicting or promoting them. It states no import rule for travellers."],
 ["https://www.tobaccocontrollaws.org/legislation/nigeria/e-cigarettes/main-policies","Tobacco Control Laws: E-cigarettes in Nigeria (Legal Consortium)"])
add('SC',{"h":"🛃 What Seychelles International Airport says about tobacco allowances","p":"From the Seychelles International Airport page \"Customs: duty free allowances\" (airport operator, not a customs agency), read on 24 November 2026. It cites the Customs Management (Passenger Allowance) (Amendment) Regulations 2022 (SI 23 of 2022).","table":{"head":["Point","What the airport page says"],"rows":[
 ["Tobacco, passengers over 18","250 g of tobacco product or 200 cigarettes, including cigars, cheroots, snuff, smoking and chewing tobacco"],
 ["Vapes and e-liquid","Not listed"],
 ["Other goods","SCR 15,000 including one tablet, phone or laptop; SCR 3,000 for under-18s"],
 ["Excess","Taxes payable on arrival, calculated from receipts or customs value"]]},
 "list":["<strong>What this means:</strong> the allowance names tobacco products only, so a vape and its liquid are not covered by it; ask Seychelles customs before you fly."]},
 ["What tobacco can I bring to Seychelles?","Seychelles International Airport lists 250 g of tobacco product or 200 cigarettes for passengers over 18. It does not mention vapes or e-liquid."],
 ["https://seychellesairports.sc/pre-flight/customs","Seychelles International Airport: Customs, duty free allowances"])
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
