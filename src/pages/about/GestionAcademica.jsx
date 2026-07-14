import { GraduationCap, BookOpen, ClipboardList, Calendar, Users, FileCheck } from 'lucide-react';
import AboutPageShell from './AboutPageShell';

export default function GestionAcademica({ t }) {
  const data = t.aboutMenu?.col2?.[0] || {};
  const areas = [
    { icon: BookOpen, title: 'Currículo', desc: 'Diseño, actualización y evaluación de planes de estudio alineados a las demandas del mercado laboral.' },
    { icon: ClipboardList, title: 'Evaluación Académica', desc: 'Sistema de evaluación continua con indicadores de logro y seguimiento al desempeño estudiantil.' },
    { icon: Calendar, title: 'Calendarización', desc: 'Planificación académica semestral con cronogramas de actividades lectivas y evaluaciones.' },
    { icon: Users, title: 'Tutoría', desc: 'Programa de acompañamiento y orientación estudiantil para asegurar la permanencia y el éxito académico.' },
    { icon: FileCheck, title: 'Certificación', desc: 'Proceso de certificación y titulación con estándares de calidad y reconocimiento oficial.' },
  ];

  return (
    <AboutPageShell
      t={t}
      title={data.title || 'Gestión Académica'}
      breadcrumb={data.title || 'Gestión Académica'}
    >
      {/* Intro */}
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 shadow-sm mb-8">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-7 h-7 text-primary dark:text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-text dark:text-white mb-2">Organización Académica</h2>
            <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">
              La gestión académica del IESTP Suiza está orientada a garantizar la calidad educativa mediante 
              procesos planificados, ejecutados y evaluados con rigurosidad. Contamos con una estructura 
              organizativa que asegura el cumplimiento de nuestros objetivos formativos.
            </p>
          </div>
        </div>
      </div>

      {/* Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {areas.map((area, idx) => {
          const Icon = area.icon;
          return (
            <div key={idx} className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary dark:text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-text dark:text-white text-sm mb-1">{area.title}</h3>
                  <p className="text-xs text-slate-text/60 dark:text-dark-text/60 leading-relaxed">{area.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Academic calendar highlights */}
      <div className="rounded-[2rem] bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-white/8 p-8 shadow-sm">
        <h3 className="font-bold text-slate-text dark:text-white mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary dark:text-secondary" />
          Calendario Académico 2026
        </h3>
        <div className="space-y-3">
          {[
            { period: 'I Semestre', date: 'Marzo — Julio 2026', status: 'En curso' },
            { period: 'Vacaciones', date: 'Agosto 2026', status: 'Próximo' },
            { period: 'II Semestre', date: 'Setiembre — Diciembre 2026', status: 'Próximo' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-dark-card border border-primary/5 dark:border-white/5">
              <div>
                <p className="text-sm font-semibold text-slate-text dark:text-white">{item.period}</p>
                <p className="text-[11px] text-slate-text/50 dark:text-dark-text/50">{item.date}</p>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                item.status === 'En curso'
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                  : 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AboutPageShell>
  );
}
