/* ============================================
   Copper Fox Interiors — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile menu toggle ---
  var menuToggle = document.querySelector('.menu-toggle');
  var mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      this.classList.toggle('active');
      mainNav.classList.toggle('open');
      document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
    });
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && mainNav) {
      mainNav.classList.remove('open');
      if (menuToggle) menuToggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // --- Header scroll shadow ---
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // --- Gallery filter ---
  var filterBtns = document.querySelectorAll('.filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
      var filter = this.getAttribute('data-filter');
      galleryItems.forEach(function (item) {
        var show = filter === 'all' || item.getAttribute('data-category') === filter;
        item.style.display = show ? '' : 'none';
      });
    });
  });

  // --- Contact form (placeholder handling, no backend yet) ---
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    var statusEl = document.getElementById('form-status');
    var setStatus = function (msg, kind) {
      if (statusEl) { statusEl.textContent = msg; statusEl.className = 'form-status ' + (kind || ''); }
    };

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // --- Validate ---
      var valid = true;
      contactForm.querySelectorAll('[required]').forEach(function (field) {
        if (!field.value.trim()) { field.style.borderColor = 'var(--error)'; valid = false; }
        else { field.style.borderColor = ''; }
      });
      var emailField = contactForm.querySelector('input[type="email"]');
      if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        emailField.style.borderColor = 'var(--error)';
        valid = false;
      }
      if (!valid) { setStatus('Please complete the required fields.', 'error'); return; }

      var btn = contactForm.querySelector('button[type="submit"]');
      var original = btn.textContent;
      var endpoint = contactForm.getAttribute('action') || '';

      // Endpoint not configured yet (still the placeholder) — don't pretend to send.
      if (endpoint.indexOf('REPLACE_WITH_FORM_ID') !== -1 || endpoint === '#' || endpoint === '') {
        setStatus('The form isn’t connected to email yet. Please email copperfoxinteriors@yahoo.com directly.', 'error');
        return;
      }

      btn.textContent = 'Sending…';
      btn.disabled = true;
      setStatus('', '');

      fetch(endpoint, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          contactForm.reset();
          btn.textContent = 'Message Sent';
          setStatus('Thank you — your message has been sent. We’ll be in touch soon.', 'success');
          setTimeout(function () { btn.textContent = original; btn.disabled = false; }, 4000);
        } else {
          return res.json().then(function (data) {
            var m = data && data.errors && data.errors[0] && data.errors[0].message;
            throw new Error(m || 'Submission failed');
          });
        }
      }).catch(function () {
        btn.textContent = original;
        btn.disabled = false;
        setStatus('Sorry, something went wrong. Please email copperfoxinteriors@yahoo.com directly.', 'error');
      });
    });
  }

  // --- Smooth scroll for in-page anchors ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Active nav highlighting ---
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });

  // --- Restrained scroll reveal (subtle movement) ---
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // --- Image drop-in fallback ---
  // Hide any <img data-fallback> whose file is missing so the placeholder
  // styling shows through. Once a real file is dropped at the src path,
  // it loads and covers the placeholder automatically — no code change needed.
  document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    var hide = function () { img.style.display = 'none'; };
    if (img.complete && img.naturalWidth === 0) hide();
    img.addEventListener('error', hide);
  });

});
