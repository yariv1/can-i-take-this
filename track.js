/* Answer-quality events for GA4. Delegated, no page code touched. Events: answer_shown, typeahead_pick, chip_click, source_click. */
(function(){
  try{
    if(location.search.indexOf('internal=1')>-1)localStorage.setItem('citt_internal','1');
    if(location.search.indexOf('internal=0')>-1)localStorage.removeItem('citt_internal');
  }catch(e){}
  function send(name,p){
    try{
      if(!window.gtag)return;
      p=p||{};
      p.page_type=pt();
      try{if(localStorage.getItem('citt_internal'))p.traffic_type='internal';}catch(e){}
      window.gtag('event',name,p);
    }catch(e){}
  }
  function pt(){
    var s=location.pathname.split('/').filter(Boolean)[0]||'home';
    return s;
  }
  function txt(el){return ((el&&el.textContent)||'').replace(/\s+/g,' ').trim().slice(0,60);}
  document.addEventListener('click',function(e){
    var t=e.target;if(!t||!t.closest)return;
    var sug=t.closest('.sug');
    if(sug){send('typeahead_pick',{label:txt(sug)});return;}
    var chip=t.closest('.chip');
    if(chip){send('chip_click',{label:txt(chip)});return;}
    var a=t.closest('a[href]');
    if(a&&/^https?:/i.test(a.getAttribute('href'))&&a.hostname&&a.hostname!==location.hostname&&a.closest('.src,.src-ok,.src-un,.src-no,.sources,.cc,.pass,main')){
      send('source_click',{host:a.hostname,label:txt(a)});
    }
  },true);
  var last='',timer=null;
  function answerNow(){
    var n=document.querySelector('#taResult .cc,#taResult .hitem,#taResult .pass,.pass.on,#result .pass,.answercard .pass,.pass');
    if(!n||n.offsetParent===null)return;
    var v=txt(n.querySelector('.verdict'));
    if(!v)return;
    var key=location.pathname+'|'+v+'|'+txt(n.querySelector('.headline')).slice(0,30);
    if(key===last)return;
    last=key;
    send('answer_shown',{verdict:v});
  }
  function arm(){
    if(!window.MutationObserver)return;
    new MutationObserver(function(){
      clearTimeout(timer);timer=setTimeout(answerNow,400);
    }).observe(document.body,{childList:true,subtree:true});
    setTimeout(answerNow,1200);
  }
  if(document.body)arm();else document.addEventListener('DOMContentLoaded',arm);
})();
