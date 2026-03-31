(function() {
  'use strict';

  // Mobile navigation toggle
  var hamburger = document.querySelector('.nav__hamburger');
  var navLinks = document.querySelector('.nav__links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      var expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
    });

    // Close mobile nav when a link is clicked
    var links = navLinks.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    }
  }

  // Dynamic footer year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Email signup form handling
  var signupForms = document.querySelectorAll('.signup__form');
  for (var j = 0; j < signupForms.length; j++) {
    signupForms[j].addEventListener('submit', function(e) {
      var btn = this.querySelector('.btn');
      if (btn) {
        btn.textContent = 'Joining...';
        btn.disabled = true;
      }
    });
  }
})();
