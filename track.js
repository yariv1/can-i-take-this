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
  var t0=Date.now(),nClicks=0,maxScroll=0,firstSent=false,sentSummary=false;
  function secs(){return Math.round((Date.now()-t0)/1000);}
  function section(el){
    var n=el;
    while(n&&n!==document.body){
      if(n.id&&!/^(fbBtn|fbOv|fbPanel)$/.test(n.id))return n.id.slice(0,40);
      var tg=n.tagName;
      if(tg==='HEADER'||tg==='NAV'||tg==='FOOTER'||tg==='ASIDE'||tg==='MAIN')return tg.toLowerCase()+(n.className?'.'+String(n.className).split(' ')[0]:'');
      n=n.parentElement;
    }
    return 'body';
  }
  function kind(el){
    var tg=el.tagName;
    if(tg==='A')return 'link';
    if(tg==='BUTTON'||el.getAttribute('role')==='button'||el.getAttribute('role')==='tab')return 'button';
    if(tg==='INPUT'||tg==='TEXTAREA'||tg==='SELECT')return 'input';
    return 'other';
  }
  document.addEventListener('click',function(e){
    var t=e.target;if(!t||!t.closest)return;
    try{
      nClicks++;
      if(nClicks<=60){
        var el=t.closest('a,button,[role=button],[role=tab],input,select,textarea,.chip,.sug')||t;
        var k=kind(el);
        var p={element:k,section:section(el),secs:secs(),n:nClicks};
        if(k==='other'){p.label=(el.children.length?'':txt(el).slice(0,40))||(el.tagName.toLowerCase()+(el.className&&typeof el.className==='string'?'.'+el.className.split(' ')[0]:''));}else if(k!=='input'){p.label=txt(el)||(el.getAttribute('aria-label')||'').slice(0,60)||el.tagName.toLowerCase();}
        if(k==='link'){try{p.target=el.hostname===location.hostname?el.pathname.slice(0,80):el.hostname;}catch(x){}}
        send('ui_click',p);
      }
      if(!firstSent){firstSent=true;send('first_click',{secs:secs()});}
    }catch(x){}
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
  window.addEventListener('scroll',function(){
    try{
      var d=document.documentElement,h=d.scrollHeight-window.innerHeight;
      if(h>0){var pc=Math.min(100,Math.round((window.pageYOffset||d.scrollTop)/h*100));if(pc>maxScroll)maxScroll=pc;}
    }catch(x){}
  },{passive:true});
  function summary(){
    if(sentSummary)return;
    sentSummary=true;
    try{
      if(!window.gtag)return;
      var p={secs:secs(),clicks:nClicks,scroll_pct:maxScroll,page_type:pt(),transport_type:'beacon'};
      try{if(localStorage.getItem('citt_internal'))p.traffic_type='internal';}catch(e){}
      window.gtag('event','page_summary',p);
    }catch(e){}
  }
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')summary();});
  window.addEventListener('pagehide',summary);
  if(document.body)arm();else document.addEventListener('DOMContentLoaded',arm);
})();
