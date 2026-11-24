import json
p='topics_new.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
def add(air,cat,sec,faq,src):
    a=d[air][cat]; a['sections'].append(sec); a.setdefault('faq',[]).append(faq); a['sources'].append(src); a['checked']="24 November 2026"
add('El Al','liquids',
 {"h":"🇺🇸 What the US Transportation Security Administration says for flights to and from the US","p":"Not from El Al: from the TSA page \"Liquids, Aerosols, and Gels Rule\" (US Department of Homeland Security), read on 24 November 2026. It applies to screening at US airports, including on El Al's US routes.","table":{"head":["Point","TSA rule"],"rows":[
 ["Carry-on liquids","One quart-size bag of containers of 3.4 oz (100 ml) or less per item; larger containers go in checked baggage"],
 ["Exemptions","Medications, and infant and child nourishments"],
 ["Duty free on a connection to the US","Over 100 ml allowed only if bought internationally, packed by the retailer in a tamper-evident bag showing no tampering, with the original receipt for a purchase made within 48 hours"],
 ["TSA recommendation","Pack liquids over 100 ml in checked baggage even when they are in a sealed bag"],
 ["Alarms","Any liquid that alarms gets extra screening, and may be refused"]]},
 "list":["<strong>What this means:</strong> for a flight into the US, a duty-free bottle needs its sealed bag, the receipt and a purchase within 48 hours; the safest place for it is the checked bag."]},
 ["Can I carry duty-free liquids over 100 ml to the US on El Al?","The TSA says only in a retailer-sealed tamper-evident bag with the original receipt, bought within 48 hours, on a connecting trip; it recommends putting them in checked baggage anyway."],
 ["https://www.tsa.gov/travel/security-screening/liquids-aerosols-gels-rule","TSA &mdash; Liquids, Aerosols, and Gels Rule"])
add('Middle East Airlines','liquids',
 {"h":"🇬🇧 What the UK Government says about liquids at UK airports","p":"Not from MEA (its site is closed to our region and has no archived copy): from the GOV.UK guide \"Hand luggage restrictions at UK airports: liquids\", read on 24 November 2026. It applies at UK airports, where MEA flies to London.","table":{"head":["Point","GOV.UK rule"],"rows":[
 ["Containers","Most UK airports: nothing above 100 ml through security, even part full"],
 ["Some airports","May allow containers up to 2 litres; check your airport"],
 ["Bag","If the airport asks for one: a single transparent resealable bag of a litre or less, about 20 cm x 20 cm, not tied, one per person"],
 ["Always allowed up to 2 litres","Essential medical liquids, special dietary needs, baby food and milk"],
 ["Airport or in-flight purchases","Allowed if sealed in the security bag at purchase with the receipt sealed in and visible, and not opened before your final destination"],
 ["Frozen liquids","Cannot be carried in hand luggage"]]},
 "list":["<strong>What this means:</strong> check the UK airport and any airport you change planes at, including on the return journey."]},
 ["What are the liquid limits on a flight from London with MEA?","GOV.UK says most UK airports allow containers of 100 ml or less, with exemptions for medical liquids, baby food and sealed duty-free; some airports allow up to 2 litres. Check your airport."],
 ["https://www.gov.uk/hand-luggage-restrictions/liquids","GOV.UK &mdash; Hand luggage restrictions: liquids"])
add('Middle East Airlines','perfume',
 {"h":"🇪🇺 What EU rules say about perfume bought at the airport","p":"Not from MEA: from the European Union's Your Europe page \"Luggage restrictions\", read on 24 November 2026. It applies when you leave an EU airport on an MEA flight.","table":{"head":["Point","EU rule"],"rows":[
 ["Perfume in a cabin bag","In a container of 100 ml or less, inside a transparent plastic bag of a litre at most; bigger bottles go in checked baggage"],
 ["Duty-free perfume","Allowed in the cabin if the bottle and its receipt stay sealed in the security bag from the shop"],
 ["Opening the bag","Not before your final destination; officers may open it, and on a connection you tell them so it is re-sealed"]]},
 "list":["<strong>What this means:</strong> perfume you already own over 100 ml goes in the hold; a bottle from the duty-free shop stays in its sealed bag."]},
 ["Can I take a large duty-free perfume on MEA from an EU airport?","EU rules say yes while the bottle and receipt stay sealed in the shop's security bag until your final destination. Perfume you bring from home over 100 ml goes in checked baggage."],
 ["https://europa.eu/youreurope/citizens/travel/carry/luggage-restrictions/index_en.htm","Your Europe &mdash; Luggage restrictions"])
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
