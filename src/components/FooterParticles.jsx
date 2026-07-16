import { useEffect, useRef } from 'react';

export default function FooterParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frameId;
    let particles = [];

    const resize = () => {
      const r = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      canvas.style.width = `${r.width}px`;
      canvas.style.height = `${r.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    class Particle {
      constructor(w, h) {
        this.init(w, h, true);
      }

      init(w, h, scattered) {
        this.x = Math.random() * w;
        this.y = scattered
          ? h * 0.4 + Math.random() * h * 0.6
          : h + Math.random() * 20;
        this.r = 3 + Math.random() * 5;
        this.vy = -(0.04 + Math.random() * 0.1);
        this.vx = (Math.random() - 0.5) * 0.06;
        this.wave = Math.random() * Math.PI * 2;
        this.waveSpeed = 0.003 + Math.random() * 0.006;
        this.waveAmp = 0.15 + Math.random() * 0.25;
        this.alpha = 0;
        this.maxAlpha = 0.15 + Math.random() * 0.2;
        this.w = w;
        this.h = h;
      }

      update() {
        if (!prefersReduced) {
          this.y += this.vy;
          this.wave += this.waveSpeed;
          this.x += this.vx + Math.sin(this.wave) * this.waveAmp;
        }

        const ratio = this.y / this.h;
        if (ratio > 0.85) {
          this.alpha = ((1 - ratio) / 0.15) * this.maxAlpha;
        } else if (ratio < 0.3) {
          this.alpha = (ratio / 0.3) * this.maxAlpha;
        } else {
          this.alpha = this.maxAlpha;
        }

        if (this.y < -10 || this.x < -10 || this.x > this.w + 10) {
          this.init(this.w, this.h, false);
        }
      }

      draw(c) {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.fillStyle = `rgba(200,220,255,${this.alpha})`;
        c.fill();
      }
    }

    const create = () => {
      const r = canvas.parentElement.getBoundingClientRect();
      const count = Math.min(Math.floor(r.width / 40), 35);
      particles = Array.from({ length: count }, () => new Particle(r.width, r.height));
    };

    resize();
    create();

    const loop = () => {
      const w = canvas.parentElement.getBoundingClientRect().width;
      const h = canvas.parentElement.getBoundingClientRect().height;
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => { p.update(); p.draw(ctx); });
      frameId = requestAnimationFrame(loop);
    };

    if (!prefersReduced) loop();
    else particles.forEach((p) => { p.alpha = p.maxAlpha; p.draw(ctx); });

    let lastW = canvas.parentElement.getBoundingClientRect().width;
    const onResize = () => {
      resize();
      const cur = canvas.parentElement.getBoundingClientRect().width;
      if (Math.abs(cur - lastW) > 60) { lastW = cur; create(); }
    };

    const ro = new ResizeObserver(onResize);
    ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(frameId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block pointer-events-none"
    />
  );
}
