// "Which medicine?" typeahead for every airline Medication page (user order 2026-10-20: the same field the country pages and the app have).
// A medicine maps to the airline's OWN card for its form (needles / liquids / pills); anything else gets the "No matches found" card with the airline's links.
// Same markup and classes as the country pages (.tasearch .tapick .tinput .suggest .sug), plus the clear (x) inside the field (DESIGN_SYSTEM 8.36).
const fs = require('fs');
const path = require('path');

let DB = null;
function medDb() {
  if (DB) return DB;
  const h = fs.readFileSync(path.join(__dirname, 'canitakethis.html'), 'utf8');
  const m = h.match(/var MED_DB=(\[[\s\S]*?\]);/);
  DB = new Function('return ' + m[1])();
  return DB;
}

// runs in the browser
function client(D) {
  var inp = document.getElementById('taInput'), sug = document.getElementById('taSuggest'), res = document.getElementById('taResult'), org = document.getElementById('taOriginal'), clr = document.getElementById('taClear');
  if (!inp) return;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function cardId(e) {
    var k = e.injectable ? 'needles' : (e.liquid ? 'liquids' : 'pills');
    if (D.ids.indexOf(k) > -1) return k;
    return D.ids.indexOf('unknown') > -1 ? 'unknown' : D.ids[0];
  }
  function pick(e) {
    var h;
    if (e.free) { h = D.nomatch.replace('%Q%', esc(e.n)); }
    else {
      h = D.cards[cardId(e)];
      var tag = '<div class="tagrow"><span class="tag tag-neutral">Active ingredient · ' + esc(e.ing) + '</span></div><p class="headline">';
      h = h.replace('<p class="headline">', tag);
      if (e.controlled) h = h.replace('</ul>', '<li>' + esc(e.ing) + ' is a controlled substance in many places: carry documentation, and the destination country’s rule matters most.</li></ul>');
    }
    res.innerHTML = h; org.style.display = 'none'; sug.innerHTML = ''; tabs(false);
  }
  // an answer for one medicine is not the Medication landing page: no tab is selected while it shows (same rule as the country pages)
  var tabOn = [].slice.call(document.querySelectorAll('nav.tabs .tab.on'));
  function tabs(on) { tabOn.forEach(function (t) { t.classList.toggle('on', on); }); }
  function restore() { res.innerHTML = ''; org.style.display = ''; tabs(true); }
  function sync() { clr.classList.toggle('on', !!inp.value); }
  inp.addEventListener('input', function () {
    sync();
    var q = inp.value.toLowerCase().trim();
    if (!q) { sug.innerHTML = ''; restore(); return; }
    var idx = [];
    for (var i = 0; i < D.db.length && idx.length < 6; i++) { if (D.db[i].n.toLowerCase().indexOf(q) > -1) idx.push(i); }
    var html = idx.map(function (i) { var x = D.db[i]; return '<div class="sug" data-i="' + i + '">' + esc(x.n) + '<span class="ing">' + esc(x.ing) + '</span></div>'; }).join('');
    if (!idx.length) html = '<div class="sug anyway" data-any="1">Check “' + esc(inp.value) + '” anyway<span class="ing">not in our list</span></div>';
    sug.innerHTML = html;
    [].forEach.call(sug.querySelectorAll('.sug'), function (el) {
      el.onclick = function () {
        if (el.getAttribute('data-any')) { pick({ free: true, n: inp.value.trim() }); }
        else { var x = D.db[+el.getAttribute('data-i')]; inp.value = x.n; sync(); pick(x); }
      };
    });
  });
  clr.onclick = function () { inp.value = ''; sync(); sug.innerHTML = ''; restore(); inp.focus(); };
}

// medCard(s) returns the card HTML used by the chips; esc escapes text. orig = the existing chips + cards + legend + script.
module.exports = function typeahead(a, SCEN, medCard, esc, orig) {
  const ids = SCEN.map(x => x.id);
  const cards = {};
  SCEN.forEach(x => { cards[x.id] = medCard(Object.assign({}, x, { first: true })).replace(/^<div class="cc" id="cc-[^"]*"[^>]*>/, '<div class="cc">'); });
  const seen = new Set(), srcs = [];
  SCEN.forEach(x => (x.sources || []).forEach(u => { if (!seen.has(u[0])) { seen.add(u[0]); srcs.push(u); } }));
  const help = srcs.map(x => '<a class="hitem" href="' + esc(x[0]) + '" target="_blank" rel="noopener"><span class="hi-ic">🌐</span><span class="hi-l">' + esc(x[1]) + '<small>Official guidance</small></span><span class="hi-go">↗</span></a>').join('');
  const nomatch = '<div class="pass nomatch print"><div class="strip"><div class="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.4 2.4 0 0 1 4.2 1.6c0 1.6-2.2 2-2.2 3.4"/><path d="M12 17.3h.01"/></svg></div><div><div class="verdict">No matches found</div><div class="vsub">' + esc(a.name) + '</div></div></div><div class="perf"></div><div class="body"><div class="tagrow"><span class="tag tag-neutral">Medicine · %Q%</span></div><p class="headline">Sorry, we couldn\'t find any matches for the item you were looking to get answers on. Please use the helpful source(s) we provided for further help.</p><div class="help"><div class="help-h">Helpful sources</div>' + help + '<div class="hnote">To be 100% sure, we always recommend confirming with the official channels.</div></div><div class="src">We only give a verdict when we can back it up. For everything else, we hand you the right people.</div></div></div>';
  const D = JSON.stringify({ db: medDb(), ids, cards, nomatch }).replace(/</g, '\\u003c');
  const field = '<div class="tasearch"><label class="talabel" for="taInput">Which medicine?</label><div class="tapick"><div class="inwrap"><input id="taInput" class="tinput" type="text" autocomplete="off" placeholder="Type a medicine or ingredient (e.g. Sudafed)"><button type="button" class="tclear" id="taClear" aria-label="Clear"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div><div id="taSuggest" class="suggest"></div></div></div><div id="taResult"></div><div id="taOriginal">' + orig + '</div>';
  return field + '<script>(' + client.toString() + ')(' + D + ');</scr' + 'ipt>';
};
