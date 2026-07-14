import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, ChevronRight } from 'lucide-react';
import Carousel from '../components/Carousel';

export default function Home({ t }) {

  const stats = [
    { number: "1,600+", label: t.hero.stats.students },
    { number: "57+", label: t.hero.stats.teachers },
    { number: "150+", label: t.hero.stats.newStudents },
    { number: "1,000+", label: t.hero.stats.graduates },
  ];

  return (
    <div className="relative overflow-hidden w-full">

      {/* Hero Section with Carousel */}
      <section className="relative overflow-hidden group">
        <Carousel>
          <div className="relative z-10 px-4 md:px-8 py-12 md:py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: Welcome info & stats */}
              <div className="lg:col-span-6 flex flex-col items-start text-left gap-6 animate-in fade-in slide-in-from-left-8 duration-500">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white font-semibold text-xs tracking-wider uppercase backdrop-blur-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>{t.home.licensed}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mt-2 drop-shadow-lg">
                  {t.hero.welcome}
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 leading-tight tracking-tight mt-2 drop-shadow-lg">
                  {t.hero.welcome1}
                </h1> 
                <p className="text-base md:text-lg text-white/85 max-w-xl leading-relaxed drop-shadow-md">
                  {t.hero.subtitle}
                </p>

                <div className="flex flex-wrap gap-4 mt-2">
                  <Link
                    to="/careers"
                    className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-light text-primary font-bold text-sm tracking-wider shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>{t.hero.explore}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/admission"
                    className="px-6 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-semibold text-sm tracking-wider transition-all"
                  >
                    {t.nav.admission}
                  </Link>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full mt-8 p-6 rounded-3xl bg-white/15 backdrop-blur-md border border-white/20 shadow-xl">
                  {stats.map((s, idx) => (
                    <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                        {s.number}
                      </span>
                      <span className="text-xs font-medium text-white/75 mt-1 uppercase tracking-wider">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Empty to let the carousel background shine */}
              <div className="lg:col-span-6 w-full hidden lg:flex justify-center items-center relative overflow-visible">
                {/* Intentional empty space so the carousel images are fully visible on the right */}
              </div>

            </div>
          </div>
        </Carousel>
      </section>

      {/* Info & Call-To-Action Sections */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 md:mt-24 border-t border-primary/5 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-text dark:text-white tracking-tight">
            {t.home.quickAccess.title}
          </h2>
          <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mt-2">
            {t.home.quickAccess.subtitle}
          </p>
        </div>

        {/* 4 Cards quick actions (from original website elements) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: t.home.whyUs.title,
              desc: t.home.whyUs.desc,
              link: "/about",
              tag: t.home.whyUs.tag
            },
            {
              title: t.home.admission2026.title,
              desc: t.home.admission2026.desc,
              link: "/admission",
              tag: t.home.admission2026.tag
            },
            {
              title: t.home.ourCareers.title,
              desc: t.home.ourCareers.desc,
              link: "/careers",
              tag: t.home.ourCareers.tag
            },
            {
              title: t.home.latestNews.title,
              desc: t.home.latestNews.desc,
              link: "/news",
              tag: t.home.latestNews.tag
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-3xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 hover:border-primary/30 hover:shadow-[0_15px_35px_rgba(75,122,244,0.06)] dark:hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-primary dark:text-secondary tracking-widest uppercase">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-text dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-text/70 dark:text-dark-text/70 leading-relaxed mt-1">
                  {item.desc}
                </p>
              </div>
              <Link
                to={item.link}
                className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-primary dark:text-secondary hover:translate-x-1 transition-all"
              >
                <span>{t.home.learnMore}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
