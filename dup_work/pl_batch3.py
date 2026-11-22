import json
D='C:/Users/yariv/Utility Website/can-i-take-this/'
cu=json.load(open(D+'country_unique.json',encoding='utf8'))
cu['plants']['lithuania']={'h':'Plants and seeds in Lithuania: what the State Plant Service said in a news report','p':[
"We could not open the State Plant Service site (vatzum.lrv.lt) or Lithuanian customs, so this section comes from an unofficial source: the news site Alkas.lt, in an article of 6 March 2022 that reports the Ministry of Agriculture and the State Plant Service. It is a news report, not an official page, and it is from 2022.",
"The ministry proposed setting up border plant health posts at Vilnius airport and at the national post operator Lietuvos paštas, because even small amounts of seeds or planting material can carry harmful bacteria or viruses. The article says plants for planting and seeds from outside the EU must travel through plant health posts and carry a phytosanitary certificate from the exporting country. It quotes the head of the Service's border control coordination unit: every consignment of plants, plant products and other objects from a non-EU country needs a certificate and a plant health check before it is released to the customer. It gives no luggage allowance and no seed quantity."],
'src':'Unofficial source, read on 22 November 2026: Alkas.lt, "Siūloma stiprinti įvežamų augalų ir sėklų patikrą" (6 March 2022, in Lithuanian), quoting the State Plant Service. The official Lithuanian pages returned a Cloudflare block.'}
json.dump(cu,open(D+'country_unique.json','w',encoding='utf8',newline='\n'),ensure_ascii=False,separators=(',',':'))
raw=open(D+'ladder_log.json','rb').read().decode('utf8');crlf='\r\n' in raw
L=json.loads(raw)
e=L['country/lithuania/plants-seeds']
e['other'].append('read 2026-11-22 (unofficial, 2b): Alkas.lt news article 2022-03-06 quoting Agriculture Ministry and State Plant Service on certificates, phytosanitary posts, Vilnius airport and post')
out=json.dumps(L,ensure_ascii=False,indent=1)
open(D+'ladder_log.json','wb').write((out.replace('\n','\r\n') if crlf else out).encode('utf8'))
