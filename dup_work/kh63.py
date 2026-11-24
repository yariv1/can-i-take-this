import json
p='vape_extra.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
u=d['KH']
cust={"h":"⚖️ What the Royal Government decision of 21 October 2025 says",
"p":"From the Royal Government's Decision on measures to ban electronic smoking devices, substances and shisha, dated Phnom Penh, 21 October 2025, read on 24 November 2026 as an English translation hosted by Tobacco Control Laws (the translation is not an official government text).",
"table":{"head":["Point","What the decision says"],
"rows":[["What is banned","Importation, distribution, sale, advertisement, use, possession, manufacture and storage of all types and forms of electronic smoking devices and substances, and shisha"],
["Possession and use","Authorities act against anyone who uses or possesses them: verbal warning, confiscation, then a written warning and a signed stop-to-use contract"],
["Importers and sellers","Written warning, then revocation or suspension of the business certificate or licence"]]},
"list":["<strong>What this means:</strong> there is no personal allowance, and possession is covered as well as import. Leave the device and liquid at home when you fly to Cambodia."]}
u['sections']=[cust]+u['sections']
u['sections'][1]['p']=u['sections'][1]['p'].replace(" The official customs rule for travellers could not be read, so treat this as background and confirm with customs."," Treat it as background.")
u['sections'][1]['list']=["<strong>Not found:</strong> a customs notice for travellers; the government decision above is the rule text."]
u['faq'].insert(1,["Is there a personal allowance for vapes in Cambodia?","No. The Royal Government decision of 21 October 2025 bans importation and possession of all electronic smoking devices and substances, with no personal-use exception. Authorities confiscate and issue warnings."])
u['src']=[["https://assets.tobaccocontrollaws.org/uploads/legislation/Cambodia/Cambodia-Decision-to-Ban-ENDS-HTPs-Shisha.pdf","Royal Government of Cambodia: Decision to ban electronic smoking devices and shisha, 21 October 2025 (English translation by Tobacco Control Laws)"]]+u['src']
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
