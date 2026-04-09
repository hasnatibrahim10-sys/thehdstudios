// ========== SPA ROUTER ==========

function getRoute() {
  const hash = window.location.hash || '#/';
  return hash.replace('#', '').replace('/', '') || 'home';
}

function updateActiveNav(route) {
  document.querySelectorAll('.nav-link-item').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href').replace('#/', '') || 'home';
    if (href === route) link.classList.add('active');
  });
}

function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('#app .reveal, #app .reveal-left').forEach(el => {
    observer.observe(el);
  });
}

function initCounters() {
  document.querySelectorAll('#app [data-count]').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'));
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current) + (el.getAttribute('data-count') === '98' ? '%' : '+');
    }, 30);
  });
}

function initTerminal() {
  const terminal = document.getElementById('terminalBody');
  const buildFill = document.getElementById('buildFill');
  const buildPct = document.getElementById('buildPct');
  if (!terminal) return;

  const lines = [
    { html: '<span class="t-prompt">❯</span> <span class="t-cmd">npm run build</span>', delay: 0 },
    { html: '<span class="t-cmt">// initializing THE HD STUDIOS...</span>', delay: 400 },
    { html: '<span class="t-kw">const</span> <span class="t-fn">studio</span> = {', delay: 750 },
    { html: '  <span class="t-str">name</span>: <span class="t-warn">"THE HD STUDIOS"</span>,', delay: 1100 },
    { html: '  <span class="t-str">services</span>: [<span class="t-warn">"ERP"</span>, <span class="t-warn">"Web"</span>, <span class="t-warn">"SMM"</span>],', delay: 1450 },
    { html: '  <span class="t-str">clients</span>: <span class="t-num">50</span>, <span class="t-str">rating</span>: <span class="t-num">5.0</span>', delay: 1800 },
    { html: '}', delay: 2100 },
    { html: '<span class="t-fn">deploy</span>(<span class="t-fn">studio</span>.<span class="t-str">build</span>())', delay: 2450 },
    { html: '<span class="t-ok">✔ Compiled successfully in 1.2s</span>', delay: 3200 },
    { html: '<span class="t-ok">✔ Assets optimized</span>', delay: 3600 },
    { html: '<span class="t-ok">✔ Deployed to production 🚀</span>', delay: 4000 },
  ];

  function runTerminal() {
    terminal.innerHTML = '';
    let pct = 0;
    if (buildFill) buildFill.style.width = '0%';
    if (buildPct) buildPct.textContent = '0%';
    const lbl = document.querySelector('.build-label');
    if (lbl) lbl.textContent = 'Building...';

    lines.forEach(({ html, delay }) => {
      setTimeout(() => {
        if (!document.getElementById('terminalBody')) return;
        const span = document.createElement('span');
        span.className = 't-line';
        span.innerHTML = html;
        terminal.appendChild(span);
        terminal.scrollTop = terminal.scrollHeight;
      }, delay);
    });

    setTimeout(() => {
      if (!document.getElementById('terminalBody')) return;
      const cur = document.createElement('span');
      cur.className = 't-line';
      cur.innerHTML = '<span class="t-prompt">❯</span> <span class="t-cursor"></span>';
      terminal.appendChild(cur);
    }, 4400);

    const bt = setInterval(() => {
      pct = Math.min(pct + Math.random() * 4 + 1, 100);
      const fill = document.getElementById('buildFill');
      const pctEl = document.getElementById('buildPct');
      if (fill) fill.style.width = pct + '%';
      if (pctEl) pctEl.textContent = Math.floor(pct) + '%';
      if (pct >= 100) {
        clearInterval(bt);
        if (pctEl) pctEl.textContent = '100%';
        const l = document.querySelector('.build-label');
        if (l) l.textContent = 'Build complete ✓';
      }
    }, 80);

    if (document.getElementById('terminalBody')) {
      setTimeout(runTerminal, 8000);
    }
  }

  runTerminal();
}

function initCursorHovers() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  document.querySelectorAll('#app a, #app button, #app .service-card, #app .testi-card, #app .service-detail-card, #app .portfolio-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'rgba(200,169,110,0.8)';
      dot.style.transform = 'translate(-50%,-50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(200,169,110,0.5)';
      dot.style.transform = 'translate(-50%,-50%) scale(1)';
    });
  });
}

function navigateTo(route) {
  const app = document.getElementById('app');
  
  // Fade out
  app.classList.add('fade-out');
  
  setTimeout(() => {
    // Get page content
    const pageFn = PAGES[route] || PAGES.home;
    app.innerHTML = pageFn();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Update nav
    updateActiveNav(route);
    
    // Fade in
    app.classList.remove('fade-out');
    app.classList.add('fade-in');
    
    // Init page features
    setTimeout(() => {
      initRevealAnimations();
      initCursorHovers();
      if (route === 'home') {
        initCounters();
        initTerminal();
      }
    }, 50);
    
    setTimeout(() => { app.classList.remove('fade-in'); }, 400);
  }, 350);
}

// Listen for hash changes
window.addEventListener('hashchange', () => {
  navigateTo(getRoute());
});
