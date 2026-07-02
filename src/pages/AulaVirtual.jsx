import { Monitor, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AulaVirtual() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
          <Monitor className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-text dark:text-white mb-3">Aula Virtual</h1>
        <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mb-8 leading-relaxed">
          Accede al sistema de aula virtual del IESTP Suiza para consultar tus cursos, notas y materiales educativos.
        </p>
        <a
          href="https://www.iestpsuiza.edu.pe/aulavirtual"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 mb-4"
        >
          <ExternalLink className="w-4 h-4" />
          Ir al Aula Virtual
        </a>
        <div>
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-slate-text/60 dark:text-dark-text/60 hover:text-primary transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
