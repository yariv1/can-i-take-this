// Country vaping pages: official WHO data (WHO report on the global tobacco epidemic 2023, country profiles, data as at 2022).
// Data file country_vape_who.json is extracted from each country's WHO profile PDF (table "Regulation of ENDS and ENNDS", ENDS column).
// We state only what the WHO table says; we never turn it into a customs allowance.
const DATA = require('./country_vape_who.json');
const BAGD = require('./baggage_detail.js');
const { CSS, table, esc } = BAGD;
const READ = '8 October 2026';

function lc(s) { return s.charAt(0).toLowerCase() + s.slice(1); }

function analyse(D) {
  const g = D.general || 'None';
  const none = /^none$/i.test(g);
  const hasImport = /import/i.test(g);
  const presc = /prescription/i.test(g);
  const except = /except for personal use/i.test(g);
  const hasUse = /\buse\b/i.test(g);
  let short, lead;
  return { g, none, hasImport, presc, except, hasUse };
}

function indoorText(cn, D) {
  if (D.indoor === 'Complete ban') return 'WHO reports a complete ban on using e-cigarettes in indoor public places, workplaces and public transport in ' + cn + '.';
  if (D.indoor === 'Partial ban') return 'WHO reports a partial ban on using e-cigarettes in indoor public places, workplaces and public transport in ' + cn + '.';
  if (D.indoor === 'None') return 'WHO reports no national ban on using e-cigarettes in indoor public places, workplaces and public transport in ' + cn + '.';
  return 'WHO does not report a ban on using e-cigarettes in indoor public places in ' + cn + '.';
}

function build(c) {
  const D = DATA.c[c.code]; if (!D) return null;
  const cn = c.name, A = analyse(D);
  let status, lead, travel;
  if (A.none) {
    status = 'No General Ban';
    lead = 'WHO\'s 2023 country profile for ' + cn + ' (data as at 2022) lists no general ban on e-cigarettes' +
      (D.laws === 'Yes' ? ' and says national laws or regulations regulate them' : ' and says no national law regulates them') + '. ' + indoorText(cn, D) +
      ' That is the law on e-cigarette products: it does not say how many devices or how much e-liquid customs lets you carry in a bag, so check with the customs authority before you travel.';
    travel = 'WHO lists no general ban on e-cigarettes in ' + cn + ', but its profile does not publish a traveller allowance. Check the customs rules for ' + cn + ', and on the plane keep the device in your cabin baggage as airlines require.';
  } else if (A.presc) {
    status = 'Prescription Needed';
    lead = 'WHO\'s 2023 country profile for ' + cn + ' (data as at 2022) lists the sale and import of nicotine e-cigarettes as banned without a doctor\'s prescription. ' + indoorText(cn, D) + ' Treat nicotine vapes and e-liquid as items you cannot simply pack for ' + cn + ' and check the customs and health rules first.';
    travel = 'WHO\'s wording for ' + cn + ' is "' + A.g + '", so nicotine e-cigarettes are not freely sold or imported. Check the rules for travellers with the customs and health authorities before you pack one.';
  } else if (A.hasImport && A.except) {
    status = 'Import Banned, Personal Use Exception';
    lead = 'WHO\'s 2023 country profile for ' + cn + ' (data as at 2022) lists "' + A.g + '". ' + indoorText(cn, D) + ' The personal-use exception is WHO\'s wording; the profile gives no quantity, so confirm what is allowed with the customs authority.';
    travel = 'WHO lists a ban on importing e-cigarettes into ' + cn + ' with an exception for personal use, and gives no quantity. Confirm with customs before you pack one.';
  } else if (A.hasImport) {
    status = A.hasUse ? 'Use, Sale and Import Banned' : 'Sale and Import Banned';
    lead = 'WHO\'s 2023 country profile for ' + cn + ' (data as at 2022) lists "' + A.g + '" for e-cigarettes. ' + indoorText(cn, D) + ' Treat vapes, pods and e-liquid as items not to pack for ' + cn + ' unless the customs authority confirms otherwise.';
    travel = 'WHO lists a ban on importing e-cigarettes into ' + cn + ' ("' + A.g + '"). Do not pack a vape or e-liquid unless the customs authority confirms in writing that you may.';
  } else {
    status = 'Sale Restricted';
    lead = 'WHO\'s 2023 country profile for ' + cn + ' (data as at 2022) lists "' + A.g + '" for e-cigarettes. ' + indoorText(cn, D) + ' It does not mention importing, so check the customs rules for travellers before you pack one.';
    travel = 'WHO lists "' + A.g + '" for ' + cn + ' but does not list an import ban. It also publishes no traveller allowance, so check with the customs authority.';
  }
  const rows = [
    ['General bans on e-cigarettes', A.g + (D.ennds_only_ban ? ' (WHO also lists a ban for non-nicotine e-cigarettes)' : '')],
    ['National laws regulate e-cigarettes', D.laws],
    ['Use in indoor public places, workplaces, public transport', D.indoor === 'None' ? 'No ban reported' : D.indoor],
    ['Minimum age of sale', D.minAge ? String(D.minAge) : 'Not reported'],
    ['Advertising and promotion of devices', D.ads === '—' ? 'Not reported' : D.ads],
    ['Flavours', D.flavours === '—' ? 'Not reported' : D.flavours]
  ];
  const faq = [
    ['Is vaping legal in ' + cn + '?', lead],
    ['Can I bring a vape to ' + cn + '?', travel],
    ['Can I vape in public places in ' + cn + '?', indoorText(cn, D)],
    ['What is the minimum age to buy a vape in ' + cn + '?', D.minAge ? 'WHO reports a minimum age of sale of ' + D.minAge + ' for e-cigarettes in ' + cn + '.' : 'WHO\'s profile does not report a minimum age of sale for e-cigarettes in ' + cn + '.']
  ];
  const list = [];
  if (D.note) list.push('<strong>WHO note:</strong> ' + esc(D.note));
  list.push('<strong>How old is this:</strong> the WHO report is dated 2023 and its e-cigarette rows are as at 2022; laws can change, so check the current rule with the authority below.');
  list.push('<strong>On the plane:</strong> separately from the country\'s law, airlines require e-cigarettes in the cabin and not in checked baggage; see the airline vape pages.');
  const html = '<div class="bd-wrap">' + CSS + '<p class="bd-lead"><strong>' + esc(lead) + '</strong></p>' +
    '<section class="bd-sec"><h2>🚭 What WHO reports for ' + esc(cn) + '</h2><p>From the WHO report on the global tobacco epidemic 2023, country profile for ' + esc(cn) + ', table "Regulation of ENDS and ENNDS" (nicotine e-cigarettes).</p>' +
    table({ head: ['WHO item', 'Reported for ' + cn], rows }) + '<ul>' + list.map(x => '<li>' + x + '</li>').join('') + '</ul></section>' +
    '<section class="bd-faq"><h2>❓ Quick answers</h2>' + faq.map(q => '<h3>' + esc(q[0]) + '</h3><p>' + esc(q[1]) + '</p>').join('') + '</section>' +
    '<p class="bd-chk">WHO profile read ' + READ + '. This is guidance, not a customs allowance: confirm with the customs authority of ' + esc(cn) + ' before you travel.</p>' +
    '<div class="bd-src"><div class="h">🔗 Official source</div><a href="' + D.pdf + '" target="_blank" rel="noopener noreferrer">WHO report on the global tobacco epidemic 2023: country profile, ' + esc(cn) + '</a></div></div>';
  let ttl = 'Vaping in ' + cn + ' 2026: ' + status;
  if (ttl.length > 62) ttl = 'Vaping in ' + cn + ' 2026: ' + (A.none ? 'No General Ban' : A.hasImport ? 'Import Banned' : status);
  if (ttl.length > 62) ttl = 'Vaping in ' + cn + ' 2026: Is It Legal?';
  let desc = 'Is vaping legal in ' + cn + '? ' + (A.none ? 'WHO lists no general ban on e-cigarettes' : 'WHO lists: ' + A.g) + '; use in indoor public places: ' + (D.indoor === 'None' ? 'no ban reported' : lc(D.indoor)) + '.';
  if (desc.length > 158) desc = 'Is vaping legal in ' + cn + '? WHO (2023 report, 2022 data): ' + (A.none ? 'no general ban on e-cigarettes' : A.g) + '.';
  if (desc.length > 158) desc = desc.slice(0, 155).replace(/\s+\S*$/, '') + '...';
  return { ttl, desc, html, faq };
}

module.exports = { build };
