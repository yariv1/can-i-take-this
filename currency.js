/* canitakethis.co currency switch — shared, self-contained, theme-inheriting.
   Adds a currency dropdown ("USD ▾") to the page header (.topbar-right), left of the unit switch.
   It REPLACES USD / EUR / GBP prices in the visible text with the chosen currency ("~₹10,300").
   Default is always USD (the authored text). The choice is saved in localStorage ('citt-currency').
   The quick list is USD, EUR, GBP, CAD, AUD plus the currency of the visitor's browser region
   (language, then timezone; no IP lookup). Rates: ECB euro reference rates, shipped as /rates.json
   (written by update_rates.js before each deploy). Hovering or tapping a converted amount shows the
   published price. Hooks into units.js (addTransform) so both switches share one text pipeline.
   Rules: DESIGN_SYSTEM.md section "Currency switch". */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else api.init();
})(this, function () {
  var KEY = 'citt-currency';
  var MAX_SRC = 3000; /* larger amounts are legal limits (cash declarations etc.), never converted */
  var EXEMPT_PATH = /\/country\/|customs|duty-free|declaration|-by-country/i;

  /* every currency the ECB publishes a rate for (+ EUR) */
  var LIST = [
    ['USD', 'US dollar'], ['EUR', 'Euro'], ['GBP', 'British pound'], ['CAD', 'Canadian dollar'], ['AUD', 'Australian dollar'],
    ['NZD', 'New Zealand dollar'], ['JPY', 'Japanese yen'], ['CNY', 'Chinese yuan'], ['HKD', 'Hong Kong dollar'],
    ['SGD', 'Singapore dollar'], ['INR', 'Indian rupee'], ['KRW', 'South Korean won'], ['THB', 'Thai baht'],
    ['MYR', 'Malaysian ringgit'], ['IDR', 'Indonesian rupiah'], ['PHP', 'Philippine peso'], ['ILS', 'Israeli shekel'],
    ['TRY', 'Turkish lira'], ['ZAR', 'South African rand'], ['BRL', 'Brazilian real'], ['MXN', 'Mexican peso'],
    ['CHF', 'Swiss franc'], ['SEK', 'Swedish krona'], ['NOK', 'Norwegian krone'], ['DKK', 'Danish krone'],
    ['PLN', 'Polish zloty'], ['CZK', 'Czech koruna'], ['HUF', 'Hungarian forint'], ['RON', 'Romanian leu'],
    ['ISK', 'Icelandic krona']
  ];
  var NAME = {}; LIST.forEach(function (c) { NAME[c[0]] = c[1]; });
  var POPULAR = ['USD', 'EUR', 'GBP', 'CAD', 'AUD'];
  /* flag per currency (flagcdn.com, same source as the articles; EUR = EU flag) */
  var FLAG = { USD: 'us', EUR: 'eu', GBP: 'gb', CAD: 'ca', AUD: 'au', NZD: 'nz', JPY: 'jp', CNY: 'cn', HKD: 'hk', SGD: 'sg', INR: 'in', KRW: 'kr', THB: 'th', MYR: 'my', IDR: 'id', PHP: 'ph', ILS: 'il', TRY: 'tr', ZAR: 'za', BRL: 'br', MXN: 'mx', CHF: 'ch', SEK: 'se', NOK: 'no', DKK: 'dk', PLN: 'pl', CZK: 'cz', HUF: 'hu', RON: 'ro', ISK: 'is' };
  function flagImg(code, cls) {
    var i = document.createElement('img');
    i.className = cls; i.alt = ''; i.setAttribute('aria-hidden', 'true'); i.decoding = 'async';
    i.src = 'https://flagcdn.com/' + FLAG[code] + '.svg';
    return i;
  }

  var REGION_CUR = { IN: 'INR', JP: 'JPY', CN: 'CNY', HK: 'HKD', SG: 'SGD', KR: 'KRW', TH: 'THB', MY: 'MYR', ID: 'IDR', PH: 'PHP',
    IL: 'ILS', TR: 'TRY', ZA: 'ZAR', BR: 'BRL', MX: 'MXN', CH: 'CHF', SE: 'SEK', NO: 'NOK', DK: 'DKK', PL: 'PLN', CZ: 'CZK',
    HU: 'HUF', RO: 'RON', IS: 'ISK', NZ: 'NZD', CA: 'CAD', AU: 'AUD', GB: 'GBP' };
  'AT BE CY DE EE ES FI FR GR HR IE IT LT LU LV MT NL PT SI SK'.split(' ').forEach(function (r) { REGION_CUR[r] = 'EUR'; });
  var TZ_CUR = { 'Asia/Kolkata': 'INR', 'Asia/Calcutta': 'INR', 'Asia/Tokyo': 'JPY', 'Asia/Shanghai': 'CNY', 'Asia/Hong_Kong': 'HKD',
    'Asia/Singapore': 'SGD', 'Asia/Seoul': 'KRW', 'Asia/Bangkok': 'THB', 'Asia/Kuala_Lumpur': 'MYR', 'Asia/Jakarta': 'IDR',
    'Asia/Manila': 'PHP', 'Asia/Jerusalem': 'ILS', 'Europe/Istanbul': 'TRY', 'Africa/Johannesburg': 'ZAR',
    'America/Sao_Paulo': 'BRL', 'America/Mexico_City': 'MXN', 'Europe/Zurich': 'CHF', 'Europe/Stockholm': 'SEK',
    'Europe/Oslo': 'NOK', 'Europe/Copenhagen': 'DKK', 'Europe/Warsaw': 'PLN', 'Europe/Prague': 'CZK', 'Europe/Budapest': 'HUF',
    'Europe/Bucharest': 'RON', 'Atlantic/Reykjavik': 'ISK', 'Pacific/Auckland': 'NZD', 'America/Toronto': 'CAD',
    'America/Vancouver': 'CAD', 'Australia/Sydney': 'AUD', 'Australia/Melbourne': 'AUD', 'Europe/London': 'GBP',
    'Europe/Paris': 'EUR', 'Europe/Berlin': 'EUR', 'Europe/Madrid': 'EUR', 'Europe/Rome': 'EUR', 'Europe/Amsterdam': 'EUR' };

  function regionCurrency() {
    try {
      var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
      for (var i = 0; i < langs.length; i++) {
        var m = /^[a-z]{2,3}[-_]([A-Za-z]{2})/.exec(langs[i] || '');
        if (m && REGION_CUR[m[1].toUpperCase()]) return REGION_CUR[m[1].toUpperCase()];
      }
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (TZ_CUR[tz]) return TZ_CUR[tz];
    } catch (e) {}
    return null;
  }

  /* ---------- text conversion (pure, shared with audit_currency.js) ---------- */
  var AMT = '\\d{1,3}(?:,\\d{3})+(?:\\.\\d+)?|\\d+(?:\\.\\d+)?';
  var RE = new RegExp('(?<![A-Za-z0-9$€£])(?<!(?:AUD|CAD|NZD|SGD|HKD|MXN|BRL|ARS|COP|CLP)\\s?)(?:(US\\$|\\$|€|£)\\s?|\\b(USD|EUR|GBP)\\s)(' + AMT + ')(?:(\\s?[–-]\\s?)(?:(US\\$|\\$|€|£)\\s?)?(' + AMT + '))?(?![\\d,]*\\d)(?!\\s?(?:million|billion|thousand|[kKmMbB]\\b))', 'g');
  var SYM_CUR = { '$': 'USD', 'US$': 'USD', '€': 'EUR', '£': 'GBP' };
  var fmtCache = {};
  function nf(cur, d) {
    var k = cur + d;
    return fmtCache[k] || (fmtCache[k] = new Intl.NumberFormat('en-US', { style: 'currency', currency: cur, currencyDisplay: 'symbol', minimumFractionDigits: d, maximumFractionDigits: d }));
  }
  function digitsOf(cur) { return new Intl.NumberFormat('en-US', { style: 'currency', currency: cur }).resolvedOptions().maximumFractionDigits; }
  function round(v, cur) {
    if (v >= 1000) return { v: Number(v.toPrecision(3)), d: 0 };
    if (v >= 10) return { v: Math.round(v), d: 0 };
    var d = digitsOf(cur);
    return { v: v, d: d };
  }
  function money(v, cur, withSymbol) {
    var r = round(v, cur);
    var f = nf(cur, r.d);
    if (withSymbol) return f.format(r.v);
    return f.formatToParts(r.v).filter(function (p) { return p.type !== 'currency' && p.type !== 'literal'; }).map(function (p) { return p.value; }).join('');
  }
  function toNum(s) { return parseFloat(s.replace(/,/g, '')); }
  function usable(src, n) { return !isNaN(n) && n < MAX_SRC; }

  /* returns {text, spans:[[start,end,original]]}; rates = {base EUR map}; target = currency code */
  function convertText(text, target, rates) {
    if (!rates) return { text: text, spans: [] };
    var out = '', last = 0, m, spans = [];
    RE.lastIndex = 0;
    while ((m = RE.exec(text))) {
      var src = SYM_CUR[m[1]] || m[2];
      var n1 = toNum(m[3]), s2 = m[5] ? SYM_CUR[m[5]] : null, n2 = m[6] ? toNum(m[6]) : null;
      var src2 = n2 !== null ? (s2 || src) : null;
      if (src === target && (src2 === null || src2 === target)) continue;
      if (!usable(src, n1) || (n2 !== null && !usable(src2, n2))) continue;
      if (!rates[src] || !rates[target] || (src2 && !rates[src2])) continue;
      var v1 = n1 / rates[src] * rates[target];
      var rep = money(v1, target, true);
      if (n2 !== null) {
        var v2 = n2 / rates[src2] * rates[target];
        rep += m[4] + money(v2, target, !!m[5] || !!m[2]);
      }
      out += text.slice(last, m.index);
      spans.push([out.length, out.length + rep.length, m[0]]);
      out += rep;
      last = m.index + m[0].length;
    }
    return { text: out + text.slice(last), spans: spans };
  }

  /* ---------- browser part ---------- */
  var cur = 'USD', rates = null, ratesDate = '', exempt = false;
  var spansOf = typeof WeakMap === 'function' ? new WeakMap() : null;

  function skipCur(n) {
    for (var p = n.parentNode; p && p.nodeType === 1; p = p.parentNode) {
      if (p.getAttribute('data-currency') === 'keep') return true;
    }
    return false;
  }
  function transform(text, node) {
    if (!rates || exempt || (node && skipCur(node))) { if (node && spansOf) spansOf.delete(node); return text; }
    var r = convertText(text, cur, rates);
    if (node && spansOf) { if (r.spans.length) spansOf.set(node, r.spans); else spansOf.delete(node); }
    return r.text;
  }

  function saved() { try { var v = localStorage.getItem(KEY); return v && NAME[v] ? v : null; } catch (e) { return null; } }
  function dateLabel(d) {
    var p = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d || '');
    if (!p) return '';
    return parseInt(p[3], 10) + ' ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][parseInt(p[2], 10) - 1] + ' ' + p[1];
  }

  var CSS = '.cur-toggle{position:relative;display:inline-flex}'
    + '.cur-toggle .ut-trigger{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line,#2A3A5E);background:var(--surface,#161F3A);color:var(--text,#EDF0F7);font:600 .85rem/1.2 Inter,system-ui,sans-serif;padding:6px 10px;border-radius:999px;cursor:pointer;white-space:nowrap}'
    + '.cur-toggle .ut-trigger:hover{border-color:var(--accent,#4CC2FF)}'
    + '.cur-toggle .ut-trigger svg{flex:none}'
    + '.cur-toggle .cu-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:100;width:290px;max-width:calc(100vw - 24px);padding:8px;border:1px solid var(--line,#2A3A5E);border-radius:14px;background:var(--surface,#161F3A);box-shadow:0 12px 32px rgba(0,0,0,.35)}'
    + '.cur-toggle .cu-menu[hidden]{display:none}'
    + '.cur-toggle .cu-search{width:100%;box-sizing:border-box;border:1px solid var(--line,#2A3A5E);background:var(--bg,#0B1220);color:var(--text,#EDF0F7);font:500 .9rem/1.3 Inter,system-ui,sans-serif;padding:9px 10px;border-radius:9px;margin-bottom:6px}'
    + '.cur-toggle .cu-search:focus{outline:2px solid var(--accent,#4CC2FF);outline-offset:1px}'
    + '.cur-toggle .cu-list{max-height:min(320px,55vh);overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--accent,#4CC2FF) var(--surface,#161F3A)}'
    + '.cur-toggle .cu-list::-webkit-scrollbar{width:8px}.cur-toggle .cu-list::-webkit-scrollbar-track{background:var(--surface,#161F3A);border-radius:999px}.cur-toggle .cu-list::-webkit-scrollbar-thumb{background:var(--muted,#8A96B8);border-radius:999px}.cur-toggle .cu-list::-webkit-scrollbar-thumb:hover{background:var(--accent,#4CC2FF)}'
    + '.cur-toggle .cu-head{padding:8px 10px 4px;font:700 .85rem/1.2 Inter,system-ui,sans-serif;color:var(--muted,#8A96B8)}'
    + '.cur-toggle .cu-item{display:flex;width:100%;align-items:center;gap:10px;border:0;background:transparent;color:var(--text,#EDF0F7);font:500 .9rem/1.3 Inter,system-ui,sans-serif;padding:8px 10px;border-radius:9px;cursor:pointer;text-align:left}'
    + '.cur-toggle .cu-item:hover{background:var(--surface-2,#22304F)}'
    + '.cur-toggle .cu-flag{width:24px;height:24px;border-radius:50%;object-fit:cover;flex:none;background:var(--surface-2,#22304F)}'
    + '.cur-toggle .cu-tflag{width:18px;height:18px;border-radius:50%;object-fit:cover;flex:none;background:var(--surface-2,#22304F)}'
    + '.cur-toggle .cu-code{font-weight:600;font-size:.85rem;color:var(--muted,#8A96B8)}'
    + '.cur-toggle .cu-item[aria-selected="true"] .cu-code{color:#08111f}[data-theme="light"] .cur-toggle .cu-item[aria-selected="true"] .cu-code{color:#fff}'
    + '.cur-toggle .cu-name{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}'
    + '.cur-toggle .cu-item[aria-selected="true"]{background:#4CC2FF;color:#08111f}'
    + '[data-theme="light"] .cur-toggle .cu-item[aria-selected="true"]{background:#1B2233;color:#fff}'
    + '.cur-toggle .cu-item:disabled{opacity:.5;cursor:not-allowed}'
    + '.cur-toggle .cu-note{padding:8px 10px 2px;font:500 .85rem/1.35 Inter,system-ui,sans-serif;color:var(--muted,#8A96B8)}'
    + '.cur-toggle button:focus-visible{outline:2px solid var(--accent,#4CC2FF);outline-offset:2px}'
    + '.cur-tip{position:fixed;z-index:200;max-width:260px;padding:9px 12px;border:1px solid var(--line,#2A3A5E);border-radius:10px;background:var(--surface-2,#22304F);color:var(--text,#EDF0F7);font:500 .85rem/1.4 Inter,system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.35);pointer-events:none}'
    + '.cur-tip b{font-weight:700}.cur-tip span{display:block;color:var(--muted,#8A96B8);margin-top:2px}'
    + '@media(max-width:420px){.cur-toggle .ut-trigger{padding:0 9px;gap:4px}.cur-toggle .ut-label{display:none}}';

  var tip = null, tipTimer = 0;
  function hideTip() { if (tip) tip.style.display = 'none'; }
  function showTip(x, y, orig) {
    if (!tip) { tip = document.createElement('div'); tip.className = 'cur-tip'; tip.setAttribute('data-currency', 'keep'); tip.setAttribute('role', 'tooltip'); document.body.appendChild(tip); }
    tip.innerHTML = '<b></b><span></span>';
    tip.firstChild.textContent = 'Published price: ' + orig;
    tip.lastChild.textContent = 'Converted at the ECB rate of ' + dateLabel(ratesDate) + '. Approximate.';
    tip.style.display = 'block';
    var w = tip.offsetWidth, h = tip.offsetHeight;
    var left = Math.min(Math.max(8, x - w / 2), window.innerWidth - w - 8);
    var top = y - h - 14; if (top < 8) top = y + 20;
    tip.style.left = left + 'px'; tip.style.top = top + 'px';
  }
  function caretAt(x, y) {
    if (document.caretPositionFromPoint) { var p = document.caretPositionFromPoint(x, y); return p ? { node: p.offsetNode, off: p.offset } : null; }
    if (document.caretRangeFromPoint) { var r = document.caretRangeFromPoint(x, y); return r ? { node: r.startContainer, off: r.startOffset } : null; }
    return null;
  }
  function findAmount(x, y) {
    if (!spansOf) return null;
    var c = caretAt(x, y);
    if (!c || !c.node || c.node.nodeType !== 3) return null;
    var list = spansOf.get(c.node);
    if (!list) return null;
    for (var i = 0; i < list.length; i++) {
      var s = list[i];
      if (c.off < s[0] - 1 || c.off > s[1] + 1) continue;
      try {
        var rg = document.createRange(); rg.setStart(c.node, s[0]); rg.setEnd(c.node, s[1]);
        var rects = rg.getClientRects();
        for (var k = 0; k < rects.length; k++) {
          var q = rects[k];
          if (x >= q.left - 2 && x <= q.right + 2 && y >= q.top - 2 && y <= q.bottom + 2) return s[2];
        }
      } catch (e) {}
    }
    return null;
  }
  function bindTip() {
    var raf = 0;
    document.addEventListener('mousemove', function (e) {
      if (raf) return;
      var x = e.clientX, y = e.clientY;
      raf = requestAnimationFrame(function () { raf = 0; var o = findAmount(x, y); if (o) showTip(x, y, o); else hideTip(); });
    });
    document.addEventListener('click', function (e) {
      var o = findAmount(e.clientX, e.clientY);
      clearTimeout(tipTimer);
      if (o) { showTip(e.clientX, e.clientY, o); tipTimer = setTimeout(hideTip, 4000); } else hideTip();
    });
    window.addEventListener('scroll', hideTip, { passive: true });
  }

  function setCurrency(c, persist) {
    if (c !== 'USD' && !(rates && rates[c])) c = 'USD';
    cur = c;
    document.documentElement.setAttribute('data-currency', c);
    if (persist) { try { localStorage.setItem(KEY, c); } catch (e) {} }
    var lab = document.querySelector('.cur-toggle .ut-label');
    if (lab) lab.textContent = c;
    var tg = document.querySelector('.cur-toggle .ut-trigger');
    if (tg) tg.setAttribute('aria-label', 'Currency: ' + c + ' (' + NAME[c] + '). Choose the currency prices are shown in');
    var tf = document.querySelector('.cur-toggle .cu-tflag');
    if (tf && FLAG[c]) tf.src = 'https://flagcdn.com/' + FLAG[c] + '.svg';
    var items = document.querySelectorAll('.cur-toggle .cu-item');
    for (var i = 0; i < items.length; i++) items[i].setAttribute('aria-selected', String(items[i].getAttribute('data-c') === c));
    hideTip();
    if (window.cittUnits && window.cittUnits.refresh) window.cittUnits.refresh();
    try { window.dispatchEvent(new CustomEvent('citt-currency-change', { detail: c })); } catch (e) {}
  }

  function build() {
    var host = document.querySelector('.topbar-right');
    if (!host || host.querySelector('.cur-toggle')) return;
    var regional = regionCurrency();
    var quick = POPULAR.slice();
    if (regional && quick.indexOf(regional) < 0) quick.push(regional);
    var wrap = document.createElement('div');
    wrap.className = 'cur-toggle';
    var trig = document.createElement('button');
    trig.type = 'button'; trig.className = 'ut-trigger';
    trig.setAttribute('aria-haspopup', 'true'); trig.setAttribute('aria-expanded', 'false');
    trig.setAttribute('aria-label', 'Currency: choose the currency prices are shown in');
    trig.innerHTML = '<span class="cu-flagslot" style="display:inline-flex"></span><span class="ut-label">USD</span><svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="M2 4.5l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    trig.querySelector('.cu-flagslot').appendChild(flagImg(cur, 'cu-tflag'));
    var menu = document.createElement('div');
    menu.className = 'cu-menu'; menu.hidden = true;
    var search = document.createElement('input');
    search.type = 'search'; search.className = 'cu-search'; search.placeholder = 'Search currency'; search.setAttribute('aria-label', 'Search currency by code or name'); search.autocomplete = 'off';
    var list = document.createElement('div');
    list.className = 'cu-list'; list.setAttribute('role', 'listbox'); list.setAttribute('aria-label', 'Currencies');
    var note = document.createElement('div');
    note.className = 'cu-note';
    menu.appendChild(search); menu.appendChild(list); menu.appendChild(note);

    function item(code) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'cu-item'; b.setAttribute('role', 'option'); b.setAttribute('data-c', code);
      b.setAttribute('aria-selected', String(code === cur));
      if (code !== 'USD' && !(rates && rates[code])) b.disabled = true;
      b.appendChild(flagImg(code, 'cu-flag'));
      var nm = document.createElement('span'); nm.className = 'cu-name'; nm.textContent = NAME[code];
      var cd = document.createElement('span'); cd.className = 'cu-code'; cd.textContent = code;
      b.appendChild(nm); b.appendChild(cd);
      b.addEventListener('click', function () { setCurrency(code, true); close(); trig.focus(); });
      return b;
    }
    function head(t) { var h = document.createElement('div'); h.className = 'cu-head'; h.textContent = t; return h; }
    function render(q) {
      list.textContent = '';
      q = (q || '').trim().toLowerCase();
      if (!q) {
        list.appendChild(head('Popular'));
        quick.forEach(function (c) { list.appendChild(item(c)); });
        list.appendChild(head('All currencies'));
        LIST.map(function (c) { return c[0]; }).sort().forEach(function (c) { list.appendChild(item(c)); });
      } else {
        var hits = LIST.filter(function (c) { return c[0].toLowerCase().indexOf(q) === 0 || c[1].toLowerCase().indexOf(q) > -1; });
        if (!hits.length) { var e = document.createElement('div'); e.className = 'cu-note'; e.textContent = 'No currency found'; list.appendChild(e); }
        hits.forEach(function (c) { list.appendChild(item(c[0])); });
      }
    }
    function setNote() {
      note.textContent = rates ? 'Approximate. ECB rates of ' + dateLabel(ratesDate) + '. Hover or tap a price to see the published one.' : 'Exchange rates could not be loaded, so prices stay in USD.';
    }
    function close() { menu.hidden = true; trig.setAttribute('aria-expanded', 'false'); }
    function open() {
      render(''); setNote(); search.value = '';
      menu.hidden = false; trig.setAttribute('aria-expanded', 'true');
      if (window.innerWidth <= 640) {
        var r = trig.getBoundingClientRect();
        menu.style.position = 'fixed'; menu.style.left = '12px'; menu.style.right = '12px'; menu.style.width = 'auto'; menu.style.maxWidth = 'none'; menu.style.top = (r.bottom + 6) + 'px';
      } else { menu.style.cssText = ''; }
      search.focus();
    }
    trig.addEventListener('click', function () { menu.hidden ? open() : close(); });
    document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) close(); });
    search.addEventListener('input', function () { render(search.value); });
    wrap.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { close(); trig.focus(); return; }
      if (menu.hidden) return;
      var items = [].slice.call(list.querySelectorAll('.cu-item:not(:disabled)'));
      if (e.key === 'Enter' && document.activeElement === search && items.length) { e.preventDefault(); items[0].click(); return; }
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && items.length) {
        e.preventDefault();
        var i = items.indexOf(document.activeElement);
        if (i < 0) items[e.key === 'ArrowDown' ? 0 : items.length - 1].focus();
        else if (e.key === 'ArrowUp' && i === 0) search.focus();
        else items[(i + (e.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length].focus();
      }
    });
    wrap.appendChild(trig); wrap.appendChild(menu);
    var anchor = host.querySelector('.units-toggle') || host.querySelector('#themeToggle');
    host.insertBefore(wrap, anchor || null);
  }

  function init() {
    if (typeof document === 'undefined' || window.__cittCurrency) return;
    window.__cittCurrency = true;
    exempt = EXEMPT_PATH.test(location.pathname);
    var go = function () {
      var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
      build();
      bindTip();
      var start = function () {
        if (window.cittUnits && window.cittUnits.addTransform) window.cittUnits.addTransform(transform);
        window.cittCurrency = { get: function () { return cur; }, set: function (c) { setCurrency(c, true); }, convertText: convertText, spans: function (n) { return spansOf && spansOf.get(n); } };
        var s = saved();
        if (s && s !== 'USD') {
          fetch('/rates.json').then(function (r) { return r.json(); }).then(function (j) {
            rates = j.rates; ratesDate = j.date; setCurrency(s, false);
          }).catch(function () { setCurrency('USD', false); });
        } else {
          fetch('/rates.json').then(function (r) { return r.json(); }).then(function (j) { rates = j.rates; ratesDate = j.date; if (window.cittUnits && window.cittUnits.refresh) window.cittUnits.refresh(); }).catch(function () {});
        }
      };
      start();
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
  }
  return { init: init, convertText: convertText, regionCurrency: regionCurrency, LIST: LIST };
});
