import re
R='C:/Users/yariv/Utility Website/can-i-take-this/'
M='C:/Users/yariv/.claude/projects/C--Users-yariv-Utility-Website-can-i-take-this/memory/'
block=open(R+'dup_work/handoff60.md',encoding='utf8').read()
# memory roadmap
p=M+'project_blog_roadmap.md'
s=open(p,encoding='utf8').read()
i=s.index('## SESSION 59 HANDOFF')
s=s[:i]+block+'\n---\n\n'+s[i:]
s=re.sub(r'description: "[^"]*"','description: "SESSION 60 HANDOFF (2026-11-22). READ FIRST. main=ececd6e58 deployed; pages >=60% duplicate 206->165, >=70% 127->68; next = worst-first on remaining >=70% pages (18 pets, airline alcohol/perfume/power-bank, EU country tobacco/cash) with source ladder; duplicates are the problem not length; deploy only on his word; no hooks; zero narration; AdSense re-request not before 2026-12-08."',s,count=1)
open(p,'w',encoding='utf8').write(s)
# repo roadmap
q=R+'BLOG_ROADMAP.md'
t=open(q,encoding='utf8').read()
open(q,'w',encoding='utf8').write('# SESSION 60 HANDOFF block (2026-11-22) - same text as memory project_blog_roadmap.md\n\n'+block+'\n---\n\n'+t)
# MEMORY.md index
m=M+'MEMORY.md'
x=open(m,encoding='utf8').read()
line="- [SESSION 60 HANDOFF 2026-11-22 — READ FIRST](project_blog_roadmap.md) — main=ececd6e58 DEPLOYED, gate 39/39; pages >=60% duplicate 206->165, >=70% 127->68; next = worst-first on pages still >=70% (18 pets generic, airline alcohol/perfume/power-bank, EU tobacco/cash) via ladder official->2a->2b->global; duplicates not length are the problem; deploy only on his word; no hooks; zero narration; first reply = 1 rules line + 3 Synced bullets, NO question; AdSense re-request not before 2026-12-08\n- [Duplicates are the problem, thin is OK (HARD, 2026-11-22)](feedback_duplicates_not_length.md) — precise short page-specific answers are fine; never pad; fix templated/duplicated text with sourced page-specific facts or trim repeated template text\n"
j=x.index('\n',x.index('# '))+1 if x.startswith('#') else 0
x=line+x
open(m,'w',encoding='utf8').write(x)
open(M+'feedback_duplicates_not_length.md','w',encoding='utf8').write("""---
name: feedback-duplicates-not-length
description: "HARD (user, 2026-11-22): thin content is fine if precise; the AdSense problem is mainly duplicated/templated content"
metadata:
  type: feedback
---

User said (2026-11-22): thin content does not mean not good; a page needs to be precise and answer the user's questions/search terms. The problem is MAINLY the duplicated/templated content.

**Why:** AdSense rejection 2026-11-08 "Low value content"; he believes templated sibling pages are the blocker (our duplicate-share audit is the metric). He also said no re-request before 2026-12-08.

**How to apply:** never pad a page for length; replace global/template text with page-specific sourced facts (ladder official -> 2a -> 2b -> global), or trim repeated template text where it is the same on every sibling (worked for EU plants-seeds and the vaping template). Measure with `node audit_duplicates.js` and `node dup_work/cnt.js .`. See [[project-blog-roadmap]] and [[feedback_worst_pages_first]].
""")
