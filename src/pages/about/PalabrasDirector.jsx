import { MessageSquareQuote } from 'lucide-react';
import AboutPageShell from './AboutPageShell';
import director from '../../../public/imagen1.png'

export default function PalabrasDirector({ t }) {
  const data = t.aboutMenu?.col1?.[1] || {};
  return (
    <AboutPageShell
      t={t}
      title={data.title || 'Palabras del Director'}
      breadcrumb={data.title || 'Palabras del Director'}
    >
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 md:p-10 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-4 border-white dark:border-dark-bg shadow-lg mb-4">
              {/* Imagen genérica para el director (placeholder) */}
              <div className="w-full h-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center text-primary/50 text-4xl">
                <img src={director} alt="director" />
              </div>
            </div>
            <h3 className="text-x1 font-bold text-slate-text dark:text-white text-center"> 
              Jorge Antonio Cordova Correa </h3>
            
            <h4 className="text-xl font-bold text-slate-text dark:text-white text-center">
              Director General
            </h4>
            <p className="text-sm text-primary dark:text-secondary font-medium">
              IESTP Suiza
            </p>
          </div>

          <div className="w-full md:w-2/3 relative">
            <MessageSquareQuote className="absolute -top-4 -left-4 w-12 h-12 text-primary/10 dark:text-white/5" />
            <div className="relative z-10 space-y-6 text-sm md:text-base text-slate-text/80 dark:text-dark-text/80 leading-relaxed italic text-justify">
              <p>
                Iniciamos este nuevo período lectivo con novedades académicas e institucionales que han de motivar nuestro orgullo y satisfacción de pertenecer a una institución de excelencia que ha merecido el reconocimiento no solo en el país sino en el exterior, principalmente por el Ministerio de Educación del Perú, debido a que cumple las condiciones de calidad necesarias para garantizar una enseñanza y formación profesional de alto nivel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutPageShell>
  );
}
