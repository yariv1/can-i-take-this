// Brussels Airlines liquids: same facts as its own page, re-worded in our own words (it was near-identical to the Lufthansa wording).
const fs = require('fs');
const N = JSON.parse(fs.readFileSync('topics_new.json', 'utf8'));
const e = N['Brussels Airlines'].liquids;
const s = e.sections[0];
s.table.rows = [
  ['Container size', 'Each container must be labelled 100 ml or less; Brussels Airlines goes by the capacity printed on the bottle, so a part-full 200 ml bottle does not qualify'],
  ['Bag', 'Everything fits in a single clear, resealable plastic bag of up to 1 litre, one bag for each traveller'],
  ['What counts as a liquid', 'Anything pasty, creamy or runny: toothpaste, hair gel, drinks, soup, syrup, perfume and shaving foam, plus sprays, aerosols, gels and mixes of liquid and solid'],
  ['Medicine and special food', 'Allowed outside the bag if you need it during the flight, in the quantity needed only, for example baby food; the airline suggests an English medical certificate'],
  ['Duty-free on a connection through an EU airport', 'Liquids bought at an airport or on board outside the EU must stay sealed in the security bag, with the receipt inside']
];
e.answer = 'Brussels Airlines lets you bring liquids in hand luggage on EU flights and on connections from the EU in containers of 100 ml or less (the printed size counts), packed together in one clear resealable bag of no more than 1 litre.';
e.faq = [
  ['How much liquid can I take in my Brussels Airlines carry-on?', 'Containers of 100 ml or less, all in one clear resealable bag of up to 1 litre, on EU flights and connections from the EU.'],
  ['Does the actual amount in the bottle matter on Brussels Airlines?', 'No. The capacity printed on the container counts, not what is left inside.']
];
fs.writeFileSync('topics_new.json', JSON.stringify(N, null, 1));
console.log('ok');
