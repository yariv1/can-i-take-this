const fs=require('fs'),path=require('path');
const root=process.argv[2];
function text(file){let h=fs.readFileSync(file,'utf8');const m=h.match(/<main[^>]*>([\s\S]*?)<\/main>/);h=m?m[1]:h;h=h.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/g,' ');return h.toLowerCase().replace(/[^a-z0-9\u00c0-\u024f ]+/g,' ').split(/\s+/).filter(Boolean);}
function sh(w){const s=new Set();for(let i=0;i+5<=w.length;i++)s.add(w.slice(i,i+5).join(' '));return s;}
const groups={};const add=(g,f)=>{(groups[g]=groups[g]||[]).push(f)};
for(const top of ['airline','country']){for(const s of fs.readdirSync(path.join(root,top))){const d=path.join(root,top,s);if(!fs.statSync(d).isDirectory())continue;for(const c of fs.readdirSync(d)){const f=path.join(d,c,'index.html');if(fs.existsSync(f))add(top+'/*/'+c,f);}const f0=path.join(d,'index.html');if(fs.existsSync(f0))add(top+'/*/ (main)',f0);}}
for(const top of ['food','blog','medication','pets']){const dd=path.join(root,top);if(!fs.existsSync(dd))continue;for(const s of fs.readdirSync(dd)){const f=path.join(dd,s,'index.html');if(fs.existsSync(f))add(top+'/*',f);}}
let t60=0,t70=0,tot=0;const rows=[];
for(const [g,files] of Object.entries(groups)){if(files.length<3)continue;const S=files.map(f=>sh(text(f)));const df=new Map();for(const s of S)for(const x of s)df.set(x,(df.get(x)||0)+1);let a=0,b=0;S.forEach(s=>{let c=0;for(const x of s)if(df.get(x)>1)c++;const d=s.size?c/s.size:0;if(d>=.6)a++;if(d>=.7){b++;console.log(g,files[S.indexOf(s)],(d*100).toFixed(0))}});t60+=a;t70+=b;tot+=files.length;rows.push([g,files.length,a,b]);}
console.log('TOTAL pages',tot,'>=60%:',t60,'>=70%:',t70);rows.filter(r=>r[2]).sort((x,y)=>y[2]-x[2]).forEach(r=>console.log(r.join(' | ')));
