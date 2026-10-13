// Shared navigation and same-page music-video lightbox.
(() => {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(link => {
    const target = link.getAttribute('href');
    if (target === current || (current === '' && target === 'index.html')) link.classList.add('active');
  });

  const lightbox = document.getElementById('video-lightbox');
  const frame = document.getElementById('video-frame');
  if (!lightbox || !frame) return;
  const closeButton = lightbox.querySelector('.lightbox-close');
  let lastTrigger = null;
  const close = () => {
    lightbox.hidden = true;
    frame.src = '';
    document.body.classList.remove('lightbox-open');
    if (lastTrigger) lastTrigger.focus();
  };
  document.querySelectorAll('[data-video]').forEach(button => {
    button.addEventListener('click', () => {
      lastTrigger = button;
      frame.src = `https://www.youtube-nocookie.com/embed/${button.dataset.video}?autoplay=1&rel=0&playsinline=1`;
      lightbox.hidden = false;
      document.body.classList.add('lightbox-open');
      closeButton.focus();
    });
  });
  closeButton.addEventListener('click', close);
  lightbox.addEventListener('click', event => { if (event.target === lightbox) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !lightbox.hidden) close(); });
})();
