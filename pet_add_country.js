/*
 Pets expansion helper (session 34). Adds ONE country's verified pet-import rule (read in full from an official page) to PET_VER in canitakethis.html.
 usage: node pet_add_country.js spec.json
 spec = {"country":"Mexico","src":{"label":"...","url":"https://..."},"head":"...","lines":["...","..."],"dog":"optional dog-only line","cat":"optional cat-only line"}
 Rules: only facts stated on the page, no invented numbers or URLs; written in our own words (no copy of the page text); every country page must differ from the others.
 After adding: node build.js, run audit_source_state.js + audit_duplicates.js, update PETS_COUNTRIES.md.
*/
const fs = require('fs'), path = require('path');
const FILE = path.join(__dirname, 'canitakethis.html');
const spec = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
if (!spec.country || !spec.src || !spec.src.url || !spec.head || !Array.isArray(spec.lines) || spec.lines.length < 2) { console.log('bad spec'); process.exit(1); }
let h = fs.readFileSync(FILE, 'utf8');
const crlf = h.includes('\r\n'); h = h.replace(/\r\n/g, '\n');
const start = h.indexOf('var PET_VER=');
if (start < 0) throw new Error('PET_VER not found');
const objStart = h.indexOf('{', start);
let depth = 0, i = objStart;
for (; i < h.length; i++) { const c = h[i]; if (c === '{') depth++; else if (c === '}') { depth--; if (depth === 0) break; } else if (c === '"') { i++; while (h[i] !== '"') { if (h[i] === '\\') i++; i++; } } }
const obj = JSON.parse(h.slice(objStart, i + 1));
const e = { src: spec.src, head: spec.head, lines: spec.lines };
if (spec.dog) e.dog = spec.dog; if (spec.cat) e.cat = spec.cat;
obj[spec.country] = e;
h = h.slice(0, objStart) + JSON.stringify(obj) + h.slice(i + 1);
if (crlf) h = h.replace(/\n/g, '\r\n');
fs.writeFileSync(FILE, h);
console.log('PET_VER now has ' + Object.keys(obj).length + ' entries (added/updated ' + spec.country + ')');
