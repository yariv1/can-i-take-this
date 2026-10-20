// "Which medicine?" typeahead for every airline Medication page (user order 2026-10-20: the same field the country pages and the app have; DESIGN_SYSTEM 8.38).
// A medicine maps to the airline's OWN card for its form (needles / liquids / pills); anything else gets the "No matches found" card with the airline's links.
const PT = require('./page_typeahead.js');

// medCard(s) returns the card HTML used by the chips; esc escapes text. orig = the existing chips + cards + legend + script.
module.exports = function typeahead(a, SCEN, medCard, esc, orig) {
  const ids = SCEN.map(x => x.id);
  const cards = {};
  SCEN.forEach(x => { cards[x.id] = medCard(Object.assign({}, x, { first: true })).replace(/^<div class="cc" id="cc-[^"]*"[^>]*>/, '<div class="cc">'); });
  const seen = new Set(), srcs = [];
  SCEN.forEach(x => (x.sources || []).forEach(u => { if (!seen.has(u[0])) { seen.add(u[0]); srcs.push(u); } }));
  const cardFor = e => { const k = e.injectable ? 'needles' : (e.liquid ? 'liquids' : 'pills'); return ids.indexOf(k) > -1 ? k : (ids.indexOf('unknown') > -1 ? 'unknown' : ids[0]); };
  const items = PT.appVar('MED_DB').map(e => ({
    n: e.n, sub: e.ing, card: cardFor(e),
    tags: [PT.tagT('Ingredient', e.ing)],
    extra: e.controlled ? e.ing + ' is a controlled substance in many places: carry documentation, and the destination country’s rule matters most.' : ''
  }));
  const t = PT.build({ label: 'Which medicine?', placeholder: 'Type a medicine or ingredient (e.g. Sudafed)', items, cards, nomatchHtml: PT.nomatchCard(esc, a.name, 'Medicine', srcs), ins: '<p class="headline">' });
  return t.field + '<div id="taResult"></div><div id="taOriginal">' + orig + '</div>' + t.script;
};
