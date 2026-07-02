import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VirtualAssistant from './components/VirtualAssistant';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';

import CookieConsent from './components/CookieConsent';
import ErrorBoundary from './components/ErrorBoundary';
import useScrollToTop from './hooks/useScrollToTop';
import { translations } from './translations';

const Home = lazy(() => import('./pages/Home'));
const Careers = lazy(() => import('./pages/Careers'));
const Admission = lazy(() => import('./pages/Admission'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const Research = lazy(() => import('./pages/Research'));
const Library = lazy(() => import('./pages/Library'));
const Transparency = lazy(() => import('./pages/Transparency'));
const PreInscription = lazy(() => import('./pages/PreInscription'));
const MallaCurricular = lazy(() => import('./pages/MallaCurricular'));
const DocentesPage = lazy(() => import('./pages/DocentesPage'));
const LaboratoriosPage = lazy(() => import('./pages/LaboratoriosPage'));
const ConveniosPage = lazy(() => import('./pages/ConveniosPage'));
const PerfilEgresado = lazy(() => import('./pages/PerfilEgresado'));
const ModalidadesPage = lazy(() => import('./pages/ModalidadesPage'));
const Cronograma = lazy(() => import('./pages/Cronograma'));
const Costos = lazy(() => import('./pages/Costos'));
const Requisitos = lazy(() => import('./pages/Requisitos'));
const Resultados = lazy(() => import('./pages/Resultados'));
const Galeria = lazy(() => import('./pages/Galeria'));
const FAQ = lazy(() => import('./pages/FAQ'));
const BolsaTrabajo = lazy(() => import('./pages/BolsaTrabajo'));
const Directorio = lazy(() => import('./pages/Directorio'));
const Privacidad = lazy(() => import('./pages/Privacidad'));
const Calendario = lazy(() => import('./pages/Calendario'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Egresados = lazy(() => import('./pages/Egresados'));
const AulaVirtual = lazy(() => import('./pages/AulaVirtual'));
const Reglamentos = lazy(() => import('./pages/Reglamentos'));
const Tutoria = lazy(() => import('./pages/Tutoria'));
const Deportes = lazy(() => import('./pages/Deportes'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ContactForm = lazy(() => import('./components/ContactForm'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    </div>
  );
}

function AnimatedRoutes({ t }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('enter');

  useScrollToTop();

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('exit');
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('enter');
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className={`${transitionStage === 'enter' ? 'page-enter' : 'opacity-0 transition-opacity duration-200'}`}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/careers" element={<Careers t={t} />} />
        <Route path="/admission" element={<Admission t={t} />} />
        <Route path="/about" element={<AboutUs t={t} />} />
        <Route path="/research" element={<Research t={t} />} />
        <Route path="/library" element={<Library t={t} />} />
        <Route path="/transparency" element={<Transparency t={t} />} />
        <Route path="/news" element={<NewsPage t={t} />} />
        <Route path="/preinscripcion" element={<PreInscription />} />
        <Route path="/malla-curricular" element={<MallaCurricular />} />
        <Route path="/docentes" element={<DocentesPage />} />
        <Route path="/laboratorios" element={<LaboratoriosPage />} />
        <Route path="/convenios" element={<ConveniosPage />} />
        <Route path="/perfil-egresado" element={<PerfilEgresado />} />
        <Route path="/modalidades" element={<ModalidadesPage />} />
        <Route path="/cronograma" element={<Cronograma />} />
        <Route path="/costos" element={<Costos />} />
        <Route path="/requisitos" element={<Requisitos />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/bolsa-trabajo" element={<BolsaTrabajo />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/egresados" element={<Egresados />} />
        <Route path="/aulavirtual" element={<AulaVirtual />} />
        <Route path="/reglamentos" element={<Reglamentos />} />
        <Route path="/tutoria" element={<Tutoria />} />
        <Route path="/deportes" element={<Deportes />} />
        <Route path="/servicios" element={<div className="py-12 px-4 text-center text-slate-text/50 dark:text-dark-text/50 text-sm">Selecciona un servicio del menú.</div>} />
        <Route path="/contact" element={
          <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
              <ContactForm t={t} />
              <div className="rounded-2xl overflow-hidden border border-primary/5 dark:border-dark-border/40 shadow-lg h-[400px] lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.4162854302617!2d-74.537947!3d-8.382842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a44b4b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sIESTP%20Suiza!5e0!3m2!1ses!2spe!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación IESTP Suiza"
                />
              </div>
            </div>
          </div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('es');
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  }, [highContrast]);

  const t = translations[lang] || translations['es'];

  return (
    <Router>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col transition-colors duration-300 bg-bg-general dark:bg-dark-bg text-slate-text dark:text-dark-text pb-6 relative">
          <div className="fixed top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-soft-pulse pointer-events-none" />
          <div className="fixed bottom-1/3 right-0 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-soft-pulse pointer-events-none" style={{ animationDelay: '4s' }} />
          <div className="fixed top-2/3 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />

          <button
            onClick={() => setHighContrast(!highContrast)}
            className="fixed top-4 left-4 z-[60] p-2 rounded-xl bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border border-primary/10 text-xs font-medium text-slate-text dark:text-dark-text hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer shadow-sm"
            aria-label="Alternar alto contraste"
            title="Alto contraste"
          >
            {highContrast ? '🔲' : '👁️'}
          </button>

          <Navbar lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} t={t} />
          
          <div className="pt-36">
            <main className="flex-1 w-full">
              <Suspense fallback={<PageLoader />}>
                <AnimatedRoutes t={t} />
              </Suspense>
            </main>
          </div>

          <Footer t={t} />
          <BackToTop />
          <WhatsAppButton />
          <CookieConsent />
          <VirtualAssistant />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
