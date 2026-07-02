import { GraduationCap, Users, Handshake, Briefcase, Building2, Award } from 'lucide-react';

const icons = [GraduationCap, Users, Handshake, Briefcase, Building2, Award];

export default function WhyChooseUs({ t }) {
  const data = t.contact?.whyChooseUs || {};
  const items = data.items || [];

  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white mb-2 text-center">
        {data.title || '¿Por qué elegir el IESTP Suiza?'}
      </h2>
      <p className="text-sm text-slate-text/60 dark:text-dark-text/60 text-center mb-10 max-w-xl mx-auto">
        {data.subtitle}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, idx) => {
          const Icon = icons[idx];
          return (
            <div
              key={idx}
              className="group rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-secondary dark:group-hover:text-dark-bg transition-all duration-300">
                <Icon className="w-5 h-5 text-primary dark:text-secondary group-hover:text-white dark:group-hover:text-dark-bg transition-colors" />
              </div>
              <h3 className="font-bold text-sm text-slate-text dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-text/60 dark:text-dark-text/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
