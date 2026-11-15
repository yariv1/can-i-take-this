// Writes thin_country.json: country category pages (vaping, tobacco, alcohol, plants-seeds) whose text is mostly shared with sibling pages (>=TH%), excluding pages with >=2 GSC clicks (thin_keep_indexed.json). build.js sets those to noindex. Run on a build made WITHOUT thin_country.json (delete it first), then rebuild.
const fs=require('fs');const TH=+(process.argv[2]||65);
function words(f){let h=fs.readFileSync(f,'utf8');const m=h.match(/<main[^>]*>([\s\S]*?)<\/main>/);h=m?m[1]:h;return h.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/g,' ').toLowerCase().replace(/[^a-z0-9 ]+/g,' ').split(/\s+/).filter(Boolean);}
const keep=new Set(JSON.parse(fs.readFileSync('thin_keep_indexed.json','utf8')));
const out=[];
for(const cat of ['vaping','tobacco','alcohol']){
  const files=fs.readdirSync('country').map(s=>'country/'+s+'/'+cat+'/index.html').filter(f=>fs.existsSync(f));
  const sh=files.map(f=>{const w=words(f),s=new Set();for(let i=0;i+5<=w.length;i++)s.add(w.slice(i,i+5).join(' '));return s;});
  const df=new Map();sh.forEach(s=>s.forEach(x=>df.set(x,(df.get(x)||0)+1)));
  files.forEach((f,i)=>{let n=0;sh[i].forEach(x=>{if(df.get(x)>1)n++;});const share=sh[i].size?100*n/sh[i].size:0;const u='/'+f.replace('/index.html','/');if(share>=TH&&!keep.has(u))out.push(u);});
}
fs.writeFileSync('thin_country.json',JSON.stringify(out));console.log(out.length);
