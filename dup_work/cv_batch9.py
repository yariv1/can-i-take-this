exec(open('C:/Users/yariv/Utility Website/can-i-take-this/dup_work/cv_batch7.py', encoding='utf8').read().split("add('CN'")[0])

add('IT', 'italy', [sec('🛃 What the Italian customs traveller card says about tobacco',
    'From the Agenzia delle Dogane e dei Monopoli (ADM) "Carta doganale del viaggiatore", July 2025 edition, read in full on 22 November 2026. The card lists tobacco and alcohol allowances. It does not mention e-cigarettes, vape liquid or nicotine.',
    ['Item', 'What the ADM card says'],
    [['Cigarettes bought outside the EU', 'Up to 200'],
     ['Cigarillos (max 3 g each) / cigars / smoking tobacco', '100 / 50 / 250 g'],
     ['Cigarettes within the EU', 'Up to 800 (cigarillos 400, cigars 200, smoking tobacco 1 kg)'],
     ['E-cigarettes and inhalation liquid', 'Not named on the card']],
    ['<strong>Not read:</strong> any ADM determination that sets a limit for inhalation liquids. Ask Italian customs before carrying more than a device and a few pods.'])],
    [['Is there a limit for vape liquid in Italy?', 'The July 2025 ADM traveller card gives limits for cigarettes, cigarillos, cigars and smoking tobacco only. It does not name e-cigarettes or liquid, so check with Italian customs.']],
    [['https://www.adm.gov.it/portale/documents/20182/909438/Carta+doganale+del+viaggiatore_luglio+2025.pdf', 'ADM - Carta doganale del viaggiatore, July 2025']],
    {'official': ['read 2026-11-22: ADM Carta doganale del viaggiatore July 2025 (pdftotext, full): tobacco and alcohol limits, no vape or nicotine word'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['none needed: national customs card read'], 'date': '2026-11-22'})

add('BH', 'bahrain', [sec('⚖️ What the Bahrain e-cigarette decision is titled',
    'Unofficial source: Tobacco Control Laws (Campaign for Tobacco-Free Kids legal database), read 22 November 2026. It lists Ministry of Industry and Commerce Decision No. 38 of 2013, dated 6 May 2013, titled "Concerning Banning of Importation, Distribution, or Selling of Electronic Cigarettes". The database says the laws shown were in effect as of 17 September 2019. Bahrain Customs could not be read from here (HTTP 403).',
    ['Point', 'What the database shows'],
    [['Decision', 'No. 38 of 2013, Ministry of Industry and Commerce, 6 May 2013'],
     ['Subject', 'Ban on importing, distributing or selling e-cigarettes'],
     ['Status date given', 'In effect as of 17 September 2019'],
     ['Traveller allowance', 'Not stated']],
    ['<strong>Not read:</strong> the decision text, anything newer than 2019, and the Bahrain Customs traveller rules. Treat vapes as possibly refused or confiscated at the border and check with Bahrain Customs first.'])],
    [['Can I bring a vape into Bahrain?', 'A 2013 Ministry of Industry and Commerce decision, listed by Tobacco Control Laws, bans importing, distributing and selling e-cigarettes. Its current status for travellers is not confirmed, so check with Bahrain Customs before you fly.']],
    [['https://www.tobaccocontrollaws.org/laws/decision-no-38-2013-on-e-cigs-bahrain', 'Unofficial source: Tobacco Control Laws - Bahrain Decision No. 38 of 2013']],
    {'official': ['customs.gov.bh / bahraincustoms.gov.bh: HTTP 403 earlier, not bypassed'], 'reliable': ['read 2026-11-22: Tobacco Control Laws entry for Ministry of Industry and Commerce Decision 38/2013 (title, date, in-effect date 2019-09-17); WHO country profile read 2026-10-08'], 'other': ['goodsacrossborders and expat forum seen in search, conflicting, not used'], 'date': '2026-11-22'})

for slug, t in {'bulgaria': '2026-11-22: customs.bg English traveller thresholds page: connection failed on curl and browser pane; search summary names tobacco and alcohol only, not a source'}.items():
    k = 'country/' + slug + '/vaping'
    L.setdefault(k, {'official': ['customs.bg traveller pages and 2026-01-13 Sofia airport news: connection timeout on curl, refused in browser pane 2026-11-22'], 'reliable': ['WHO country profile read 2026-10-08 (base card)'], 'other': ['2026-11-22 search in Bulgarian: only customs.bg, Your Europe and capital.bg 2010 baggage list found, no e-liquid limit; not read as sources'], 'date': '2026-11-22'}).setdefault('other', []).append(t)
wrx(); wrl()
