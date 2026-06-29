/* reveal-on-scroll — mirrors the home page behaviour */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var nodes = document.querySelectorAll('.reveal');
  if(reduce || !('IntersectionObserver' in window)){
    nodes.forEach(function(n){ n.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {rootMargin:'0px 0px -8% 0px', threshold:0.12});
  nodes.forEach(function(n){ io.observe(n); });
})();
