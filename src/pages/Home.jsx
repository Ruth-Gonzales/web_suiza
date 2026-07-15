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
          <div className="relative z-10 px-5 md:px-8 lg:px-12 py-14 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Side: Welcome info & stats */}
              <div className="lg:col-span-6 flex flex-col items-start text-left gap-5">
                <div className="hero-content-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-semibold text-xs tracking-wider uppercase backdrop-blur-sm border border-white/15">
                  <GraduationCap className="w-4 h-4" />
                  <span>{t.home.licensed}</span>
                </div>

                <h1 className="hero-content-animate text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight">
                  {t.hero.welcome}
                </h1>
                <h1 className="hero-content-animate text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-yellow-400 leading-[1.1] tracking-tight">
                  {t.hero.welcome1}
                </h1> 
                <p className="hero-content-animate text-sm md:text-base lg:text-lg text-white/80 max-w-lg leading-relaxed">
                  {t.hero.subtitle}
                </p>

                <div className="hero-content-animate flex flex-wrap gap-3 mt-1">
                  <Link
                    to="/careers"
                    className="px-6 py-3 rounded-xl bg-white text-primary font-bold text-sm tracking-wide shadow-lg shadow-black/15 hover:shadow-xl hover:shadow-black/20 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 transition-all duration-250 cursor-pointer"
                  >
                    <span>{t.hero.explore}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/admission"
                    className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/25 hover:bg-white/20 text-white font-semibold text-sm tracking-wide transition-all duration-250"
                  >
                    {t.nav.admission}
                  </Link>
                </div>

                {/* Stats Bar */}
                <div className="hero-content-animate grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full mt-4 p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl">
                  {stats.map((s, idx) => (
                    <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <span className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                        {s.number}
                      </span>
                      <span className="text-[10px] md:text-xs font-medium text-white/65 mt-1 uppercase tracking-wider leading-tight">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Empty to let the carousel background shine */}
              <div className="lg:col-span-6 w-full hidden lg:flex justify-center items-center relative overflow-visible">
              </div>

            </div>
          </div>
        </Carousel>
      </section>

      {/* Info & Call-To-Action Sections */}
      <div className="section-shipibo">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-14 md:mt-20 lg:mt-24 pt-14 md:pt-20 border-t border-primary/5">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-text dark:text-white tracking-tight">
              {t.home.quickAccess.title}
            </h2>
            <p className="text-sm text-slate-text/60 dark:text-dark-text/60 mt-2.5">
              {t.home.quickAccess.subtitle}
            </p>
          </div>

          {/* 4 Cards quick actions (from original website elements) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
                className="group p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-white/6 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-black/20 dark:hover:border-primary/15 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-primary dark:text-secondary tracking-widest uppercase">
                    {item.tag}
                  </span>
                  <h3 className="text-base font-bold text-slate-text dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-250">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-text/60 dark:text-dark-text/60 leading-relaxed mt-0.5">
                    {item.desc}
                  </p>
                </div>
                <Link
                  to={item.link}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary dark:text-secondary hover:translate-x-1 transition-all duration-250"
                >
                  <span>{t.home.learnMore}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
