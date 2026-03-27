/* ========================================
   SPONSORS COMMUNITY - SCRIPTS
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {

  var header = document.getElementById('header');

  // ── Mobile Menu Toggle ──
  var menuBtn = document.getElementById('menuBtn');
  var mobileNav = document.getElementById('mobileNav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('is-active');
      mobileNav.classList.toggle('is-open');
    });

    // Accordion toggles for mobile nav
    mobileNav.querySelectorAll('.mobile-nav__toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var parent = this.parentElement;
        var sub = parent.querySelector('.mobile-nav__sub');
        var arrow = this.querySelector('.mobile-nav__arrow');
        var isOpen = sub.style.display === 'block';

        // Close all others
        mobileNav.querySelectorAll('.mobile-nav__sub').forEach(function (s) {
          s.style.display = 'none';
        });
        mobileNav.querySelectorAll('.mobile-nav__arrow').forEach(function (a) {
          a.textContent = '+';
        });

        if (!isOpen) {
          sub.style.display = 'block';
          arrow.textContent = '−';
        }
      });
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuBtn.classList.remove('is-active');
        mobileNav.classList.remove('is-open');
      });
    });
  }

  // ── Mega Menu close buttons ──
  document.querySelectorAll('.js-mega-close').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var mega = this.closest('.mega-menu');
      if (mega) {
        mega.style.opacity = '0';
        mega.style.visibility = 'hidden';
        mega.style.pointerEvents = 'none';
        setTimeout(function () {
          mega.removeAttribute('style');
        }, 300);
      }
    });
  });

  // ── Header hide on scroll ──
  var lastScroll = 0;

  window.addEventListener('scroll', function () {
    var current = window.pageYOffset;
    if (header) {
      if (current > 100 && current > lastScroll) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
    }
    lastScroll = current;
  });

  // ── Back to top ──
  var backToTop = document.getElementById('backToTop');

  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 500) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header ? header.offsetHeight : 70;
        var offset = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

  // ── Scroll animations ──
  var animateElements = document.querySelectorAll('.js-scroll-animate');

  if (animateElements.length > 0) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ── Active anchor nav highlight ──
  var anchorLinks = document.querySelectorAll('.sp-anchor-nav__list a');
  var sections = [];

  anchorLinks.forEach(function (link) {
    var targetId = link.getAttribute('href');
    var target = document.querySelector(targetId);
    if (target) {
      sections.push({ el: target, link: link });
    }
  });

  if (sections.length > 0) {
    window.addEventListener('scroll', function () {
      var scrollPos = window.pageYOffset + 200;
      var activeIndex = 0;

      sections.forEach(function (section, i) {
        if (scrollPos >= section.el.offsetTop) {
          activeIndex = i;
        }
      });

      anchorLinks.forEach(function (link) {
        link.classList.remove('is-active');
      });
      sections[activeIndex].link.classList.add('is-active');
    });
  }

});
