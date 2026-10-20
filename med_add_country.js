/*
 Medication expansion helper (session 32). Adds ONE country's verified medication data to canitakethis.html.
 Read MEDICATION_WORKFLOW.md first. Never add a rule that was not read in full on an official page.

 Two kinds of data:
 1) CATEGORY-LEVEL NOTE (the official page describes controlled substances as a category, no ingredient list):
      node med_add_country.js note spec.json
    spec.json = {"country":"Poland","c":["lines for controlled medicines"],"o":["lines for other medicines"],"auth":[{"label":"...","url":"https://..."}]}
    Result: MED_NOTE entry + MED_AUTH links. Controlled ingredients then show amber "It depends on whether it counts as a controlled substance"
    plus the official lines; non-controlled ones show the "o" lines. Footer = OFFICIAL SOURCE + "Confirm the rule for X at the official source".
 2) PER-MEDICINE ROWS (the official page or list names the ingredients):
      node med_add_country.js verified spec.json
    spec.json = {"country":"Australia","rules":{"Amphetamine":"rx","Codeine":"permit"},"verBlock":"<js text of the IIFE body ending with return {...};>","auth":"[{label:'..',url:'..'}]"}
    levels: ban | permit | rx | ok (see medCountryVerdict in canitakethis.html). verBlock returns an object ingredient -> {src:[...],tag,head,lines:[...]}. `tag` is NOT free text: it is one or more labels from the status vocabulary TAG_STATUS in canitakethis.html separated by | (e.g. 'Prescription needed|Limit applies'); the details go in head/lines. DESIGN_SYSTEM 8.40; guard audit_tags.js.
    Look at an existing country block inside MED_VER (e.g. Australia, Singapore) and copy its shape. Footer = OFFICIAL SOURCE + "These rules come from the official ...".
 After either: node build.js, run audit_source_state.js, audit_internal_links.js and the usual audits (DEPLOY_FLOW.md), add new URLs to GSC_INDEXING_TRACKER.md.
 New /medication/<drug>/<country>/ pages appear only for per-medicine rows and only for the brands listed in MED_PAGE.
*/
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const FILE = path.join(ROOT, 'canitakethis.html');
const [, , mode, specFile] = process.argv;
if (!mode || !specFile) { console.log('usage: node med_add_country.js note|verified spec.json'); process.exit(1); }
const spec = JSON.parse(fs.readFileSync(specFile, 'utf8'));
let h = fs.readFileSync(FILE, 'utf8');
const key = /^[A-Za-z]+$/.test(spec.country) ? spec.country : "'" + spec.country + "'";

function setAuth(authText) {
  const s = h.indexOf('var MED_AUTH={'), e = h.indexOf('\n};', s);
  const L = h.slice(s, e).split('\n');
  const li = L.findIndex(l => l.startsWith(key + ':[') || l.startsWith("'" + spec.country + "':["));
  const nl = key + ':' + authText + ',';
  if (li >= 0) L[li] = nl; else L.splice(1, 0, nl);
  h = h.slice(0, s) + L.join('\n') + h.slice(e);
}
const authFromJson = a => '[' + a.map(x => '{label:' + JSON.stringify(x.label).replace(/—/g, '\\u2014') + ',url:' + JSON.stringify(x.url) + '}').join(',') + ']';

if (mode === 'note') {
  if (h.indexOf("\n" + key + ":{c:[") >= 0) throw new Error(spec.country + ' already has a MED_NOTE entry: edit it by hand');
  const anchor = 'var MED_NOTE={\n';
  if (h.split(anchor).length !== 2) throw new Error('MED_NOTE anchor not found');
  const entry = key + ':{c:' + JSON.stringify(spec.c || []) + ',o:' + JSON.stringify(spec.o || []) + '},\n';
  h = h.replace(anchor, () => anchor + entry);
  setAuth(authFromJson(spec.auth));
} else if (mode === 'verified') {
  // MED_RULES level per ingredient (create the ingredient key when absent)
  const i = h.indexOf('var MED_RULES='), j = h.indexOf('/*MED_VER_V1*/', i);
  let seg = h.slice(i, j);
  for (const [ing, lv] of Object.entries(spec.rules)) {
    const k = "'" + ing + "':{";
    const n = seg.split(k).length - 1;
    if (n === 1) seg = seg.replace(k, () => k + key + ":'" + lv + "',");
    else if (n === 0) { const close = seg.lastIndexOf('};'); seg = seg.slice(0, close) + ',' + k + key + ":'" + lv + "'}" + seg.slice(close); }
    else throw new Error('duplicate rule key ' + ing);
  }
  h = h.slice(0, i) + seg + h.slice(j);
  const mi = h.indexOf('/*MED_VER_V1*/');
  const endMark = '})()};\n';
  const ei = h.indexOf(endMark, mi);
  if (ei < 0) throw new Error('MED_VER end not found');
  h = h.slice(0, ei) + '})(),' + key + ':(function(){\n' + spec.verBlock + '\n' + endMark + h.slice(ei + endMark.length);
  setAuth(spec.auth);
} else { console.log('mode must be note or verified'); process.exit(1); }
fs.writeFileSync(FILE, h);
console.log('added', mode, spec.country);
