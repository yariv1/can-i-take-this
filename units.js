/* canitakethis.co unit switch — shared, self-contained, theme-inheriting.
   Adds an [ in · lb | cm · kg ] pill to the page header (.topbar-right) and converts
   every length (cm/in) and weight (kg/lb) in the visible text. Choice is saved in
   localStorage ('citt-units'); first visit is picked from the browser's language /
   timezone (no IP lookup). Authored HTML is never changed, so search engines see the
   original text. Rules: DESIGN_SYSTEM.md section "Unit switch". */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else api.init();
})(this, function () {
  var KEY = 'citt-units';
  var NUM = '\\+?\\d+(?:\\.\\d+)?';
  var SEP = '(?:\\s*[×x*]\\s*|\\s*[-–]\\s*|\\s+to\\s+|\\s*,(?!\\d{3}(?!\\d))\\s*(?:(?:or|and)\\s+)?|\\s+(?:or|and)\\s+|\\s*/\\s*)';
  var GROUP = NUM + '(?:' + SEP + NUM + ')*';
  var BARE_IN = 'in(?=\\s*(?:[)\\],.;:/(]|$)|\\s+(?:total|combined|linear|overall|max|maximum|tall|wide|long|deep|length|height|width)\\b)';
  var DIM_IN = 'in(?![A-Za-z])(?<=\\d\\s*[×x*]\\s*\\d+(?:\\.\\d+)?\\s*in)';
  var UNIT = '(?:' + DIM_IN + '|centimet(?:er|re)s?|cm|kilograms?|kilos?|kgs?|pounds?|lbs?|inches|inch|' + BARE_IN + ')(?![A-Za-z])|″|"';
  var RE = new RegExp('(?<![\\w.$£€¥])(?<!\\d,)('+ GROUP + ')(\\s*)(' + UNIT + ')', 'g');
  var TAIL = new RegExp('^(\\s*\\(\\s*)(' + GROUP + ')(\\s*)(' + UNIT + ')(\\s*\\))');
  var TAILS = new RegExp('^(\\s*/\\s*)(' + GROUP + ')(\\s*)(' + UNIT + ')');

  function kind(u) {
    u = u.toLowerCase();
    if (u === 'cm' || u.indexOf('centimet') === 0) return 'cm';
    if (u === 'in' || u === 'inch' || u === 'inches' || u === '"' || u === '″') return 'in';
    if (u.indexOf('kilo') === 0 || u === 'kg' || u === 'kgs') return 'kg';
    return 'lb';
  }
  var SYS = { cm: 'met', kg: 'met', 'in': 'imp', lb: 'imp' };
  var TO = { cm: 'in', 'in': 'cm', kg: 'lb', lb: 'kg' };
  var K = { cm: 1 / 2.54, 'in': 2.54, kg: 2.2046226, lb: 1 / 2.2046226 };

  function fmt(x, to) {
    var d = to === 'cm' ? (x >= 10 ? 0 : 1) : 1;
    var s = x.toFixed(d);
    return s.indexOf('.') > -1 ? s.replace(/\.0+$/, '') : s;
  }
  function label(src, to) {
    var s = src.toLowerCase(), plural = /s$/.test(s);
    var out = { cm: 'cm', 'in': 'in', kg: 'kg', lb: 'lb' }[to];
    if (/^(centimet|inches|inch|kilogram|pounds?$)/.test(s) && s !== 'lbs') {
      out = { cm: 'centimetres', 'in': 'inches', kg: 'kilograms', lb: 'pounds' }[to];
      if (/^centimeters?$/.test(s) || /^kilogram|^pounds?$/.test(s)) out = out.replace('centimetres', 'centimeters');
    } else if (s === 'lbs') out = to === 'kg' ? 'kg' : 'lb';
    return out;
  }
  function nums(g) { return (g.match(/\d+(?:\.\d+)?/g) || []).map(Number); }
  function hasBigListNumber(g) {
    return /,|\s(?:or|and)\s/.test(g) && nums(g).some(function (n) { return n >= 1000; });
  }
  function convertGroup(g, k) {
    return g.replace(/\d+(?:\.\d+)?/g, function (n) { return fmt(parseFloat(n) * K[k], TO[k]); });
  }
  function isDual(g1, k1, g2, k2) {
    if (TO[k1] !== k2) return false;
    var a = nums(g1), b = nums(g2);
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; i++) {
      var exp = a[i] * K[k1];
      if (Math.abs(exp - b[i]) > Math.max(0.6, Math.abs(exp) * 0.03)) return false;
    }
    return true;
  }

  /* convert a piece of text to mode 'imp' or 'met' */
  function convertText(text, mode) {
    var out = '', last = 0, m;
    RE.lastIndex = 0;
    while ((m = RE.exec(text))) {
      var g1 = m[1], sp = m[2], u1 = m[3], k1 = kind(u1);
      var end = m.index + m[0].length;
      if (hasBigListNumber(g1)) continue;
      var rest = text.slice(end), t = TAIL.exec(rest), slash = false;
      if (!t) { t = TAILS.exec(rest); slash = !!t; }
      var rep, consumed = end;
      if (t && isDual(g1, k1, t[2], kind(t[4]))) {
        consumed = end + t[0].length;
        rep = SYS[k1] === mode ? m[0] + t[0]
          : t[2] + t[3] + t[4] + (slash ? ' / ' + g1 + sp + u1 : ' (' + g1 + sp + u1 + ')');
      } else if (SYS[k1] === mode) {
        continue;
      } else {
        var space = sp === '' && (u1 === '"' || u1 === '″') ? ' ' : sp;
        rep = convertGroup(g1, k1) + space + label(u1, TO[k1]);
      }
      out += text.slice(last, m.index) + rep;
      last = consumed;
      RE.lastIndex = consumed;
    }
    return out + text.slice(last);
  }

  /* ---------- browser part ---------- */
  var IMPERIAL_REGIONS = { US: 1, LR: 1, MM: 1 };
  var US_ZONES = /^(America\/(New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Detroit|Boise|Indiana|Kentucky|Menominee|North_Dakota|Juneau|Sitka|Nome|Adak|Metlakatla|Yakutat)|Pacific\/Honolulu|US\/)/;
  function detect() {
    try {
      var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
      for (var i = 0; i < langs.length; i++) {
        var mm = /^[a-z]{2,3}[-_]([A-Za-z]{2})/.exec(langs[i] || '');
        if (mm) return IMPERIAL_REGIONS[mm[1].toUpperCase()] ? 'imp' : 'met';
      }
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (US_ZONES.test(tz)) return 'imp';
      if (tz) return 'met';
    } catch (e) {}
    return 'imp'; /* unknown: US first */
  }
  function saved() { try { var v = localStorage.getItem(KEY); return v === 'imp' || v === 'met' ? v : null; } catch (e) { return null; } }

  var CSS = '.units-toggle{position:relative;display:inline-flex}'
    + '.units-toggle .ut-trigger{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line,#2A3A5E);background:var(--surface,#161F3A);color:var(--text,#EDF0F7);font:600 .85rem/1.2 Inter,system-ui,sans-serif;padding:6px 10px;border-radius:999px;cursor:pointer;white-space:nowrap}'
    + '.units-toggle .ut-trigger:hover{border-color:var(--accent,#4CC2FF)}'
    + '.units-toggle .ut-trigger svg{flex:none}'
    + '.units-toggle .ut-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:100;min-width:250px;padding:6px;border:1px solid var(--line,#2A3A5E);border-radius:14px;background:var(--surface,#161F3A);box-shadow:0 12px 32px rgba(0,0,0,.35)}'
    + '.units-toggle .ut-menu[hidden]{display:none}'
    + '.units-toggle .ut-menu button{display:flex;width:100%;align-items:center;justify-content:space-between;gap:14px;border:0;background:transparent;color:var(--text,#EDF0F7);font:500 .9rem/1.3 Inter,system-ui,sans-serif;padding:9px 10px;border-radius:9px;cursor:pointer;text-align:left}'
    + '.units-toggle .ut-menu button:hover{background:var(--surface-2,#22304F)}'
    + '.units-toggle .ut-name{white-space:nowrap}'
    + '.units-toggle .ut-short{white-space:nowrap;color:var(--muted,#8A96B8);font-weight:600;font-size:.85rem}'
    + '.units-toggle .ut-menu button[aria-checked="true"]{background:#4CC2FF;color:#08111f}'
    + '.units-toggle .ut-menu button[aria-checked="true"] .ut-short{color:#08111f}'
    + '[data-theme="light"] .units-toggle .ut-menu button[aria-checked="true"]{background:#1B2233;color:#fff}'
    + '[data-theme="light"] .units-toggle .ut-menu button[aria-checked="true"] .ut-short{color:#fff}'
    + '.units-toggle button:focus-visible{outline:2px solid var(--accent,#4CC2FF);outline-offset:2px}'
    /* every pill in the header (blog link, currency, units, theme) shares one height */
    + '.topbar-right .hdr-blog-link,.topbar-right .theme-toggle,.topbar-right #themeToggle,.units-toggle .ut-trigger,.cur-toggle .ut-trigger{box-sizing:border-box;height:34px;display:inline-flex;align-items:center;justify-content:center;padding-top:0;padding-bottom:0;line-height:1}'
    + '.topbar{container-type:inline-size}@container (max-width:540px){.brand h1,.brand .bn{display:none}}'
    + '@media(max-width:640px){.brand h1,.brand .bn{display:none}}@media(max-width:420px){.units-toggle .ut-trigger{padding:6px 8px;gap:4px}#themeToggle #themeLabel{display:none}#themeToggle{padding:7px 9px}}';

  var mode = 'imp', orig = typeof WeakMap === 'function' ? new WeakMap() : null, observer = null, xforms = [];
  var SKIP = /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|INPUT|SELECT|OPTION|CODE|PRE|TITLE)$/;

  function skipNode(n) {
    for (var p = n.parentNode; p && p.nodeType === 1; p = p.parentNode) {
      if (SKIP.test(p.nodeName) || p.classList.contains('units-toggle') || p.classList.contains('cur-toggle') || p.getAttribute('data-units') === 'keep') return true;
      if (p.nodeName === 'TABLE') {
        if (p.__uk === undefined) {
          var h = (p.querySelector('thead') || p.rows[0] || p).textContent;
          p.__uk = /inch/i.test(h) && /centi?m/i.test(h);
        }
        if (p.__uk) return true;
      }
    }
    return false;
  }
  function processText(n) {
    var base = orig.has(n) ? orig.get(n) : n.nodeValue;
    var next = convertText(base, mode);
    for (var xi = 0; xi < xforms.length; xi++) next = xforms[xi](next, n);
    if (next !== base) { orig.set(n, base); if (n.nodeValue !== next) n.nodeValue = next; }
    else if (orig.has(n)) { if (n.nodeValue !== base) n.nodeValue = base; orig.delete(n); }
  }
  function walk(rootEl) {
    if (rootEl.nodeType === 3) { if (!skipNode(rootEl)) processText(rootEl); return; }
    if (rootEl.nodeType !== 1 || SKIP.test(rootEl.nodeName)) return;
    var tw = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, null), n, list = [];
    while ((n = tw.nextNode())) list.push(n);
    list.forEach(function (t) { if (!skipNode(t)) processText(t); });
  }
  var LABEL = { imp: 'in · lb', met: 'cm · kg' };
  /* stat boxes keep the number in .stat-num and the unit word at the start of .stat-label */
  var STAT_LABEL = /^(inches|inch|centimet(?:er|re)s?|cm|kilograms?|kgs?|pounds?|lbs?)\b([\s\S]*)$/i;
  function statBoxes(rootEl) {
    if (!rootEl.querySelectorAll) return;
    var boxes = rootEl.querySelectorAll('.stat-box');
    for (var i = 0; i < boxes.length; i++) {
      var b = boxes[i], num = b.querySelector('.stat-num'), lab = b.querySelector('.stat-label');
      if (!num || !lab) continue;
      if (!b.__uo) {
        var m = STAT_LABEL.exec(lab.textContent.trim());
        b.__uo = m ? { n: num.textContent, u: m[1], r: m[2] } : {};
      }
      var o = b.__uo;
      if (!o.u) continue;
      var out = convertText(o.n + ' ' + o.u, mode), mm = /^([\s\S]*?)\s+(\S+)$/.exec(out);
      if (!mm) continue;
      num.textContent = mm[1]; lab.textContent = mm[2] + o.r;
    }
  }
  function setMode(m, persist) {
    mode = m;
    document.documentElement.setAttribute('data-units', m);
    if (persist) { try { localStorage.setItem(KEY, m); } catch (e) {} }
    var cur = document.querySelector('.units-toggle .ut-label');
    if (cur) cur.textContent = LABEL[m];
    var opts = document.querySelectorAll('.units-toggle .ut-menu button');
    for (var i = 0; i < opts.length; i++) {
      var on = opts[i].getAttribute('data-u') === m;
      opts[i].setAttribute('aria-checked', String(on));
    }
    walk(document.body);
    statBoxes(document);
    try { window.dispatchEvent(new CustomEvent('citt-units-change', { detail: m })); } catch (e) {}
  }
  function build() {
    var host = document.querySelector('.topbar-right');
    if (!host || host.querySelector('.units-toggle')) return;
    var wrap = document.createElement('div');
    wrap.className = 'units-toggle';
    var trig = document.createElement('button');
    trig.type = 'button'; trig.className = 'ut-trigger';
    trig.setAttribute('aria-haspopup', 'true'); trig.setAttribute('aria-expanded', 'false');
    trig.setAttribute('aria-label', 'Units: inches and pounds or centimetres and kilograms');
    trig.innerHTML = '<span class="ut-label"></span><svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="M2 4.5l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var menu = document.createElement('div');
    menu.className = 'ut-menu'; menu.setAttribute('role', 'menu'); menu.hidden = true;
    [['imp', 'Inches · pounds', 'in · lb'], ['met', 'Centimetres · kilograms', 'cm · kg']].forEach(function (o) {
      var b = document.createElement('button');
      b.type = 'button'; b.setAttribute('role', 'menuitemradio'); b.setAttribute('data-u', o[0]);
      b.setAttribute('aria-checked', 'false');
      b.innerHTML = '<span class="ut-name">' + o[1] + '</span><span class="ut-short">' + o[2] + '</span>';
      b.addEventListener('click', function () { setMode(o[0], true); close(); trig.focus(); });
      menu.appendChild(b);
    });
    function close() { menu.hidden = true; trig.setAttribute('aria-expanded', 'false'); }
    function open() { menu.hidden = false; trig.setAttribute('aria-expanded', 'true'); var c = menu.querySelector('[aria-checked="true"]') || menu.firstChild; c.focus(); }
    trig.addEventListener('click', function () { menu.hidden ? open() : close(); });
    document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) close(); });
    wrap.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { close(); trig.focus(); }
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !menu.hidden) {
        e.preventDefault();
        var items = [].slice.call(menu.querySelectorAll('button')), i = items.indexOf(document.activeElement);
        items[(i + (e.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length].focus();
      }
    });
    wrap.appendChild(trig); wrap.appendChild(menu);
    var theme = host.querySelector('#themeToggle');
    if (theme) theme.setAttribute('aria-label', 'Switch between light and dark theme');
    host.insertBefore(wrap, theme || null);
  }
  function init() {
    if (typeof document === 'undefined' || window.__cittUnits) return;
    window.__cittUnits = true;
    var go = function () {
      var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
      build();
      setMode(saved() || detect(), false);
      if (window.MutationObserver) {
        observer = new MutationObserver(function (muts) {
          muts.forEach(function (mu) { for (var i = 0; i < mu.addedNodes.length; i++) { walk(mu.addedNodes[i]); if (mu.addedNodes[i].nodeType === 1) statBoxes(mu.addedNodes[i]); } });
        });
        observer.observe(document.body, { childList: true, subtree: true });
      }
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
    window.cittUnits = { get: function () { return mode; }, set: function (m) { setMode(m, true); },
      /* other switches (currency.js) add a text transform and ask for a re-walk */
      addTransform: function (fn) { xforms.push(fn); },
      refresh: function () { walk(document.body); statBoxes(document); } };
  }
  return { init: init, convertText: convertText, detect: detect };
});
