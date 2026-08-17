(function(){
"use strict";

/* ============ ICONS (line, currentColor) ============ */
const ICO = {
  star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.6l2.86 6.02 6.53.68-4.9 4.48 1.33 6.5L12 16.9l-5.82 3.38 1.33-6.5-4.9-4.48 6.53-.68z"/></svg>',
  cup:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h11v6a5 5 0 0 1-5 5H9a4 4 0 0 1-4-4z"/><path d="M16 9.5h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 3.5c-.7.7-.7 1.3 0 2M11.5 3.5c-.7.7-.7 1.3 0 2"/></svg>',
  drop:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c3 4 6 7.2 6 10.8A6 6 0 0 1 6 13.8C6 10.2 9 7 12 3z"/></svg>',
  ice:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M12 2v20M4 6l16 12M20 6L4 18M2 12h20"/></svg>',
  swirl:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M7 20V10a5 5 0 0 1 10 0v6a3 3 0 0 1-6 0V11"/><path d="M4 20h16"/></svg>',
  leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14z"/><path d="M5 19c3-5 6-8 11-11"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
  grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1.4"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.4"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.4"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.4"/></svg>'
};

/* glass illustration used for "Más Vendidos" thumbnails + their modal */
function glassIcon(opts){
  const id = opts.id;
  const liquid = opts.liquid;      // main liquid color
  const liquid2 = opts.liquid2||opts.liquid; // gradient bottom
  const topping = opts.topping;    // 'swirl' | 'shave' | 'whip' | 'ice'
  const toppingColor = opts.toppingColor||'#fff';
  return `<svg viewBox="0 0 100 100">
    <defs>
      <linearGradient id="liq-${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${liquid}"/>
        <stop offset="1" stop-color="${liquid2}"/>
      </linearGradient>
    </defs>
    <path d="M30 30 L70 30 L64 82 Q50 90 36 82 Z" fill="var(--surface)" stroke="var(--heading)" stroke-width="2"/>
    <path d="M33 40 L67 40 L62.5 80 Q50 87 37.5 80 Z" fill="url(#liq-${id})"/>
    ${topping==='swirl' ? `<path d="M37 44 Q50 38 63 44" fill="none" stroke="${toppingColor}" stroke-width="2.4" stroke-linecap="round"/><path d="M39 51 Q50 46 61 51" fill="none" stroke="${toppingColor}" stroke-width="2" stroke-linecap="round" opacity=".8"/>` : ''}
    ${topping==='shave' ? `<circle cx="42" cy="42" r="2" fill="${toppingColor}"/><circle cx="50" cy="39" r="2" fill="${toppingColor}"/><circle cx="58" cy="43" r="2" fill="${toppingColor}"/><circle cx="46" cy="46" r="1.6" fill="${toppingColor}"/><circle cx="54" cy="47" r="1.6" fill="${toppingColor}"/>` : ''}
    ${topping==='whip' ? `<path d="M38 40 Q42 30 50 32 Q58 30 62 40 Q64 44 58 45 L42 45 Q36 44 38 40Z" fill="${toppingColor}" stroke="var(--heading)" stroke-width="1.4"/>` : ''}
    ${topping==='ice' ? `<rect x="40" y="44" width="8" height="8" rx="1.6" fill="${toppingColor}" opacity=".9" transform="rotate(-8 44 48)"/><rect x="52" y="50" width="7" height="7" rx="1.6" fill="${toppingColor}" opacity=".85" transform="rotate(10 55 53)"/><rect x="42" y="58" width="6" height="6" rx="1.4" fill="${toppingColor}" opacity=".8" transform="rotate(6 45 61)"/>` : ''}
    <line x1="58" y1="24" x2="52" y2="80" stroke="var(--heading)" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M30 30 L70 30" stroke="var(--heading)" stroke-width="2" stroke-linecap="round"/>
  </svg>`;
}

const ICONS = {
  cocoMatcha: glassIcon({id:'cm',liquid:'#EAF3D4',liquid2:'#8FBF63',topping:'swirl',toppingColor:'#4F7A2E'}),
  cocoTaro:   glassIcon({id:'ct',liquid:'#E6D9F2',liquid2:'#A487C9',topping:'shave',toppingColor:'#FBF3DF'}),
  frappeClasico: glassIcon({id:'fc',liquid:'#DCC9A8',liquid2:'#8A6541',topping:'whip',toppingColor:'#FBF3DF'}),
  latteRocas: glassIcon({id:'lr',liquid:'#E7CFA1',liquid2:'#B98249',topping:'ice',toppingColor:'#EAF6F6'})
};

/* ============ EXTRAS CATALOG ============ */
const EXTRAS = {
  shot:  {name:'Extra shot', price:10, desc:'Un shot adicional de espresso para darle más fuerza a tu bebida.'},
  veg:   {name:'Leche vegetal', price:10, desc:'Cambia tu leche por almendra, avena o soya, sin costo extra en sabor.'},
  sabor: {name:'Sabor extra', price:10, desc:'Un shot de jarabe saborizado para personalizar tu bebida a tu gusto.'},
  batida:{name:'Crema batida', price:10, desc:'Un toque final de crema batida dulce y esponjosa.'},
  coco:  {name:'Crema de coco', price:10, desc:'Espuma cremosa de coco, ideal para nuestras bebidas frías.'}
};

/* ============ MENU DATA ============ */
const CATEGORIES = [
  {
    id:'destacados', label:'Más Vendidos', icon:ICO.star, type:'featured',
    items:[
      {id:'coco-matcha', name:'Coco Matcha', price:'60', icon:ICONS.cocoMatcha,
        desc:'Matcha ceremonial batido con leche de coco bien fría: cremoso, ligeramente dulce y muy verde.',
        lleva:['Matcha ceremonial','Leche de coco','Hielo'], extras:['coco','sabor']},
      {id:'coco-taro', name:'Coco Taro', price:'60', icon:ICONS.cocoTaro,
        desc:'Taro auténtico batido con leche de coco: dulce, aterciopelado y de un morado precioso.',
        lleva:['Taro','Leche de coco','Hielo'], extras:['coco','sabor']},
      {id:'frappe-clasico-dest', name:'Frappé Clásico', price:'45', icon:ICONS.frappeClasico,
        desc:'Nuestro frappé de café insignia, licuado con hielo hasta quedar suave y espumoso.',
        lleva:['Espresso','Leche','Hielo'], extras:['batida','sabor','veg']},
      {id:'latte-rocas-dest', name:'Latte en las Rocas', priceSD:{s:'45',d:'50'}, icon:ICONS.latteRocas,
        desc:'Espresso suave sobre hielo con leche fría: directo, fresco y perfecto para arrancar el día.',
        lleva:['Espresso','Leche fría','Hielo'], extras:['veg','sabor','shot']}
    ]
  },
  {
    id:'cafe-caliente', label:'Café Caliente', icon:ICO.cup, type:'sizes',
    sizeLabels:['12oz','16oz'], extras:['shot','veg','sabor'],
    footnote:'Malvaviscos y menta +$2',
    items:[
      {name:'Americano', price12_16:{a:'25',b:'30'}, desc:'Espresso diluido en agua caliente: limpio, intenso y sin vueltas.', lleva:['Espresso','Agua caliente']},
      {name:'Especial Vocho', price12_16:{a:'35',b:'40'}, desc:'La receta insignia de la casa: espresso con un toque de canela y cajeta, el mismo espíritu de nuestro Vocho rojo.', lleva:['Espresso','Leche vaporizada','Canela','Cajeta']},
      {name:'Capuccino', price12_16:{a:'30',b:'35'}, desc:'Espresso con leche vaporizada y una espuma densa y aterciopelada.', lleva:['Espresso','Leche vaporizada','Espuma de leche']},
      {name:'Mocaccino', price12_16:{a:'35',b:'40'}, desc:'Espresso y chocolate con leche vaporizada: dulce, intenso y reconfortante.', lleva:['Espresso','Chocolate','Leche vaporizada']},
      {name:'Chocolate', price12_16:{a:'35',b:'40'}, desc:'Chocolate artesanal caliente, cremoso de principio a fin.', lleva:['Chocolate artesanal','Leche vaporizada']},
      {name:'Lechero', price12_16:{a:'30',b:'35'}, desc:'Café de la casa con abundante leche caliente: suave y tradicional.', lleva:['Café de olla','Leche caliente']},
      {name:'Latte', price12_16:{a:'30',b:'35'}, desc:'Espresso con leche vaporizada sedosa: nuestro clásico de todos los días.', lleva:['Espresso','Leche vaporizada']}
    ]
  },
  {
    id:'espresso', label:'Espresso', icon:ICO.drop, type:'sizes',
    sizeLabels:['S','D'], extras:['shot','sabor'],
    items:[
      {name:'Ristretto 2oz', price12_16:{a:'30',b:'35'}, desc:'Extracción corta y concentrada: cuerpo intenso y dulzura natural.', lleva:['Espresso ristretto']},
      {name:'Clásico 4.8oz', price12_16:{a:'30',b:'35'}, desc:'Nuestro espresso base: equilibrado, aromático, sin adornos.', lleva:['Espresso']},
      {name:'Cortadito 4.8oz', price12_16:{a:'30',b:'35'}, desc:'Espresso cortado con un toque de leche vaporizada.', lleva:['Espresso','Toque de leche vaporizada']},
      {name:'Macchiato 4.8oz', price12_16:{a:'30',b:'35'}, desc:'Espresso "manchado" con un poco de espuma de leche.', lleva:['Espresso','Espuma de leche']}
    ]
  },
  {
    id:'bebidas-frias', label:'Bebidas Frías', icon:ICO.ice, type:'list',
    extras:['veg','sabor','batida','coco'],
    items:[
      {name:'Lattes en las Rocas', priceSD:{s:'50',d:'55'}, note:'Vainilla · Moka · Chocolate · Caramelo · Menta · Chocomenta · Crema Irlandesa · Bombón Tostado · Crema de Coco',
        desc:'Espresso sobre hielo con leche y el sabor que elijas: fresco, versátil y a tu gusto.', lleva:['Espresso','Leche','Hielo','Sabor a elegir']},
      {name:'Chocolate Artesanal en las Rocas', price:'50',
        desc:'Nuestro chocolate artesanal, servido bien frío sobre hielo.', lleva:['Chocolate artesanal','Leche','Hielo']},
      {name:'Smoothies', price:'50', note:'Frutos Rojos · Mango · Maracuyá · Kiwi',
        desc:'Fruta natural licuada con hielo: fresca, ligera y llena de sabor.', lleva:['Fruta natural','Hielo']},
      {name:'Sodas Italianas', price:'50', note:'Frutos Rojos · Maracuyá · Mango · Kiwi',
        desc:'Agua mineral con jarabe de fruta: burbujeante y muy refrescante.', lleva:['Agua mineral','Jarabe de fruta','Hielo']}
    ]
  },
  {
    id:'frappes', label:'Frappés', icon:ICO.swirl, type:'list',
    extras:['veg','sabor','batida'],
    items:[
      {name:'Clásico', price:'45', desc:'Café licuado con hielo hasta quedar suave y espumoso.', lleva:['Espresso','Leche','Hielo']},
      {name:'Con Sabor', price:'50', note:'Vainilla · Moka · Chocolate · Bombón Tostado · Chocomenta · Caramelo · Menta · Crema Irlandesa',
        desc:'Nuestro frappé clásico con el sabor que más se te antoje.', lleva:['Espresso','Leche','Hielo','Sabor a elegir']},
      {name:'Especiales', price:'55', note:'Cookies & Cream · Frappé Chai · Taro · Matcha',
        desc:'Combinaciones únicas de la casa para los paladares aventureros.', lleva:['Base de café o té','Leche','Hielo','Ingrediente especial']}
    ]
  },
  {
    id:'tes', label:'Tés', icon:ICO.leaf, type:'sizes',
    sizeLabels:['S','D'], extras:['sabor','veg'],
    items:[
      {name:'Chai Agua', price12_16:{a:'35',b:'40'}, desc:'Té chai especiado preparado en agua caliente: cálido y aromático.', lleva:['Té chai','Especias','Agua']},
      {name:'Chai Latte', price12_16:{a:'50',b:'55'}, desc:'Té chai especiado con leche vaporizada: reconfortante y cremoso.', lleva:['Té chai','Especias','Leche vaporizada']},
      {name:'Té Sabores', price12_16:{a:'30',b:'35'}, desc:'Selección de tés de hoja en distintos sabores.', lleva:['Té de hoja','Agua caliente']},
      {name:'Tizanas', price12_16:{a:'40',b:'45'}, desc:'Infusión herbal con fruta: ligera, ideal para relajarte.', lleva:['Hierbas','Fruta','Agua caliente']}
    ]
  },
  { id:'extras', label:'Extras', icon:ICO.plus, type:'extras' }
];

/* ============ RENDER ============ */
const tabbar = document.getElementById('tabbar');
const panelsRoot = document.getElementById('panels');
const TABS = [{id:'todos', label:'Todos', icon:ICO.grid}].concat(
  CATEGORIES.map(c=>({id:c.id, label:c.label, icon:c.icon}))
);
/* "todos" shows every section at once (destacados first, as authored), so first-time
   visitors see the whole menu the way they'd scan a printed board; picking a category
   pill then narrows the page down to just that section. */
let mode = 'todos';
let lastFocused = null;
let spyObserver = null;

function priceLabel(item){
  if(item.price12_16) return null; // rendered as columns
  if(item.priceSD) return `S $${item.priceSD.s} / D $${item.priceSD.d}`;
  if(item.price) return `$${item.price}`;
  return '';
}

function extrasAppliesTo(key){
  return CATEGORIES.filter(c=>c.extras && c.extras.includes(key)).map(c=>c.label);
}

/* --- tabs --- */
TABS.forEach((tab)=>{
  const btn = document.createElement('button');
  btn.className='tab';
  btn.id='tab-'+tab.id;
  btn.setAttribute('role','tab');
  btn.setAttribute('aria-selected', tab.id===mode ? 'true':'false');
  btn.setAttribute('aria-controls', tab.id==='todos' ? 'panels' : 'panel-'+tab.id);
  btn.tabIndex = tab.id===mode ? 0 : -1;
  btn.innerHTML = tab.icon + '<span>'+tab.label+'</span>';
  btn.addEventListener('click', ()=>selectTab(tab.id));
  btn.addEventListener('keydown', (e)=>{
    const idx = TABS.findIndex(t=>t.id===tab.id);
    let next=null;
    if(e.key==='ArrowRight') next=TABS[(idx+1)%TABS.length];
    else if(e.key==='ArrowLeft') next=TABS[(idx-1+TABS.length)%TABS.length];
    else if(e.key==='Home') next=TABS[0];
    else if(e.key==='End') next=TABS[TABS.length-1];
    if(next){ e.preventDefault(); selectTab(next.id); document.getElementById('tab-'+next.id).focus(); }
  });
  tabbar.appendChild(btn);
});

/* --- panels --- */
CATEGORIES.forEach(cat=>{
  const panel = document.createElement('section');
  panel.className='panel active'; /* "todos" mode starts with every section visible */
  panel.id='panel-'+cat.id;
  panel.setAttribute('role','tabpanel');
  panel.setAttribute('aria-labelledby','tab-'+cat.id);

  const head = document.createElement('div');
  head.className='panel-head';
  head.innerHTML = cat.icon + `<h2>${cat.label}</h2>` + '<div class="panel-head-rule"></div>';
  panel.appendChild(head);

  if(cat.type==='featured'){
    const grid=document.createElement('div'); grid.className='featured-grid';
    cat.items.forEach(item=>{
      const card=document.createElement('button');
      card.className='f-card'; card.type='button';
      card.innerHTML = `
        <div class="f-thumb">${item.icon}</div>
        <div class="f-name">${item.name}</div>
        <div class="f-bottom">
          <span class="f-price">${priceLabel(item)}</span>
          <span class="f-hint">${ICO.chev}</span>
        </div>`;
      card.addEventListener('click', ()=>openModal(item, cat));
      grid.appendChild(card);
    });
    panel.appendChild(grid);
  }

  if(cat.type==='sizes'){
    const sh=document.createElement('div'); sh.className='size-head';
    sh.innerHTML = `<span class="sh-label"></span><span>${cat.sizeLabels[0]}</span><span>${cat.sizeLabels[1]}</span>`;
    panel.appendChild(sh);
    const list=document.createElement('div'); list.className='list';
    cat.items.forEach(item=>{
      const row=document.createElement('button');
      row.className='row'; row.type='button';
      row.innerHTML = `
        <div class="row-main">
          <div class="row-name">${item.name}</div>
          ${item.note?`<span class="row-note">${item.note}</span>`:''}
        </div>
        <div class="row-prices"><b>${item.price12_16.a}</b><b>${item.price12_16.b}</b></div>`;
      row.addEventListener('click', ()=>openModal(item, cat));
      list.appendChild(row);
    });
    panel.appendChild(list);
    if(cat.footnote){
      const fn=document.createElement('p'); fn.className='panel-footnote'; fn.textContent=cat.footnote;
      panel.appendChild(fn);
    }
  }

  if(cat.type==='list'){
    const list=document.createElement('div'); list.className='list';
    cat.items.forEach(item=>{
      const row=document.createElement('button');
      row.className='row'; row.type='button';
      row.innerHTML = `
        <div class="row-main">
          <div class="row-name">${item.name}</div>
          ${item.note?`<span class="row-note">${item.note}</span>`:''}
        </div>
        <span class="row-price-inline">${priceLabel(item)}</span>
        <span class="row-chevron">${ICO.chev}</span>`;
      row.addEventListener('click', ()=>openModal(item, cat));
      list.appendChild(row);
    });
    panel.appendChild(list);
  }

  if(cat.type==='extras'){
    const grid=document.createElement('div'); grid.className='extras-grid';
    Object.keys(EXTRAS).forEach(key=>{
      const ex=EXTRAS[key];
      const row=document.createElement('button');
      row.className='extra-row'; row.type='button';
      row.innerHTML = `<span>${ex.name}</span><b>$${ex.price}</b>`;
      row.addEventListener('click', ()=>openExtraModal(key));
      grid.appendChild(row);
    });
    panel.appendChild(grid);
  }

  panelsRoot.appendChild(panel);
});

setupScrollSpy();

function highlightTab(id){
  TABS.forEach(tab=>{
    const btn=document.getElementById('tab-'+tab.id);
    const isActive = tab.id===id;
    btn.setAttribute('aria-selected', isActive?'true':'false');
    btn.tabIndex = isActive?0:-1;
    if(isActive) btn.scrollIntoView({block:'nearest', inline:'center', behavior:'smooth'});
  });
}

function selectTab(id){
  mode = id;
  if(id==='todos'){
    CATEGORIES.forEach(cat=>{ document.getElementById('panel-'+cat.id).classList.add('active'); });
    window.scrollTo({top:0, behavior:'smooth'});
  } else {
    CATEGORIES.forEach(cat=>{
      document.getElementById('panel-'+cat.id).classList.toggle('active', cat.id===id);
    });
    document.getElementById('panel-'+id).scrollIntoView({block:'start', behavior:'smooth'});
  }
  highlightTab(id);
}

/* Scrollspy: while every section is visible ("todos"), the pill for whichever
   section is currently in view lights up, so the tab bar stays a live "you are
   here" reading of a long page instead of a static filter list. */
function setupScrollSpy(){
  if(spyObserver) spyObserver.disconnect();
  spyObserver = new IntersectionObserver((entries)=>{
    if(mode!=='todos' || window.scrollY < 32) return;
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.id.replace('panel-','');
        highlightTab(id);
      }
    });
  }, { rootMargin:'-45% 0px -50% 0px', threshold:0 });
  CATEGORIES.forEach(cat=> spyObserver.observe(document.getElementById('panel-'+cat.id)));
}
/* Right at the top of the page (before any section has scrolled into the spy band)
   "Todos" itself should read as the active pill, since that's what's actually on screen. */
window.addEventListener('scroll', ()=>{
  if(mode==='todos' && window.scrollY < 32) highlightTab('todos');
}, {passive:true});

/* ============ MODAL ============ */
const backdrop=document.getElementById('modalBackdrop');
const modalCard=document.getElementById('modalCard');
const modalClose=document.getElementById('modalClose');
const modalIcon=document.getElementById('modalIcon');
const modalName=document.getElementById('modalName');
const modalNote=document.getElementById('modalNote');
const modalPriceRow=document.getElementById('modalPriceRow');
const modalDesc=document.getElementById('modalDesc');
const modalDescWrap=document.getElementById('modalDescWrap');
const modalLleva=document.getElementById('modalLleva');
const modalLlevaWrap=document.getElementById('modalLlevaWrap');
const modalExtras=document.getElementById('modalExtras');
const modalExtrasWrap=document.getElementById('modalExtrasWrap');
const modalExtrasLabel=document.getElementById('modalExtrasLabel');

function openModal(item, cat){
  lastFocused = document.activeElement;
  modalIcon.className = item.icon ? 'modal-icon' : 'modal-icon small';
  modalIcon.innerHTML = item.icon ? item.icon : cat.icon;
  modalName.textContent = item.name;
  if(item.note){ modalNote.hidden=false; modalNote.textContent=item.note; } else { modalNote.hidden=true; }

  modalPriceRow.innerHTML='';
  if(item.price12_16){
    modalPriceRow.innerHTML = `<span class="modal-price-pill">${cat.sizeLabels[0]} $${item.price12_16.a}</span><span class="modal-price-pill">${cat.sizeLabels[1]} $${item.price12_16.b}</span>`;
  } else if(item.priceSD){
    modalPriceRow.innerHTML = `<span class="modal-price-pill">S $${item.priceSD.s}</span><span class="modal-price-pill">D $${item.priceSD.d}</span>`;
  } else {
    modalPriceRow.innerHTML = `<span class="modal-price-pill">$${item.price}</span>`;
  }

  modalDescWrap.hidden=false;
  modalDesc.textContent = item.desc||'';

  if(item.lleva && item.lleva.length){
    modalLlevaWrap.hidden=false;
    modalLleva.innerHTML = item.lleva.map(l=>`<span class="chip">${l}</span>`).join('');
  } else { modalLlevaWrap.hidden=true; }

  const extraKeys = item.extras || cat.extras || [];
  if(extraKeys.length){
    modalExtrasWrap.hidden=false;
    modalExtrasLabel.textContent='Extras disponibles';
    modalExtras.innerHTML = extraKeys.map(k=>`<span class="chip extra-chip">${EXTRAS[k].name} <b>+$${EXTRAS[k].price}</b></span>`).join('');
  } else { modalExtrasWrap.hidden=true; }

  showModal();
}

function openExtraModal(key){
  lastFocused = document.activeElement;
  const ex = EXTRAS[key];
  modalIcon.className='modal-icon small';
  modalIcon.innerHTML = ICO.plus;
  modalName.textContent = ex.name;
  modalNote.hidden=true;
  modalPriceRow.innerHTML = `<span class="modal-price-pill">$${ex.price}</span>`;
  modalDescWrap.hidden=false;
  modalDesc.textContent = ex.desc;
  modalLlevaWrap.hidden=true;
  const applies = extrasAppliesTo(key);
  if(applies.length){
    modalExtrasWrap.hidden=false;
    modalExtrasLabel.textContent='Disponible en';
    modalExtras.innerHTML = applies.map(l=>`<span class="chip">${l}</span>`).join('');
  } else { modalExtrasWrap.hidden=true; }
  showModal();
}

function showModal(){
  backdrop.classList.add('open');
  backdrop.hidden=false;
  document.body.style.overflow='hidden';
  modalClose.focus();
}
function closeModal(){
  backdrop.classList.remove('open');
  document.body.style.overflow='';
  setTimeout(()=>{ backdrop.hidden=true; }, 180);
  if(lastFocused) lastFocused.focus();
}

modalClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', (e)=>{ if(e.target===backdrop) closeModal(); });
document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape' && backdrop.classList.contains('open')) closeModal();
  if(e.key==='Tab' && backdrop.classList.contains('open')){
    const focusables = modalCard.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
    if(!focusables.length) return;
    const first=focusables[0], last=focusables[focusables.length-1];
    if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
  }
});

backdrop.hidden = true;
})();
