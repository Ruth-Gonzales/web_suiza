import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { translations } from '../translations';

const t = translations[localStorage.getItem('lang') || 'es'];

const images = [
  { src: '/fontis.jpg', alt: t.carousel.img1Alt },
  { src: '/frontis_2.jpg', alt: t.carousel.img2Alt },
  { src: '/campus.jpg', alt: t.carousel.img3Alt },
];

export default function Carousel({ autoPlayInterval = 5000, children }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % images.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + images.length) % images.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background images with crossfade */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {/* Improved gradient: darker left for readability, transparent right for image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001029]/95 from-[0%] via-[#001A41]/80 via-[30%] via-primary/40 via-[55%] to-transparent to-[70%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
      </div>

      {/* Content on top */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 md:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/25 hover:scale-105 transition-all duration-250 opacity-0 group-hover:opacity-100 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 md:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/25 hover:scale-105 transition-all duration-250 opacity-0 group-hover:opacity-100 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
              idx === current
                ? 'bg-white w-8'
                : 'bg-white/40 hover:bg-white/70 w-2'
            }`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
