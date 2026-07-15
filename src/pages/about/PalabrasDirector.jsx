import { MessageSquareQuote, Mail, Phone, MapPin } from 'lucide-react';
import AboutPageShell from './AboutPageShell';

const contactIcons = [Mail, Phone, MapPin];

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
              <div className="w-full h-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center text-primary/50 text-4xl">
                <MessageSquareQuote className="w-16 h-16" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-text dark:text-white text-center">
              {t?.aboutPage?.palabrasDirector?.directorName || 'Jorge Antonio Cordova Correa'}
            </h3>
            <h4 className="text-lg font-bold text-slate-text dark:text-white text-center">
              {t?.aboutPage?.palabrasDirector?.directorRole || 'Director General'}
            </h4>
            <p className="text-sm text-primary dark:text-secondary font-medium">
              IESTP Suiza
            </p>
          </div>

          <div className="w-full md:w-2/3 relative">
            <MessageSquareQuote className="absolute -top-4 -left-4 w-12 h-12 text-primary/10 dark:text-white/5" />
            <div className="relative z-10 space-y-6 text-sm md:text-base text-slate-text/80 dark:text-dark-text/80 leading-relaxed italic text-justify">
              <p>
                {t?.aboutPage?.palabrasDirector?.quote || 'Iniciamos este nuevo período lectivo con novedades académicas e institucionales que han de motivar nuestro orgullo y satisfacción de pertenecer a una institución de excelencia que ha merecido el reconocimiento no solo en el país sino en el exterior, principalmente por el Ministerio de Educación del Perú, debido a que cumple las condiciones de calidad necesarias para garantizar una enseñanza y formación profesional de alto nivel.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and commitment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-8">
        <div className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-6 shadow-sm">
          <h3 className="font-bold text-slate-text dark:text-white mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            {t?.aboutPage?.palabrasDirector?.futureVisionTitle || 'Nuestra Visión de Futuro'}
          </h3>
          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">
            {t?.aboutPage?.palabrasDirector?.futureVisionDesc || 'Trabajamos incansablemente para que al 2030 seamos reconocidos como el instituto tecnológico líder de la Amazonía peruana, con estándares de calidad internacional, infraestructura moderna y egresados altamente empleables.'}
          </p>
        </div>
        <div className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-6 shadow-sm">
          <h3 className="font-bold text-slate-text dark:text-white mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            {t?.aboutPage?.palabrasDirector?.qualityTitle || 'Compromiso con la Calidad'}
          </h3>
          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">
            {t?.aboutPage?.palabrasDirector?.qualityDesc || 'Cada día renovamos nuestro compromiso con la excelencia académica, la innovación tecnológica y la formación integral de nuestros estudiantes, preparándolos para los desafíos del mundo laboral.'}
          </p>
        </div>
      </div>

      {/* Contact info */}
      <div className="rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-white/8 p-6 shadow-sm">
        <h3 className="font-bold text-slate-text dark:text-white mb-4 text-sm">{t?.aboutPage?.palabrasDirector?.contactTitle || 'Contacto de Dirección'}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {(t?.aboutPage?.palabrasDirector?.contact || [
            { label: 'Email', value: 'direccion@iestpsuiza.edu.pe' },
            { label: 'Teléfono', value: '(061) 280665' },
            { label: 'Dirección', value: 'Carretera Federico Basadre Km 5.700' }
          ]).map((item, idx) => {
            const Icon = contactIcons[idx];
            return (
              <div key={idx} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-primary dark:text-secondary flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-text/50 dark:text-dark-text/50">{item.label}</p>
                  <p className="text-xs font-medium text-slate-text dark:text-white">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AboutPageShell>
  );
}
