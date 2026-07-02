const NAVBAR_HEIGHT = 120;

export function scrollToHash(hash) {
  if (!hash || hash === '#') return;

  const id = hash.replace('#', '');
  const el = document.getElementById(id);
  if (!el) {
    setTimeout(() => {
      const retry = document.getElementById(id);
      if (retry) {
        retry.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => window.scrollBy(0, -NAVBAR_HEIGHT), 100);
      }
    }, 300);
    return;
  }

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => window.scrollBy(0, -NAVBAR_HEIGHT), 100);
}
