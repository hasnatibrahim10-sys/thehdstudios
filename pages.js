// ========== ALL PAGE CONTENT ==========
// Modern SVG Icons (Lucide style - stroke-based, clean, modern)
const ICONS = {
  software: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/><path d="M7 10l3 3 7-7"/></svg>`,
  web: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  mobile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
  social: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2z"/><path d="M9 13h6"/><path d="M9 17h3"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>`,
  shopify: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  monitor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  arrow: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  // New specific icons
  speed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  design: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 20 20"/></svg>`,
  stack: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/><path d="m12 2 10 5-10 5-10-5 10-5z"/></svg>`,
  retention: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  results: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
};

const PAGES = {};

// ===== HOME PAGE =====
PAGES.home = () => `
<section class="hero">
  <div class="hero-left">
    <div class="hero-tag">Digital Transformation Studio</div>
    <h1 class="hero-title">We Build<br/>What <em>Matters</em><br/>Most.</h1>
    <p class="hero-sub">From social media strategy to custom ERP systems — we engineer digital solutions that scale your business and simplify complexity.</p>
    <div class="hero-actions">
      <a href="#/contact" class="btn-primary" data-link><span>Start a Project</span></a>
      <a href="#/services" class="btn-ghost" data-link>Explore Services ${ICONS.arrow}</a>
    </div>
    <div class="hero-stats">
      <div><div class="stat-num" data-count="50">0</div><div class="stat-label">Projects Done</div></div>
      <div><div class="stat-num" data-count="98">0</div><div class="stat-label">Client Retention</div></div>
      <div><div class="stat-num">5★</div><div class="stat-label">Avg. Rating</div></div>
    </div>
  </div>
  <div class="hero-right">
    <div class="grid-bg"></div>
    <div class="hero-visual">
      <div class="code-terminal-wrap">
        <div class="code-terminal"><div class="terminal-bar"><div class="terminal-dots"><span class="t-dot t-red"></span><span class="t-dot t-yellow"></span><span class="t-dot t-green"></span></div><div class="terminal-title">hd-studios — build.js</div><div class="terminal-tag">● live</div></div><div class="terminal-body" id="terminalBody"></div></div>
        <div class="code-browser"><div class="browser-bar"><div class="browser-dots"><span class="t-dot t-red"></span><span class="t-dot t-yellow"></span><span class="t-dot t-green"></span></div><div class="browser-url"><span class="url-lock">🔒</span><span>thehdstudios.com</span></div></div><div class="browser-body"><div class="browser-skeleton"><div class="sk-nav"></div><div class="sk-hero"><div class="sk-h1"></div><div class="sk-h2"></div><div class="sk-btn"></div></div><div class="sk-cards"><div class="sk-card c1"></div><div class="sk-card c2"></div><div class="sk-card c3"></div></div></div><div class="build-progress-wrap"><div class="build-label">Building...</div><div class="build-bar"><div class="build-fill" id="buildFill"></div></div><div class="build-pct" id="buildPct">0%</div></div></div></div>
      </div>
      <div class="float-card float-card-1"><div class="card-icon">${ICONS.chart}</div><div class="card-title">Social Reach</div><div class="card-value">↑ 340% this month</div></div>
      <div class="float-card float-card-2"><div class="card-icon">${ICONS.monitor}</div><div class="card-title">ERP System</div><div class="card-value">Live & Deployed ✓</div></div>
      <div class="float-card float-card-3"><div class="card-icon">${ICONS.clock}</div><div class="card-title">Delivery Time</div><div class="card-value">Avg. 14 days</div></div>
    </div>
    <div class="ticker"><div class="ticker-inner">
      <div class="ticker-item"><span class="ticker-dot"></span> Custom Software</div><div class="ticker-item"><span class="ticker-dot"></span> Web Development</div><div class="ticker-item"><span class="ticker-dot"></span> Mobile App Development</div><div class="ticker-item"><span class="ticker-dot"></span> Social Media</div><div class="ticker-item"><span class="ticker-dot"></span> Shopify Solutions</div><div class="ticker-item"><span class="ticker-dot"></span> Custom Software</div><div class="ticker-item"><span class="ticker-dot"></span> Web Development</div><div class="ticker-item"><span class="ticker-dot"></span> Mobile App Development</div><div class="ticker-item"><span class="ticker-dot"></span> Social Media</div><div class="ticker-item"><span class="ticker-dot"></span> Shopify Solutions</div>
    </div></div>
  </div>
</section>

<!-- SERVICES PREVIEW - Only 3 -->
<section class="home-services reveal">
  <div class="section-header">
    <div><div class="section-tag">What We Do</div><h2 class="section-title">Services Built for Growth</h2></div>
    <a href="#/services" class="section-link" data-link>View all services ${ICONS.arrow}</a>
  </div>
  <div class="services-grid" style="grid-template-columns: repeat(3, 1fr);">
    <div class="service-card"><div class="service-num">01</div><div class="service-icon">${ICONS.software}</div><div class="service-name">Custom Software Development</div><div class="service-desc">Custom CRM, ERP systems, lab management software, and internal business tools — built to replace complexity with efficiency.</div><a href="#/services" class="service-arrow" data-link>Learn more →</a></div>
    <div class="service-card"><div class="service-num">02</div><div class="service-icon">${ICONS.web}</div><div class="service-name">Web Development</div><div class="service-desc">Custom websites & web apps built with modern tech stacks — fast, responsive, and conversion-optimized for growth.</div><a href="#/services" class="service-arrow" data-link>Learn more →</a></div>
    <div class="service-card"><div class="service-num">03</div><div class="service-icon">${ICONS.mobile}</div><div class="service-name">Mobile App Development</div><div class="service-desc">Native and cross-platform mobile apps for Android & iOS with clean UI, smooth performance, and scalable backends.</div><a href="#/services" class="service-arrow" data-link>Learn more →</a></div>
  </div>
</section>

<!-- WHY CHOOSE US -->
<section class="why-us">
  <div class="why-us-bg">WHY HD</div>
  <div class="section-header reveal"><div><div class="section-tag">Why Choose Us</div><h2 class="section-title">What Makes Us Different</h2></div></div>
  <div class="why-grid">
    <div class="why-card reveal"><div class="why-card-icon">${ICONS.speed}</div><div class="why-card-num">01</div><div class="why-card-title">Speed That Wins</div><div class="why-card-desc">We don't just meet deadlines — we beat them. Average project delivery in 14 days, not months.</div></div>
    <div class="why-card reveal"><div class="why-card-icon">${ICONS.design}</div><div class="why-card-num">02</div><div class="why-card-title">Pixel-Perfect Design</div><div class="why-card-desc">Every interface we build is crafted with obsessive attention to detail. Your brand deserves nothing less.</div></div>
    <div class="why-card reveal"><div class="why-card-icon">${ICONS.stack}</div><div class="why-card-num">03</div><div class="why-card-title">Full-Stack Power</div><div class="why-card-desc">From frontend to backend, from mobile to cloud — we handle the entire tech stack so you don't have to.</div></div>
    <div class="why-card reveal"><div class="why-card-icon">${ICONS.retention}</div><div class="why-card-num">04</div><div class="why-card-title">98% Retention Rate</div><div class="why-card-desc">Our clients don't leave. They come back with bigger projects because we deliver real, measurable results.</div></div>
  </div>
</section>

<!-- FEATURED WORK SHOWCASE -->
<section class="home-work">
  <div class="section-header reveal">
    <div><div class="section-tag">Featured Work</div><h2 class="section-title">Projects That Delivered Results</h2></div>
    <a href="#/work" class="section-link" data-link>View all projects ${ICONS.arrow}</a>
  </div>
  <div class="showcase-grid">
    <div class="showcase-card featured reveal">
      <div class="showcase-img"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="CRM Software Dashboard" loading="lazy"/><div class="showcase-img-overlay"><span class="showcase-badge">Featured</span><span class="showcase-badge dark">Software</span></div></div>
      <div class="showcase-body">
        <div class="showcase-cat">Enterprise Software</div>
        <div class="showcase-title">Enterprise CRM System — Built from Scratch</div>
        <div class="showcase-desc">Built a complete multi-tenant CRM platform with role-based access, lead management, deal pipelines, email integration, and real-time analytics dashboard.</div>
        <div class="showcase-tags"><span class="showcase-tag">Next.js</span><span class="showcase-tag">Node.js</span><span class="showcase-tag">PostgreSQL</span><span class="showcase-tag">Real-time</span></div>
        <div class="showcase-result"><div class="showcase-result-icon">${ICONS.results}</div><div><div class="showcase-result-text">10x Operational Efficiency</div><div class="showcase-result-sub">Client reduced 3 tools to 1 unified platform</div></div></div>
      </div>
    </div>
    <div class="showcase-card reveal">
      <div class="showcase-img"><img src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80" alt="Professional Website Design" loading="lazy"/><div class="showcase-img-overlay"><span class="showcase-badge">Delivered</span></div></div>
      <div class="showcase-body">
        <div class="showcase-cat">Web Development</div>
        <div class="showcase-title">Premium Corporate Website</div>
        <div class="showcase-desc">Stunning professional website — fully responsive, SEO-optimized, with smooth animations and custom cursor effects.</div>
        <div class="showcase-tags"><span class="showcase-tag">HTML/CSS/JS</span><span class="showcase-tag">Responsive</span><span class="showcase-tag">SEO</span></div>
        <div class="showcase-result"><div class="showcase-result-icon">${ICONS.web}</div><div><div class="showcase-result-text">Brand Authority Established</div><div class="showcase-result-sub">Professional online presence from day one</div></div></div>
      </div>
    </div>
    <div class="showcase-card reveal">
      <div class="showcase-img"><img src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&q=80" alt="Mobile App Development" loading="lazy"/><div class="showcase-img-overlay"><span class="showcase-badge">Live</span></div></div>
      <div class="showcase-body">
        <div class="showcase-cat">Mobile App</div>
        <div class="showcase-title">Custom Mobile Application</div>
        <div class="showcase-desc">Cross-platform mobile app with push notifications, real-time updates, secure payments, built for iOS & Android.</div>
        <div class="showcase-tags"><span class="showcase-tag">React Native</span><span class="showcase-tag">Firebase</span><span class="showcase-tag">APIs</span></div>
        <div class="showcase-result"><div class="showcase-result-icon">${ICONS.mobile}</div><div><div class="showcase-result-text">Deployed to App Stores</div><div class="showcase-result-sub">Live on Google Play & Apple App Store</div></div></div>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="home-testi">
  <div class="section-header reveal"><div><div class="section-tag">Testimonials</div><h2 class="section-title">What Clients Say</h2></div></div>
  <div class="testi-grid" style="margin-top: 56px;">
    <div class="testi-card reveal"><div class="testi-quote">"</div><div class="testi-text">Their social media team transformed our brand from zero to 50k followers in 6 months. Every post, every campaign — perfectly aligned with our vision.</div><div class="testi-author"><div class="testi-avatar">AR</div><div><div class="testi-name">Ahmed Raza</div><div class="testi-role">CEO, StyleHouse PK</div></div></div></div>
    <div class="testi-card reveal"><div class="testi-quote">"</div><div class="testi-text">The CRM they built replaced 3 different software tools we were using. Our operations are 10x more efficient and the team is always available for support.</div><div class="testi-author"><div class="testi-avatar">SF</div><div><div class="testi-name">Sara Farooq</div><div class="testi-role">Operations Head, MediPlus</div></div></div></div>
    <div class="testi-card reveal"><div class="testi-quote">"</div><div class="testi-text">Our Shopify store went from generic to stunning. Revenue doubled in the first quarter after launch. These guys know what they're doing.</div><div class="testi-author"><div class="testi-avatar">ZK</div><div><div class="testi-name">Zain Khan</div><div class="testi-role">Founder, NovaBrand</div></div></div></div>
  </div>
  <div class="testi-marquee-row"><div class="testi-marquee-inner"><div class="testi-marquee-item"><span>★</span> StyleHouse PK</div><div class="testi-marquee-item"><span>★</span> MediPlus</div><div class="testi-marquee-item"><span>★</span> NovaBrand</div><div class="testi-marquee-item"><span>★</span> Aesthetic Clinic</div><div class="testi-marquee-item"><span>★</span> TechFlow Inc</div><div class="testi-marquee-item"><span>★</span> UrbanCart</div><div class="testi-marquee-item"><span>★</span> StyleHouse PK</div><div class="testi-marquee-item"><span>★</span> MediPlus</div><div class="testi-marquee-item"><span>★</span> NovaBrand</div><div class="testi-marquee-item"><span>★</span> Aesthetic Clinic</div><div class="testi-marquee-item"><span>★</span> TechFlow Inc</div><div class="testi-marquee-item"><span>★</span> UrbanCart</div></div></div>
</section>

<!-- CTA BANNER -->
<section class="home-cta-banner reveal">
  <div class="home-cta-bg">LET'S GO</div>
  <h2 class="cta-heading">Ready to Build<br/>Something Amazing?</h2>
  <p class="cta-desc">Let's turn your vision into reality. Get a free consultation and project quote within 24 hours.</p>
  <a href="#/contact" class="btn-dark" data-link>Start Your Project →</a>
</section>
`;

// ===== SERVICES PAGE (5 services only) =====
PAGES.services = () => `
<div class="services-page">
  <div class="page-hero reveal">
    <div class="section-tag">What We Do</div>
    <h1 class="section-title">Services Built<br/>for Growth</h1>
    <p class="page-hero-sub">We don't just build — we engineer digital solutions that transform how your business operates, connects, and grows.</p>
  </div>

  <div class="service-detail-grid">
    <div class="service-detail-card reveal">
      <div class="sdc-num">01</div>
      <div class="sdc-icon">${ICONS.software}</div>
      <div class="sdc-title">Custom Software Development</div>
      <div class="sdc-desc">Custom CRM systems, ERP platforms, lab management software, and internal business tools. We build software that replaces complexity with efficiency.</div>
      <ul class="sdc-features">
        <li>Custom CRM & ERP Systems</li>
        <li>Lab Management Software</li>
        <li>Internal Business Tools</li>
        <li>API Development & Integration</li>
        <li>Automation & Workflows</li>
      </ul>
      <div class="sdc-cta"><a href="#/contact" class="btn-primary" data-link><span>Get Started</span></a></div>
    </div>

    <div class="service-detail-card reveal">
      <div class="sdc-num">02</div>
      <div class="sdc-icon">${ICONS.web}</div>
      <div class="sdc-title">Web Development</div>
      <div class="sdc-desc">Custom websites and web applications built with modern technology. Fast, responsive, and designed to convert visitors into clients.</div>
      <ul class="sdc-features">
        <li>Custom Website Design</li>
        <li>Landing Pages & Funnels</li>
        <li>Full-Stack Web Applications</li>
        <li>SEO Optimization</li>
        <li>Performance & Speed Tuning</li>
      </ul>
      <div class="sdc-cta"><a href="#/contact" class="btn-primary" data-link><span>Get Started</span></a></div>
    </div>

    <div class="service-detail-card reveal">
      <div class="sdc-num">03</div>
      <div class="sdc-icon">${ICONS.mobile}</div>
      <div class="sdc-title">Mobile App Development</div>
      <div class="sdc-desc">Native and cross-platform mobile apps for Android & iOS. Clean UI, smooth performance, and scalable backend integration.</div>
      <ul class="sdc-features">
        <li>Android & iOS Development</li>
        <li>React Native / Flutter</li>
        <li>API Integration</li>
        <li>Push Notifications</li>
        <li>App Store Deployment</li>
      </ul>
      <div class="sdc-cta"><a href="#/contact" class="btn-primary" data-link><span>Get Started</span></a></div>
    </div>

    <div class="service-detail-card reveal">
      <div class="sdc-num">04</div>
      <div class="sdc-icon">${ICONS.social}</div>
      <div class="sdc-title">Social Media Management</div>
      <div class="sdc-desc">Complete social media strategy and execution. We don't just post — we build communities, drive engagement, and turn followers into customers.</div>
      <ul class="sdc-features">
        <li>Content Strategy & Calendar</li>
        <li>Graphic Design & Video Content</li>
        <li>Community Management</li>
        <li>Analytics & Performance Reports</li>
        <li>Paid Ad Campaign Management</li>
      </ul>
      <div class="sdc-cta"><a href="#/contact" class="btn-primary" data-link><span>Get Started</span></a></div>
    </div>

    <div class="service-detail-card reveal">
      <div class="sdc-num">05</div>
      <div class="sdc-icon">${ICONS.shopify}</div>
      <div class="sdc-title">Shopify Store Solutions</div>
      <div class="sdc-desc">End-to-end Shopify development. Custom themes, app integrations, and performance optimization for maximum conversions.</div>
      <ul class="sdc-features">
        <li>Custom Shopify Themes</li>
        <li>App Integration</li>
        <li>Payment Gateway Setup</li>
        <li>Conversion Optimization</li>
        <li>Inventory Management</li>
      </ul>
      <div class="sdc-cta"><a href="#/contact" class="btn-primary" data-link><span>Get Started</span></a></div>
    </div>

    <div class="service-detail-card reveal" style="background: var(--gray-900); border-color: var(--gray-900);">
      <div class="sdc-num" style="color: rgba(255,255,255,0.1);">∞</div>
      <div class="sdc-title" style="color: var(--white); font-size: 28px;">Ready to build<br/>something great?</div>
      <div class="sdc-desc" style="color: rgba(255,255,255,0.4);">Tell us about your project and get a free consultation. No fluff, just results.</div>
      <div class="sdc-cta"><a href="#/contact" class="btn-primary" data-link style="background: var(--gold); border-color: var(--gold); color: var(--gray-900);"><span>Start Now →</span></a></div>
    </div>
  </div>

  <div class="process-section reveal">
    <div class="section-tag">Our Process</div>
    <h2 class="section-title">How We Work</h2>
    <div class="process-grid">
      <div class="process-step"><div class="process-step-num">01</div><div class="process-step-title">Discovery</div><div class="process-step-desc">We listen, understand your goals, and map out the perfect strategy for your project.</div></div>
      <div class="process-step"><div class="process-step-num">02</div><div class="process-step-title">Design</div><div class="process-step-desc">Wireframes, prototypes, and visual design that aligns with your brand identity.</div></div>
      <div class="process-step"><div class="process-step-num">03</div><div class="process-step-title">Develop</div><div class="process-step-desc">Clean code, modern tech stack, and rigorous testing for a flawless product.</div></div>
      <div class="process-step"><div class="process-step-num">04</div><div class="process-step-title">Deploy</div><div class="process-step-desc">Launch, monitor, and optimize. We stay with you even after delivery.</div></div>
    </div>
  </div>
</div>
`;

// ===== ABOUT PAGE =====
PAGES.about = () => `
<div class="about-page">
  <div class="page-hero">
    <div class="about-bg-text">About</div>
    <div class="about-grid">
      <div class="about-left reveal-left">
        <div class="section-tag">Our Story</div>
        <h1 class="section-title">Built from Passion.<br/>Driven by Results.</h1>
        <p class="about-story"><strong>THE HD STUDIOS</strong> was founded in 2024 by <strong>Hasnat Ibrahim</strong> — a young digital entrepreneur with a singular vision: to build a studio that doesn't just deliver services, but delivers <strong>transformation</strong>.</p>
        <p class="about-story">What started as a solo operation quickly became a force in the digital space. Hasnat built THE HD STUDIOS from the ground up — no shortcuts, just relentless dedication to craft. Every client project is treated as if it were his own business, with the same level of urgency, creativity, and precision.</p>
        <p class="about-story">From social media strategies that turned brands into communities, to complex ERP systems that replaced entire operational teams — THE HD STUDIOS punches far above its weight. Because great work doesn't require a big team. It requires the right mindset.</p>
        <div class="about-founder-card">
          <div class="founder-avatar">HI</div>
          <div>
            <div class="founder-name">Hasnat Ibrahim</div>
            <div class="founder-title">Founder & Creative Director</div>
            <div class="founder-bio">Solo founder. Full-stack digital strategist. The person behind every project at THE HD STUDIOS.</div>
          </div>
        </div>
      </div>
      <div class="about-right reveal">
        <div class="about-img-card"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=85" alt="Digital Strategy" loading="lazy"/><div class="about-img-label">Strategy</div></div>
        <div class="about-img-card"><img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=85" alt="Execution Studio" loading="lazy"/><div class="about-img-label">Execution</div></div>
        <div class="about-img-card"><img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=85" alt="Creative Work" loading="lazy"/><div class="about-img-label">Creativity</div></div>
        <div class="about-img-card"><img src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&q=85" alt="Business Growth" loading="lazy"/><div class="about-img-label">Growth</div></div>
      </div>
    </div>
  </div>

  <section class="milestones">
    <div class="section-header reveal"><div><div class="section-tag">By The Numbers</div><h2 class="section-title">What We've Achieved</h2></div></div>
    <div class="milestones-grid">
      <div class="milestone-item reveal"><div class="milestone-num">50<span>+</span></div><div class="milestone-label">Projects Delivered</div><div class="milestone-desc">From small businesses to enterprise-level software, every project shipped on time.</div></div>
      <div class="milestone-item reveal"><div class="milestone-num">1<span>yr</span></div><div class="milestone-label">In Operation</div><div class="milestone-desc">Founded in 2024, growing fast and building a legacy one client at a time.</div></div>
      <div class="milestone-item reveal"><div class="milestone-num">98<span>%</span></div><div class="milestone-label">Client Retention</div><div class="milestone-desc">Clients don't just come once — they keep coming back. That's the real proof.</div></div>
      <div class="milestone-item reveal"><div class="milestone-num">5<span>★</span></div><div class="milestone-label">Average Rating</div><div class="milestone-desc">Perfect ratings across every engagement. Quality is non-negotiable here.</div></div>
    </div>
  </section>

  <div class="mission-strip reveal">
    <div><div class="mission-label">Our Mission</div><div class="mission-text">To make world-class digital work accessible to every ambitious business.</div></div>
    <div class="mission-right">We believe that great design, smart strategy, and powerful technology shouldn't be reserved for big corporations. THE HD STUDIOS exists to give growing brands, startups, and entrepreneurs the unfair advantage they deserve — through work that actually moves the needle.</div>
  </div>

  <section class="values-section">
    <div class="section-header reveal"><div><div class="section-tag">What Drives Us</div><h2 class="section-title">Our Core Values</h2></div></div>
    <div class="values-grid">
      <div class="value-card reveal"><div class="value-card-icon">${ICONS.speed}</div><div class="value-card-title">Speed & Precision</div><div class="value-card-desc">We move fast without cutting corners. Every pixel, every line of code is intentional.</div></div>
      <div class="value-card reveal"><div class="value-card-icon">${ICONS.results}</div><div class="value-card-title">Results First</div><div class="value-card-desc">We don't measure success by deliverables. We measure it by the impact on your business.</div></div>
      <div class="value-card reveal"><div class="value-card-icon">${ICONS.retention}</div><div class="value-card-title">Client Partnership</div><div class="value-card-desc">We treat every project as our own. Your success is our reputation.</div></div>
    </div>
  </section>
</div>
`;

// ===== WORK PAGE =====
PAGES.work = () => `
<div class="work-page">
  <div class="page-hero">
    <div class="testi-bg-text">Portfolio</div>
    <div class="section-tag reveal">Our Work</div>
    <h1 class="section-title reveal" style="max-width:600px; margin:0 auto;">Projects That<br/>Speak for Themselves</h1>
    <p class="page-hero-sub reveal">Real results. Real impact. Here's what we've built and delivered to our clients.</p>
  </div>

  <!-- CASE STUDY 1: CRM SOFTWARE -->
  <section class="portfolio-section" style="background: var(--white);">
    <div class="section-header reveal"><div><div class="section-tag">Case Study #1</div><h2 class="section-title">Enterprise CRM Software</h2></div></div>
    <div class="case-study-card reveal">
      <div class="case-study-img"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="CRM Dashboard Analytics" loading="lazy"/></div>
      <div class="case-study-body">
        <div class="case-study-label">Custom Software Development</div>
        <div class="case-study-title">Multi-Tenant CRM Platform — Built from Ground Up</div>
        <div class="case-study-desc">We built a complete enterprise-grade CRM system from scratch. The platform includes lead management, deal pipelines, email integration with tracking, real-time analytics dashboard, role-based access control, and a Super Admin panel for managing multiple client organizations.</div>
        <div class="showcase-tags"><span class="showcase-tag">Next.js</span><span class="showcase-tag">Node.js</span><span class="showcase-tag">PostgreSQL</span><span class="showcase-tag">WebSocket</span><span class="showcase-tag">REST API</span></div>
        <div class="case-study-stats">
          <div><div class="cs-stat-num">10x</div><div class="cs-stat-label">Efficiency Gain</div></div>
          <div><div class="cs-stat-num">3→1</div><div class="cs-stat-label">Tools Replaced</div></div>
          <div><div class="cs-stat-num">100%</div><div class="cs-stat-label">Data Isolation</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- CASE STUDY 2: PROFESSIONAL WEBSITE -->
  <section class="portfolio-section">
    <div class="section-header reveal"><div><div class="section-tag">Case Study #2</div><h2 class="section-title">Professional Company Website</h2></div></div>
    <div class="case-study-card reveal" style="direction: rtl;">
      <div class="case-study-body" style="direction: ltr;">
        <div class="case-study-label">Web Development</div>
        <div class="case-study-title">Premium Corporate Website — Complete Brand Identity</div>
        <div class="case-study-desc">Designed and delivered a high-impact professional website for a client's company. Ultra-modern design with smooth animations, responsive on every device, SEO optimized, and lightning-fast performance.</div>
        <div class="showcase-tags"><span class="showcase-tag">HTML5/CSS3</span><span class="showcase-tag">JavaScript</span><span class="showcase-tag">Animations</span><span class="showcase-tag">SEO</span><span class="showcase-tag">Responsive</span></div>
        <div class="case-study-stats">
          <div><div class="cs-stat-num">2wk</div><div class="cs-stat-label">Delivery Time</div></div>
          <div><div class="cs-stat-num">95+</div><div class="cs-stat-label">Speed Score</div></div>
          <div><div class="cs-stat-num">5★</div><div class="cs-stat-label">Client Rating</div></div>
        </div>
      </div>
      <div class="case-study-img" style="direction: ltr;"><img src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80" alt="Professional Website on Screen" loading="lazy"/></div>
    </div>
  </section>

  <!-- CASE STUDY 3: MOBILE APP -->
  <section class="portfolio-section" style="background: var(--white);">
    <div class="section-header reveal"><div><div class="section-tag">Case Study #3</div><h2 class="section-title">Custom Mobile Application</h2></div></div>
    <div class="case-study-card reveal">
      <div class="case-study-img"><img src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&q=80" alt="Mobile App on Smartphone" loading="lazy"/></div>
      <div class="case-study-body">
        <div class="case-study-label">Mobile App Development</div>
        <div class="case-study-title">Cross-Platform Mobile App — Android & iOS</div>
        <div class="case-study-desc">Developed and launched a fully-featured mobile application for a client's company. The app features real-time notifications, secure payment gateway integration, intuitive UI/UX, and was deployed to both Google Play Store and Apple App Store.</div>
        <div class="showcase-tags"><span class="showcase-tag">React Native</span><span class="showcase-tag">Firebase</span><span class="showcase-tag">Payment Gateway</span><span class="showcase-tag">Push Notifications</span></div>
        <div class="case-study-stats">
          <div><div class="cs-stat-num">2</div><div class="cs-stat-label">Platforms</div></div>
          <div><div class="cs-stat-num">4.8★</div><div class="cs-stat-label">App Rating</div></div>
          <div><div class="cs-stat-num">Live</div><div class="cs-stat-label">In Production</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- CASE STUDY 4: SHOPIFY STORE -->
  <section class="portfolio-section">
    <div class="section-header reveal"><div><div class="section-tag">Case Study #4</div><h2 class="section-title">Professional Shopify Store</h2></div></div>
    <div class="case-study-card reveal" style="direction: rtl;">
      <div class="case-study-body" style="direction: ltr;">
        <div class="case-study-label">E-Commerce Development</div>
        <div class="case-study-title">Custom Shopify Store — From Zero to Revenue Machine</div>
        <div class="case-study-desc">Built a complete Shopify store with custom theme, optimized product pages, payment gateway setup, and conversion-focused design. Revenue doubled in the first quarter after our redesign.</div>
        <div class="showcase-tags"><span class="showcase-tag">Shopify</span><span class="showcase-tag">Liquid</span><span class="showcase-tag">Custom Theme</span><span class="showcase-tag">Payment Setup</span></div>
        <div class="case-study-stats">
          <div><div class="cs-stat-num">2x</div><div class="cs-stat-label">Revenue Growth</div></div>
          <div><div class="cs-stat-num">45%</div><div class="cs-stat-label">Conv. Rate Up</div></div>
          <div><div class="cs-stat-num">Q1</div><div class="cs-stat-label">Results In</div></div>
        </div>
      </div>
      <div class="case-study-img" style="direction: ltr;"><img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80" alt="E-Commerce Shopping Experience" loading="lazy"/></div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section style="padding: 100px 48px; background: var(--gray-900);">
    <div class="section-header reveal"><div><div class="section-tag" style="color: var(--gold);">Testimonials</div><h2 class="section-title" style="color: white;">What Clients Say</h2></div></div>
    <div class="testi-grid" style="margin-top: 56px;">
      <div class="testi-card reveal"><div class="testi-quote">"</div><div class="testi-text">Their social media team transformed our brand from zero to 50k followers in 6 months. Every post, every campaign — perfectly aligned with our vision.</div><div class="testi-author"><div class="testi-avatar">AR</div><div><div class="testi-name">Ahmed Raza</div><div class="testi-role">CEO, StyleHouse PK</div></div></div></div>
      <div class="testi-card reveal"><div class="testi-quote">"</div><div class="testi-text">The CRM they built replaced 3 different software tools we were using. Our operations are 10x more efficient and the team is always available for support.</div><div class="testi-author"><div class="testi-avatar">SF</div><div><div class="testi-name">Sara Farooq</div><div class="testi-role">Operations Head, MediPlus</div></div></div></div>
      <div class="testi-card reveal"><div class="testi-quote">"</div><div class="testi-text">Our Shopify store went from generic to stunning. Revenue doubled in the first quarter after launch. These guys know what they're doing — highly recommend.</div><div class="testi-author"><div class="testi-avatar">ZK</div><div><div class="testi-name">Zain Khan</div><div class="testi-role">Founder, NovaBrand</div></div></div></div>
    </div>
    <div class="testi-marquee-row"><div class="testi-marquee-inner"><div class="testi-marquee-item"><span>★</span> StyleHouse PK</div><div class="testi-marquee-item"><span>★</span> MediPlus</div><div class="testi-marquee-item"><span>★</span> NovaBrand</div><div class="testi-marquee-item"><span>★</span> Aesthetic Clinic</div><div class="testi-marquee-item"><span>★</span> TechFlow Inc</div><div class="testi-marquee-item"><span>★</span> UrbanCart</div><div class="testi-marquee-item"><span>★</span> StyleHouse PK</div><div class="testi-marquee-item"><span>★</span> MediPlus</div><div class="testi-marquee-item"><span>★</span> NovaBrand</div><div class="testi-marquee-item"><span>★</span> Aesthetic Clinic</div><div class="testi-marquee-item"><span>★</span> TechFlow Inc</div><div class="testi-marquee-item"><span>★</span> UrbanCart</div></div></div>
  </section>
</div>
`;

// ===== CONTACT PAGE =====
PAGES.contact = () => `
<div class="contact-page">
  <div class="page-hero reveal">
    <div class="section-tag">Get In Touch</div>
    <h1 class="section-title">Let's Build<br/>Something Amazing</h1>
    <p class="page-hero-sub">Tell us about your project. We'll get back to you within 3 hours with a plan and a quote — no fluff, just results.</p>
  </div>

  <section class="cta-section">
    <div class="reveal-left">
      <h2 class="cta-title">Ready to Build Something?</h2>
      <p class="cta-sub">Choose how you'd like to reach us. We're always available and respond fast.</p>
  
      <div class="contact-links">
        <a href="https://wa.me/923221127961" target="_blank" class="contact-link">
          <div class="contact-icon" style="background:#25D366;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </div>
          <div><div class="contact-label">WhatsApp Us</div><div class="contact-value" style="color:#25D366;">+92 322 112 7961</div></div>
        </a>
        <a href="mailto:hello@thehdstudios.qzz.io" class="contact-link">
          <div class="contact-icon" style="background: var(--gray-900);">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div><div class="contact-label">Email Us</div><div class="contact-value">hello@thehdstudios.qzz.io</div></div>
        </a>
        <a href="https://www.instagram.com/thehdstudios" target="_blank" class="contact-link">
          <div class="contact-icon" style="background: linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </div>
          <div><div class="contact-label">Follow on Instagram</div><div class="contact-value" style="background: linear-gradient(135deg,#f09433,#dc2743,#bc1888); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">@thehdstudios</div></div>
        </a>
      </div>
    </div>

    <div class="cta-form reveal">
      <form action="https://formspree.io/f/xbdzjjed" method="POST">
      <div class="form-row">
        <input class="form-input" type="text" name="name" placeholder="Your Name" required style="margin-bottom:0"/>
        <input class="form-input" type="email" name="email" placeholder="Email Address" required style="margin-bottom:0"/>
      </div>
      <input class="form-input" type="text" name="service" placeholder="Service Needed" />
      <textarea class="form-input" name="message" placeholder="Tell us about your project..."></textarea>
      <button class="form-submit" type="submit">Send Message →</button>
      </form>
    </div>
  </section>

  <div class="contact-info-strip">
    <div class="contact-info-card reveal">
      <div class="contact-info-icon">${ICONS.location}</div>
      <div class="contact-info-title">Location</div>
      <div class="contact-info-value">DHA Phase 8 Commercial Broadway</div>
    </div>
    <div class="contact-info-card reveal">
      <div class="contact-info-icon">${ICONS.clock}</div>
      <div class="contact-info-title">Response Time</div>
      <div class="contact-info-value">3 Hours Only</div>
    </div>
    <div class="contact-info-card reveal">
      <div class="contact-info-icon">${ICONS.chat}</div>
      <div class="contact-info-title">Preferred Contact</div>
      <div class="contact-info-value"><a href="https://wa.me/923221127961" target="_blank">WhatsApp</a> or <a href="mailto:hello@thehdstudios.qzz.io">Email</a></div>
    </div>
  </div>
</div>
`;
