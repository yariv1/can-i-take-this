// Trip check (2026-10-24): DEPARTURE-country medication screening rules (DEPMED) and CONNECTION-hub transfer screening (CONN) for the home app / app.
// DEPMED source of truth = the regimes read in full from official airport / regulator pages (air_med_fill.js REG).
// CONN = hubs whose OWN official pages were read on 2026-10-24 and say what happens to a connecting passenger (each line below is from the page named in `u`).
// This script writes both, airline-neutral, between the DEPMED / CONN markers of canitakethis.html. Run before build.js; audit_depmed.js fails when they differ.
const fs = require('fs'), path = require('path');
const AIRMED = require('./airline_medication.js');
const REG = AIRMED.__FILL.REG;
const EU = 'AT BE BG HR CY CZ DK EE FI DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES'.split(' ');
const MAP = {};
EU.forEach(c => { MAP[c] = ['EU']; });
MAP.SE = ['EU', 'SE']; MAP.FR = ['EU', 'FR']; MAP.NO = ['NO']; MAP.GB = ['UK']; MAP.CA = ['CA']; MAP.US = ['US']; MAP.KR = ['KR']; MAP.HK = ['HK'];
MAP.SG = ['SG']; MAP.AE = ['DXB', 'AUH']; MAP.TH = ['TH']; MAP.MX = ['MX']; MAP.OM = ['OM']; MAP.JP = ['JP']; MAP.BR = ['BR'];
const NAME = 'FAKE-AIRLINE-NAME';
const reg = {};
Object.keys(REG).forEach(r => {
  reg[r] = {};
  Object.keys(REG[r]).forEach(k => {
    const x = REG[r][k];
    const lines = x.lines(NAME).filter(l => l.indexOf(NAME) < 0);
    reg[r][k] = { s: x.status, h: x.head, l: lines, u: x.sources.map(u => [u[0], u[1]]) };
  });
});
Object.keys(MAP).forEach(c => MAP[c].forEach(r => { if (!reg[r]) throw new Error('no regime ' + r); }));
const data = { map: MAP, reg };

// ---- connection hubs: liq = liquids in cabin bags, med = medication ----
const IST_U = ['https://www.istairport.com/en/flights/airport-guides/transfer-passenger-guide/services/other-services/security-and-baggage-restrictions', 'Istanbul Airport: Security and baggage restrictions (transfer passenger guide)'];
const LHR_U1 = ['https://www.heathrow.com/connecting-flights', 'Heathrow: Connecting flights'];
const LHR_U2 = ['https://www.heathrow.com/at-the-airport/security-and-baggage/hand-baggage-and-liquids', 'Heathrow: Hand baggage and liquids'];
const FRA_U1 = ['https://www.frankfurt-airport.com/en/travel-planning/check-in-luggage-controls/security-check.html', 'Frankfurt Airport: Passenger and hand luggage screening'];
const FRA_U2 = ['https://www.frankfurt-airport.com/en/flights-and-transfer/transferring-at-fra.html', 'Frankfurt Airport: Transferring at FRA'];
const SIN_U1 = ['https://www.changiairport.com/en/fly/transit-guide.html', 'Changi Airport: Transit guide'];
const SIN_U2 = ['https://www.changiairport.com/en/fly/security-and-baggage-restrictions.html', 'Changi Airport: Security and baggage restrictions'];
const conn = {
  IST: { n: 'Istanbul Airport (IST)', cc: 'TR',
    liq: { s: 'warn', h: 'At Istanbul Airport, transfer passengers are screened and the 100 ml liquid rule applies.', l: [
      'Istanbul Airport: all departing and transfer passengers and their baggage are scanned at the security checkpoints.',
      'Istanbul Airport: liquids, aerosols and gels in cabin baggage go in containers of 100 ml or less, packed in one transparent resealable 1-litre bag.',
      'Istanbul Airport: duty-free liquids may stay in their sealed tamper-evident bag; transfer passengers should not open it before the final destination.'], u: [IST_U] },
    med: { s: 'warn', h: 'At Istanbul Airport, medication is exempt from the liquid limit with its original packaging and your prescription or medical report.', l: [
      'Istanbul Airport: medication is exempt from the liquid limits if it is in its original packaging and you can show a prescription or medical report with your name.',
      'Istanbul Airport: transfer passengers are scanned at the security checkpoints like departing passengers.'], u: [IST_U] } },
  LHR: { n: 'London Heathrow (LHR)', cc: 'GB',
    liq: { s: 'go', h: 'At Heathrow, connecting passengers go through security again, and liquids up to 2 litres can stay in the cabin bag.', l: [
      'Heathrow: all connecting passengers must go through security again at Heathrow, because UK security rules apply to any passenger flying from a UK airport.',
      'Heathrow: large electrical items and liquids, up to 2 litres, can remain in your cabin baggage when connecting.',
      'Heathrow: this applies at Terminals 2, 3, 4 and 5.'], u: [LHR_U1, LHR_U2] },
    med: { s: 'warn', h: 'At Heathrow, liquid medicines stay in the cabin bag; over 2 litres you need proof.', l: [
      'Heathrow: all connecting passengers must go through security again at Heathrow.',
      'Heathrow: you can carry liquid medicines in your cabin bag.',
      'Heathrow: if you need more than 2 litres, bring a prescription or a letter from your doctor confirming the medicine is needed for your flight.'], u: [LHR_U1, LHR_U2] } },
  FRA: { n: 'Frankfurt Airport (FRA)', cc: 'DE',
    liq: { s: 'warn', h: 'At Frankfurt, transfer checkpoints still use the 100 ml liquid rule.', l: [
      'Frankfurt Airport: transfer checkpoints for connecting passengers are among the checkpoints where the previous liquid regulations still apply.',
      'Frankfurt Airport: under that rule liquids go in containers of up to 100 ml each, packed in a transparent resealable bag with a total capacity of up to 1 litre.',
      'Frankfurt Airport: the 2-litre CT-scanner rule applies at most Terminal 1 checkpoints and at all Terminal 3 checkpoints.',
      'Frankfurt Airport: you may have to go through a security check again when transferring, and duty-free purchases must stay in their sealed bags.'], u: [FRA_U1, FRA_U2] } },
  SIN: { n: 'Singapore Changi (SIN)', cc: 'SG',
    liq: { s: 'warn', h: 'At Changi, transit passengers go through security again, and containers over 100 ml are not accepted.', l: [
      'Changi Airport: passengers are required to go through security screening before heading to the boarding gate of the onward flight.',
      'Changi Airport: liquids in containers over 100 ml are not accepted.'], u: [SIN_U1, SIN_U2] },
    med: { s: 'warn', h: 'At Changi, transit passengers go through security again; liquids over 100 ml can be exempted with a doctor’s letter.', l: [
      'Changi Airport: passengers are required to go through security screening before heading to the boarding gate of the onward flight.',
      'Changi Airport: liquids in containers over 100 ml are not accepted, but other items may be exempted upon presentation of a bona fide doctor’s letter.',
      'Changi Airport: medication accompanied by a doctor’s letter is allowed in carry-on.'], u: [SIN_U1, SIN_U2] } }
};

// ---- departure-country LIQUIDS rule for carry-on (pages read on 2026-10-24; each sentence is from the page in u) ----
const U = (u, l) => [[u, l]];
const L_US = U('https://www.tsa.gov/travel/security-screening/liquids-rule', 'TSA: Liquids, aerosols and gels rule');
const L_GB = U('https://www.gov.uk/hand-luggage-restrictions/liquids', 'GOV.UK: Hand luggage restrictions, liquids');
const L_HK = U('https://www.cad.gov.hk/english/packing_tips.html', 'Hong Kong Civil Aviation Department: Packing tips');
const L_SG = U('https://www.changiairport.com/en/fly/security-and-baggage-restrictions.html', 'Changi Airport: Security and baggage restrictions');
const L_KR = U('https://www.airport.kr/ap_en/1434/subview.do', 'Incheon Airport: Carry-on restricted items FAQ');
const L_TH = U('https://suvarnabhumi.airportthai.co.th/service/airport-guide/detail/GuidelinesforLAGs_BKK', 'Suvarnabhumi Airport: Permitted LAGs in cabin baggage');
const L_AE = U('https://www.dubaiairports.ae/information/baggage/baggage-info/baggage-regulations', 'Dubai Airports: Baggage regulations');
const L_EU = U('https://transport.ec.europa.eu/transport-modes/air/aviation-security/aviation-security-policy/liquids-aerosols-and-gels_en', 'European Commission: Liquids, aerosols and gels');
const L_DE = L_EU.concat(U('https://www.frankfurt-airport.com/en/travel-planning/check-in-luggage-controls/security-check.html', 'Frankfurt Airport: Passenger and hand luggage screening'));
const liqreg = {
  US: { s: 'warn', h: 'In the US, carry-on liquids go in containers of 100 ml (3.4 oz) or less, in one quart-size bag.', l: [
    'TSA: you can bring a quart-sized bag of liquids, aerosols, gels, creams and pastes in your carry-on bag.',
    'TSA: they are limited to travel-sized containers of 3.4 ounces (100 ml) or less per item.',
    'TSA lists medications and infant and child nourishments as exemptions.'], u: L_US },
  GB: { s: 'warn', h: 'At most UK airports, carry-on liquids in containers over 100 ml are not allowed through security.', l: [
    'GOV.UK: at most airports you cannot take liquids in containers larger than 100 ml through security, even if the container is only part full.',
    'GOV.UK: some airports may allow containers that hold up to 2 litres.',
    'GOV.UK: you can take liquid containers up to 2 litres through security at all UK airports if they are for essential medical purposes, special dietary requirements, or contain baby food or baby milk.',
    'GOV.UK: liquids bought at an airport or on a plane are allowed if sealed in a security bag with the receipt sealed in and visible; do not open the bag until your final destination.'], u: L_GB },
  HK: { s: 'warn', h: 'In Hong Kong, cabin liquids go in containers of 100 ml or less, in one 1-litre bag.', l: [
    'Hong Kong Civil Aviation Department: all liquids, gels and aerosols in cabin baggage have to be in containers with a capacity not greater than 100 ml.',
    'Hong Kong Civil Aviation Department: containers larger than 100 ml will not be accepted, even if they are only part-filled.',
    'Hong Kong Civil Aviation Department: the containers go in one transparent re-sealable plastic bag of a maximum capacity of one litre, one bag per passenger, shown separately for screening.',
    'Hong Kong Civil Aviation Department: exemptions will be made for medications, baby milk or food and special dietary requirements, subject to verification.'], u: L_HK },
  SG: { s: 'warn', h: 'At Changi, carry-on liquids over 100 ml are not accepted, even if partly filled.', l: [
    'Changi Airport: liquids, aerosols and gels in containers exceeding 100 ml will not be accepted, even if partially filled.',
    'Changi Airport: the containers go in one transparent, re-sealable plastic bag per passenger, with a total of no more than one litre.',
    'Changi Airport: exemptions can be made for baby food and breast milk if your infant is travelling with you, and other items may be exempted with a bona fide doctor’s letter.',
    'Changi Airport: duty-free purchases packed in security tamper-evident bags may be allowed; restrictions may apply, so check with your airline.'], u: L_SG },
  KR: { s: 'warn', h: 'In Korea, each carry-on liquid container must be 100 ml or less, in one 1-litre transparent bag.', l: [
    'Incheon Airport: each container must be 100 ml or less, based on container size regardless of how much is inside.',
    'Incheon Airport: you can bring one 1-litre transparent zip bag per person.',
    'Incheon Airport: liquid medicine over 100 ml, such as insulin, needs a doctor’s note or prescription in Korean or English.'], u: L_KR },
  TH: { s: 'warn', h: 'At Bangkok airport, carry-on liquids go in containers of 100 ml or less, up to 1 litre in total.', l: [
    'Suvarnabhumi Airport: containers have a maximum capacity of 100 millilitres each, and the total volume must not exceed 1,000 millilitres per passenger.',
    'Suvarnabhumi Airport: containers go in one transparent re-sealable plastic bag of a maximum capacity of 1 litre, one bag per passenger.',
    'Suvarnabhumi Airport: exempt liquids may be carried in quantities appropriate for the journey and must be shown to the screening officers; they include medicinal liquids with a medical certificate, label or documentation, infant food or milk, and food for medical or special nutritional needs.'], u: L_TH },
  AE: { s: 'warn', h: 'At Dubai airports, carry-on liquids must not exceed 100 ml per item and one litre in total.', l: [
    'Dubai Airports: if you carry liquids, aerosols or gels in hand baggage each item must not exceed 100 ml and the total must not exceed one litre; exemptions apply for medication, baby milk and foods and special dietary requirements.'], u: L_AE },
  EU: { s: 'warn', h: 'At EU airports, carry-on liquids go in containers of 100 ml or less, in one 1-litre transparent bag.', l: [
    'European Commission: liquids go in individual containers with a capacity of no more than 100 ml, packed in one transparent one-litre re-sealable plastic bag.',
    'European Commission: liquids to be used during the trip for medical purposes or special dietary requirements, including baby food, are exempt.',
    'Airports with newer scanners can allow more: check your airport’s own page before you fly.'], u: L_EU },
  DE: { s: 'warn', h: 'In Germany, the 100 ml rule applies at older checkpoints; Frankfurt allows up to 2 litres at CT-scanner checkpoints.', l: [
    'European Commission: liquids go in individual containers with a capacity of no more than 100 ml, packed in one transparent one-litre re-sealable plastic bag.',
    'Frankfurt Airport: at most Terminal 1 checkpoints and at all Terminal 3 checkpoints CT scanners are in use, and you may carry liquids of up to 2 litres in your hand luggage.',
    'Frankfurt Airport: the previous rule (containers up to 100 ml in a bag of up to 1 litre) still applies at Gates C1, C2, C4 and C6, certain special checkpoints in Terminal 1, and transfer checkpoints.',
    'European Commission: liquids to be used during the trip for medical purposes or special dietary requirements, including baby food, are exempt.'], u: L_DE },
  CA: { s: 'warn', h: 'In Canada, carry-on liquids go in containers of 100 ml or less, in one 1-litre bag.', l: [
    'CATSA: only bring liquids, aerosols and gels packaged in containers with a capacity of 100 ml / 100 grams (3.4 oz) or less.',
    'CATSA: all of them must fit into one transparent, closed and resealable plastic bag with a capacity of no more than 1 litre.',
    'CATSA: exempted liquids, such as medication, should be packed so that they can easily be removed from your carry-on bag for inspection.'], u: U('https://www.catsa-acsta.gc.ca/en/pack-your-carry', 'CATSA: How to pack your carry-on') },
  JP: { s: 'warn', h: 'On international flights from Japan, carry-on liquids go in containers of 100 ml or less, in one 1-litre zip bag.', l: [
    'MLIT Japan: the liquids rule applies to every international flight leaving a Japanese airport.',
    'MLIT Japan: liquids, gels and aerosols go in containers of 100 ml or less, sealed in one transparent re-sealable plastic bag of 1 litre or less (a zip bag), one bag per person.',
    'MLIT Japan: prescribed medicine (ordinary medicine too), liquids needed for diabetes or other medical reasons, and baby milk are exempt, only in the amount needed for your flight and connections; you can be asked for proof such as a prescription copy, medicine bag or medical certificate.',
    'MLIT Japan: containers over 100 ml can go in checked baggage.'], u: U('https://www.mlit.go.jp/common/000015937.pdf', 'MLIT Japan: Liquids on international flights, Q&A (in Japanese)') },
  MX: { s: 'warn', h: 'At Mexico City airport, carry-on liquids are limited to 100 ml containers in one 1-litre resealable bag.', l: [
    'AICM: only liquids, gels and aerosols for cosmetic or personal hygiene use are allowed, in individual containers of no more than 100 ml (3.4 oz).',
    'AICM: the containers go inside one resealable plastic bag of a maximum capacity of one litre per passenger.',
    'AICM: a container of larger capacity cannot go through even if it holds less than 100 ml.'], u: U('https://www.aicm.com.mx/pasajeros/tips-para-pasajeros/liquidos-geles-y-aerosoles', 'Mexico City Airport (AICM): Liquids, gels and aerosols (in Spanish)') },
};
const liqmap = {};
EU.forEach(c => { liqmap[c] = ['EU']; });
liqmap.FR = ['EU']; liqmap.SE = ['EU']; liqmap.CA = ['CA']; liqmap.JP = ['JP']; liqmap.MX = ['MX']; liqmap.DE = ['DE']; liqmap.US = ['US']; liqmap.GB = ['GB']; liqmap.HK = ['HK']; liqmap.SG = ['SG']; liqmap.KR = ['KR']; liqmap.TH = ['TH']; liqmap.AE = ['AE'];
const liqdep = { map: liqmap, reg: Object.fromEntries(Object.entries(liqreg).map(([k, x]) => [k, { s: x.s, h: x.h, l: x.l, u: x.u }])) };
const litLiq = '/*LIQDEP*/var LIQDEP=' + JSON.stringify(liqdep) + ';/*END_LIQDEP*/';

// ---- departure-country POWER BANK rule (pages read on 2026-10-24; each sentence is from the page in u) ----
const PB = {
  SG: { s: 'warn', h: 'At Changi, from 15 April 2026 you can carry at most two power banks, in hand luggage only.', l: [
    'Changi Airport: from 15 April 2026, departing passengers can carry a maximum of two power banks per person in total, regardless of their watt-hour rating.',
    'Changi Airport: power banks must be carried in hand luggage and are strictly not permitted in checked baggage.',
    'Changi Airport: up to 100 Wh is allowed, 100 to 160 Wh is allowed subject to the airline’s approval, and above 160 Wh is not allowed.',
    'Changi Airport: passengers must not recharge power banks at any time on board, and are advised not to use power banks to recharge devices on board.'], u: U('https://www.changiairport.com/en/fly/security-and-baggage-restrictions.html', 'Changi Airport: Security and baggage restrictions') },
  HK: { s: 'warn', h: 'In Hong Kong, no more than two power banks per person, and no recharging on board.', l: [
    'Hong Kong Civil Aviation Department (packing tips revised 28 March 2026): no more than two power banks per person.',
    'Hong Kong Civil Aviation Department: power banks must not be recharged while on board, and should not be used to recharge a portable electronic device on board.',
    'Hong Kong Civil Aviation Department: each power bank must be protected against short circuits when not in use, for example in its original retail packaging, with taped terminals, or in a separate plastic bag or pouch.',
    'Hong Kong Civil Aviation Department: power banks above 160 Wh are forbidden, and on local airlines passengers may not stow power banks in the overhead compartment.'], u: U('https://www.cad.gov.hk/english/pdf/Packing%20Tips%20for%20Air%20Passenger.pdf', 'Hong Kong Civil Aviation Department: Packing tips for air passengers (PDF)') },
  KR: { s: 'warn', h: 'In Korea, from 20 April you can carry at most two power banks, all in the cabin.', l: [
    'Korea.net (Ministry of Land, Infrastructure and Transport rule): from 20 April the number of portable chargers a passenger can carry on a flight is limited to two, with a capacity of 160 Wh or less.',
    'Korea.net: large batteries over 160 Wh stay banned.',
    'Korea.net: all portable chargers must be carried on board and cannot be checked in as baggage, whatever their capacity.',
    'Korea.net: charging a power bank from the aircraft or using it to charge another device during the flight is strictly prohibited.'], u: U('https://www.korea.net/NewsFocus/policies/view?articleId=290372', 'Korea.net: Major restrictions on inflight power banks to start on April 20') },
  JP: { s: 'warn', h: 'In Japan, the total number of power banks you carry is limited to two.', l: [
    'MLIT Japan (list updated 24 April 2026): the total number of power banks you carry is limited to 2, counting those of 100 Wh to 160 Wh as well.',
    'MLIT Japan: power banks must be prevented from causing short circuits.',
    'MLIT Japan: power banks should not be stowed in overhead compartments.'], u: U('https://www.mlit.go.jp/common/001425422.pdf', 'MLIT Japan: Examples of dangerous goods by air transportation (PDF)') },
  GB: { s: 'warn', h: 'In the UK, a maximum of two power banks per person, in carry-on baggage, from 27 March 2026.', l: [
    'UK CAA (effective from 27 March 2026): a maximum of two power banks per person.',
    'UK CAA: power banks must be carried in carry-on baggage, and must not be recharged on board the aircraft.',
    'UK CAA: power banks should not be used to charge other portable electronic devices on board the aircraft.',
    'UK CAA: power banks up to 100 Wh are allowed without operator approval; above 100 Wh up to 160 Wh requires approval from the operator.'], u: U('https://www.caa.co.uk/commercial-industry/airlines/dangerous-goods/changes-to-rules-on-the-carriage-of-lithium-cellsbatteries-and-power-banks/', 'UK CAA: Changes to rules on the carriage of lithium cells/batteries and power banks') },
  US: { s: 'warn', h: 'In the US, power banks must travel in your carry-on, never in checked bags.', l: [
    'FAA PackSafe: spare lithium batteries, including power banks, must be carried in carry-on baggage only.',
    'FAA PackSafe: when a carry-on bag is checked at the gate or at planeside, the spare lithium batteries and power banks must be removed and kept with you in the cabin; the battery terminals must be protected from short circuit.',
    'FAA PackSafe: lithium-ion batteries are limited to 100 Wh per battery, and many airlines have stricter quantity and Wh limits, so check with your air carrier.'], u: U('https://www.faa.gov/hazmat/packsafe/lithium-batteries', 'FAA PackSafe: Lithium batteries') }
};
const pbmap = {}; Object.keys(PB).forEach(c => { pbmap[c] = [c]; });
const pbdep = { map: pbmap, reg: PB };
const litPb = '/*PBDEP*/var PBDEP=' + JSON.stringify(pbdep) + ';/*END_PBDEP*/';

// ---- medication brand x country pages that exist on disk (Trip check opens the exact page) ----
const MEDP = {};
fs.readdirSync(path.join(__dirname, 'medication')).forEach(b => {
  const d = path.join(__dirname, 'medication', b);
  if (b === 'into' || !fs.statSync(d).isDirectory()) return;
  const cs = fs.readdirSync(d).filter(c => fs.existsSync(path.join(d, c, 'index.html'))).sort();
  if (cs.length) MEDP[b] = cs;
});
const litMed = '/*MEDPAGES*/var MEDPAGES=' + JSON.stringify(MEDP) + ';/*END_MEDPAGES*/';

const lit = '/*DEPMED*/var DEPMED=' + JSON.stringify(data) + ';/*END_DEPMED*/';
const litConn = '/*CONN*/var CONN=' + JSON.stringify(conn) + ';/*END_CONN*/';
if (require.main === module) {
  const F = path.join(__dirname, 'canitakethis.html');
  let s = fs.readFileSync(F, 'utf8');
  [[/\/\*DEPMED\*\/[\s\S]*?\/\*END_DEPMED\*\//, lit], [/\/\*LIQDEP\*\/[\s\S]*?\/\*END_LIQDEP\*\//, litLiq], [/\/\*PBDEP\*\/[\s\S]*?\/\*END_PBDEP\*\//, litPb], [/\/\*MEDPAGES\*\/[\s\S]*?\/\*END_MEDPAGES\*\//, litMed], [/\/\*CONN\*\/[\s\S]*?\/\*END_CONN\*\//, litConn]].forEach(p => {
    if (!p[0].test(s)) throw new Error('markers missing in canitakethis.html: ' + p[0]);
    s = s.replace(p[0], () => p[1]);
  });
  fs.writeFileSync(F, s);
  console.log('DEPMED: ' + Object.keys(MAP).length + ' countries, ' + Object.keys(reg).length + ' regimes; CONN: ' + Object.keys(conn).length + ' hubs');
}
module.exports = { litMed, lit, litLiq, liqdep, litPb, pbdep, litConn, data, conn };
