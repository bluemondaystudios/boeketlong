// Site-wide motion: scroll reveals, count-up numbers, the header's scrolled
// state and the room carousel buttons. Everything works, and stays visible,
// without this script; it only adds polish.

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Reveal elements as they scroll into view.
const revealer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('in');
      revealer.unobserve(entry.target);
    }
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
);
document.querySelectorAll('[data-reveal]').forEach((el) => revealer.observe(el));
document.documentElement.classList.add('motion-ready');

// Count numbers up from zero when they appear: <span data-count="750">750</span>.
const counter = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      counter.unobserve(entry.target);
      const el = entry.target as HTMLElement;
      const target = Number(el.dataset.count);
      if (reduceMotion || !Number.isFinite(target)) continue;
      const start = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased).toLocaleString('en-US');
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  },
  { threshold: 0.6 },
);
document.querySelectorAll('[data-count]').forEach((el) => counter.observe(el));

// Header: transparent over the homepage photo, solid once you scroll.
const header = document.querySelector<HTMLElement>('.site-header');
if (header) {
  const update = () => header.classList.toggle('scrolled', scrollY > 24);
  update();
  addEventListener('scroll', update, { passive: true });
}

// Carousel prev/next buttons scroll the track by one card.
document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector<HTMLElement>('[data-track]');
  const prev = carousel.querySelector<HTMLButtonElement>('[data-prev]');
  const next = carousel.querySelector<HTMLButtonElement>('[data-next]');
  if (!track || !prev || !next) return;

  const step = () => (track.firstElementChild as HTMLElement | null)?.offsetWidth ?? track.clientWidth;
  const gap = () => parseFloat(getComputedStyle(track).columnGap) || 0;
  prev.addEventListener('click', () => track.scrollBy({ left: -(step() + gap()), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step() + gap(), behavior: 'smooth' }));

  const sync = () => {
    prev.disabled = track.scrollLeft < 8;
    next.disabled = track.scrollLeft + track.clientWidth > track.scrollWidth - 8;
  };
  sync();
  track.addEventListener('scroll', sync, { passive: true });
  addEventListener('resize', sync);
});
