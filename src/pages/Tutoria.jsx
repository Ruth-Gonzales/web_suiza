import { Heart, Users, Target, Shield, BookOpen, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: Heart, title: 'Apoyo Psicopedagógico', desc: 'Atención psicológica y orientación vocacional para estudiantes.' },
  { icon: Users, title: 'Tutoría Grupal e Individual', desc: 'Acompañamiento académico y personal durante tu formación.' },
  { icon: Target, title: 'Orientación Profesional', desc: 'Talleres y charlas para definir tu rumbo profesional.' },
  { icon: Shield, title: 'Bienestar Estudiantil', desc: 'Programas de salud, becas y apoyo socioeconómico.' },
  { icon: BookOpen, title: 'Nivelación Académica', desc: 'Cursos de nivelación en matemática, comunicación e inglés.' },
  { icon: MessageCircle, title: 'Consejería entre Pares', desc: 'Estudiantes tutores que apoyan a sus compañeros.' },
];

export default function Tutoria() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <Heart className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">Tutoría y Bienestar</h1>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 max-w-2xl mx-auto">Te acompañamos en tu formación integral con servicios de apoyo académico, psicológico y profesional.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="rounded-2xl bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border border-primary/5 dark:border-dark-border/40 p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-bold text-slate-text dark:text-white mb-1.5">{s.title}</h3>
                <p className="text-xs text-slate-text/60 dark:text-dark-text/60 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 text-center">
          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mb-3">¿Necesitas ayuda? Contáctanos.</p>
          <a href="mailto:bienestar@iestpsuiza.edu.pe" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">bienestar@iestpsuiza.edu.pe</a>
        </div>
      </div>
    </div>
  );
}
