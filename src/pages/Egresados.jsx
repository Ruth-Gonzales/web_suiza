import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Award, Users, Target, ArrowRight, ExternalLink } from 'lucide-react';

const testimonials = [
  { name: 'María García Torres', career: 'Desarrollo de Sistemas', company: 'Banco de Crédito del Perú', quote: 'El IESTP Suiza me dio las herramientas para competir en el mercado laboral. Hoy trabajo como desarrolladora en una de las empresas más importantes del país.' },
  { name: 'Carlos Ríos Pinedo', career: 'Enfermería Técnica', company: 'Hospital Regional de Pucallpa', quote: 'La formación práctica que recibí fue clave. Desde el primer día en el hospital ya sabía cómo actuar en cada situación.' },
  { name: 'Lucía Vargas Mori', career: 'Contabilidad', company: 'Estudio Contable Sánchez', quote: 'Gracias a los convenios del instituto, conseguí prácticas en mi primer año y fui contratada antes de egresar.' },
];

export default function Egresados() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
            <GraduationCap className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight">Egresados</h1>
          <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 max-w-2xl mx-auto">Sé parte de nuestra red de profesionales técnicos que transforman la región.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {[
            { icon: Users, end: '1,200+', label: 'Egresados', gradient: 'from-blue-500/10 to-blue-600/5' },
            { icon: Award, end: '92%', label: 'Empleabilidad', gradient: 'from-green-500/10 to-green-600/5' },
            { icon: Briefcase, end: '30+', label: 'Convenios', gradient: 'from-purple-500/10 to-purple-600/5' },
            { icon: Target, end: '11', label: 'Carreras', gradient: 'from-amber-500/10 to-amber-600/5' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={`rounded-2xl bg-gradient-to-br ${stat.gradient} border border-primary/5 dark:border-dark-border/40 p-5 text-center`}>
                <Icon className="w-5 h-5 text-primary dark:text-secondary mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-slate-text dark:text-white">{stat.end}</div>
                <div className="text-[10px] font-medium text-slate-text/60 dark:text-dark-text/60 uppercase tracking-wider mt-0.5">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mb-14">
          <h2 className="text-xl font-bold text-slate-text dark:text-white mb-6 flex items-center gap-2.5"><span className="w-1 h-5 rounded-full bg-gradient-to-b from-primary to-secondary" />Historias de éxito</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, idx) => (
              <div key={idx} className="rounded-2xl bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border border-primary/5 dark:border-dark-border/40 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm">{t.name[0]}</div>
                  <div><p className="text-sm font-semibold text-slate-text dark:text-white">{t.name}</p><p className="text-[10px] text-slate-text/50 dark:text-dark-text/50">{t.career}</p></div>
                </div>
                <p className="text-xs text-slate-text/70 dark:text-dark-text/70 leading-relaxed italic">"{t.quote}"</p>
                <p className="text-[11px] font-medium text-primary mt-3">{t.company}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 dark:border-dark-border/40 p-8 text-center">
          <h2 className="text-lg font-bold text-slate-text dark:text-white mb-2">¿Eres egresado?</h2>
          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mb-5">Regístrate en nuestra bolsa de trabajo y accede a ofertas exclusivas.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/bolsa-trabajo" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"><Briefcase className="w-4 h-4" />Bolsa de Trabajo</Link>
            <Link to="/dashboard" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/20 text-slate-text dark:text-dark-text font-medium text-sm hover:bg-primary/5 hover:text-primary transition-all"><ExternalLink className="w-4 h-4" />Dashboard Estudiantil</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
