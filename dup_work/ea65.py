p='airline_medication_b11.js'
s=open(p,encoding='utf8',newline='').read()
nl='\r\n' if '\r\n' in s else '\n'
i=s.index("slug: 'el-al'")
k=s.rindex("    add({",0,i)
j=s.index("faq: [",i)
b=s[i:j]
old="        gap('pills', 'Pills & tablets', 'x', 'Keep it with you', P1, 'EL AL', 'ordinary pills and tablets'),"
assert old in b
new="""        card('pills', 'Pills & tablets', 'warn', 'Stay under the documented amounts', 'Medicines leaving or entering Israel', 'The Israel Ministry of Health (not EL AL) says the quantity you may carry without documents depends on the destination; for controlled medicines, the UN guideline amounts are the usual cut-off.', [
          'Israel Ministry of Health, Pharmaceutics Division: for medicines classed as narcotic or psychotropic, check each destination, because some countries want documents for any amount and others only above a set quantity.',
          'The Ministry reproduces UN guideline quantities above which papers are needed, for example codeine 12 g, morphine 3 g, oxycodone 1 g, methylphenidate 2 g, diazepam 300 mg and lorazepam 75 mg.',
          'Entering Israel, the Ministry allows a personal supply of up to 90 days of ordinary medicines; narcotic and psychotropic medicines follow different rules, including a 31-day limit with a prescription copy, the original pack and a permit to carry from the country of residence.',
          'A supplement or vitamin sold freely abroad may count as a medicine in Israel that needs authorisation.'
        ], [P2]),""".replace('\n',nl)
b=b.replace(old,new)
s=s[:i]+b+s[j:]
c=s.index("    const P2 = ['https://www.gov.il/en/pages/carrying-medication'")
q=s[c:s.index(nl,c)]
s=s[:k]+q+nl+s[k:]
open(p,'w',encoding='utf8',newline='').write(s)
