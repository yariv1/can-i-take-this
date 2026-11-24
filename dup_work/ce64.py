p='airline_medication_b11.js'
s=open(p,encoding='utf8',newline='').read()
nl='\r\n' if '\r\n' in s else '\n'
i=s.index("slug: 'china-eastern'")
k=s.rindex("    add({",0,i)
j=s.index("faq: [",i)
b=s[i:j]
old="        gap('pills', 'Pills & tablets', 'x', 'Keep it with you', P1, 'China Eastern', 'ordinary pills and tablets'),"
assert old in b
new="""        card('domestic', 'Domestic flights in China', 'warn', 'Certificate or prescription', 'Liquid medicine on domestic legs', 'China civil aviation authority (CAAC, 2008 notice): on domestic flights, patients may carry needed liquid medicine if they show a hospital certificate or doctor prescription in their own name. This is the authority, not China Eastern.', [
          'CAAC notice of 9 December 2008, article 4: diabetics and other patients may carry the liquid medicine they need for the journey, but must show a hospital certificate or a doctor prescription with their own name; liquid milk products for a travelling baby are allowed after the security check.',
          'CAAC article 3: on domestic flights each liquid container may hold at most 100 ml and the total may not exceed 1,000 ml, except flammable and explosive liquids, which are banned.',
          'CAAC article 2: on international and regional flights the 2007 liquids announcement still applies.',
          'The notice is dated 2008; the authority page still marks it as valid.'
        ], [P2]),""".replace('\n',nl)
b=b.replace(old,new)
s=s[:i]+b+s[j:]
s=s[:k]+"    const P2 = ['http://www.caac.gov.cn/WZWSREL1BIT05FL1hYR0tfMTcvWFhHSy9UWlRHLzIwMTUxMC90MjAxNTEwMjJfMjUzOC5odG1s', 'Civil Aviation Administration of China: Notice on adjusting liquids and lighters on flights (2008, in Chinese)', 'Liquid medicine, domestic flights'];"+nl+s[k:]
open(p,'w',encoding='utf8',newline='').write(s)
