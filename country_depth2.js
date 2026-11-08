// AdSense pilot depth data, batch 2 (see country_depth.js). Own words, from the official pages read on READ.
const READ = '8 November 2026';
const TR_SRC = [['https://gumrukrehberi.gov.tr/sayfa/yolcu-beraberinde-getirilen-t%C3%BCketim-e%C5%9Fyas%C4%B1n%C4%B1n-miktarlar%C4%B1-ne-kadard%C4%B1r', 'Turkish Ministry of Trade &mdash; Customs guide: consumer goods amounts for passengers']];
const TR_DATE = 'Turkish Ministry of Trade customs guide, page revision date 4 December 2018 as shown on the page, read ' + READ;
const CL_SRC = [['https://www.aduana.cl/todas-las-preguntas-frecuentes-viajero-y-turista/aduana/2011-06-21/152845.html', 'Aduanas de Chile &mdash; traveller and tourist FAQ']];
const CL_DATE = 'Aduanas de Chile traveller FAQ (no date shown on the page), read ' + READ;

module.exports = {
  Turkey: {
    hub: {
      date: TR_DATE,
      rows: [
        ['Tobacco', 'Duty-free: 600 cigarettes, 100 cigarillos (3 g or less each), 50 cigars, 250 g of cut tobacco and 250 g of pipe tobacco; each product has its own limit'],
        ['Alcohol', 'Duty-free: 1 litre of spirits over 22% alcohol and 2 litres of drinks up to 22%'],
        ['Perfume and cosmetics', 'Up to 600 ml in total of cologne, perfume, lavender, essence or lotion, plus 5 skincare or make-up items'],
        ['Food', '1 kg each of tea, instant coffee, coffee, chocolate and sugar-based sweets'],
        ['Age', 'Passengers under 18 cannot use the tobacco or alcohol exemptions'],
        ['Condition', 'The goods must travel with the passenger'],
        ['Cash', 'This page does not cover cash; see the Turkey cash page for the declaration limit']
      ],
      notes: [
        'The page does not say what happens above these limits, and it says it is guidance that does not replace customs legislation.',
        'The revision date on the page is old, so confirm the figures with Turkish customs before you travel.'
      ],
      src: TR_SRC
    },
    tobacco: {
      date: TR_DATE,
      rows: [
        ['Cigarettes', '600 pieces'],
        ['Cigarillos', '100 pieces, each not heavier than 3 g'],
        ['Cigars', '50 pieces'],
        ['Cut tobacco', '250 g (the page lists it with 200 cigarette papers)'],
        ['Pipe tobacco', '250 g'],
        ['How the limits work', 'Each tobacco product has its own limit, and the goods must accompany the passenger'],
        ['Age', 'Passengers under 18 cannot use the tobacco or alcohol exemption'],
        ['Over the limits', 'The page does not say what happens above the limits']
      ],
      notes: ['The page says it is guidance only and does not replace customs and foreign trade legislation.'],
      src: TR_SRC
    }
  },
  Chile: {
    hub: {
      date: CL_DATE,
      rows: [
        ['Alcohol', 'Up to 2,500 cm3 of alcoholic drinks per adult'],
        ['Tobacco', 'Up to 400 cigarettes, 500 g of pipe tobacco and 50 cigars per adult'],
        ['Cash', 'Declare cash or negotiable instruments above US$10,000 (or the equivalent, including Chilean pesos) with a customs official'],
        ['Gifts', 'Up to US$300 per traveller over 14 years old'],
        ['Duty-free shop in Chile', 'Goods without commercial character up to US$675 in customs value; no single item may be worth more than the allowance'],
        ['Personal electronics', 'A portable video camera, mobile phone, camera, MP3/MP4 player, one personal laptop and a portable CD/DVD player count as luggage; high-value tourist items can need a temporary admission declaration'],
        ['Animals', 'If you carry an animal, you sign a sworn declaration before agriculture (SAG) and customs officers; adults sign it themselves'],
        ['Prohibited goods', 'The page gives no general list; some goods need approval from other agencies (plant health, health, weapons) before customs steps begin']
      ],
      notes: [
        'The page gives no details on plant or food products: use the plants and seeds page for Chile.',
        'The page also describes buying goods abroad and shipping them to yourself without an agent (up to US$1,500, duties 6% plus 19% VAT); that route is separate from luggage.'
      ],
      src: CL_SRC
    },
    alcohol: {
      date: CL_DATE,
      rows: [
        ['Traveller allowance', 'Up to 2,500 cm3 of alcoholic drinks per adult'],
        ['Duty-free shop in Chile', 'Goods without commercial character up to US$675; buyers of alcohol and cigarettes must be over 18'],
        ['Gifts', 'Up to US$300 per traveller over 14 years old (all goods, not only drinks)'],
        ['Over the allowance', 'The page does not state the duty for extra alcohol in luggage']
      ],
      notes: ['The FAQ is long; the figures above are the ones it gives for travellers.'],
      src: CL_SRC
    },
    tobacco: {
      date: CL_DATE,
      rows: [
        ['Cigarettes', 'Up to 400 per adult'],
        ['Pipe tobacco', 'Up to 500 g per adult'],
        ['Cigars', 'Up to 50 per adult'],
        ['Duty-free shop in Chile', 'Goods without commercial character up to US$675; buyers of cigarettes and alcohol must be over 18'],
        ['Over the allowance', 'The page does not state the duty for extra tobacco in luggage']
      ],
      notes: ['The page does not mention e-cigarettes; see the Chile vaping page for that rule.'],
      src: CL_SRC
    },
    cash: {
      date: CL_DATE,
      rows: [
        ['What must be declared', 'Cash or negotiable instruments above US$10,000, or the equivalent in other currencies including Chilean pesos'],
        ['How', 'A currency declaration completed with a customs official'],
        ['Below the threshold', 'The page states no declaration duty below US$10,000'],
        ['Penalty', 'The page does not state one']
      ],
      notes: ['Other forms on the same page cover tourists who bring goods in or take them out temporarily; they are separate from the cash declaration.'],
      src: CL_SRC
    }
  }
};
