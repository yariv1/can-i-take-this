// Fetches the official travel advisory data for the countries on this site and writes advisories.json.
// Sources: US State Dept data feed (cadataapi.state.gov), UK GOV.UK content API (FCDO travel advice), Canada (data.international.gc.ca).
// Run before every build (like update_rates.js) and by the scheduled job every 6 hours. Never invents data: on any source failure the
// previous values for that source are kept and the source keeps its old "checked" time.
const fs = require('fs');
const path = require('path');
const https = require('https');

const OUT = path.join(__dirname, 'advisories.json');
const UA = 'canitakethis.co advisory updater (contact: getapps.support@gmail.com)';

const sleep = ms => new Promise(r => setTimeout(r, ms));
// Retries on HTTP 429 / 5xx and network errors (the State Dept feed rate-limits repeated calls).
async function get(url, tries) {
  tries = tries || 4;
  for (let i = 1; ; i++) {
    try { return await get1(url); }
    catch (e) {
      const retry = /HTTP (429|5\d\d)|timeout|ECONNRESET|ENOTFOUND|EAI_AGAIN/.test(e.message);
      if (!retry || i >= tries) throw e;
      await sleep([0, 15000, 45000, 90000][i] || 90000);
    }
  }
}
function get1(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': UA, Accept: 'application/json' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) { res.resume(); return resolve(get(new URL(res.headers.location, url).toString())); }
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(url + ' -> HTTP ' + res.statusCode)); }
      const chunks = []; res.on('data', c => chunks.push(c)); res.on('end', () => { try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8'))); } catch (e) { reject(e); } });
    }).on('error', reject).setTimeout(45000, function () { this.destroy(new Error('timeout ' + url)); });
  });
}

// Our 85 countries (ISO code + name) come from the homepage data; load them the same way build.js does.
const EXTRA = [{ code: 'TC', name: 'Turks and Caicos Islands' }];
function loadCountries() {
  const { JSDOM } = require('jsdom');
  const html = fs.readFileSync(path.join(__dirname, 'canitakethis.html'), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'dangerously', pretendToBeVisual: true, url: 'https://canitakethis.co/' });
  const c = dom.window.COUNTRIES.map(x => ({ code: x.code, name: x.name }));
  dom.window.close();
  // extra destinations with their own article (not in the 85-country table); flagged so the table article skips them
  EXTRA.forEach(e => { if (!c.some(x => x.code === e.code)) c.push({ code: e.code, name: e.name, extra: true }); });
  return c;
}

const ENT = { '&nbsp;': ' ', '&amp;': '&', '&#39;': "'", '&rsquo;': "'", '&lsquo;': "'", '&quot;': '"', '&ndash;': '-', '&mdash;': '-', '&lt;': '<', '&gt;': '>' };
const plain = h => String(h || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, m => ENT[m.toLowerCase()] !== undefined ? ENT[m.toLowerCase()] : ' ').replace(/\s+/g, ' ').replace(/ ([.,;:])/g, '$1').trim();
const clip = (s, n) => { s = s.trim(); if (s.length <= n) return s; const c = s.slice(0, n - 1); const i = Math.max(c.lastIndexOf('. '), c.lastIndexOf(' ')); return c.slice(0, i > n * 0.6 ? i : n - 1).replace(/[,;:.]$/, '') + '...'; };
const norm = s => String(s).toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim();
// GOV.UK slugs that differ from our country names
const UK_ALIAS = { 'united states': 'usa', 'czechia': 'czech-republic', 'south korea': 'south-korea', 'hong kong': 'hong-kong', 'united arab emirates': 'united-arab-emirates', 'russia': 'russia', 'turkey': 'turkey', 'ireland': 'ireland' };

// The State Dept feed tags countries with FIPS codes (not ISO), so countries are matched by the name in the advisory title.
const US_ALIAS = { 'kingdom of denmark': 'denmark', 'the bahamas': 'bahamas', 'turkiye': 'turkey', 'burma': 'myanmar', 'the gambia': 'gambia', 'the netherlands': 'netherlands', 'czech republic': 'czechia', 'hong kong sar': 'hong kong' };
// Fallback for the data API (behind Cloudflare, can answer 403/429): the State Dept RSS feed carries the same advisories.
function getText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': UA } }, res => {
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(url + ' -> HTTP ' + res.statusCode)); }
      const chunks = []; res.on('data', c => chunks.push(c)); res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    }).on('error', reject).setTimeout(45000, function () { this.destroy(new Error('timeout ' + url)); });
  });
}
async function usRss() {
  const xml = await getText('https://travel.state.gov/_res/rss/TAsTWs.xml');
  const tag = (s, t) => { const m = new RegExp('<' + t + '>([\\s\\S]*?)</' + t + '>').exec(s); return m ? m[1].replace(/^<!\[CDATA\[|\]\]>$/g, '').trim() : ''; };
  const out = [];
  xml.split('<item>').slice(1).forEach(it => {
    const d = new Date(tag(it, 'pubDate'));
    out.push({ Title: tag(it, 'title'), Link: tag(it, 'link'), Summary: tag(it, 'description'), Updated: isNaN(d) ? '' : d.toISOString() });
  });
  if (!out.length) throw new Error('RSS had no items');
  return out;
}
async function us(countries, prev) {
  let list;
  try { list = await get('https://cadataapi.state.gov/api/TravelAdvisories', 2); }
  catch (e) { console.warn('US data API failed (' + e.message + '), using the State Dept RSS feed'); list = await usRss(); }
  const byName = {};
  list.forEach(a => {
    const m = /Level (\d)/.exec(a.Title || ''); if (!m) return;
    let n = norm((a.Title || '').split(/ - Level| Travel Advisory/)[0]);
    n = US_ALIAS[n] || n;
    let lead = plain(String(a.Summary || '').split(/<ul|<h5|<ol/i)[0]).replace(/\s*Read the entire Travel Advisory\.?/i, '');
    const li = lead.search(/(Exercise normal precautions?|Exercise increased caution|Reconsider travel|Do not travel)/i);
    if (li > 0) lead = lead.slice(li);
    lead = lead.replace(/^(.{5,40}?)\s+\1\b/i, '$1');
    lead = lead.split(/(?<=[a-z0-9)])\.\s+(?=[A-Z])/).filter((s, i) => i === 0 || !/^[A-Z][a-z]+ [A-Z]/.test(s)).slice(0, 2).join('. ');
    if (lead && !/[.!?]$/.test(lead)) lead += '.';
    byName[n] = { level: +m[1], date: (a.Updated || a.Published || '').slice(0, 10), url: a.Link, summary: clip(lead, 300) };
  });
  const out = {}, missing = [];
  countries.forEach(c => { const r = byName[norm(c.name)]; if (r) out[c.code] = r; else missing.push(c.name); });
  if (missing.length) console.warn('US: no advisory matched for', missing.join(', '));
  return out;
}

async function ca(countries) {
  const j = await get('https://data.international.gc.ca/travel-voyage/index-alpha-eng.json');
  const out = {};
  countries.forEach(c => {
    const r = j.data[c.code]; if (!r) return;
    out[c.code] = { level: r['advisory-state'] + 1, regional: !!r['has-regional-advisory'], date: (r['date-published'] && r['date-published'].date || '').slice(0, 10), slug: r.eng && r.eng['url-slug'], text: r.eng && r.eng['advisory-text'] || '', update: clip(plain(r.eng && r.eng['recent-updates']), 240) };
  });
  return out;
}

async function uk(countries) {
  const idx = await get('https://www.gov.uk/api/content/foreign-travel-advice');
  const kids = idx.links.children.map(k => ({ slug: k.base_path.split('/').pop(), name: k.details && k.details.country && k.details.country.name, updated: k.public_updated_at }));
  const bySlug = {}; kids.forEach(k => { bySlug[k.slug] = k; });
  const byName = {}; kids.forEach(k => { if (k.name) byName[norm(k.name)] = k; });
  const out = {}, missing = [];
  for (const c of countries) {
    const k = bySlug[UK_ALIAS[norm(c.name)]] || byName[norm(c.name)] || bySlug[norm(c.name).replace(/ /g, '-')];
    if (!k) { missing.push(c.name); continue; }
    try {
      const d = await get('https://www.gov.uk/api/content/foreign-travel-advice/' + k.slug);
      const st = (d.details && d.details.alert_status) || [];
      const wp = ((d.details && d.details.parts) || []).find(p => p.slug === 'warnings-and-insurance');
      const txt = plain(wp && wp.body);
      const paras = [];
      String(wp && wp.body || '').replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (m, p1) => { paras.push(plain(p1)); return m; });
      const sents = paras.filter(x => /^FCDO advises against (?:all but essential travel|all travel) (?:to|within)/.test(x)).slice(0, 2)
        .map(x => clip(x.split(/\.\s+(?=[A-Z])/)[0].split(/, except|\sexcept:|:/)[0].replace(/[.]$/, '').replace(/,? including$/, '').replace(/ in the following regions$/, '') + '.', 220));
      out[c.code] = { status: st, date: (d.public_updated_at || k.updated || '').slice(0, 10), slug: k.slug, summary: sents.join(' ') };
    } catch (e) { console.warn('UK', c.name, e.message); }
  }
  if (missing.length) console.warn('UK: no match for', missing.join(', '));
  return out;
}

(async () => {
  const countries = loadCountries();
  let prev = {};
  try { prev = JSON.parse(fs.readFileSync(OUT, 'utf8')); } catch (e) {}
  const now = new Date().toISOString();
  const res = { updated: now, sources: Object.assign({}, prev.sources), countries: {} };
  const parts = { us, ca, uk };
  const data = {};
  for (const k of Object.keys(parts)) {
    try {
      data[k] = await parts[k](countries);
      if (!Object.keys(data[k]).length) throw new Error('empty result');
      res.sources[k] = { checked: now };
      console.log(k.toUpperCase(), Object.keys(data[k]).length, 'countries');
    } catch (e) {
      console.warn(k.toUpperCase(), 'FAILED, keeping previous values:', e.message);
      data[k] = {};
      countries.forEach(c => { if (prev.countries && prev.countries[c.code] && prev.countries[c.code][k]) data[k][c.code] = prev.countries[c.code][k]; });
      // never publish an empty column: with nothing to fall back on, stop and leave advisories.json untouched
      if (!Object.keys(data[k]).length) { console.error(k.toUpperCase() + ' failed and there are no previous values; advisories.json not written.'); process.exit(1); }
    }
  }
  // the page shows ONE "checked" time: the oldest source, so a source that keeps failing makes the date honestly old
  res.updated = Object.keys(res.sources).map(k => res.sources[k].checked).sort()[0] || now;
  countries.forEach(c => {
    res.countries[c.code] = c.extra ? { name: c.name, extra: true } : { name: c.name };
    ['us', 'uk', 'ca'].forEach(k => { if (data[k][c.code]) res.countries[c.code][k] = data[k][c.code]; });
  });
  // only rewrite the file when a value changed, or at least once a day so the visible "checked" time stays recent (keeps scheduled commits quiet)
  const strip = o => JSON.stringify(o.countries) + JSON.stringify(Object.keys(o.sources || {}));
  const stale = !prev.updated || (Date.parse(now) - Date.parse(prev.updated)) > 24 * 3600 * 1000;
  const changed = !prev.countries || strip(prev) !== strip(res) || stale;
  if (changed) { fs.writeFileSync(OUT, JSON.stringify(res)); console.log('advisories.json updated'); }
  else console.log('advisories.json unchanged');
})().catch(e => { console.error('update_advisories failed:', e.message); process.exit(1); });
