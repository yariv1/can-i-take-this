p='airline_medication_b13.js'
s=open(p,encoding='utf8',newline='').read()
nl='\r\n' if '\r\n' in s else '\n'
a=s.index("        card('poc', 'Oxygen concentrators'")
b=s.index("        ab(PA)",a)
q=chr(39);bs=chr(92)
new="""        card('poc', 'Oxygen concentrators', 'warn', 'FAA-approved only, 150% battery', 'Portable oxygen concentrators and ventilators', 'Alaska accepts FAA-approved portable oxygen concentrators and respiratory devices on domestic and international flights if they carry the red FAA label; bring batteries for at least 150% of the flight and tell Alaska 48 hours ahead.', [
          'Alaska Airlines: it accepts oxygen concentrating devices on domestic and international flights provided each has a permanent label with a statement in red lettering that it meets FAA criteria; use the label on the device, not the kit name, to check the model.',
          'Alaska Airlines: bring fully charged batteries for no less than 150% of the flight plus ground connection time; spare batteries must go in the cabin, never in checked baggage, with terminals covered or each battery in its own pouch.',
          'Alaska Airlines: you may use an approved device during taxi, take-off and landing if it stays stowed under the seat in front, positioned so you can see its warnings; a customer service agent must verify the model, the phases of flight you will use it and your batteries.',
          'Alaska Airlines: advance notice is not required but 48 hours is strongly recommended; you must provide the device (rented or owned) and know how to use it, as Alaska supplies none.',
          'Alaska Airlines: an unapproved concentrator may travel in the cabin if it meets carry-on size and weight limits with batteries removed.',
          'TSA: portable oxygen concentrators are allowed in carry-on and checked bags with special instructions, and the officer makes the final decision at the checkpoint.'
        ], [P4, P3]),""".replace('\n',nl)
s=s[:a]+new+nl+s[b:]
c=s.index("    const P3 = [",0)
s=s[:c]+"    const P4 = ['https://www.alaskaair.com/content/travel-info/accessible-services/specialservices-oxygen', 'Alaska Airlines and Hawaiian Airlines: Oxygen and respiratory devices (read from an archived copy, 24 November 2026)', 'Portable oxygen concentrators'];"+nl+s[c:]
open(p,'w',encoding='utf8',newline='').write(s)
