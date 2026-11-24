import json
p='country_unique.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['plants']['estonia']
e['p'].append("The same EMTA page has a separate note on hemp seeds and mushroom spawn. Estonia's Act on Narcotic Drugs and Psychotropic Substances and Precursors prohibits growing cannabis to make narcotics and growing mushrooms that contain psilocin or psilocybin. Hemp varieties with no more than 0.3% THC grown for fibre may be cultivated, and their seeds are sold in large, labelled and certified packages, not by the piece. ")
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,separators=(',',':'))+('\n' if raw.endswith('\n') else ''))
