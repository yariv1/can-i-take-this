// Every country-section page's tab row starts with Overview -> the hub page, and that hub exists.
const fs=require("fs"),path=require("path");
let bad=[],n=0;
function walk(d){for(const f of fs.readdirSync(d,{withFileTypes:true})){if(["node_modules",".git",".claude"].includes(f.name))continue;const p=path.join(d,f.name);if(f.isDirectory())walk(p);else if(f.name==="index.html"){const s=fs.readFileSync(p,"utf8");const row=s.match(/<nav class="tabs">(<a class="tab[^"]*" href="\/country\/[a-z0-9-]+\/(?:alcohol|vaping|tobacco|cash|plants-seeds)\/">[\s\S]*?)<\/nav>/)||s.match(/<nav class="tabs">(<a class="tab[^"]*" href="\/country\/[a-z0-9-]+\/">Overview[\s\S]*?)<\/nav>/);if(!row)continue;if(/\/country\/european-union\//.test(row[1])&&!/Overview/.test(row[1]))continue;n++;const m=row[1].match(/^<a class="tab[^"]*" href="(\/country\/[a-z0-9-]+\/)">Overview<\/a>/);if(!m)bad.push(p+" no Overview first");else if(!fs.existsSync("."+m[1]+"index.html"))bad.push(p+" hub missing "+m[1]);}}}
walk(".");
if(bad.length){console.log("FAIL country tabs",bad.slice(0,10).join("\n"));process.exit(1)}
console.log("OK country tabs ("+n+" pages)");
