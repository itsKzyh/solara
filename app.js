const DISCORD='https://discord.gg/rdV2qfe3ua';
const people={
  asgard:{name:'Asgard',role:'Owner',roles:['Owner','UI / UX Maker'],img:'assets/asgard.webp',id:'1187421394695376968'},
  diego:{name:'Diego',role:'Co-Owner',roles:['Co-Owner','Scripter'],img:'assets/diego.webp',id:'1248575202946846755'},
  kzyh:{name:'Kzyh',role:'Leader Manager',roles:['Leader Manager'],img:'assets/kzyh.webp',id:'1360958504063471747'},
  guga:{name:'Guga',role:'Programmer',roles:['Programmer'],img:'assets/guga.webp',id:'738811406501281844'},
  shinzaki:{name:'Shinzaki',role:'UI / UX Maker',roles:['UI / UX Maker'],img:'assets/shinzaki.webp',id:'1475261480495611956'},
  sanny:{name:'Sanny',role:'VFX Maker',roles:['VFX Maker'],img:'assets/sanny.webp',id:'1537203659580907631'},
  susu:{name:'Susu',role:'Modeler',roles:['Modeler'],img:'assets/susu.webp',id:'1181353153082433638'},
  osnofa:{name:'Osnofa',role:'Builder',roles:['Builder'],img:'assets/osnofa.webp',id:'1413268553620000950'},
  meg:{name:'Meg',role:'Animator',roles:['Animator'],img:'assets/meg.webp',id:'867405277569613894'}
};
const categories=[
  {eyebrow:'CORE TEAM',title:'Studio Leadership',text:"The people shaping Solara Inc's direction, quality and long-term vision.",members:[['asgard','OWNER'],['diego','CO-OWNER']]},
  {eyebrow:'ENGINEERING',title:'Programmers',text:'Developers building systems, gameplay and reliable experiences.',members:[['diego','SCRIPTER'],['guga','PROGRAMMER']]},
  {eyebrow:'WORLD BUILDING',title:'Builders',text:'Creators turning concepts into immersive and performant game worlds.',members:[['osnofa','BUILDER']]},
  {eyebrow:'3D ART',title:'Modellers',text:'Artists creating production-ready assets, environments and models.',members:[['susu','MODELER']]},
  {eyebrow:'VISUAL FX',title:'VFX Effects',text:'Artists creating atmosphere, impact and high-energy visual feedback.',members:[['sanny','VFX MAKER']]},
  {eyebrow:'PRODUCT DESIGN',title:'UI / UX',text:'Designers shaping clear, responsive and memorable player interfaces.',members:[['asgard','UI / UX MAKER'],['shinzaki','UI / UX MAKER']]},
  {eyebrow:'MOTION',title:'Animators',text:'Artists bringing characters, abilities and cinematic moments to life.',members:[['meg','ANIMATOR']]},
  {eyebrow:'COMMUNITY OPERATIONS',title:'Studio Management',text:'Management connecting production, communication and team operations.',members:[['kzyh','LEADER MANAGER']]}
];
const app=document.querySelector('#app');
const icon=id=>`<svg class="ico"><use href="#${id}"/></svg>`;
const button=(label,href,kind='primary',id='i-arrow')=>`<a class="btn ${kind}" href="${href}" ${href.startsWith('http')?'target="_blank" rel="noreferrer"':''}>${label}${icon(id)}</a>`;
const memberCard=(key,label,lead=false)=>{const p=people[key];return `<article class="member-card ${lead?'lead-card':''} reveal"><div class="member-photo"><img src="${p.img}" alt="${p.name}" loading="lazy"><span class="member-role">${label}</span><a class="member-open" href="https://discord.com/users/${p.id}" target="_blank" aria-label="Open ${p.name} Discord">${icon('i-external')}</a></div><div class="member-copy"><h3>${p.name}</h3><p>${lead?leadText(key):p.roles.join(' · ')}</p><div class="member-actions"><a href="https://discord.com/users/${p.id}" target="_blank">Discord ${icon('i-external')}</a><button class="copy-id" data-copy="${p.id}">Copy ID ${icon('i-copy')}</button></div></div></article>`};
const leadText=k=>({asgard:'Owner shaping Solara Inc’s vision, visual direction and quality bar.',diego:'Co-Owner building gameplay systems and supporting the studio’s technical foundation.',kzyh:'Leading team coordination, production flow and studio operations.'}[k]||'');

function home(){return `
<section class="hero view-enter" id="home">
  <div class="hero-aurora hero-aurora-a"></div><div class="hero-aurora hero-aurora-b"></div><div class="hero-grid"></div>
  <div class="shell hero-inner">
    <div class="hero-kicker"><span class="pulse-dot"></span> INDEPENDENT ROBLOX GAME STUDIO</div>
    <div class="hero-mark" aria-hidden="true"><img src="assets/solara-logo.png" alt=""></div>
    <h1>WE BUILD WORLDS.<br><span>MADE TO ASCEND.</span></h1>
    <p>Solara Inc creates polished anime-inspired Roblox experiences through focused design, technology and art.</p>
    <div class="hero-buttons">${button('Explore Our Games','#games','primary','i-external')}${button('Meet The Studio','#about','secondary','i-down')}</div>
    <div class="hero-proof"><span><b>01</b> Experience</span><i></i><span><b>09</b> Team Members</span><i></i><span><b>ROBLOX</b> Platform</span></div>
    <div class="hero-scroll">DISCOVER ${icon('i-down')}</div>
  </div>
</section>
<section class="metrics"><div class="shell metric-grid"><div><span>FLAGSHIP EXPERIENCE</span><strong>ANIME ASCEND</strong><small>SIMULATOR</small></div><div><span>PROJECT STATUS</span><strong>IN DEVELOPMENT</strong><small>ACTIVE PRODUCTION</small></div><div><span>CORE TEAM</span><strong>09 MEMBERS</strong><small>MULTI-DISCIPLINARY</small></div><div><span>STUDIO FOCUS</span><strong>QUALITY FIRST</strong><small>DESIGN · CODE · ART</small></div></div></section>
<section class="section about-section" id="about"><div class="shell"><div class="section-head"><div class="eyebrow">WHO WE ARE</div><h2>BUILT WITH<br><span class="gradient-text">INTENTION.</span></h2><p>We are a focused team combining development, design and art to create experiences that feel distinct from the first interaction.</p></div><div class="about-cards"><article class="reveal"><div class="num">01</div><div class="mini-icon">${icon('i-game')}</div><h3>Game Production</h3><p>From concept to playable world, every system is developed around a clear experience.</p></article><article class="reveal"><div class="num">02</div><div class="mini-icon">${icon('i-team')}</div><h3>Specialized Team</h3><p>Programming, UI/UX, VFX, modeling, animation and world building working together.</p></article><article class="reveal"><div class="num">03</div><div class="mini-icon">${icon('i-spark')}</div><h3>Visual Identity</h3><p>Strong art direction and interface design make every Solara project recognizable.</p></article><article class="reveal"><div class="num">04</div><div class="mini-icon">${icon('i-discord')}</div><h3>Community Driven</h3><p>Development updates, sneak peeks and future testing live close to our community.</p></article></div></div></section>
<section class="section portfolio"><div class="shell"><div class="section-row"><div><div class="eyebrow">PORTFOLIO</div><h2>FEATURED<br><span class="gradient-text">EXPERIENCE.</span></h2><p>Our first world is currently taking shape.</p></div>${button('View All Games','#games','secondary','i-arrow')}</div><article class="game-card featured reveal"><div class="game-media"><img src="assets/anime-ascend.webp" alt="Anime Ascend"><div class="media-shade"></div><span class="game-status"><i></i>IN DEVELOPMENT</span><div class="game-watermark">01</div></div><div class="game-copy"><div class="game-index">PROJECT 01 · ANIME SIMULATOR</div><h3>ANIME<br>ASCEND</h3><p>Grow stronger, break through barriers, and unlock new worlds.</p><div class="game-tags"><span>SIMULATOR</span><span>ANIME</span><span>ROBLOX</span></div><div class="game-actions">${button('Join Development Discord',DISCORD,'primary','i-discord')}<a class="text-link" href="#games">PROJECT DETAILS ${icon('i-arrow')}</a></div></div></article></div></section>
<section class="section people"><div class="shell"><div class="section-row"><div><div class="eyebrow">THE PEOPLE</div><h2>STUDIO<br><span class="gradient-text">LEADERSHIP.</span></h2><p>The two people responsible for Solara Inc's direction, production and quality.</p></div>${button('View All Members','#team','secondary','i-arrow')}</div><div class="leadership-grid home-leadership">${memberCard('asgard','OWNER',true)}${memberCard('diego','CO-OWNER',true)}</div></div></section>
<section class="section contact-section"><div class="shell contact-panel reveal"><div class="contact-glow"></div><div><div class="eyebrow">CONTACT</div><h2>LET'S BUILD<br><span class="gradient-text">SOMETHING.</span></h2><p>For partnerships, collaborations, project inquiries or studio contact, reach Solara Inc through our official Discord.</p></div><div class="contact-side"><div class="solara-glyph">${icon('i-spark')}</div>${button('Contact on Discord',DISCORD,'primary','i-discord')}</div></div></section>`}

function games(){return `<section class="directory view-enter"><div class="shell"><a class="back-link" href="#home">${icon('i-back')} Back to Home</a><div class="directory-hero"><div class="eyebrow">SOLARA PORTFOLIO</div><h1>OUR<br>EXPERIENCES.</h1><p>Games developed and operated by Solara Inc.</p></div><div class="directory-rule"></div><article class="game-card directory-game reveal"><div class="game-media"><img src="assets/anime-ascend.webp" alt="Anime Ascend"><span class="game-status"><i></i>IN DEVELOPMENT</span></div><div class="game-copy"><div class="game-index">PROJECT 01 · ANIME SIMULATOR</div><h3>ANIME ASCEND</h3><p>Grow stronger, break through barriers, and unlock new worlds.</p><div class="project-facts"><span><b>STATUS</b>In Development</span><span><b>STUDIO</b>Solara Inc</span><span><b>PLATFORM</b>Roblox</span></div>${button('Follow Development',DISCORD,'primary','i-discord')}</div></article></div></section>`}

function team(){return `<section class="directory view-enter"><div class="shell"><a class="back-link" href="#home">${icon('i-back')} Back to Home</a><div class="directory-hero"><div class="eyebrow">STUDIO DIRECTORY</div><h1>THE PEOPLE<br>BEHIND SOLARA.</h1><p>Leadership, creators and specialists building every Solara Inc experience.</p></div>${categories.map(cat=>`<section class="team-category"><div class="cat-head"><div><div class="eyebrow">${cat.eyebrow}</div><h2>${cat.title}</h2><p>${cat.text}</p></div><div class="member-count">${String(cat.members.length).padStart(2,'0')} ${cat.members.length===1?'MEMBER':'MEMBERS'}</div></div><div class="team-grid">${cat.members.map(([k,l])=>memberCard(k,l,cat.title==='Studio Leadership')).join('')}</div></section>`).join('')}</div></section>`}

function route(){const hash=(location.hash||'#home').replace('#','').split('?')[0];if(hash==='games') app.innerHTML=games();else if(hash==='team') app.innerHTML=team();else app.innerHTML=home();setActive(hash);window.scrollTo({top:0,behavior:'instant'});requestAnimationFrame(initReveal)}
function setActive(hash){document.querySelectorAll('[data-route]').forEach(a=>a.classList.toggle('active',a.dataset.route===hash||(hash==='about'&&a.dataset.route==='home')))}
function initReveal(){const items=document.querySelectorAll('.reveal');if(!('IntersectionObserver'in window)){items.forEach(x=>x.classList.add('show'));return}const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');ob.unobserve(e.target)}}),{threshold:.08});items.forEach(x=>ob.observe(x))}

document.addEventListener('click',async e=>{const copy=e.target.closest('.copy-id');if(copy){try{await navigator.clipboard.writeText(copy.dataset.copy);const old=copy.innerHTML;copy.textContent='Copied';setTimeout(()=>copy.innerHTML=old,900)}catch{}}if(e.target.closest('#mobileNav a')){document.body.classList.remove('menu-open');document.querySelector('#menuBtn use').setAttribute('href','#i-menu')}});
document.querySelector('#menuBtn').addEventListener('click',()=>{document.body.classList.toggle('menu-open');document.querySelector('#menuBtn use').setAttribute('href',document.body.classList.contains('menu-open')?'#i-close':'#i-menu')});
window.addEventListener('scroll',()=>document.querySelector('#siteHeader').classList.toggle('scrolled',scrollY>24),{passive:true});
window.addEventListener('hashchange',route);route();
