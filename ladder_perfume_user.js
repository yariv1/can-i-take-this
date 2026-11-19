const fs=require('fs');const N=JSON.parse(fs.readFileSync('topics_new.json','utf8'));let n=0;
for(const a of Object.keys(N)){const e=N[a].perfume;if(!e||!e.sections)continue;const s=e.sections.find(x=>/industry rule says about perfume/.test(x.h));if(!s)continue;
 e.answer=a+'\'s own rule could not be read. The IATA limit is 0.5 L or 0.5 kg per article and 2 L or 2 kg in total; the table below has the details.';
 s.p='IATA, the airline industry body. Airports and customs can add stricter limits.';
 delete s.list; delete e.faq; n++;}
fs.writeFileSync('topics_new.json',JSON.stringify(N,null,1));console.log(n)
