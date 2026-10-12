// DS 8.20: coloured status/verdict tags ("capsules") use border-radius 8px, never 999px or other round values.
// Scans the built pages' CSS rules whose selector names a tag/badge/pill/verdict. Exit 1 on violation.
const fs = require('fs'), path = require('path');
const SKIP = /scrollbar|toggle|ut-trigger|hdr-blog|cpill|cu-|hs-|ue-|\.chip\b|\.tab\b|-chip\b|\.pp-num|lock|flag/;
const NAME = /(pill|badge|\.tag\b|fsc-b|pp-[ynp]\b|verdict|status)/i;
const bad = {};
(function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    if (f.name === 'node_modules' || f.name.startsWith('.')) continue;
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name.endsWith('.html')) {
      const t = (fs.readFileSync(p, 'utf8').match(/<style[^>]*>[\s\S]*?<\/style>/g) || []).join('}');
      const re = /([^{}]{1,120})\{([^}]*border-radius:\s*(\d+)px[^}]*)\}/g; let m;
      while ((m = re.exec(t))) {
        const sel = m[1].trim().split(/[;}]/).pop();
        const r = +m[3];
        if (NAME.test(sel) && !SKIP.test(sel) && r > 8 && !/width:\s*\d+px;\s*height|height:\s*\d+px;\s*width/.test(m[2])) (bad[sel + ' => ' + r + 'px'] = bad[sel + ' => ' + r + 'px'] || []).push(p);
      }
    }
  }
})('.');
const keys = Object.keys(bad);
if (keys.length) { console.log('CAPSULE RADIUS VIOLATIONS (must be 8px, DESIGN_SYSTEM.md 8.20):'); keys.forEach(k => console.log(' ', k, '(' + bad[k].length + ' pages, e.g. ' + bad[k][0] + ')')); process.exit(1); }
console.log('OK capsules');
