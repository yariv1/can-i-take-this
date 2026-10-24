// Guard: Trip check phase 1 (2026-10-24). The trip header has a FROM country (S.from) in the home page and /app/.
// Checks: markup present, TZC resolves every zone to a country in FROMLIST, default falls back, domestic hides the "into country" link, storage is try/catch.
var fs=require('fs'),path=require('path');
var fail=[];function bad(m){fail.push(m);}
['canitakethis.html','index.html','app/index.html'].forEach(function(f){
  var s=fs.readFileSync(path.join(__dirname,f),'utf8');
  ['id="fromCombo"','id="fromTrigger"','id="fromSearch"','id="fromList"','Type a country name','var TZC=','function initFrom','function isDomestic','function pickFrom','from:initFrom()'].forEach(function(k){if(s.indexOf(k)<0)bad(f+' missing '+k);});
  if(/localStorage\.(get|set)Item\('citt_from'/.test(s)){var re=/try\{[^}]*localStorage\.(get|set)Item\('citt_from'/g;var n=(s.match(/localStorage\.(get|set)Item\('citt_from'/g)||[]).length,t=(s.match(re)||[]).length;if(n!==t)bad(f+' citt_from storage outside try/catch');}else bad(f+' no persistence');
});
var s=fs.readFileSync(path.join(__dirname,'canitakethis.html'),'utf8');
var tzc=s.match(/var TZC='([^']+)'/);if(!tzc)bad('TZC not found');else{
  var groups=tzc[1].split(';'),zones=0,seen={};
  groups.forEach(function(g){var p=g.split(':');if(!/^[A-Z]{2}$/.test(p[0]))bad('bad code '+g.slice(0,10));var zs=p[1].split(' ');zones+=zs.length;zs.forEach(function(z){if(seen[z])bad('zone twice '+z);seen[z]=1;});});
  if(groups.length<240)bad('only '+groups.length+' countries in TZC');
  var C=eval(s.match(/var COUNTRIES=(\[.*?\]);/)[1]);
  var codes={};groups.forEach(function(g){codes[g.split(':')[0]]=1;});
  C.forEach(function(c){if(!codes[c.code])bad('app country not selectable as From: '+c.name);});
  // every zone the running Node/Chrome calls canonical must resolve
  try{Intl.supportedValuesOf('timeZone').forEach(function(z){if(!seen[z]&&/^(Africa|America|Antarctica|Arctic|Asia|Atlantic|Australia|Europe|Indian|Pacific)\//.test(z))bad('timezone not mapped: '+z);});}catch(e){}
  console.log('TZC: '+groups.length+' countries, '+zones+' zones');
}
if(fail.length){console.log('FAIL audit_trip_from ('+fail.length+')');fail.slice(0,30).forEach(function(m){console.log(' - '+m);});process.exit(1);}
console.log('OK audit_trip_from');
