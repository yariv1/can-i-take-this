const fs=require('fs');
function words(f){let h=fs.readFileSync(f,'utf8');const m=h.match(/<main[^>]*>([\s\S]*?)<\/main>/);h=m?m[1]:h;return h.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/g,' ').toLowerCase().replace(/[^a-z0-9 ]+/g,' ').split(/\s+/).filter(Boolean);}
for(const cat of ['tobacco','alcohol']){
const files=fs.readdirSync('country').map(s=>'country/'+s+'/'+cat+'/index.html').filter(f=>fs.existsSync(f));
const sh=files.map(f=>{const w=words(f),s=new Set();for(let i=0;i+5<=w.length;i++)s.add(w.slice(i,i+5).join(' '));return {s,n:w.length};});
const df=new Map();sh.forEach(x=>x.s.forEach(p=>df.set(p,(df.get(p)||0)+1)));
files.forEach((f,i)=>{if(!/austria|czechia|croatia|cyprus|germany|france|lebanon/.test(f))return;let n=0;sh[i].s.forEach(p=>{if(df.get(p)>1)n++});console.log(cat,f.split('/')[1],sh[i].n+'w',(100*n/sh[i].s.size).toFixed(0)+'%')});}
