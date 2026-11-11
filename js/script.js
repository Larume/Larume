/* Larume — Velas & Aromas | JavaScript puro, sem dependências */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var header = document.getElementById('header');
  var nav = document.getElementById('menu');
  var toggle = document.getElementById('menuToggle');
  var floatIg = document.getElementById('floatIg');

  /* Ano do copyright */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Menu mobile ---------- */
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });
  window.matchMedia('(min-width: 961px)').addEventListener('change', function (e) {
    if (e.matches) setMenu(false);
  });

  /* ---------- Header dinâmico + botão flutuante ---------- */
  var ticking = false;
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 40);
    floatIg.classList.toggle('is-visible', y > window.innerHeight * 0.6);
    if (!reduceMotion) parallax();
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });

  /* ---------- Parallax suave nas imagens ---------- */
  var layers = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  function parallax() {
    var vh = window.innerHeight;
    layers.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      var speed = parseFloat(el.getAttribute('data-parallax')) || 0.05;
      var offset = (r.top + r.height / 2 - vh / 2) * speed * -1;
      var target = el.querySelector('img');
      if (target) target.style.translate = '0 ' + offset.toFixed(1) + 'px';
    });
  }

  /* ---------- Animações de entrada (Intersection Observer) ---------- */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el, i) {
      el.style.transitionDelay = ((i % 3) * 90) + 'ms';
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  onScroll();
})();
