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
  }
};
