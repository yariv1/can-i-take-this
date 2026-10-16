/* Guard: footer source state vs links, and medication OFFICIAL only on verified rows (DS 8.28). */
const fs=require('fs'),path=require('path');
const html=fs.readFileSync('canitakethis.html','utf8');
const mv=html.slice(html.indexOf('MED_VER_V1'));
const verified=new Set();
{const re=/(?:MED_VER=\{|\}\)\(\),)\s*'?([A-Za-z ]+?)'?:\(function/g;let m;while((m=re.exec(mv)))verified.add(m[1].trim().toLowerCase().replace(/ /g,'-'));}
const foodVerified=new Set(Object.keys(require('./food_detail.js').DETAIL).map(x=>x.toLowerCase().replace(/ /g,'-')));
const bad=[];let n=0;
function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(e.name.startsWith('.')||e.name==='node_modules')continue;const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(e.name==='index.html')chk(p);}}
function chk(p){const t=fs.readFileSync(p,'utf8').replace(/<script[\s\S]*?<\/script>/g,'');const re=/<div class="pass [^"]*print">([\s\S]*?)<div class="src">([\s\S]*?)<\/div><\/div><\/div>/g;let m;
 while((m=re.exec(t))){n++;const body=m[1],foot=m[2];const lab=(foot.match(/class="src-(ok|un|no)"/)||[])[1]||'none';const links=/class="hitem" href="http/.test(body);
  const parts=p.split(path.sep);
  if(parts[0]==='medication'&&parts[1]!=='into'){ if(lab==='none')bad.push(p+' medication card without source state'); if(lab==='ok'&&!links)bad.push(p+' OFFICIAL without link'); if(lab==='no'&&links)bad.push(p+' global rules but has a link'); if(lab==='ok'&&!verified.has(parts[2])&&!/Confirm the rule for/.test(foot))bad.push(p+' OFFICIAL on an unverified rule without the confirm sentence'); if(lab==='un')bad.push(p+' unofficial unexpected'); if(lab==='no'&&/(controlled|banned|prohibited) in [A-Z]/.test(body.replace(/<[^>]+>/g,' ')))bad.push(p+' unverified card states a country-specific fact'); }
  else if(parts[0]==='food'||parts[0]==='pets'){ if(lab==='none')bad.push(p+' card without source state'); if(lab==='ok'&&!links)bad.push(p+' OFFICIAL without link'); if(lab==='no'&&links)bad.push(p+' global rules but has a link'); if(lab==='un')bad.push(p+' unofficial unexpected'); if(lab==='ok'&&!(parts[0]==='food'&&foodVerified.has(parts[1]))&&!/Confirm the rule for/.test(foot))bad.push(p+' OFFICIAL on an unverified rule without the confirm sentence'); }
  else if(parts[0]==='country'){ if((lab==='ok'||lab==='un')&&!links)bad.push(p+' '+lab+' without link'); if(lab==='no'&&links)bad.push(p+' global rules but has a link'); }
  if(/not checked|have not checked/i.test(foot))bad.push(p+' forbidden wording "not checked"');
 }}
walk('.');
console.log(bad.length?'FAIL source state ('+n+' cards, verified countries: '+[...verified].join(',')+'): '+bad.slice(0,10).join(' ; '):'OK source state ('+n+' cards, verified medication countries: '+[...verified].join(',')+')');process.exit(bad.length?1:0);
