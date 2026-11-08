// Depth layer for country category pages that have no dedicated module (AdSense pilot, 2026-11-08).
// Every row is written in our own words from the country's OWN official page(s) read on READ; where the page is silent we say so.
// Title, description, H1 and the verdict card are NOT touched: this only adds a section under the verdict.
const BAGD = require('./baggage_detail.js');
const { CSS, table, esc } = BAGD;
const READ = '8 November 2026';
const ICON = { tobacco: '🚬', alcohol: '🍾', cash: '💶', plants: '🌱', hub: '🛃' };
const WHAT = { tobacco: 'tobacco', alcohol: 'duty-free alcohol', cash: 'cash', plants: 'plants and seeds', hub: 'customs' };

const DATA = {
  India: {
    plants: {
      date: 'CBIC (Indian Customs) "Customs Clearance of Passengers at a Glance" leaflet (undated PDF), read ' + READ,
      rows: [
        ['Plants and their produce, such as fruits and seeds', 'Listed as restricted goods: they may be brought in only under conditions set by the authorities, not freely'],
        ['What "restricted" means', 'Goods that are allowed only under certain conditions because of social, health, environment, wildlife or security concerns; the leaflet says it cannot list every item'],
        ['Endangered plants and animals, alive or dead', 'Also listed as restricted goods'],
        ['Wildlife products', 'Listed as prohibited goods, so they cannot be brought in'],
        ['Conditions for bringing in plants or seeds', 'The leaflet does not state them (no permit, certificate or quantity is named)'],
        ['Duty-free allowance for a foreign tourist', 'Rs. 15,000 of goods; duty is charged on the value above it'],
        ['Duty on baggage above the allowance', 'The leaflet gives the current rate as 38.5% of the value (basic customs duty 35% plus a surcharge of 10% of that duty)']
      ],
      notes: [
        'Because the leaflet gives no plant-specific conditions, ask the Indian customs office or the nearest Indian mission before you bring any plant, fruit or seed.',
        'Items that count as commercial goods (for profit or trade) are a separate restricted group under the same leaflet.'
      ],
      src: [['https://www.cbic.gov.in/resources/htdocs-cbec/customs_clearance_of_passengers_at_a_glance.pdf', 'CBIC (Indian Customs) &mdash; Customs Clearance of Passengers at a Glance (PDF)']]
    }
  },
  Norway: {
    tobacco: {
      date: 'Norwegian Customs (Tolletaten) quota page, last updated 29 June 2026 on the page, read ' + READ,
      rows: [
        ['Tourists who live outside Norway', '200 cigarettes or 250 g of other tobacco, plus 200 cigarette papers'],
        ['Residents of Norway', '100 cigarettes or 125 g of other tobacco, plus 100 cigarette papers'],
        ['Duty-free shop on arrival in Norway', 'Limited to the resident amount: 100 cigarettes or 125 g, and 100 papers'],
        ['Age limit', 'You must be at least 18 to bring beer, wine or tobacco, and at least 20 to bring drinks over 22% alcohol'],
        ['Combining alcohol and tobacco', 'The quotas are per person and can be combined; tobacco cannot be swapped for beer or wine'],
        ['Over the quota', 'You may bring more but must declare the excess; a separate customs declaration covers duty and tax on larger amounts'],
        ['Nicotine e-cigarettes and e-liquid', 'Not allowed without a medical certificate showing smoking-cessation use; flavoured nicotine-free e-cigarettes are also not allowed'],
        ['Banned products', 'Nicotine pouches, heated tobacco (such as IQOS sticks), waterpipe (shisha) tobacco and unapproved new nicotine products'],
        ['Trips under 24 hours', 'You cannot buy tobacco tax-free; you may bring it once within 24 hours if you can show you paid local tax in an EEA country']
      ],
      notes: [
        'The page does not state duty rates or fines, and it does not give a separate quota for snus (it names snuff as an example of other tobacco).',
        'One example on the page shows 200 cigarettes while its text says 100, so use the tourist and resident lines above and confirm at the border.'
      ],
      src: [['https://www.toll.no/en/goods/alcohol-and-tobacco/quotas', 'Norwegian Customs (Tolletaten) &mdash; alcohol and tobacco quotas']]
    }
  },
  Egypt: {
    hub: {
      date: 'Egyptian Customs "Passengers" page (Arabic), read ' + READ,
      rows: [
        ['New goods for tourists', 'Up to EGP 15,000 of new goods that are not for trade; duties and taxes apply to the part above it'],
        ['Personal items', 'Used clothing, cameras and similar travel gear, and personal jewellery are allowed if they are not for trade'],
        ['Medicines', 'Allowed for personal use, as decided by the competent authority; larger amounts need inspection and medical reports'],
        ['Mobile phones', 'Up to 5 are exempt from inspection; more than 5 need inspection, and fees apply above EGP 15,000 in total value'],
        ['Prohibited goods', 'Drugs, antiquities, weapons, atomic waste and obscene pictures, magazines or films are given as examples'],
        ['Restricted goods that need inspection', 'Examples named: e-cigarettes, drones, bladed weapons, seeds and pesticides, gold and silver beyond personal use, cosmetics beyond personal use, veterinary medicines, wigs and natural hair'],
        ['Duty-free allowances for tourists', 'One carton of cigarettes, or 25 cigars, or 200 g of tobacco, plus one litre of spirits; each family member has an individual allowance']
      ],
      notes: [
        'The page says the authorities it names are examples, not a complete list.',
        'It does not mention a currency declaration or the red and green channels, so use the cash page for the currency rule.'
      ],
      src: [['https://customs.gov.eg/Legislations/TravelAndTourism?travelAndTourismId=1', 'Egyptian Customs Authority &mdash; travel and tourism (passengers)']]
    },
    tobacco: {
      date: 'Egyptian Customs "Passengers" page (Arabic), read ' + READ,
      rows: [
        ['Tourists and transit passengers', 'One carton (200 cigarettes), or 25 cigars, or 200 g of tobacco, plus one litre of spirits'],
        ['Residents', 'The same quantities as tourists: one carton (200 cigarettes), or 25 cigars, or 200 g of tobacco, plus one litre of spirits'],
        ['Duty-free shop in a customs zone (tourists)', 'Up to 2 cartons of cigarettes, bought within 48 hours of arrival, with a total spend of no more than USD 200; allowed up to 4 times a year'],
        ['Duty-free shop in a customs zone (residents)', 'Up to 2 cartons of cigarettes plus tobacco and cologne, bought within 48 hours of arrival, up to USD 300; allowed up to 2 times a year'],
        ['Family members', 'Each eligible family member has an individual allowance; allowances cannot be pooled into one'],
        ['Over the allowance', 'Duties and taxes apply to the part above the allowance'],
        ['Electronic cigarettes', 'Listed as restricted: they need inspection by the competent authority (the page names the General Authority for Export and Import Control as an example)']
      ],
      notes: [
        'The passport holder has to be present in person to use the duty-free shop allowance.',
        'The page shows no "last updated" date, so check it again before you travel.'
      ],
      src: [['https://customs.gov.eg/Legislations/TravelAndTourism?travelAndTourismId=1', 'Egyptian Customs Authority &mdash; travel and tourism (passengers)']]
    }
  }
};

Object.assign(DATA, require('./country_depth2.js'));

function build(c, cat) {
  const D = (DATA[c.name] || {})[cat]; if (!D) return null;
  const cn = c.name;
  const html = '<div class="bd-wrap">' + CSS +
    '<section class="bd-sec"><h2>' + ICON[cat] + ' ' + (cat === 'hub' ? 'Customs at a glance: what the official source says for ' : esc(WHAT[cat].charAt(0).toUpperCase() + WHAT[cat].slice(1)) + ': what the official source says for ') + esc(cn) + '</h2><p>' + esc(D.date) + '.</p>' +
    table({ head: [cat === 'hub' ? 'Topic' : 'Item', 'Official rule in ' + cn], rows: D.rows }) +
    (D.notes && D.notes.length ? '<ul>' + D.notes.map(x => '<li>' + x + '</li>').join('') + '</ul>' : '') + '</section>' +
    '<div class="bd-src"><div class="h">✓ Official source</div>' + D.src.map(x => '<a href="' + x[0] + '" target="_blank" rel="noopener noreferrer">' + x[1] + '</a>').join('') + '</div></div>';
  return { html };
}

function hub(c) { const b = build(c, 'hub'); return b ? b.html : ''; }
function has(c, cat) { return !!((DATA[c.name] || {})[cat]); }
module.exports = { build, hub, has, DATA };
