// ── Menu burger mobile ──────────────────────
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

if (burger && mobileMenu) {

  burger.onclick = () => {
    mobileMenu.classList.toggle('is-open');
  };

}

// ── Animations au scroll (Intersection Observer) ────
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Éléments à animer à l'entrée dans le viewport
document.querySelectorAll([
  '.public-bubble',
  '.osteo__card',
  '.timeline__item',
  '.acces__bloc',
  '.tarif__card'
].join(',')).forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
  observer.observe(el);
});

document.addEventListener('animationend', () => {}, { once: true });

// Classe ajoutée par l'observer
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .is-visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  </style>
`);
