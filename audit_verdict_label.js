// Amber verdict badge = "Some rules apply" on every page (DESIGN_SYSTEM.md 8.24). Airline cards keep their own specific verdict headlines; only the retired labels are banned.
const fs=require("fs"),path=require("path");
const BANNED=/class="(?:verdict|qv)">\s*(Check first|Check before you go|Allowed with conditions)\s*</;
let bad=[],n=0;
function walk(d){for(const f of fs.readdirSync(d,{withFileTypes:true})){if(["node_modules",".git",".claude"].includes(f.name))continue;const p=path.join(d,f.name);if(f.isDirectory())walk(p);else if(f.name.endsWith(".html")){const s=fs.readFileSync(p,"utf8");if(BANNED.test(s))bad.push(p);if(/class="(?:verdict|qv)">\s*Some rules apply\s*</.test(s))n++;}}}
walk(".");
if(bad.length){console.log("FAIL retired verdict label on",bad.length,"pages, e.g.",bad.slice(0,5).join(" "));process.exit(1)}
console.log("OK verdict labels ("+n+" pages with the amber label)");
