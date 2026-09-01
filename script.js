// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Hero role rotator — one quiet, orchestrated moment on load
const phrases = [
  'sense the real world',
  'catch anomalies in real time',
  'hold up under load',
  'turn data into decisions'
];

const rotatorEl = document.getElementById('rotator');

if (rotatorEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let index = 0;

  const typeSpeed = 45;
  const deleteSpeed = 30;
  const holdTime = 1800;

  function typePhrase(text, onDone) {
    let i = 0;
    (function step() {
      rotatorEl.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) {
        setTimeout(step, typeSpeed);
      } else {
        onDone();
      }
    })();
  }

  function deletePhrase(text, onDone) {
    let i = text.length;
    (function step() {
      rotatorEl.textContent = text.slice(0, i);
      i--;
      if (i >= 0) {
        setTimeout(step, deleteSpeed);
      } else {
        onDone();
      }
    })();
  }

  function cycle() {
    const current = phrases[index];
    typePhrase(current, () => {
      setTimeout(() => {
        deletePhrase(current, () => {
          index = (index + 1) % phrases.length;
          cycle();
        });
      }, holdTime);
    });
  }

  cycle();
}
