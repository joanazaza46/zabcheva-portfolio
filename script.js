(() => {
  const cards = [...document.querySelectorAll('.project')];
  const lightbox = document.getElementById('lightbox');
  const player = document.getElementById('player');
  const closeButton = document.querySelector('.close');
  const modalTitle = document.getElementById('modal-title');
  const modalCredit = document.getElementById('modal-credit');
  let activeCard = null;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function playPreview(card) {
    if (reduceMotion || window.matchMedia('(hover: none)').matches) return;
    const video = card.querySelector('.hover-video');
    if (!video) return;
    const attempt = video.play();
    if (attempt && typeof attempt.then === 'function') {
      attempt.then(() => card.classList.add('is-playing')).catch(() => {});
    } else card.classList.add('is-playing');
  }
  function stopPreview(card) {
    const video = card.querySelector('.hover-video');
    if (!video) return;
    video.pause();
    try { video.currentTime = 0; } catch (_) {}
    card.classList.remove('is-playing');
  }
  cards.forEach(card => {
    const video = card.querySelector('.hover-video');
    const poster = card.querySelector('.poster');
    if (poster) {
      poster.addEventListener('load', () => { if (poster.naturalWidth) card.querySelector('.media').classList.add('has-poster'); });
      poster.addEventListener('error', () => poster.remove());
      if (poster.complete && poster.naturalWidth) card.querySelector('.media').classList.add('has-poster');
    }
    if (video) {
      video.addEventListener('loadeddata', () => card.querySelector('.media').classList.add('has-poster'));
      video.addEventListener('error', () => { /* A missing local clip leaves the clean placeholder visible. */ });
    }
    card.addEventListener('mouseenter', () => playPreview(card));
    card.addEventListener('mouseleave', () => stopPreview(card));
    card.addEventListener('focus', () => playPreview(card));
    card.addEventListener('blur', () => stopPreview(card));
    card.addEventListener('click', () => openVideo(card));
  });
  function openVideo(card) {
    activeCard = card;
    cards.forEach(stopPreview);
    const title = card.dataset.title || 'Selected work';
    const credit = card.dataset.credit || 'CINEMATOGRAPHY';
    const localPath = card.dataset.local;
    const yt = card.dataset.youtube;
    modalTitle.textContent = title;
    modalCredit.textContent = credit;
    player.replaceChildren();
    // Self-hosted clips use the browser's native player. If a local file isn't uploaded yet,
    // the first project gracefully falls back to its YouTube embed.
    if (localPath && !card.dataset.youtubeFallback) {
      const video = document.createElement('video');
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.preload = 'auto';
      video.src = localPath;
      video.addEventListener('error', () => {
        if (yt && player.contains(video)) {
          card.dataset.youtubeFallback = 'true';
          video.remove();
          addYoutube(yt, title);
        }
      }, { once: true });
      player.append(video);
      video.play().catch(() => {});
    } else if (yt) addYoutube(yt, title);
    else {
      const message = document.createElement('p');
      message.className = 'missing-video';
      message.textContent = 'Add this project video at ' + localPath;
      player.append(message);
    }
    lightbox.hidden = false;
    document.body.classList.add('modal-open');
    closeButton.focus();
  }
  function addYoutube(id, title) {
    const frame = document.createElement('iframe');
    frame.title = title;
    frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0&modestbranding=1`;
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    player.append(frame);
  }
  function closeVideo() {
    lightbox.hidden = true;
    player.replaceChildren();
    document.body.classList.remove('modal-open');
    if (activeCard) activeCard.focus({ preventScroll: true });
    activeCard = null;
  }
  closeButton.addEventListener('click', closeVideo);
  lightbox.addEventListener('click', event => { if (event.target === lightbox) closeVideo(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !lightbox.hidden) closeVideo(); });
})();
