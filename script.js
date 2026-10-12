// Small progressive enhancement: reveal project cards as they enter the viewport.
const cards = document.querySelectorAll('.project, .still');
if ('IntersectionObserver' in window) {
  cards.forEach(card => card.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  cards.forEach(card => observer.observe(card));
}
