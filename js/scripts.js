window.addEventListener('load', () => {
  const slideEl = document.querySelector('.slide-in');
  if (slideEl) {
    slideEl.style.opacity = '1';
    slideEl.style.animation = 'slideIn 1s ease-out forwards';
  }
});
