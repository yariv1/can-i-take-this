// Shared typeahead for pages whose answers are built from the page's OWN verified cards (airline Medication pages, verified food country pages).
// Same markup and classes as the generic country typeahead (.tasearch .tapick .tinput .suggest .sug) with the clear (x) inside the field (DESIGN_SYSTEM 8.36).
// While an answer shows: the page content below is hidden and NO page tab is selected (8.38); clearing the field restores both.
// Items are resolved on the server: each item names the card that answers it (or none = "No matches found" card with the page's sources).
const fs = require('fs');
const path = require('path');

const cache = {};
// reads a data variable (MED_DB, FOOD_DB, CATNAME ...) from the single source of truth, the app file
function appVar(name) {
  if (cache[name]) return cache[name];
  const h = fs.readFileSync(path.join(__dirname, 'canitakethis.html'), 'utf8');
  const m = h.match(new RegExp('var ' + name + '=(\\[[\\s\\S]*?\\]|\\{[\\s\\S]*?\\});'));
  cache[name] = new Function('return ' + m[1])();
  return cache[name];
}

// runs in the browser
function client(D) {
  var inp = document.getElementById('taInput'), sug = document.getElementById('taSuggest'), res = document.getElementById('taResult'), org = document.getElementById('taOriginal'), clr = document.getElementById('taClear');
  if (!inp) return;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var tabOn = [].slice.call(document.querySelectorAll('nav.tabs .tab.on'));
  function tabs(on) { tabOn.forEach(function (t) { t.classList.toggle('on', on); }); }
  function tagRow(tags) { return '<div class="tagrow">' + tags.map(function (t) { return '<span class="tag tag-' + (t.k || 'neutral') + '">' + esc(t.t) + '</span>'; }).join('') + '</div>'; }
  function pick(it) {
    var h;
    if (it.free || !it.card) { h = D.nomatch.replace('%Q%', esc(it.n)); }
    else {
      h = D.cards[it.card];
      if (it.tags && it.tags.length) h = h.replace(D.ins, tagRow(it.tags) + D.ins);
      if (it.extra) h = h.replace('</ul>', '<li>' + esc(it.extra) + '</li></ul>');
    }
    res.innerHTML = h; org.style.display = 'none'; sug.innerHTML = ''; tabs(false);
  }
  function restore() { res.innerHTML = ''; org.style.display = ''; tabs(true); }
  function sync() { clr.classList.toggle('on', !!inp.value); }
  inp.addEventListener('input', function () {
    sync();
    var q = inp.value.toLowerCase().trim();
    if (!q) { sug.innerHTML = ''; restore(); return; }
    var idx = [];
    for (var i = 0; i < D.items.length && idx.length < 6; i++) { if (D.items[i].n.toLowerCase().indexOf(q) > -1) idx.push(i); }
    var html = idx.map(function (i) { var x = D.items[i]; return '<div class="sug" data-i="' + i + '">' + esc(x.n) + (x.sub ? '<span class="ing">' + esc(x.sub) + '</span>' : '') + '</div>'; }).join('');
    if (!idx.length) html = '<div class="sug anyway" data-any="1">Check “' + esc(inp.value) + '” anyway<span class="ing">not in our list</span></div>';
    sug.innerHTML = html;
    [].forEach.call(sug.querySelectorAll('.sug'), function (el) {
      el.onclick = function () {
        if (el.getAttribute('data-any')) { pick({ free: true, n: inp.value.trim() }); }
        else { var x = D.items[+el.getAttribute('data-i')]; inp.value = x.n; sync(); pick(x); }
      };
    });
  });
  clr.onclick = function () { inp.value = ''; sync(); sug.innerHTML = ''; restore(); inp.focus(); };
}

// opt: { label, placeholder, items:[{n, sub, tags:[{t,k}], extra, card}], cards:{id:html}, nomatchHtml (with %Q%), ins }
function build(opt) {
  const D = JSON.stringify({ items: opt.items, cards: opt.cards, nomatch: opt.nomatchHtml, ins: opt.ins }).replace(/</g, '\\u003c');
  const field = '<div class="tasearch"><label class="talabel" for="taInput">' + opt.label + '</label><div class="tapick"><div class="inwrap"><input id="taInput" class="tinput" type="text" autocomplete="off" placeholder="' + opt.placeholder + '"><button type="button" class="tclear" id="taClear" aria-label="Clear"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div><div id="taSuggest" class="suggest"></div></div></div>';
  const script = '<script>(' + client.toString() + ')(' + D + ');</scr' + 'ipt>';
  return { field, script };
}

// the "No matches found" card: the page's own helpful sources, nothing invented
function nomatchCard(esc, who, tagLabel, sources) {
  const tcol = appVar('TAG_TYPE')[tagLabel];
  const help = sources.map(x => '<a class="hitem" href="' + esc(x[0]) + '" target="_blank" rel="noopener"><span class="hi-ic">🌐</span><span class="hi-l">' + esc(x[1]) + '<small>Official guidance</small></span><span class="hi-go">↗</span></a>').join('');
  return '<div class="pass nomatch print"><div class="strip"><div class="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.4 2.4 0 0 1 4.2 1.6c0 1.6-2.2 2-2.2 3.4"/><path d="M12 17.3h.01"/></svg></div><div><div class="verdict">No matches found</div><div class="vsub">' + esc(who) + '</div></div></div><div class="perf"></div><div class="body"><div class="tagrow"><span class="tag tag-' + tcol + '">' + esc(tagLabel) + ' · %Q%</span></div><p class="headline">Sorry, we couldn\'t find any matches for the item you were looking to get answers on. Please use the helpful source(s) we provided for further help.</p><div class="help"><div class="help-h">Helpful sources</div>' + help + '<div class="hnote">To be 100% sure, we always recommend confirming with the official channels.</div></div><div class="src">We only give a verdict when we can back it up. For everything else, we hand you the right people.</div></div></div>';
}

// tags come from the single registry in the app file (TAG_TYPE / TAG_STATUS, DESIGN_SYSTEM 8.40)
function tagT(type, name) { const T = appVar('TAG_TYPE'); if (!T[type]) throw new Error('unknown tag type ' + type); return { t: type + ' · ' + name, k: T[type] }; }

module.exports = { build, appVar, nomatchCard, tagT };
