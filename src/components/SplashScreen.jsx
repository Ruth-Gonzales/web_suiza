import { useState, useEffect, useRef, useCallback } from 'react';
import LogoSuiza from '../assets/img/logo_suiza_n.png';
import './SplashScreen.css';

function CombinedBackground({ active }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const PARTICLE_COUNT = 60;
    const CONNECTION_DIST = 120;
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 2.5,
        vy: (Math.random() - 0.5) * 2.5,
        size: 1.5 + Math.random() * 2,
        brightness: 0.4 + Math.random() * 0.5,
      });
    }

    let animId;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const draw = (time) => {
      animId = requestAnimationFrame(draw);
      const delta = time - lastTime;
      if (delta < interval) return;
      lastTime = time - (delta % interval);

      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > w) { p.x = w; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > h) { p.y = h; p.vy *= -1; }
      }

      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < CONNECTION_DIST * CONNECTION_DIST) {
            const alpha = (1 - Math.sqrt(distSq) / CONNECTION_DIST) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(75, 122, 244, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 193, 247, ${p.brightness})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(75, 122, 244, ${p.brightness * 0.12})`;
        ctx.fill();
      }
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [active]);

  return <canvas ref={canvasRef} className="constellation-canvas" />;
}

function EnergyParticles({ active }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const size = 250;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2;
    const cy = size / 2;

    const particles = [];
    for (let i = 0; i < 10; i++) {
      particles.push({
        angle: (Math.PI * 2 * i) / 15,
        radius: 60 + Math.random() * 30,
        speed: 0.015 + Math.random() * 0.02,
        size: 1.5 + Math.random() * 2,
        brightness: 0.3 + Math.random() * 0.7,
      });
    }

    let animId;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const draw = (time) => {
      animId = requestAnimationFrame(draw);
      const delta = time - lastTime;
      if (delta < interval) return;
      lastTime = time - (delta % interval);

      ctx.clearRect(0, 0, size, size);

      for (const p of particles) {
        p.angle += p.speed;
        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * p.radius;

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(75, 122, 244, ${p.brightness * 0.8})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(75, 122, 244, ${p.brightness * 0.15})`;
        ctx.fill();
      }
    };

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, [active]);

  return <canvas ref={canvasRef} className="energy-particles" />;
}

function ParticleBurst({ active }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const size = 400;
    canvas.width = size;
    canvas.height = size;
    const cx = size / 2;
    const cy = size / 2;

    const PARTICLES = 50;
    const burst = [];
    for (let i = 0; i < PARTICLES; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 5;
      burst.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 1 + Math.random() * 2.5,
        life: 1,
        decay: 0.015 + Math.random() * 0.02,
        color: Math.random() > 0.4
          ? [75, 122, 244]
          : [160, 193, 247],
      });
    }

    let animId;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const draw = (time) => {
      animId = requestAnimationFrame(draw);
      const delta = time - lastTime;
      if (delta < interval) return;
      lastTime = time - (delta % interval);

      ctx.clearRect(0, 0, size, size);

      let alive = false;
      for (const p of burst) {
        if (p.life <= 0) continue;
        alive = true;

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.life -= p.decay;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${p.life * 0.9})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3 * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${p.life * 0.15})`;
        ctx.fill();
      }

      if (!alive) cancelAnimationFrame(animId);
    };

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, [active]);

  return <canvas ref={canvasRef} className="particle-burst" />;
}

function TypingText({ text, shouldStart, speed = 80, onDone }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!shouldStart) return;
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setVisibleCount(count);
      if (count >= text.length) {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          if (onDone) onDone();
        }, 150);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [shouldStart, text, speed, onDone]);

  if (done) {
    return <span className="flash-chars flash-chars-done">{text}</span>;
  }

  return (
    <span className="flash-chars">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`flash-char ${i < visibleCount ? 'flash-char-visible' : ''}`}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

function LoadingBar({ progress, isOffline, visible }) {
  return (
    <div className={`loading-indicator ${visible ? 'visible' : ''}`}>
      <div className="loading-bar-glow">
        <div className="loading-bar">
          <div 
            className="loading-progress" 
            style={{ width: `${progress}%`, transition: 'width 0.3s ease-out' }}
          />
          <div className="loading-bar-shine" />
        </div>
      </div>
      <span className="loading-text">
        {isOffline ? 'Sin conexión — esperando red...' : `Cargando sistemas... ${progress}%`}
      </span>
    </div>
  );
}

function HudData({ progress, isOffline }) {
  const filled = Math.floor(progress / 10);
  const empty = 10 - filled;
  const bar = '■'.repeat(filled) + '□'.repeat(empty);
  return (
    <div className="tech-hud">
      <div className="hud-corner hud-tl" />
      <div className="hud-corner hud-tr" />
      <div className="hud-corner hud-bl" />
      <div className="hud-corner hud-br" />
      <div className="hud-line hud-line-top" />
      <div className="hud-line hud-line-bottom" />
      <div className="hud-line hud-line-left" />
      <div className="hud-line hud-line-right" />
      <div className="hud-data hud-data-1">{isOffline ? 'SYS::OFFLINE' : 'SYS::ONLINE'}</div>
      <div className="hud-data hud-data-2">v4.5.1</div>
      <div className="hud-data hud-data-3">{isOffline ? '■■■■■■■□□□ OFFLINE' : `${bar} ${progress}%`}</div>
    </div>
  );
}

export default function SplashScreen({ onComplete, isOffline }) {
  const [phase, setPhase] = useState('entering');
  const [showMatrix, setShowMatrix] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showAnimations, setShowAnimations] = useState(false);
  const [showBurst, setShowBurst] = useState(false);
  const [textDone, setTextDone] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const progressRef = useRef(0);
  const [progressDisplay, setProgressDisplay] = useState(0);
  const completedRef = useRef(false);
  const intervalRef = useRef(null);
  const timersRef = useRef([]);

  const handleTextDone = useCallback(() => setTextDone(true), []);

  useEffect(() => {
    timersRef.current = [
      setTimeout(() => setPhase('visible'), 100),
      setTimeout(() => setShowMatrix(true), 300),
      setTimeout(() => setShowLogo(true), 400),
      setTimeout(() => setShowAnimations(true), 800),
      setTimeout(() => setShowBurst(true), 900),
    ];
    return () => timersRef.current.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (isOffline || !showAnimations || completedRef.current || isExiting) return;

    progressRef.current = 0;
    setProgressDisplay(0);

    intervalRef.current = setInterval(() => {
      progressRef.current += 2;
      if (progressRef.current >= 100) {
        progressRef.current = 100;
        setProgressDisplay(100);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        completedRef.current = true;
        setIsExiting(true);
        setTimeout(() => setPhase('exiting'), 200);
        setTimeout(() => onComplete(), 600);
      } else {
        setProgressDisplay(progressRef.current);
      }
    }, 32);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [showAnimations, isOffline, onComplete, isExiting]);

  return (
    <div className={`splash-screen ${phase} ${isOffline ? 'offline' : ''}`}>
      <div className="bg-grid" />
      <CombinedBackground active={showMatrix} />
      <div className="splash-vignette" />
      
      <div className="splash-content">
        <div className={`logo-container ${showAnimations ? 'complete' : ''}`}>
          <div className="final-logo">
            <div className="logo-arc logo-arc-1" />
            <div className="logo-arc logo-arc-2" />

            <div className="shockwave-container">
              <div className="shockwave shockwave-1" />
              <div className="shockwave shockwave-2" />
              <div className="shockwave shockwave-3" />
            </div>

            <div className="offline-scan-ring" />
            <div className="offline-scan-dot" />

            <HudData progress={progressDisplay} isOffline={isOffline} />
            
            <div className="tech-circuit">
              <div className="circuit-line circuit-1" />
              <div className="circuit-line circuit-2" />
              <div className="circuit-line circuit-3" />
              <div className="circuit-line circuit-4" />
              <div className="circuit-node circuit-node-1" />
              <div className="circuit-node circuit-node-2" />
              <div className="circuit-node circuit-node-3" />
              <div className="circuit-node circuit-node-4" />
            </div>
            
            <EnergyParticles active={showAnimations} />
            
            <div className="fingerprint-overlay" />
            
            <img 
              src={LogoSuiza} 
              alt="IESTP Suiza" 
              className="logo-image"
            />
            
            <div className="logo-glow" />
            <div className="logo-glow-ring" />
            
            <ParticleBurst active={showBurst} />
          </div>
          
        </div>

        <div className={`text-container ${showAnimations ? 'visible' : ''}`}>
          <h1 className="splash-title">
            <span className="title-line line-1">Bienvenido a la página de</span>
            <span className={`title-line line-2 ${textDone ? 'glitch-text' : ''}`}>
              <TypingText text="IESTP SUIZA" shouldStart={showAnimations} speed={60} onDone={handleTextDone} />
            </span>
            <span className={`title-line line-3 ${textDone ? 'line-3-visible' : ''}`}>Instituto de Excelencia</span>
          </h1>
        </div>

        <LoadingBar progress={progressDisplay} isOffline={isOffline} visible={showAnimations} />
      </div>

      <div className="corner-decoration top-left" />
      <div className="corner-decoration top-right" />
      <div className="corner-decoration bottom-left" />
      <div className="corner-decoration bottom-right" />
    </div>
  );
}
