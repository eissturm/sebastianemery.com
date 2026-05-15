(function () {
  'use strict';

  /* ── Starfield ──────────────────────────────────────────── */
  function initStarfield() {
    const header = document.querySelector('header');
    if (!header) return;

    const canvas = document.createElement('canvas');
    Object.assign(canvas.style, {
      position: 'absolute', top: '0', left: '0',
      width: '100%', height: '100%',
      zIndex: '0', pointerEvents: 'none',
    });
    header.insertBefore(canvas, header.firstChild);

    const ctx = canvas.getContext('2d');
    let stars = [], animId, W, H;

    function buildStars() {
      stars = [];
      const density = Math.floor((W * H) / 2800);
      for (let i = 0; i < density; i++) {
        const isGold = Math.random() < 0.11;
        const isBright = Math.random() < 0.15;
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: isBright ? Math.random() * 1.4 + 0.8 : Math.random() * 0.9 + 0.2,
          base: Math.random() * 0.55 + 0.25,
          amp:  Math.random() * 0.4  + 0.1,
          freq: Math.random() * 0.014 + 0.003,
          phase: Math.random() * Math.PI * 2,
          gold: isGold,
          bright: isBright,
        });
      }
    }

    function resize() {
      W = canvas.width  = header.offsetWidth;
      H = canvas.height = header.offsetHeight;
      buildStars();
    }

    function draw(t) {
      ctx.clearRect(0, 0, W, H);

      for (const s of stars) {
        const lum = s.base + s.amp * Math.sin(s.phase + t * s.freq);

        // Core dot
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.gold
          ? `rgba(255,209,102,${lum * 0.92})`
          : `rgba(220,210,255,${lum * 0.88})`;
        ctx.fill();

        // Glow halo for brighter stars
        if (s.bright && lum > 0.55) {
          const glow = (lum - 0.55) * 2;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = s.gold
            ? `rgba(255,209,102,${glow * 0.18})`
            : `rgba(123,82,200,${glow * 0.14})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(header);
    animId = requestAnimationFrame(draw);
  }

  /* ── Scroll-shrink header ───────────────────────────────── */
  function initScrollHeader() {
    const header = document.querySelector('header');
    if (!header) return;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (window.scrollY > 55) {
          header.style.paddingTop    = '1.1rem';
          header.style.paddingBottom = '0.9rem';
        } else {
          header.style.paddingTop    = '';
          header.style.paddingBottom = '';
        }
        ticking = false;
      });
    });
  }

  /* ── Card entrance animations ───────────────────────────── */
  function initCardAnimations() {
    // Animate both grid cards and the hero card
    const cards = Array.from(document.querySelectorAll('.post-card-link, .hero-card-link'));
    if (!cards.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const idx = cards.indexOf(entry.target);
        // Hero card gets no delay; grid cards stagger
        const isHero = entry.target.classList.contains('hero-card-link');
        entry.target.style.animationDelay = isHero ? '0ms' : `${idx * 60}ms`;
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    cards.forEach((c) => io.observe(c));
  }

  /* ── WIP progress bars ────────────────────────────────────── */
  function initWipProgress() {
    document.querySelectorAll('.wip-text p').forEach((p) => {
      const match = p.textContent.match(/(\d+)%/);
      if (!match) return;
      const pct = parseInt(match[1], 10);
      const fill = Math.min(pct, 100);
      const bar = document.createElement('div');
      bar.className = 'wip-bar';
      const inner = document.createElement('div');
      inner.className = 'wip-bar-fill' + (pct > 100 ? ' overgoal' : '');
      inner.style.width = '0';
      bar.appendChild(inner);
      p.after(bar);
      // Animate in after a brief delay so the transition fires
      requestAnimationFrame(() => requestAnimationFrame(() => {
        inner.style.width = fill + '%';
      }));
    });
  }

  /* ── Active nav highlight ───────────────────────────────── */
  function initActiveNav() {
    const path = window.location.pathname;
    document.querySelectorAll('nav a').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      if (href === '/' ? path === '/' : path.startsWith(href)) {
        link.classList.add('active');
      }
    });
  }

  /* ── Boot ───────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initStarfield();
    initScrollHeader();
    initCardAnimations();
    initActiveNav();
    initWipProgress();
  });
})();
