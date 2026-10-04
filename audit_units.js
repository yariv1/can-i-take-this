const fs=require('fs'),path=require('path');
const root=__dirname;
const U=require(root+'/units.js');
const skip=new Set(['node_modules','.git','.claude','assets']);
const files=[];
(function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(skip.has(e.name))continue;const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(e.name==='index.html')files.push(p);}})(root);
const MET=/\d\s*(cm|centimet\w*|kgs?|kilo\w*)\b/i, IMP=/\d\s*(inch(es)?|lbs?|pounds?|″|")|\d\s*in\b(?!\w)/i;
const dec=s=>s.replace(/&times;/g,'×').replace(/&nbsp;/g,' ').replace(/&ndash;/g,'–').replace(/&mdash;/g,'—').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&rsquo;/g,"'");
const resImp={},resMet={},split={};let changedPages=0,pages=0,tblSkip=0;
for(const f of files){
  let h=fs.readFileSync(f,'utf8');const rel=path.relative(root,f).replace(/\\/g,'/');pages++;
  h=h.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'').replace(/<head[\s\S]*?<\/head>/i,'').replace(/<svg[\s\S]*?<\/svg>/gi,m=>m.replace(/<(?!text|\/text|tspan|\/tspan)[^>]*>/g,''));
  h=h.replace(/<table[\s\S]*?<\/table>/gi,m=>{const first=(m.match(/<tr[\s\S]*?<\/tr>/i)||[''])[0];if(/inch/i.test(first)&&/centi?m/i.test(first)){tblSkip++;return ''}return m});
  const nodes=h.split(/<[^>]+>/).map(dec).filter(x=>x.trim());
  let changed=false;
  for(const s of nodes){const i=U.convertText(s,'imp'),m=U.convertText(s,'met');if(i!==s||m!==s)changed=true;
    if(MET.test(i))(resImp[rel]=resImp[rel]||[]).push(i.trim().slice(0,90));
    if(IMP.test(m))(resMet[rel]=resMet[rel]||[]).push(m.trim().slice(0,90));}
  if(changed)changedPages++;
  if(/^(blog|guides)\//.test(rel)){
    // text joined across inline tags only: split by block tags
    const blocks=h.split(/<\/?(?:p|div|li|td|th|h[1-6]|figcaption|section|ul|ol|tr|table|figure|main|header|footer|nav|a|button|br)\b[^>]*>/i).map(b=>dec(b.replace(/<[^>]+>/g,'')));
    for(const b of blocks){const hasU=/\d\s*(cm|kg|lb|inch|in\b)/i.test(b);if(!hasU)continue;
      const c=U.convertText(b,'imp')!==b||U.convertText(b,'met')!==b;
      const pn=h.split(/<[^>]+>/).map(dec).some(n=>b.includes(n)&&n.length>=b.length-1&&false);
      void pn;void c;}
    // stat-strip pattern: number group with no unit followed by label starting with unit word
    const re=/<div class="stat-num">([^<]*)<\/div><div class="stat-label">([^<]*)<\/div>/g;let m;
    while((m=re.exec(h))){if(/^(inches|inch|cm|centimet|kg|lb|pounds|kilogram)/i.test(m[2].trim())||/^\d[\d×x ]*$/.test(m[1].trim())&&/(inches|cm|kg|lb)/i.test(m[2]))(split[rel]=split[rel]||[]).push(m[1]+' | '+m[2]);}
  }
}
const sum=o=>Object.values(o).reduce((a,b)=>a+b.length,0);
console.log({pages,changedPages,tableSkips:tblSkip,metricLeftInImperial:sum(resImp),imperialLeftInMetric:sum(resMet),statSplit:sum(split)});
const show=(o,k)=>{console.log('\n== '+k);let c=0;for(const [p,a] of Object.entries(o)){if(c++>=16)break;console.log(p,'|',[...new Set(a)].slice(0,3).join(' || '))}};
show(resImp,'metric left in imperial mode');show(resMet,'imperial left in metric mode');show(split,'stat strips with unit in label');
