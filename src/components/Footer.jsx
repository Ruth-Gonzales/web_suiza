import { Link } from 'react-router-dom';
import { GraduationCap, Globe, MapPin, Phone, Mail } from 'lucide-react';
import FooterParticles from './FooterParticles';

export default function Footer({ t }) {
  return (
    <footer className="relative w-full mt-16 md:mt-20 transition-all duration-300 bg-gradient-to-b from-slate-light/80 via-slate-light/60 to-primary/[0.03] dark:from-dark-card/60 dark:via-dark-card/50 dark:to-primary/[0.04] border-t border-primary/8 dark:border-white/6">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Section 1: Logo & Vision */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white shadow-lg shadow-primary/15">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm leading-none text-slate-text dark:text-white tracking-tight">
                  IESTP SUIZA
                </div>
                <div className="text-[9px] text-primary/60 dark:text-secondary/60 font-semibold tracking-[0.15em] mt-0.5">
                  {t.footer.academicExcellence}
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-text/65 dark:text-dark-text/65 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex items-center gap-2.5 mt-1">
              <a href="#" className="group p-2 rounded-lg bg-white dark:bg-dark-border/40 shadow-sm hover:shadow-md hover:shadow-primary/15 hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-text/60 dark:text-dark-text/60 transition-all duration-250" aria-label={t.contact.social.facebook}>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="group p-2 rounded-lg bg-white dark:bg-dark-border/40 shadow-sm hover:shadow-md hover:shadow-primary/15 hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-text/60 dark:text-dark-text/60 transition-all duration-250" aria-label={t.contact.social.youtube}>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163c-.272-.98-1.071-1.762-2.075-2.02C19.57 3.545 12 3.545 12 3.545s-7.57 0-9.423.598c-1.004.258-1.803 1.04-2.075 2.02C0 7.978 0 12.01 0 12.01s0 4.032.502 6.008c.272.98 1.071 1.762 2.075 2.02 1.853.598 9.423.598 9.423.598s7.57 0 9.423-.598c1.004-.258 1.803-1.04 2.075-2.02.502-1.976.502-6.008.502-6.008s0-4.032-.502-6.008zM9.545 15.568V8.452L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="group p-2 rounded-lg bg-white dark:bg-dark-border/40 shadow-sm hover:shadow-md hover:shadow-primary/15 hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-text/60 dark:text-dark-text/60 transition-all duration-250" aria-label="Sitio web">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>


          {/* Section 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-xs text-slate-text dark:text-white uppercase tracking-wider mb-4 pb-2 border-b border-primary/8 dark:border-white/8">
              {t.nav.about}
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-text/65 dark:text-dark-text/65 hover:text-primary dark:hover:text-secondary transition-colors duration-250">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-text/65 dark:text-dark-text/65 hover:text-primary dark:hover:text-secondary transition-colors duration-250">
                  {t.footer.missionVision}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-text/65 dark:text-dark-text/65 hover:text-primary dark:hover:text-secondary transition-colors duration-250">
                  {t.nav.careers}
                </Link>
              </li>
              <li>
                <Link to="/admission" className="text-slate-text/65 dark:text-dark-text/65 hover:text-primary dark:hover:text-secondary transition-colors duration-250">
                  {t.footer.admissionExam}
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Careers Sample */}
          <div>
            <h3 className="font-semibold text-xs text-slate-text dark:text-white uppercase tracking-wider mb-4 pb-2 border-b border-primary/8 dark:border-white/8">
              {t.nav.careers}
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-text/65 dark:text-dark-text/65">
              <li>
                <Link to="/careers" className="hover:text-primary dark:hover:text-secondary transition-colors duration-250">
                  {t.careers.items[0].name}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary dark:hover:text-secondary transition-colors duration-250">
                  {t.careers.items[1].name}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary dark:hover:text-secondary transition-colors duration-250">
                  {t.careers.items[2].name}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary dark:hover:text-secondary transition-colors duration-250">
                  {t.careers.items[5].name}
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 4: Contact Coordinate */}
          <div className="flex flex-col gap-3 text-sm text-slate-text/65 dark:text-dark-text/65">
            <h3 className="font-semibold text-xs text-slate-text dark:text-white uppercase tracking-wider mb-0.5 pb-2 border-b border-primary/8 dark:border-white/8">
              {t.footer.locationContact}
            </h3>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" />
              <span className="leading-relaxed">Carretera Federico Basadre Km 5.700, Callería, Pucallpa, Ucayali, Perú</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-primary/60 shrink-0" />
              <a href="tel:061-280665" className="hover:text-primary dark:hover:text-secondary transition-colors duration-250">061-280665</a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-primary/60 shrink-0" />
              <a href="mailto:suiza@iestpsuiza.edu.pe" className="hover:text-primary dark:hover:text-secondary transition-colors duration-250">suiza@iestpsuiza.edu.pe</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/8 dark:border-white/6 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-text/50 dark:text-dark-text/50">
          <div>
            © {new Date().getFullYear()} IESTP SUIZA Pucallpa. {t.footer.rights}
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary dark:hover:text-secondary transition-colors duration-250">{t.footer.privacy}</a>
            <a href="#" className="hover:text-primary dark:hover:text-secondary transition-colors duration-250">{t.footer.transparency}</a>
            <a href="#" className="hover:text-primary dark:hover:text-secondary transition-colors duration-250">{t.footer.virtualClassroom}</a>
          </div>
        </div>
      </div>
      
      {/* Background Animated Particles at the Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-0 overflow-hidden">
        <FooterParticles />
      </div>
    </footer>
  );
}
