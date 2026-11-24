import json
p='country_unique.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['tobacco']['poland']
e['p'].append("The tax administration's (KAS) travellers' guide, as summarised by Dziennik Gazeta Prawna on 22 June 2024, says you may mix tobacco products as long as the shares of each limit add up to no more than 100%. A traveller arriving by plane can bring 100 cigarettes (50% of the limit) and 25 cigars (50%). The same guide puts the general goods limit at 430 euros by air or sea and 300 euros by other transport, and says tobacco, alcohol, medicines and fuel in the tank or a can do not count towards that value limit.")
e['src']=e['src']+" Dziennik Gazeta Prawna, 22 June 2024, summary of the KAS travellers' guide (read 24 November 2026; the guide itself was not opened)."
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,separators=(',',':'))+('\n' if raw.endswith('\n') else ''))
