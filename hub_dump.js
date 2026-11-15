const fs=require('fs');
function txt(p){let h=fs.readFileSync(p,'utf8');const m=h.match(/<main[^>]*>([\s\S]*?)<\/main>/);h=(m?m[1]:h).replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&#128706;/g,'').replace(/\s+/g,' ');return h;}
for(const c of process.argv.slice(2)){
 console.log('######## '+c);
 for(const cat of ['alcohol','tobacco','cash','plants-seeds','vaping']){
  const p='country/'+c+'/'+cat+'/index.html';if(!fs.existsSync(p))continue;
  let t=txt(p);const i=t.indexOf('ENTERING');t=t.slice(i>=0?i:0);
  const j=t.indexOf('Helpful sources');
  console.log('['+cat+'] '+t.slice(0,j>0?Math.min(j,900):900).replace(/Some rules apply Read the rule below\.|Allowed Usually fine/,'').trim());
 }
}
