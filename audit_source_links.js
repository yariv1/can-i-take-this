// Guard (DS 8.28): a country card that says OFFICIAL SOURCE or UNOFFICIAL SOURCE in its footer must also carry the link(s) in its "Helpful sources" box.
const fs=require('fs'),path=require('path');
let bad=0,n=0,total=0;
(function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(e.name==='node_modules'||e.name.startsWith('.'))continue;const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(e.name==='index.html'&&p.split(path.sep).includes('country')){
  total++;const h=fs.readFileSync(p,'utf8');const m=h.match(/<div class="pass (?:go|warn|stop|info) print">[\s\S]*?<div class="src">([\s\S]*?)<\/div>/);if(!m)continue;
  if(/src-ok|src-un/.test(m[1])){n++;const card=m[0];if(!/class="hitem" href="https?:\/\//.test(card)){bad++;if(bad<10)console.log('SOURCE LABEL WITHOUT LINK',p)}}
}}})(__dirname);
if(bad){console.log(bad+' cards name a source but show no link');process.exit(1)}console.log('OK source links ('+n+' cards, '+total+' country pages)');
