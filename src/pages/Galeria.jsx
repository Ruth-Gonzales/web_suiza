import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image } from 'lucide-react';

const galleryImages = [
  { src: '/fontis.jpg', title: 'Fachada Principal', category: 'Campus' },
  { src: '/frontis_2.jpg', title: 'Vista Frontis', category: 'Campus' },
  { src: '/campus.jpg', title: 'Vista Aérea del Campus', category: 'Campus' },
  { src: '/frontis_mkta.jpg', title: 'Ingreso Principal', category: 'Campus' },
  { src: '/carrera1.jpg', title: 'Estudiantes en Clase', category: 'Estudiantes' },
  { src: '/careers/admin.jpg', title: 'Laboratorio de Administración', category: 'Laboratorios' },
  { src: '/careers/agro.jpg', title: 'Taller de Agroindustria', category: 'Laboratorios' },
  { src: '/careers/asist.jpg', title: 'Aula de Asistencia Social', category: 'Aulas' },
  { src: '/careers/civil.jpg', title: 'Taller de Construcción Civil', category: 'Laboratorios' },
  { src: '/careers/cont.jpg', title: 'Laboratorio de Contabilidad', category: 'Laboratorios' },
  { src: '/careers/elec.jpg', title: 'Taller de Electrotecnia', category: 'Laboratorios' },
  { src: '/careers/enfer.jpg', title: 'Laboratorio de Enfermería', category: 'Laboratorios' },
  { src: '/careers/forest.jpg', title: 'Taller Forestal', category: 'Laboratorios' },
  { src: '/careers/meca.jpg', title: 'Taller de Mecánica', category: 'Laboratorios' },
  { src: '/careers/sys.jpg', title: 'Laboratorio de Sistemas', category: 'Laboratorios' },
  { src: '/careers/tur.jpg', title: 'Aula de Turismo', category: 'Aulas' },
];

const categories = ['Todas', 'Campus', 'Laboratorios', 'Aulas', 'Estudiantes'];

export default function Galeria() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('Todas');

  useEffect(() => {
    const handleKey = (e) => {
      if (selected === null || filtered.length === 0) return;
      if (e.key === 'Escape') setSelected(null);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selected, filtered.length]);

  const filtered = filter === 'Todas'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  const open = (idx) => setSelected(idx);
  const close = () => setSelected(null);

  const prev = () => {
    if (selected === null) return;
    const filteredIdx = galleryImages.indexOf(filtered[selected]);
    const prevIdx = (filteredIdx - 1 + galleryImages.length) % galleryImages.length;
    const newFilteredIdx = filtered.indexOf(galleryImages[prevIdx]);
    setSelected(newFilteredIdx >= 0 ? newFilteredIdx : filtered.length - 1);
  };

  const next = () => {
    if (selected === null) return;
    const filteredIdx = galleryImages.indexOf(filtered[selected]);
    const nextIdx = (filteredIdx + 1) % galleryImages.length;
    const newFilteredIdx = filtered.indexOf(galleryImages[nextIdx]);
    setSelected(newFilteredIdx >= 0 ? newFilteredIdx : 0);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <Image className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">
            Galería Institucional
          </h1>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 max-w-2xl mx-auto">
            Conoce nuestras instalaciones, laboratorios y el día a día en el IESTP Suiza.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-slate-light dark:bg-dark-border/50 text-slate-text dark:text-dark-text hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, idx) => (
            <button
              key={img.src}
              onClick={() => open(idx)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-light dark:bg-dark-border/30 cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs text-white/80 font-medium block truncate">{img.title}</span>
                <span className="text-[10px] text-white/50">{img.category}</span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-text/50 dark:text-dark-text/50">
            <p className="text-sm">No hay imágenes en esta categoría.</p>
          </div>
        )}
      </div>

      {selected !== null && filtered[selected] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imagen"
        >
          <div
            className="relative max-w-5xl w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all duration-300 cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            {filtered.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all duration-300 cursor-pointer"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all duration-300 cursor-pointer"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <img
              src={filtered[selected].src}
              alt={filtered[selected].title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-12">
              <h3 className="text-white font-semibold text-lg">{filtered[selected].title}</h3>
              <span className="text-white/60 text-sm">{filtered[selected].category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
