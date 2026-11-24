import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
u=d['NP']
cust={"h":"🛃 What the Nepal Tourism Board says visitors may bring duty-free",
"p":"From the Nepal Tourism Board trade website page \"Custom Formalities\" (trade.ntb.gov.np, read 24 November 2026). The Board is a government body, not the customs department, and the page does not mention e-cigarettes or e-liquid.",
"table":{"head":["Point","What the page says"],
"rows":[["Duty-free tobacco","200 cigarettes or 50 cigars"],
["Declaration","All baggage must be declared and cleared on arrival; the Green Channel is for travellers with no dutiable goods"],
["Dutiable goods","Anyone carrying dutiable articles uses the Red Channel for detailed clearance"]]},
"list":["<strong>What this means:</strong> vapes are not named in the duty-free list. If you bring more than a device for your own use, use the Red Channel and ask customs."]}
u['sections']=[cust]+u['sections']
u['sections'][1]['p']=u['sections'][1]['p'].replace(" The official customs rule for travellers could not be read, so treat this as background and confirm with customs."," Treat it as background.")
u['sections'][1]['list']=["<strong>Not found:</strong> a Nepal customs rule that names e-cigarettes for travellers."]
u['faq'].insert(1,["What can I bring into Nepal duty-free?","The Nepal Tourism Board lists 200 cigarettes or 50 cigars, one 1.15-litre bottle of distilled liquor and 15 rolls of film. Vapes are not named, so declare extras at the Red Channel."])
u['src']=[["https://trade.ntb.gov.np/travel-essentials/custom-formalities/","Nepal Tourism Board: Custom Formalities"]]+u['src']
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
