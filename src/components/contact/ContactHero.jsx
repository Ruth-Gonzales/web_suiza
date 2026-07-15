import { MessageCircle, ArrowDown } from 'lucide-react';
import LogoSuiza from '../../assets/img/logo_suiza_n.png';

export default function ContactHero({ t }) {
  const hero = t.contact?.hero || {};

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary-dark to-blue-900 dark:from-dark-card dark:via-primary/30 dark:to-dark-bg shadow-2xl mb-12">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 dark:bg-white/[0.03] rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 dark:bg-white/[0.10] rounded-full animate-ping" style={{ animationDuration: '3s' }} />

      <div className="relative z-10 px-8 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 dark:bg-white/[0.06] text-white text-[10px] font-bold tracking-wider mb-4">
            <MessageCircle className="w-3 h-3" />
            {hero.badge}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            {hero.title}
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl leading-relaxed mb-6">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-dark-surface text-primary dark:text-white font-bold text-sm hover:bg-white/90 dark:hover:bg-dark-card transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5"
            >
              {hero.cta}
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#map"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 dark:border-white/20 text-white font-semibold text-sm hover:bg-white/10 dark:hover:bg-white/20 transition-all duration-300"
            >
              {hero.locationCta}
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-white/10 dark:bg-white/[0.03] backdrop-blur-sm border border-white/20 p-4 flex items-center justify-center shadow-2xl">
            <img src={LogoSuiza} alt={hero.logoAlt} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
