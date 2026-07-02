import { Trophy, Users, Music, Camera, Palette, Leaf } from 'lucide-react';

const activities = [
  { icon: Trophy, title: 'Deportes', desc: 'Fútbol, vóley, básquet, atletismo y más disciplinas.' },
  { icon: Music, title: 'Música y Danza', desc: 'Talleres de música, danzas folclóricas y modernas.' },
  { icon: Camera, title: 'Cine y Fotografía', desc: 'Club de cine documental y fotografía de naturaleza.' },
  { icon: Palette, title: 'Arte y Cultura', desc: 'Pintura, teatro, artesanía y cultura amazónica.' },
  { icon: Leaf, title: 'Eco-Voluntariado', desc: 'Programas de reforestación y cuidado ambiental.' },
  { icon: Users, title: 'Voluntariado Social', desc: 'Apoyo a comunidades locales y campañas de salud.' },
];

export default function Deportes() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <Trophy className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">Actividades Deportivas y Culturales</h1>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 max-w-2xl mx-auto">Complementa tu formación con nuestras actividades extracurriculares.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((a, idx) => {
            const Icon = a.icon;
            return (
              <div key={idx} className="rounded-2xl bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border border-primary/5 dark:border-dark-border/40 p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-bold text-slate-text dark:text-white mb-1.5">{a.title}</h3>
                <p className="text-xs text-slate-text/60 dark:text-dark-text/60 leading-relaxed">{a.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 text-center">
          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mb-1">Inscríbete en los talleres al inicio de cada ciclo.</p>
          <p className="text-xs text-slate-text/50 dark:text-dark-text/50">Consultas: bienestar@iestpsuiza.edu.pe</p>
        </div>
      </div>
    </div>
  );
}
