import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
def add(code,sec,faq,src):
    e=d[code]; e['sections']=[sec]+e['sections']; e['faq'].insert(1,faq); e['src']=[src]+e['src']
TCL="Tobacco Control Laws database (Legal Consortium of the Campaign for Tobacco-Free Kids), page \"Main Policies - E-Cigarettes\""
add('JO',{"h":"⚖️ What Jordanian rules say about e-cigarettes","p":"Reliable secondary source: the "+TCL+" for Jordan, last updated 22 January 2021, read from an archived copy on 24 November 2026. It quotes Jordan Food and Drug Administration (JFDA) regulations and Public Health Law No. 47 of 2008, and is not a customs page. The rules may have changed since 2021.","table":{"head":["Point","What the database says"],"rows":[
 ["Sale","Allowed with notification, registration and licensing, sales-location rules and a minimum age (JFDA rules, art. 4 and arts. 3, 4, 6)"],
 ["Use in public places","Banned in hospitals, health centres, schools, cinemas, theatres, libraries, museums, government premises, means of transport and airport arrival and departure halls (Public Health Law 47/2008, arts. 52, 53(A))"],
 ["Advertising","Banned in any public place and on the internet and social media; display in a shop needs JFDA authorisation"],
 ["Online delivery","Delivery of e-cigarettes or e-liquid to individuals is prohibited"],
 ["Additives","Banned in e-liquid: caffeine, taurine, vitamins, colourants, heavy-metal residues and controlled substances"]]},
 "list":["<strong>What this means:</strong> do not vape in an airport hall or on transport in Jordan. The database states no traveller allowance; JFDA approval rules apply to products sold in the country."]},
 ["Where is vaping banned in Jordan?","A legal database quoting Public Health Law 47/2008 lists hospitals, schools, cinemas, libraries, museums, government premises, transport and airport arrival and departure halls. It dates from January 2021."],
 ["https://www.tobaccocontrollaws.org/legislation/jordan/e-cigarettes/main-policies","Tobacco Control Laws: E-cigarettes in Jordan (Legal Consortium)"])
add('FJ',{"h":"⚖️ What Fijian law says about e-cigarettes","p":"Reliable secondary source: the "+TCL+" for Fiji, last updated 19 February 2021, read from an archived copy on 24 November 2026. It quotes the Tobacco Control Decree 2010 and its 2014 amendment and is not a customs page. The rules may have changed since 2021.","table":{"head":["Point","What the database says"],"rows":[
 ["Sale","Allowed with a minimum sales age and a retail registration; vending machine sales are banned (Decree 63 of 2010, secs. 14(1), 23(1))"],
 ["Use in public places","Banned in most, not all, smoke-free places: workplaces open to the public and public service vehicles, including ships and ferries (sec. 19(1))"],
 ["Advertising","Most direct and indirect advertising and promotion banned, including at point of sale; international TV, radio and print media are restricted rather than banned"],
 ["Product rules","No law on flavours, ingredients, nicotine strength, health warnings or device requirements"],
 ["Online sales","Not addressed, so allowed"]]},
 "list":["<strong>What this means:</strong> no strength or flavour limits were found in this source, and no traveller allowance; confirm with Fijian customs."]},
 ["Can I vape on a ferry in Fiji?","A legal database quoting the Tobacco Control Decree 2010 says use is prohibited in public service vehicles, which covers ships and ferries, and in most workplaces open to the public. It dates from February 2021."],
 ["https://www.tobaccocontrollaws.org/legislation/fiji/e-cigarettes/main-policies","Tobacco Control Laws: E-cigarettes in Fiji (Legal Consortium)"])
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
