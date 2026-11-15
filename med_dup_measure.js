const fs=require("fs");
function words(f){let h=fs.readFileSync(f,"utf8");const m=h.match(/<main[^>]*>([\s\S]*?)<\/main>/);h=m?m[1]:h;return h.replace(/<script[\s\S]*?<\/script>/g," ").replace(/<style[\s\S]*?<\/style>/g," ").replace(/<[^>]+>/g," ").replace(/&[a-z#0-9]+;/g," ").toLowerCase().split(/[^a-z0-9']+/).filter(Boolean)}
const files=[];for(const d of fs.readdirSync("medication")){if(d=="into")continue;const p="medication/"+d;if(!fs.statSync(p).isDirectory())continue;for(const c of fs.readdirSync(p)){const f=p+"/"+c+"/index.html";if(fs.existsSync(f))files.push(f)}}
const sh=files.map(f=>{const w=words(f),s=new Set();for(let i=0;i+5<=w.length;i++)s.add(w.slice(i,i+5).join(" "));return {s,n:w.length}});
const df=new Map();sh.forEach(o=>o.s.forEach(x=>df.set(x,(df.get(x)||0)+1)));
const r=files.map((f,i)=>{let n=0;sh[i].s.forEach(x=>{if(df.get(x)>1)n++});return {f,share:100*n/sh[i].s.size,words:sh[i].n}});
const avg=r.reduce((a,b)=>a+b.share,0)/r.length;r.sort((a,b)=>b.share-a.share);
console.log("pages",r.length,"avg share",avg.toFixed(1),"avg words",Math.round(r.reduce((a,b)=>a+b.words,0)/r.length));
console.log("over70",r.filter(x=>x.share>70).length,"over85",r.filter(x=>x.share>85).length);
console.log(r.slice(0,3),r.slice(-2));
