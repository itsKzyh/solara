const DISCORD = 'https://discord.gg/rdV2qfe3ua';

const people = {
  asgard: {
    name: 'Asgard',
    id: '1187421394695376968',
    img: 'assets/asgard.webp',
    bio: 'Leads Solara Inc’s creative direction, visual identity and quality standard.'
  },
  diego: {
    name: 'Diego',
    id: '1248575202946846755',
    img: 'assets/diego.webp',
    bio: 'Leads the studio’s technical direction and builds the systems behind its games.'
  },
  kzyh: {
    name: 'Kzyh',
    id: '1360958504063471747',
    img: 'assets/kzyh.webp',
    bio: 'Oversees studio operations and configures the official servers for Solara Inc games.'
  },
  guga: {
    name: 'Guga',
    id: '738811406501281844',
    img: 'assets/guga.webp',
    bio: 'Develops the technical systems that power Solara experiences.'
  },
  shinzaki: {
    name: 'Shinzaki',
    id: '1475261480495611956',
    img: 'assets/shinzaki.webp',
    bio: 'Designs clean, responsive interfaces and intuitive player experiences.'
  },
  sanny: {
    name: 'Sanny',
    id: '1537203659580907631',
    img: 'assets/sanny.webp',
    bio: 'Creates visual effects that give gameplay its energy and impact.'
  },
  susu: {
    name: 'Susu',
    id: '1181353153082433638',
    img: 'assets/susu.webp',
    bio: 'Creates 3D assets that define the shape and detail of our worlds.'
  },
  osnofa: {
    name: 'Osnofa',
    id: '1413268553620000950',
    img: 'assets/osnofa.webp',
    bio: 'Builds environments designed to feel distinct, readable and alive.'
  },
  meg: {
    name: 'Meg',
    id: '867405277569613894',
    img: 'assets/meg.webp',
    bio: 'Brings characters and gameplay moments to life through animation.'
  }
};

const teamSections = [
  {
    title: 'OWNER',
    desc: 'Studio direction, creative decisions and long-term vision.',
    members: [['asgard', 'OWNER'], ['diego', 'OWNER']]
  },
  {
    title: 'PROGRAMMER',
    desc: 'Gameplay logic, scripting and technical systems.',
    members: [['diego', 'SCRIPTER'], ['guga', 'PROGRAMMER']]
  },
  {
    title: 'UI / UX MAKER',
    desc: 'Interfaces and player experiences designed to feel clear and responsive.',
    members: [['asgard', 'UI / UX MAKER'], ['shinzaki', 'UI / UX MAKER']]
  },
  {
    title: 'MODELER',
    desc: '3D assets that shape the visual identity of each world.',
    members: [['susu', 'MODELER']]
  },
  {
    title: 'BUILDER',
    desc: 'Worlds and environments built for atmosphere, readability and scale.',
    members: [['osnofa', 'BUILDER']]
  },
  {
    title: 'VFX MAKER',
    desc: 'Visual effects that make combat, abilities and moments feel impactful.',
    members: [['sanny', 'VFX MAKER']]
  },
  {
    title: 'ANIMATOR',
    desc: 'Character and gameplay motion that brings every experience to life.',
    members: [['meg', 'ANIMATOR']]
  },
  {
    title: 'STUDIO MANAGEMENT',
    desc: 'Coordination, server infrastructure and community operations.',
    members: [['kzyh', 'LEADER MANAGER']]
  }
];

const app = document.querySelector('#app');
const icon = id => `<svg class="ico" aria-hidden="true"><use href="#${id}"></use></svg>`;
const externalAttrs = href => href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : '';

const btn = (label, href, type = 'primary', iconId = 'i-arrow') => `
  <a class="btn ${type}" href="${href}" ${externalAttrs(href)}>
    <span>${label}</span>${icon(iconId)}
  </a>`;

function memberCard(key, role, { owner = false } = {}) {
  const p = people[key];
  return `
    <article class="member-card ${owner ? 'owner-card' : ''} reveal">
      <div class="member-photo">
        <img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async">
        <span class="member-role">${role}</span>
      </div>
      <div class="member-copy">
        <h3>${p.name}</h3>
        <p>${p.bio}</p>
        <div class="member-actions">
          <a class="member-action" href="https://discord.com/users/${p.id}" target="_blank" rel="noreferrer" aria-label="Open ${p.name}'s Discord profile">
            <span>Discord</span>${icon('i-external')}
          </a>
          <button class="member-action copy-id" type="button" data-copy="${p.id}" aria-label="Copy ${p.name}'s Discord ID">
            <span>Copy ID</span>${icon('i-copy')}
          </button>
        </div>
      </div>
    </article>`;
}

function gameCard({ directory = false } = {}) {
  return `
    <article class="project-card reveal">
      <div class="project-visual">
        <img src="assets/anime-ascend.webp" alt="Anime Ascend" loading="eager" decoding="async">
        <span class="status-chip"><i></i> IN DEVELOPMENT</span>
      </div>
      <div class="project-info">
        <h3>ANIME ASCEND</h3>
        <p>Grow stronger, break through barriers, and unlock new worlds.</p>
        <div class="tag-row" aria-label="Game categories"><span>SIMULATOR</span><span>ANIME</span><span>ROBLOX</span></div>
        ${directory ? '' : `<div class="project-actions">${btn('View Game', '#games', 'secondary', 'i-arrow')}</div>`}
      </div>
    </article>`;
}

function home() {
  return `
    <section class="hero view-enter" id="home">
      <div class="hero-stage shell">
        <div class="hero-badge"><i></i> SOLARA INC · ROBLOX GAME STUDIO</div>
        <div class="solar-core" aria-hidden="true">
          <div class="orbit-glow"></div>
          <div class="orbit one"></div><div class="orbit two"></div><div class="orbit three"></div>
          <span class="orbit-dot dot-a"></span><span class="orbit-dot dot-b"></span><span class="orbit-dot dot-c"></span>
          <img class="solar-logo" src="assets/solara-logo.png" alt="">
        </div>
        <h1>CREATING WORLDS<br><span class="thin">WITH</span> <span class="gradient-text">IDENTITY.</span></h1>
        <p class="hero-copy">Code, design and art working together to build polished Roblox experiences with a clear identity.</p>
        <div class="hero-actions">
          ${btn('Explore Anime Ascend', '#games', 'primary', 'i-arrow')}
          ${btn('Meet The Team', '#team', 'secondary', 'i-arrow')}
        </div>
        <div class="hero-signal" aria-label="Studio overview">
          <span><b>01</b> ACTIVE PROJECT</span><i></i><span><b>09</b> TEAM MEMBERS</span>
        </div>
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
            <span class="craft-pill">${icon('i-cube')} 3D</span>
            <span class="craft-pill">${icon('i-spark')} VFX</span>
            <span class="craft-pill">${icon('i-motion')} Animation</span>
            <span class="craft-pill">${icon('i-manage')} Operations</span>
          </div>
        </article>
      </div>
    </section>

    <section class="section featured" id="featured-project">
      <div class="shell">
        <div class="section-intro reveal">
          <div class="eyebrow">FIRST EXPERIENCE</div>
          <h2>MEET <span class="gradient-text">ANIME ASCEND.</span></h2>
          <p>An anime simulator focused on progression, exploration and unlocking new worlds.</p>
        </div>
        <div class="project-stage">${gameCard()}</div>
      </div>
    </section>

    <section class="section leadership-section">
      <div class="shell">
        <div class="section-intro reveal">
          <div class="eyebrow">STUDIO OWNERS</div>
          <h2>TWO OWNERS.<br><span class="gradient-text">ONE VISION.</span></h2>
          <p>Asgard and Diego lead Solara Inc together.</p>
        </div>
        <div class="leadership-grid">
          ${memberCard('asgard', 'OWNER', { owner: true })}
          ${memberCard('diego', 'OWNER', { owner: true })}
        </div>
        <div class="center-action">${btn('View Full Team', '#team', 'secondary', 'i-arrow')}</div>
      </div>
    </section>

    <section class="section cta-orbit">
      <div class="shell">
        <article class="cta-panel reveal">
          <div class="cta-ring" aria-hidden="true"></div>
          <div class="eyebrow">CONNECT WITH SOLARA</div>
          <h2>SEE WHAT<br><span class="gradient-text">COMES NEXT.</span></h2>
          <p>Development updates, sneak peeks and future testing opportunities live in our official community.</p>
          ${btn('Join Our Discord', DISCORD, 'primary', 'i-discord')}
        </article>
      </div>
    </section>`;
}

function games() {
  return `
    <section class="directory view-enter">
      <div class="shell">
        <div class="back-wrap"><a class="back-btn" href="#home">${icon('i-back')}<span>Back to Home</span></a></div>
        <header class="directory-head">
          <div class="eyebrow">GAMES</div>
          <h1>OUR <span class="gradient-text">WORLDS.</span></h1>
          <p>Experiences currently being built by Solara Inc.</p>
          <div class="count-line">01 GAME · IN DEVELOPMENT</div>
        </header>
        <div class="directory-project">${gameCard({ directory: true })}</div>
      </div>
    </section>`;
}

function team() {
  return `
    <section class="directory view-enter">
      <div class="shell">
        <div class="back-wrap"><a class="back-btn" href="#home">${icon('i-back')}<span>Back to Home</span></a></div>
        <header class="directory-head">
          <div class="eyebrow">SOLARA PEOPLE</div>
          <h1>THE TEAM<br><span class="gradient-text">BEHIND THE WORLDS.</span></h1>
          <p>Nine people across specialized disciplines, working as one studio.</p>
          <div class="count-line">09 MEMBERS · 08 AREAS</div>
        </header>
        ${teamSections.map(section => `
          <section class="team-section">
            <div class="team-title reveal">
              <h2>${section.title}</h2>
              <p>${section.desc}</p>
            </div>
            <div class="team-grid ${section.members.length === 1 ? 'single' : ''}">
              ${section.members.map(([key, role]) => memberCard(key, role)).join('')}
            </div>
          </section>`).join('')}
      </div>
    </section>`;
}

function setActive(route) {
  document.querySelectorAll('[data-route]').forEach(a => a.classList.toggle('active', a.dataset.route === route));
}

function initReveal() {
  const elements = [...document.querySelectorAll('.reveal')];
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('show'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -18px' });
  elements.forEach(el => observer.observe(el));
}

function updateMeta(route) {
  const map = {
    home: ['Solara Inc — Game Studio', 'Solara Inc is a Roblox game studio creating polished experiences with a clear identity.'],
    games: ['Games — Solara Inc', 'Explore games and experiences currently being developed by Solara Inc.'],
    team: ['Team — Solara Inc', 'Meet the developers, artists, designers and managers behind Solara Inc.']
  };
  const [title, description] = map[route] || map.home;
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
}

function route() {
  const raw = (location.hash || '#home').slice(1).split('?')[0];
  const current = ['games', 'team'].includes(raw) ? raw : 'home';
  app.innerHTML = current === 'games' ? games() : current === 'team' ? team() : home();
  setActive(current);
  updateMeta(current);
  document.body.classList.remove('menu-open');
  document.querySelector('#menuBtn')?.setAttribute('aria-expanded', 'false');
  document.querySelector('#menuBtn use')?.setAttribute('href', '#i-menu');
  window.scrollTo({ top: 0, behavior: 'instant' });
  requestAnimationFrame(initReveal);
}

let lastScrollY = window.scrollY;
let ticking = false;
function handleHeaderScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    const header = document.querySelector('#siteHeader');
    if (header) {
      header.classList.toggle('scrolled', y > 18);
      header.classList.toggle('header-hidden', y > lastScrollY && y > 140 && !document.body.classList.contains('menu-open'));
    }
    lastScrollY = y;
    ticking = false;
  });
}

document.addEventListener('click', async event => {
  const copy = event.target.closest('.copy-id');
  if (copy) {
    const original = copy.innerHTML;
    try {
      await navigator.clipboard.writeText(copy.dataset.copy);
      copy.innerHTML = '<span>Copied</span>' + icon('i-copy');
    } catch {
      copy.innerHTML = '<span>Copy failed</span>' + icon('i-copy');
    }
    setTimeout(() => { copy.innerHTML = original; }, 1100);
  }
  if (event.target.closest('#mobileNav a')) document.body.classList.remove('menu-open');
});

const menuBtn = document.querySelector('#menuBtn');
menuBtn?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.querySelector('use')?.setAttribute('href', open ? '#i-close' : '#i-menu');
});

window.addEventListener('hashchange', route);
window.addEventListener('scroll', handleHeaderScroll, { passive: true });
route();
