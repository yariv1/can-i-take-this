import json
p='country_unique.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['plants']['sweden']
print(len(e['p']),e['src'])
e['p'].append("The Swedish Environmental Protection Agency (Naturvårdsverket) adds a separate rule for invasive species: plants and animals on the EU list of invasive alien species may not be imported, sold, grown, transported or kept alive in Sweden, and its advice to travellers is plain: do not bring seeds or seedlings into Sweden. It also asks people returning from sensitive natural areas, such as the Arctic, to check that luggage, clothing and equipment carry no seeds, plant debris or insects.")
e['src'].append(["https://www.naturvardsverket.se/en/topics/invasive-alien-species/avoid-spreading-invasive-alien-species/","Swedish Environmental Protection Agency: Avoid spreading invasive alien species"]) if isinstance(e['src'],list) and e['src'] and isinstance(e['src'][0],list) else print('srcfmt',e['src'])
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,separators=(',',':'))+('\n' if raw.endswith('\n') else ''))
l=json.load(open('ladder_log.json',encoding='utf8'))
k='country/sweden/plants-seeds'
x=l.get(k) or {}
x.setdefault('official',[]).append("https://www.naturvardsverket.se/en/topics/invasive-alien-species/avoid-spreading-invasive-alien-species/")
x['date']='2026-11-24'
l[k]=x
open('ladder_log.json','w',encoding='utf8',newline='').write(json.dumps(l,ensure_ascii=False,indent=1).replace('\n','\r\n'))
