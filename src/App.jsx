import { useState, useEffect, useCallback } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Admission from './pages/Admission';
import AboutUs from './pages/AboutUs';
import Presentacion from './pages/about/Presentacion';
import PalabrasDirector from './pages/about/PalabrasDirector';
import VisionMision from './pages/about/VisionMision';
import Historia from './pages/about/Historia';
import GestionAcademica from './pages/about/GestionAcademica';
import GestionAdministrativa from './pages/about/GestionAdministrativa';
import Organigrama from './pages/about/Organigrama';
import PlanaDocente from './pages/about/PlanaDocente';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import GenericSectionPage from './pages/GenericSectionPage';
import { translations } from './translations';
import CursorBubbles from './components/CursorBubbles';
import VirtualAssistant from './components/VirtualAssistant';

function App(){
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'es');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [showSplash, setShowSplash] = useState(true);
  const [isOffline] = useState(!navigator.onLine);

  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  // Sync theme class with html element + persistence
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Persist language
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Enable transitions after first paint to avoid flash
  useEffect(() => {
    requestAnimationFrame(() => {
      document.body.classList.add('theme-transition');
    });
  }, []);

  const t = translations[lang] || translations['es'];

  const mainContent = (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-bg-general dark:bg-dark-bg text-slate-text dark:text-dark-text pb-6 relative" style={{ animation: 'app-slide-up 1s ease-out' }}>
      <div className="fixed top-1/4 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-soft-pulse pointer-events-none" />
      <div className="fixed bottom-1/3 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-soft-pulse pointer-events-none" style={{ animationDelay: '4s' }} />

      <Navbar lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} t={t} />
      
      <main className="flex-1 w-full mt-3">
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/careers" element={<Careers t={t} />} />
          <Route path="/careers/:careerId" element={<Careers t={t} />} />
          <Route path="/admission" element={<Admission t={t} />} />
          <Route path="/about" element={<AboutUs t={t} />} />
          <Route path="/about/presentacion" element={<Presentacion t={t} />} />
          <Route path="/about/director" element={<PalabrasDirector t={t} />} />
          <Route path="/about/vision-mision" element={<VisionMision t={t} />} />
          <Route path="/about/historia" element={<Historia t={t} />} />
          <Route path="/about/gestion-academica" element={<GestionAcademica t={t} />} />
          <Route path="/about/gestion-administrativa" element={<GestionAdministrativa t={t} />} />
          <Route path="/about/organigrama" element={<Organigrama t={t} />} />
          <Route path="/about/docentes" element={<PlanaDocente t={t} />} />
          <Route path="/news" element={<NewsPage t={t} />} />
          <Route path="/contact" element={<ContactPage t={t} />} />
          <Route path="/transparency/*" element={<GenericSectionPage t={t} categoryKey="transparency" menuKey="transparencyMenu" title="Transparencia Institucional" subtitle="Acceso a la información pública y documentos de gestión del IESTP Suiza de acuerdo a las normativas del MINEDU." />} />
          <Route path="/procedures/*" element={<GenericSectionPage t={t} categoryKey="procedures" menuKey="proceduresMenu" title="Trámites y Servicios" subtitle="Gestión de trámites académicos y administrativos para estudiantes y egresados." />} />
          <Route path="/services/*" element={<GenericSectionPage t={t} categoryKey="services" menuKey="servicesMenu" title="Servicios Institucionales" subtitle="Plataformas y recursos integrales para potenciar el desarrollo académico y profesional." />} />
        </Routes>
      </main>

      <Footer t={t} />
      <CursorBubbles />
      <VirtualAssistant />
    </div>
  );

  return (
    <Router>
      {showSplash ? <SplashScreen onComplete={handleSplashComplete} isOffline={isOffline} /> : mainContent}
    </Router>
  );
}

export default App;
