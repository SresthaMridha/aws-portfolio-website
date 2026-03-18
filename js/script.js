/* ============================================================
   script.js — Portfolio interactions
   ============================================================ */

/* ===== CURSOR GLOW ===== */
const glow = document.createElement('div');
glow.id = 'cursor-glow';
document.body.appendChild(glow);

document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});


/* ===== PARTICLE NETWORK CANVAS (hero) ===== */
const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let W, H, nodes;
  const COUNT = 55;
  const CONNECT_DIST = 150;
  const ACCENT = '0, 212, 170';

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeNodes() {
    nodes = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r:  Math.random() * 2 + 1,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.35;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // nodes
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACCENT}, 0.7)`;
      ctx.fill();

      // move
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); });
  resize();
  makeNodes();
  draw();
}


/* ===== TEXT SCRAMBLE on h1 ===== */
class Scramble {
  constructor(el) {
    this.el    = el;
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_/><';
    this.orig  = el.textContent;
    this.run();
  }
  run() {
    let iter = 0;
    const orig = this.orig;
    const interval = setInterval(() => {
      this.el.textContent = orig
        .split('')
        .map((ch, i) => {
          if (i < iter) return orig[i];
          if (ch === ' ') return ' ';
          return this.chars[Math.floor(Math.random() * this.chars.length)];
        })
        .join('');
      if (iter >= orig.length) clearInterval(interval);
      iter += 1.5;
    }, 30);
  }
}

window.addEventListener('load', () => {
  const h1 = document.querySelector('.hero h1');
  if (h1) new Scramble(h1);
});


/* ===== SCROLL REVEAL ===== */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));


/* ===== MAGNETIC CARD HOVER ===== */
document.querySelectorAll('.card, .stat, .validation-card, .decision-card, .learning-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width  / 2;
    const y = e.clientY - rect.top  - rect.height / 2;
    const strength = 6;
    card.style.transform = `translateY(-6px) rotateX(${-y / rect.height * strength}deg) rotateY(${x / rect.width * strength}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});


/* ===== LIGHTBOX ===== */
const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightbox-img');
const lightboxClose= document.getElementById('lightbox-close');

if (lightbox) {
  document.querySelectorAll('.image-grid img').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.add('active');
      lightboxImg.src = img.src;
    });
  });

  lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.classList.remove('active');
  });
}


/* ===== ACTIVE NAV SECTION ===== */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(sec => {
    const top    = sec.offsetTop - 120;
    const bottom = top + sec.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(a => a.classList.remove('active-nav'));
      const match = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
      if (match) match.classList.add('active-nav');
    }
  });
}, { passive: true });