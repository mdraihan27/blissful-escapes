const HEADER_OFFSET = 80;
const SCROLL_DURATION_MS = 1400;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function smoothScrollTo(targetId: string) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const startY = window.scrollY;
  const targetY = startY + target.getBoundingClientRect().top - HEADER_OFFSET;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
