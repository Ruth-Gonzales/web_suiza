import {
  FileText, Award, TrendingUp, Users, MapPin
} from 'lucide-react';
import AboutPageShell from './AboutPageShell';

export default function Presentacion({ t }) {
  const data = t.aboutMenu?.col1?.[0] || {};
  const features = [
    { icon: Award, title: 'Licenciamiento', desc: 'Instituci├│n de calidad educativa garantizada y reconocida.' },
    { icon: TrendingUp, title: 'Alta Empleabilidad', desc: 'Pr├ícticas pre-profesionales mediante convenios interinstitucionales.' },
    { icon: Users, title: 'Comunidad', desc: 'Ense├▒anza personalizada y proactiva para todos nuestros estudiantes.' },
    { icon: MapPin, title: 'Infraestructura', desc: 'Pr├│ximamente moderna infraestructura con est├índares internacionales.' },
  ];

  return (
    <AboutPageShell
      t={t}
      title={data.title || 'Presentaci├│n'}
      breadcrumb={data.title || 'Presentaci├│n'}
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
                Instituto de Educaci├│n Superior Tecnol├│gico P├║blico Suiza
              </h2>
              <p className="text-sm text-slate-text/60 dark:text-dark-text/60">
                IDEX - Instituto de Excelencia
              </p>
            </div>
          </div>
          <p className="text-sm md:text-base text-slate-text/80 dark:text-dark-text/80 leading-relaxed text-justify mb-6">
            Estimados docentes, administrativos, estudiantes y p├║blico en general. Estamos brindando grandes oportunidades a nuestros alumnos y egresados, mediante el convenio con CORIBEROAMERICA de la Republica de Colombia, se ha hecho una alianza estrat├®gica de primer nivel cuyo resultado ha sido la de permitir a nuestros egresados a trav├®s de las universidades acreditadas que son alianzas de COREBIREROAMERICA, pueda sus estudios y t├¡tulos acad├®micos ser homologados y reconocidos, sino tambi├®n ser complementados con estudios para obtener el grado y t├¡tulo acad├®mico correspondiente; asimismo la Universidad Internacional de La Rioja (UNIR) en Espa├▒a brindar├¡a su apoyo para ser la tercera instituci├│n a nombre de Espa├▒a en emitir los grados y t├¡tulos correspondientes.
          </p>
          <p className="text-sm md:text-base text-slate-text/80 dark:text-dark-text/80 leading-relaxed text-justify">
            Nuestro reto ahora es desarrollar en nuestra casa de estudio la Educaci├│n Virtual con los lineamientos internacionales de calidad, asegurando los est├índares de competencias y cumpliendo los objetivos de cada materia. La plataforma Moodle en su ├║ltima versi├│n nos permitir├í estar en la vanguardia de la educaci├│n no presencial con el apoyo de experto productos de la alianza estrat├®gica con COREBIREOMERICA, asimismo contamos con el desarrollo de clases a tiempo real con la participaci├│n de alumnos a tiempo real. De la misma manera estos a├▒os tenemos el prop├│sito de desarrollar e implementar el intercambio de alumnos y docentes con instituciones acreditadas, como realizar una revista en proceso de indexaci├│n por cada carrera donde participaran docentes y alumnos como investigadores a nivel internacional.
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
