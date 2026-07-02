import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const resetTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    resetTimerRef.current = setTimeout(() => { setSubscribed(false); setEmail(''); }, 4000);
  };

  return (
    <div className="w-full">
      <h3 className="font-semibold text-sm text-slate-text dark:text-white uppercase tracking-wider mb-3">
        Boletín Informativo
      </h3>
      <p className="text-xs text-slate-text/70 dark:text-dark-text/70 mb-3 leading-relaxed">
        Recibe noticias sobre admisión, eventos y más.
      </p>
      {subscribed ? (
        <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 font-medium">
          <CheckCircle className="w-4 h-4 shrink-0" />
          ¡Te has suscrito correctamente!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-text/40 dark:text-dark-text/40" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              required
              className="w-full pl-8 pr-3 py-2 rounded-lg text-xs bg-white dark:bg-dark-border/40 border border-primary/10 dark:border-dark-border text-slate-text dark:text-dark-text placeholder-slate-text/40 dark:placeholder-dark-text/40 outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
          <button
            type="submit"
            className="p-2 rounded-lg bg-primary text-white hover:bg-primary-dark active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
            aria-label="Suscribirse"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      )}
    </div>
  );
}
