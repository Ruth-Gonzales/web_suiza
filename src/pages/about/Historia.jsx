import { Award, ScrollText, GraduationCap, Calendar, Building2, Sparkles, Landmark, ChevronRight } from 'lucide-react';
import AboutPageShell from './AboutPageShell';
import institutoImg from '../../assets/imagenes.suiza/instituto.jpg';
import aulaImg from '../../assets/imagenes.suiza/aula.jpg';

export default function Historia({ t }) {
  const data = t.aboutMenu?.col1?.[3] || {};

  const milestones = [
    {
      year: '1980',
      icon: GraduationCap,
      title: 'Fundación como ESEP',
      desc: 'Los estudiantes ingresantes al Primer Ciclo de Educación Superior lo hacían con tercer año de educación secundaria y/o noveno grado de educación Básica regular. La duración de los estudios fue de seis semestres equivalente a tres años.',
      detail: 'Al finalizar sus estudios obtenían el Título de Bachiller Profesional a Nombre de la Nación.'
    },
    {
      year: '1982 — 1983',
      icon: Building2,
      title: 'Segundo Ciclo y Transformación a IST',
      desc: 'En 1982, la ESEP "SUIZA" apertura el segundo ciclo con especialidades como Administración Bancaria, Secretariado Ejecutivo, Construcción Civil, Mecánica Automotriz y Producción Pecuaria.',
      detail: 'Con Resolución Ministerial N° 131-83-ED, del 09 de marzo de 1983, se adecua a Instituto Superior Tecnológico (I.S.T.). Los egresados obtienen el Título de Profesional Técnico.'
    },
    {
      year: '1984 — 1992',
      icon: Calendar,
      title: 'Expansión de Carreras',
      desc: 'En 1984 se aperturan Contabilidad y Electricidad. En 1986, Producción Agropecuaria reemplaza a Producción Pecuaria. Entre 1990 y 1992 se crean Enfermería Técnica, Guía Oficial de Turismo y Electrónica.',
      detail: 'En 1999 se abre el Programa Piloto de Bachillerato como nuevo enfoque educativo a nivel nacional, con 180 estudiantes, culminando en el año 2001.'
    },
    {
      year: '2000 — 2009',
      icon: Sparkles,
      title: 'Nuevo Milenio y Sistema Modular',
      desc: 'En el año 2000 se apertura Computación e Informática. En 2005 se incorpora Producción Agropecuaria al Sistema Piloto - Modular, y en 2007 Enfermería Técnica.',
      detail: 'El 2009 se incorporan al sistema modular: Administración de Empresas, Contabilidad, Secretariado Ejecutivo, Computación e Informática, Electrotecnia Industrial, Construcción Civil, Mecánica Automotriz y Guía Oficial de Turismo.'
    },
    {
      year: '2016 — 2019',
      icon: Landmark,
      title: 'Modernización y Excelencia',
      desc: 'Entre 2016 y 2019 se adecuan los planes de estudio de las 11 carreras profesionales al nuevo Diseño Curricular Básico Nacional de la Educación Superior.',
      detail: 'Cambian de denominación las carreras y en 2019 es declarado Instituto de Excelencia (IDEX) de la región Ucayali.'
    }
  ];

  return (
    <AboutPageShell
      t={t}
      title={data.title || 'Historia Institucional'}
      breadcrumb={data.title || 'Historia Institucional'}
      image={aulaImg}
      imageClassName="object-top"
    >
      {/* ─── INTRO — HERALD ─── */}
      <div className="relative rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 shadow-sm mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/campus.jpg" alt="" className="w-full h-full object-cover object-right" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white from-[45%] via-white/95 via-[60%] to-transparent to-[100%] dark:from-dark-card dark:via-dark-card/95 dark:to-transparent z-0"></div>

        {/* Decorative accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary/40 dark:from-secondary dark:via-primary dark:to-secondary/40 z-10 hidden md:block"></div>

        <div className="relative z-10 flex flex-col justify-center w-full md:max-w-[62%] px-8 md:px-12 py-10 md:py-14">
          <div className="flex items-center gap-5 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 ring-2 ring-primary/5 dark:ring-primary/10">
              <ScrollText className="w-7 h-7 text-primary dark:text-secondary" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/60 dark:text-dark-text/50 mb-1">
                Reseña Histórica
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-text dark:text-white leading-tight">
                Instituto de Educación Superior<br />Tecnológico Público Suiza
              </h2>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-primary/20 to-transparent dark:from-white/10 mb-5"></div>

          <p className="text-sm text-slate-text/50 dark:text-dark-text/50 font-medium mb-4">
            Más de 4 décadas de historia educativa
          </p>

          <div className="space-y-4 text-sm md:text-base text-slate-text/80 dark:text-dark-text/80 leading-relaxed text-justify max-w-3xl">
            <p>
              El Instituto de Educación Superior Tecnológico Público "Suiza" de Pucallpa, se inició como Escuela Superior Profesional ESEP. Mediante Resolución Ministerial N° 0013-80-ED, de fecha 10 de enero de 1980. Dio inicio a su funcionamiento con 420 estudiantes matriculados en 4 especialidades. Agropecuaria, Forestal, Administración y Educación; este último pasó después a los Institutos Superiores Pedagógicos.
            </p>
            <p>
              Los estudiantes ingresantes al Primer Ciclo de Educación Superior lo hacían con tercer año de educación secundaria y/o noveno grado de educación Básica regular. La duración de los estudios fue de seis semestres equivalente a tres años, obteniendo al finalizar sus estudios, el Título de Bachiller Profesional a Nombre de la Nación.
            </p>
          </div>
        </div>
      </div>

      {/* ─── TIMELINE ─── */}
      <div className="mb-12">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent dark:from-white/10"></div>
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary/50 dark:text-dark-text/50">
            Línea del Tiempo
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-primary/20 to-transparent dark:from-white/10"></div>
        </div>

        {/* Desktop: horizontal connected cards */}
        <div className="hidden lg:block relative">
          {/* Rail line */}
          <div className="absolute left-[72px] right-[72px] top-14 h-0.5 bg-gradient-to-r from-primary/5 via-primary/30 to-primary/5 dark:from-white/5 dark:via-white/20 dark:to-white/5"></div>

          <div className="grid grid-cols-5 gap-5">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="relative group">
                  {/* Node */}
                  <div className="relative z-10 flex flex-col items-center mb-5">
                    <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary text-[11px] font-bold tracking-wider mb-3 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-secondary dark:group-hover:text-dark-bg transition-all duration-300">
                      {m.year}
                    </span>
                    <div className="w-5 h-5 rounded-full bg-white dark:bg-dark-card border-[3px] border-primary dark:border-secondary shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
                  </div>

                  {/* Card */}
                  <div className="rounded-xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-5 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-4.5 h-4.5 text-primary dark:text-secondary" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-text dark:text-white mb-2 leading-snug">
                      {m.title}
                    </h3>
                    <p className="text-xs text-slate-text/70 dark:text-dark-text/70 leading-relaxed text-justify mb-2">
                      {m.desc}
                    </p>
                    <p className="text-[11px] text-slate-text/50 dark:text-dark-text/50 leading-relaxed text-justify italic border-l-2 border-primary/20 dark:border-primary/40 pl-3">
                      {m.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet / Mobile: vertical stack */}
        <div className="lg:hidden space-y-5">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary dark:text-secondary" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary dark:text-secondary">{m.year}</span>
                    <h3 className="text-sm font-bold text-slate-text dark:text-white">{m.title}</h3>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-text/30 dark:text-dark-text/30 ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="pl-14 space-y-2">
                  <p className="text-sm text-slate-text/75 dark:text-dark-text/75 leading-relaxed text-justify">
                    {m.desc}
                  </p>
                  <p className="text-xs text-slate-text/55 dark:text-dark-text/55 leading-relaxed text-justify italic border-l-2 border-primary/20 dark:border-primary/40 pl-3">
                    {m.detail}
                  </p>
                </div>
                {idx < milestones.length - 1 && (
                  <div className="ml-5 mt-5 w-px h-4 bg-primary/15 dark:bg-white/10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── IDEX — CLOSING STATEMENT ─── */}
      <div className="relative rounded-[2rem] overflow-hidden shadow-lg group">
        <div className="absolute inset-0 z-0">
          <img
            src={institutoImg}
            alt="IESTP Suiza"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#001A41]/95 via-[#001A41]/70 to-[#001A41]/40 dark:from-dark-bg/95 dark:via-dark-bg/75 dark:to-dark-bg/40 z-10"></div>

        {/* Decorative rings */}
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-white/5 dark:border-white/5 z-10"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/10 dark:border-white/5 z-10"></div>

        <div className="relative z-20 px-8 md:px-14 py-14 md:py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-5 ring-2 ring-white/20 group-hover:ring-white/30 transition-all duration-300">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 drop-shadow-lg">
            Instituto de Excelencia
          </h3>
          <p className="text-sm text-white/70 font-medium tracking-[0.15em] uppercase mb-5">
            IDEX — 2019
          </p>
          <p className="text-sm md:text-base text-white/85 max-w-xl mx-auto leading-relaxed drop-shadow-md">
            En el año 2019, el IESTP Suiza fue declarado Instituto de Excelencia (IDEX) de la región Ucayali, 
            consolidando más de 4 décadas de formación profesional técnica de calidad al servicio de la comunidad.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              Excelencia Educativa Reconocida
            </div>
          </div>
        </div>
      </div>
    </AboutPageShell>
  );
}