import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['IT']
sec={"h":"💶 What the Italian customs agency says about tax on vape liquid","p":"From the Agenzia delle Dogane e dei Monopoli (ADM) directorial determination Prot. 74240 of 29 January 2026 (in Italian), read on 24 November 2026. It sets the consumption tax on inhalation liquids; it is not a traveller allowance.","table":{"head":["Point","What ADM says"],"rows":[
 ["Tax from 1 January 2026","Liquid inhalation products without combustion, with or without nicotine, pay a consumption tax of 18% (with nicotine) and 13% (without) of the excise on the equivalent number of cigarettes"],
 ["Rate from 1 February 2026","EUR 0.172623 per ml for liquids with nicotine; EUR 0.124672 per ml for liquids without nicotine"],
 ["Equivalence","1 ml of inhalation liquid counts as 5.63 conventional cigarettes (determination of 20 January 2015)"],
 ["Flavourings","Nicotine-free flavouring products for these liquids are taxed at the without-nicotine rate"],
 ["Exempt","Products authorised as medicines"]]},
 "list":["<strong>What this means:</strong> Italy taxes vape liquid by the millilitre. The determination says nothing about how much a traveller may carry tax-free, so ask Italian customs before you bring more than a device and a few pods."]}
e['sections']=[sec]+e['sections']
e['faq'].insert(1,["Is vape liquid taxed in Italy?","Yes. ADM sets a consumption tax of EUR 0.172623 per ml on liquids with nicotine and EUR 0.124672 per ml on liquids without nicotine from 1 February 2026. It does not set a traveller allowance in that determination."])
e['src']=[["https://www.adm.gov.it/portale/documents/20182/242317381/DET+%E2%80%93+74240-2026.pdf/92ecf170-16f0-d012-d0b6-f4630f192dca?t=1769851126925","ADM: directorial determination 74240 of 29 January 2026 on consumption tax for inhalation liquids"]]+e['src']
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
