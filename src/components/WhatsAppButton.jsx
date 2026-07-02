import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const PHONE = '51924006513';
const MESSAGE = 'Hola,%20quiero%20más%20información%20sobre%20IESTP%20Suiza';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setShowTooltip(false), 8000);
      return () => clearTimeout(t);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 left-6 z-[60] flex flex-col items-start gap-2">
      {showTooltip && (
        <div className="relative bg-white dark:bg-dark-card rounded-xl shadow-lg border border-primary/10 px-3 py-2 text-xs font-medium text-slate-text dark:text-dark-text animate-fade-in">
          ¿Necesitas ayuda?
          <div className="absolute bottom-0 left-4 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white dark:border-t-dark-card" />
        </div>
      )}
      <a
        href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl shadow-green-500/30 hover:shadow-2xl hover:scale-110 active:scale-90 transition-all duration-300 hover:bg-green-400"
        aria-label="Chatear por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
