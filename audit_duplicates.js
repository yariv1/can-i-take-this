// Duplicate-content audit: per sibling group, share of each page's 5-word shingles that also appear on another page of the same group.
const fs=require('fs'),path=require('path');
const root='C:/Users/yariv/Utility Website/can-i-take-this';
function text(file){
  let h=fs.readFileSync(file,'utf8');
  const m=h.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  h=m?m[1]:h;
  h=h.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/g,' ');
  return h.toLowerCase().replace(/[^a-z0-9\u00c0-\u024f ]+/g,' ').split(/\s+/).filter(Boolean);
}
function shingles(w){const s=new Set();for(let i=0;i+5<=w.length;i++)s.add(w.slice(i,i+5).join(' '));return s;}
const groups={};
function add(g,f){(groups[g]=groups[g]||[]).push(f);}
// airline/<slug>/<cat>/index.html, country/<slug>/<cat>/index.html, food/<slug>/index.html, blog/*/index.html
for(const top of ['airline','country']){
  for(const s of fs.readdirSync(path.join(root,top))){
    const d=path.join(root,top,s);if(!fs.statSync(d).isDirectory())continue;
    for(const c of fs.readdirSync(d)){
      const f=path.join(d,c,'index.html');if(fs.existsSync(f))add(top+'/*/'+c,f);
    }
    const f0=path.join(d,'index.html');if(fs.existsSync(f0))add(top+'/*/ (main page)',f0);
  }
}
for(const top of ['food','blog','medication','pets']){
  const dd=path.join(root,top);if(!fs.existsSync(dd))continue;
  for(const s of fs.readdirSync(dd)){const f=path.join(dd,s,'index.html');if(fs.existsSync(f))add(top+'/*',f);}
}
const out=[];
for(const [g,files] of Object.entries(groups)){
  if(files.length<3)continue;
  const sh=files.map(f=>shingles(text(f)));
  const df=new Map();
  for(const s of sh)for(const x of s)df.set(x,(df.get(x)||0)+1);
  const res=sh.map((s,i)=>{let shared=0;for(const x of s)if(df.get(x)>1)shared++;return {f:path.relative(root,files[i]).replace(/\\/g,'/'),n:s.size,dup:s.size?shared/s.size:0};});
  const avg=res.reduce((a,r)=>a+r.dup,0)/res.length;
  const avgWords=res.reduce((a,r)=>a+r.n,0)/res.length;
  res.sort((a,b)=>b.dup-a.dup);
  out.push({g,pages:files.length,avgDup:avg,avgShingles:Math.round(avgWords),worst:res.slice(0,2)});
}
out.sort((a,b)=>b.avgDup-a.avgDup);
for(const o of out)console.log(`${(o.avgDup*100).toFixed(0)}% shared | ${o.pages} pages | ~${o.avgShingles} words | ${o.g} | worst: ${o.worst.map(w=>w.f+' '+(w.dup*100).toFixed(0)+'%').join(', ')}`);
