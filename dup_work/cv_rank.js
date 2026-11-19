const fs=require('fs'),path=require('path');
function html(f){let h=fs.readFileSync(f,'utf8');const m=h.match(/<main[^>]*>([\s\S]*?)<\/main>/);h=m?m[1]:h;return h.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ');}
function words(h){return h.replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/g,' ').toLowerCase().replace(/[^a-z0-9\u00c0-\u024f ]+/g,' ').split(/\s+/).filter(Boolean);}
function sh(w){const s=[];for(let i=0;i+5<=w.length;i++)s.push(w.slice(i,i+5).join(' '));return s;}
const sets={},df=new Map();
for(const s of fs.readdirSync('country')){const f=path.join('country',s,'vaping','index.html');if(!fs.existsSync(f))continue;const S=new Set(sh(words(html(f))));sets[s]=S;for(const x of S)df.set(x,(df.get(x)||0)+1);}
const r=Object.entries(sets).map(([s,S])=>{let n=0;for(const x of S)if(df.get(x)>1)n++;return [s,Math.round(n/S.size*100),S.size];}).sort((a,b)=>b[1]-a[1]);
console.log(r.map(x=>x.join(':')).join(' '));
