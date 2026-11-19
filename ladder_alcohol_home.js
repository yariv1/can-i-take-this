// Step 2a: customs/authority text already READ for the airline's home country (country_unique.json alcohol entries, sources named in each src). Idempotent.
const fs=require('fs');
const N=JSON.parse(fs.readFileSync('topics_new.json','utf8'));
const log=JSON.parse(fs.readFileSync('ladder_log.json','utf8'));
const C=require('./country_unique.json').alcohol;
const M={'United':'united-states','Southwest':'united-states','Frontier':'united-states','Alaska Airlines':'united-states','Etihad Airways':'united-arab-emirates','flydubai':'united-arab-emirates','Iberia':'spain','Vueling':'spain','Air Europa':'spain','Japan Airlines':'japan','IndiGo':'india','Air France':'france','South African Airways':'south-africa','Transavia':'netherlands','KLM':'netherlands','Oman Air':'oman','Asiana':'south-korea','Air Arabia':'united-arab-emirates','Royal Jordanian':'jordan','Malaysia Airlines':'malaysia','SunExpress':'turkey','Kuwait Airways':'kuwait','EgyptAir':'egypt','Ethiopian Airlines':'ethiopia','Kenya Airways':'kenya','Royal Air Maroc':'morocco','China Southern':'china','China Eastern':'china','Air China':'china','Icelandair':'iceland','Saudia':'saudi-arabia','Gulf Air':'bahrain','GOL':'brazil','Azul':'brazil','Aeromexico':'mexico','El Al':'israel','Arkia':'israel','Israir':'israel','Middle East Airlines':'lebanon','Avianca':'colombia','Wizz Air':'hungary','Singapore Airlines':'singapore','Virgin Australia':'australia'};
const NAME={'united-states':'the United States','united-arab-emirates':'the United Arab Emirates','south-africa':'South Africa','south-korea':'South Korea','saudi-arabia':'Saudi Arabia'};
const nm=c=>NAME[c]||c.replace(/(^|-)(\w)/g,(m,a,b)=>(a?' ':'')+b.toUpperCase());
let n=0;
for(const [air,c] of Object.entries(M)){
  const e=N[air]&&N[air].alcohol;const ce=C[c];
  if(!e||!ce||/Global rule applied/.test(ce.src||'')){console.log('skip',air);continue;}
  const h='What customs says about bringing alcohol into '+nm(c)+' ('+air+'\'s home country)';
  const ps=[].concat(ce.p);
  const sec={h,p:'This is the customs rule for people entering '+nm(c)+', not a rule stated by '+air+' for its cabin. '+ps[0]+(ps[1]?' '+ps[1]:'')+' '+(ce.src||'')};
  if(!e.sections.some(s=>s.h===h)){e.sections.push(sec);n++;}
  const key='airline/'+air.toLowerCase().replace(/ /g,'-')+'/alcohol';
  log[key]=Object.assign(log[key]||{},{reliable:[(log[key]&&log[key].reliable||[]).concat([])[0]||'IATA Dangerous Goods Regulations, Table 2.3.A: read, on the page','read 2026-11-16: customs/authority source for '+nm(c)+' as recorded in country_unique.json: '+String(ce.src).slice(0,160)],date:'2026-11-16'});
}
// TSA (read 2026-11-16) for United only; Turkey MFA customs page (read 2026-11-16) for SunExpress
fs.writeFileSync('topics_new.json',JSON.stringify(N,null,1));fs.writeFileSync('ladder_log.json',JSON.stringify(log,null,1));console.log('added',n);
