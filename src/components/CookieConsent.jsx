import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem('cookieConsent');
      if (!accepted) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem('cookieConsent', 'true');
    } catch {
      // localStorage no disponible
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl bg-white/95 dark:bg-dark-card/95 backdrop-blur-xl border border-primary/10 dark:border-dark-border/40 shadow-2xl p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 shrink-0">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-slate-text/80 dark:text-dark-text/80 leading-relaxed">
              Usamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestra{' '}
               <a href="/privacidad" className="text-primary hover:underline font-medium">Política de Privacidad</a>.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={accept}
              className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Aceptar
            </button>
            <button
              onClick={accept}
              className="p-2.5 rounded-xl text-slate-text/50 dark:text-dark-text/50 hover:bg-slate-light dark:hover:bg-dark-border/50 transition-all cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
