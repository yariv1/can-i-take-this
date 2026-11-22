import json
D='C:/Users/yariv/Utility Website/can-i-take-this/'
cu=json.load(open(D+'country_unique.json',encoding='utf8'))
P=cu['plants']
P['luxembourg']={'h':"What Luxembourg's agriculture ministry says about plants from outside the EU",'p':[
"The Administration des services techniques de l'agriculture (ASTA), part of the Ministry of Agriculture, Viticulture and Rural Development, asks travellers not to bring any plant material into the EU from outside it. Its press release of 7 August 2023 names plants, seeds, roots, fruit and vegetables bought as souvenirs as ways for pests to reach gardens and fields.",
"It gives two examples. The oriental fruit fly (Bactrocera dorsalis) could damage plum and cherry orchards in Luxembourg, and invasions have already happened in Italy. The bacterium Xylella fastidiosa, spread by infected plants, killed millions of olive trees in Puglia. ASTA also says customs officers confiscate plants in personal luggage at EU entry points when no phytosanitary certificate from the country of origin comes with them, and it backs the EU campaign slogan: take photos, do not bring plants home. The release gives no quantity limit and says nothing about seeds separately."],
'src':"Source read on 22 November 2026: gouvernement.lu, press release \"La santé des plantes, c'est la santé pour tous\" (ASTA, 7 August 2023, in French). Quantity limits, seeds and fines are not on the page."}
P['poland']={'h':'What the Polish plant inspectorate (PIORiN) says about private imports of plants','p':[
"PIORiN splits plant goods carried by private people into two groups. Plants that are not for planting, such as fresh fruit other than the five exempt ones, fresh vegetables, cut flowers and leaves, need a phytosanitary certificate from the country of origin and may come in through any border crossing.",
"Plants for planting (potted plants, seeds for sowing, seedlings, cuttings, tubers, bulbs, rhizomes) follow commercial rules even for one traveller. They need the certificate and must enter through a post designated for phytosanitary border inspection. The person must open a TRACES NT account, notify the consignment at least 24 hours before arrival (4 hours by air), and pay an inspection fee set in Annex IV of Regulation (EU) 2017/625. The inspector then decides whether the plants may enter. Dried, frozen or otherwise processed fruit, vegetables and plant parts need no phytosanitary check. Ceuta, Melilla, the Canary Islands, Guadeloupe, French Guiana, Martinique, Réunion, Saint-Barthélemy and Saint-Martin count as non-EU for plant rules, while Madeira, the Azores, Northern Ireland, Switzerland and Liechtenstein count as EU."],
'src':'Source read on 22 November 2026: PIORiN (gov.pl), Rules for importing goods of plant origin from third countries ... by private individuals for personal use. Soil and penalties are not on the page.'}
P['slovenia']={'h':'What the Slovenian food safety and plant protection administration says','p':[
"The Administration of the Republic of Slovenia for Food Safety, Veterinary Sector and Plant Protection, under the Ministry of Agriculture, lists what counts as a plant in a traveller's bag: fruit, vegetables, potted plants, perennial seedlings, grafts, substrates, sowing material, cut flowers, branches and other plant parts, plus plant products such as dried grains and wood.",
"It says these can bring in harmful organisms, so some are banned from the EU altogether, and for most of the others import is allowed only with a phytosanitary certificate and after a phytosanitary inspection on prior notification. The page is marked as still under construction and gives no quantity limits, no fee and no separate seed rule."],
'src':'Source read on 22 November 2026: gov.si, Introduction of personal consignments of plants and products of animal and plant origin. The page says it is under construction.'}
P['romania']={'h':'What the Romanian plant health authority (ANF) says about border checks','p':[
"The Autoritatea Națională Fitosanitară (ANF) states in a press release dated 3 March 2023 that its inspectors check seeds, plants and plant products intended for planting at border control points. Cereals and other plant products meant for eating or processing are checked by the food safety and veterinary authority (ANSVSA) instead, because EU rules treat them as no phytosanitary risk to crops.",
"For the list of plants and products that need a phytosanitary certificate, ANF points to Annex XI, Parts A and B of Regulation (EU) 2019/2072, and to Annex VII for the special entry conditions. The release speaks about border controls in general; it does not give a traveller allowance, a seed quantity or a fine."],
'src':'Source read on 22 November 2026: ANF press release "Comunicat de presă" of 3 March 2023 (anfdf.ro, in Romanian). It does not address luggage allowances.'}
P['ireland']={'h':'What Irish Revenue says about plants brought in by passengers','p':[
'The Revenue Tax and Duty Manual "Importation of plants and plant products" (last reviewed January 2026) names the Department of Agriculture, Food and the Marine (DAFM) as the authority that checks plants and plant products arriving from outside the EU. Revenue\'s Customs Service only refers consignments to DAFM.',
"Approved border control posts for plants are Dublin Port, Dublin Airport and Rosslare Europort. For passengers the manual says personal consignments of plants or plant products carried as luggage should be notified to DAFM plant health inspectors at the relevant post. It gives no allowance and no seed rule for travellers."],
'src':'Source read on 22 November 2026: Revenue, Tax and Duty Manual, Importation of plants and plant products (PDF, last reviewed January 2026).'}
P['malta']={'h':"What Malta's Plant Protection Directorate does at the border",'p':[
"A Malta Public Service article of 1 February 2023 describes the Plant Protection Directorate as the body that protects plants, seeds and other propagation material from pests and diseases. Its Monitoring and Control Unit manages import controls and the internal market and inspects greenhouses, fields, nurseries and public gardens.",
"Its diagnostic laboratory tests plant samples for bacteria, viruses, moulds, nematodes and insects, including imported plants. The article does not set a traveller allowance, a seed rule or a penalty, so for a specific plant or seed, ask the Directorate before you travel."],
'src':'Source read on 22 November 2026: Malta Public Service, "The work of the Plant Protection Directorate" (1 February 2023). It describes the Directorate, not a traveller allowance.'}
json.dump(cu,open(D+'country_unique.json','w',encoding='utf8',newline='\n'),ensure_ascii=False,separators=(',',':'))
raw=open(D+'ladder_log.json','rb').read().decode('utf8');crlf='\r\n' in raw
L=json.loads(raw)
for s,o in [('luxembourg','read 2026-11-22: gouvernement.lu ASTA press release 2023-08-07 (plants, fruit fly, Xylella, confiscation without certificate); no quantity limit'),
 ('poland','read 2026-11-22: PIORiN gov.pl private-import rules page (two groups, TRACES NT, 24h/4h notification, fee)'),
 ('slovenia','read 2026-11-22: gov.si personal consignments page (list of plants, certificate + inspection); page under construction'),
 ('romania','read 2026-11-22: ANF press release 2023-03-03 on border checks, Annex XI/VII Reg 2019/2072; no traveller allowance'),
 ('ireland','read 2026-11-22: Revenue Tax and Duty Manual importation of plants (Jan 2026): DAFM, BCPs Dublin Port/Airport/Rosslare, passenger consignments notified to DAFM'),
 ('malta','read 2026-11-22: publicservice.gov.mt Plant Protection Directorate article 2023-02-01; no traveller allowance; customs.gov.mt plant health page no response')]:
    k='country/%s/plants-seeds'%s
    e=L.setdefault(k,{'official':[],'reliable':[],'other':[],'date':'2026-11-22'})
    e['official']=e.get('official',[])+[o];e['date']='2026-11-22'
out=json.dumps(L,ensure_ascii=False,indent=1)
open(D+'ladder_log.json','wb').write((out.replace('\n','\r\n') if crlf else out).encode('utf8'))
