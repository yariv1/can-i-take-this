// DS 8.21 (2026-11-26): one place that decides whether a linked source is official or unofficial.
// The caption under every source link ("Official guidance" / "Unofficial guidance") and the guard audit_source_label.js both use it.
// Unofficial = the label says so, the site is a named third party (not an authority, airport or airline),
// or it is one government's travel advice about another country.
const THIRD_PARTY = [
  'iata.org', 'diabetes.org.uk', 'tobaccocontrollaws.org', 'gsthr.org', 'infopages.traveldoc.aero', 'entrybrief.com',
  'meduza.io', 'unotv.com', 'futuretravelexperience.com', 'panrotas.com.br', 'vietnamlawmagazine.vn', 'lugless.com',
  'globaltimes.cn', 'airfi.aero', 'thenationalnews.com', 'paxex.aero', 'onemileatatime.com', 'aerotime.aero',
  'aduaneandoencuba.com', 'd-cuba.com', 'directoriocubano.info', 'diariolibre.com', 'eldia.com.do', 'expat-finland.com',
  'taxheaven.gr', 'news.ddtc.co.id', 'gulfnews.com', 'atolltimes.mv', 'alta.ru', '2firsts.com', 'saudigazette.com.sa',
  'vertic.org', 'english.luatvietnam.vn', 'aegeanhub.com', 'bta.bg', 'legeaz.net', 'vrt.be', 'lenews.ch'
];
function isUnofficial(url, label, pageUrl) {
  if (/unofficial/i.test(String(label || ''))) return true;
  const u = String(url || '');
  const m = u.match(/^https?:\/\/([^\/?#]+)/i);
  if (!m) return false;
  const host = m[1].toLowerCase().replace(/^www\./, '');
  if (THIRD_PARTY.some(d => host === d || host.endsWith('.' + d))) return true;
  if (/gov\.uk\/foreign-travel-advice\//i.test(u) && !/united-kingdom/i.test(String(pageUrl || ''))) return true;
  return false;
}
// the same rule for cards built in the browser (typeahead library and home app)
function clientFn() {
  return 'var THIRD_PARTY=' + JSON.stringify(THIRD_PARTY) + ';' + isUnofficial.toString().replace(/\r?\n\s*/g, '') +
    'function srcUn(u,l){return isUnofficial(u,l,location.pathname);}';
}
// static and script-embedded cards: swap the caption under every unofficial link
const CAP = /(href=\\?"(https?:[^"\\]+)\\?"(?:(?!hitem)[\s\S]){0,600}?span class=\\?"hi-l\\?">((?:(?!hi-go|hitem)[\s\S]){0,900}?)(?:<|\\u003c)small>)Official guidance/g;
function relabel(html, pageUrl) { return html.replace(CAP, (m, head, url, label) => isUnofficial(url, label, pageUrl) ? head + 'Unofficial guidance' : m); }
module.exports = { isUnofficial, THIRD_PARTY, clientFn, relabel, CAP };
