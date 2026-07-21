let activeTab = 'mabwaita';
let activeDomain = 'body';
let activeLesson = 'pronouns';
let activeStory = 'initiation';
let activeCultureChapter = 'worldview';

document.getElementById('tabs').addEventListener('click', function(e) {
  const btn = e.target.closest('button');
  if (!btn) return;
  const tab = btn.getAttribute('data-tab');
  if (tab) showTab(tab);
});

document.getElementById('content').addEventListener('click', function(e) {
  const btn = e.target.closest('button');
  if (!btn) return;
  if (btn.classList.contains('domain-chip')) { const d = btn.getAttribute('data-domain'); if (d) { activeDomain = d; renderTab('tuga'); } }
  if (btn.classList.contains('lesson-btn')) { const l = btn.getAttribute('data-lesson'); if (l) { activeLesson = l; renderTab('kot'); } }
  if (btn.classList.contains('story-subtab-btn')) { const s = btn.getAttribute('data-story'); if (s) { activeStory = s; renderTab('stories'); } }
});

document.getElementById('content').addEventListener('input', function(e) {
  if (e.target.id === 'searchInput') searchDict(e.target.value);
});

function showTab(tab) {
  activeTab = tab;
  document.querySelectorAll('#tabs .tab').forEach(t => t.classList.remove('active'));
  const btn = document.querySelector(`#tabs [data-tab="${tab}"]`);
  if (btn) btn.classList.add('active');
  renderTab(tab);
}

function getDomains() {
  return Object.keys(DATA).filter(k => Array.isArray(DATA[k]) && !['clans','agesets','proverbs','connectives','negation','pronouns','questions','tenses'].includes(k));
}
function domainLabel(n) { return n.charAt(0).toUpperCase() + n.slice(1); }
function getTotalWords() { let t=0; getDomains().forEach(d=>{if(DATA[d])t+=DATA[d].length}); return t; }
function esc(s) { if (!s) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function renderTab(tab) {
  const c = document.getElementById('content');
  switch(tab) {
    case 'mabwaita': renderMabwaita(c); break;
    case 'kot': renderKot(c); break;
    case 'tuga': renderTuga(c); break;
    case 'stories': renderStories(c); break;
    case 'chepalungu': renderMusic(c); break;
    case 'kokwet': renderCommunity(c); break;
    case 'oret': renderLore(c); break;
  }
}

function renderMabwaita(c) {
  const p = DATA.proverbs[Math.floor(Math.random() * DATA.proverbs.length)];
  c.innerHTML = `<div class="east-bar">Kong'asis — East — Health, Life, Prosperity</div>
    <div class="greeting">Chamgee</div>
    <div class="card"><div class="proverb-kps">${esc(p.kps)}</div><div class="proverb-eng">${esc(p.eng)}</div><p style="color:#8B6F5E;font-size:10px;margin-top:4px;font-style:italic">${esc(p.meaning||'')}</p></div>
    <div class="card" style="text-align:center"><div style="font-size:32px">🔥</div><div class="card-title">Koitab Maa — The Hearth</div><p style="color:#8B6F5E;font-size:11px">The fire burns. The ancestors are present.</p><p style="color:#B0A090;font-size:9px;margin-top:4px">"Mein mat" is never spoken here.</p></div>`;
}

function renderKot(c) {
  const lessons = [{key:'pronouns',label:'Pronouns'},{key:'tenses',label:'Tenses'},{key:'negation',label:'Negation'},{key:'questions',label:'Questions'},{key:'connectives',label:'Connectives'}];
  let h = '<div class="lesson-tab">';
  lessons.forEach(l => h += `<button class="lesson-btn ${activeLesson===l.key?'active':''}" data-lesson="${l.key}">${l.label}</button>`);
  h += '</div><div style="padding:10px">';
  if (activeLesson==='pronouns') {
    DATA.grammar.pronouns.forEach(p => h += `<div class="row"><div class="row-left">${esc(p.kps)}</div><div class="row-right">${esc(p.eng)} <span style="color:#8B6F5E;font-size:9px">(${esc(p.prefix||'none')})</span></div></div>`);
  } else if (activeLesson==='tenses') {
    DATA.grammar.tenses.forEach(t => h += `<div class="card"><strong>${esc(t.name)}</strong><br><span style="font-size:10px;color:#8B6F5E">Marker: ${esc(t.marker)}</span><br><span style="font-size:15px;font-weight:600">${esc(t.example)}</span><br><span style="font-size:11px;color:#5C4033">${esc(t.meaning)}</span></div>`);
  } else if (activeLesson==='negation') {
    DATA.grammar.negation.forEach(n => h += `<div class="card"><strong>${esc(n.type)}</strong><br><span style="font-size:10px;color:#8B6F5E">Marker: ${esc(n.marker)}</span><br><span style="font-size:13px;font-weight:600">${esc(n.example)}</span><br><span style="font-size:11px;color:#5C4033">${esc(n.meaning)}</span></div>`);
  } else if (activeLesson==='questions') {
    DATA.grammar.questions.forEach(q => h += `<div class="row"><div class="row-left">${esc(q.kps)}</div><div class="row-right">${esc(q.eng)}</div></div>`);
  } else if (activeLesson==='connectives') {
    DATA.grammar.connectives.forEach(c => h += `<div class="row"><div class="row-left">${esc(c.kps)}</div><div class="row-right">${esc(c.eng)} <span style="color:#8B6F5E;font-size:9px">${esc(c.type)}</span></div></div>`);
  }
  h += '</div>'; c.innerHTML = h;
}
function setLesson(l) { activeLesson=l; renderTab('kot'); }

function renderTuga(c) {
  const domains = getDomains();
  let h = `<input class="search" placeholder="Search ${getTotalWords()} words..." id="searchInput"><div id="searchResults"></div><div id="domainView"><div class="domain-scroll">`;
  domains.forEach(d => h += `<button class="domain-chip ${activeDomain===d?'active':''}" data-domain="${d}">${domainLabel(d)} <span style="font-size:8px">${DATA[d]?DATA[d].length:0}</span></button>`);
  h += '</div><div id="domainEntries"></div></div>';
  c.innerHTML = h; renderDomainEntries();
}
function setDomain(d) { activeDomain=d; document.querySelectorAll('.domain-chip').forEach(ch=>{ch.classList.remove('active');if(ch.getAttribute('data-domain')===d)ch.classList.add('active')}); renderDomainEntries(); }
function renderDomainEntries() {
  const el = document.getElementById('domainEntries'); if (!el) return;
  const entries = DATA[activeDomain] || [];
  let h = `<div class="card-title">${domainLabel(activeDomain)} <span style="color:#8B6F5E;font-weight:400;font-size:11px">(${entries.length})</span></div>`;
  entries.forEach(e => h += `<div class="row"><div class="row-left">${esc(e.kps)}</div><div class="row-right">${esc(e.eng)}${e.pl?`<br><span style="color:#8B6F5E;font-size:9px">Pl: ${esc(e.pl)}</span>`:''}${e.lit?`<br><span style="color:#8B6F5E;font-size:9px;font-style:italic">Lit: ${esc(e.lit)}</span>`:''}${e.res?`<br><span style="color:#E8751A;font-size:9px">→ ${esc(e.res)}</span>`:''}</div></div>`);
  el.innerHTML = h || '<p style="color:#8B6F5E;padding:10px">No entries</p>';
}
function searchDict(q) {
  const results=document.getElementById('searchResults'), domainView=document.getElementById('domainView');
  if(!results||!domainView)return;
  if(q.length<2){results.innerHTML='';domainView.style.display='block';return;}
  domainView.style.display='none';
  let found=[];
  getDomains().forEach(k=>{if(Array.isArray(DATA[k]))DATA[k].forEach(e=>{if(e.kps.toLowerCase().includes(q.toLowerCase())||e.eng.toLowerCase().includes(q.toLowerCase()))found.push(e)})});
  results.innerHTML=found.slice(0,30).map(e=>`<div class="row"><div class="row-left">${esc(e.kps)}</div><div class="row-right">${esc(e.eng)}</div></div>`).join('')||'<p style="color:#8B6F5E;padding:10px">No matches</p>';
}

// ===== STORIES TAB =====
function renderStories(c) {
  const subtabs = [
    { key: 'initiation', label: 'Initiation' },
    { key: 'warriorCode', label: 'Warriors' },
    { key: 'spiritWorld', label: 'Spirits' },
    { key: 'curseSystem', label: 'Curses' },
    { key: 'proverbsInteractive', label: 'Proverbs' },
    { key: 'beerCulture', label: 'Beer' },
    { key: 'worldview', label: 'Worldview' },
    { key: 'god', label: 'God' },
    { key: 'directions', label: 'Directions' },
    { key: 'mountain', label: 'Mountain' },
    { key: 'house', label: 'House' },
    { key: 'social', label: 'Society' },
    { key: 'praiseNames', label: 'Women' },
    { key: 'superstitions', label: 'Omens' },
    { key: 'foodRules', label: 'Food' },
    { key: 'dress', label: 'Dress' },
    { key: 'tools', label: 'Tools' },
    { key: 'agriculture', label: 'Farming' },
    { key: 'naming', label: 'Names' },
    { key: 'punishment', label: 'Law' },
  ];
  let h = '<div class="story-subtab">';
  subtabs.forEach(s => h += `<button class="story-subtab-btn ${activeStory===s.key?'active':''}" data-story="${s.key}">${s.label}</button>`);
  h += '</div>';
  c.innerHTML = h;
  renderStoryContent();
}

function renderStoryContent() {
  const c = document.getElementById('content');
  // Get existing subtab bar
  const subtabBar = c.querySelector('.story-subtab');
  let h = '';
  
  // First check STORIES object
  if (STORIES[activeStory]) {
    h = renderStoriesData(STORIES[activeStory]);
  }
  // Then check CULTURE chapters
  else if (activeStory === 'worldview') h = renderWorldview();
  else if (activeStory === 'god') h = renderGod();
  else if (activeStory === 'directions') h = renderDirections();
  else if (activeStory === 'mountain') h = renderMountain();
  else if (activeStory === 'house') h = renderHouse();
  else if (activeStory === 'social') h = renderSocial();
  else if (activeStory === 'praiseNames') h = renderPraiseNames();
  else if (activeStory === 'superstitions') h = renderSuperstitions();
  else if (activeStory === 'foodRules') h = renderFoodRules();
  else if (activeStory === 'dress') h = renderDress();
  else if (activeStory === 'tools') h = renderTools();
  else if (activeStory === 'agriculture') h = renderAgriculture();
  else if (activeStory === 'naming') h = renderNaming();
  else if (activeStory === 'punishment') h = renderPunishment();
  
  // Preserve subtab bar, append content
  if (subtabBar) {
    c.innerHTML = '';
    c.appendChild(subtabBar);
    const div = document.createElement('div');
    div.innerHTML = h;
    c.appendChild(div);
  }
}

function renderStoriesData(story) {
  if (story.stages) {
    let h = `<div class="card"><div class="card-title">${esc(story.title)}</div><div class="card-subtitle">${esc(story.subtitle)}</div>`;
    story.stages.forEach(s => h += `<div class="stage"><div class="stage-name">${esc(s.name)}</div><div class="stage-kps">${esc(s.kipsigis||'')}</div><div class="stage-desc">${esc(s.description||s.desc||'')}</div><div class="stage-dur">${esc(s.duration||'')}</div></div>`);
    if (story.rules) { h += '<div class="section-label">Rules</div>'; story.rules.forEach(r => h += `<div class="bullet">• ${esc(typeof r==='string'?r:r.desc||'')}</div>`); }
    h += '</div>'; return h;
  }
  if (story.armyStructure) {
    let h = `<div class="card"><div class="card-title">${esc(story.title)}</div>`;
    story.armyStructure.forEach(a => h += `<div style="padding:2px 0;font-size:11px"><strong>${esc(a.role||a.unit)}</strong> — ${esc(a.english||a.role)}: ${esc(a.desc||a.description||'')}</div>`);
    if (story.sanctuary) { h += '<div class="section-label">Sanctuary</div>'; story.sanctuary.forEach(s => h += `<div class="bullet">• ${esc(s)}</div>`); }
    if (story.prisoners) { h += '<div class="section-label">Prisoners</div>'; story.prisoners.forEach(p => h += `<div class="bullet">• ${esc(p)}</div>`); }
    if (story.warTypes) { h += '<div class="section-label">Types of War</div>'; story.warTypes.forEach(w => h += `<div class="bullet">• <strong>${esc(w.against)}</strong>: ${esc(w.nature)}</div>`); }
    if (story.warCall) h += `<div class="quote">${esc(story.warCall)}</div>`;
    h += '</div>'; return h;
  }
  if (story.beliefs) {
    let h = `<div class="card"><div class="card-title">${esc(story.title)}</div>`;
    story.beliefs.forEach(b => h += `<div class="bullet">• ${esc(b)}</div>`);
    if (story.chebsageyot) h += `<div style="margin-top:8px"><strong>${esc(story.chebsageyot.role)}</strong><br><span style="font-size:10px;color:#5C4033">${esc(story.chebsageyot.description)}</span></div>`;
    if (story.tale) h += `<div class="card" style="margin-top:8px;background:#FFF8F0"><strong>${esc(story.tale.title)}</strong><p style="font-size:10px;color:#5C4033;margin-top:2px">${esc(story.tale.summary)}</p><p style="font-size:9px;color:#8B6F5E;font-style:italic">${esc(story.tale.lesson)}</p></div>`;
    h += '</div>'; return h;
  }
  if (story.types && story.socialRules) {
    let h = `<div class="card"><div class="card-title">${esc(story.title)}</div>`;
    story.types.forEach(t => h += `<div style="padding:3px 0"><strong>${esc(t.type||t.name)}</strong><br><span style="font-size:10px;color:#5C4033">${esc(t.desc||t.description)}</span></div>`);
    h += '<div class="section-label">Social Rules</div>';
    story.socialRules.forEach(r => h += `<div class="bullet">• ${esc(r)}</div>`);
    if (story.meinMat) h += `<div class="warning"><strong>${esc(story.meinMat.phrase)}</strong> — ${esc(story.meinMat.meaning)}<br><span style="font-size:9px">${esc(story.meinMat.consequence)}</span></div>`;
    if (story.mumek) h += `<div style="margin-top:8px"><strong>${esc(story.mumek.title)}</strong><br><span style="font-size:10px;color:#5C4033">${esc(story.mumek.description)}</span></div>`;
    h += '</div>'; return h;
  }
  if (story.brewing) {
    let h = `<div class="card"><div class="card-title">${esc(story.title)}</div>`;
    story.brewing.forEach(b => h += `<div class="stage"><div class="stage-name">${esc(b.day)}</div><div class="stage-desc">${esc(b.desc||b.description||'')}</div></div>`);
    if (story.etiquette) { h += '<div class="section-label">Etiquette</div>'; story.etiquette.forEach(e => h += `<div class="bullet">• ${esc(e)}</div>`); }
    if (story.closing) h += `<div class="quote">${esc(story.closing)}</div>`;
    h += '</div>'; return h;
  }
  // Proverbs interactive
  if (Array.isArray(story) && story[0] && story[0].situation) {
    let h = `<div class="card"><div class="card-title">Kalewenaik in Context</div>`;
    story.forEach(p => h += `<div class="card" style="background:#FFF8F0;margin-top:6px"><strong style="color:#E8751A;font-size:10px">${esc(p.theme)}</strong><p style="font-size:11px;color:#5C4033;font-style:italic;margin:3px 0">"${esc(p.situation)}"</p><p style="font-size:13px;font-weight:600">${esc(p.proverb)}</p><p style="font-size:10px;color:#8B6F5E">${esc(p.meaning)}</p></div>`);
    h += '</div>'; return h;
  }
  return '<div class="card"><p>Content not found</p></div>';
}

// ===== CULTURE RENDERERS =====
function card(title, body) { return `<div class="card"><div class="card-title">${title}</div>${body}</div>`; }

function renderWorldview() {
  const ch = CULTURE.chapter25_worldview;
  let h = card(ch.title, '');
  ch.concepts.forEach(c => h += `<div style="padding:4px 0"><strong style="color:#3B2314">${esc(c.kps)}</strong> — ${esc(c.eng)}<br><span style="font-size:10px;color:#8B6F5E">${esc(c.meaning)}</span></div>`);
  return h;
}

function renderGod() {
  const ch = CULTURE.chapter26_god;
  let h = card('Names of God', '');
  ch.godNames.forEach(n => h += `<div style="padding:3px 0"><strong>${esc(n.name)}</strong><br><span style="font-size:10px;color:#8B6F5E">${esc(n.meaning)}</span></div>`);
  h += '<div class="section-label">Attributes</div>';
  ch.godAttributes.forEach(a => h += `<div class="bullet">• ${esc(a)}</div>`);
  h += card('The Human Spirit (Oinder)', '');
  ch.spirit.rules.forEach(r => h += `<div class="bullet">• ${esc(r)}</div>`);
  h += `<div style="margin-top:6px"><strong>${esc(ch.chebsageyot.role)}</strong><br><span style="font-size:10px;color:#5C4033">${esc(ch.chebsageyot.description)}</span></div>`;
  h += `<div class="quote">${esc(ch.immortality)}</div>`;
  return h;
}

function renderDirections() {
  const ch = CULTURE.chapter27_directions;
  let h = card(`${esc(ch.east.name)} — East`, esc(ch.east.meaning));
  ch.east.rules.forEach(r => h += `<div class="bullet">• ${esc(r)}</div>`);
  return h;
}

function renderMountain() {
  const ch = CULTURE.chapter28_mountain;
  let h = card(esc(ch.mountain.name), esc(ch.mountain.modernName));
  ch.mountain.significance.forEach(s => h += `<div class="bullet">• ${esc(s)}</div>`);
  h += '<div class="section-label">Migration Route</div>';
  ch.migration.forEach(m => h += `<div style="font-size:10px;padding:2px 0"><strong>${esc(m.from)}</strong> → ${esc(m.eng)} <span style="color:#8B6F5E">${esc(m.note)}</span></div>`);
  return h;
}

function renderHouse() {
  const ch = CULTURE.chapter29_house;
  let h = card(ch.title, '');
  ch.elements.forEach(e => h += `<div style="padding:3px 0"><strong>${esc(e.element)}</strong> — ${esc(e.eng)}<br><span style="font-size:10px;color:#8B6F5E">${esc(e.meaning)}</span></div>`);
  h += '<div class="section-label">Rules</div>';
  ch.rules.forEach(r => h += `<div class="bullet">• ${esc(r)}</div>`);
  h += '<div class="section-label">Reasons to Move a House</div>';
  ch.movingReasons.forEach(r => h += `<div class="bullet">• ${esc(r)}</div>`);
  return h;
}

function renderSocial() {
  const ch = CULTURE.chapter31_social;
  let h = card('Clans (Ortinwek)', esc(ch.clans.description));
  h += `<div class="quote">${esc(ch.clans.womensClans)}</div>`;
  h += card('Age Sets (Ipinda)', esc(ch.ageSets.description));
  ch.ageSets.cycle.forEach(a => h += `<div style="font-size:11px;padding:2px 0"><strong>${esc(a.name)}</strong> (${a.order})${a.subsets?' — '+a.subsets.join(', '):''}</div>`);
  h += card('Leadership', esc(ch.noChiefs));
  ch.leadership.forEach(l => h += `<div style="font-size:10px;padding:1px 0"><strong>${esc(l.role)}:</strong> ${esc(l.function)}</div>`);
  h += '<div class="section-label">Family Rules</div>';
  ch.family.forEach(f => h += `<div class="bullet">• ${esc(f)}</div>`);
  return h;
}

function renderPraiseNames() {
  const ch = CULTURE.chapter34_praiseNames;
  let h = card(ch.title, esc(ch.description));
  ch.names.forEach(n => h += `<div style="padding:3px 0"><strong style="color:#E8751A">${esc(n.name)}</strong> — ${esc(n.meaning)}<br><span style="font-size:10px;color:#8B6F5E">${esc(n.virtue)}</span></div>`);
  return h;
}

function renderSuperstitions() {
  const s = CULTURE.superstitions;
  let h = card(s.title, '');
  h += '<div class="section-label">Bird Omens</div>';
  s.birds.forEach(b => h += `<div class="bullet">• ${esc(b.bird||b.general||'')}: ${esc(b.omen)}</div>`);
  h += '<div class="section-label">Sneezing</div>';
  s.sneezing.forEach(sn => h += `<div class="bullet">• ${esc(sn)}</div>`);
  h += `<div class="section-label">Evil Eye (${esc(s.evilEye.name)})</div><div class="bullet">${esc(s.evilEye.description)}</div>`;
  h += '<div class="section-label">Unlucky</div>';
  s.unlucky.forEach(u => h += `<div class="bullet">• ${esc(u)}</div>`);
  return h;
}

function renderFoodRules() {
  const f = CULTURE.foodRules;
  let h = card(f.title, '');
  h += '<div class="section-label">Staples</div>';
  f.staples.forEach(s => h += `<div style="font-size:11px;padding:2px 0"><strong>${esc(s.food)}:</strong> ${esc(s.desc)}</div>`);
  h += '<div class="section-label">Rules</div>';
  f.rules.forEach(r => h += `<div class="bullet">• ${esc(r)}</div>`);
  h += '<div class="section-label">Prohibited</div>';
  f.prohibited.forEach(p => h += `<div class="bullet">• ${esc(p)}</div>`);
  h += `<div class="section-label">Blood</div><div class="bullet">${esc(f.blood)}</div>`;
  return h;
}

function renderDress() {
  const d = CULTURE.dress;
  let h = card(d.title, '');
  h += '<div class="section-label">Men</div>';
  d.men.forEach(m => h += `<div class="bullet">• ${esc(m)}</div>`);
  h += '<div class="section-label">Women</div>';
  d.women.forEach(w => h += `<div class="bullet">• ${esc(w)}</div>`);
  h += '<div class="section-label">Hair Rules</div>';
  d.hairRules.forEach(hr => h += `<div class="bullet">• ${esc(hr)}</div>`);
  return h;
}

function renderTools() {
  const t = CULTURE.tools;
  let h = card(t.title, '');
  h += '<div class="section-label">Instruments</div>';
  t.instruments.forEach(i => h += `<div class="bullet">• <strong>${esc(i.name||'')}</strong>${i.desc?' — '+esc(i.desc):''}${i.note?' — '+esc(i.note):''}</div>`);
  h += '<div class="section-label">Household</div>';
  t.household.forEach(hh => h += `<div class="bullet">• <strong>${esc(hh.name)}:</strong> ${esc(hh.desc)}</div>`);
  h += '<div class="section-label">Weapons</div>';
  t.weapons.forEach(w => h += `<div class="bullet">• ${esc(w)}</div>`);
  h += '<div class="section-label">Children\'s Games</div>';
  t.games.forEach(g => h += `<div class="bullet">• <strong>${esc(g.name)}:</strong> ${esc(g.desc)}</div>`);
  return h;
}

function renderAgriculture() {
  const a = CULTURE.agriculture;
  let h = card(a.title, `<p style="font-size:11px">${esc(a.mainCrop)}</p>`);
  h += '<div class="section-label">Division of Labour</div>';
  a.division.forEach(d => h += `<div class="bullet">• ${esc(d)}</div>`);
  h += '<div class="section-label">Practices</div>';
  a.practices.forEach(p => h += `<div class="bullet">• ${esc(p)}</div>`);
  h += '<div class="section-label">Harvest</div>';
  a.harvest.forEach(hh => h += `<div class="bullet">• ${esc(hh)}</div>`);
  return h;
}

function renderNaming() {
  const n = CULTURE.naming;
  let h = card(n.title, '');
  n.rules.forEach(r => h += `<div class="bullet">• ${esc(r)}</div>`);
  return h;
}

function renderPunishment() {
  const p = CULTURE.punishment;
  let h = card(p.title, '');
  h += `<div class="section-label">Sogornotet (Unnatural Behaviour)</div><div class="bullet">${esc(p.sogornotet.description)}</div>`;
  h += `<div class="section-label">Homicide</div><div class="bullet">${esc(p.homicide.description)}</div>`;
  h += `<div class="section-label">Theft</div><div class="bullet">${esc(p.theft.description)}</div>`;
  h += `<div class="section-label">Witchcraft</div><div class="bullet">${esc(p.witchcraft.description)}</div>`;
  return h;
}

// ===== MUSIC TAB =====
function renderMusic(c) {
  c.innerHTML = `<div class="card"><div class="card-title">🎵 Chepalungu — Cradle of Kalenjin Secular Music</div></div>
    <div class="card"><strong>Wilson Kipkirui Arap Laboso (Maruchela)</strong><br><span style="font-size:10px;color:#8B6F5E">1920– | First Kalenjin Recording Artist | Acoustic guitar, mid-1950s</span></div>
    <div class="card"><strong>Koilonget Band (founded 1957)</strong><br><span style="font-size:10px">Kipchamba Arap Tapotuk — "Father of Kipsigis Rhumba"<br>Morris Arap Mainek — Accordion, Rhythm<br>Francis Sonoiya — Lead Guitar<br>Francis Koech (Chemirei) — Vocalist, Comedian<br>Segeri Arap Talaam — Composer</span></div>
    <div class="card"><strong>More Artists</strong><br><span style="font-size:10px">Joel Kileges (Jamasis Band) • Pole Arap Sitonik (History Kumbuka) • Cheptorus Arap Chepkwony (Bureti Band) • Joseph Tariraat (Olala Boys, 1989) • Korgoren brothers (Olesoi Band)</span></div>
    <div class="card"><strong>Key Recordings</strong><br><span style="font-size:10px">• 1950 — Chemirocha (Hugh Tracey, Kapkatet)<br>• 1952 — Chebo Moire: first recording (ILAM, Kapkatet)<br>• 2015 — Chemirocha recordings repatriated to community</span></div>`;
}

// ===== COMMUNITY TAB =====
function renderCommunity(c) {
  c.innerHTML = `<div class="card"><div class="card-title">Self-Introduction</div><p style="font-family:monospace;background:#F5F0EB;padding:8px;border-radius:6px;font-size:12px;line-height:1.6">"Orenyun ko [Paternal Clan],<br> anue [Maternal Clan],<br> ak agan [Marital Clan]."</p><p style="color:#8B6F5E;font-size:9px;margin-top:4px;font-style:italic">Three clan identities: kisikwon, anue, komutan</p></div>
    <div class="card"><div class="card-title">Piikab Kutit</div><p style="font-size:11px"><strong>Piteet</strong> — law, custom, nature (unified)<br><strong>Atebet</strong> — behaviour from piteet<br><strong>Sogorge</strong> — unnatural, automatic consequence</p></div>
    <div class="card" style="text-align:center"><div class="card-title">Current Age-Set</div><p style="font-size:22px;color:#E8751A;font-weight:700">Nyongi</p><p style="color:#8B6F5E;font-size:10px">2019–Present</p></div>
    <div class="card"><div class="card-title">Kaberuret — The Blessing</div><p style="font-size:10px;line-height:1.7;font-style:italic;color:#5C4033">"Emoni! Paybay, ole paybay!"<br>"Komi boisiek! Paybay, ole paybay!"<br>"Ngotwekap murenik! Purge, ole purge!"<br>"Tuchon koam suswek! Ees, ole ees!"<br>"Emoni kim ole kim!"<br>"King ole king!"</p></div>
    <div class="card"><div class="card-title">Sacred Plants (Korosek)</div><p style="font-size:10px"><strong>Segechuwet</strong> — sweet smelling, sacred to all<br><strong>Seretiot</strong> — Kikuyu grass, ceremonies<br><strong>Senendet</strong> — creeper, ritual use</p></div>`;
}

// ===== LORE TAB =====
function renderLore(c) {
  let clanH = DATA.clans.map((cl,i)=>`<div style="display:flex;padding:3px 0;border-bottom:1px solid #F5F0EB;font-size:11px"><span style="width:24px;color:#8B6F5E;font-size:9px">${i+1}</span><span>${esc(cl)}</span></div>`).join('');
  let agesetH = DATA.agesets.map(a=>`<div class="row"><div class="row-left">${esc(a.name)}</div><div class="row-right">${esc(a.years)} <span style="color:#8B6F5E;font-size:9px">(${a.order})</span></div></div>`).join('');
  c.innerHTML = `<div class="card"><div class="card-title">39 Clans (Ortinwek)</div>${clanH}<p style="color:#8B6F5E;font-size:9px;margin-top:4px;font-style:italic">100+ clans pending from Ruto & Kipngetich</p></div>
    <div class="card"><div class="card-title">Age-Set Chronology (1783–Present)</div>${agesetH}</div>
    <div class="card"><div class="card-title">The Sacred Mountain</div><p style="font-size:11px"><strong>Tulwab Kipsigis</strong> (Mount Blackett)<br>Where God appeared to the ancestors. Where the Kipsigis became a distinct people. First initiation site in the homeland. c. 1650.</p></div>
    <div class="card"><div class="card-title">Sacred Directions</div><p style="font-size:11px"><strong>Kong'asis (East)</strong> — health, life, prosperity<br>All prayers face east. Door never faces east.<br><strong>Pochi (West)</strong> — completion<br><strong>Muget (North)</strong> • <strong>Kapen (South)</strong></p></div>
    <div class="card"><div class="card-title">House Microcosm</div><p style="font-size:10px"><strong>Toloita</strong> — Central post (ancestry)<br><strong>Koitab Maa</strong> — Fireplace (continuity)<br><strong>Mabwaita</strong> — Altar (prayer, east)<br><strong>Kimonjokut</strong> — Roof peak (household life)</p></div>`;
}

showTab('mabwaita');
