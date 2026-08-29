const DISCORD_URL = 'https://discord.gg/rdV2qfe3ua';

const people = {
  asgard:{name:'Asgard',id:'1187421394695376968',img:'assets/asgard.webp',pos:'50% 43%',roles:['OWNER','UI / UX MAKER'],bio:'Owner of Solara Inc, leading creative direction and shaping the UI / UX and visual identity of the studio’s experiences.'},
  diego:{name:'Diego',id:'1248575202946846755',img:'assets/diego.webp',pos:'50% 40%',roles:['OWNER','SCRIPTER'],bio:'Owner and scripter at Solara Inc, building gameplay systems and guiding the technical direction of each project.'},
  guga:{name:'Guga',id:'738811406501281844',img:'assets/guga.webp',pos:'50% 43%',roles:['PROGRAMMER'],bio:'Programmer focused on core game systems, performance and the technical foundations behind Solara experiences.'},
  shinzaki:{name:'Shinzaki',id:'1475261480495611956',img:'assets/shinzaki.webp',pos:'50% 45%',roles:['UI / UX MAKER'],bio:'Designs clear interfaces and player flows that make every interaction easy to understand and consistent with the game.'},
  sanny:{name:'Sanny',id:'1537203659580907631',img:'assets/sanny.webp',pos:'50% 45%',roles:['VFX MAKER'],bio:'Creates visual effects for abilities, combat and key gameplay moments with clarity, energy and impact.'},
  susu:{name:'Susu',id:'1181353153082433638',img:'assets/susu.webp',pos:'50% 45%',roles:['MODELER'],bio:'Creates 3D assets that define the shape, detail and visual style of Solara’s worlds.'},
  osnofa:{name:'Osnofa',id:'1413268553620000950',img:'assets/osnofa.webp',pos:'50% 45%',roles:['BUILDER'],bio:'Builds environments and playable spaces, turning concepts into complete worlds designed around gameplay.'},
  kzyh:{name:'Kzyh',id:'1360958504063471747',img:'assets/kzyh.webp',pos:'50% 42%',roles:['MANAGER'],bio:'Manages studio operations and configures the official servers and community infrastructure for Solara projects.'},
  gojo:{name:'Gojo',id:'925220475519504404',img:'assets/gojo.webp',pos:'50% 43%',roles:['VFX MAKER'],bio:'Creates gameplay-focused visual effects that add readability, energy and impact to important moments.'},
  igortyy:{name:'Igor',id:'595417031587921921',img:'assets/igortyy.webp',pos:'50% 43%',roles:['SCRIPTER'],bio:'Builds gameplay logic, progression systems and interactive mechanics for Solara projects.'},
  espanhola:{name:'Espanhola',id:'1023336106839777391',img:'assets/espanhola.jpg',pos:'50% 38%',roles:['MANAGER'],bio:'Supports studio operations, team coordination and the day-to-day organization of Solara projects.'},
  meg:{name:'Meg',id:'867405277569613894',img:'assets/meg.webp',pos:'50% 43%',roles:['ANIMATOR'],bio:'Brings characters and gameplay moments to life through clear, expressive animation.'}
};

const teamSections = [
  {title:'OWNER',desc:'Studio direction and ownership.',members:[['asgard','OWNER'],['diego','OWNER']]},
  {title:'PROGRAMMER',desc:'Programming, scripting and gameplay systems.',members:[['diego','SCRIPTER'],['guga','PROGRAMMER'],['igortyy','SCRIPTER']]},
  {title:'UI / UX MAKER',desc:'Interfaces and player experience.',members:[['asgard','UI / UX MAKER'],['shinzaki','UI / UX MAKER']]},
  {title:'MODELER',desc:'3D assets and visual forms.',members:[['susu','MODELER']]},
  {title:'BUILDER',desc:'Worlds, spaces and environments.',members:[['osnofa','BUILDER']]},
  {title:'VFX MAKER',desc:'Effects for abilities, combat and gameplay feedback.',members:[['sanny','VFX MAKER'],['gojo','VFX MAKER']]},
  {title:'ANIMATOR',desc:'Character and gameplay motion.',members:[['meg','ANIMATOR']]},
  {title:'MANAGER',desc:'Studio operations and coordination.',members:[['kzyh','MANAGER'],['espanhola','MANAGER']]}
];

const app = document.querySelector('#app');
const icon = id => `<svg class="ico" aria-hidden="true"><use href="#${id}"></use></svg>`;
const isExternal = href => /^https?:/i.test(href);
const button = (label,href,type='primary',iconId='i-arrow') => `<a class="btn ${type}" href="${href}" ${isExternal(href)?'target="_blank" rel="noreferrer"':''}>${icon(iconId)}<span>${label}</span></a>`;

function memberCard(key, role, {featured=false}={}){
  const p = people[key];
  return `<article class="member-card ${featured?'featured-member':''} reveal" style="--photo-pos:${p.pos}">
    <div class="member-media"><img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async"></div>
    <div class="member-body">
      <h3>${p.name}</h3>
      <div class="member-roles"><span>${role}</span></div>
      <p>${p.bio}</p>
      <a class="discord-profile" href="https://discord.com/users/${p.id}" target="_blank" rel="noreferrer" aria-label="Open ${p.name} on Discord">${icon('i-discord')}<span>Discord</span>${icon('i-external')}</a>
    </div>
  </article>`;
}

function gameCard({home=false}={}){
  return `<article class="game-card ${home?'game-card-home':''} reveal">
    <div class="game-art"><img src="assets/anime-ascend.webp" alt="Anime Ascend" loading="${home?'lazy':'eager'}" decoding="async"></div>
    <div class="game-copy">
      <div class="game-status"><i></i><span>IN DEVELOPMENT</span><span class="game-type">SIMULATOR</span></div>
      <h3>Anime <span class="gradient">Ascend</span></h3>
      <p>Grow stronger, break through barriers and unlock new worlds in a progression-focused anime simulator.</p>
      <a class="game-discord" href="${DISCORD_URL}" target="_blank" rel="noreferrer">${icon('i-discord')}<span>Join Server</span>${icon('i-arrow')}</a>
    </div>
  </article>`;
}

function home(){
  return `<section class="hero view-enter"><div class="shell hero-grid">
    <div class="hero-core" aria-hidden="true"><div class="orbit o1"></div><div class="orbit o2"></div><div class="orbit o3"></div><i class="d1"></i><i class="d2"></i><i class="d3"></i><img src="assets/solara-logo.png" alt=""></div>
    <div class="hero-copy"><span class="kicker">SOLARA INC / ROBLOX GAME STUDIO</span><h1>Creating Roblox experiences <span class="gradient">with identity</span></h1><p>Programming, design and art working together to create polished games with clear progression and strong presentation.</p><div class="hero-actions">${button('Explore Games','#games','primary','i-gamepad')}${button('About Solara','#about','secondary','i-info')}</div></div>
  </div></section>

  <section class="section project-section"><div class="shell"><header class="section-head reveal"><span class="kicker">FEATURED EXPERIENCE</span><h2>Anime <span class="gradient">Ascend</span></h2></header>${gameCard({home:true})}</div></section>

  <section class="section owners-home"><div class="shell"><header class="section-head reveal"><span class="kicker">STUDIO DIRECTION</span><h2>Studio <span class="gradient">leadership</span></h2><p>The owners guiding Solara Inc.</p></header><div class="owners-grid">${memberCard('asgard','OWNER',{featured:true})}${memberCard('diego','OWNER',{featured:true})}</div><div class="center-action">${button('View Full Team','#team','secondary','i-users')}</div></div></section>`;
}

function about(){
  return `<section class="about-page view-enter"><div class="shell">
    <header class="page-head"><span class="kicker">ABOUT SOLARA</span><h1>About <span class="gradient">Solara Inc</span></h1><p>Solara Inc is a Roblox game studio bringing programming, UI / UX, 3D, building, VFX, animation and operations together around each project.</p><div class="page-actions">${button('Explore Games','#games','primary','i-gamepad')}${button('Meet The Team','#team','secondary','i-users')}</div></header>

    <section class="capabilities">
      <article class="capability reveal"><span class="capability-icon">${icon('i-roblox')}</span><h2>Roblox Development</h2><p>Games designed around Roblox, its players and the way experiences are discovered, played and revisited.</p></article>
      <article class="capability reveal"><span class="capability-icon">${icon('i-growth')}</span><h2>Progression & Systems</h2><p>Clear goals, upgrades and gameplay systems built to make progress easy to understand and rewarding to continue.</p></article>
      <article class="capability reveal"><span class="capability-icon">${icon('i-layers')}</span><h2>Full Production</h2><p>Programming, UI / UX, 3D, building, VFX and animation developed with one consistent direction.</p></article>
    </section>

    <section class="about-focus reveal"><div class="about-mark"><img src="assets/solara-logo.png" alt="" loading="lazy"></div><div><span class="kicker">HOW WE WORK</span><h2>Built as <span class="gradient">one team</span></h2><p>Every area stays close to the game so systems, interfaces, effects and environments feel like parts of the same experience instead of separate pieces.</p></div></section>

    <section class="about-project reveal"><span class="kicker">CURRENT PROJECT</span><h2>Anime <span class="gradient">Ascend</span></h2><p>A simulator built around progression, exploration and unlocking new worlds.</p><div class="page-actions">${button('View Game','#games','primary','i-gamepad')}${button('Join Server',DISCORD_URL,'secondary','i-discord')}</div></section>
  </div></section>`;
}

function games(){
  return `<section class="directory view-enter"><div class="shell"><header class="page-head compact"><span class="kicker">GAMES</span><h1>Our <span class="gradient">Games</span></h1><p>Projects currently being developed by Solara Inc.</p></header><div class="games-wrap">${gameCard()}</div></div></section>`;
}

function team(){
  return `<section class="directory team-directory view-enter"><div class="shell"><header class="page-head compact"><span class="kicker">THE TEAM</span><h1>The people behind <span class="gradient">Solara</span></h1><p>Developers, artists and managers working across our projects.</p></header>${teamSections.map(section=>`<section class="team-section"><header class="team-title reveal"><div><h2>${section.title}</h2><p>${section.desc}</p></div></header><div class="team-grid count-${section.members.length}">${section.members.map(([key,role])=>memberCard(key,role)).join('')}</div></section>`).join('')}</div></section>`;
}

function currentRoute(){
  const raw=(location.hash||'#home').slice(1).split('?')[0].toLowerCase();
  return ['about','games','team'].includes(raw)?raw:'home';
}

function setActive(route){
  document.querySelectorAll('[data-route]').forEach(a=>{
    const on=a.dataset.route===route;
    a.classList.toggle('active',on);
    if(on) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
  });
  const mobileRoute=document.querySelector('#mobileRoute');
  if(mobileRoute) mobileRoute.textContent=route.toUpperCase();
}

function setMeta(route){
  const map={
    home:['Solara Inc — Roblox Game Studio','Solara Inc creates polished Roblox experiences through programming, design, 3D, VFX and animation.'],
    about:['About — Solara Inc','Learn about Solara Inc and how the studio builds Roblox games across programming, design and art.'],
    games:['Games — Solara Inc','Explore games currently being developed by Solara Inc.'],
    team:['Team — Solara Inc','Meet the developers, artists and managers behind Solara Inc.']
  };
  const [title,description]=map[route]||map.home;
  document.title=title;
  document.querySelector('meta[name="description"]')?.setAttribute('content',description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content',title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content',description);
}

function reveal(){
  const els=[...document.querySelectorAll('.reveal')];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced||!('IntersectionObserver' in window)){els.forEach(el=>el.classList.add('show'));return;}
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');io.unobserve(entry.target);}}),{threshold:.08,rootMargin:'0px 0px -22px'});
  els.forEach((el,i)=>{el.style.setProperty('--delay',`${Math.min((i%3)*45,90)}ms`);io.observe(el);});
}

function closeMenu(){
  document.body.classList.remove('menu-open');
  const btn=document.querySelector('#menuBtn');
  btn?.setAttribute('aria-expanded','false');
  btn?.setAttribute('aria-label','Open menu');
  btn?.querySelector('use')?.setAttribute('href','#i-menu');
}

function render({scroll=true}={}){
  const route=currentRoute();
  app.innerHTML=route==='about'?about():route==='games'?games():route==='team'?team():home();
  setActive(route);setMeta(route);closeMenu();
  if(scroll) window.scrollTo({top:0,behavior:'auto'});
  requestAnimationFrame(reveal);
}

const menuBtn=document.querySelector('#menuBtn');
menuBtn?.addEventListener('click',e=>{
  e.stopPropagation();
  const open=document.body.classList.toggle('menu-open');
  menuBtn.setAttribute('aria-expanded',String(open));
  menuBtn.setAttribute('aria-label',open?'Close menu':'Open menu');
  menuBtn.querySelector('use')?.setAttribute('href',open?'#i-close':'#i-menu');
});
document.querySelector('#mobileNav')?.addEventListener('click',e=>e.stopPropagation());
document.addEventListener('click',()=>{if(document.body.classList.contains('menu-open'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.querySelectorAll('#mobileNav a').forEach(a=>a.addEventListener('click',closeMenu));

let ticking=false;
window.addEventListener('scroll',()=>{
  if(ticking)return;ticking=true;
  requestAnimationFrame(()=>{document.querySelector('#siteHeader')?.classList.toggle('scrolled',scrollY>14);ticking=false;});
},{passive:true});
window.addEventListener('hashchange',()=>render({scroll:true}));
render({scroll:false});
