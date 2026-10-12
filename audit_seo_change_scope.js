// SEO CHANGE-SCOPE GUARD (written 2026-10-12 after the Oct 7 site-wide SEO batch coincided with the traffic collapse; see SEO_INCIDENT_2026-10-07.md).
// Compares the SEO-relevant fields (title, meta description, H1 text, canonical, robots, JSON-LD @types, number of internal links in the related blocks) of every CHANGED built index.html against the base commit (default HEAD = what is live).
// If more than LIMIT existing pages change any of those fields, it exits 1. Override ONLY with the user's explicit written approval of that scope: ALLOW_MASS_SEO=1 node audit_seo_change_scope.js
// Usage: node audit_seo_change_scope.js [--base <commit>] [--limit N]
const { execSync } = require('child_process');
const fs = require('fs');
const argv = process.argv.slice(2);
const arg = (k, d) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : d; };
const base = arg('--base', 'HEAD');
const LIMIT = parseInt(arg('--limit', '40'), 10);
const sh = c => execSync(c, { encoding: 'utf8', maxBuffer: 1 << 28 });
const files = sh('git diff --name-only ' + base + ' -- "*.html"').split('\n').filter(f => /index\.html$/.test(f) && !/^(\.claude|node_modules)/.test(f));
const fields = h => {
  const g = (re) => ((re.exec(h) || [])[1] || '').replace(/\s+/g, ' ').trim();
  const body = h.replace(/<script[\s\S]*?<\/script>/gi, '');
  return {
    title: g(/<title>([\s\S]*?)<\/title>/i),
    desc: g(/<meta name="description" content="([^"]*)"/i),
    h1: [...body.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()).join(' || '),
    canon: g(/<link rel="canonical" href="([^"]*)"/i),
    robots: g(/<meta name="robots" content="([^"]*)"/i),
    ld: [...h.matchAll(/"@type":"(\w+)"/g)].map(m => m[1]).sort().join(','),
    rel: (h.match(/<nav class="(rel|readmore)"[\s\S]*?<\/nav>/gi) || []).map(n => (n.match(/<a /g) || []).length).join(',')
  };
};
let n = 0, added = 0; const by = {}; const sample = [];
for (const f of files) {
  if (!fs.existsSync(f)) continue; // deleted
  let old; try { old = sh('git show ' + base + ':' + f.replace(/\\/g, '/')); } catch (e) { added++; continue; } // new page: not counted
  const a = fields(old), b = fields(fs.readFileSync(f, 'utf8'));
  const diff = Object.keys(a).filter(k => a[k] !== b[k]);
  if (diff.length) { n++; const t = '/' + f.split('/')[0]; by[t] = (by[t] || 0) + 1; if (sample.length < 8) sample.push(f + ' [' + diff.join(',') + ']'); }
}
console.log('SEO change scope vs ' + base + ': ' + n + ' existing pages changed an SEO field (title/description/H1/canonical/robots/schema/related links); ' + added + ' new pages not counted. Limit ' + LIMIT + '.');
console.log('By section: ' + JSON.stringify(by));
sample.forEach(s => console.log('  e.g. ' + s));
if (n > LIMIT && !process.env.ALLOW_MASS_SEO) {
  console.error('BLOCKED: a cross-site SEO change this size needs the user\'s explicit written approval (scope, test group, baseline, rollback plan). See SEO_RULES.md "CHANGE CONTROL" and SEO_INCIDENT_2026-10-07.md. Override only with ALLOW_MASS_SEO=1 after that approval.');
  process.exit(1);
}
console.log('OK');
