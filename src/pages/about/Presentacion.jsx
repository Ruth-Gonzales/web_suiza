import {
  FileText, Award, TrendingUp, Users, MapPin
} from 'lucide-react';
import AboutPageShell from './AboutPageShell';

export default function Presentacion({ t }) {
  const data = t.aboutMenu?.col1?.[0] || {};
  const features = [
    { icon: Award, title: 'Licenciamiento', desc: 'Institución de calidad educativa garantizada y reconocida.' },
    { icon: TrendingUp, title: 'Alta Empleabilidad', desc: 'Prácticas pre-profesionales mediante convenios interinstitucionales.' },
    { icon: Users, title: 'Comunidad', desc: 'Enseñanza personalizada y proactiva para todos nuestros estudiantes.' },
    { icon: MapPin, title: 'Infraestructura', desc: 'Próximamente moderna infraestructura con estándares internacionales.' },
  ];

  return (
    <AboutPageShell
      t={t}
      title={data.title || 'Presentación'}
      breadcrumb={data.title || 'Presentación'}
      image="/presentacion.jpg"
    >
      {/* Intro card */}
      <div className="relative rounded-[2rem] bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-8 md:p-10 shadow-sm mb-8 overflow-hidden group">

        {/* Background Image on the right */}
        <div className="absolute inset-0 z-0">
          <img
            src="/campus.jpg"
            alt="Campus IESTP Suiza"
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Gradient Overlay: Solid white on the left, fading to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-[50%] via-white/95 via-[62.5%] to-transparent to-[100%] dark:from-dark-card dark:via-dark-card/95 dark:to-transparent z-0"></div>

        {/* Content container */}
        <div className="relative z-10 flex flex-col justify-center w-full md:max-w-[65%]">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-7 h-7 text-primary dark:text-secondary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-text dark:text-white mb-2">
                Instituto de Educacion Superior Tecnologico Publico Suiza
              </h2>
              <p className="text-sm text-slate-text/60 dark:text-dark-text/60">
                IDEX - Instituto de Excelencia
              </p>
            </div>
          </div>
          <p className="text-sm md:text-base text-slate-text/80 dark:text-dark-text/80 leading-relaxed text-justify mb-6">
            Estimados docentes, administrativos, estudiantes y público en general. Estamos brindando grandes oportunidades 
            a nuestros alumnos y egresados, mediante el convenio con CORIBEROAMERICA de la Republica de Colombia, 
            se ha hecho una alianza estratégica de primer nivel cuyo resultado ha sido la de permitir a nuestros 
            egresados a través de las universidades acreditadas que son alianzas de COREBIREROAMERICA, pueda
             sus estudios y títulos académicos ser homologados y reconocidos, sino también ser complementados 
             con estudios para obtener el grado y título académico correspondiente; asimismo la Universidad 
             Internacional de La Rioja (UNIR) en España brindaría su apoyo para ser la tercera institución 
             a nombre de España en emitir los grados y títulos correspondientes.
          </p>
          <p className="text-sm md:text-base text-slate-text/80 dark:text-dark-text/80 leading-relaxed text-justify">
            Nuestro reto ahora es desarrollar en nuestra casa de estudio la Educación Virtual con los lineamientos
             internacionales de calidad, asegurando los estándares de competencias y cumpliendo los objetivos de cada materia. 
             La plataforma Moodle en su última versión nos permitirá estar en la vanguardia de la educación no presencial 
             con el apoyo de experto productos de la alianza estratégica con COREBIREOMERICA, asimismo contamos con el 
             desarrollo de clases a tiempo real con la participación de alumnos a tiempo real. De la misma manera estos 
             años tenemos el propósito de desarrollar e implementar el intercambio de alumnos y docentes con instituciones 
             acreditadas, como realizar una revista en proceso de indexación por cada carrera donde participaran docentes 
             y alumnos como investigadores a nivel internacional.
          </p>
        </div>

      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {features.map((f, idx) => {
          const Icon = f.icon;
          return (
            <div key={idx} className="rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-primary dark:text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-slate-text dark:text-white text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-slate-text/60 dark:text-dark-text/60 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </AboutPageShell>
  );
}
