const fs=require('fs'),path=require('path');
function text(f){let h=fs.readFileSync(f,'utf8');const m=h.match(/<main[^>]*>([\s\S]*?)<\/main>/);h=m?m[1]:h;h=h.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/g,' ');return h.toLowerCase().replace(/[^a-z0-9 ]+/g,' ').split(/\s+/).filter(Boolean)}
const sh=w=>{const s=new Set();for(let i=0;i+5<=w.length;i++)s.add(w.slice(i,i+5).join(' '));return s};
const pages=[];
for(const drug of fs.readdirSync('medication')){const d=path.join('medication',drug);if(!fs.statSync(d).isDirectory())continue;for(const c of fs.readdirSync(d)){const f=path.join(d,c,'index.html');if(fs.existsSync(f))pages.push({drug,c,f})}}
const cnt={};
for(const p of pages){p.w=text(p.f);p.s=sh(p.w);for(const x of p.s)cnt[x]=(cnt[x]||0)+1}
// shared = shingle appears on >=1 other page of same drug (siblings) ; use global count>=2 across drug group
const byDrug={};for(const p of pages)(byDrug[p.drug]=byDrug[p.drug]||[]).push(p);
let tot=0;const bands=[0,0,0,0,0];const rows=[];
for(const [dr,ps] of Object.entries(byDrug)){const c2={};for(const p of ps)for(const x of p.s)c2[x]=(c2[x]||0)+1;
 for(const p of ps){let sh2=0;for(const x of p.s)if(c2[x]>1)sh2++;p.share=p.s.size?sh2/p.s.size:0;tot++;bands[Math.min(4,Math.floor(p.share*5))]++}}
const avg=pages.reduce((a,p)=>a+p.share,0)/pages.length;
console.log('pages',pages.length,'avg words',Math.round(pages.reduce((a,p)=>a+p.w.length,0)/pages.length),'avg share',(avg*100).toFixed(0)+'%','bands 0-20,20-40,40-60,60-80,80-100:',bands.join(','));
const dr={};for(const p of pages){dr[p.drug]=dr[p.drug]||[0,0];dr[p.drug][0]+=p.share;dr[p.drug][1]++}
console.log(Object.entries(dr).map(([k,v])=>k+':'+Math.round(v[0]/v[1]*100)).join(' '));
