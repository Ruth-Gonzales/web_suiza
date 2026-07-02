import { useEffect, useRef } from 'react';

const COLORS = [
  'rgba(75, 122, 244, 0.7)',
  'rgba(75, 122, 244, 0.4)',
  'rgba(160, 193, 247, 0.6)',
  'rgba(160, 193, 247, 0.3)',
  'rgba(255, 255, 255, 0.45)',
  'rgba(75, 122, 244, 0.25)',
  'rgba(75, 122, 244, 0.8)',
  'rgba(160, 193, 247, 0.7)',
];

const GLOWS = [
  '0 0 6px rgba(75, 122, 244, 0.3)',
  '0 0 10px rgba(75, 122, 244, 0.2)',
  '0 0 8px rgba(160, 193, 247, 0.25)',
  '0 0 4px rgba(75, 122, 244, 0.4)',
];

export default function CursorBubbles() {
  const trailRef = useRef([]);
  const lastBurstRef = useRef(0);
  const isHoverRef = useRef(false);

  useEffect(() => {
    const isTouch =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const checkHover = (target) => {
      const el = target.closest(
        'button, a, [role="button"], summary, .cursor-pointer'
      );
      isHoverRef.current = !!el;
    };

    const spawnBurst = (x, y, speed) => {
      const now = Date.now();
      if (now - lastBurstRef.current < 40) return;
      lastBurstRef.current = now;

      const isFast = speed > 0.5;
      const isHover = isHoverRef.current;
      const base = isHover ? 9 : 6;
      const count = isFast
        ? base + Math.floor(Math.random() * 7)
        : base - 3 + Math.floor(Math.random() * 4);
      const sizeScale = isFast ? 1.2 : 1;
      const glowRate = isHover ? 0.55 : 0.3;

      for (let i = 0; i < count; i++) {
        const size = (2 + Math.random() * 5) * sizeScale;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const angle = Math.random() * Math.PI * 2;
        const dist = 8 + Math.random() * 38;
        const dur = 800 + Math.random() * 700;
        const type = Math.random();

        let tx, ty, finalScale;
        if (type < 0.35) {
          tx = Math.cos(angle) * dist * 0.4 + (Math.random() - 0.5) * 12;
          ty = -Math.random() * 55 - 8;
          finalScale = 0.6 + Math.random() * 1.4;
        } else if (type < 0.65) {
          tx = (Math.random() - 0.5) * 18;
          ty = (Math.random() - 0.5) * 12;
          finalScale = 2 + Math.random() * 2.8;
        } else {
          tx = Math.cos(angle) * dist;
          ty = Math.sin(angle) * dist - Math.random() * 12;
          finalScale = 0.8 + Math.random() * 1.8;
        }

        const startOp = isFast
          ? 0.5 + Math.random() * 0.5
          : 0.3 + Math.random() * 0.5;
        const startScale = 0.15 + Math.random() * 0.5;
        const hasGlow = Math.random() < glowRate;
        const glow = hasGlow
          ? GLOWS[Math.floor(Math.random() * GLOWS.length)]
          : 'none';

        const el = document.createElement('div');
        el.style.cssText =
          'position:fixed;' +
          'pointer-events:none;' +
          'z-index:99998;' +
          `width:${size}px;height:${size}px;` +
          `background:${color};` +
          'border-radius:50%;' +
          `box-shadow:${glow};` +
          `left:${x}px;top:${y}px;` +
          `opacity:${startOp};` +
          `transform:translate(-50%,-50%) scale(${startScale});`;
        document.body.appendChild(el);

        requestAnimationFrame(() => {
          el.style.transition =
            `transform ${(dur * 0.001).toFixed(2)}s cubic-bezier(0.22,0.61,0.36,1),` +
            `opacity ${(dur * 0.001).toFixed(2)}s ease`;
          el.style.transform =
            `translate(${tx.toFixed(1)}px,${ty.toFixed(1)}px) scale(${finalScale.toFixed(2)})`;
          el.style.opacity = '0';
        });

        setTimeout(() => el.remove(), dur + 50);
      }
    };

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      const trail = trailRef.current;

      trail.push({ x, y, time: Date.now() });
      if (trail.length > 25) trail.shift();

      let speed = 0;
      if (trail.length >= 3) {
        const last = trail[trail.length - 1];
        const prev = trail[Math.max(0, trail.length - 4)];
        const dt = last.time - prev.time || 1;
        const dx = last.x - prev.x;
        const dy = last.y - prev.y;
        speed = Math.sqrt(dx * dx + dy * dy) / dt;
      }

      checkHover(e.target);

      const offset = Math.max(1, Math.floor(trail.length * 0.12));
      const pos = trail[trail.length - 1 - offset] || trail[trail.length - 1];
      if (pos) spawnBurst(pos.x, pos.y, speed);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return null;
}
