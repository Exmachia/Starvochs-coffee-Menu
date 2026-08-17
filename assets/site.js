(function(){
"use strict";

/* Marks the current page's link as active in both the desktop nav and the
   mobile panel. Reads it from <body data-page="..."> so the navbar partial
   itself stays identical on every page (no per-page templating needed). */
function markActiveLink(){
  var current = document.body.getAttribute('data-page');
  if(!current) return;
  document.querySelectorAll('[data-page="' + current + '"]').forEach(function(a){
    if(a.tagName === 'A'){
      a.setAttribute('aria-current', 'page');
    }
  });
}

function setupBurger(){
  var burger = document.getElementById('navBurger');
  var panel = document.getElementById('navPanel');
  if(!burger || !panel) return;

  function closePanel(){
    panel.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Abrir menú de navegación');
  }
  function openPanel(){
    panel.hidden = false;
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Cerrar menú de navegación');
  }

  burger.addEventListener('click', function(){
    if(panel.hidden) openPanel(); else closePanel();
  });
  panel.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', closePanel);
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !panel.hidden){ closePanel(); burger.focus(); }
  });
  // Collapse the mobile panel automatically if the viewport grows into the
  // desktop breakpoint while it's open (e.g. rotating a tablet).
  var desktopQuery = window.matchMedia('(min-width:760px)');
  function handleBreakpoint(e){ if(e.matches) closePanel(); }
  if(desktopQuery.addEventListener) desktopQuery.addEventListener('change', handleBreakpoint);
}

markActiveLink();
setupBurger();
})();
