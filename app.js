// ========== APP INITIALIZATION ==========

// ===== INTRO ANIMATION =====
window.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('intro-overlay');
  const page = document.getElementById('page-content');
  const progress = document.getElementById('introProgress');

  function showPage() {
    overlay.style.display = 'none';
    page.classList.add('visible');
    navigateTo(getRoute());
  }

  const safetyTimer = setTimeout(showPage, 5000);

  setTimeout(() => {
    overlay.classList.add('active');
    if (progress) progress.style.width = '100%';
  }, 100);

  setTimeout(() => {
    overlay.classList.add('exit');
    setTimeout(() => {
      clearTimeout(safetyTimer);
      showPage();
    }, 1000);
  }, 2600);
});

// ===== CUSTOM CURSOR =====
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (dot) {
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  }
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  if (ring) {
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
  }
  requestAnimationFrame(animateRing);
}
animateRing();

// Global cursor hovers
function initCursorHovers() {
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (ring) { ring.style.transform = 'translate(-50%,-50%) scale(1.6)'; ring.style.borderColor = 'rgba(200,169,110,0.8)'; }
      if (dot) dot.style.transform = 'translate(-50%,-50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      if (ring) { ring.style.transform = 'translate(-50%,-50%) scale(1)'; ring.style.borderColor = 'rgba(200,169,110,0.5)'; }
      if (dot) dot.style.transform = 'translate(-50%,-50%) scale(1)';
    });
  });
}

// ===== NAV SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
  
  updateReveals();
});

// ===== REVEAL ON SCROLL =====
function updateReveals() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left');
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 120;
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add('visible');
    }
  });
}

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

// ===== TECH TERMINAL ANIMATION =====
function initTerminal() {
  const terminal = document.getElementById('terminalBody');
  const buildFill = document.getElementById('buildFill');
  const buildPct = document.getElementById('buildPct');
  if (!terminal) return;

  const lines = [
    { text: '[SYSTEM] Initializing HD-Studios Engine v4.0...', color: 't-kw' },
    { text: '[AUTH] Authenticating session hash: 0x82f...91c', color: 't-cmt' },
    { text: '[CORE] Loading services: Software, Web, Mobile...', color: 't-fn' },
    { text: '[DEV] Compiling tech-stack modules...', color: 't-fn' },
    { text: '>> GET /api/v1/transformation', color: 't-cmd' },
    { text: 'STATUS: 200 OK', color: 't-ok' },
    { text: 'Loading: Custom_Software_Module.js', color: 't-str' },
    { text: 'Loading: AI_Optimization_Engine.bin', color: 't-str' },
    { text: 'Loading: Shopify_Fluid_Theme.liquid', color: 't-str' },
    { text: '[SUCCESS] Deployment complete.', color: 't-ok' },
    { text: '[READY] Studio is live and waiting for input...', color: 't-kw' }
  ];

  let i = 0;
  terminal.innerHTML = '';
  
  function typeLine() {
    if (i < lines.length) {
      const line = document.createElement('div');
      line.className = `t-line ${lines[i].color}`;
      line.innerText = lines[i].text;
      terminal.appendChild(line);
      terminal.scrollTop = terminal.scrollHeight;
      
      // Update browser-skeleton mock
      if (buildFill && buildPct) {
        let pct = Math.floor((i + 1) / lines.length * 100);
        buildFill.style.width = pct + '%';
        buildPct.innerText = pct + '%';
      }
      
      i++;
      setTimeout(typeLine, 400 + Math.random() * 600);
    } else {
      setTimeout(() => { i = 0; terminal.innerHTML = ''; typeLine(); }, 4000);
    }
  }
  
  typeLine();
}

// Export for router use
window.initPageScripts = () => {
  initCursorHovers();
  updateReveals();
  initTerminal();
};
