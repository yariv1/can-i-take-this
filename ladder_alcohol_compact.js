const fs=require('fs');const N=JSON.parse(fs.readFileSync('topics_new.json','utf8'));let n=0;
for(const a of Object.keys(N)){const e=N[a].alcohol;if(!e||!e.sections)continue;const s=e.sections.find(x=>/industry rule says about alcohol/.test(x.h));if(!s||!s.table)continue;
 const r=s.table.rows;if(r.length<5)continue;
 s.table.rows=[r[0],r[1],['Cabin bag at security','Liquid limits also apply at the checkpoint; see the liquids rule for '+a]];
 s.p=s.p.replace(/ The .* pages we read[^.]*\./,'').replace(/ [^.]*own pages could not be read for us\./,'')+' Full IATA table: <a href="/plane/alcohol/">alcohol on a plane</a>.';
 n++;}
fs.writeFileSync('topics_new.json',JSON.stringify(N,null,1));console.log(n)
