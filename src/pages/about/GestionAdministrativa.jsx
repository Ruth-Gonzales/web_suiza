import { Building2, Settings, DollarSign, FileText, Users, Shield } from 'lucide-react';
import AboutPageShell from './AboutPageShell';

export default function GestionAdministrativa({ t }) {
  const data = t.aboutMenu?.col2?.[1] || {};
  const departments = [
    { icon: Settings, title: 'Dirección General', desc: 'Máxima instancia ejecutiva que lidera la planificación estratégica y la toma de decisiones institucionales.' },
    { icon: DollarSign, title: 'Administración y Finanzas', desc: 'Gestión de recursos económicos, presupuesto anual, contabilidad y tesorería institucional.' },
    { icon: FileText, title: 'Secretaría Académica', desc: 'Registro y certificación de logros académicos, archivo documentario y trámites administrativos.' },
    { icon: Users, title: 'Recursos Humanos', desc: 'Gestión del talento humano: selección, capacitación, evaluación y bienestar del personal.' },
    { icon: Shield, title: 'Bienestar Institucional', desc: 'Programas de bienestar estudiantil, servicios de salud, asistencia social y actividades culturales.' },
  ];

  return (
    <AboutPageShell
      t={t}
      title={data.title || 'Gestión Administrativa'}
      breadcrumb={data.title || 'Gestión Administrativa'}
    >
      {/* Intro */}
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 shadow-sm mb-8">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Building2 className="w-7 h-7 text-primary dark:text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-text dark:text-white mb-2">Estructura Administrativa</h2>
            <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">
              La gestión administrativa del IESTP Suiza se rige por principios de transparencia, eficiencia 
              y eficacia. Nuestra estructura organizativa permite una administración óptima de los recursos 
              institucionales al servicio de la comunidad educativa.
            </p>
          </div>
        </div>
      </div>

      {/* Departments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {departments.map((dept, idx) => {
          const Icon = dept.icon;
          return (
            <div key={idx} className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary dark:text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-text dark:text-white text-sm mb-1">{dept.title}</h3>
                  <p className="text-xs text-slate-text/60 dark:text-dark-text/60 leading-relaxed">{dept.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Documentos */}
      <div className="rounded-[2rem] bg-white/50 dark:bg-dark-card/50 border border-primary/10 dark:border-white/8 p-8 shadow-sm">
        <h3 className="font-bold text-slate-text dark:text-white mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary dark:text-secondary" />
          Documentos de Gestión
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: 'Plan Anual de Trabajo', desc: 'Documento de gestión operativa institucional 2026', color: 'from-primary/10 to-primary/5' },
            { title: 'Reglamento Interno', desc: 'Normas y disposiciones que rigen la vida institucional', color: 'from-secondary/10 to-secondary/5' },
            { title: 'Manual de Organización', desc: 'Estructura orgánica y funciones de cada unidad', color: 'from-amber-500/10 to-amber-500/5' },
          ].map((doc, idx) => (
            <div key={idx} className={`rounded-xl bg-gradient-to-br ${doc.color} dark:from-dark-card dark:to-dark-hover/30 border border-primary/5 dark:border-white/5 p-5 text-center hover:scale-[1.02] transition-transform`}>
              <FileText className="w-8 h-8 text-primary/40 dark:text-secondary/40 mx-auto mb-2" />
              <h4 className="font-bold text-xs text-slate-text dark:text-white">{doc.title}</h4>
              <p className="text-[10px] text-slate-text/50 dark:text-dark-text/50 mt-1">{doc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AboutPageShell>
  );
}
