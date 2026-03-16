/**
 * main.js — shared script for all pages
 * - Injects nav + footer
 * - Renders page-specific content from data.js
 * - Handles expandable sections (achievements page)
 * - Sorts experience by date (newest first)
 */

// ── Navigation ────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { path: 'index.html', name: 'home',         match: ['index.html', ''] },
  { path: 'about.html', name: 'about',        match: ['about.html'] },
  { path: 'projects.html', name: 'projects',  match: ['projects.html'] },
  { path: 'experience.html', name: 'experience', match: ['experience.html'] },
  { path: 'achievements.html', name: 'achievements', match: ['achievements.html'] },
  { path: 'publications.html', name: 'publications', match: ['publications.html'] },
];

function getCurrentPage() {
  const parts = window.location.pathname.split('/');
  return parts[parts.length - 1] || 'index.html';
}

function renderNav() {
  const current = getCurrentPage();
  const links = NAV_ITEMS.map(item => {
    const isActive = item.match.includes(current) ? ' active' : '';
    return `<a href="${item.path}" class="${isActive}">${item.name}</a>`;
  }).join('');

  return `
    <aside class="site-nav">
      <div>
        <nav id="nav">
          <div class="nav-links">${links}</div>
        </nav>
      </div>
    </aside>`;
}

// ── Arrow Icon SVG ────────────────────────────────────────────────────────────
function arrowIcon(cls = '') {
  return `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon${cls ? ' ' + cls : ''}">
    <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"/>
  </svg>`;
}

// ── Footer ────────────────────────────────────────────────────────────────────
function renderFooter() {
  const links = [
    { href: PERSONAL.linkedin, label: 'linkedin' },
    { href: PERSONAL.github,   label: 'github' },
    { href: PERSONAL.twitter,  label: 'twitter' },
    { href: PERSONAL.leetcode, label: 'leetcode' },
  ];

  const items = links.map(l => `
    <li>
      <a href="${l.href}" target="_blank" rel="noopener noreferrer">
        ${arrowIcon()}
        <p>${l.label}</p>
      </a>
    </li>`).join('');

  return `
    <footer class="site-footer">
      <ul>${items}</ul>
      <p class="copyright">© ${new Date().getFullYear()} MIT Licensed</p>
    </footer>`;
}

// ── Page content renderers ────────────────────────────────────────────────────

function renderHome() {
  return `
    <section>
      <h1 class="page-title" style="font-size:1.5rem;font-weight:600;letter-spacing:-0.05em;margin-bottom:2rem;">Hardik Thapar</h1>

      <div class="home-bio">
        <p>
          Hi there 👋 I'm <span class="name-strong">Hardik Thapar</span>, an AI/ML student building systems that actually work. Currently exploring voice pathology detection and LLM inference optimization.
        </p>
        <p>
          My approach is simple: <span class="accent">practical first, theory second</span>. I don't wait for perfect conditions. I learn by building, breaking things down, and shipping real projects—like creating
          <a href="projects.html">VocalWell</a>
          when I barely knew signal processing, or developing an LLM scheduling system in 24 hours at IIT Bombay.
        </p>
        <p>
          I take concepts, build real systems, and deploy them. That's how I've secured 8 national hackathon wins and earned recognitions like
          <span class="badge">AWS Scholar</span>,
          <span class="badge">McKinsey Fellow</span>, and
          <span class="badge">Harvard Aspire</span>.
        </p>
        <p class="home-bio-links">
          Explore my <a href="projects.html">projects</a>, deep-dive into the code on
          <a href="${PERSONAL.github}" target="_blank" rel="noopener noreferrer">GitHub</a>, or connect on
          <a href="${PERSONAL.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </div>

      <div class="highlights-section">
        <h2 class="highlights-title">Recent Highlights</h2>
        <ul class="highlights-list">
          <li>
            <span class="bullet-dot"></span>
            <span><strong>VocalWell:</strong> End-to-end voice pathology ML system. <span class="highlight-stat">12-15% accuracy boost</span> over baseline.</span>
          </li>
          <li>
            <span class="bullet-dot"></span>
            <span><strong>LLM Scheduling Assistant:</strong> Multi-agent LLaMA-3.1/DeepSeek-7B system. Built in 24 hours, National Finalist at IIT Bombay.</span>
          </li>
          <li>
            <span class="bullet-dot"></span>
            <span><strong>Swasthathon:</strong> 1st place in government-recognized national hackathon (part of my 8 hackathon wins).</span>
          </li>
          <li>
            <span class="bullet-dot"></span>
            <span><strong>GDG Leadership:</strong> Running practical AI/ML tooling workshops for 100+ students.</span>
          </li>
        </ul>
      </div>
    </section>`;
}

function renderAbout() {
  const eduHTML = EDUCATION.map(edu => `
    <div class="edu-item">
      <div class="edu-row">
        <span class="edu-degree">${edu.degree}</span>
        <span class="edu-date">${edu.date}</span>
      </div>
      <div class="edu-row">
        <span class="edu-institution">${edu.institution}</span>
        ${edu.gpa ? `<span class="edu-gpa">GPA: ${edu.gpa}</span>` : ''}
      </div>
      ${edu.note ? `<p class="edu-note">• ${edu.note}</p>` : ''}
    </div>`).join('');

  const skillRows = [
    { label: 'Languages',          values: SKILLS.languages },
    { label: 'AI & Machine Learning', values: SKILLS.aiml },
    { label: 'Engineering',        values: SKILLS.engineering },
    { label: 'Cloud',              values: SKILLS.cloud },
    { label: 'Core Concepts',      values: SKILLS.learning },
  ];

  const skillsHTML = skillRows.map(row => `
    <div class="skill-row">
      <span class="skill-label">${row.label}</span>
      <span class="skill-values">${row.values.join(', ')}</span>
    </div>`).join('');

  return `
    <section>
      <h1 class="page-title">About Me</h1>

      <div class="section-block">
        <h2 class="section-title">Education</h2>
        <div class="edu-list">${eduHTML}</div>
      </div>

      <div class="section-block">
        <h2 class="section-title">Skills</h2>
        <div class="skills-list">${skillsHTML}</div>
      </div>
    </section>`;
}

function renderProjects() {
  const items = PROJECTS.map(p => {
    const hasLink = p.link && p.link !== '#' && p.link !== '';
    const titleHTML = hasLink
      ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-link">${p.title} ${arrowIcon()}</a>`
      : `<span class="project-title-plain">${p.title}</span>`;
    return `
      <div class="project-item">
        ${titleHTML}
        <p class="project-desc">${p.description}</p>
      </div>`;
  }).join('');

  return `
    <section>
      <h1 class="page-title">Projects</h1>
      <div class="projects-list">${items}</div>
    </section>`;
}

// Date parsing logic ported from experience/page.tsx
function parseDates(dateStr) {
  if (!dateStr) return { end: 0, start: 0 };
  const parts = dateStr.split('–').map(s => s.trim().toLowerCase());
  const startStr = parts[0];
  const endStr = parts.length > 1 ? parts[1] : startStr;

  const getVal = (str) => {
    if (str === 'present') return new Date().getFullYear() + 100;
    const match = str.match(/\d{4}/);
    if (match) return parseInt(match[0]);
    const parsed = Date.parse(str);
    if (!isNaN(parsed)) return parsed;
    return 0;
  };

  return { start: getVal(startStr), end: getVal(endStr) };
}

function renderExperience() {
  const sorted = [...EXPERIENCE].sort((a, b) => {
    const dA = parseDates(a.date || '');
    const dB = parseDates(b.date || '');
    if (dA.end !== dB.end) return dB.end - dA.end;
    return dB.start - dA.start;
  });

  const items = sorted.map(item => `
    <div class="exp-item">
      <div class="exp-header">
        <div class="exp-meta">
          <span class="exp-title">${item.title}</span>
          ${item.company ? `<span class="exp-company">${item.company}</span>` : ''}
        </div>
        ${item.date ? `<span class="exp-date">${item.date}</span>` : ''}
      </div>
      ${item.description ? `<p class="exp-desc">${item.description}</p>` : ''}
    </div>`).join('');

  return `
    <section>
      <h1 class="page-title">Experience</h1>
      <div class="experience-list">${items}</div>
    </section>`;
}

// ── ExpandableSection (achievements page) ────────────────────────────────────
function buildExpandableSection(containerId, title, items) {
  const INITIAL = 3;
  let expanded = false;

  function renderItems(showAll) {
    const visible = showAll ? items : items.slice(0, INITIAL);
    return visible.map(item => `
      <div class="exp-section-item">
        <div class="exp-section-row">
          <span class="exp-section-item-title">${item.title}</span>
          ${item.date ? `<span class="exp-section-item-date">${item.date}</span>` : ''}
        </div>
        ${item.description ? `<p class="exp-section-item-desc">${item.description}</p>` : ''}
      </div>`).join('');
  }

  function update() {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.querySelector('.exp-section-items').innerHTML = renderItems(expanded);
    if (items.length > INITIAL) {
      container.querySelector('.expand-btn').textContent = expanded ? 'Show Less ↑' : 'Show More ↓';
    }
  }

  const hasMore = items.length > INITIAL;
  const html = `
    <div id="${containerId}" class="section-block">
      <h2 class="section-title">${title}</h2>
      <div class="exp-section-items">${renderItems(false)}</div>
      ${hasMore ? `<button class="expand-btn">Show More ↓</button>` : ''}
    </div>`;

  // Wire button after DOM settle
  setTimeout(() => {
    const btn = document.querySelector(`#${containerId} .expand-btn`);
    if (btn) {
      btn.addEventListener('click', () => {
        expanded = !expanded;
        update();
      });
    }
  }, 0);

  return html;
}

function renderAchievements() {
  return `
    <section>
      <h1 class="page-title">Achievements</h1>
      ${buildExpandableSection('honors-section', 'Honors &amp; Hackathons', HONORS)}
      ${buildExpandableSection('certs-section', 'Certifications &amp; Fellowships', CERTIFICATIONS)}
    </section>`;
}

function renderPublications() {
  const items = PUBLICATIONS.map(pub => {
    const hasLink = pub.link && pub.link !== '#' && pub.link !== '';
    const titleHTML = hasLink
      ? `<a href="${pub.link}" target="_blank" rel="noopener noreferrer" class="pub-link">${pub.title}</a>`
      : `<span class="pub-title-plain">${pub.title}</span>`;
    return `
      <div class="pub-item">
        <div class="pub-header">
          ${titleHTML}
          ${pub.date ? `<span class="pub-date">${pub.date}</span>` : ''}
        </div>
        ${pub.venue && pub.venue !== 'None' ? `<span class="pub-venue">${pub.venue}</span>` : ''}
        ${pub.description && pub.description !== 'None' ? `<p class="pub-desc">${pub.description}</p>` : ''}
      </div>`;
  }).join('');

  return `
    <section>
      <h1 class="page-title">Publications</h1>
      <div class="pub-list">${items}</div>
    </section>`;
}

// ── Page registry ─────────────────────────────────────────────────────────────
const PAGE_RENDERERS = {
  'index.html':        { render: renderHome,         title: 'Hardik Thapar' },
  '':                  { render: renderHome,         title: 'Hardik Thapar' },
  'about.html':        { render: renderAbout,        title: 'About | Hardik Thapar' },
  'projects.html':     { render: renderProjects,     title: 'Projects | Hardik Thapar' },
  'experience.html':   { render: renderExperience,   title: 'Experience | Hardik Thapar' },
  'achievements.html': { render: renderAchievements, title: 'Achievements | Hardik Thapar' },
  'publications.html': { render: renderPublications, title: 'Publications | Hardik Thapar' },
};

// ── Bootstrap ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = getCurrentPage();
  const conf = PAGE_RENDERERS[page] || PAGE_RENDERERS['index.html'];

  // Set title
  document.title = conf.title;

  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = renderNav();

  // Inject page content
  const contentPlaceholder = document.getElementById('page-content');
  if (contentPlaceholder) contentPlaceholder.innerHTML = conf.render();

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = renderFooter();
});
