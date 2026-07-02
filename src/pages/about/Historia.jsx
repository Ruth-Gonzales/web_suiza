import { History, Landmark, GraduationCap, Building2, Award } from 'lucide-react';
import AboutPageShell from './AboutPageShell';

const timeline = [
  {
    year: '1976',
    title: 'Fundación',
    desc: 'Nace como respuesta a la creciente demanda de formación técnica calificada en la provincia de Coronel Portillo, Ucayali, ofreciendo los primeros programas en áreas agropecuarias y de mecánica.',
    icon: Landmark,
  },
  {
    year: '1995',
    title: 'Consolidación y Nuevos Programas',
    desc: 'Se inaugura el campus actual en la Carretera Federico Basadre y se incorporan especialidades como Contabilidad, Computación e Informática y Enfermería Técnica, adaptándose al crecimiento tecnológico de la época.',
    icon: Building2,
  },
  {
    year: '2018',
    title: 'Modernización Tecnológica',
    desc: 'Se equipan nuevos laboratorios con tecnología de punta en mecatrónica automotriz y desarrollo de software. Se consolidan convenios estratégicos con empresas nacionales y regionales.',
    icon: GraduationCap,
  },
  {
    year: '2024',
    title: 'Licenciamiento Institucional',
    desc: 'El IESTP Suiza logra exitosamente su licenciamiento institucional ante el Ministerio de Educación, validando sus condiciones básicas de calidad académica, infraestructura y gestión.',
    icon: Award,
  },
];

export default function Historia({ t }) {
  const data = t.aboutMenu?.col1?.[3] || {};

  return (
    <AboutPageShell
      t={t}
      title={data.title || 'Historia Institucional'}
      breadcrumb={data.title || 'Historia Institucional'}
    >
      {/* Intro */}
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 shadow-sm mb-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
            <History className="w-7 h-7 text-primary dark:text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-text dark:text-white mb-2">Nuestra Trayectoria</h2>
            <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">
              Desde nuestra fundación en 1976, el IESTP Suiza ha sido testigo y protagonista del desarrollo 
              educativo y tecnológico de la región Ucayali. A lo largo de más de cuatro décadas, hemos evolucionado 
              para ofrecer una educación técnica de calidad, adaptándonos a los cambios y necesidades del mercado laboral.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 md:p-10 shadow-sm mb-8">
        <div className="relative border-l border-primary/20 dark:border-primary/30 pl-8 ml-4 space-y-10">
          {timeline.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative group">
                <div className="absolute -left-[45px] top-1 w-9 h-9 rounded-xl bg-white dark:bg-dark-card border-2 border-primary dark:border-secondary flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <Icon className="w-4 h-4 text-primary dark:text-secondary" />
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-5 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
                  <span className="text-xs font-extrabold text-primary dark:text-secondary tracking-wider">{item.year}</span>
                  <h3 className="text-base md:text-lg font-bold text-slate-text dark:text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gallery */}
      <div className="rounded-[2rem] bg-white/50 dark:bg-dark-card/50 border border-primary/10 dark:border-white/8 p-8 shadow-sm">
        <h3 className="text-lg font-bold text-slate-text dark:text-white mb-5">Galería Histórica</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Primera Promoción', year: '1979' },
            { label: 'Nuevo Campus', year: '1995' },
            { label: 'Laboratorios', year: '2018' },
            { label: 'Licenciamiento', year: '2024' },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-dark-hover/40 aspect-square flex flex-col items-center justify-center p-4 text-center border border-primary/5 dark:border-white/5 hover:scale-[1.02] transition-transform">
              <Landmark className="w-8 h-8 text-primary/40 dark:text-secondary/40 mb-2" />
              <p className="text-xs font-bold text-slate-text dark:text-white">{item.label}</p>
              <p className="text-[10px] text-primary dark:text-secondary font-semibold">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </AboutPageShell>
  );
}
