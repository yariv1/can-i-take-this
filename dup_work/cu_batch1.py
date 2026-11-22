import json
D='C:/Users/yariv/Utility Website/can-i-take-this/'
cu=json.load(open(D+'country_unique.json',encoding='utf8'))
cu['tobacco']['malta']={'h':'What the Maltese tax and customs administration says about tobacco','p':[
"The Malta Tax and Customs Administration page on travellers' allowances says that from a non-EU country you may bring tobacco for your own use, if you are at least 17, free of import duty, excise and VAT: 200 cigarettes, or 100 cigarillos (cigars of at most 3 grams each), or 50 cigars, or 250 g of smoking tobacco, or a mix of them in proportion.",
"For tobacco bought in another EU country, excise is paid where it was bought. The page gives guide levels, not hard limits: 800 cigarettes, 400 cigarillos, 200 cigars or 1 kg of smoking tobacco. Customs decide whether it is for your own use by looking at who you are, why you hold it, where it was found and how you travel, any papers, the kind of goods and the quantity."],
'src':'Source read on 22 November 2026: Malta Tax and Customs Administration (mtca.gov.mt), Travellers Allowances on Accompanied Goods from Non-EU or EU Countries.'}
cu['alcohol']['malta']={'h':'What the Maltese tax and customs administration says about alcohol','p':[
"From a non-EU country, travellers aged 17 or over may bring, free of duty and VAT: in total 1 litre of drinks above 22% alcohol (or undenatured ethyl alcohol of 80% and over), or 2 litres of drinks at 22% or below, or a mix in proportion (for example half a litre of the stronger and one litre of the weaker). On top of that come 16 litres of beer and 4 litres of still wine.",
"Goods other than tobacco and alcohol are free up to a value of EUR 430. For alcohol bought in another EU state, the page gives guide levels: 10 litres of spirit drinks, 20 litres of intermediate products, 90 litres of wine (at most 60 of them sparkling) and 110 litres of beer. They are evidence for own use, not limits."],
'src':'Source read on 22 November 2026: Malta Tax and Customs Administration (mtca.gov.mt), Travellers Allowances on Accompanied Goods from Non-EU or EU Countries.'}
cu['cash']['malta']={'h':'What the Maltese tax and customs administration says about cash','p':[
"The Malta Tax and Customs Administration says that anyone entering, leaving or passing through Malta with EUR 10,000 or more in cash, or the equivalent in other currencies, must declare it to customs under subsidiary legislation 233.07. Unaccompanied cash of the same value entering, leaving or passing through Malta must be declared by the sender, the recipient or a representative within 30 days of the Commissioner asking for a disclosure declaration.",
"Cash is wider than banknotes. The page, citing Article 2 of Regulation (EU) 2018/1672, counts currency, bearer-negotiable instruments, commodities used as highly liquid stores of value (such as gold) and prepaid cards. You declare on the EU Cash Declaration Form, with a separate non-EU form and additional sheets available. The page states no penalty."],
'src':'Source read on 22 November 2026: Malta Tax and Customs Administration (mtca.gov.mt), Information to Travellers on Cash Declaration.'}
cu['cash']['greece']={'h':'What the Greek customs authority (AADE) says about cash','p':[
"The AADE Cash Declaration page says the electronic cash declaration applies to every person entering or leaving the European Union via Greece with EUR 10,000 or more in cash. It is submitted through an online application on the AADE site, with user manuals and a list of frequently asked questions.",
"One exception is stated: the declaration for unaccompanied cash is still submitted in handwritten form, and electronic submission for that category is announced for the future. The page names Decision 3039 of 28 July 2025 and Regulation (EU) 2018/1672 as the legal basis. It gives no penalty."],
'src':'Source read on 22 November 2026: AADE (Independent Authority for Public Revenue), Cash Declaration (aade.gr/en/liquid-assets-declaration).'}
json.dump(cu,open(D+'country_unique.json','w',encoding='utf8',newline='\n'),ensure_ascii=False,separators=(',',':'))
raw=open(D+'ladder_log.json','rb').read().decode('utf8');crlf='\r\n' in raw
L=json.loads(raw)
for k,o in [('country/malta/tobacco','mtca.gov.mt travellers allowances page'),('country/malta/alcohol','mtca.gov.mt travellers allowances page'),('country/malta/cash','mtca.gov.mt information to travellers on cash declaration'),('country/greece/cash','aade.gr cash declaration page (browser pane)')]:
    e=L.setdefault(k,{'official':[],'reliable':[],'other':[],'date':'2026-11-22'})
    e['official']=e.get('official',[])+['read 2026-11-22: '+o];e['date']='2026-11-22'
out=json.dumps(L,ensure_ascii=False,indent=1)
open(D+'ladder_log.json','wb').write((out.replace('\n','\r\n') if crlf else out).encode('utf8'))
