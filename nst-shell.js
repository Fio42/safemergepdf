/* NoServerTools — nst-shell v3.0
   Place at /nst-shell.js (site root)
   <script src="/nst-shell.js"></script> inside <body>
*/
(function(){
'use strict';

var LOGO_SRC = 'data:image/png;base64,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';

/* ── i18n ── */
var I18N = {
  en:{
    back:'All tools',
    home:'Home',
    tools:'Tools',
    'nav.merge':'Merge','nav.compress':'Compress','nav.split':'Split',
    'nav.pdfjpg':'JPG\u2194PDF','nav.rotate':'Rotate','nav.protect':'Protect',
    'nav.unlock':'Unlock','nav.edit':'Edit','nav.delete':'Delete Pages','nav.reorder':'Reorder',
    'nav.aichecker':'AI Checker','nav.aisummarizer':'Summarizer',
    'pill.uploads':'Zero uploads','pill.servers':'Zero servers',
    'pill.tracking':'Zero tracking','pill.free':'Free forever',
    'footer.tagline':'Your files never leave your computer.',
    'footer.pdfs':'PDF Tools','footer.ai':'AI Tools'
  },
  es:{
    back:'Todas las herramientas',home:'Inicio',tools:'Herramientas',
    'nav.merge':'Combinar','nav.compress':'Comprimir','nav.split':'Dividir',
    'nav.pdfjpg':'JPG\u2194PDF','nav.rotate':'Rotar','nav.protect':'Proteger',
    'nav.unlock':'Desbloquear','nav.edit':'Editar','nav.delete':'Eliminar','nav.reorder':'Reordenar',
    'nav.aichecker':'Detector IA','nav.aisummarizer':'Resumidor',
    'pill.uploads':'Sin subidas','pill.servers':'Sin servidores',
    'pill.tracking':'Sin rastreo','pill.free':'Gratis siempre',
    'footer.tagline':'Tus archivos nunca salen de tu dispositivo.',
    'footer.pdfs':'Herramientas PDF','footer.ai':'Herramientas IA'
  },
  pt:{
    back:'Todas as ferramentas',home:'Início',tools:'Ferramentas',
    'nav.merge':'Mesclar','nav.compress':'Comprimir','nav.split':'Dividir',
    'nav.pdfjpg':'JPG\u2194PDF','nav.rotate':'Girar','nav.protect':'Proteger',
    'nav.unlock':'Desbloquear','nav.edit':'Editar','nav.delete':'Excluir','nav.reorder':'Reordenar',
    'nav.aichecker':'Detector IA','nav.aisummarizer':'Resumidor',
    'pill.uploads':'Sem uploads','pill.servers':'Sem servidores',
    'pill.tracking':'Sem rastreamento','pill.free':'Sempre grátis',
    'footer.tagline':'Seus arquivos nunca saem do seu dispositivo.',
    'footer.pdfs':'Ferramentas PDF','footer.ai':'Ferramentas IA'
  },
  fr:{
    back:'Tous les outils',home:'Accueil',tools:'Outils',
    'nav.merge':'Fusionner','nav.compress':'Compresser','nav.split':'Diviser',
    'nav.pdfjpg':'JPG\u2194PDF','nav.rotate':'Pivoter','nav.protect':'Protéger',
    'nav.unlock':'Déverrouiller','nav.edit':'Modifier','nav.delete':'Supprimer','nav.reorder':'Réorganiser',
    'nav.aichecker':'Détecteur IA','nav.aisummarizer':'Résumeur',
    'pill.uploads':'Zéro upload','pill.servers':'Zéro serveur',
    'pill.tracking':'Zéro suivi','pill.free':'Gratuit pour toujours',
    'footer.tagline':'Vos fichiers ne quittent jamais votre appareil.',
    'footer.pdfs':'Outils PDF','footer.ai':'Outils IA'
  },
  de:{
    back:'Alle Werkzeuge',home:'Startseite',tools:'Werkzeuge',
    'nav.merge':'Zusammenführen','nav.compress':'Komprimieren','nav.split':'Aufteilen',
    'nav.pdfjpg':'JPG\u2194PDF','nav.rotate':'Drehen','nav.protect':'Schützen',
    'nav.unlock':'Entsperren','nav.edit':'Bearbeiten','nav.delete':'Löschen','nav.reorder':'Neu anordnen',
    'nav.aichecker':'KI-Detektor','nav.aisummarizer':'Zusammenfassung',
    'pill.uploads':'Keine Uploads','pill.servers':'Keine Server',
    'pill.tracking':'Kein Tracking','pill.free':'Für immer kostenlos',
    'footer.tagline':'Ihre Dateien verlassen niemals Ihr Gerät.',
    'footer.pdfs':'PDF-Werkzeuge','footer.ai':'KI-Werkzeuge'
  }
};

var FLAGS  = {en:'🇺🇸',es:'🇪🇸',pt:'🇧🇷',fr:'🇫🇷',de:'🇩🇪'};
var LABELS = {en:'EN',es:'ES',pt:'PT',fr:'FR',de:'DE'};
var LANGS  = ['en','es','pt','fr','de'];

var TOOLS = [
  {key:'merge',    href:'/merge-pdf/'},
  {key:'compress', href:'/compress-pdf/'},
  {key:'split',    href:'/split-pdf/'},
  {key:'pdfjpg',   href:'/pdf-to-jpg/'},
  {key:'rotate',   href:'/rotate-pdf/'},
  {key:'protect',  href:'/protect-pdf/'},
  {key:'unlock',   href:'/unlock-pdf/'},
  {key:'edit',     href:'/edit-pdf/'},
  {key:'delete',   href:'/delete-pages/'},
  {key:'reorder',  href:'/reorder-pages/'},
  {key:'aichecker',href:'/ai-checker/'},
  {key:'aisummarizer',href:'/ai-summarizer/'}
];

function getLang(){
  var s = localStorage.getItem('nst_lang');
  if (s && FLAGS[s]) return s;
  var n = (navigator.language||'en').toLowerCase().slice(0,2);
  return FLAGS[n] ? n : 'en';
}
var CUR = getLang();

function t(k){ return (I18N[CUR]||I18N.en)[k] || (I18N.en[k]||k); }

/* ── CSS ── */
var CSS = [
  '#nst-shell-nav{position:sticky;top:0;z-index:200;height:54px;border-bottom:1px solid rgba(255,255,255,.07);backdrop-filter:blur(16px);background:rgba(14,17,23,.84);}',
  '#nst-nav-inner{max-width:1200px;margin:0 auto;height:54px;display:flex;align-items:center;gap:12px;padding:0 20px;}',
  '#nst-logo{display:flex;align-items:center;gap:9px;text-decoration:none;flex-shrink:0;}',
  '#nst-logo img{width:28px;height:28px;border-radius:50%;object-fit:cover;display:block;}',
  '#nst-logo-text{font-family:\'Syne\',sans-serif;font-size:15px;font-weight:800;color:#fff;white-space:nowrap;}',
  '#nst-logo-text span{color:#5a87ff;}',
  '#nst-nav-sep{width:1px;height:20px;background:rgba(255,255,255,.1);flex-shrink:0;}',
  '#nst-back{display:inline-flex;align-items:center;gap:5px;color:rgba(255,255,255,.45);font-size:12px;text-decoration:none;white-space:nowrap;padding:5px 10px;border-radius:7px;border:1px solid rgba(255,255,255,.08);transition:all .15s;flex-shrink:0;font-family:\'Outfit\',sans-serif;}',
  '#nst-back:hover{color:#fff;border-color:rgba(90,135,255,.4);background:rgba(90,135,255,.08);}',
  '#nst-nav-links{display:flex;gap:2px;overflow-x:auto;flex:1;scrollbar-width:none;}',
  '#nst-nav-links::-webkit-scrollbar{display:none;}',
  '.nst-nl{color:rgba(255,255,255,.35);text-decoration:none;font-size:12px;padding:4px 9px;border-radius:6px;transition:color .15s,background .15s;white-space:nowrap;font-family:\'Outfit\',sans-serif;}',
  '.nst-nl:hover{color:rgba(255,255,255,.8);background:rgba(255,255,255,.06);}',
  '.nst-nl.active{color:#5a87ff;background:rgba(90,135,255,.12);font-weight:600;}',
  /* lang switcher */
  '#nst-ls{position:fixed;top:12px;right:12px;z-index:9999;font-family:\'DM Mono\',monospace;}',
  '#nst-ls-btn{display:flex;align-items:center;gap:5px;padding:5px 10px;background:rgba(14,17,23,.88);border:1px solid rgba(90,135,255,.32);border-radius:8px;color:rgba(255,255,255,.7);font-size:11px;cursor:pointer;backdrop-filter:blur(12px);letter-spacing:.04em;transition:border-color .15s;}',
  '#nst-ls-btn:hover{border-color:rgba(90,135,255,.7);color:#fff;}',
  '#nst-ls-menu{display:none;position:absolute;top:calc(100% + 5px);right:0;background:rgba(14,17,23,.97);border:1px solid rgba(90,135,255,.18);border-radius:10px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,.55);min-width:138px;}',
  '#nst-ls-menu.open{display:block;}',
  '.nst-ls-opt{display:flex;align-items:center;gap:9px;width:100%;padding:9px 14px;background:none;border:none;color:rgba(255,255,255,.65);font-size:12px;font-family:\'DM Mono\',monospace;cursor:pointer;text-align:left;letter-spacing:.03em;transition:background .12s,color .12s;}',
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
  '.nst-ft-group-label{font-size:10px;font-family:\'DM Mono\',monospace;color:rgba(255,255,255,.2);text-transform:uppercase;letter-spacing:.07em;margin-bottom:8px;}',
  '.nst-ft-links{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px;}',
  '.nst-ft-link{color:rgba(255,255,255,.28);text-decoration:none;font-size:12px;padding:3px 9px;border:1px solid rgba(255,255,255,.06);border-radius:5px;transition:all .2s;font-family:\'Outfit\',sans-serif;}',
  '.nst-ft-link:hover{color:#5a87ff;border-color:rgba(90,135,255,.3);}',
  '#nst-footer-copy{font-size:11px;color:rgba(255,255,255,.18);font-family:\'DM Mono\',monospace;margin-top:10px;}'
].join('\n');

/* ── Build nav ── */
function buildNav(){
  var path = location.pathname;
  var isHome = (path === '/' || path === '/index.html');
  var backBtn = !isHome
    ? '<a id="nst-back" href="/">&#8592; <span data-i18n="back">' + t('back') + '</span></a>'
    : '';
  var sep = !isHome ? '<div id="nst-nav-sep"></div>' : '';
  /* On home show tool links, on tool page just the back button (cleaner) */
  var linksHtml = '';
  if (isHome) {
    linksHtml = '<div id="nst-nav-links">'
      + TOOLS.map(function(tool){
          var active = path === tool.href ? ' active' : '';
          return '<a class="nst-nl' + active + '" href="' + tool.href + '" data-i18n="nav.' + tool.key + '">' + t('nav.'+tool.key) + '</a>';
        }).join('')
      + '</div>';
  }
  return '<nav id="nst-shell-nav" role="navigation" aria-label="Main navigation">'
    + '<div id="nst-nav-inner">'
    + '<a id="nst-logo" href="/">'
    + '<img src="' + LOGO_SRC + '" alt="NoServerTools" width="28" height="28">'
    + '<span id="nst-logo-text">NoServer<span>Tools</span></span>'
    + '</a>'
    + sep + backBtn
    + linksHtml
    + '</div></nav>';
}

/* ── Build lang switcher ── */
function buildLS(){
  var opts = LANGS.map(function(l){
    return '<button class="nst-ls-opt' + (l===CUR?' active':'') + '" data-lang="' + l + '">'
      + FLAGS[l] + '&nbsp; ' + l.toUpperCase() + '</button>';
  }).join('');
  return '<div id="nst-ls" role="navigation" aria-label="Language selector">'
    + '<button id="nst-ls-btn" aria-haspopup="true" aria-expanded="false">'
    + '<span id="nst-ls-flag">' + FLAGS[CUR] + '</span>'
    + '<span id="nst-ls-lbl">' + LABELS[CUR] + '</span>'
    + '<svg width="9" height="6" viewBox="0 0 9 6" fill="none"><path d="M1 1l3.5 4L8 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
    + '</button>'
    + '<div id="nst-ls-menu" role="menu">' + opts + '</div>'
    + '</div>';
}

/* ── Build footer ── */
function buildFooter(){
  var pdfLinks = TOOLS.filter(function(t){ return t.key.indexOf('ai') === -1; })
    .map(function(tool){
      return '<a class="nst-ft-link" href="' + tool.href + '" data-i18n="nav.' + tool.key + '">' + t('nav.'+tool.key) + '</a>';
    }).join('');
  var aiLinks = TOOLS.filter(function(tool){ return tool.key.indexOf('ai') > -1; })
    .map(function(tool){
      return '<a class="nst-ft-link" href="' + tool.href + '" data-i18n="nav.' + tool.key + '">' + t('nav.'+tool.key) + '</a>';
    }).join('');
  return '<footer id="nst-footer">'
    + '<div id="nst-footer-inner">'
    + '<div class="nst-ft-group"><div class="nst-ft-group-label" data-i18n="footer.pdfs">' + t('footer.pdfs') + '</div><div class="nst-ft-links">' + pdfLinks + '</div></div>'
    + '<div class="nst-ft-group"><div class="nst-ft-group-label" data-i18n="footer.ai">' + t('footer.ai') + '</div><div class="nst-ft-links">' + aiLinks + '</div></div>'
    + '<div id="nst-footer-copy" data-i18n="footer.tagline">' + t('footer.tagline') + '</div>'
    + '</div></footer>';
}

/* ── Apply lang: updates ALL data-i18n elements ── */
function applyLang(lang){
  CUR = lang;
  localStorage.setItem('nst_lang', lang);
  /* update switcher button */
  var f = document.getElementById('nst-ls-flag');
  var l = document.getElementById('nst-ls-lbl');
  if (f) f.textContent = FLAGS[lang];
  if (l) l.textContent = LABELS[lang];
  document.querySelectorAll('.nst-ls-opt').forEach(function(b){
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
  /* update every element that has data-i18n */
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var key = el.getAttribute('data-i18n');
    var val = t(key);
    if (val) el.textContent = val;
  });
  /* fire event for pages that want to do extra work */
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

/* ── Init ── */
function init(){
  /* inject CSS */
  if (!document.getElementById('nst-shell-css')){
    var s = document.createElement('style');
    s.id = 'nst-shell-css';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* blobs */
  if (!document.querySelector('.nst-blob-a')){
    var ba = document.createElement('div'); ba.className = 'nst-blob nst-blob-a';
    var bb = document.createElement('div'); bb.className = 'nst-blob nst-blob-b';
    document.body.prepend(bb);
    document.body.prepend(ba);
  }

  /* nav */
  if (!document.getElementById('nst-shell-nav')){
    var navEl = document.createElement('div');
    navEl.innerHTML = buildNav();
    var first = document.body.querySelector(':not(.nst-blob):not(script):not(style):not(#nst-ls)');
    if (first) document.body.insertBefore(navEl.firstElementChild, first);
    else document.body.prepend(navEl.firstElementChild);
  }

  /* lang switcher */
  if (!document.getElementById('nst-ls')){
    var lsEl = document.createElement('div');
    lsEl.innerHTML = buildLS();
    document.body.appendChild(lsEl.firstElementChild);
  }
  wireLs();

  /* footer */
  if (!document.getElementById('nst-footer')){
    var ftEl = document.createElement('div');
    ftEl.innerHTML = buildFooter();
    while (ftEl.firstChild) document.body.appendChild(ftEl.firstChild);
  }

  /* clean up old hardcoded nav/lang elements */
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
