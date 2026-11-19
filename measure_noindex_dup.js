const fs=require('fs'),path=require('path');
function raw(f){return fs.readFileSync(f,'utf8')}
function text(h){const m=h.match(/<main[^>]*>([\s\S]*?)<\/main>/);h=m?m[1]:h;h=h.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/g,' ');return h.toLowerCase().replace(/[^a-z0-9 ]+/g,' ').split(/\s+/).filter(Boolean)}
const sh=w=>{const s=new Set();for(let i=0;i+5<=w.length;i++)s.add(w.slice(i,i+5).join(' '));return s};
const G={};
for(const top of ['airline','country']){for(const s of fs.readdirSync(top)){const d=path.join(top,s);if(!fs.statSync(d).isDirectory())continue;for(const c of fs.readdirSync(d)){const f=path.join(d,c,'index.html');if(fs.existsSync(f))(G[top+'/*/'+c]=G[top+'/*/'+c]||[]).push(f)}}}
if(fs.existsSync('pets'))for(const s of fs.readdirSync('pets')){const f=path.join('pets',s,'index.html');if(fs.existsSync(f))(G['pets']=G['pets']||[]).push(f)}
const imp={};for(const l of fs.readFileSync('gsc_baseline_pages_2026-10-07.csv','utf8').split(/\r?\n/).slice(1)){const a=l.split(',');imp[a[0].replace('https://canitakethis.co/','').replace(/\/$/,'')]=+a[2]||0}
const out=[];
for(const [g,fs_] of Object.entries(G)){const P=fs_.map(f=>{const h=raw(f);return{k:path.dirname(f).split(path.sep).join('/'),ni:/name="robots" content="[^"]*noindex/.test(h),w:text(h)}});
 for(const p of P)p.s=sh(p.w);const c={};for(const p of P)for(const x of p.s)c[x]=(c[x]||0)+1;
 const N=P.filter(p=>p.ni);if(!N.length)continue;
 let tot=0;const rows=N.map(p=>{let n=0;for(const x of p.s)if(c[x]>1)n++;const sh_=p.s.size?n/p.s.size:0;tot+=sh_;return{k:p.k,share:Math.round(sh_*100),words:p.w.length,uniq:p.s.size-n,imp:imp[p.k]||0}});
 console.log(g,'noindex',N.length,'avg shared',Math.round(tot/N.length*100)+'%','avg words',Math.round(N.reduce((a,p)=>a+p.w.length,0)/N.length),'pages >70% shared:',rows.filter(r=>r.share>70).length);
 out.push(...rows.map(r=>({g,...r})))}
out.sort((a,b)=>b.imp-a.imp);console.log(out.slice(0,15).map(r=>r.k+' imp'+r.imp+' shared'+r.share+'% words'+r.words+' uniqShingles'+r.uniq).join('\n'));
