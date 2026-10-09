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
const EXTRA = [{ code: 'TC', name: 'Turks and Caicos Islands' },
  // Caribbean islands and territories for the Caribbean article (names follow the State Dept titles so they match by name)
  { code: 'AI', name: 'Anguilla' }, { code: 'AG', name: 'Antigua and Barbuda' }, { code: 'AW', name: 'Aruba' }, { code: 'BS', name: 'Bahamas' },
  { code: 'BB', name: 'Barbados' }, { code: 'VG', name: 'British Virgin Islands' }, { code: 'KY', name: 'Cayman Islands' }, { code: 'CW', name: 'Curaçao' },
  { code: 'DM', name: 'Dominica' }, { code: 'GD', name: 'Grenada' }, { code: 'GP', name: 'Guadeloupe' }, { code: 'HT', name: 'Haiti' },
  { code: 'MQ', name: 'Martinique' }, { code: 'MS', name: 'Montserrat' }, { code: 'BL', name: 'Saint Barthelemy' }, { code: 'KN', name: 'Saint Kitts and Nevis' },
  { code: 'LC', name: 'Saint Lucia' }, { code: 'MF', name: 'French Saint Martin' }, { code: 'VC', name: 'Saint Vincent and the Grenadines' },
  { code: 'SX', name: 'Sint Maarten' }, { code: 'TT', name: 'Trinidad and Tobago' }];
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
const UK_ALIAS = { 'saint barthelemy': 'st-martin-and-st-barthelemy', 'french saint martin': 'st-martin-and-st-barthelemy', 'sint maarten': 'st-maarten', 'saint lucia': 'st-lucia', 'saint kitts and nevis': 'st-kitts-and-nevis', 'saint vincent and the grenadines': 'st-vincent-and-the-grenadines', 'united states': 'usa', 'czechia': 'czech-republic', 'south korea': 'south-korea', 'hong kong': 'hong-kong', 'united arab emirates': 'united-arab-emirates', 'russia': 'russia', 'turkey': 'turkey', 'ireland': 'ireland' };

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
let US_LIST = null;
async function usList() {
  if (US_LIST) return US_LIST;
  try { US_LIST = await get('https://cadataapi.state.gov/api/TravelAdvisories', 2); }
  catch (e) { console.warn('US data API failed (' + e.message + '), using the State Dept RSS feed'); US_LIST = await usRss(); }
  return US_LIST;
}
async function us(countries, prev) {
  const list = await usList();
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

// ---- Level 4 / "do not travel" watch list (article /blog/level-4-travel-advisory-countries-2026/) -> level4.json ----
// Every destination the State Dept rates Level 3 or 4 (so a country that moves up appears automatically), plus the UK and Canada status for
// each, with the US reason (the advisory's own "due to ..." line and its risk sections). Written separately from advisories.json.
const L4_OUT = path.join(__dirname, 'level4.json');
// Region chips for the Level 4 article. ISO code -> region; anything not listed falls into Americas only if listed, else 'Other'.
const REGION_OF = {};
[['Africa', 'DZ AO BJ BW BF BI CM CV CF TD KM CG CD CI DJ EG GQ ER SZ ET GA GM GH GN GW KE LS LR LY MG MW ML MR MU MA MZ NA NE NG RW ST SN SC SL SO ZA SS SD TZ TG TN UG ZM ZW'],
  ['Middle East', 'BH IR IQ IL JO KW LB OM PS QA SA SY AE YE TR'],
  ['Asia', 'AF AM AZ BD BT BN KH CN GE HK IN ID JP KZ KG LA MO MY MV MN MM NP KP PK PH SG KR LK TW TJ TH TL TM UZ VN'],
  ['Europe', 'AL AD AT BY BE BA BG HR CY CZ DK EE FI FR DE GR HU IS IE IT XK LV LI LT LU MT MD MC ME NL MK NO PL PT RO RU SM RS SK SI ES SE CH UA GB VA'],
  ['Americas', 'AG AR BS BB BZ BO BR CA CL CO CR CU DM DO EC SV GD GT GY HT HN JM MX NI PA PY PE KN LC VC SR TT US UY VE'],
  ['Oceania', 'AU FJ KI MH FM NR NZ PW PG WS SB TO TV VU']].forEach(r => r[1].split(' ').forEach(c => { REGION_OF[c] = r[0]; }));
const ALIAS = { 'burma': ['myanmar', 'myanmar burma'], 'gaza': ['israel and palestine', 'palestine'], 'macau': ['macao'], 'democratic republic of the congo': ['democratic republic of congo kinshasa', 'democratic republic of the congo'], 'republic of the congo': ['republic of congo brazzaville', 'congo'], 'north korea': ['north korea', 'korea north', 'democratic peoples republic of korea'], 'south korea': ['south korea', 'korea south'], 'turkiye': ['turkey', 'turkiye'], 'the bahamas': ['bahamas'], 'the gambia': ['gambia'], 'ivory coast': ['cote d ivoire', 'ivory coast'], 'cote d ivoire': ['cote d ivoire', 'ivory coast'], 'czech republic': ['czechia'], 'eswatini': ['eswatini', 'swaziland'], 'west bank': ['israel and palestine', 'palestine'], 'israel': ['israel and palestine'], 'israel the west bank and gaza': ['israel', 'occupied palestinian territories'], 'timor leste': ['timor leste', 'east timor'], 'micronesia': ['micronesia', 'micronesia federated states of'] };
const noAcc = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '');
const nrm = s => norm(noAcc(s));
function usDetail(a) {
  const html = String(a.Summary || '');
  // headline = the first paragraph: "Do not travel to X (for any reason) due to <b>risk</b>, <b>risk</b> ..."
  const firstP = html.split(/<\/p>/i)[0];
  const lead = plain(firstP).replace(/\s*Read (the )?(entire|full) Travel Advisory\.?/i, '').replace(/\.\s*$/, '');
  const m = /\bdue to\b\s*(.+)$/i.exec(lead);
  let reason = m ? m[1].replace(/^(the )?risk of\s+/i, '').replace(/^\s*,\s*/, '').trim() : '';
  reason = reason.replace(/\.\s*Please read.*$/i, '').replace(/\s*Read the full.*$/i, '').trim();
  const rest = plain(html.slice(firstP.length)).replace(/\s*Read (the )?(entire|full) Travel Advisory\.?/i, '');
  // headings get glued to the next sentence by plain(): strip the usual ones
  const HEAD = /^(Advisory Summary:?|Restrictions on U\.S\. Government Personnel Movement|U\.S\. government employee travel restrictions|U\.S\. government employee travel restrictions|Travel restrictions for government employees|U\.S\. embassy operations|Unrest|Do not travel to [A-Z][A-Za-z .'’-]+? for any reason|For Americans in [A-Z][a-z]+)\s+/i;
  const strip = x => { let y = x.trim(), n = 0; while (HEAD.test(y) && n++ < 3) y = y.replace(HEAD, ''); return y; };
  const sents = rest.split(/(?<=[a-z0-9)”"'’])\.\s+(?=[A-Z])/).map(strip).filter(Boolean);
  const helpRe = /no U\.S\. embassy|embassy[^.]*(suspended|closed|reduced|is open)|limited ability|unable to (provide|offer)|cannot (offer|provide)|leave immediately|protecting power|consular access|not allowed to travel|prohibited from travel|only essential/i;
  let help = sents.filter(x => helpRe.test(x) && !/@|^(Review|Visit|Refer|Check|Read|Contact|If you)/.test(x)).slice(0, 2).map(x => clip(x.replace(/\.$/, '') + '.', 260));
  // when the headline is not a clean "due to" list (e.g. Mali), fall back to the risk headings the advisory itself uses
  if (!reason || /family members|employees/i.test(reason)) {
    const RISK = ['crime', 'terrorism', 'kidnapping', 'unrest', 'armed conflict', 'health', 'landmines', 'wrongful detention'];
    const found = [];
    html.replace(/<h[2-5][^>]*>([\s\S]*?)<\/h[2-5]>|<b>([^<]{3,40})<\/b>|<span class='header-paragraph'>([^<]{3,40})<\/span>/gi, (x, h, bb, hp) => { const t = plain(h || bb || hp).toLowerCase().replace(/[:.]$/, ''); RISK.forEach(r => { if (t.indexOf(r) === 0 && found.indexOf(r) < 0) found.push(r); }); return x; });
    if (found.length) reason = found.length > 1 ? found.slice(0, -1).join(', ') + ' and ' + found[found.length - 1] : found[0];
  }
  // entry / passport rules the advisory states on top of the advice (e.g. DRC Ebola flight rule, North Korea passport validation)
  const rules = sents.filter(x => /passports? cannot be used|not be allowed to board|prevent U\.S\. citizens[^.]*boarding|must remain outside/i.test(x)).slice(0, 2).map(x => clip(x.replace(/\.$/, '') + '.', 300));
  return { reason: clip(reason, 330), help, rules };
}
async function level4(prevL4) {
  const list = await usList();
  const ca = await get('https://data.international.gc.ca/travel-voyage/index-alpha-eng.json');
  const caList = Object.keys(ca.data).map(k => ca.data[k]);
  const caByName = {}; caList.forEach(r => { caByName[nrm(r['country-eng'])] = r; });
  const idx = await get('https://www.gov.uk/api/content/foreign-travel-advice');
  const ukKids = idx.links.children.map(k => ({ slug: k.base_path.split('/').pop(), name: k.details && k.details.country && k.details.country.name, updated: k.public_updated_at }));
  const ukByName = {}; ukKids.forEach(k => { if (k.name) ukByName[nrm(k.name)] = k; ukByName[nrm(k.slug.replace(/-/g, ' '))] = k; });
  const find = (map, name) => { const n = nrm(name); const c = [n].concat(ALIAS[n] || []); for (const x of c) if (map[x]) return map[x]; return null; };
  const out = {}, unmatched = [];
  for (const a of list) {
    const m = /Level (\d)/.exec(a.Title || ''); if (!m || +m[1] < 3) continue;
    const name = (a.Title || '').split(/ - Level| Travel Advisory/)[0].trim();
    const key = nrm(name).replace(/ /g, '-');
    const rec = { name, us: Object.assign({ level: +m[1], date: (a.Updated || a.Published || '').slice(0, 10), url: a.Link }, usDetail(a)) };
    if (+m[1] < 4) { rec.us.help = []; rec.us.rules = []; }
    const cr = find(caByName, name);
    if (cr) { rec.code = cr['country-iso']; rec.ca = { level: cr['advisory-state'] + 1, regional: !!cr['has-regional-advisory'], date: (cr['date-published'] && cr['date-published'].date || '').slice(0, 10), slug: cr.eng && cr.eng['url-slug'] }; }
    else unmatched.push('CA:' + name);
    const uk = find(ukByName, name);
    if (uk) {
      try {
        const d = await get('https://www.gov.uk/api/content/foreign-travel-advice/' + uk.slug);
        const st = (d.details && d.details.alert_status) || [];
        const wp = ((d.details && d.details.parts) || []).find(p => p.slug === 'warnings-and-insurance');
        const paras = []; String(wp && wp.body || '').replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (x, t) => { paras.push(plain(t)); return x; });
        const sents = paras.filter(x => /^FCDO advises against (?:all but essential travel|all travel) (?:to|within)/.test(x)).slice(0, 2).map(x => clip(x.replace(/\.$/, ''), 300));
        rec.uk = { status: st, date: (d.public_updated_at || uk.updated || '').slice(0, 10), slug: uk.slug, summary: sents.join(' ') };
      } catch (e) { console.warn('UK', name, e.message); if (prevL4 && prevL4.countries && prevL4.countries[key] && prevL4.countries[key].uk) rec.uk = prevL4.countries[key].uk; }
    } else unmatched.push('UK:' + name);
    if (out[key] && (out[key].us.reason || !rec.us.reason)) continue;
    if (key === 'gaza') rec.code = 'PS';
    rec.region = REGION_OF[rec.code] || 'Other';
    out[key] = rec;
  }
  if (unmatched.length) console.warn('level4: no UK/CA match for', unmatched.join(', '));
  if (!Object.keys(out).length) throw new Error('no Level 3/4 advisories found');
  return out;
}
async function runLevel4() {
  let prev = {}; try { prev = JSON.parse(fs.readFileSync(L4_OUT, 'utf8')); } catch (e) {}
  try {
    const countries = await level4(prev);
    const now = new Date().toISOString();
    const res = { updated: now, countries };
    const stale = !prev.updated || (Date.parse(now) - Date.parse(prev.updated)) > 24 * 3600 * 1000;
    if (stale || JSON.stringify(prev.countries) !== JSON.stringify(countries)) { fs.writeFileSync(L4_OUT, JSON.stringify(res)); console.log('level4.json updated:', Object.keys(countries).length, 'destinations at US Level 3 or 4'); }
    else console.log('level4.json unchanged');
  } catch (e) { console.warn('LEVEL4 FAILED, level4.json kept as is:', e.message); }
}


// ---- Mexico regional advisories (article /blog/travel-warning-mexico-2026/) -> mexico.json ----
// UK: the "State of X" blocks of the FCDO warnings page (GOV.UK content API). Canada: the "Regional Advisory - Avoid non-essential travel" list of
// travel.gc.ca/destinations/mexico. The US state levels are NOT here: travel.state.gov blocks scripts (bot check), see mexico_us.json.
const MX_OUT = path.join(__dirname, 'mexico.json');
const MX_STATE_KEYS = {}; ['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Mexico City', 'Estado de Mexico', 'Michoacan', 'Morelos', 'Nayarit', 'Nuevo Leon', 'Oaxaca', 'Puebla', 'Queretaro', 'Quintana Roo', 'San Luis Potosi', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatan', 'Zacatecas'].forEach(n => { MX_STATE_KEYS[n.toLowerCase()] = 1; });
function getHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': UA } }, res => {
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(url + ' -> HTTP ' + res.statusCode)); }
      const chunks = []; res.on('data', c => chunks.push(c)); res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    }).on('error', reject).setTimeout(45000, function () { this.destroy(new Error('timeout ' + url)); });
  });
}
async function mexicoUK() {
  const d = await get('https://www.gov.uk/api/content/foreign-travel-advice/mexico');
  const wp = ((d.details && d.details.parts) || []).find(p => p.slug === 'warnings-and-insurance');
  const body = String(wp && wp.body || '');
  const marks = []; body.replace(/<h\d[^>]*>\s*State of ([^<]+?)\s*<\/h\d>/gi, (m, name, idx) => { marks.push({ name: name.trim(), at: idx, len: m.length }); return m; });
  const end = body.search(/Find out more about why FCDO advises|Before you travel/i);
  const states = {};
  marks.forEach((mk, i) => {
    const sec = body.slice(mk.at + mk.len, i + 1 < marks.length ? marks[i + 1].at : (end > mk.at ? end : body.length));
    const lines = [];
    sec.replace(/<p[^>]*>([\s\S]*?)<\/p>\s*(<ul[\s\S]*?<\/ul>)?/gi, (m, p, ul) => {
      const t = plain(p); if (!/^FCDO advises/.test(t)) return m;
      let line = t.replace(/\.$/, '');
      if (ul) { const li = []; ul.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (x, l) => { li.push(plain(l)); return x; }); line += ' ' + li.join('; '); }
      lines.push(line.trim()); return m;
    });
    if (!lines.length) return;
    const key = nrm(mk.name);
    states[key] = { name: mk.name, whole: lines.some(l => new RegExp('to the state of ' + mk.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i').test(l)), lines };
  });
  if (!Object.keys(states).length) throw new Error('UK Mexico: no State blocks found');
  return { date: (d.public_updated_at || '').slice(0, 10), status: (d.details && d.details.alert_status) || [], states };
}
async function mexicoCA() {
  const { JSDOM } = require('jsdom');
  const html = await getHtml('https://travel.gc.ca/destinations/mexico');
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const states = {}; let last = '';
  [['AvoidAll', 4], ['AvoidNonEssential', 3]].forEach(([cls, level]) => {
    // Canada sometimes adds a temporary box (for example a hurricane notice) with the same class and no list: use the first box that has a list
    const box = [...doc.querySelectorAll('.RegionalAdv.' + cls)].find(b => b.querySelector('ul')); const ul = box && box.querySelector('ul'); if (!ul) return;
    [...ul.children].forEach(li => {
      const own = [...li.childNodes].filter(n => n.nodeType === 3 || (n.nodeType === 1 && n.tagName !== 'UL')).map(n => n.textContent).join(' ').replace(/\s+/g, ' ').trim().replace(/[:,]$/, '');
      const sub = [...li.querySelectorAll(':scope > ul > li')].map(x => x.textContent.replace(/\s+/g, ' ').trim());
      let name = own.split(',')[0].trim(); const text = own + (sub.length ? ': ' + sub.join('; ') : '');
      if (/Zempoala/i.test(own)) name = 'Morelos';
      const k = nrm(name);
      // the source HTML sometimes closes a nested list early, which turns exclusions into top-level items: attach them to the previous state
      if (!MX_STATE_KEYS[k] && last) { states[last].text = clip(states[last].text + '; ' + text, 600); return; }
      states[k] = { name, level, text: clip(text, 600) }; last = k;
    });
  });
  if (!Object.keys(states).length) throw new Error('Canada Mexico: no regional advisory list found');
  const sec = doc.body.textContent.match(/Still valid[\s\S]{0,5}/); // unused
  return { states };
}
async function runMexico() {
  let prev = {}; try { prev = JSON.parse(fs.readFileSync(MX_OUT, 'utf8')); } catch (e) {}
  try {
    const [ukd, cad, adv] = [await mexicoUK(), await mexicoCA(), null];
    const j = await get('https://data.international.gc.ca/travel-voyage/index-alpha-eng.json');
    const r = j.data.MX; const cadate = r && r['date-published'] && r['date-published'].date ? r['date-published'].date.slice(0, 10) : '';
    cad.date = cadate;
    const now = new Date().toISOString();
    const res = { updated: now, uk: ukd, ca: cad };
    const stale = !prev.updated || (Date.parse(now) - Date.parse(prev.updated)) > 24 * 3600 * 1000;
    if (stale || JSON.stringify(prev.uk) !== JSON.stringify(ukd) || JSON.stringify(prev.ca) !== JSON.stringify(cad)) { fs.writeFileSync(MX_OUT, JSON.stringify(res)); console.log('mexico.json updated: UK', Object.keys(ukd.states).length, 'states, Canada', Object.keys(cad.states).length, 'states'); }
    else console.log('mexico.json unchanged');
  } catch (e) { console.warn('MEXICO FAILED, mexico.json kept as is:', e.message); }
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
  await runLevel4();
  await runMexico();
})().catch(e => { console.error('update_advisories failed:', e.message); process.exit(1); });
