#!/usr/bin/env node
// Submit the URLs changed by the latest commit to IndexNow (Bing, Yandex, Seznam, Naver; NOT Google).
// Run AFTER git push and after the pages are live:  node indexnow.js [--all] [--dry]
const { execSync } = require('child_process'), https = require('https'), fs = require('fs');
const KEY = 'd57956b5441116130de0656c374107ac', HOST = 'canitakethis.co';
const all = process.argv.includes('--all'), dry = process.argv.includes('--dry');
let urls;
if (all) {
  urls = (fs.readFileSync('sitemap.xml', 'utf8').match(/<loc>([^<]+)<\/loc>/g) || []).map(m => m.replace(/<\/?loc>/g, '').trim());
} else {
  const files = execSync('git diff --name-only HEAD~1 HEAD', { encoding: 'utf8' }).split('\n').filter(f => /(^|\/)index\.html$/.test(f));
  urls = files.map(f => 'https://' + HOST + '/' + f.replace(/index\.html$/, '')).map(u => u.replace(/^https:\/\/canitakethis\.co\/$/, 'https://canitakethis.co/'));
}
urls = [...new Set(urls)].slice(0, 10000);
console.log('IndexNow: ' + urls.length + ' URL(s)' + (dry ? ' (dry run)' : ''));
if (!urls.length || dry) { urls.slice(0, 5).forEach(u => console.log('  ' + u)); process.exit(0); }
const payload = JSON.stringify({ host: HOST, key: KEY, keyLocation: 'https://' + HOST + '/' + KEY + '.txt', urlList: urls });
const req = https.request({ hostname: 'api.indexnow.org', path: '/indexnow', method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(payload) } }, res => { console.log('IndexNow -> HTTP ' + res.statusCode + ' (200/202 = accepted)'); res.resume(); });
req.on('error', e => console.log('IndexNow failed: ' + e.message));
req.write(payload); req.end();
