const ANIME_ASCEND_DISCORD = 'https://discord.gg/rdV2qfe3ua';

const people = {
  asgard:{name:'Asgard',id:'1187421394695376968',img:'assets/asgard.webp',focus:'Creative Direction · UI / UX'},
  diego:{name:'Diego',id:'1248575202946846755',img:'assets/diego.webp',focus:'Technical Direction · Scripting'},
  kzyh:{name:'Kzyh',id:'1360958504063471747',img:'assets/kzyh.webp',focus:'Studio Operations · Community Infrastructure'},
  espanhola:{name:'Espanhola',id:'1023336106839777391',img:'assets/espanhola.jpg',focus:'Studio Operations · Coordination'},
  guga:{name:'Guga',id:'738811406501281844',img:'assets/guga.webp',focus:'Programming · Game Systems'},
  shinzaki:{name:'Shinzaki',id:'1475261480495611956',img:'assets/shinzaki.webp',focus:'Interface Design · Player Experience'},
  sanny:{name:'Sanny',id:'1537203659580907631',img:'assets/sanny.webp',focus:'Visual Effects · Combat Impact'},
  susu:{name:'Susu',id:'1181353153082433638',img:'assets/susu.webp',focus:'3D Art · Asset Creation'},
  osnofa:{name:'Osnofa',id:'1413268553620000950',img:'assets/osnofa.webp',focus:'Environment Design · World Building'},
  gojo:{name:'Gojo',id:'925220475519504404',img:'assets/gojo.webp',focus:'Visual Effects · Gameplay Impact'},
  igortyy:{name:'Igor',id:'595417031587921921',img:'assets/igortyy.webp',focus:'Scripting · Gameplay Systems'},
  meg:{name:'Meg',id:'867405277569613894',img:'assets/meg.webp',focus:'Animation · Character Motion'}
};
const teamSections = [
  {title:'OWNER',desc:'Studio direction and long-term vision.',members:[['asgard','OWNER'],['diego','OWNER']]},
  {title:'PROGRAMMER',desc:'Gameplay systems, scripting and technical foundations.',members:[['diego','SCRIPTER'],['guga','PROGRAMMER'],['igortyy','SCRIPTER']]},
  {title:'UI / UX MAKER',desc:'Interfaces and player experience.',members:[['asgard','UI / UX MAKER'],['shinzaki','UI / UX MAKER']]},
  {title:'MODELER',desc:'3D assets and visual forms.',members:[['susu','MODELER']]},
  {title:'BUILDER',desc:'Worlds, spaces and environments.',members:[['osnofa','BUILDER']]},
  {title:'VFX MAKER',desc:'Effects for combat, abilities and impact.',members:[['sanny','VFX MAKER'],['gojo','VFX MAKER']]},
  {title:'ANIMATOR',desc:'Character and gameplay motion.',members:[['meg','ANIMATOR']]},
  {title:'MANAGER',desc:'Studio operations and community infrastructure.',members:[['kzyh','MANAGER'],['espanhola','MANAGER']]}
];

const app = document.querySelector('#app');
const icon = id => `<svg class="ico" aria-hidden="true"><use href="#${id}"></use></svg>`;
const ext = href => href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : '';
const button = (label,href,type='primary',iconId='i-arrow') => `<a class="btn ${type}" href="${href}" ${ext(href)}><span>${label}</span>${icon(iconId)}</a>`;

function memberCard(key,role,{featured=false}={}){
  const p=people[key];
  return `<article class="member-card ${featured?'featured-member':''} reveal">
    <div class="member-media"><img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async"></div>
    <div class="member-body">
      <div class="member-heading">
        <h3>${p.name}</h3>
        <span class="member-role">${role}</span>
      </div>
      <p class="member-focus">${p.focus}</p>
      <a class="discord-profile" href="https://discord.com/users/${p.id}" target="_blank" rel="noreferrer" aria-label="Open ${p.name} on Discord">
        ${icon('i-discord')}<span>Discord</span>${icon('i-arrow')}
      </a>
    </div>
  </article>`;
}

function gameCard(){
  return `<article class="game-card reveal">
    <div class="game-copy">
      <span class="status"><i></i> IN DEVELOPMENT</span>
      <h3>ANIME <span>ASCEND</span></h3>
      <p>Grow stronger, break through barriers, and unlock new worlds.</p>
      <div class="tags"><span>SIMULATOR</span><span>ANIME</span><span>ROBLOX</span></div>
      <a class="game-discord" href="${ANIME_ASCEND_DISCORD}" target="_blank" rel="noreferrer">
        ${icon('i-discord')}<span>Join Server</span>${icon('i-arrow')}
      </a>
    </div>
    <div class="game-art"><img src="assets/anime-ascend.webp" alt="Anime Ascend" loading="eager" decoding="async"></div>
  </article>`;
}

function home(){
  return `<section class="hero view-enter"><div class="shell hero-grid">
    <div class="hero-core" aria-hidden="true"><div class="orbit o1"></div><div class="orbit o2"></div><div class="orbit o3"></div><i class="d1"></i><i class="d2"></i><i class="d3"></i><img src="assets/solara-logo.png" alt=""></div>
    <div class="hero-copy"><span class="kicker">SOLARA INC · GAME STUDIO</span><h1>CREATING WORLDS<br>WITH <span class="gradient">IDENTITY.</span></h1><p>Code, design and art shaping polished Roblox experiences.</p><div class="hero-actions">${button('Explore Games','#games')}${button('Meet The Team','#team','secondary')}</div></div>
  </div></section>

  <section class="section"><div class="shell"><header class="section-head reveal"><span class="kicker">FEATURED EXPERIENCE</span><h2>ANIME <span class="gradient">ASCEND</span></h2></header>${gameCard()}</div></section>

  <section class="section owners-home"><div class="shell"><header class="section-head reveal"><span class="kicker">STUDIO LEADERSHIP</span><h2>OWNERS</h2></header><div class="owners-grid">${memberCard('asgard','OWNER',{featured:true})}${memberCard('diego','OWNER',{featured:true})}</div><div class="center-action">${button('View Full Team','#team','secondary')}</div></div></section>
`;
}

function games(){
  return `<section class="directory view-enter"><div class="shell"><header class="directory-head"><span class="kicker">GAMES</span><h1>OUR <span class="gradient">WORLDS.</span></h1><p>Current projects from Solara Inc.</p></header>${gameCard()}</div></section>`;
}

function team(){
  return `<section class="directory team-directory view-enter"><div class="shell"><header class="directory-head"><span class="kicker">STUDIO DIRECTORY</span><h1>THE PEOPLE<br>BEHIND <span class="gradient">SOLARA.</span></h1><p>Development, design, art and studio operations.</p></header>${teamSections.map(section=>`<section class="team-section"><header class="team-title reveal"><h2>${section.title}</h2></header><div class="team-grid ${section.members.length===1?'single':''}">${section.members.map(([key,role])=>memberCard(key,role)).join('')}</div></section>`).join('')}</div></section>`;
}

function active(route){document.querySelectorAll('[data-route]').forEach(a=>a.classList.toggle('active',a.dataset.route===route));document.querySelector('#mobileRoute').textContent=route.toUpperCase()}
function reveal(){
  const els=[...document.querySelectorAll('.reveal')];
  els.forEach((el,i)=>el.style.setProperty('--reveal-delay',`${Math.min((i%4)*55,165)}ms`));
  if(!('IntersectionObserver'in window)){els.forEach(e=>e.classList.add('show'));return}
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.09,rootMargin:'0px 0px -22px'});
  els.forEach(e=>io.observe(e));
}

function initMotion(){
  const coarse=matchMedia('(pointer:coarse)').matches;
  const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const surfaces=[...document.querySelectorAll('.member-card,.game-card,.connect-card')];
  surfaces.forEach(el=>{
    el.classList.add('motion-surface');
    const setPoint=e=>{const r=el.getBoundingClientRect();el.style.setProperty('--mx',`${((e.clientX-r.left)/r.width)*100}%`);el.style.setProperty('--my',`${((e.clientY-r.top)/r.height)*100}%`)};
    if(!coarse&&!reduced) el.addEventListener('pointermove',setPoint,{passive:true});
    el.addEventListener('pointerdown',e=>{setPoint(e);el.classList.add('is-touched')},{passive:true});
    ['pointerup','pointercancel','pointerleave'].forEach(type=>el.addEventListener(type,()=>el.classList.remove('is-touched'),{passive:true}));
  });

  if(!coarse&&!reduced){
    document.querySelectorAll('.btn,.nav-discord').forEach(el=>{
      el.addEventListener('pointermove',e=>{
        const r=el.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/r.width,y=(e.clientY-r.top-r.height/2)/r.height;
        el.style.transform=`translate(${x*3}px,${y*2-2}px)`;
      },{passive:true});
      el.addEventListener('pointerleave',()=>el.style.removeProperty('transform'),{passive:true});
    });
  }
}
function meta(route){const map={home:['Solara Inc — Game Studio','Solara Inc is a Roblox game studio focused on polished, distinctive experiences.'],games:['Games — Solara Inc','Explore games currently being developed by Solara Inc.'],team:['Team — Solara Inc','Meet the team behind Solara Inc.']};const [t,d]=map[route]||map.home;document.title=t;document.querySelector('meta[name="description"]')?.setAttribute('content',d);document.querySelector('meta[property="og:title"]')?.setAttribute('content',t);document.querySelector('meta[property="og:description"]')?.setAttribute('content',d)}
function route(){const raw=(location.hash||'#home').slice(1).split('?')[0];const r=['games','team'].includes(raw)?raw:'home';app.innerHTML=r==='games'?games():r==='team'?team():home();active(r);meta(r);document.body.classList.remove('menu-open');menuBtn?.setAttribute('aria-expanded','false');menuBtn?.querySelector('use')?.setAttribute('href','#i-menu');window.scrollTo({top:0,behavior:'instant'});requestAnimationFrame(()=>{reveal();initMotion()})}

let lastY=0,ticking=false;function scrollHeader(){if(ticking)return;ticking=true;requestAnimationFrame(()=>{const y=scrollY,header=document.querySelector('#siteHeader');header?.classList.toggle('scrolled',y>16);header?.classList.toggle('hidden',y>lastY&&y>170&&!document.body.classList.contains('menu-open'));lastY=y;ticking=false})}

document.addEventListener('click',e=>{if(e.target.closest('#mobileNav a'))document.body.classList.remove('menu-open')});
const menuBtn=document.querySelector('#menuBtn');menuBtn?.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.querySelector('use')?.setAttribute('href',open?'#i-close':'#i-menu')});
window.addEventListener('hashchange',route);window.addEventListener('scroll',scrollHeader,{passive:true});route();
