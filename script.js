/* ==========================================================================
   HERBERT PARK HOTEL × EURO 2028 — campaign page behaviour
   Vanilla JS, no dependencies.
   --------------------------------------------------------------------------
   EDIT HERE FIRST:
   • PACKAGES — package names, nights, rooms and inclusions
   • TEAMS    — team colour options for the scarf selector
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     PACKAGES — "The longer you stay, the more you experience."
     Each package contains everything in the one before, plus new extras.

     label:      small tier label above the stay length
     stay:       large serif stay length, e.g. '3' + stayUnit 'Nights';
                 or stayLines: ['Multi-Match', 'Extended Stay'] for text
     level:      1–4, drives the small experience meter
     featured:   subtle highlight (paper background, coral label)
     eventLabel: small label above the name (default 'EURO 2028')
     name, line: package name and one-line summary
     items:      'plain text'                 → normal inclusion
                 { text, desc }               → inclusion + small description
                 { text, base: true }         → "✓ Everything in …" line
                 { text, star: true }         → ★ newly unlocked experience
     support:    small closing line under the list
     Room type is intentionally NOT part of a package.
     No prices are shown by design.
     ------------------------------------------------------------------------ */
  /* Official Herbert Park booking engine — guests choose dates, rooms,
     adults, children and room type here. Swap in package-specific
     booking URLs (e.g. a bookings.herbertparkhotel.ie/offer/… page)
     on each package's `link` once they exist. */
  const BOOKING_URL = 'https://bookings.herbertparkhotel.ie/search-rates';

  const PACKAGES = [
    {
      label: 'Essential',
      stay: '3',
      stayUnit: 'Nights',
      level: 1,
      slug: 'match-weekend',   // used to preselect this package in the booking step
      name: 'Match Weekend',
      line: 'Come for the match. Discover Dublin your way.',
      items: [
        'Daily breakfast',
        'Welcome drink on arrival',
        'Herbert Park Supporter Kit',
        { text: 'Dublin Playbook', desc: 'Our curated guide to places to see, eat and explore in Dublin at your own pace.' },
        'Late checkout*'
      ],
      link: BOOKING_URL
    },
    {
      label: 'Most Popular',
      stay: '4–5',
      stayUnit: 'Nights',
      level: 2,
      featured: true,
      slug: 'dublin-experience',   // used to preselect this package in the booking step
      name: 'Dublin Experience',
      line: 'Stay for the match. Experience the city.',
      items: [
        { text: 'Everything in Match Weekend', base: true },
        { text: 'Guided Dublin experience included', star: true },
        { text: 'Enhanced Supporter Kit', star: true },
        { text: 'Welcome snack box', star: true }
      ],
      support: 'Enjoy an organised Dublin experience as part of your stay.',
      link: BOOKING_URL
    },
    {
      label: 'Explore More',
      stay: '6+',
      stayUnit: 'Nights',
      level: 3,
      slug: 'ireland-explorer',   // used to preselect this package in the booking step
      name: 'Ireland Explorer',
      line: 'Come for EURO 2028. Leave having experienced Ireland.',
      items: [
        { text: 'Everything in Dublin Experience', base: true },
        { text: 'Ireland day trip included', star: true },
        { text: 'Premium Supporter Kit', star: true },
        { text: 'Long-stay benefit', star: true }
      ],
      support: 'Experience Dublin, then use your extra time to discover more of Ireland.',
      link: BOOKING_URL
    },
    {
      label: 'Ultimate Stay',
      stayLines: ['Multi-Match', 'Extended Stay'],
      level: 4,
      slug: 'full-euro-experience',   // used to preselect this package in the booking step
      name: 'Full Experience',
      line: 'Stay for the matches. Explore Ireland in between.',
      items: [
        { text: 'Everything in Ireland Explorer', base: true },
        { text: 'Additional Dublin / Ireland experience', star: true },
        { text: 'Experiences planned around match days', star: true },
        { text: 'Extended-stay benefits', star: true },
        { text: 'Premium concierge support', star: true }
      ],
      support: 'Created for guests staying across multiple EURO 2028 match dates.',
      link: BOOKING_URL
    }
  ];

  /* ------------------------------------------------------------------------
     TEAMS
     colours: [scarf body, end stripes, accent stripe]
     National colours only — no federation crests or tournament marks.
     Add more teams by appending to this array.
     Listing a team does not imply qualification or a Dublin fixture.
     ------------------------------------------------------------------------ */
  const TEAMS = [
    { name: 'Herbert Park', colours: ['#173149', '#e9544d', '#ffffff'] }, // default: scarf reads HERBERT PARK — DUBLIN
    { name: 'Ireland',      colours: ['#169b62', '#ffffff', '#ff883e'] },
    { name: 'Spain',        colours: ['#c60b1e', '#ffc400', '#c60b1e'] },
    { name: 'France',       colours: ['#002395', '#ffffff', '#ed2939'] },
    { name: 'Germany',      colours: ['#1a1a1a', '#dd0000', '#ffce00'] },
    { name: 'England',      colours: ['#ffffff', '#cf142b', '#173149'] },
    { name: 'Italy',        colours: ['#0b4ea2', '#ffffff', '#008c45'] },
    { name: 'Netherlands',  colours: ['#f36c21', '#ffffff', '#21468b'] },
    { name: 'Portugal',     colours: ['#a50f1f', '#046a38', '#ffd100'] },
    { name: 'Belgium',      colours: ['#1a1a1a', '#fdda24', '#ef3340'] },
    { name: 'Scotland',     colours: ['#005eb8', '#ffffff', '#005eb8'] }
  ];

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     Render packages
     ------------------------------------------------------------------------ */
  function renderPackages() {
    const row = document.getElementById('packageRow');
    if (!row) return;
    const total = 4; // experience-meter steps

    row.innerHTML = PACKAGES.map(function (p) {
      const items = p.items.map(function (item) {
        if (typeof item === 'string') return '<li>' + item + '</li>';
        if (item.base) {
          return '<li class="package-base"><span class="package-check" aria-hidden="true">✓</span>' + item.text + '</li>';
        }
        if (item.star) {
          return '<li class="package-new"><span class="package-star" aria-hidden="true">★</span>' +
                 '<span class="visually-hidden">Extra experience: </span>' + item.text + '</li>';
        }
        // inclusion with a small description
        return '<li><span>' + item.text +
               (item.desc ? '<small class="package-item-desc">' + item.desc + '</small>' : '') +
               (item.note ? ' <em>(' + item.note + ')</em>' : '') + '</span></li>';
      }).join('');

      const stay = p.stayLines
        ? '<p class="package-nights package-nights-text">' + p.stayLines.join('<br />') + '</p>'
        : '<p class="package-nights">' + p.stay + '<small>' + p.stayUnit + '</small></p>';

      let meter = '<span class="package-meter" aria-hidden="true">';
      for (let i = 1; i <= total; i++) meter += '<i' + (i <= p.level ? ' class="is-on"' : '') + '></i>';
      meter += '</span><span class="visually-hidden">Experience level ' + p.level + ' of ' + total + '</span>';

      return (
        '<article class="package reveal' + (p.featured ? ' package-featured' : '') + '" role="listitem">' +
          '<div class="package-top">' +
            '<p class="package-tier">' + p.label + '</p>' + meter +
          '</div>' +
          stay +
          '<p class="package-event">' + (p.eventLabel || 'EURO 2028') + '</p>' +
          '<h3 class="package-name">' + p.name + '</h3>' +
          '<p class="package-line">' + p.line + '</p>' +
          '<ul class="package-list">' + items + '</ul>' +
          (p.support ? '<p class="package-support">' + p.support + '</p>' : '') +
          '<a href="' + p.link + '" class="link-arrow" data-package="' + p.slug + '"' + (p.link === '#' ? ' data-placeholder-link' : '') +
            ' aria-label="Book your stay: EURO 2028 ' + p.name + '">Book Your Stay</a>' +
        '</article>'
      );
    }).join('');
  }


  /* ------------------------------------------------------------------------
     Team selector → updates scarf colours via CSS custom properties
     ------------------------------------------------------------------------ */
  function renderTeams() {
    const scroller = document.getElementById('teamScroller');
    const nameEl = document.getElementById('teamName');     // "Shown in ___ colours"
    const scarfText = document.getElementById('scarfText'); // text woven into the scarf
    if (!scroller) return;

    scroller.innerHTML = TEAMS.map(function (t, i) {
      const swatch = t.colours.map(function (c) { return '<i style="background:' + c + '"></i>'; }).join('');
      return (
        '<button type="button" class="team-chip" role="radio" ' +
          'aria-checked="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '" data-index="' + i + '" ' +
          'data-country="' + t.name + '" data-primary="' + t.colours[0] + '" ' +
          'data-secondary="' + t.colours[1] + '" data-accent="' + t.colours[2] + '">' +
          '<span class="team-swatch" aria-hidden="true">' + swatch + '</span>' +
          '<span>' + t.name + '</span>' +
        '</button>'
      );
    }).join('');

    const chips = Array.prototype.slice.call(scroller.querySelectorAll('.team-chip'));

    function select(index, focus) {
      const chip = chips[index];
      const country = chip.dataset.country;
      chips.forEach(function (chip, i) {
        const on = i === index;
        chip.setAttribute('aria-checked', String(on));
        chip.tabIndex = on ? 0 : -1;
      });
      const root = document.documentElement;
      root.style.setProperty('--team-1', chip.dataset.primary);
      root.style.setProperty('--team-2', chip.dataset.secondary);
      root.style.setProperty('--team-3', chip.dataset.accent);
      if (nameEl) nameEl.textContent = country;
      if (scarfText) setScarfText(country.toUpperCase()); // country name only

      if (focus) chip.focus();
      // keep the chosen chip in view inside the horizontal scroller
      const left = chip.offsetLeft - scroller.offsetLeft;
      if (left < scroller.scrollLeft || left + chip.offsetWidth > scroller.scrollLeft + scroller.clientWidth) {
        scroller.scrollTo({ left: left - 8, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    }

    // Fit longer names (e.g. NETHERLANDS — DUBLIN) inside the scarf's centre panel
    function setScarfText(text) {
      scarfText.textContent = text;
      scarfText.removeAttribute('textLength');
      scarfText.removeAttribute('lengthAdjust');
      try {
        const max = 336; // centre panel is 360 units wide
        if (scarfText.getComputedTextLength() > max) {
          scarfText.setAttribute('textLength', max);
          scarfText.setAttribute('lengthAdjust', 'spacingAndGlyphs');
        }
      } catch (err) { /* not rendered yet — leave as is */ }
    }

    scroller.addEventListener('click', function (e) {
      const chip = e.target.closest('.team-chip');
      if (chip) select(Number(chip.dataset.index), false);
    });

    // Arrow-key navigation (radiogroup pattern)
    scroller.addEventListener('keydown', function (e) {
      const current = chips.indexOf(document.activeElement);
      if (current === -1) return;
      let next = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (current + 1) % chips.length;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (current - 1 + chips.length) % chips.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = chips.length - 1;
      if (next !== null) { e.preventDefault(); select(next, true); }
    });
  }

  /* ------------------------------------------------------------------------
     Header: transparent over hero → solid on scroll
     ------------------------------------------------------------------------ */
  function initHeader() {
    const header = document.getElementById('siteHeader');
    if (!header) return;
    const update = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ------------------------------------------------------------------------
     Mobile navigation
     ------------------------------------------------------------------------ */
  function initNav() {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('primaryNav');
    if (!toggle || !nav) return;

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-open', open);
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1100) setOpen(false); // matches the hamburger breakpoint in styles.css
    });

    // Active section highlight in nav
    const links = Array.prototype.slice.call(nav.querySelectorAll('ul a'));
    const sections = links
      .map(function (a) { return document.querySelector(a.getAttribute('href')); })
      .filter(Boolean);

    if ('IntersectionObserver' in window) {
      const spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (a) {
            a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach(function (s) { spy.observe(s); });
    }
  }

  /* ------------------------------------------------------------------------
     Reveal-on-scroll
     ------------------------------------------------------------------------ */
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    items.forEach(function (el, i) {
      // gentle stagger for siblings in grids
      const siblings = el.parentElement ? el.parentElement.querySelectorAll(':scope > .reveal') : [];
      const idx = Array.prototype.indexOf.call(siblings, el);
      if (idx > 0) el.style.transitionDelay = Math.min(idx * 120, 480) + 'ms';
      io.observe(el);
    });
  }

  /* ------------------------------------------------------------------------
     Hero video: pause control, reduced motion, missing-file fallback
     ------------------------------------------------------------------------ */
  function initHeroVideo() {
    const video = document.getElementById('heroVideo');
    const toggle = document.getElementById('videoToggle');
    if (!video || !toggle) return;

    const source = video.querySelector('source');
    // If no video file is present yet, the poster image stays as the hero.
    function hideToggle() { toggle.classList.add('is-hidden'); }
    if (source) source.addEventListener('error', hideToggle);
    video.addEventListener('error', hideToggle);

    if (prefersReducedMotion) {
      video.removeAttribute('autoplay');
      video.pause();
      toggle.setAttribute('aria-pressed', 'true');
      toggle.setAttribute('aria-label', 'Play background video');
    }

    toggle.addEventListener('click', function () {
      if (video.paused) {
        video.play();
        toggle.setAttribute('aria-pressed', 'false');
        toggle.setAttribute('aria-label', 'Pause background video');
      } else {
        video.pause();
        toggle.setAttribute('aria-pressed', 'true');
        toggle.setAttribute('aria-label', 'Play background video');
      }
    });
  }

  /* ------------------------------------------------------------------------
     Scroll football — rotates gently with scroll (desktop only via CSS)
     ------------------------------------------------------------------------ */
  function initScrollBall() {
    const ball = document.getElementById('scrollBall');
    if (!ball || prefersReducedMotion) return;
    const svg = ball.querySelector('svg');
    let ticking = false;

    function update() {
      const y = window.scrollY;
      svg.style.transform = 'rotate(' + (y * 0.25) + 'deg)';
      ball.classList.toggle('is-visible', y > window.innerHeight * 0.8);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ------------------------------------------------------------------------
     Placeholder links — stop "#" jumping to the top during presentations.
     Remove data-placeholder-link once a real URL is added.
     ------------------------------------------------------------------------ */
  function initPlaceholderLinks() {
    document.addEventListener('click', function (e) {
      const link = e.target.closest('[data-placeholder-link]');
      if (link) e.preventDefault();
    });
  }

  /* ------------------------------------------------------------------------
     Image fallback — if an asset is missing, show a neutral placeholder
     block instead of a broken image icon.
     ------------------------------------------------------------------------ */
  function initImageFallbacks() {
    document.querySelectorAll('img').forEach(function (img) {
      function fallback() {
        img.style.background = 'linear-gradient(135deg, #ece4d5, #f6f1e8)';
        img.style.minHeight = '200px';
        img.removeAttribute('srcset');
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000"><rect width="100%" height="100%" fill="#ece4d5"/>' +
          '<text x="50%" y="50%" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="34" fill="#173149" opacity=".6">Herbert Park photography</text></svg>'
        );
      }
      if (img.complete && img.naturalWidth === 0) fallback();
      else img.addEventListener('error', fallback, { once: true });
    });
  }

  /* ------------------------------------------------------------------------
     Init
     ------------------------------------------------------------------------ */
  renderPackages();
  renderTeams();
  initHeader();
  initNav();
  initReveal();
  initHeroVideo();
  initScrollBall();
  initPlaceholderLinks();
  initImageFallbacks();
})();
