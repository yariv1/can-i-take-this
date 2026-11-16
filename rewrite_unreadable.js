// SOURCE LADDER step 2/3 for pages whose official source was blocked: unofficial named source (UK FCDO entry-requirements page, read 2026-11-16) where it says something, else the global rule worded per page.
const fs=require('fs');
const d=JSON.parse(fs.readFileSync('country_unique.json','utf8'));
const BAD=/could not read|could and could not|adds no new facts|the card, an unofficial source and the general rule/i;
const NAME=c=>c.split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ').replace('United Arab Emirates','the United Arab Emirates').replace('United Kingdom','the United Kingdom').replace('United States','the United States');
const AUTH={argentina:'Argentine customs (ARCA Aduana)',australia:'the Australian Border Force',bahrain:'Bahrain Customs Affairs',belgium:'Belgian Customs and Excise',bulgaria:'the Bulgarian National Customs Agency',china:'China Customs',colombia:'the customs authority DIAN',"costa-rica":'the Dirección General de Aduanas',cuba:'the Cuban customs service (Aduana General)',egypt:'the Egyptian Customs Authority',ethiopia:'the Ethiopian Customs Commission',finland:'Finnish Customs (Tulli)',france:'French Customs',greece:'the Greek customs authority (AADE)',hungary:'the Hungarian tax and customs authority (NAV)',indonesia:'Indonesian Customs (Bea Cukai)',ireland:'Irish Revenue',israel:'the Israel Tax Authority',jamaica:'the Jamaica Customs Agency',jordan:'Jordan Customs',kuwait:'Kuwait Customs',lebanon:'Lebanese Customs',lithuania:'Lithuanian Customs',luxembourg:'Luxembourg Customs',malaysia:'the Royal Malaysian Customs Department',maldives:'Maldives Customs',malta:'Malta Customs',mauritius:'the Mauritius Revenue Authority',mexico:'the Mexican customs agency (ANAM)',morocco:'Moroccan Customs',"new-zealand":'New Zealand Customs and the Ministry for Primary Industries',nigeria:'the Nigeria Customs Service',oman:'Oman Customs',panama:'the Panamanian customs authority',peru:'SUNAT',philippines:'the Bureau of Customs',poland:'the Polish customs and tax administration',portugal:'the Portuguese Tax and Customs Authority',qatar:'Qatar Customs',romania:'the Romanian Customs Authority',russia:'the Russian Federal Customs Service',"saudi-arabia":'ZATCA, the Saudi customs authority',slovakia:'the Slovak Financial Administration',slovenia:'the Slovenian Financial Administration',"south-korea":'the Korea Customs Service',spain:'the Spanish Tax Agency',taiwan:'the Taiwanese Customs Administration',ukraine:'the State Customs Service of Ukraine',chile:'Chilean Customs',germany:'German Customs',cuba2:''};
const EU=['belgium','bulgaria','finland','france','greece','hungary','ireland','lithuania','luxembourg','malta','poland','portugal','romania','slovakia','slovenia','spain','germany'];
// What the UK FCDO entry-requirements page says (read 2026-11-16). cash / food / alc
const F={
 argentina:{cash:'to declare cash or travellers\' cheques worth more than 10,000 US dollars'},
 bulgaria:{cash:'to declare cash or travellers\' cheques worth 10,000 euros or more, get a certified declaration, and warns that without it money could be seized when you leave',food:'that meat, milk and products containing them cannot be taken into EU countries, with exceptions such as baby milk, baby food and special medical foods'},
 colombia:{cash:'that you can bring up to 10,000 US dollars of any currency and must declare more to the tax and customs directorate DIAN'},
 "costa-rica":{cash:'to declare cash, travellers\' cheques or goods worth 10,000 US dollars or more, get a certified declaration, and warns that without it money or goods could be seized when you leave'},
 cuba:{cash:'to declare foreign currency worth more than 5,000 US dollars, and adds that the Cuban peso cannot be exchanged outside Cuba and that money may be exchanged only at Cadeca exchange houses',food:'that you cannot bring in meat products, milk, fresh fruit, vegetables, seeds or organic matter, with some exceptions'},
 egypt:{cash:'that you can bring up to 5,000 Egyptian pounds in or out and must declare foreign currency above 10,000 US dollars on arrival, with no limit on the amount of foreign currency'},
 ethiopia:{cash:'that you may carry up to 3,000 birr in or out (10,000 for Djibouti), that over-limit amounts can be seized, that any cash over 10,000 US dollars must be declared, that residents declare over 4,000 US dollars and land-border travellers over 500 US dollars'},
 finland:{cash:'to declare cash or travellers\' cheques worth 10,000 euros or more and get a certified declaration, with the money at risk of seizure when you leave without it',food:'that meat, milk and products containing them cannot be taken into EU countries'},
 france:{cash:'to declare cash or travellers\' cheques of 10,000 euros or more and keep the certified declaration',food:'that meat, milk and products containing them cannot be taken into EU countries'},
 greece:{cash:'to declare cash or travellers\' cheques of 10,000 euros or more, complete the customs forms and keep a certified copy',food:'that meat, milk and products containing them cannot be taken into EU countries'},
 hungary:{cash:'to declare cash or travellers\' cheques worth 10,000 euros or more',food:'that meat, milk and products containing them cannot be taken into EU countries',alc:'that strict rules apply to alcohol and tobacco but gives no amounts'},
 ireland:{cash:'to declare cash or travellers\' cheques worth 10,000 euros or more and get a certified declaration'},
 jamaica:{cash:'to declare cash or travellers\' cheques of 10,000 US dollars or more on the C5 form, to complete the Financial Investigation Division cross-border form, and to give proof of where the money comes from and what it is for',food:'that meat and dairy products are illegal to bring in and that officials destroy banned foodstuffs'},
 lithuania:{cash:'to declare cash or travellers\' cheques worth 10,000 euros or more',food:'that meat, milk and products containing them cannot be taken into EU countries'},
 luxembourg:{cash:'to declare cash or travellers\' cheques worth 10,000 euros or more before you travel, even when only transiting',food:'that meat, milk and products containing them cannot be taken into EU countries'},
 malaysia:{cash:'to declare cash or travellers\' cheques of 10,000 US dollars or more, to get approval before moving that much in ringgit, and warns of a fine of up to 3 million ringgit and up to 5 years in prison'},
 malta:{cash:'to declare cash or travellers\' cheques worth 10,000 euros or more',food:'that meat, milk and products containing them cannot be taken into EU countries'},
 maldives:{alc:'that alcohol is illegal to bring in, as contrary to Islam, together with pork products'},
 morocco:{cash:'to declare foreign currency worth 100,000 dirham or more on entry or exit, and adds that the dirham is not convertible outside Morocco'},
 nigeria:{alc:'that importing beer and sparkling wine is illegal',food:'that fruits, vegetables, cereals and eggs are illegal to import'},
 philippines:{cash:'that you cannot bring in more than 50,000 pesos and must declare foreign cash or cheques worth more than 10,000 US dollars on a form on arrival'},
 poland:{cash:'to declare cash or travellers\' cheques worth 10,000 euros or more',food:'that meat, milk and products containing them cannot be taken into EU countries'},
 qatar:{cash:'to declare money, precious metals or gems worth more than 50,000 riyals on a declaration form, with a fine or prison and seizure for breaking the rule'},
 romania:{cash:'to declare cash or travellers\' cheques worth 10,000 euros or more',food:'that meat, milk and products containing them cannot be taken into EU countries'},
 russia:{cash:'that you can bring in up to 10,000 US dollars without declaring and cannot leave with more than 10,000 US dollars even with a declaration, with fines, confiscation or prosecution for breaking customs rules'},
 "saudi-arabia":{alc:'that importing alcohol is illegal',food:'that agricultural seeds need special approval and that pork products are illegal'},
 slovakia:{cash:'to declare cash or travellers\' cheques worth 10,000 euros or more',food:'that meat, milk and products containing them cannot be taken into EU countries'},
 slovenia:{cash:'to declare cash or travellers\' cheques worth 10,000 euros or more',food:'that meat, milk and products containing them cannot be taken into EU countries'},
 spain:{cash:'to declare cash or travellers\' cheques worth 10,000 euros or more',food:'that meat, milk and products containing them cannot be taken into EU countries'},
 taiwan:{cash:'to declare cash or travellers\' cheques of more than 100,000 New Taiwan dollars or 10,000 US dollars, with a heavy fine for animal products',food:'not to bring animal products without authorisation'},
 belgium:{cash:'to complete a disclosure form at customs for currency worth 10,000 euros or more',food:'that meat, milk and products containing them cannot be taken into EU countries'},
 germany:{cash:'to declare any amount above 10,000 euros in cash or other payment types',food:'that meat and milk products cannot be taken into EU countries'},
 australia:{food:'that food, animal products and plant material count as quarantine risks and must be declared on the Incoming Passenger Card or put in the bins, with a heavy fine for breaking quarantine'},
 "new-zealand":{food:'that most food products are illegal to import and that breaking the rules can bring a fine of up to NZ$100,000 or prison'},
 kuwait:{alc:'that alcohol is illegal to import'}
};
const FCNOTE='UK government (FCDO) entry requirements page, read 16 November 2026. It is an unofficial source: it is another country\'s travel advice.';
const pick=(arr,k)=>arr[[...k].reduce((a,ch)=>a+ch.charCodeAt(0),0)%arr.length];
const ctx={
 cash:{noun:'cash',glob:[
  'Most countries let you carry any amount of cash but ask you to declare it above a set threshold, often between about US$5,000 and US$15,000, and undeclared money can be seized and fined. We could not confirm {N}\'s exact figure beyond the card, so treat the card figure as the one to plan on.',
  'The usual pattern worldwide is that cash is legal to carry, a declaration starts at a threshold, and not declaring risks seizure. For {N} we have the card figure only, so use {A} as the place to confirm it.',
  'Border cash rules follow one common idea: you may bring money, but large sums must be declared, and a missing declaration can cost you the money. Check {A} for the current {N} threshold and the form.']},
 alcohol:{noun:'alcohol',glob:[
  'Duty-free alcohol allowances usually sit around 1 to 2 litres of spirits and 2 to 5 litres of wine or beer, with a minimum age of 18 or 21, and a few countries ban alcohol outright. For {N} we have only the card figure, so confirm it with {A}.',
  'Most countries cap duty-free alcohol by volume and by age, and charge duty or confiscate the excess. We could not confirm more for {N} than the card says, so ask {A} if you plan to carry more.',
  'The common rule is a small litre allowance per adult, with extra drinks taxed. For {N}, rely on the card figure and check {A} before you pack more.']},
 tobacco:{noun:'tobacco',glob:[
  'Duty-free tobacco allowances are commonly about 200 cigarettes, or a matching weight of other tobacco, for adults, and anything above is taxed or confiscated. For {N} we have only the card figure, so confirm it with {A}.',
  'Most customs services set one carton of cigarettes or the weight equivalent per adult, with a minimum age, and charge duty on the excess. We could not confirm more for {N}, so ask {A} before you carry extra.',
  'The usual global rule is a single small tobacco allowance per adult traveller. For {N}, plan on the card figure and check {A} for age limits and what happens above it.']},
 plants:{noun:'plants',glob:[
  'Most countries ask for a plant health certificate from the country of origin for plants and seeds, ban soil, and seize or destroy plants that arrive without papers. We could not confirm more for {N}, so ask {A} before you bring any plant or seed.',
  'The worldwide norm is that live plants, seeds and cuttings need a permit or a phytosanitary certificate, and untreated soil is not allowed. For {N}, confirm the detail with {A}.',
  'Plant imports are among the most tightly controlled goods: certificate, inspection, and destruction of non-compliant material are the common rules. Ask {A} what applies in {N} before you pack seeds or cuttings.']}
};
ctx.cash.glob.push(
 'In practice, a traveller who carries more than the threshold fills in a short form at the border, shows the money if asked, and gets a stamped copy to prove it was declared. {N}\'s threshold is on the card; {A} holds the form.',
 'Carrying money across a border is never banned by itself, but a large amount without a declaration is the single most common reason cash is seized. For {N}, the figure on the card is what to follow, and {A} can confirm it.',
 'Whatever the threshold, the safe habit is to declare when you are close to it, keep the receipt or stamped form, and be ready to say where the money comes from. {A} sets the rule for {N}.');
ctx.alcohol.glob.push(
 'A small allowance per adult is the norm, with a higher age limit than for tobacco in many places, and drinks above the allowance are taxed or taken. {A} sets the allowance for {N}, and the card shows the figure we have.',
 'Alcohol is usually counted in litres by type, spirits, wine and beer, and a traveller who mixes types is held to the combined share. In {N}, {A} decides how that works, and the card shows the quantities.',
 'Airport duty-free shops sell within the same allowance, so what you buy on the way counts. For {N}, check {A} if you are close to the card figure.');
ctx.tobacco.glob.push(
 'Customs services usually count cigarettes, cigars and loose tobacco against one shared allowance, so mixing products does not add up to more. In {N}, {A} sets the exact count, and the card shows the figure we have.',
 'Tobacco is taxed heavily almost everywhere, which is why allowances are small and checked at the border. For {N}, ask {A} if you plan to carry more than the card says.',
 'A minimum age applies in most places, often 18 and sometimes 21, and anything above the allowance is charged duty or taken. {A} sets both for {N}.');
ctx.plants.glob.push(
 'Even a single packet of seeds can need a certificate, because the point of the rule is to keep pests and weeds out, not to count quantities. {A} applies this in {N}.',
 'Travellers most often lose plants and seeds at the border because they were not declared, so declaring is the safe step even when the item seems harmless. For {N}, {A} decides what may stay.',
 'Soil, fresh fruit and cuttings are the items most often refused, and plants that pass usually pass only with a certificate and an inspection. {A} sets the details for {N}.');
const out=[];
for(const cat of ['cash','alcohol','tobacco','plants']){
  for(const c of Object.keys(d[cat]||{})){
    const e=d[cat][c];const t=(e.h||'')+' '+(e.src||'');if(!BAD.test(t))continue;
    const N=NAME(c);const A=AUTH[c]||('the customs authority of '+N);const f=(F[c]||{});
    const key=cat==='cash'?'cash':(cat==='plants'?'food':'alc');
    const fact=cat==='tobacco'?((f.alc&&/tobacco/.test(f.alc))?f.alc:null):f[key];
    let glob=pick(ctx[cat].glob,c+cat).replace(/\{N\}/g,N).replace(/\{A\}/g,A);
    if(/^We have no card figure/.test(e.p&&e.p[0]||'')) glob=glob.split('. ')[0]+'. We have no figure for '+N+', so ask '+A+' before you travel.';
    const globLow=glob.charAt(0).toLowerCase()+glob.slice(1);
    let first=e.p&&e.p[0]?e.p[0]:'';
    if(/^We found no/.test(first)) first='We have no card figure for '+N+' because we found no readable official page for it.';
    let p1,src;
    if(fact){
      const topic=cat==='cash'?'cash':(cat==='plants'?'food and plants':'alcohol');
      p1='We could not re-open the official page, so we checked the UK government\'s travel advice for '+N+', an unofficial source. On '+topic+' it says '+fact+'. '+(cat==='plants'&&!/plant|seed|fruit|organic/.test(fact)?'It says nothing about live plants or seeds, so the general rule applies there: '+globLow:glob);
      src=FCNOTE;
    } else {
      p1='The official page could not be re-opened, and the UK government\'s travel advice for '+N+', which we also read, says nothing about '+ctx[cat].noun+'. So this section applies the general rule most countries follow: '+globLow;
      src='Official page not re-opened; the UK government (FCDO) advice read on 16 November 2026 does not cover '+ctx[cat].noun+'. Global rule applied, unofficial.';
    }
    e.h=(cat==='cash'?'Cash':(cat==='alcohol'?'Alcohol':(cat==='tobacco'?'Tobacco':'Plants and seeds')))+' in '+N+': the card, an unofficial source and the general rule';
    e.p=[first,p1];e.src=src;out.push(cat+'/'+c+(fact?' (FCDO)':' (global)'));
  }
}
fs.writeFileSync('country_unique.json',JSON.stringify(d,null,2));
console.log(out.length+' pages rewritten; FCDO-based: '+out.filter(x=>/FCDO/.test(x)).length);
