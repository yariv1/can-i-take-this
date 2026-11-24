import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['CR']
sec={"h":"🏥 What Costa Rica's Ministry of Health says about vapes","p":"From the Costa Rica Ministry of Health news item \"Listo el reglamento que regulará el uso de los vapeadores en el país\" of 8 August 2024 (read from an archived copy on 24 November 2026). It describes the regulation under Law 10,066 published in La Gaceta No. 146, not a customs rule for travellers.","table":{"head":["Point","What the Ministry says"],"rows":[
 ["What is regulated","Electronic nicotine delivery systems, similar systems without nicotine, heated-tobacco devices, their liquid, accessories and complementary goods"],
 ["Where use is banned","Health facilities, workplaces and their car parks, public and private schools, shopping centres, casinos, nightclubs, bars, restaurants, hotels, sports venues, event venues, lifts and children's leisure centres, among others"],
 ["Signs","Banned places must show the message \"PROHIBIDO FUMAR/VAPEAR\""],
 ["Sales to minors","Banned"],
 ["Start","In force on publication; 3 to 6 months to comply with some provisions"]]},
 "list":["<strong>What this means:</strong> the item does not ban importing a device or give a traveller allowance; where you may vape is tightly limited, so check the rules before you use it."]}
e['sections']=[sec]+e['sections']
e['faq'].insert(1,["Where can I vape in Costa Rica?","The Ministry of Health regulation under Law 10,066 bans use in health centres, workplaces, schools, shopping centres, bars, restaurants, hotels, sports venues, lifts and similar places, and requires \"PROHIBIDO FUMAR/VAPEAR\" signs."])
e['src']=[["https://www.ministeriodesalud.go.cr/index.php/prensa/61-noticias-2024/1922-listo-el-reglamento-que-regulara-el-uso-de-los-vapeadores-en-el-pais","Costa Rica Ministry of Health: regulation of vapes under Law 10,066 (8 August 2024)"]]+e['src']
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
