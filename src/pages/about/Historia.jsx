import { Clock, BookOpen, Flag } from 'lucide-react';
import AboutPageShell from './AboutPageShell';

<<<<<<< HEAD
export default function Historia({ t }) {
  const data = t.aboutMenu?.col1?.[3] || {};
=======
const timelineIcons = { Landmark, Building2, GraduationCap, Award };

const defaultTimeline = [];

export default function Historia({ t }) {
  const data = t.aboutMenu?.col1?.[3] || {};
  const tl = t.aboutPage?.historia?.timeline || defaultTimeline;

>>>>>>> web_suiza/clase2
  return (
    <AboutPageShell
      t={t}
      title={data.title}
      breadcrumb={data.title}
    >
<<<<<<< HEAD
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 md:p-10 shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-slate-text dark:text-white mb-6 border-b border-primary/10 dark:border-white/8 pb-4">
          Reseña Histórica del IESTP Suiza
        </h2>
        
        <div className="space-y-6 text-sm md:text-base text-slate-text/80 dark:text-dark-text/80 leading-relaxed text-justify">
          <p>
            El Instituto de Educación Superior Tecnológico Público "Suiza" de Pucallpa, se inició como Escuela Superior Profesional ESEP. Mediante Resolución Ministerial N° 0013-80-ED, de fecha 10 de enero de 1980. Dio inicio a su funcionamiento con 420 estudiantes matriculados en 4 especialidades. Agropecuaria, Forestal, Administración y Educación; este último pasó después a los Institutos Superiores Pedagógicos.
          </p>
          <p>
            Los estudiantes ingresantes al Primer Ciclo de Educación Superior lo hacían con tercer año de educación secundaria y/o noveno grado de educación Básica regular. La duración de los estudios fue de seis semestres equivalente a tres años, obteniendo al finalizar sus estudios, el Título de Bachiller Profesional a Nombre de la Nación.
          </p>
          <p>
            En el año 1982, la ESEP "SUIZA", apertura el segundo ciclo de Educación Superior Profesional, con las especialidades de: Administración Bancaria, Secretariado Ejecutivo, Construcción Civil, Mecánica Automotriz y Producción Pecuaria, que ingresan con 5to. Año de Secundaria.
          </p>
          <p>
            Con Resolución Ministerial N° 131-83-ED, de fecha 09 de marzo de 1983, la ESEP "SUIZA", se adecua a Instituto Superior Tecnológico (I.S.T.), con las carreras profesionales de: Construcción Civil, Forestal, Producción Agropecuaria, Secretariado Ejecutivo, Mecánica Automotriz y Producción Agrícola, con una duración de seis semestres para el turno diurno y ocho semestres para el turno nocturno. Los egresados en este nuevo sistema obtienen el Título de Profesional Técnico con mención en la carrera.
          </p>
          <p>
            En 1984, se apertura las carreras profesionales de Contabilidad y Electricidad, turno diurno y nocturno.
            En 1986, se apertura la carrera profesional de Producción Agropecuaria, en sustitución de Producción Pecuaria.
          </p>
          <p>
            Entre 1990 y 1992, se apertura la carrera profesional de Enfermería Técnica, Guía Oficial de Turismo y Electrónica con Resolución Directoral N° 1123-96-ED. En 1999, se abre el Programa Piloto de Bachillerato como nuevo enfoque educativo de Educación Secundaria, a nivel nacional, teniendo una población estudiantil de 180 estudiantes; el mismo que por haber sido experimental, culminó en el año 2001.
          </p>
          <p>
            En el año 2000, se apertura la carrera profesional de Computación e Informática. En el año 2005, se incorpora la Carrera de Producción Agropecuaria al Sistema Piloto - Modular, el año 2007 la Carrera de Enfermería técnica.
          </p>
          <p>
            El 2009 se incorporan al sistema modular las carreras de: Administración de Empresas, Contabilidad, Secretariado Ejecutivo, Computación e Informática, Electrotecnia Industrial, Construcción Civil, Mecánica Automotriz y Guía Oficial de Turismo. En el año 2013 se incorpora al sistema modular la carrera de Administración de Recursos Forestales.
          </p>
          <p>
            En el año 2016 al 2019 se adecuan los planes de estudio de las 11 carreras profesionales de acuerdo al nuevo Diseño Curricular Básico Nacional de la Educación Superior, cambiando de denominación las carreras de Guía Oficial de Turismo por Administración de Operaciones Turísticas, Computación e Informática por Desarrollo de Sistemas de Información, Electroténia industrial por Electricidad Industrial, Mecánica Automotriz por Mecatrónica Automotriz. En el año 2019 es declarado Instituto de excelencia (IDEX) de la región Ucayali.
          </p>
=======
      {/* Intro */}
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 shadow-sm mb-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
            <History className="w-7 h-7 text-primary dark:text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-text dark:text-white mb-2">{t.aboutPage.historia.introTitle}</h2>
            <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed">
              {t.aboutPage.historia.introDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 md:p-10 shadow-sm mb-8">
        <div className="relative border-l border-primary/20 dark:border-primary/30 pl-8 ml-4 space-y-10">
          {tl.map((item, idx) => {
            const Icon = timelineIcons[item.icon] || Landmark;
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
        <h3 className="text-lg font-bold text-slate-text dark:text-white mb-5">{t.aboutPage.historia.galleryTitle}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(t.aboutPage.historia.gallery).map((item, idx) => (
            <div key={idx} className="rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-dark-hover/40 aspect-square flex flex-col items-center justify-center p-4 text-center border border-primary/5 dark:border-white/5 hover:scale-[1.02] transition-transform">
              <Landmark className="w-8 h-8 text-primary/40 dark:text-secondary/40 mb-2" />
              <p className="text-xs font-bold text-slate-text dark:text-white">{item.label}</p>
              <p className="text-[10px] text-primary dark:text-secondary font-semibold">{item.year}</p>
            </div>
          ))}
>>>>>>> web_suiza/clase2
        </div>
      </div>
    </AboutPageShell>
  );
}
