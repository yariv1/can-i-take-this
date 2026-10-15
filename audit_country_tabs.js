// Country tab row (DESIGN_SYSTEM.md 8.23): every country-section page starts with Overview -> hub (hub exists); a tab is selected ONLY
// on its own landing page (page path == tab href); item pages (one medicine, the EU-to-UK page, ...) select no tab; never two tabs selected.
const fs=require("fs"),path=require("path");
let bad=[],n=0,landing=0,items=0;
function walk(d){for(const f of fs.readdirSync(d,{withFileTypes:true})){if(["node_modules",".git",".claude"].includes(f.name))continue;const p=path.join(d,f.name);if(f.isDirectory())walk(p);else if(f.name==="index.html"){
  const s=fs.readFileSync(p,"utf8");
  const row=s.match(/<nav class="tabs">((?:<a class="tab[^"]*" href="[^"]+">[^<]*<\/a>)+)<\/nav>/);if(!row)continue;
  const tabs=[...row[1].matchAll(/<a class="tab([^"]*)" href="([^"]+)">([^<]*)<\/a>/g)].map(m=>({on:/\bon\b/.test(m[1]),href:m[2],t:m[3]}));
  if(!tabs.some(t=>/^(Duty-free|Food|Plants)$/.test(t.t))||!tabs.some(t=>t.t==="Pets"))continue; // not a country tab row
  n++;
  const page="/"+path.relative(".",path.dirname(p)).split(path.sep).join("/")+"/";
  const isEU=/\/country\/european-union\//.test(tabs[0].href)||page.startsWith("/country/european-union/");
  if(!isEU){ if(tabs[0].t!=="Overview")bad.push(p+" Overview not first"); else if(!fs.existsSync("."+tabs[0].href+"index.html"))bad.push(p+" hub missing "+tabs[0].href); }
  const on=tabs.filter(t=>t.on);
  if(on.length>1)bad.push(p+" several tabs selected: "+on.map(t=>t.t).join(","));
  const own=tabs.find(t=>t.href===page);
  if(own){landing++; if(!own.on)bad.push(p+" landing page of tab "+own.t+" but it is not selected");}
  else{items++; if(on.length)bad.push(p+" item page but tab selected: "+on[0].t);}
  if(on.length===1&&on[0].href!==page)bad.push(p+" wrong tab selected: "+on[0].t);
}}}
walk(".");
if(bad.length){console.log("FAIL country tabs ("+bad.length+")\n"+bad.slice(0,15).join("\n"));process.exit(1)}
console.log("OK country tabs ("+n+" pages: "+landing+" landing pages, "+items+" item pages with no tab selected)");
