import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['PE']
sec={"h":"⚖️ What Peru's Law 32159 says about vaping","p":"From Law No. 32159, \"Ley del control del consumo de productos de tabaco, nicotina o sucedáneos de ambos para la protección de la vida y la salud\", published in the official gazette El Peruano (read on 24 November 2026, in Spanish). It regulates use, sale, advertising and labelling; it does not set a traveller allowance.","table":{"head":["Point","What the law says"],"rows":[
 ["Where vaping is banned","Health and education sites, public offices, workplaces, closed public spaces and any public transport (art. 6); closed public space means any publicly accessible place with a roof and two or more walls"],
 ["Signs","\"ESTÁ PROHIBIDO FUMAR Y VAPEAR EN ESTE ESTABLECIMIENTO\" must be posted in those places (art. 7)"],
 ["Selling","Banned to or by minors, and in vending machines unless access is limited to adults (art. 14)"],
 ["Advertising nicotine products","Banned on free-to-air TV and radio, at health and education sites, in public offices and within 500 m of schools; must say \"Prohibida su venta a menores de 18 años. Este producto contiene nicotina\" (art. 9)"],
 ["Packaging","Nicotine product packs carry a warning on at least 30% of each main face (art. 11); makers and importers must tell Digesa the composition of nicotine and nicotine-free vaping systems (art. 12)"],
 ["Flavours","Names of sweets or desserts attractive to minors may not be used (art. 13)"]]},
 "list":["<strong>What this means:</strong> you may not vape in an airport hall, on a bus or in a closed public space in Peru. The law applies to anyone who imports these products but gives no number a traveller may carry; ask SUNAT."]}
e['sections']=[sec]+e['sections']
e['faq'].insert(1,["Where is vaping banned in Peru?","Law 32159 bans smoking and vaping in health and education sites, public offices, workplaces, closed public spaces and all public transport, and requires signs saying so."])
e['src']=[["https://busquedas.elperuano.pe/dispositivo/NL/2343203-1","El Peruano: Law 32159 on the control of tobacco, nicotine and substitutes"]]+e['src']
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
