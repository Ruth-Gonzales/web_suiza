import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoSuiza from '../assets/img/logo_suiza_n.png';
import { GraduationCap, ArrowRight, User, Search, Folder, CheckSquare, BookOpen, Library, CheckCircle2, ChevronRight } from 'lucide-react';
import Carousel from '../components/Carousel';
import useInstitutionalTexture from '../hooks/useInstitutionalTexture';

export default function Home({ t }) {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [isLogged, setIsLogged] = useState(false);
  const [selectedTaskTab, setSelectedTaskTab] = useState('Recent');

  const stats = [
    { number: "1,600+", label: t.hero.stats.students },
    { number: "57+", label: t.hero.stats.teachers },
    { number: "150+", label: t.hero.stats.newStudents },
    { number: "1,000+", label: t.hero.stats.graduates },
  ];

  useInstitutionalTexture();

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
                  <span>Licenciado por MINEDU</span>
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

      {/* Contenedor principal de todo el contenido posterior al Hero */}
      <div className="home-content-background relative overflow-hidden w-full z-10">

        {/* Capa superior para el contenido real */}
        <div className="relative z-10">
          {/* Info & Call-To-Action Sections */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24 relative z-20">
            <div className="relative rounded-[2rem] bg-white dark:bg-dark-card border border-slate-200/30 dark:border-white/8 overflow-hidden shadow-sm">
              <div className="relative z-10 px-6 md:px-10 pt-12 pb-16">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-extrabold text-slate-text dark:text-white tracking-tight">
                  Acceso Rápido al Estudiante
                </h2>
                <p className="text-sm text-slate-text/70 dark:text-dark-text/70 mt-2">
                  Enlaces a portales oficiales y recursos digitales del IESTP Suiza.
                </p>
              </div>

              {/* 4 Cards quick actions (from original website elements) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "¿Por qué IESTP Suiza?",
                    desc: "Conoce nuestra acreditación nacional, educación de calidad 100% gratuita y convenios.",
                    link: "/about",
                    tag: "Institucional"
                  },
                  {
                    title: "Admisión Regular 2026",
                    desc: "Requisitos de postulación, cronograma y vacantes de las 11 especialidades.",
                    link: "/admission",
                    tag: "Admisiones"
                  },
                  {
                    title: "Nuestras Carreras",
                    desc: "Explora la currícula, laboratorios y el campo de acción de cada carrera profesional.",
                    link: "/careers",
                    tag: "Especialidades"
                  },
                  {
                    title: "Últimas Noticias",
                    desc: "Entérate de las actividades institucionales, eventos y publicaciones científicas.",
                    link: "/news",
                    tag: "Eventos"
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
                      <span>Saber más</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
