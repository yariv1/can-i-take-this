const fs=require('fs');const N=JSON.parse(fs.readFileSync('topics_new.json','utf8'));let n=0;
for(const a of Object.keys(N)){const e=N[a].alcohol;if(!e||!e.sections)continue;const s=e.sections.find(x=>/industry rule says about alcohol/.test(x.h));if(!s)continue;
 s.p='IATA, the airline industry body. Airports and customs can add stricter limits. Full table: <a href="/plane/alcohol/">alcohol on a plane</a>.';
 delete s.list; delete e.faq; n++;}
fs.writeFileSync('topics_new.json',JSON.stringify(N,null,1));console.log(n)
