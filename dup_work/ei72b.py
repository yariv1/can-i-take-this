# home app: a card built on airline and airport pages shows those links, with a footer that says so


def rw(p, old, new):
    s = open(p, encoding='utf8', newline='').read()
    if '\r\n' in s:
        old, new = old.replace('\n', '\r\n'), new.replace('\n', '\r\n')
    assert s.count(old) == 1, (p, old[:60], s.count(old))
    open(p, 'w', encoding='utf8', newline='').write(s.replace(old, new))


p = 'canitakethis.html'
rw(p, "/*app-synced*/function helpBlock(authority){", "/*app-synced*/function helpBlock(authority,own){")
rw(p, "  if(S.mode==='plane'){var a=airlineByName(S.airline),d=a.site;", "  if(S.mode==='plane'&&!own){var a=airlineByName(S.airline),d=a.site;")
rw(p, "'</ul>'+helpBlock(v.source)+'<div class=\"src\">'+appSrcFoot(v)", "'</ul>'+(v.airportMix?helpBlock(v.sources,true):helpBlock(v.source))+'<div class=\"src\">'+appSrcFoot(v)")
rw(p, "  if(S.mode==='plane'&&v.status!=='nomatch')return",
   "  if(S.mode==='plane'&&v.airportMix)return '<b class=\"src-ok\">✓ OFFICIAL SOURCE</b> The rule above is from official airline and airport pages. To be more sure and learn further, please check the links placed here above. '+base;\n  if(S.mode==='plane'&&v.status!=='nomatch')return")
print('ok')
