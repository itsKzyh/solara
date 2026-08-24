const DISCORD='https://discord.gg/rdV2qfe3ua';
const people={
  asgard:{name:'Asgard',id:'1187421394695376968',img:'assets/asgard.webp',bio:'Defines Solara Inc’s direction, visual identity and quality standard.'},
  diego:{name:'Diego',id:'1248575202946846755',img:'assets/diego.webp',bio:'Builds gameplay systems and helps shape the studio’s technical direction.'},
  kzyh:{name:'Kzyh',id:'1360958504063471747',img:'assets/kzyh.webp',bio:'Oversees studio operations and configures the official servers for Solara Inc games.'},
  guga:{name:'Guga',id:'738811406501281844',img:'assets/guga.webp',bio:'Develops the systems that power Solara experiences.'},
  shinzaki:{name:'Shinzaki',id:'1475261480495611956',img:'assets/shinzaki.webp',bio:'Designs clean, responsive interfaces for every experience.'},
  sanny:{name:'Sanny',id:'1537203659580907631',img:'assets/sanny.webp',bio:'Creates visual effects that give gameplay its impact.'},
  susu:{name:'Susu',id:'1181353153082433638',img:'assets/susu.webp',bio:'Creates 3D assets that shape the identity of our worlds.'},
  osnofa:{name:'Osnofa',id:'1413268553620000950',img:'assets/osnofa.webp',bio:'Builds environments designed to feel distinct and alive.'},
  meg:{name:'Meg',id:'867405277569613894',img:'assets/meg.webp',bio:'Brings characters and gameplay moments to life through motion.'}
};

const teamSections=[
  {label:'Leadership',title:'Studio Owners',desc:'The people responsible for Solara Inc’s direction and long-term vision.',members:[['asgard','Owner'],['diego','Owner']]},
  {label:'Code',title:'Scripters',desc:'Gameplay logic, systems and interactive mechanics.',members:[['diego','Scripter']]},
  {label:'Code',title:'Programmers',desc:'Technical systems and foundations that power our experiences.',members:[['guga','Programmer']]},
  {label:'Design',title:'UI / UX Makers',desc:'Interfaces and player experiences built to feel clear and responsive.',members:[['asgard','UI / UX Maker'],['shinzaki','UI / UX Maker']]},
  {label:'3D Art',title:'Modelers',desc:'3D assets that define the visual identity of each world.',members:[['susu','Modeler']]},
  {label:'Worldbuilding',title:'Builders',desc:'Environments and spaces designed to feel distinct and alive.',members:[['osnofa','Builder']]},
  {label:'Visual Effects',title:'VFX Makers',desc:'Effects that give abilities, combat and moments their impact.',members:[['sanny','VFX Maker']]},
  {label:'Motion',title:'Animators',desc:'Character and gameplay motion that brings every experience to life.',members:[['meg','Animator']]},
  {label:'Operations',title:'Studio Management',desc:'Coordination, server infrastructure and community operations.',members:[['kzyh','Leader Manager']]}
];

const app=document.querySelector('#app');
const icon=id=>`<svg class="ico" aria-hidden="true"><use href="#${id}"/></svg>`;
const btn=(label,href,type='primary',iconId='i-arrow')=>`<a class="btn ${type}" href="${href}" ${href.startsWith('http')?'target="_blank" rel="noreferrer"':''}><span>${label}</span>${icon(iconId)}</a>`;

function memberCard(key,role){
  const p=people[key];
  return `<article class="member-card reveal">
    <div class="member-photo"><img src="${p.img}" alt="${p.name}" loading="lazy"><span class="member-role">${role}</span></div>
    <div class="member-copy"><h3>${p.name}</h3><p>${p.bio}</p>
      <div class="member-actions">
        <a class="member-action" href="https://discord.com/users/${p.id}" target="_blank" rel="noreferrer">Discord ${icon('i-external')}</a>
        <button class="member-action copy-id" type="button" data-copy="${p.id}">Copy ID ${icon('i-copy')}</button>
      </div>
    </div>
  </article>`;
}

function gameCard({directory=false}={}){
  return `<article class="project-card reveal">
    <div class="project-visual">
      <img src="assets/anime-ascend.webp" alt="Anime Ascend">
      <span class="status-chip"><i></i> In Development</span>
    </div>
    <div class="project-info">
      <h3>ANIME ASCEND</h3>
      <p>Grow stronger, break through barriers, and unlock new worlds.</p>
      <div class="tag-row"><span>SIMULATOR</span><span>ANIME</span><span>ROBLOX</span></div>
      ${directory?'':`<div class="project-actions">${btn('Explore Game','#games','secondary','i-arrow')}</div>`}
    </div>
  </article>`;
}

function home(){return `
<section class="hero view-enter" id="home">
  <div class="hero-stage">
    <div class="hero-badge"><i></i> SOLARA INC · ROBLOX GAME STUDIO</div>
    <div class="solar-core" aria-hidden="true">
      <div class="orbit-glow"></div><div class="orbit one"></div><div class="orbit two"></div><div class="orbit three"></div>
      <img class="solar-logo" src="assets/solara-logo.png" alt="">
    </div>
    <h1>CREATING WORLDS<br><span class="thin">WITH</span> <span class="gradient-text">IDENTITY.</span></h1>
    <p class="hero-copy">Code, design and art working together to build polished Roblox experiences with a clear identity.</p>
    <div class="hero-actions">${btn('Explore Anime Ascend','#games','primary','i-arrow')}${btn('Meet The Team','#team','secondary','i-arrow')}</div>
    <div class="hero-signal"><span><b>01</b> Active Project</span><i></i><span><b>09</b> Team Members</span><i></i><span><b>100%</b> Independent</span></div>
  </div>
</section>

<section class="section manifesto">
  <div class="shell">
    <article class="manifesto-panel reveal">
      <div class="eyebrow">OUR APPROACH</div>
      <h2>SMALL TEAM.<br><span class="gradient-text">CLEAR VISION.</span></h2>
      <p>Every discipline stays close to the project so technology, design and art move in the same direction.</p>
      <div class="craft-row">
        <span class="craft-pill">${icon('i-code')} Development</span>
        <span class="craft-pill">${icon('i-pen')} UI / UX</span>
        <span class="craft-pill">${icon('i-cube')} 3D Worlds</span>
        <span class="craft-pill">${icon('i-spark')} VFX</span>
        <span class="craft-pill">${icon('i-motion')} Animation</span>
        <span class="craft-pill">${icon('i-manage')} Operations</span>
      </div>
    </article>
  </div>
</section>

<section class="section featured" id="featured-project">
  <div class="shell">
    <div class="section-intro reveal"><div class="eyebrow">FIRST EXPERIENCE</div><h2>MEET <span class="gradient-text">ANIME ASCEND.</span></h2><p>An anime simulator built around progression, exploration and unlocking the next world.</p></div>
    <div class="project-stage">${gameCard()}</div>
  </div>
</section>

<section class="section leadership-section">
  <div class="shell">
    <div class="section-intro reveal"><div class="eyebrow">STUDIO LEADERSHIP</div><h2>TWO OWNERS.<br><span class="gradient-text">ONE VISION.</span></h2><p>Asgard and Diego lead Solara Inc together.</p></div>
    <div class="leadership-grid">${memberCard('asgard','Owner')}${memberCard('diego','Owner')}</div>
    <div class="center-action">${btn('View Full Team','#team','secondary','i-arrow')}</div>
  </div>
</section>

<section class="section cta-orbit">
  <div class="shell"><article class="cta-panel reveal"><div class="cta-ring" aria-hidden="true"></div><div class="eyebrow">CONNECT WITH SOLARA</div><h2>SEE WHAT<br><span class="gradient-text">COMES NEXT.</span></h2><p>Development updates, sneak peeks and future testing opportunities live in our official community.</p>${btn('Join Our Discord',DISCORD,'primary','i-discord')}</article></div>
</section>`}

function games(){return `
<section class="directory view-enter"><div class="shell">
  <div class="back-wrap"><a class="back-btn" href="#home">${icon('i-back')} Back to Home</a></div>
  <header class="directory-head"><div class="eyebrow">GAMES</div><h1>OUR <span class="gradient-text">WORLDS.</span></h1><p>Experiences currently being built by Solara Inc.</p><div class="count-line">01 Game · In Development</div></header>
  <div class="directory-project">${gameCard({directory:true})}</div>
</div></section>`}

function team(){return `
<section class="directory view-enter"><div class="shell">
  <div class="back-wrap"><a class="back-btn" href="#home">${icon('i-back')} Back to Home</a></div>
  <header class="directory-head"><div class="eyebrow">SOLARA PEOPLE</div><h1>THE TEAM<br><span class="gradient-text">BEHIND THE WORLDS.</span></h1><p>Nine people. Eight disciplines. One studio.</p><div class="count-line">09 Members · 08 Disciplines</div></header>
  ${teamSections.map(s=>`<section class="team-section"><div class="team-title reveal"><div class="eyebrow">${s.label}</div><h2>${s.title}</h2><p>${s.desc}</p></div><div class="team-grid">${s.members.map(([k,r])=>memberCard(k,r)).join('')}</div></section>`).join('')}
</div></section>`}

function setActive(route){document.querySelectorAll('[data-route]').forEach(a=>a.classList.toggle('active',a.dataset.route===route))}
function initReveal(){const els=[...document.querySelectorAll('.reveal')];if(!('IntersectionObserver'in window)){els.forEach(x=>x.classList.add('show'));return}const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.06,rootMargin:'0px 0px -18px'});els.forEach(x=>io.observe(x))}
function route(){const r=(location.hash||'#home').slice(1).split('?')[0];app.innerHTML=r==='games'?games():r==='team'?team():home();setActive(['games','team'].includes(r)?r:'home');document.body.classList.remove('menu-open');document.querySelector('#menuBtn use')?.setAttribute('href','#i-menu');window.scrollTo({top:0,behavior:'instant'});requestAnimationFrame(initReveal)}

document.addEventListener('click',async e=>{const copy=e.target.closest('.copy-id');if(copy){try{await navigator.clipboard.writeText(copy.dataset.copy);const html=copy.innerHTML;copy.textContent='Copied';setTimeout(()=>copy.innerHTML=html,900)}catch{}}if(e.target.closest('#mobileNav a')) document.body.classList.remove('menu-open')});
document.querySelector('#menuBtn').addEventListener('click',()=>{document.body.classList.toggle('menu-open');document.querySelector('#menuBtn use').setAttribute('href',document.body.classList.contains('menu-open')?'#i-close':'#i-menu')});
window.addEventListener('scroll',()=>document.querySelector('#siteHeader').classList.toggle('scrolled',scrollY>18),{passive:true});
window.addEventListener('hashchange',route);route();
