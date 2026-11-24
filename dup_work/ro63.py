import json
p='country_unique.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
e=d['plants']['romania']
e['p'].append("ANF's article \"Ce plante nu puteți aduce în bagaj la intrarea în UE\" (3 November 2026) answers the traveller question directly: since 14 December 2019 there is no small-quantity or personal-use exemption, so almost any plant, fruit or seed from outside the EU needs a phytosanitary certificate from the country of origin. Only five fruits are exempt, from all non-EU countries: pineapple, coconut, banana (including plantain), dates, and durian (fresh only; dried durian still needs a certificate).")
e['p'].append("It adds that the luggage exemption in Regulation 2019/2122 covers only the border-post check, not the certificate, and that planting material (seeds for sowing, seedlings, bulbs) still goes through a border control post with inspection. Non-conforming goods found are confiscated and destroyed, and the traveller can also be fined. Between EU countries no certificate is needed, and a plant bought in another member state for your own garden needs no plant passport, but an online order of passport-category plants does.")
e['src']=e['src']+" Also read on 24 November 2026: anfdf.ro, \"Ce plante nu puteți aduce în bagaj la intrarea în UE\", 3 November 2026."
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,separators=(',',':'))+('\n' if raw.endswith('\n') else ''))
