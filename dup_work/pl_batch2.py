import json
D='C:/Users/yariv/Utility Website/can-i-take-this/'
cu=json.load(open(D+'country_unique.json',encoding='utf8'))
P=cu['plants']
P['slovakia']={'h':'What the Slovak Financial Administration says about non-commercial plant imports','p':[
"The Finančná správa (customs) page on non-commercial plant imports cites Act 405/2011 on plant health and Government Regulation 199/2005. It says the plant health rules allow a small amount of plants, plant products, food or feed to be carried into the EU when it is meant for use during the journey and by the owner or recipient, not for industry, trials, science or breeding, and when it poses no risk of spreading harmful organisms. In the same passage it says every consignment of plants and plant products must come with a phytosanitary certificate from the country of origin and is subject to plant health control on import.",
"It then lists the only items that need no certificate under Regulation (EU) 2019/2072: pineapples, coconuts, durians, bananas (including plantains) and dates, fresh or dried, from all third countries. For anything else it refers to the Central Control and Testing Institute in Agriculture (ÚKSÚP). The same page says customs offences by individuals can bring a reprimand, a fine or forfeiture of the goods, with fines of up to EUR 3,319.39; it does not say which fine applies to plants or seeds."],
'src':'Source read on 22 November 2026: Finančná správa (financnasprava.sk), Zákazy a obmedzenia, section "Dovoz rastlinného tovaru neobchodného charakteru" (in Slovak). A seed-specific rule is not on the page.'}
P['greece']={'h':'What the Greek authorities say about seeds arriving from outside the EU','p':[
"The Region of Attica (Directorate of Agricultural Economy and Veterinary Medicine) relays a September 2020 notice from the Ministry of Rural Development and Food. It says that seeds entering the EU must come with a phytosanitary certificate and undergo a plant health check at the Union's points of entry, citing Regulation (EU) 2016/2031, Articles 72 and 73.",
"The notice was triggered by unrequested packets of seeds posted to private people from China, Singapore, Taiwan, Vanuatu and Malaysia, with no certificate and no label saying they were seeds. People who receive such seeds must not plant them or touch them with bare hands, and should hand the packets with their wrapping to the local plant health service. It is a rule for posted seeds, not a traveller allowance, and it gives no quantity limit for seeds in hand luggage."],
'src':'Source read on 22 November 2026: Region of Attica, "Ταχυδρομικά πακέτα μικροποσοτήτων σπόρων που αποστέλλονται σε ιδιώτες από τρίτες χώρες" (28 September 2020, in Greek). It covers posted seeds, not luggage.'}
json.dump(cu,open(D+'country_unique.json','w',encoding='utf8',newline='\n'),ensure_ascii=False,separators=(',',':'))
raw=open(D+'ladder_log.json','rb').read().decode('utf8');crlf='\r\n' in raw
L=json.loads(raw)
def add(s,tier,o):
    k='country/%s/plants-seeds'%s
    e=L.setdefault(k,{'official':[],'reliable':[],'other':[],'date':'2026-11-22'})
    e.setdefault(tier,[]).append(o);e['date']='2026-11-22'
add('slovakia','official','read 2026-11-22: financnasprava.sk Zakazy a obmedzenia, plant import section (certificate, five exempt fruits, ÚKSÚP); mpsr.sk ministry page 403 on curl')
add('greece','official','read 2026-11-22: Region of Attica notice 2020-09-28 relaying ministry notice on seeds from third countries (certificate + inspection, Reg 2016/2031 arts 72-73); aia.gr Cloudflare 403 in browser pane, minagric.gr 403, not bypassed')
add('lithuania','other','2026-11-22: vatzum.lrv.lt phytosanitary page Cloudflare 403 on curl and in browser pane, muitine.lrv.lt 403 earlier; not bypassed; ladder step 2b: no named readable source found, global rule stays')
add('bulgaria','other','2026-11-22: customs.bg restrictions page navigation failed (no response); mzh.government.bg phytosanitary page read: describes service only, no traveller rule; ladder step 2b: no named readable source found, global rule stays')
out=json.dumps(L,ensure_ascii=False,indent=1)
open(D+'ladder_log.json','wb').write((out.replace('\n','\r\n') if crlf else out).encode('utf8'))
