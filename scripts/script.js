/* GARBA JOSEPH PORTFOLIO - app logic. Content lives in data/content.js */
document.addEventListener('DOMContentLoaded', () => {
  const C = window.CONTENT, $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // 1. Clock (Jos time, whatever the visitor's timezone)
  const clock = $('#current-time');
  const fmt = new Intl.DateTimeFormat('en-NG', { hour: 'numeric', minute: '2-digit', timeZone: 'Africa/Lagos' });
  const tick = () => { clock.textContent = fmt.format(new Date()); setTimeout(tick, 60000 - Date.now() % 60000); };
  tick();

  // 2. Render content from data file
  $('#about-pro').innerHTML = C.about.professional.map(g => `
    <div class="glass-card"><h3 class="card-heading"><i class="fa-solid ${esc(g.icon)} text-brand"></i> ${esc(g.title)}</h3>
    <div class="chip-group">${g.items.map(i => `<span class="chip">${esc(i)}</span>`).join('')}</div></div>`).join('');
  const p = C.about.personal;
  $('#about-personal').innerHTML = `<div class="responsive-grid">
    <div class="glass-card"><h3 class="card-heading">My Story</h3><p class="story">${esc(p.story)}</p></div>
    <div class="glass-card"><h3 class="card-heading">Interests</h3><div class="pill-list">${p.interests.map(i => `<span class="chip">${esc(i)}</span>`).join('')}</div>
    <h3 class="card-heading" style="margin-top:16px">Values</h3><div class="pill-list">${p.values.map(i => `<span class="chip">${esc(i)}</span>`).join('')}</div></div></div>`;
  $('#projects-grid').innerHTML = C.projects.map((x, i) => `
    <article class="project-card"><div class="project-thumb"><div class="cover c-${esc(x.accent)}"><i class="fa-solid ${esc(x.icon)}"></i></div>
    <span class="project-tag tag-purple">${esc(x.tag)}</span></div>
    <div class="project-body"><h3>${esc(x.title)}</h3><p>${esc(x.desc)}</p>
    <div class="tech-tags">${x.stack.map(s => `<span>${esc(s)}</span>`).join('')}</div>
    <button class="btn-primary open-modal-btn" data-i="${i}">View Details</button></div></article>`).join('');
  const acts = [...C.activity].sort((a, b) => b.date.localeCompare(a.date));
  $('#activity-feed').innerHTML = acts.length ? acts.map(a => {
    const d = new Date(a.date + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    const tag = a.link ? 'a' : 'div', attrs = a.link ? ` href="${esc(a.link)}" target="_blank" rel="noopener"` : '';
    return `<${tag} class="glass-card post"${attrs}><div class="post-meta"><span class="post-type">${esc(a.type)}</span><span>${d}</span></div>
      <h3>${esc(a.title)}</h3><p>${esc(a.text)}</p>${a.link ? '<span class="more">Read more →</span>' : ''}</${tag}>`;
  }).join('') : '<p class="empty">Nothing here yet.</p>';
  $('#proj-meta').textContent = `${C.projects.length} Projects · ${acts.length} Updates`;
  $('#c-mail').href = 'mailto:' + C.site.email;
  $('#c-wa').href = 'https://wa.me/' + C.site.whatsapp;

  // 3. Segmented tabs (About + Projects)
  $$('[data-seg]').forEach(seg => {
    const btns = $$('button', seg), scope = seg.parentElement;
    const open = b => btns.forEach(x => {
      const on = x === b; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
      $(`[data-panel="${x.dataset.tab}"]`, scope).hidden = !on;
    });
    btns.forEach((b, i) => {
      b.addEventListener('click', () => open(b));
      b.addEventListener('keydown', e => {
        const n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (n) { const t = btns[(i + n + btns.length) % btns.length]; t.focus(); open(t); }
      });
    });
    open(btns[0]);
  });

  // 4. Page switching, swipe, hash routing
  const navs = $$('.nav-btn'), track = $('#pages-track'), ind = $('#nav-indicator'), pages = $$('.portfolio-page');
  const names = navs.map(b => b.dataset.page), total = navs.length;
  document.querySelector('.app-shell').style.setProperty('--pages', total);
  track.style.setProperty('--pages', total);
  let cur = 0;
  function go(i, push = true) {
    if (i < 0 || i >= total) return;
    cur = i;
    track.style.transform = `translateX(${-i * 100 / total}%)`;
    if (ind) ind.style.transform = `translateX(${i * 100}%)`;
    navs.forEach((b, k) => { b.classList.toggle('active', k === i); b.setAttribute('aria-selected', k === i); });
    pages.forEach((pg, k) => { pg.inert = k !== i; });   // off-screen pages can't be tabbed into
    pages[i].scrollTop = 0;
    document.title = (i ? names[i][0].toUpperCase() + names[i].slice(1) + ' | ' : '') + 'Garba Joseph';
    if (push) history.replaceState(null, '', '#' + names[i]);
  }
  navs.forEach(b => b.addEventListener('click', () => go(+b.dataset.index)));
  $$('[data-jump]').forEach(b => b.addEventListener('click', () => go(+b.dataset.jump)));
  addEventListener('hashchange', () => { const k = names.indexOf(location.hash.slice(1)); if (k > -1) go(k, false); });
  let sx = 0, sy = 0;
  const vp = $('#pages-viewport');
  vp.addEventListener('touchstart', e => { sx = e.changedTouches[0].screenX; sy = e.changedTouches[0].screenY; }, { passive: true });
  vp.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - sx, dy = e.changedTouches[0].screenY - sy;
    if (e.target.closest('.seg,.chip-group,.modal-backdrop')) return;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) go(cur + (dx < 0 ? 1 : -1));
  }, { passive: true });
  go(Math.max(0, names.indexOf(location.hash.slice(1))), false);

  // 5. Modal (Esc to close, focus returns to trigger)
  const modal = $('#project-modal'), box = $('#modal-content');
  let opener = null;
  $('#projects-grid').addEventListener('click', e => {
    const b = e.target.closest('.open-modal-btn'); if (!b) return;
    const x = C.projects[b.dataset.i]; opener = b;
    $('#modal-title').textContent = x.title; $('#modal-desc').textContent = x.desc;
    $('#modal-code').href = x.github; $('#modal-demo').href = x.demo;
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => { box.classList.add('visible'); $('#close-modal-btn').focus(); });
  });
  function closeModal() {
    box.classList.remove('visible');
    setTimeout(() => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); opener && opener.focus(); }, 200);
  }
  $('#close-modal-btn').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

  // 6. Contact form: opens a pre-filled email (no backend needed)
  const toast = $('#toast');
  $('#contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const n = $('#form-name').value, em = $('#form-email').value, m = $('#form-msg').value;
    location.href = `mailto:${C.site.email}?subject=${encodeURIComponent('Portfolio message from ' + n)}&body=${encodeURIComponent(m + '\n\n' + n + ' (' + em + ')')}`;
    $('#toast-text').textContent = 'Opening your email app…';
    toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3000);
    e.target.reset();
  });
});
