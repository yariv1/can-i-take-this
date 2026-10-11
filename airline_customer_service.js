// Airline Customer Service pages (session 24, 2026-10-11): /airline/<slug>/customer-service/ + a "Customer Service" tab, shown ONLY for airlines listed here.
// Rule (user order 2026-10-11): OFFICIAL contact info only (phone, forms, chat, offices) read from the airline's own pages; anything not read is disclosed on the card; no numbers from search results or third-party sites.
// Same chip + verdict-card renderer as the Compensation pages (airline_compensation.js render with options). Colours here: green = official channel we read, yellow = partly read / depends, red = do not do this.
// Demand (Ahrefs 2026-10-11, US): "<airline> customer service" >10,000 (Delta, American, Turkish), "... phone number" >1000; Turkish KD Easy/Medium.
const COMP = require('./airline_compensation.js');
const render = COMP.__render;
const out = {};
const LEGEND = '<p class="cc-legend"><span class="cc-dot cc-g"></span> Green: an official channel we read on the airline\'s own pages. <span class="cc-dot cc-y"></span> Yellow: only partly read, or it depends. <span class="cc-dot cc-r"></span> Red: do not do this.</p>';
const OPTS = { tag: 'CUSTOMER SERVICE', slab: 'What do you need?', legend: LEGEND };

// ---------------- TURKISH AIRLINES ----------------
// Read 11 Oct 2026 on turkishairlines.com (en-us): Get in Touch, US Customer Service Plan, Phishing notice, Help Center. NOT read: call-centre numbers for countries other than the US, the US office addresses, the feedback form itself, the WhatsApp assistant, the e-mail address named in the Customer Service Plan (it did not show on the page).
{
  const GIT = ['https://www.turkishairlines.com/en-us/any-questions/get-in-touch/', 'Turkish Airlines: Get in Touch', 'Call centres, offices, feedback'];
  const CSP = ['https://www.turkishairlines.com/en-us/legal-notice/other-regulations/customer-service-plan/', 'Turkish Airlines: Customer Service Plan (US)', 'Refunds, complaints, delays'];
  const FB = ['https://feedback.turkishairlines.com/en', 'Turkish Airlines: Feedback form', 'Online feedback and complaints'];
  const HC = ['https://www.turkishairlines.com/en-us/help-center/', 'Turkish Airlines: Help Center', 'Questions and answers'];
  const PH = ['https://www.turkishairlines.com/en-us/phishing/', 'Turkish Airlines: Information Security Awareness', 'Fake sites and fake call centres'];

  const SCEN = [
    {
      id: 'call-us', label: 'Call from the United States', status: 'go', verdict: '+1-800-874-8875', sub: 'US call centre', first: true,
      head: 'Turkish Airlines lists one call-centre number for the United States.',
      lines: [
        '<b>United States call centre: +1-800-874 8875</b>, as shown on the "Get in Touch" page.',
        'Its US Customer Service Plan calls the same number (800) 874-8875 the <b>24/7 Call Center</b> and tells passengers who have trouble requesting a refund to call it.',
        'Compare any number you find elsewhere with this page. Turkish Airlines warns about fake call-centre numbers (see the red card).'
      ],
      sources: [GIT, CSP]
    },
    {
      id: 'abroad', label: 'Call from another country', status: 'warn', verdict: 'Pick your country on its page', sub: 'Numbers outside the US',
      head: 'Turkish Airlines has a country selector for call centres; we only read the US entry.',
      lines: [
        'The "Get in Touch" page has a "Our Call Centers" country selector. We read the United States entry only, so no other number is listed here.',
        'Open the official page, choose your country, and use the number shown there.',
        'Do not use a number from a search ad or a third-party site.'
      ],
      sources: [GIT, PH]
    },
    {
      id: 'online', label: 'Write to them online', status: 'go', verdict: 'Online feedback form', sub: 'Comments and complaints',
      head: 'Turkish Airlines points customers to its online feedback form for comments, feedback and suggestions.',
      lines: [
        'The US Customer Service Plan says you can share comments, feedback and suggestions through its online feedback form (feedback.turkishairlines.com).',
        'Its "Get in Touch" page says customers can share feedback across multiple communication channels.',
        'We did not open or fill in the form, so we cannot say which fields it asks for.'
      ],
      sources: [FB, CSP, GIT]
    },
    {
      id: 'refund', label: 'I have a refund problem', status: 'go', verdict: 'Call the 24/7 line', sub: 'Refund requests',
      head: 'Its plan names the 24/7 call centre for problems requesting a refund.',
      lines: [
        'If you experience any problems requesting a refund, the US Customer Service Plan says to call Turkish Airlines\' 24/7 Call Center at (800) 874-8875.',
        'The plan says that for tickets to or from the United States bought at least 7 days before departure through its US sales channels (call centre, ticket office, website and others), you may refund the ticket within 24 hours of purchase and receive a full refund. After that, the ticket rules apply.',
        'For a ticket eligible for a refund, the plan says it provides a prompt refund in the original form of payment.',
        'We did not read the fare rules for any specific ticket, so check yours.'
      ],
      sources: [CSP, GIT]
    },
    {
      id: 'complaint', label: 'My complaint got no answer', status: 'warn', verdict: '30 days to acknowledge', sub: 'Written complaints (US plan)',
      head: 'Under its US plan it acknowledges written complaints within 30 days and answers within 60.',
      lines: [
        'The Customer Service Plan says that, in accordance with DOT regulations, Turkish Airlines will acknowledge all written complaints in writing within <b>30 days</b> and give a substantive response within <b>60 days</b>.',
        'It names an e-mail address for written complaints on the plan page, but the address did not show in the text we read, so we do not list one. Use the online feedback form or call.',
        'Keep your booking reference, the date and what was said.'
      ],
      sources: [CSP, FB]
    },
    {
      id: 'help', label: 'I want to find the answer myself', status: 'go', verdict: 'Help Center', sub: 'Self-service answers',
      head: 'The Help Center has answers for check-in, pets, children, transfers, payment, bookings and fare rules.',
      lines: [
        'Topics listed on the Help Center: check-in information, travelling with pets, infants and children, transfer and transit passengers, payment, reservations and bookings, fare rules, plus baggage and Miles&Smiles sections.',
        'The Get in Touch page also points to a WhatsApp smart travel assistant for questions about your trip. We did not test it, so we do not know its hours or what it can do.'
      ],
      sources: [HC, GIT]
    },
    {
      id: 'office', label: 'Find an office or the head office', status: 'warn', verdict: 'Head office listed', sub: 'Offices',
      head: 'The head office address, phone and fax are listed; we did not read the US office details.',
      lines: [
        '<b>Headquarters:</b> Turkish Airlines General Management Building, Ataturk Airport, Yesilkoy 34149, Istanbul, Türkiye. Phone +90 212 463 63 63, fax +90 212 465 21 21.',
        'For the United States the page has an office selector with 14 cities: Atlanta, Boston, Chicago, Dallas, Denver, Detroit, Houston, Los Angeles, Miami, New York, Newark, San Francisco, Seattle and Washington DC. We did not read the address or phone of each office.'
      ],
      sources: [GIT]
    },
    {
      id: 'scam', label: 'A number from a search ad', status: 'stop', verdict: 'Do not call it', sub: 'Fake call centres and sites',
      head: 'Turkish Airlines warns that "Sponsored" and "Ad" results can send you to fake sites.',
      lines: [
        'Its notice says links labelled "Sponsored" or "Ad" in search engines can redirect to fake websites that impersonate the airline.',
        'It says Turkish Airlines staff, call-centre employees and authorised agents will never ask for your credit card PIN, your Miles&Smiles password, or the one-time verification code (SMS/OTP) from your bank. If anyone asks, it says to end the conversation immediately.',
        'It says the most secure channel is its mobile app, and in a browser the address bar should show https://turkishairlines.com.',
        'Take the number from the official "Get in Touch" page, not from a search ad.'
      ],
      sources: [PH, GIT]
    }
  ];

  out['turkish-airlines'] = {
    ttl: 'Turkish Airlines Customer Service: Official Phone Number, Feedback Form, Refunds',
    desc: 'Official Turkish Airlines customer service from the US: the 24/7 call-centre number, online feedback form, refund problems, complaints and how to avoid fake numbers.',
    h1: 'Turkish Airlines customer service: pick what you need',
    answer: 'Turkish Airlines lists +1-800-874 8875 as its United States call centre, and its US plan calls it a 24/7 line to use for refund problems. You can also use its online feedback form and Help Center. It warns that numbers from search ads can be fake.',
    faq: [
      ['What is the Turkish Airlines customer service number in the US?', 'Its "Get in Touch" page lists +1-800-874 8875 for the United States. Its US Customer Service Plan calls (800) 874-8875 the 24/7 Call Center.'],
      ['How do I make a complaint to Turkish Airlines?', 'Use its online feedback form or call. Under its US plan it acknowledges written complaints within 30 days and gives a substantive response within 60 days.'],
      ['Are the numbers in search ads for Turkish Airlines real?', 'Not necessarily. Turkish Airlines warns that "Sponsored" and "Ad" results can lead to fake sites, and says its staff never ask for your card PIN, your Miles&Smiles password or a bank SMS code.']
    ],
    render: a => render(a, SCEN, 'From Turkish Airlines\' own published pages, read October 2026. Numbers and rules change, so confirm on the official page before you call.', OPTS)
  };
}

module.exports = out;
