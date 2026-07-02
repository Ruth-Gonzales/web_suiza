import { ScrollText, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const docs = [
  { title: 'Reglamento de Estudios', desc: 'Normas académicas, derechos y deberes de los estudiantes.', file: 'reglamento_estudios.pdf' },
  { title: 'Reglamento de Disciplina', desc: 'Faltas, sanciones y procedimientos disciplinarios.', file: 'reglamento_disciplina.pdf' },
  { title: 'Reglamento de Bibliotecas', desc: 'Uso de los servicios bibliotecarios y recursos digitales.', file: 'reglamento_biblioteca.pdf' },
  { title: 'Reglamento de Investigación', desc: 'Lineamientos para proyectos de investigación y publicaciones.', file: 'reglamento_investigacion.pdf' },
  { title: 'Reglamento de Prácticas Preprofesionales', desc: 'Normas para la realización de prácticas en empresas.', file: 'reglamento_practicas.pdf' },
  { title: 'Reglamento de Bienestar Estudiantil', desc: 'Servicios de tutoría, salud y apoyo al estudiante.', file: 'reglamento_bienestar.pdf' },
];

export default function Reglamentos() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <ScrollText className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">Reglamentos</h1>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3">Normativa institucional del IESTP Suiza Pucallpa.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {docs.map((doc, idx) => (
            <div key={idx} className="rounded-2xl bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border border-primary/5 dark:border-dark-border/40 p-5 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-slate-text dark:text-white">{doc.title}</h3>
                  <p className="text-xs text-slate-text/60 dark:text-dark-text/60 mt-0.5">{doc.desc}</p>
                  <button className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-primary-dark transition-colors cursor-pointer" onClick={() => window.location.href = 'mailto:secretaria@iestpsuiza.edu.pe?subject=Solicitud: ' + encodeURIComponent(doc.file)}>
                    <Download className="w-3.5 h-3.5" /> Solicitar documento
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/transparency" className="text-xs text-primary hover:underline">Ver más documentos en Transparencia →</Link>
        </div>
      </div>
    </div>
  );
}
