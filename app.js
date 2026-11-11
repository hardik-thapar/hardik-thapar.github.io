/* Portfolio renderer. All content lives in data.json; this file only lays it out. */
(function () {
  'use strict';

  var esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var join = function (arr, fn) { return (arr || []).map(fn).join(''); };
  var ext = ' target="_blank" rel="noopener"';

  function fmtDate(iso) {
    if (!iso) return '';
    var d = new Date(iso + 'T00:00:00');
    if (isNaN(d)) return iso;
    return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit' }).toLowerCase();
  }

  /* ---------- shared ---------- */
  function renderMeta(m) {
    m = m || {};
    var r = $('[data-resume]');
    if (r && m.resume) r.href = m.resume;
    var n = $('[data-name]');
    if (n && m.name) n.textContent = m.name;
    var u = $('[data-foot-updated]');
    if (u && m.updated) u.textContent = 'updated ' + fmtDate(m.updated);
  }

  /* ---------- home ---------- */
  var SOCIAL = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    leetcode: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.48 0a1.37 1.37 0 0 0-.96.44L5.7 7.7l-1.47 1.5a4.87 4.87 0 0 0 0 6.84l5.47 5.5a4.78 4.78 0 0 0 6.82 0l3.7-3.72a1.37 1.37 0 0 0-1.94-1.95l-3.7 3.72a2.04 2.04 0 0 1-2.94 0L6.17 14.1a2.1 2.1 0 0 1 0-2.96l1.47-1.5 6.8-6.82L14.47.44A1.37 1.37 0 0 0 13.48 0Zm-2.4 9.64a1.37 1.37 0 1 0 0 2.74h10.77a1.37 1.37 0 1 0 0-2.74H11.08Z"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm1 2.6V18h18V6.6l-9 6.3-9-6.3ZM4.6 6l7.4 5.2L19.4 6H4.6Z"/></svg>'
  };

  function listItems(items) {
    return join(items, function (x) {
      return '<li>' + (x.url ? '<a href="' + esc(x.url) + '"' + ext + '>' + esc(x.label) + '</a>' : esc(x.label)) + '</li>';
    });
  }

  function renderHome(d) {
    var h = d.home || {};
    var wm = $('[data-wordmark]'); if (wm && h.wordmark) wm.textContent = h.wordmark;
    $('[data-home-title]').textContent = h.title || '';
    var txt = Array.isArray(h.text) ? h.text : [h.text || ''];
    $('[data-home-text]').innerHTML = join(txt, function (t) { return '<p class="lead__text">' + esc(t) + '</p>'; });

    $('[data-col-projects]').innerHTML = join(d.projects, function (p) {
      return '<li>' + (p.url ? '<a href="' + esc(p.url) + '"' + ext + '>' + esc(p.name) + '</a>' : esc(p.name)) + '</li>';
    });

    $('[data-col-writeups]').innerHTML = join(d.writeups, function (w) {
      return '<li>' + (w.url ? '<a href="' + esc(w.url) + '"' + ext + '>' + esc(w.title) + '</a>' : esc(w.title)) + '</li>';
    }) || '<li class="col__more">Coming soon</li>';

    $('[data-col-recognition]').innerHTML = listItems(h.recognition);

    $('[data-socials]').innerHTML = join(d.links, function (l) {
      var key = (l.label || '').toLowerCase();
      var isMail = /^mailto:/.test(l.url || '');
      return '<li><a href="' + esc(l.url) + '"' + (isMail ? '' : ext) + ' aria-label="' + esc(l.label) + '" title="' + esc(l.label) + '">' + (SOCIAL[key] || SOCIAL.email) + '</a></li>';
    }) + (h.cv ? '<li><a class="socials__cv" href="' + esc(h.cv.url) + '"' + ext + '>' + esc(h.cv.label) + '</a></li>' : '');
  }

  /* ---------- boot ---------- */
  fetch('data.json', { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw new Error('data.json ' + r.status); return r.json(); })
    .then(function (d) {
      renderMeta(d.meta);
      renderHome(d);
      requestAnimationFrame(function () { document.documentElement.classList.add('is-ready'); });
    })
    .catch(function (err) {
      console.error(err);
      $('[data-home-title]').textContent = 'Could not load data.json. Serve this folder over HTTP (python3 -m http.server).';
      document.documentElement.classList.add('is-ready');
    });
})();
