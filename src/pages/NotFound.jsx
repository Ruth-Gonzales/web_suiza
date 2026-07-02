import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-lg">
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-soft-pulse" />
          <div className="relative text-8xl font-black text-primary/20 dark:text-primary/10 select-none">
            404
          </div>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-text dark:text-white mb-3">
          Página no encontrada
        </h1>
        <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mb-8 leading-relaxed">
          La página que buscas no existe o ha sido movida. Revisa la URL o vuelve al inicio.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            Volver al inicio
          </Link>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/20 text-slate-text dark:text-dark-text font-medium text-sm hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <Search className="w-4 h-4" />
            Explorar carreras
          </Link>
        </div>
      </div>
    </div>
  );
}
