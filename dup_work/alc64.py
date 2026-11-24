import json
p='topics_new.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
assert json.dumps(d,ensure_ascii=False,indent=1)==raw or json.dumps(d,ensure_ascii=False,indent=1)+'\n'==raw
def add(air,sec,faq,src):
    a=d[air]['alcohol']; a['sections'].append(sec); a['faq'].append(faq); a['sources'].append(src); a['checked']="24 November 2026"
add('Swiss',
 {"h":"🛍️ What the Swiss aviation authority says about duty-free bottles","p":"Not from SWISS: from the Swiss Federal Office of Civil Aviation (FOCA/BAZL) page \"Liquids\", read on 24 November 2026. It is the national authority for the airports SWISS flies from in Switzerland.","table":{"head":["Question","FOCA rule"],"rows":[
  ["Normal carry-on liquids","Containers of 100 ml or less in one transparent resealable bag of max. 1 litre per person"],
  ["Duty-free of any size","Allowed if bought at a Swiss, EU or EFTA airport or on a Swiss, EU or EFTA plane, the receipt can be shown and the items are in an untampered sealed plastic bag"],
  ["The bag","Open it only at the end of your journey"],
  ["Stopovers","Checks can differ from the departure airport"],
  ["CT scanners","Zurich Airport scanners allow containers up to 2 litres in hand luggage; not yet standard everywhere"]]},
  "list":["<strong>What this means:</strong> a duty-free bottle over 100 ml stays in its sealed bag with the receipt; the SWISS 5 l and 70% limits above still apply."]},
 ["Can I carry a duty-free bottle over 100 ml on SWISS?","Switzerland's aviation office says yes, if it was bought at a Swiss, EU or EFTA airport or on board, the receipt can be shown and the bag is sealed and untampered. Open it only at the end of your journey. Checks at a stopover may differ."],
 ["https://www.bazl.admin.ch/en/liquids","Swiss Federal Office of Civil Aviation &mdash; Liquids"])
add('Norwegian',
 {"h":"🛍️ What Avinor says about duty-free bottles in Norway","p":"Not from Norwegian: from the airport operator Avinor (Oslo, Bergen and other Norwegian airports), page \"Useful information about carry-on and check-in luggage\", read on 24 November 2026.","table":{"head":["Question","Avinor rule"],"rows":[
  ["Carry-on liquids","Containers of max. 100 ml in a transparent resealable bag of up to 1 litre"],
  ["Duty-free bag","Must be sealed, with the receipt clearly visible inside the bag"],
  ["Screening","A sealed duty-free bag can be opened to analyse the liquid"],
  ["Connecting flight","Tell the security inspectors; they re-seal your goods in a new bag"],
  ["Above 70% alcohol","Not allowed in hand luggage or checked baggage"],
  ["Liquids in checked bags","Check with your airline; not all companies allow bottles in checked luggage"]]},
  "list":["<strong>What this means:</strong> on a Norwegian connection through an Avinor airport, say that you are transferring so your duty-free bottle is re-sealed."]},
 ["Can I carry duty-free alcohol on a connection in Norway?","Avinor says the duty-free bag must be sealed with the receipt visible inside. If you transfer, tell the security inspectors and they re-seal it in a new bag; it may be opened to analyse the liquid."],
 ["https://www.avinor.no/en/practical-info/baggage-rules/","Avinor &mdash; Carry-on and check-in luggage rules"])
add('ITA Airways',
 {"h":"🛍️ What EU rules say about duty-free bottles in the cabin","p":"Not from ITA Airways (its own hand baggage page blocked our reader): from the European Union's Your Europe page \"Luggage restrictions\", read on 24 November 2026. It applies at EU airports, including ITA's Italian ones.","table":{"head":["Question","EU rule"],"rows":[
  ["Normal carry-on liquids","Containers of max. 100 ml in a transparent plastic bag of max. 1 litre; larger containers go in checked baggage"],
  ["Duty-free liquids","Allowed in hand luggage from any airport or airline if the item and receipt stay sealed inside the red-bordered security bag"],
  ["The bag","Do not open it until your final destination"],
  ["Screening","Officers may open the bag and bottles; on a connection, tell them so the liquids are re-sealed in a new bag"],
  ["Medicines and baby food","The volume limit does not apply"]]},
  "list":["<strong>What this means:</strong> the same sealed-bag rule applies to a bottle on ITA; the 5 l and 70% alcohol limits above are ITA's own."]},
 ["Can I carry a duty-free bottle in my hand baggage on ITA Airways?","EU rules say yes at EU airports if the bottle and receipt stay sealed in the security bag until your final destination. If officers open it on a connection, tell them so it is re-sealed."],
 ["https://europa.eu/youreurope/citizens/travel/carry/luggage-restrictions/index_en.htm","Your Europe &mdash; Luggage restrictions"])
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
