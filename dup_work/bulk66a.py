import json
p='topics_new.json'
raw=open(p,encoding='utf8',newline='').read()
d=json.loads(raw)
def addsec(a,t,sec,faq,src):
    e=d[a][t]; e['sections'].append(sec); e.setdefault('faq',[]).append(faq); e['sources'].append(src)
addsec('Swiss','perfume',
 {"h":"\U0001F6EB What the Swiss aviation office says about sprays and bottles at security","p":"From the Federal Office of Civil Aviation (FOCA/BAZL) page \"Liquids\" (bazl.admin.ch, read 24 November 2026). It sets the rule for Swiss airports and is not Swiss International Air Lines wording.",
  "table":{"head":["Point","FOCA says"],"rows":[
   ["Standard rule","Containers of 100 ml or less, loose in one transparent resealable bag of at most 1 litre, one bag per person"],
   ["Always allowed","Liquids of any size needed for medical or dietary reasons, such as baby food"],
   ["Duty-free","Items of any size bought at a Swiss, EU or EFTA airport or on a Swiss, EU or EFTA plane, with the receipt, in an untampered sealed bag that you open only at the end of your journey"],
   ["From 26 June 2026 at Zurich","New provisions apply; CT scanners there let you carry containers up to 2 litres in hand luggage"],
   ["Other airports","CT scanners are not yet standard: the outbound and return airports, and any stopover, may apply different limits"]]},
  "list":["<strong>Not on the page:</strong> a rule on perfume or aerosol strength; check the airport and airline."]},
 ["Can I take a big perfume bottle from Zurich in my hand luggage?","The Swiss aviation office says Zurich's CT scanners allow containers up to 2 litres from 26 June 2026, but other airports on your trip may still apply the 100 ml rule."],
 ["https://www.bazl.admin.ch/en/liquids","Swiss Federal Office of Civil Aviation &mdash; Liquids"])
addsec('Austrian','alcohol',
 {"h":"\U0001F6EB What Vienna Airport says about bottles in your cabin bag","p":"From Vienna Airport's \"Security control\" page (viennaairport.com, read 24 November 2026). It is the airport operator's rule for flights leaving Vienna, not Austrian Airlines wording.",
  "table":{"head":["Point","Vienna Airport says"],"rows":[
   ["Container size","Liquids up to a container size of 2,000 ml may stay in your cabin bag"],
   ["Electronics","Electrical and electronic devices may also stay in the bag"],
   ["Screening","All liquids are screened; large quantities make extra checks and delays more likely"],
   ["Thermos flasks","Must be presented empty at the check; you can refill them afterwards"]]},
  "list":["<strong>Not on the page:</strong> a limit on alcohol strength or duty-free bags; connecting airports may still apply the 100 ml rule."]},
 ["Can I take a bottle of spirits in my cabin bag from Vienna?","Vienna Airport says liquids in containers up to 2,000 ml may remain in the cabin bag and are screened, but your connecting airport may be stricter, and Austrian's own limits for strong spirits still apply."],
 ["https://www.viennaairport.com/en/passengers/airport/security_control","Vienna Airport &mdash; Security control"])
addsec('Vueling','power',
 {"h":"\U0001F50B What Spain's airport operator Aena says about batteries","p":"From Aena's page \"Dispositivos electrónicos y baterías de litio\" (aena.es, read in Spanish on 24 November 2026). It covers the Spanish airport network, including Vueling's Barcelona base, and is not Vueling wording.",
  "table":{"head":["Point","Aena says"],"rows":[
   ["Loose spare batteries and power banks","Allowed in the cabin with conditions"],
   ["Protection","Each protected against short circuit (original packaging or a plastic sleeve) and kept away from other batteries and flammable objects"],
   ["Size","100 Wh each; up to 160 Wh with airline approval, and no more than 2 such batteries"],
   ["Watching them","Preferably kept where you can watch them"],
   ["In flight","Using an external battery to charge devices during the flight is not allowed"],
   ["Vapes with built-in battery","Allowed with conditions, no recharging in flight, up to 100 Wh (160 Wh with approval)"],
   ["Smart suitcase battery","Only if 2.7 Wh or less, or removed and carried in the cabin under the loose-battery rules"]]},
  "list":["<strong>Not on the page:</strong> a cap on the number of power banks at 100 Wh; check Vueling."]},
 ["Can I use my power bank in my seat on a Vueling flight from Spain?","Aena says using an external battery to charge devices during the flight is not allowed, and a power bank over 100 Wh up to 160 Wh needs airline approval, with at most 2."],
 ["https://www.aena.es/es/pasajeros/equipajes-controles/prepara-tu-equipaje/dispositivos-electronicos-y-baterias-de-litio.html","Aena &mdash; Dispositivos electronicos y baterias de litio (in Spanish)"])
open(p,'w',encoding='utf8',newline='').write(json.dumps(d,ensure_ascii=False,indent=1)+('\n' if raw.endswith('\n') else ''))
p2='vape_extra.json'
raw2=open(p2,encoding='utf8',newline='').read()
v=json.loads(raw2)
e=v['IE']
e['sections'].append({"h":"⚖️ What Ireland's Public Health Act 2023 says about nicotine inhaling products","p":"From the Public Health (Tobacco Products and Nicotine Inhaling Products) Act 2023 on the Irish Statute Book (sections 25 to 35, read 24 November 2026). It deals with selling and advertising, not with what a traveller may bring in.",
 "table":{"head":["Point","What the Act says"],"rows":[
  ["Licence","Selling tobacco or nicotine inhaling products by retail without a licence is an offence"],
  ["Self-service","Retail sale from a self-service display or vending machine is an offence"],
  ["Children","No sale to a child, and no sale by a child; no sale at events aimed at children"],
  ["Advertising","Advertising of nicotine inhaling products is banned in certain places, including cinemas"],
  ["Penalties","Summary: a class B fine or up to 6 months in prison for a first offence, a class A fine or up to 12 months after that; on indictment up to €500,000 or 3 years"]]},
 "list":["<strong>Not in the Act:</strong> a traveller allowance or an airport rule. Ask Irish Revenue before you bring in more than a device and a few bottles of liquid."]})
e.setdefault('faq',[]).append(["Can a shop in Ireland sell vapes from a self-service shelf?","No. The Public Health Act 2023 makes retail sale of nicotine inhaling products by self-service an offence, and sale to a child is also an offence."])
e['src']=(e.get('src') or [])+[["https://www.irishstatutebook.ie/2023/en/act/pub/0035/sec0028.html","Irish Statute Book: Public Health (Tobacco Products and Nicotine Inhaling Products) Act 2023"]]
open(p2,'w',encoding='utf8',newline='').write(json.dumps(v,ensure_ascii=False,indent=1)+('\n' if raw2.endswith('\n') else ''))
l=json.load(open('ladder_log.json',encoding='utf8'))
def lg(k,tier,s):
    x=l.get(k) or {}
    x.setdefault(tier,[]).append(s); x['date']='2026-11-24'; l[k]=x
lg('airline/swiss/perfume-aerosols','official',"read 2026-11-24: Swiss FOCA (BAZL) Liquids page, https://www.bazl.admin.ch/en/liquids")
lg('airline/austrian/alcohol','official',"read 2026-11-24: Vienna Airport Security control page, https://www.viennaairport.com/en/passengers/airport/security_control")
lg('airline/vueling/power-bank','official',"read 2026-11-24: Aena lithium battery page (Spanish airport operator), https://www.aena.es/es/pasajeros/equipajes-controles/prepara-tu-equipaje/dispositivos-electronicos-y-baterias-de-litio.html")
lg('country/ireland/vaping','official',"read 2026-11-24: Irish Statute Book Public Health (Tobacco Products and Nicotine Inhaling Products) Act 2023 sections 26, 28, 30, 35")
lg('airline/gulf-air/medication','official',"tried 2026-11-24: Bahrain Customs traveller PDF and mtt.gov.bh prohibited items PDF: both returned error pages to curl")
lg('country/belgium/vaping','official',"tried 2026-11-24: news.belgium.be disposable vape ban PDF HTTP 403; only press coverage of the 1 Jan 2025 ban returned by search")
open('ladder_log.json','w',encoding='utf8',newline='').write(json.dumps(l,ensure_ascii=False,indent=1).replace('\n','\r\n'))
print('ok')
