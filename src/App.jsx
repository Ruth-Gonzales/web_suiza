import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
import { translations } from './translations';
import CursorBubbles from './components/CursorBubbles';

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'es');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [themeReady, setThemeReady] = useState(false);

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
      setThemeReady(true);
    });
  }, []);

  const t = translations[lang] || translations['es'];

  return (
    <Router>
      <div className="min-h-screen flex flex-col transition-colors duration-300 bg-bg-general dark:bg-dark-bg text-slate-text dark:text-dark-text pb-6 relative">
        {/* Global floating background orbs */}
        <div className="fixed top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-soft-pulse pointer-events-none" />
        <div className="fixed bottom-1/3 right-0 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-soft-pulse pointer-events-none" style={{ animationDelay: '4s' }} />
        <div className="fixed top-2/3 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />

        <Navbar lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} t={t} />
        
        {/* Main Content wrapper */}
        <main className="flex-1 w-full mt-4">
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
          </Routes>
        </main>

        <Footer t={t} />
        <CursorBubbles />
      </div>
    </Router>
  );
}

export default App;
