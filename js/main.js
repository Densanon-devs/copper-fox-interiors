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
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      contactForm.querySelectorAll('[required]').forEach(function (field) {
        if (!field.value.trim()) { field.style.borderColor = 'var(--color-error)'; valid = false; }
        else { field.style.borderColor = ''; }
      });
      var emailField = contactForm.querySelector('input[type="email"]');
      if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        emailField.style.borderColor = 'var(--color-error)';
        valid = false;
      }
      if (valid) {
        var btn = contactForm.querySelector('button[type="submit"]');
        var original = btn.textContent;
        btn.textContent = 'Message Sent!';
        btn.style.background = 'var(--color-success)';
        btn.disabled = true;
        setTimeout(function () {
          btn.textContent = original;
          btn.style.background = '';
          btn.disabled = false;
          contactForm.reset();
        }, 3000);
      }
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

});
