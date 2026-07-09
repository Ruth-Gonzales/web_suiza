import { Clock, BookOpen, Flag } from 'lucide-react';
import AboutPageShell from './AboutPageShell';

export default function Historia({ t }) {
  const data = t.aboutMenu?.col1?.[3] || {};
  return (
    <AboutPageShell
      t={t}
      title={data.title || 'Historia Institucional'}
      breadcrumb={data.title || 'Historia Institucional'}
    >
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
        </div>
      </div>
    </AboutPageShell>
  );
}
