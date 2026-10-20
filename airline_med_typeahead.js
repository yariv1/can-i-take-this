// "Which medicine?" typeahead for every airline Medication page (user order 2026-10-20: the same field the country pages and the app have; DESIGN_SYSTEM 8.38).
// A medicine maps to the airline's OWN card for its form (needles / liquids / pills); anything else gets the "No matches found" card with the airline's links.
const PT = require('./page_typeahead.js');
const poss = n => (/s$/i.test(n) ? n + '’' : n + '’s'); // Japan Airlines’ / Delta’s

// medCard(s) returns the card HTML used by the chips; esc escapes text. orig = the existing chips + cards + legend + script.
module.exports = function typeahead(a, SCEN, medCard, esc, orig) {
  const ids = SCEN.map(x => x.id);
  const cards = {};
  SCEN.forEach(x => { cards[x.id] = medCard(Object.assign({}, x, { first: true })).replace(/^<div class="cc" id="cc-[^"]*"[^>]*>/, '<div class="cc">'); });
  const seen = new Set(), srcs = [];
  SCEN.forEach(x => (x.sources || []).forEach(u => { if (!seen.has(u[0])) { seen.add(u[0]); srcs.push(u); } }));
  // a card named 'banned' (airline bans specific medicines on some routes) answers those medicines
  const BANNED = /^(Tramadol)$/;
  // The answer is never an empty "not published": if the airline's page has no card for this form (needles, liquid medicine), the answer is the airline's GENERAL medicine card (pills) plus one line saying that no specific rule is published for this form. If there is no general card either, the answer is the site-wide "Check the source" card.
  const realIds = ids.filter(i => i !== 'unknown' && i !== 'abroad');
  const formOf = e => (e.injectable ? 'needles' : (e.liquid ? 'liquids' : 'pills'));
  const FORMTXT = { needles: 'needles and syringes', liquids: 'liquid medicine over 100 ml', pills: 'this kind of medicine' };
  const resolve = e => {
    if (ids.indexOf('banned') > -1 && BANNED.test(e.ing)) return { card: 'banned', extra: '' };
    const f = formOf(e);
    if (ids.indexOf(f) > -1) return { card: f, extra: '' };
    if (f !== 'pills' && ids.indexOf('pills') > -1) return { card: 'pills', extra: poss(a.name) + ' page gives no specific rule for ' + FORMTXT[f] + ': ask ' + a.name + ' and check the security rules at your departure airport.' };
    return { card: ids.indexOf('unknown') > -1 ? 'unknown' : realIds[0], extra: '' };
  };
  const items = PT.appVar('MED_DB').map(e => ({
    n: e.n, sub: e.ing, card: resolve(e).card,
    tags: [PT.tagT('Ingredient', e.ing)],
    extra: [resolve(e).extra, e.controlled ? e.ing + ' is a controlled substance in many places: carry documentation, and the destination country’s rule matters most.' : ''].filter(Boolean).join(' ')
  }));
  const t = PT.build({ label: 'Which medicine?', placeholder: 'Type a medicine or ingredient (e.g. Sudafed)', items, cards, nomatchHtml: PT.nomatchCard(esc, a.name, 'Medicine', srcs), ins: '<p class="headline">' });
  return t.field + '<div id="taResult"></div><div id="taOriginal">' + orig + '</div>' + t.script;
};
