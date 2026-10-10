// Per-country additions to the WHO-based vaping pages: sections from the country's OWN official sources (queries-driven, PRIORITY_QUEUE.md).
// Shape: { ttl, desc, lead, sections:[{h, p, table:{head,rows}, list}], faq:[[q,a]], src:[[url,label]] }
module.exports = {
  EG: {
    ttl: 'Can You Vape in Egypt? 2026 Law and Customs Rules',
    desc: 'Can you vape in Egypt? WHO lists no general ban, indoor use is banned, minimum age 18. Egypt\'s customs rules never mention vapes: what it means for travellers.',
    sections: [{
      h: '🛃 What Egyptian customs says travellers can bring',
      p: 'Egypt\'s passenger allowances are set in the Executive Regulations of the Customs Law, Minister of Finance Decree No. 430 of 2021 (Customs Law No. 207 of 2020). We searched the full English text of the decree: it does not mention e-cigarettes, vapes or e-liquid anywhere. It sets these allowances for arriving passengers:',
      table: { head: ['Item', 'What the decree says'], rows: [
        ['Cigarettes, cigars, tobacco', 'One carton of cigarettes (200), or 25 cigars, or 200 grams of tobacco; the quantity is recorded in your passport'],
        ['Liquor', 'One litre'],
        ['New items for personal use', 'Up to 10,000 Egyptian pounds in value, not brought for trade; the excess is subject to customs taxes'],
        ['Duty-free shop purchases', 'Objects bought for personal use from the free markets in customs areas within 48 hours of arrival are exempt, up to US$ 200']
      ] },
      list: ['<strong>What this means for a vape:</strong> because the decree is silent on e-cigarettes, we cannot tell you that a device or e-liquid has an allowance. Do not assume the cigarette allowance covers it.', '<strong>Ask before you pack:</strong> confirm with the Egyptian Customs Authority (customs.gov.eg) or your airline, especially for nicotine e-liquid or several devices.']
    }],
    faq: [
      ['Does Egyptian customs allow vapes?', 'The customs regulations (Decree No. 430 of 2021) set allowances for cigarettes, cigars, tobacco and liquor but do not mention e-cigarettes, so there is no published allowance for vapes. Confirm with the Egyptian Customs Authority before you travel.'],
      ['How many cigarettes can I bring into Egypt?', 'One carton of 200 cigarettes, or 25 cigars, or 200 grams of tobacco, and the quantity is recorded in your passport, according to Decree No. 430 of 2021.']
    ],
    src: [['https://customs.gov.eg/Upload/ECAAdminace/2c2777f7-499b-4ce9-8171-78deb005de42.pdf', 'Egyptian Customs Authority: Minister of Finance Decree No. 430 of 2021 (Executive Regulations of the Customs Law, English)']]
  },
  TR: {
    ttl: 'Can You Vape in Turkey? 2026 Law and Customs Limits',
    desc: 'Can you vape in Turkey? WHO lists a ban on sale and import with a personal-use exception. Turkish customs allows one device you use, plus 30 ml of liquid or 3 disposables.',
    sections: [{
      h: '🛃 What Turkish customs lets a traveller bring in',
      p: 'Turkey banned the import of e-cigarettes, e-hookahs, their devices, parts and liquids by Presidential Decision No. 2149 (Official Gazette 25.02.2020). The Ministry of Trade then set what an adult passenger may still carry in, in Customs Circular 2020/7 (31.03.2020). The circular says no customs exemption can apply to these products, and allows only this, for passengers aged 18 or over:',
      table: { head: ['Item', 'What the circular allows'], rows: [
        ['Electronic device', 'One device you are currently using'],
        ['Heated tobacco products', 'Up to 200 pieces'],
        ['Cartridges or e-liquid', 'Up to 30 ml in total'],
        ['Disposable e-cigarettes', 'Up to 3 pieces (Circular 2024/18, 19.09.2024, replaced the original limit of 10)']
      ] },
      list: ['<strong>Choose one:</strong> the circular allows 200 heated tobacco products, or 30 ml of cartridges or liquid, or the disposable limit, in addition to the one device you are using.', '<strong>Ordinary tobacco is separate:</strong> the Ministry of Trade traveller guide lets an adult bring 600 cigarettes, 100 cigarillos, 50 cigars, 250 g of cut tobacco or 250 g of pipe tobacco duty-free. Nothing there covers vapes.', '<strong>Over the limit:</strong> the circular gives no exemption for a bigger stock, so extra devices or liquid can be refused at customs. Check the current text with Turkish customs before you travel.']
    }],
    faq: [
      ['Can I bring a vape into Turkey?', 'Yes, in small amounts. An adult passenger (18 or over) may bring one e-cigarette device that they are currently using, plus up to 30 ml of cartridges or e-liquid, or up to 3 disposable e-cigarettes, or up to 200 heated tobacco products, under Ministry of Trade Circular 2020/7 as amended by 2024/18. Anything beyond that has no customs exemption.'],
      ['How many disposable vapes can I bring to Turkey?', 'Up to 3. Circular 2020/7 originally said 10; Circular 2024/18 of 19 September 2024 changed it to 3.'],
      ['How much e-liquid can I bring into Turkey?', 'Up to 30 ml of cartridges or solution in total, for passengers aged 18 or over, according to Circular 2020/7.'],
      ['How many cigarettes can I bring into Turkey?', 'Duty-free, 600 cigarettes (or 100 cigarillos, 50 cigars, 250 g of cut tobacco or 250 g of pipe tobacco) for an adult, according to the Ministry of Trade customs guide.']
    ],
    src: [
      ['https://ticaret.gov.tr/data/5e206b7813b876856c9cf082/2020-7%20Say%C4%B1l%C4%B1%20Genelge%20(Elektronik%20Sigaralar%20hk).pdf', 'Turkish Ministry of Trade: Circular 2020/7, passenger entry of electronic cigarettes and similar items'],
      ['https://ticaret.gov.tr/data/65966a8013b876fb4cb76a9d/2024-18%20Sayl%C4%B1%20Genelge.pdf', 'Turkish Ministry of Trade: Circular 2024/18, amendment of Circular 2020/7'],
      ['https://gumrukrehberi.gov.tr/sayfa/yolcu-beraberinde-getirilen-t%C3%BCketim-e%C5%9Fyas%C4%B1n%C4%B1n-miktarlar%C4%B1-ne-kadard%C4%B1r', 'Turkish Ministry of Trade customs guide: consumer goods amounts for passengers']
    ]
  }
};
