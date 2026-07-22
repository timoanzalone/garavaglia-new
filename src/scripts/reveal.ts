const SELECTOR = '.gara-reveal';
const REVEALED = 'is-in';

let observer: IntersectionObserver | null = null;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function revealAll(nodes: Iterable<Element>) {
  for (const el of nodes) {
    el.classList.add(REVEALED);
  }
}

/** Reveal elements currently in the document. Safe to call on every astro:page-load. */
export function initReveal() {
  observer?.disconnect();
  observer = null;

  const nodes = [...document.querySelectorAll(SELECTOR)];
  if (nodes.length === 0) return;

  if (prefersReducedMotion()) {
    revealAll(nodes);
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add(REVEALED);
        observer?.unobserve(entry.target);
      }
    },
    {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.12,
    },
  );

  for (const el of nodes) {
    if (el.classList.contains(REVEALED)) continue;
    observer.observe(el);
  }
}
