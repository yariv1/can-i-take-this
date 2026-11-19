const fs=require('fs'),path=require('path');
const SKIP=new Set(['node_modules','.git','.claude','.github']);
const pages=[];
(function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(SKIP.has(e.name))continue;const f=path.join(d,e.name);if(e.isDirectory()){walk(f);continue}if(e.name==='index.html')pages.push(f)}})('.');
const info=[];const sc={};
for(const f of pages){
  let t=fs.readFileSync(f,'utf8');
  const key=path.dirname(f).split(path.sep).join('/').replace(/^[.][/]?/,'');
  if(!key)continue;
  const noindex=/<meta[^>]+name=["']robots["'][^>]*noindex/i.test(t);
  const redirect=/http-equiv=["']refresh/i.test(t);
  const canon=(t.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)/i)||[])[1]||'';
  t=t.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<(header|footer|nav)[\s\S]*?<\/\1>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/gi,' ');
  const sents=t.split(/(?<=[.!?])\s+|\n+/).map(s=>s.replace(/\s+/g,' ').trim()).filter(s=>s.split(' ').length>=5);
  const type=key.split('/')[0]+(key.startsWith('airline/')?'/'+(key.split('/')[2]||'overview'):key.startsWith('country/')?'/'+(key.split('/')[2]||'hub'):key.startsWith('medication/')?'':'');
  info.push({key,type,noindex,redirect,canon,sents});
  for(const s of new Set(sents))sc[s]=(sc[s]||0)+1;
}
const bands=[0,100,200,300,500,1e9];const res={};
for(const p of info){
  const uw=[...new Set(p.sents)].filter(s=>sc[s]<=2).join(' ').split(' ').length;
  const tw=p.sents.join(' ').split(' ').length;
  p.uw=uw;p.tw=tw;
  const g=p.type;res[g]=res[g]||{total:0,noindex:0,indexable:0,b:[0,0,0,0,0]};
  const r=res[g];r.total++;if(p.noindex||p.redirect)r.noindex++;else{r.indexable++;let i=0;while(uw>=bands[i+1])i++;r.b[i]++}
}
let T=0,N=0,I=0;const B=[0,0,0,0,0];
for(const g of Object.keys(res)){const r=res[g];T+=r.total;N+=r.noindex;I+=r.indexable;r.b.forEach((x,i)=>B[i]+=x)}
console.log('TOTAL',T,'noindex/redirect',N,'indexable',I,'uniqueWordBands <100,100-199,200-299,300-499,500+',B.join(','));
for(const g of Object.keys(res).sort((a,b)=>res[b].total-res[a].total).slice(0,30))console.log(g,JSON.stringify(res[g]));
fs.writeFileSync(process.argv[2]||'m.json',JSON.stringify(info.map(p=>({k:p.key,t:p.type,n:p.noindex||p.redirect,uw:p.uw,tw:p.tw}))));
