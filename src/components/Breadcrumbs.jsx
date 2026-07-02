import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, House } from 'lucide-react';

const labelMap = {
  '/': 'Inicio',
  '/careers': 'Carreras',
  '/admission': 'Admisión',
  '/about': 'Institucional',
  '/research': 'Investigación',
  '/library': 'Biblioteca',
  '/transparency': 'Transparencia',
  '/news': 'Noticias',
  '/preinscripcion': 'Preinscripción',
  '/malla-curricular': 'Malla Curricular',
  '/docentes': 'Docentes',
  '/laboratorios': 'Laboratorios',
  '/convenios': 'Convenios',
  '/perfil-egresado': 'Perfil del Egresado',
  '/modalidades': 'Modalidades',
  '/cronograma': 'Cronograma',
  '/costos': 'Costos y Tasas',
  '/requisitos': 'Requisitos',
  '/resultados': 'Resultados',
  '/contact': 'Contacto',
  '/galeria': 'Galería',
  '/faq': 'Preguntas Frecuentes',
  '/bolsa-trabajo': 'Bolsa de Trabajo',
  '/directorio': 'Directorio',
  '/privacidad': 'Políticas de Privacidad',
  '/calendario': 'Calendario Académico',
  '/dashboard': 'Dashboard Estudiantil',
};

export default function Breadcrumbs() {
  const { pathname } = useLocation();

  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const crumbs = [{ label: 'Inicio', path: '/' }];

  let accum = '';
  for (const seg of segments) {
    accum += '/' + seg;
    crumbs.push({ label: labelMap[accum] || seg, path: accum });
  }

  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-2" aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-xs text-slate-text/50 dark:text-dark-text/50">
        {crumbs.map((crumb, idx) => (
          <li key={crumb.path} className="flex items-center gap-1.5">
            {idx > 0 && <ChevronRight className="w-3 h-3 shrink-0" />}
            {idx === 0 && <House className="w-3 h-3 shrink-0" />}
            {idx === crumbs.length - 1 ? (
              <span className="text-slate-text/70 dark:text-dark-text/70 font-medium truncate max-w-[200px]">
                {crumb.label}
              </span>
            ) : (
              <Link
                to={crumb.path}
                className="hover:text-primary dark:hover:text-secondary transition-colors truncate max-w-[150px]"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
