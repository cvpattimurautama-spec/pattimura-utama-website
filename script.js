document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Header scroll state ---------- */
  var header = document.querySelector('header.site');
  function setScrolled() {
    if (!header) return;
    if (window.scrollY > 30) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  var burger = document.querySelector('.burger');
  var mainNav = document.querySelector('nav.main-nav');
  var scrim = document.querySelector('.nav-scrim');
  function closeNav() {
    if (mainNav) mainNav.classList.remove('open');
    if (scrim) scrim.classList.remove('open');
  }
  if (burger && mainNav) {
    burger.addEventListener('click', function () {
      mainNav.classList.toggle('open');
      if (scrim) scrim.classList.toggle('open');
    });
  }
  if (scrim) scrim.addEventListener('click', closeNav);

  var dropTrigger = document.querySelector('.nav-dropdown .drop-trigger');
  var dropWrap = document.querySelector('.nav-dropdown');
  if (dropTrigger && dropWrap) {
    dropTrigger.addEventListener('click', function (e) {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        dropWrap.classList.toggle('open');
      }
    });
  }

  /* ---------- Marquee: duplicate track content for seamless loop ---------- */
  document.querySelectorAll('.strip-track').forEach(function (track) {
    if (track.dataset.duplicated) return;
    track.innerHTML += track.innerHTML;
    track.dataset.duplicated = 'true';
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---------- Animated stat counters ---------- */
  var counters = document.querySelectorAll('.counter[data-target]');
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10) || 0;
    var duration = 1400;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }
  if (counters.length) {
    if ('IntersectionObserver' in window) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            cio.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      counters.forEach(function (c) { cio.observe(c); });
    } else {
      counters.forEach(animateCounter);
    }
  }

  /* ---------- Contact / order form -> WhatsApp ---------- */
  var WA_NUMBER = '6285273612221';
  document.querySelectorAll('form[data-wa-submit]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var lines = [];
      var nama = data.get('nama');
      var telp = data.get('telp') || data.get('kontak');
      var email = data.get('email');
      var lokasi = data.get('lokasi');
      var skala = data.get('skala');
      var anggaran = data.get('anggaran');
      var mulai = data.get('mulai');
      var catatan = data.get('catatan') || data.get('pesan');
      var jenis = data.get('jenis');
      var layanan = data.getAll('layanan');

      lines.push('Halo, saya ingin mengajukan permintaan penawaran proyek:');
      if (nama) lines.push('Nama/Perusahaan: ' + nama);
      if (telp) lines.push('No. Telepon: ' + telp);
      if (email) lines.push('Email: ' + email);
      if (jenis) lines.push('Jenis kebutuhan: ' + jenis);
      if (layanan && layanan.length) lines.push('Layanan: ' + layanan.join(', '));
      if (lokasi) lines.push('Lokasi Proyek: ' + lokasi);
      if (skala) lines.push('Skala/Luas: ' + skala);
      if (anggaran) lines.push('Perkiraan Anggaran: ' + anggaran);
      if (mulai) lines.push('Target Mulai: ' + mulai);
      if (catatan) lines.push('Catatan: ' + catatan);

      var text = encodeURIComponent(lines.join('\n'));
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + text, '_blank');
    });
  });

  /* ---------- Lightbox gallery (real project photos) ---------- */
  var lightbox = document.querySelector('.real-lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    var lbCap = lightbox.querySelector('.lb-cap');
    var galleryItems = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox-src]'));
    var currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      var item = galleryItems[currentIndex];
      if (!item) return;
      lbImg.src = item.getAttribute('data-lightbox-src');
      if (lbCap) lbCap.textContent = item.getAttribute('data-lightbox-caption') || '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
    function nextImg(dir) {
      if (!galleryItems.length) return;
      currentIndex = (currentIndex + dir + galleryItems.length) % galleryItems.length;
      openLightbox(currentIndex);
    }
    galleryItems.forEach(function (item, i) {
      item.addEventListener('click', function () { openLightbox(i); });
    });
    var closeBtn = lightbox.querySelector('.lb-close');
    var prevBtn = lightbox.querySelector('.lb-prev');
    var nextBtn = lightbox.querySelector('.lb-next');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', function () { nextImg(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { nextImg(1); });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') nextImg(-1);
      if (e.key === 'ArrowRight') nextImg(1);
    });
  }

  /* ---------- Back to top ---------- */
  var toTop = document.querySelector('.to-top');
  if (toTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) toTop.classList.add('show');
      else toTop.classList.remove('show');
    }, { passive: true });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
