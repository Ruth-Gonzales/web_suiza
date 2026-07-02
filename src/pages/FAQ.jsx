import { useState } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

const faqs = [
  {
    category: 'Admisión',
    items: [
      { q: '¿Cuáles son los requisitos para postular?', a: 'DNI, certificado de estudios secundarios, 4 fotos tamaño carnet, partida de nacimiento y pagar la tasa de admisión.' },
      { q: '¿Cuándo es el próximo proceso de admisión?', a: 'El cronograma 2026-II inicia en julio. Revisa la sección de admisión para fechas exactas.' },
      { q: '¿Hay modalidades de ingreso directo?', a: 'Sí, tenemos ingreso directo para primeros y segundos puestos de secundaria, además de traslados externos.' },
      { q: '¿Cuánto cuesta la inscripción?', a: 'La tasa de inscripción es de S/ 50.00. Los costos completos están en la sección Costos y Tasas.' },
    ],
  },
  {
    category: 'Carreras',
    items: [
      { q: '¿Cuántas carreras ofrece el IESTP Suiza?', a: 'Ofrecemos 11 carreras profesionales técnicas en diversas áreas como administración, enfermería, contabilidad, sistemas, mecánica, entre otras.' },
      { q: '¿Cuánto dura cada carrera?', a: 'Cada carrera tiene una duración de 3 años (6 semestres académicos) divididos en 3 años académicos.' },
      { q: '¿Las carreras están licenciadas por MINEDU?', a: 'Sí, todas nuestras carreras están licenciadas por el Ministerio de Educación del Perú.' },
    ],
  },
  {
    category: 'Costos',
    items: [
      { q: '¿La educación es gratuita?', a: 'Al ser un instituto público, no pagas pensión mensual. Solo cubres tasas administrativas al inicio (inscripción, matrícula, etc.).' },
      { q: '¿Hay algún costo adicional?', a: 'Además de la inscripción y matrícula, hay costos por concepto de seguro médico, carné estudiantil y certificados.' },
    ],
  },
  {
    category: 'Vida Estudiantil',
    items: [
      { q: '¿Ofrecen prácticas preprofesionales?', a: 'Sí, cada carrera incluye prácticas preprofesionales en empresas e instituciones con las que tenemos convenio.' },
      { q: '¿Hay bolsa de trabajo para egresados?', a: 'Sí, contamos con una bolsa de trabajo activa y convenios empresariales que facilitan la inserción laboral.' },
      { q: '¿Tienen biblioteca?', a: 'Sí, contamos con biblioteca física y recursos digitales disponibles para toda la comunidad estudiantil.' },
    ],
  },
  {
    category: 'Idiomas',
    items: [
      { q: '¿Ofrecen cursos de idiomas?', a: 'Actualmente tenemos el idioma Shipibo como parte de nuestra identidad cultural, además de inglés en algunas carreras.' },
    ],
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = faqs.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0);

  const toggle = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenIdx(openIdx === key ? null : key);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <HelpCircle className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
            Preguntas Frecuentes
          </h1>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3">
            Resuelve tus dudas sobre admisión, carreras, costos y más.
          </p>
        </div>

        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-text/40 dark:text-dark-text/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar preguntas..."
            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-primary/10 dark:border-dark-border/40 bg-white/70 dark:bg-dark-border/30 text-slate-text dark:text-dark-text text-sm outline-none focus:ring-2 focus:ring-primary/30 transition-all backdrop-blur-sm"
          />
        </div>

        {filtered.map((cat, catIdx) => (
          <div key={cat.category} className="mb-8">
            <h2 className="text-lg font-bold text-slate-text dark:text-white mb-4 flex items-center gap-2.5">
              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-primary to-secondary" />
              {cat.category}
            </h2>
            <div className="space-y-2">
              {cat.items.map((item, itemIdx) => {
                const key = `${catIdx}-${itemIdx}`;
                const isOpen = openIdx === key;
                return (
                  <div
                    key={key}
                    className="rounded-xl border border-primary/5 dark:border-dark-border/40 bg-white/60 dark:bg-dark-card/60 backdrop-blur-sm overflow-hidden transition-shadow duration-300 hover:shadow-md"
                  >
                    <button
                      onClick={() => toggle(catIdx, itemIdx)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                    >
                      <span className="text-sm font-medium text-slate-text dark:text-dark-text pr-4">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 text-slate-text/50 dark:text-dark-text/50 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="px-5 pb-4 text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed border-t border-primary/5 dark:border-dark-border/20 pt-3">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-text/50 dark:text-dark-text/50">
            <p className="text-sm">No se encontraron preguntas con ese término.</p>
          </div>
        )}
      </div>
    </div>
  );
}
