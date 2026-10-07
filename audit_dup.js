#!/usr/bin/env node
// Duplicate-content gate. For every page type, measures the share of a page's words that sit in sentences repeated
// (after replacing the airline/country name) on at least half of the pages of the same type.
// Usage: node audit_dup.js [--fail] [--max=25]   (--fail exits 1 if any type is over the limit, ignoring types listed in LEGACY)
const fs = require('fs'), path = require('path');
const ROOT = __dirname;
const args = process.argv.slice(2);
const MAX = +((args.find(a => a.startsWith('--max=')) || '--max=25').split('=')[1]);
const FAIL = args.includes('--fail');

const TYPES = [
  ['airline hub', 'airline', null], ['airline baggage', 'airline', 'baggage-allowance'], ['airline power bank', 'airline', 'power-bank'],
  ['airline liquids', 'airline', 'liquids'], ['airline vape', 'airline', 'vape-e-cigarette'], ['airline alcohol', 'airline', 'alcohol'],
  ['airline perfume', 'airline', 'perfume-aerosols'], ['country hub', 'country', null], ['country alcohol', 'country', 'alcohol'],
  ['country tobacco', 'country', 'tobacco'], ['country cash', 'country', 'cash'], ['country vaping', 'country', 'vaping'],
  ['country plants-seeds', 'country', 'plants-seeds'], ['food', 'food', null], ['pets', 'pets', null]
];

function sentences(file) {
  let h = fs.readFileSync(file, 'utf8');
  const m = h.match(/<main[\s\S]*?<\/main>/); if (m) h = m[0];
  h = h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<nav[\s\S]*?<\/nav>|<header[\s\S]*?<\/header>|<footer[\s\S]*?<\/footer>/g, '');
  const t = h.replace(/<[^>]+>/g, '\n').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ');
  return t.split('\n').map(s => s.replace(/\s+/g, ' ').trim()).filter(s => s.length > 40);
}

const report = [];
for (const [label, dir, sub] of TYPES) {
  const base = path.join(ROOT, dir); if (!fs.existsSync(base)) continue;
  const files = [];
  for (const slug of fs.readdirSync(base)) {
    const f = sub ? path.join(base, slug, sub, 'index.html') : path.join(base, slug, 'index.html');
    if (fs.existsSync(f)) files.push([slug, f]);
  }
  if (files.length < 5) continue;
  const cnt = new Map(), per = [];
  for (const [slug, f] of files) {
    const name = slug.replace(/-/g, ' ');
    const ss = sentences(f).map(s => s.toLowerCase().split(name).join('X'));
    per.push([slug, ss]); for (const s of new Set(ss)) cnt.set(s, (cnt.get(s) || 0) + 1);
  }
  const n = files.length; let shared = 0, tot = 0; const worst = [];
  for (const [slug, ss] of per) {
    let sh = 0, to = 0;
    for (const s of ss) { const w = s.split(' ').length; to += w; if (cnt.get(s) >= Math.max(3, n * 0.5)) sh += w; }
    shared += sh; tot += to; worst.push([slug, Math.round(100 * sh / Math.max(to, 1)), to]);
  }
  worst.sort((a, b) => b[1] - a[1]);
  report.push({ label, n, pct: Math.round(100 * shared / Math.max(tot, 1)), avgWords: Math.round(tot / n), worst: worst.slice(0, 2) });
}
console.log('type'.padEnd(22) + 'pages  shared%  avg words  limit ' + MAX + '%');
let bad = 0;
for (const r of report) {
  const over = r.pct > MAX; if (over) bad++;
  console.log(r.label.padEnd(22) + String(r.n).padEnd(7) + String(r.pct + '%').padEnd(10) + String(r.avgWords).padEnd(11) + (over ? 'OVER' : 'ok'));
}
console.log(bad + ' of ' + report.length + ' page types over the limit');
if (FAIL && bad) process.exit(1);
