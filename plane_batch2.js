const fs=require('fs');
const f='plane_unique.json';
const d=JSON.parse(fs.readFileSync(f,'utf8'));
const T='https://www.tsa.gov/travel/security-screening/whatcanibring/items/';
d['cigarettes']={h:'What the TSA page on cigarettes covers, and what it leaves out',p:[
"The TSA page for cigarettes is short: it lists carry-on bags as yes and checked bags as yes, with no quantity limit and no special conditions. For airport security, packs of cigarettes can therefore travel in either bag, and the page repeats the general statement that the officer at the checkpoint makes the final decision.",
"What that page does not cover is customs. The number of cigarettes you may bring into a country duty-free is set by the destination, and it is a separate rule from the security screening. Lighters have their own TSA page with different conditions, and vape devices are carry-on only, so check those pages if you travel with them as well."],
src:[['TSA: Cigarettes',T+'cigarettes'],['TSA: Lighters (Disposable and Zippo)',T+'lighters-disposable-and-zippo']]};
d['sharp-objects']={h:'How the TSA sorts knives and cutters between cabin and checked bags',p:[
"Two TSA item pages show the pattern. The page for knives says no for carry-on bags and yes for checked bags, with one exception: knives with rounded blades or blunt edges without serration, such as butter knives, and plastic cutlery. The page for box cutters gives the same split, no in carry-on and yes in checked bags, and says they must go in checked bags with or without blades.",
"Both pages add a handling rule for checked baggage: any sharp object should be sheathed or securely wrapped to prevent injury to baggage handlers and inspectors. The TSA states that the final decision on whether an item goes through the checkpoint rests with the officer, so an item that looks borderline is safer in a checked bag."],
src:[['TSA: Knives',T+'knives'],['TSA: Box Cutters',T+'box-cutters']]};
fs.writeFileSync(f,JSON.stringify(d,null,2));
