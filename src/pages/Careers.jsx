import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, BookOpen, Target, Sparkles, ChevronRight, GraduationCap, Briefcase, Clock, Award } from 'lucide-react';
import { careersData } from '../data/careersData';

export default function Careers({ t }) {
  const { careerId } = useParams();
  const navigate = useNavigate();
  const translationsItems = t?.careers?.items || [];

  const mergedCareers = useMemo(() => {
    return translationsItems.map((item) => {
      const full = careersData.find((c) => c.id === item.id);
      return full ? { ...item, ...full } : item;
    });
  }, [translationsItems]);

  const [selected, setSelected] = useState(null);
  const [activePreview, setActivePreview] = useState(mergedCareers[0]);

  useEffect(() => {
    if (careerId && mergedCareers.length > 0) {
      const found = mergedCareers.find((c) => c.id === careerId);
      if (found) {
        setSelected(found);
        setActivePreview(found);
      }
    }
  }, [careerId, mergedCareers]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [careerId]);

  const openCareer = (career) => {
    setSelected(career);
    navigate(`/careers/${career.id}`, { replace: true });
  };

  const closeCareer = () => {
    setSelected(null);
    navigate('/careers', { replace: true });
  };

  const handleListClick = (career) => {
    setActivePreview(career);
    openCareer(career);
  };

  return (
    <div>
      <section className="relative w-full h-[350px] md:h-[420px] overflow-hidden -mt-4">
        <img
          src="/carrera1.jpg"
          alt={t.careersPage.alt}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-center items-start pl-4 md:pl-8 lg:pl-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
            {t.careersPage.title}
          </h1>
          <p className="text-sm md:text-base text-white/90 mt-3 max-w-xl drop-shadow-md">
            {t.careersPage.subtitle}
          </p>
        </div>
      </section>

      <section className="w-full overflow-hidden">
        <div className="flex pt-12">
          <div className="pl-4 md:px-8 lg:pl-16 lg:pr-12 shrink-0">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white mb-8">
              {t.careersPage.sectionTitle}
            </h2>
            <div className="inline-block">
              {mergedCareers.map((career) => (
                <button
                  key={career.id}
                  onClick={() => handleListClick(career)}
                  onMouseEnter={() => setActivePreview(career)}
                  className={`block w-full text-left text-xl md:text-2xl font-medium py-3 pl-4 transition-colors cursor-pointer border-b-2 border-primary/40 dark:border-primary/60 ${
                    activePreview?.id === career.id
                      ? 'text-primary dark:text-secondary border-l-4 border-l-primary dark:border-l-secondary font-bold'
                      : 'text-slate-text dark:text-dark-text hover:text-primary dark:hover:text-secondary'
                  }`}
                >
                  {career.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block flex-1 relative min-h-[500px]">
            {activePreview && (
              <div key={activePreview.id} className="absolute inset-0 animate-fade-in">
                <img
                  src={`/careers/${activePreview.id}.jpg`}
                  alt={activePreview.name}
                  className="absolute inset-0 w-[calc(100%-2rem)] h-full object-cover rounded-l-2xl"
                />
                <div className="absolute inset-0 w-[calc(100%-2rem)] bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-l-2xl" />
                <div className="absolute bottom-0 left-0 w-[calc(100%-2rem)] p-8">
                  <p className="text-white font-extrabold text-2xl md:text-3xl drop-shadow-lg mb-2">
                    {activePreview.name}
                  </p>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl line-clamp-3">
                    {activePreview.tagline}
                  </p>
                  <button
                    onClick={() => handleListClick(activePreview)}
                    className="mt-4 inline-block text-xs font-bold text-white bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full hover:bg-white/30 transition-all cursor-pointer"
                  >
                    {t.careersPage.viewMore}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-500"
          onClick={closeCareer}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-full md:w-[75vw] lg:w-[70vw] xl:w-[65vw] bg-white dark:bg-dark-card shadow-2xl transition-transform duration-500 ease-out overflow-y-auto ${
          selected ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selected && (
          <div className="min-h-full flex flex-col">
            <div className="relative h-80 md:h-96 shrink-0">
              <img
                src={`/careers/${selected.id}.jpg`}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <button
                onClick={closeCareer}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/20 backdrop-blur-md hover:bg-white/40 text-white transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-base font-semibold text-white/80 tracking-widest mb-1">
                  {t.careersPage.programLabel}
                </p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
                  {selected.name}
                </h3>
                <p className="text-base md:text-lg text-white/80 mt-1 max-w-xl">
                  {selected.tagline}
                </p>
              </div>
            </div>

            <div className="flex-1 p-6 md:p-8 space-y-8">
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>{selected.duration || t.careersPage.durationBadge}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2 rounded-full">
                  <GraduationCap className="w-4 h-4" />
                  <span>{selected.degree}</span>
                </div>
                {selected.employabilityRate && (
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 bg-amber-50 px-4 py-2 rounded-full">
                    <Target className="w-4 h-4" />
                    <span>{selected.employabilityRate}% empleabilidad</span>
                  </div>
                )}
              </div>

              <p className="text-base md:text-lg text-slate-text/80 dark:text-dark-text/80 leading-relaxed">
                {selected.description || selected.desc}
              </p>

              {selected.curriculum && selected.curriculum.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-slate-text dark:text-white flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    {t.careersPage.planTitle}
                  </h4>
                  <div className="space-y-3">
                    {selected.curriculum.map((semester, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-text dark:text-white mb-1">Semestre {i + 1}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {Array.isArray(semester) ? semester.map((subj, j) => (
                              <span key={j} className="text-xs text-slate-text/70 bg-slate-light dark:bg-dark-border px-2 py-1 rounded border border-primary/10">
                                {subj}
                              </span>
                            )) : (
                              <span className="text-sm text-slate-text/80">{semester}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selected.skills && selected.skills.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-slate-text dark:text-white flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    {t.careersPage.skillsTitle}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-sm font-medium text-slate-text bg-slate-light dark:bg-dark-border dark:text-dark-text px-4 py-2 rounded-full border border-primary/10 dark:border-dark-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selected.opportunities && selected.opportunities.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-slate-text dark:text-white flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-primary" />
                    {t.careersPage.opportunitiesTitle}
                  </h4>
                  <div className="space-y-3">
                    {selected.opportunities.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-base md:text-lg text-slate-text/80 dark:text-dark-text/80">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selected.competencies && selected.competencies.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-slate-text dark:text-white flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-primary" />
                    Competencias Principales
                  </h4>
                  <div className="space-y-2">
                    {selected.competencies.map((comp, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-base text-slate-text/80 dark:text-dark-text/80">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selected.whyYou && (
                <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-2xl border border-primary/10">
                  <h4 className="text-xl font-bold text-slate-text dark:text-white flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-primary" />
                    {t.careersPage.whyTitle}
                  </h4>
                  <p className="text-base md:text-lg text-slate-text/75 dark:text-dark-text/75 leading-relaxed">
                    {selected.whyYou}
                  </p>
                </div>
              )}

              {selected.whyChoose && (
                <div className="bg-gradient-to-r from-amber-500/5 to-transparent p-6 rounded-2xl border border-amber-500/10">
                  <h4 className="text-xl font-bold text-slate-text dark:text-white flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    {t.careersPage.whyStudyTitle}
                  </h4>
                  <p className="text-base md:text-lg text-slate-text/75 dark:text-dark-text/75 leading-relaxed">
                    {selected.whyChoose}
                  </p>
                </div>
              )}

              {selected.graduateProfile && (
                <div>
                  <h4 className="text-xl font-bold text-slate-text dark:text-white flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Perfil del Egresado
                  </h4>
                  <p className="text-base md:text-lg text-slate-text/80 dark:text-dark-text/80 leading-relaxed">
                    {selected.graduateProfile}
                  </p>
                </div>
              )}

              {selected.labs && selected.labs.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-slate-text dark:text-white flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Laboratorios
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.labs.map((lab, i) => (
                      <span key={i} className="text-sm font-medium text-slate-text bg-slate-light px-4 py-2 rounded-full border border-primary/10">
                        {lab}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selected.agreements && selected.agreements.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-slate-text dark:text-white flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Convenios
                  </h4>
                  <div className="space-y-2">
                    {selected.agreements.map((agr, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-base text-slate-text/80">{agr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-primary/10">
                <a
                  href="/admission"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Postular Ahora
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
