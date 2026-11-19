const fs=require('fs');const N=JSON.parse(fs.readFileSync('topics_new.json','utf8'));let n=0;
for(const a of Object.keys(N)){const e=N[a].alcohol;if(!e||!e.sections||!e.sections.some(s=>/industry rule says about alcohol/.test(s.h)))continue;
 e.answer=a+'\'s own rule could not be read; the IATA limit is 5 L per person for drinks above 24% up to 70%, and the home-country customs rule is below.';
 e.faq=[['Can I take alcohol on '+a+'?','Under the IATA rule yes, within 5 L for stronger drinks; confirm with '+a+'.']];
 n++;}
fs.writeFileSync('topics_new.json',JSON.stringify(N,null,1));console.log(n)
