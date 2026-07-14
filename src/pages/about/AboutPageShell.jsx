import { Link } from 'react-router-dom';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';

export default function AboutPageShell({ title, breadcrumb, image, children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 relative">
      {/* Banner */}
      <div className="relative w-full h-48 md:h-64 rounded-[2rem] overflow-hidden mb-8 bg-primary shadow-lg">
        {image ? (
          <>
            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001A41]/95 from-[0%] via-primary/90 via-[40%] to-transparent to-[75%] z-10" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-[#001A41]/95 to-primary/80 dark:from-dark-bg/90 dark:to-dark-bg/60 z-10" />
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-10" />
          </>
        )}
        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            {title}
          </h1>
          <p className="text-white/80 text-sm md:text-base mt-2 max-w-2xl font-medium">
            IESTP Suiza — Pucallpa, Ucayali
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs md:text-sm text-slate-text/60 dark:text-dark-text/60 mb-8 flex-wrap">
        <Link to="/" className="hover:text-primary dark:hover:text-secondary transition-colors flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Inicio</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/about" className="hover:text-primary dark:hover:text-secondary transition-colors">
          Nosotros
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-primary dark:text-secondary font-semibold">{breadcrumb}</span>
      </nav>

      {/* Content */}
      <div className="relative">
        {children}
      </div>

      {/* Back button */}
      <div className="mt-12 flex justify-center">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary font-semibold text-sm hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-dark-bg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Nosotros
        </Link>
      </div>
    </div>
  );
}
