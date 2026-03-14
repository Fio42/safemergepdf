/* NoServerTools — nst-shell v4.0 UNIVERSAL HEADER
   Place at /nst-shell.js (site root)
   <script src="/nst-shell.js"></script> inside <body>
*/
(function(){
'use strict';

var LOGO_SRC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABCGlDQ1BJQ0MgUHJvZmlsZQAAeJxjYGA8wQAELAYMDLl5JUVB7k4KEZFRCuwPGBiBEAwSk4sLGHADoKpv1yBqL+viUYcLcKakFicD6Q9ArFIEtBxopAiQLZIOYWuA2EkQtg2IXV5SUAJkB4DYRSFBzkB2CpCtkY7ETkJiJxcUgdT3ANk2uTmlyQh3M/Ck5oUGA2kOIJZhKGYIYnBncAL5H6IkfxEDg8VXBgbmCQixpJkMDNtbGRgkbiHEVBYwMPC3MDBsO48QQ4RJQWJRIliIBYiZ0tIYGD4tZ2DgjWRgEL7AwMAVDQsIHG5TALvNnSEfCNMZchhSgSKeDHkMyQx6QJYRgwGDIYMZAKbWPz9HbOBQAAAG2klEQVR4nMWXf4xUVxXHP+fe+37PzO4ObOkSSjFWaEtjKynBmmgsKeof2hANqa2aaDAm9B+xMaYJak1KUUmM1Rpsgm2ppm001WhDm1iL1KAo0BrTllKDNIDQFHZhl2F32Jl57x7/eLPAwu4GaqM3uX/Mm3ff+Zxz7/eec0TEKv/H4d75Upni2eX7cpkAE0YL0CmMiQOR7n+XBnOJAAJ40KL8ZROwGWJiEEE1h2IU7Zzu2hUwDtS/SwCagwmx0VxMdBUS9SNBDYIUXARhhDrwxSl845/4Y3ugfbqEgKmjNeHa9IdQAAUtMOE8THwNJqgjNgIXgg0hiCBMIErRKEWzXjSr4hmFfz2DvrEVRcDYaSFmAFBAsPG1SDQfYwLEBmDjc54HMcQZRBkaJ2ia4qsZvlZDqjX49w5063q03ZwWwkwfd8HGi8uQGymNm7gEsBG4GIIEggSNUzSrolkNrdSQNISwA7esxKzZhMRp6ZBcrJwpAAQosOE1SDAHUIyJwURgI8SGiA0QFyFdAKIYkgStpJDGkKXQUwUdRW9ejlm9AXzBVNI1FxnXHLH9mGAugTUEQYKIBXG4IMKGCeIiXJRiwhibJNisgmQZrpIQ1BJcLcFWY1xvhisa8PE7MB/9NPhOuRXTAyiIwwbz8So0h5uMnRjDe0GMZbTZYbTRQsOU04VlTAKaQUhTDK04YhzLuBdaRmg7R6s7c99CPrcWiTPw+aStOE+Gpfcm6KfQlHpPwvoH1+IR7tvwNMODTe76/K2sWH4TX9v4Bz61fBGrVy2lry/jwGCTLTuPcOdHFmBCS1vAxA4bOpyF779+nFcXLMR9aAX5H38L1kFRdM2K1XI6FdAgXqiEH9ar3/cZVfWqqrrxh08rrNBHnvyTqqp+6euPq6rq0NBJ3fvaAW2cOqXf2vIXHRwc1vGxMVVV1aKjo41RPX5qVOf/Zq+y/W0Nv/0TFVCxoU7YNZPDb8GkIIr3BSeHGwB89e7bGVg0j+ODw4w1x1m6eA4AX7l3M4uXrKW27D4efGInA6s2ce2Xf0vulSf+eoC+e37F/C0vc7hT4EwLvf46JAihyM8eyMkAWCAAPIqnkqW8tnc/1ggbvnMX42dOk6UxL2x/ibwo+PXmb/D8tu9x58oP0swdedxHO67ijIAL6NTrFPUaLnVgcuSKOvT0Af6sICYfQjGIlI8K7wnDgO079vCDh37BFz97G7d/YilFUbDzb/u49ZPr+N1zu1h+yyKe/O4dPHbvbYj3BGlcfthZpJpgMweRILbAJg6Jo5lVoGhJJ0pReCpZxv3rH2Z4pMGSGxcxNnaG3lrGn198nZUrHyBZuJo9r7zJFz52A1mPMF50KLxS4NEINBJMqLgIrO1A3pmUJ88D6N4B5CAgBqw19M+exejJQR7Y+EgpG+e4+QPv4dD+R3nmufv5+Y/uZskNCzh49ATjow3CxGCNkCUOMjCZYBMlyAzBmSF0ZARhBhmqbyKS0Gq1eXHHS+x+eS8mGeDhLb9n2dL3U6mkHDr6Nm8eOsqyG+dhrWXbzlf55qPbyJOI3Anb9x3m7ycaSD1BIrChJ6wI7NqPHz9TXuved1V4Nhl1IxD045Lr8FKQj7cgjIgrfag4Ws0mBAEkVcgLbC1Doog8jGFgAHf1XHzF4W0O82cRvXcOYW9IFOakc2s07lnHyOO/LJWQFxdGoJSh5iP4ookEKXG1itgYj8GECVmljg8iCMu7v+McmiZE/XW0XkF7U2x/SnBlBXpCXGYJg5y44rBvHWZs6/PlLVicK1SmyAUdfOcIIHjv8apgBBUoRFDrUGfxYYSpVbG9VXw1xvemMDuFegI1R1AxRKkS2za1WTGjmx6jc2IYY4NJaXmKXGDR9jF8exCVAMWXZZcIai0aWDQK0chC7NAsQqsRZA6qDqlagkSIYk/MONUrq3Re2M6JzU8h1qG+mEmGE4EQ/Jn9aHEKbIiKoqJgBXUGDQyEFg0tpA5JTTljwUZgA8XmbdLZNfy+Nzi0Zh1+IuwX1CTTFCQGNKdovIJvD4FLwNoSwnRXBaaMQmTQUJBQMU4xtLGSE87ppbNrDwdXraF9bAgxFvzFFdE0RWk3L2iH4uRuKBqYK24CF6LWIdaA+PIV4xGr4MAkrqwB/BjNH/+UkYc241utSbK7ONgzdkbnClMJa5jZ18PAYsycq9BZdZjdg86uIPUIqQh2fAj5x246zz5L5+BBBAPWTmv8EgDOA9GihDEOqfQjPf1Q64XYQd6EkUH0rSP4Tqtc4cLS8Awl+WUAdCFEymZDi2neMeC6DckU+/1fAkxa1QXqgqHl6b6ETujC8c6a04ne713oq2foC/4XQ/kPVcGm901ZeggAAAAASUVORK5CYII=';

/* ── DEFINICIÓN COMPLETA DE HERRAMIENTAS ── */
var TOOLS_CONFIG = {
  pdf: {
    title: 'PDF',
    icon: '📄',
    tools: [
      {key:'merge',    href:'/merge-pdf/',        icon:'🔗'},
      {key:'split',    href:'/split-pdf/',        icon:'✂️'},
      {key:'compress', href:'/compress-pdf/',     icon:'🗜️'},
      {key:'pdfjpg',   href:'/pdf-to-jpg/',       icon:'🖼️'},
      {key:'rotate',   href:'/rotate-pdf/',       icon:'🔄'},
      {key:'protect',  href:'/protect-pdf/',      icon:'🔐'},
      {key:'unlock',   href:'/unlock-pdf/',       icon:'🔓'},
      {key:'edit',     href:'/edit-pdf/',         icon:'✏️'},
      {key:'delete',   href:'/delete-pages/',     icon:'🗑️'},
      {key:'reorder',  href:'/reorder-pages/',    icon:'📑'}
    ]
  },
  seo: {
    title: 'SEO',
    icon: '🔍',
    tools: [
      {key:'metatags',      href:'/meta-tags/',       icon:'🏷️',  label:'Meta Tags'},
      {key:'keyworddensity',href:'/keyword-density/', icon:'📊',  label:'Keyword Density'},
      {key:'robotstxt',     href:'/robots-txt/',      icon:'🤖',  label:'Robots.txt'},
      {key:'sitemapxml',    href:'/sitemap-xml/',     icon:'🗺️',  label:'Sitemap XML'},
      {key:'schemamarkup',  href:'/schema-markup/',   icon:'📋',  label:'Schema Markup'},
      {key:'opengraph',     href:'/open-graph/',      icon:'📱',  label:'Open Graph'}
    ]
  },
  text: {
    title: 'Texto',
    icon: '📝',
    tools: [
      {key:'wordcounter',   href:'/word-counter/',    icon:'🔢',  label:'Word Counter'},
      {key:'caseconverter', href:'/case-converter/',  icon:'🔤',  label:'Case Converter'},
      {key:'loremipsum',    href:'/lorem-ipsum/',     icon:'📄',  label:'Lorem Ipsum'}
    ]
  },
  image: {
    title: 'Imagen',
    icon: '🖼️',
    tools: [
      {key:'imagecompressor',href:'/image-compressor/',icon:'📦', label:'Image Compressor'},
      {key:'imageconverter', href:'/image-converter/', icon:'🔄', label:'Image Converter'},
      {key:'imageresizer',   href:'/image-resizer/',   icon:'📐', label:'Image Resizer'}
    ]
  },
  ai: {
    title: 'IA',
    icon: '🤖',
    tools: [
      {key:'aichecker',     href:'/ai-checker/',      icon:'🔍'},
      {key:'aisummarizer',  href:'/ai-summarizer/',   icon:'📝'}
    ]
  },
  utils: {
    title: 'Utilidades',
    icon: '🛠️',
    tools: [
      {key:'qrgenerator',   href:'/qr-generator/',    icon:'📱',  label:'QR Generator'},
      {key:'colorpicker',   href:'/color-picker/',    icon:'🎨',  label:'Color Picker'},
      {key:'base64encoder', href:'/base64-encoder/',  icon:'🔐',  label:'Base64 Encoder'}
    ]
  }
};

/* ── i18n ── */
var I18N = {
  en:{
    back:'All tools',
    home:'Home',
    tools:'Tools',
    'nav.merge':'Merge','nav.compress':'Compress','nav.split':'Split',
    'nav.pdfjpg':'JPG↔PDF','nav.rotate':'Rotate','nav.protect':'Protect',
    'nav.unlock':'Unlock','nav.edit':'Edit','nav.delete':'Delete Pages','nav.reorder':'Reorder',
    'nav.aichecker':'AI Checker','nav.aisummarizer':'Summarizer',
    'nav.metatags':'Meta Tags','nav.keyworddensity':'Keyword Density',
    'nav.robotstxt':'Robots.txt','nav.sitemapxml':'Sitemap XML',
    'nav.schemamarkup':'Schema Markup','nav.opengraph':'Open Graph',
    'nav.wordcounter':'Word Counter','nav.caseconverter':'Case Converter','nav.loremipsum':'Lorem Ipsum',
    'nav.imagecompressor':'Image Compressor','nav.imageconverter':'Image Converter','nav.imageresizer':'Image Resizer',
    'nav.qrgenerator':'QR Generator','nav.colorpicker':'Color Picker','nav.base64encoder':'Base64 Encoder',
    'cat.pdf':'PDF Tools','cat.seo':'SEO Tools','cat.text':'Text Tools',
    'cat.image':'Image Tools','cat.ai':'AI Tools','cat.utils':'Utilities',
    'pill.uploads':'Zero uploads','pill.servers':'Zero servers',
    'pill.tracking':'Zero tracking','pill.free':'Free forever',
    'footer.tagline':'Your files never leave your computer.',
    'footer.pdfs':'PDF Tools','footer.ai':'AI Tools'
  },
  es:{
    back:'Todas las herramientas',home:'Inicio',tools:'Herramientas',
    'nav.merge':'Combinar','nav.compress':'Comprimir','nav.split':'Dividir',
    'nav.pdfjpg':'JPG↔PDF','nav.rotate':'Rotar','nav.protect':'Proteger',
    'nav.unlock':'Desbloquear','nav.edit':'Editar','nav.delete':'Eliminar','nav.reorder':'Reordenar',
    'nav.aichecker':'Detector IA','nav.aisummarizer':'Resumidor',
    'nav.metatags':'Meta Tags','nav.keyworddensity':'Densidad de Keywords',
    'nav.robotstxt':'Robots.txt','nav.sitemapxml':'Sitemap XML',
    'nav.schemamarkup':'Schema Markup','nav.opengraph':'Open Graph',
    'nav.wordcounter':'Contador de Palabras','nav.caseconverter':'Convertidor Mayúsculas','nav.loremipsum':'Lorem Ipsum',
    'nav.imagecompressor':'Compresor Imágenes','nav.imageconverter':'Conversor Imágenes','nav.imageresizer':'Redimensionar',
    'nav.qrgenerator':'Generador QR','nav.colorpicker':'Selector Colores','nav.base64encoder':'Codificador Base64',
    'cat.pdf':'Herramientas PDF','cat.seo':'Herramientas SEO','cat.text':'Herramientas de Texto',
    'cat.image':'Herramientas de Imagen','cat.ai':'Herramientas IA','cat.utils':'Utilidades',
    'pill.uploads':'Sin subidas','pill.servers':'Sin servidores',
    'pill.tracking':'Sin rastreo','pill.free':'Gratis siempre',
    'footer.tagline':'Tus archivos nunca salen de tu dispositivo.',
    'footer.pdfs':'Herramientas PDF','footer.ai':'Herramientas IA'
  }
};

var FLAGS  = {en:'🇺🇸',es:'🇪🇸',pt:'🇧🇷',fr:'🇫🇷',de:'🇩🇪'};
var LABELS = {en:'EN',es:'ES',pt:'PT',fr:'FR',de:'DE'};
var LANGS  = ['en','es'];

function getLang(){
  var s = localStorage.getItem('nst_lang');
  if (s && FLAGS[s]) return s;
  var n = (navigator.language||'en').toLowerCase().slice(0,2);
  return FLAGS[n] ? n : 'en';
}
var CUR = getLang();

function t(k){ return (I18N[CUR]||I18N.en)[k] || (I18N.en[k]||k); }

/* ── Obtener todas las herramientas en formato flat ── */
function getAllTools() {
  var all = [];
  Object.keys(TOOLS_CONFIG).forEach(function(cat){
    TOOLS_CONFIG[cat].tools.forEach(function(tool){
      all.push(tool);
    });
  });
  return all;
}

/* ── Detectar herramienta actual ── */
function getCurrentTool() {
  var path = location.pathname;
  var allTools = getAllTools();
  for (var i = 0; i < allTools.length; i++) {
    if (allTools[i].href === path || allTools[i].href.replace(/\/$/, '') === path) {
      return allTools[i];
    }
  }
  return null;
}

/* ── Detectar categoría actual ── */
function getCurrentCategory() {
  var tool = getCurrentTool();
  if (!tool) return null;
  
  var cats = Object.keys(TOOLS_CONFIG);
  for (var i = 0; i < cats.length; i++) {
    var cat = TOOLS_CONFIG[cats[i]];
    for (var j = 0; j < cat.tools.length; j++) {
      if (cat.tools[j].key === tool.key) {
        return cats[i];
      }
    }
  }
  return null;
}

/* ── CSS ── */
var CSS = [
  '#nst-shell-nav{position:sticky;top:0;z-index:200;border-bottom:1px solid rgba(255,255,255,.07);backdrop-filter:blur(16px);background:rgba(14,17,23,.92);}',
  '#nst-nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;gap:12px;padding:12px 20px;}',
  '#nst-logo{display:flex;align-items:center;gap:9px;text-decoration:none;flex-shrink:0;}',
  '#nst-logo img{width:28px;height:28px;border-radius:50%;object-fit:cover;display:block;}',
  '#nst-logo-text{font-family:"Syne",sans-serif;font-size:15px;font-weight:800;color:#fff;white-space:nowrap;}',
  '#nst-logo-text span{color:#5a87ff;}',
  '#nst-nav-sep{width:1px;height:20px;background:rgba(255,255,255,.1);flex-shrink:0;}',
  '#nst-back{display:inline-flex;align-items:center;gap:5px;color:rgba(255,255,255,.45);font-size:12px;text-decoration:none;white-space:nowrap;padding:5px 10px;border-radius:7px;border:1px solid rgba(255,255,255,.08);transition:all .15s;flex-shrink:0;font-family:"Outfit",sans-serif;}',
  '#nst-back:hover{color:#fff;border-color:rgba(90,135,255,.4);background:rgba(90,135,255,.08);}',
  
  /* Dropdown de categorías */
  '#nst-cat-dropdown{position:relative;flex-shrink:0;}',
  '#nst-cat-btn{display:flex;align-items:center;gap:6px;padding:6px 12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:rgba(255,255,255,.7);font-size:12px;font-family:"Outfit",sans-serif;cursor:pointer;transition:all .15s;white-space:nowrap;}',
  '#nst-cat-btn:hover{background:rgba(90,135,255,.08);border-color:rgba(90,135,255,.3);color:#fff;}',
  '#nst-cat-btn.active{background:rgba(90,135,255,.12);border-color:rgba(90,135,255,.35);color:#5a87ff;}',
  '.nst-cat-arrow{font-size:10px;transition:transform .2s;}',
  '#nst-cat-btn.open .nst-cat-arrow{transform:rotate(180deg);}',
  
  '#nst-cat-menu{display:none;position:absolute;top:calc(100% + 6px);left:0;background:rgba(14,17,23,.97);border:1px solid rgba(90,135,255,.18);border-radius:12px;overflow:hidden;box-shadow:0 12px 48px rgba(0,0,0,.6);min-width:220px;max-height:400px;overflow-y:auto;z-index:300;}',
  '#nst-cat-menu.open{display:block;}',
  
  '.nst-cat-group{border-bottom:1px solid rgba(255,255,255,.06);}',
  '.nst-cat-group:last-child{border-bottom:none;}',
  '.nst-cat-group-header{padding:10px 16px 8px;font-family:"DM Mono",monospace;font-size:10px;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.08em;font-weight:600;}',
  
  '.nst-cat-tool{display:flex;align-items:center;gap:10px;padding:9px 16px;color:rgba(255,255,255,.65);font-size:12px;font-family:"Outfit",sans-serif;text-decoration:none;transition:all .12s;cursor:pointer;}',
  '.nst-cat-tool:hover{background:rgba(90,135,255,.08);color:#fff;}',
  '.nst-cat-tool.active{background:rgba(90,135,255,.12);color:#5a87ff;}',
  '.nst-cat-tool-icon{font-size:16px;flex-shrink:0;}',
  
  /* Links de navegación horizontal (herramientas de la misma categoría) */
  '#nst-nav-links{display:flex;gap:2px;overflow-x:auto;flex:1;scrollbar-width:none;}',
  '#nst-nav-links::-webkit-scrollbar{display:none;}',
  '.nst-nl{color:rgba(255,255,255,.35);text-decoration:none;font-size:12px;padding:4px 9px;border-radius:6px;transition:color .15s,background .15s;white-space:nowrap;font-family:"Outfit",sans-serif;}',
  '.nst-nl:hover{color:rgba(255,255,255,.8);background:rgba(255,255,255,.06);}',
  '.nst-nl.active{color:#5a87ff;background:rgba(90,135,255,.12);font-weight:600;}',
  
  /* lang switcher */
  '#nst-ls{position:fixed;top:12px;right:12px;z-index:9999;font-family:"DM Mono",monospace;}',
  '#nst-ls-btn{display:flex;align-items:center;gap:5px;padding:5px 10px;background:rgba(14,17,23,.88);border:1px solid rgba(90,135,255,.32);border-radius:8px;color:rgba(255,255,255,.7);font-size:11px;cursor:pointer;backdrop-filter:blur(12px);letter-spacing:.04em;transition:border-color .15s;}',
  '#nst-ls-btn:hover{border-color:rgba(90,135,255,.7);color:#fff;}',
  '#nst-ls-menu{display:none;position:absolute;top:calc(100% + 5px);right:0;background:rgba(14,17,23,.97);border:1px solid rgba(90,135,255,.18);border-radius:10px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,.55);min-width:138px;}',
  '#nst-ls-menu.open{display:block;}',
  '.nst-ls-opt{display:flex;align-items:center;gap:9px;width:100%;padding:9px 14px;background:none;border:none;color:rgba(255,255,255,.65);font-size:12px;font-family:"DM Mono",monospace;cursor:pointer;text-align:left;letter-spacing:.03em;transition:background .12s,color .12s;}',
  '.nst-ls-opt:hover{background:rgba(90,135,255,.1);color:#fff;}',
  '.nst-ls-opt.active{color:#5a87ff;background:rgba(90,135,255,.08);}',
  
  /* blobs */
  '.nst-blob{position:fixed;border-radius:50%;pointer-events:none;z-index:0;}',
  '.nst-blob-a{width:680px;height:680px;background:radial-gradient(circle,rgba(55,80,255,.09) 0%,transparent 65%);top:-200px;left:-150px;}',
  '.nst-blob-b{width:540px;height:540px;background:radial-gradient(circle,rgba(120,60,255,.07) 0%,transparent 65%);top:280px;right:-150px;}',
  
  /* footer */
  '#nst-footer{position:relative;z-index:1;border-top:1px solid rgba(255,255,255,.07);background:rgba(0,0,0,.2);padding:24px 20px 28px;}',
  '#nst-footer-inner{max-width:1200px;margin:0 auto;}',
  '.nst-ft-group{margin-bottom:12px;}',
  '.nst-ft-group-label{font-size:10px;font-family:"DM Mono",monospace;color:rgba(255,255,255,.2);text-transform:uppercase;letter-spacing:.07em;margin-bottom:8px;}',
  '.nst-ft-links{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px;}',
  '.nst-ft-link{color:rgba(255,255,255,.3);text-decoration:none;font-size:12px;padding:3px 8px;border-radius:5px;transition:color .15s,background .15s;font-family:"Outfit",sans-serif;}',
  '.nst-ft-link:hover{color:rgba(255,255,255,.8);background:rgba(255,255,255,.04);}',
  '#nst-footer-copy{margin-top:16px;font-size:11px;color:rgba(255,255,255,.25);font-family:"DM Mono",monospace;text-align:center;}'
].join('');

/* ── Build lang switcher ── */
function buildLS(){
  var opts = LANGS.map(function(l){
    return '<button class="nst-ls-opt' + (l===CUR?' active':'') + '" data-lang="' + l + '">'
      + FLAGS[l] + ' <span>' + LABELS[l] + '</span></button>';
  }).join('');
  return '<div id="nst-ls">'
    + '<button id="nst-ls-btn" aria-haspopup="true" aria-expanded="false">'
    + '<span id="nst-ls-flag">' + FLAGS[CUR] + '</span> <span id="nst-ls-lbl">' + LABELS[CUR] + '</span></button>'
    + '<div id="nst-ls-menu">' + opts + '</div></div>';
}

/* ── Build category dropdown ── */
function buildCatDropdown(){
  var currentCat = getCurrentCategory();
  var currentTool = getCurrentTool();
  
  var groups = '';
  Object.keys(TOOLS_CONFIG).forEach(function(catKey){
    var cat = TOOLS_CONFIG[catKey];
    var catLabel = t('cat.' + catKey) || cat.title;
    
    var toolsHtml = cat.tools.map(function(tool){
      var label = tool.label || t('nav.' + tool.key);
      var isActive = currentTool && currentTool.key === tool.key;
      return '<a href="' + tool.href + '" class="nst-cat-tool' + (isActive?' active':'') + '">'
        + '<span class="nst-cat-tool-icon">' + tool.icon + '</span>'
        + '<span>' + label + '</span></a>';
    }).join('');
    
    groups += '<div class="nst-cat-group">'
      + '<div class="nst-cat-group-header">' + cat.icon + ' ' + catLabel + '</div>'
      + toolsHtml + '</div>';
  });
  
  var btnLabel = currentCat ? (TOOLS_CONFIG[currentCat].icon + ' ' + (t('cat.' + currentCat) || TOOLS_CONFIG[currentCat].title)) : '🔧 ' + t('tools');
  
  return '<div id="nst-cat-dropdown">'
    + '<button id="nst-cat-btn">'
    + '<span>' + btnLabel + '</span>'
    + '<span class="nst-cat-arrow">▼</span>'
    + '</button>'
    + '<div id="nst-cat-menu">' + groups + '</div>'
    + '</div>';
}

/* ── Build nav (NUEVO SISTEMA UNIVERSAL) ── */
function buildNav(){
  var path = location.pathname;
  var isHome = path === '/' || path === '/index.html';
  var currentTool = getCurrentTool();
  var currentCat = getCurrentCategory();
  
  var navContent = '';
  
  // Logo
  navContent += '<a href="/" id="nst-logo">'
    + '<img src="' + LOGO_SRC + '" alt="NoServerTools">'
    + '<div id="nst-logo-text">NoServer<span>Tools</span></div>'
    + '</a>';
  
  if (!isHome) {
    navContent += '<div id="nst-nav-sep"></div>';
    
    // Botón "Todas las herramientas"
    navContent += '<a href="/" id="nst-back" data-i18n="back">'
      + '<span>←</span> ' + t('back') + '</a>';
    
    navContent += '<div id="nst-nav-sep"></div>';
    
    // Dropdown de categorías
    navContent += buildCatDropdown();
    
    // Si estamos en una herramienta específica, mostrar links de la misma categoría
    if (currentCat && currentTool) {
      var catTools = TOOLS_CONFIG[currentCat].tools;
      if (catTools.length > 1) {
        navContent += '<div id="nst-nav-sep"></div>';
        navContent += '<div id="nst-nav-links">';
        catTools.forEach(function(tool){
          var label = tool.label || t('nav.' + tool.key);
          var isActive = tool.key === currentTool.key;
          navContent += '<a href="' + tool.href + '" class="nst-nl' + (isActive?' active':'') + '" data-i18n="nav.' + tool.key + '">'
            + label + '</a>';
        });
        navContent += '</div>';
      }
    }
  }
  
  return '<nav id="nst-shell-nav"><div id="nst-nav-inner">' + navContent + '</div></nav>';
}

/* ── Build footer ── */
function buildFooter(){
  var groups = '';
  
  Object.keys(TOOLS_CONFIG).forEach(function(catKey){
    var cat = TOOLS_CONFIG[catKey];
    var catLabel = t('cat.' + catKey) || cat.title;
    
    var links = cat.tools.map(function(tool){
      var label = tool.label || t('nav.' + tool.key);
      return '<a class="nst-ft-link" href="' + tool.href + '" data-i18n="nav.' + tool.key + '">' + label + '</a>';
    }).join('');
    
    groups += '<div class="nst-ft-group">'
      + '<div class="nst-ft-group-label">' + cat.icon + ' ' + catLabel + '</div>'
      + '<div class="nst-ft-links">' + links + '</div>'
      + '</div>';
  });
  
  return '<footer id="nst-footer">'
    + '<div id="nst-footer-inner">' + groups
    + '<div id="nst-footer-copy" data-i18n="footer.tagline">' + t('footer.tagline') + '</div>'
    + '</div></footer>';
}

/* ── Apply lang ── */
function applyLang(lang){
  CUR = lang;
  localStorage.setItem('nst_lang', lang);
  
  var f = document.getElementById('nst-ls-flag');
  var l = document.getElementById('nst-ls-lbl');
  if (f) f.textContent = FLAGS[lang];
  if (l) l.textContent = LABELS[lang];
  
  document.querySelectorAll('.nst-ls-opt').forEach(function(b){
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
  
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var key = el.getAttribute('data-i18n');
    var val = t(key);
    if (val) el.textContent = val;
  });
  
  // Rebuild nav and footer to update translations
  var nav = document.getElementById('nst-shell-nav');
  if (nav) {
    nav.outerHTML = buildNav();
    wireCatDropdown();
  }
  
  var footer = document.getElementById('nst-footer');
  if (footer) {
    footer.outerHTML = buildFooter();
  }
  
  document.dispatchEvent(new CustomEvent('nst:lang', {detail:{lang:lang}}));
}

/* ── Wire lang switcher ── */
function wireLs(){
  var btn  = document.getElementById('nst-ls-btn');
  var menu = document.getElementById('nst-ls-menu');
  if (!btn || !menu) return;
  
  btn.addEventListener('click', function(){
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    if (open){
      setTimeout(function(){
        document.addEventListener('click', function outside(e){
          var ls = document.getElementById('nst-ls');
          if (ls && !ls.contains(e.target)){
            menu.classList.remove('open');
            btn.setAttribute('aria-expanded','false');
            document.removeEventListener('click', outside);
          }
        });
      }, 10);
    }
  });
  
  menu.querySelectorAll('.nst-ls-opt').forEach(function(b){
    b.addEventListener('click', function(){
      applyLang(b.getAttribute('data-lang'));
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    });
  });
}

/* ── Wire category dropdown ── */
function wireCatDropdown(){
  var btn = document.getElementById('nst-cat-btn');
  var menu = document.getElementById('nst-cat-menu');
  if (!btn || !menu) return;
  
  btn.addEventListener('click', function(){
    var open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    if (open){
      setTimeout(function(){
        document.addEventListener('click', function outside(e){
          var dropdown = document.getElementById('nst-cat-dropdown');
          if (dropdown && !dropdown.contains(e.target)){
            menu.classList.remove('open');
            btn.classList.remove('open');
            document.removeEventListener('click', outside);
          }
        });
      }, 10);
    }
  });
}

/* ── Init ── */
function init(){
  // Inject CSS
  if (!document.getElementById('nst-shell-css')){
    var s = document.createElement('style');
    s.id = 'nst-shell-css';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  // Blobs
  if (!document.querySelector('.nst-blob-a')){
    var ba = document.createElement('div'); ba.className = 'nst-blob nst-blob-a';
    var bb = document.createElement('div'); bb.className = 'nst-blob nst-blob-b';
    document.body.prepend(bb);
    document.body.prepend(ba);
  }

  // Nav
  if (!document.getElementById('nst-shell-nav')){
    var navEl = document.createElement('div');
    navEl.innerHTML = buildNav();
    var first = document.body.querySelector(':not(.nst-blob):not(script):not(style):not(#nst-ls)');
    if (first) document.body.insertBefore(navEl.firstElementChild, first);
    else document.body.prepend(navEl.firstElementChild);
  }
  
  wireCatDropdown();

  // Lang switcher
  if (!document.getElementById('nst-ls')){
    var lsEl = document.createElement('div');
    lsEl.innerHTML = buildLS();
    document.body.appendChild(lsEl.firstElementChild);
  }
  wireLs();

  // Footer
  if (!document.getElementById('nst-footer')){
    var ftEl = document.createElement('div');
    ftEl.innerHTML = buildFooter();
    while (ftEl.firstChild) document.body.appendChild(ftEl.firstChild);
  }

  // Clean up old elements
  var oldLs = document.getElementById('ls');
  if (oldLs) oldLs.remove();
  var path = location.pathname;
  if (path !== '/' && path !== '/index.html'){
    var oldH = document.querySelector('header:not(#nst-shell-nav)');
    if (oldH && oldH.querySelector('.nav-inner')) oldH.remove();
    document.querySelectorAll('nav:not(#nst-shell-nav)').forEach(function(n){
      if (n.querySelector('.nav-inner') || n.id === '') n.remove();
    });
  }

  applyLang(CUR);
}

if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

})();
