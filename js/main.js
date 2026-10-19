/**
 * ODYSSEY — WAR SAGA INTERACTIVITY
 * Plain JavaScript + GSAP/ScrollTrigger enhancements
 * 60FPS Performance, Mobile-first, Zero horizontal scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initSpearScrollProgress();
  initEmberCanvas();
  initHeaderAndMenu();
  initTransformationSlider();
  initStatCounters();
  initWeaponHoverSounds();
  initOathForm();
  initParallaxEffects();
  initMobileStickyBar();
});

/* --------------------------------------------------------------------------
   01. LOADER: SPEAR FLIGHT, IMPACT SHAKE, RED FLASH & CARVED REVEAL
   -------------------------------------------------------------------------- */
function initLoader() {
  const loader = document.getElementById('loader');
  const spear = document.querySelector('.loader-spear-flight');
  const impact = document.querySelector('.loader-impact-crater');
  const redFlash = document.getElementById('redFlash');
  const title = document.querySelector('.loader-title');
  const sub = document.querySelector('.loader-sub');
  const hero = document.getElementById('hero');

  if (!loader) return;

  // Reduced motion bypass
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    loader.classList.add('loaded');
    if (hero) hero.classList.add('hero-revealed');
    return;
  }

  // Prevent scrolling during loader
  document.body.style.overflow = 'hidden';

  // Step 1: Spear flies in from left to center
  if (window.gsap) {
    const tl = gsap.timeline();
    tl.to(spear, {
      x: '50vw',
      y: 0,
      duration: 0.65,
      ease: 'power4.in',
      onComplete: () => {
        // Step 2: Impact flash & screen shake
        spear.style.opacity = '0';
        impact.style.opacity = '1';
        impact.style.transform = 'scale(2.5)';
        redFlash.style.opacity = '0.85';
        document.body.classList.add('screen-shake');

        setTimeout(() => {
          redFlash.style.opacity = '0';
          document.body.classList.remove('screen-shake');
        }, 120);

        // Step 3: Carve in ODYSSEY
        if (title) title.classList.add('carved');
        if (sub) sub.classList.add('revealed');

        // Step 4: Open the page
        setTimeout(() => {
          loader.classList.add('loaded');
          document.body.style.overflow = '';
          if (hero) hero.classList.add('hero-revealed');
        }, 1200);
      }
    });
  } else {
    // Fallback if GSAP is blocked
    setTimeout(() => {
      if (title) title.classList.add('carved');
      if (sub) sub.classList.add('revealed');
      setTimeout(() => {
        loader.classList.add('loaded');
        document.body.style.overflow = '';
        if (hero) hero.classList.add('hero-revealed');
      }, 1000);
    }, 400);
  }
}

/* --------------------------------------------------------------------------
   02. CURSOR
   Standard browser cursor restored (Custom cursor removed per design spec)
   -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
   03. SPEAR SCROLL PROGRESS INDICATOR
   -------------------------------------------------------------------------- */
function initSpearScrollProgress() {
  const fill = document.querySelector('.spear-shaft-fill');
  const indicator = document.querySelector('.spear-head-indicator');

  function updateProgress() {
    const scrollY = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = totalHeight > 0 ? Math.min(Math.max(scrollY / totalHeight, 0), 1) : 0;
    const percent = ratio * 100;

    if (fill) {
      if (window.innerWidth <= 768) {
        fill.style.width = `${percent}%`;
        fill.style.height = '100%';
      } else {
        fill.style.height = `${percent}%`;
        fill.style.width = '100%';
      }
    }

    if (indicator) {
      indicator.style.top = `${percent}%`;
    }
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();
}

/* --------------------------------------------------------------------------
   04. FLOATING EMBER PARTICLES CANVAS
   -------------------------------------------------------------------------- */
function initEmberCanvas() {
  const canvas = document.getElementById('emberCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 30 : 65;
  const particles = [];

  class Ember {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.5 + 1;
      this.speedY = Math.random() * 1.4 + 0.6;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.alpha = Math.random() * 0.8 + 0.2;
      this.decay = Math.random() * 0.006 + 0.003;
      this.color = Math.random() > 0.4 ? 'rgba(230, 57, 70,' : 'rgba(193, 18, 31,';
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.02) * 0.4;
      this.alpha -= this.decay;

      if (this.alpha <= 0 || this.y < -10) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.fillStyle = `${this.color}${this.alpha})`;
      ctx.shadowColor = '#e63946';
      ctx.shadowBlur = this.size * 3;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Ember());
  }

  let animId;
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    animId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }, { passive: true });

  // Pause when not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else {
      animate();
    }
  });

  animate();
}

/* --------------------------------------------------------------------------
   05. FLOATING MINIMAL HEADER & FULLSCREEN BATTLE MENU
   -------------------------------------------------------------------------- */
function initHeaderAndMenu() {
  const header = document.querySelector('.header-nav');
  const menuBtn = document.querySelector('.menu-btn');
  const menuOverlay = document.querySelector('.menu-overlay');
  const menuLinks = document.querySelectorAll('.menu-nav-link, .menu-overlay-cta a');

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Dark backdrop on scroll
    if (currentScrollY > 60) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }

    // Hide on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      if (!menuOverlay.classList.contains('open')) {
        header.classList.add('nav-hidden');
      }
    } else {
      header.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // Toggle Menu
  if (menuBtn && menuOverlay) {
    menuBtn.addEventListener('click', () => {
      const isOpen = menuOverlay.classList.toggle('open');
      menuBtn.classList.toggle('is-active', isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';

      // Animate nav items stagger
      if (isOpen && window.gsap) {
        gsap.fromTo(
          '.menu-nav-item',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'power3.out' }
        );
      }
    });

    // Close on link click
    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        menuOverlay.classList.remove('open');
        menuBtn.classList.remove('is-active');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
}

/* --------------------------------------------------------------------------
   06. BEFORE / AFTER TRANSFORMATION SLIDER
   -------------------------------------------------------------------------- */
function initTransformationSlider() {
  const wrapper = document.querySelector('.slider-wrapper');
  const afterWrap = document.querySelector('.slider-img-wrap-after');
  const handle = document.querySelector('.slider-handle');

  if (!wrapper || !afterWrap || !handle) return;

  let isDragging = false;

  function updateSliderPosition(clientX) {
    const rect = wrapper.getBoundingClientRect();
    let pos = clientX - rect.left;
    pos = Math.max(0, Math.min(pos, rect.width));
    const percent = (pos / rect.width) * 100;

    afterWrap.style.width = `${percent}%`;
    handle.style.left = `${percent}%`;
  }

  wrapper.addEventListener('pointerdown', (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
    wrapper.setPointerCapture(e.pointerId);
  });

  window.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener('pointerup', () => {
    isDragging = false;
  });

  window.addEventListener('pointercancel', () => {
    isDragging = false;
  });
}

/* --------------------------------------------------------------------------
   07. TYPOGRAPHIC STAT COUNTERS
   -------------------------------------------------------------------------- */
function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const endValue = parseInt(target.getAttribute('data-target'), 10) || 0;
        const suffix = target.getAttribute('data-suffix') || '';
        const duration = 1800; // ms
        const startTime = performance.now();

        function step(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          // Ease-out expo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const current = Math.floor(easeProgress * endValue);
          target.textContent = current.toLocaleString() + suffix;

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            target.textContent = endValue.toLocaleString() + suffix;
          }
        }

        requestAnimationFrame(step);
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   08. WEAPON HOVER SLASH & SOUNDWAVE PULSE
   -------------------------------------------------------------------------- */
function initWeaponHoverSounds() {
  const panels = document.querySelectorAll('.weapon-panel');
  panels.forEach((panel) => {
    panel.addEventListener('mouseenter', () => {
      // Small battle flash
      const flash = document.getElementById('redFlash');
      if (flash) {
        flash.style.opacity = '0.08';
        setTimeout(() => (flash.style.opacity = '0'), 100);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   09. FINAL CTA: WARRIOR OATH FORM
   -------------------------------------------------------------------------- */
function initOathForm() {
  const form = document.getElementById('warriorOathForm');
  const toast = document.querySelector('.form-toast');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#warriorName').value.trim();
    const phone = form.querySelector('#warriorPhone').value.trim();
    const goal = form.querySelector('#warriorGoal').value;

    if (!name || !phone) {
      alert('Every legionary must provide their name and communications.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>SEALING THE BLOOD OATH...</span>';
    submitBtn.disabled = true;

    // Simulate epic oath recording
    setTimeout(() => {
      submitBtn.innerHTML = '<span>OATH RECORDED IN THE ARCHIVES</span>';
      submitBtn.style.background = '#e63946';

      if (toast) {
        toast.textContent = `WELCOME TO THE ARENA, ${name.toUpperCase()}. A CENTURION HAS DISPATCHED COMM ORDERS TO YOUR UNIT.`;
        toast.style.display = 'block';
      }

      // Small screen flash on submission
      const flash = document.getElementById('redFlash');
      if (flash) {
        flash.style.opacity = '0.35';
        setTimeout(() => (flash.style.opacity = '0'), 180);
      }

      form.reset();
    }, 1000);
  });
}

/* --------------------------------------------------------------------------
   10. PARALLAX VISUALS (Helmet & Backgrounds)
   -------------------------------------------------------------------------- */
function initParallaxEffects() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const visual = document.querySelector('.hero-helmet-visual');
  if (!visual) return;

  window.addEventListener('mousemove', (e) => {
    // Only apply desktop mouse parallax
    if (window.innerWidth < 992) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 16;
    const y = (e.clientY / window.innerHeight - 0.5) * 16;
    visual.style.transform = `translate(${x}px, ${y}px)`;
  });

  window.addEventListener('scroll', () => {
    if (window.innerWidth < 992) return;
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      visual.style.transform = `translateY(${scrollY * 0.12}px)`;
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   11. MOBILE STICKY JOIN BAR
   -------------------------------------------------------------------------- */
function initMobileStickyBar() {
  const stickyBar = document.querySelector('.mobile-sticky-bar');
  const hero = document.getElementById('hero');

  if (!stickyBar || !hero) return;

  window.addEventListener('scroll', () => {
    const heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom < 0) {
      stickyBar.classList.add('visible');
    } else {
      stickyBar.classList.remove('visible');
    }
  }, { passive: true });
}
