import { Target, Eye, CheckCircle, Star, Heart, Lightbulb, Shield } from 'lucide-react';
import AboutPageShell from './AboutPageShell';

export default function VisionMision({ t }) {
  const data = t.aboutMenu?.col1?.[2] || {};
  const values = [
    { icon: Star, title: 'Excelencia', desc: 'Buscamos el más alto estándar en la formación técnica y humana.' },
    { icon: Lightbulb, title: 'Innovación', desc: 'Impulsamos la investigación aplicada y el uso de tecnologías de vanguardia.' },
    { icon: Heart, title: 'Inclusión', desc: 'Respetamos y valoramos la diversidad sociocultural de nuestra Amazonía.' },
    { icon: Shield, title: 'Integridad', desc: 'Actuamos con ética, honestidad, transparencia y responsabilidad social.' },
  ];

  return (
    <AboutPageShell
      t={t}
      title={data.title || 'Visión y Misión'}
      breadcrumb={data.title || 'Visión y Misión'}
    >
      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-5">
            <Target className="w-7 h-7 text-primary dark:text-secondary" />
          </div>
          <h3 className="text-xl font-bold text-slate-text dark:text-white mb-3">Misión</h3>
          <p className="text-sm text-slate-text/75 dark:text-dark-text/75 leading-relaxed">
            Somos una institución de educación superior tecnológica pública licenciada, dedicada a formar 
            profesionales técnicos competentes, creativos, innovadores y con sólidos valores éticos, capaces 
            de contribuir activamente al desarrollo socioeconómico sostenible de la región Ucayali y el país.
          </p>
        </div>
        <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-5">
            <Eye className="w-7 h-7 text-primary dark:text-secondary" />
          </div>
          <h3 className="text-xl font-bold text-slate-text dark:text-white mb-3">Visión</h3>
          <p className="text-sm text-slate-text/75 dark:text-dark-text/75 leading-relaxed">
            Al 2030, ser un instituto tecnológico líder en la Amazonía peruana y referente nacional por su 
            excelencia académica, infraestructura moderna, procesos automatizados, convenios internacionales 
            y egresados de alta empleabilidad comprometidos con la innovación y el cuidado ambiental.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div className="rounded-[2rem] bg-white/50 dark:bg-dark-card/50 border border-primary/10 dark:border-white/8 p-8 md:p-10 shadow-sm mb-8">
        <h3 className="text-xl font-bold text-slate-text dark:text-white mb-6 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-primary dark:text-secondary" />
          Nuestros Valores Institucionales
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-dark-card border border-primary/5 dark:border-white/5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary dark:text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-text dark:text-white text-sm">{v.title}</h4>
                  <p className="text-xs text-slate-text/60 dark:text-dark-text/60 mt-1 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Objetivos */}
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 shadow-sm">
        <h3 className="text-xl font-bold text-slate-text dark:text-white mb-6">Objetivos Estratégicos</h3>
        <div className="space-y-4">
          {[
            'Fortalecer la calidad académica mediante la actualización curricular y la capacitación docente continua.',
            'Modernizar la infraestructura tecnológica y los laboratorios especializados de todos los programas.',
            'Incrementar los convenios institucionales para prácticas pre-profesionales y colaboración internacional.',
            'Implementar un sistema de gestión de calidad con procesos automatizados y transparencia administrativa.',
            'Promover la investigación aplicada y la innovación tecnológica en las líneas de cada programa de estudio.',
          ].map((obj, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[10px] font-bold text-primary dark:text-secondary">{idx + 1}</span>
              </div>
              <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">{obj}</p>
            </div>
          ))}
        </div>
      </div>
    </AboutPageShell>
  );
}
