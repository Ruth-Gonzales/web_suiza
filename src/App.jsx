import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Admission from './pages/Admission';
import AboutUs from './pages/AboutUs';
import NewsPage from './pages/NewsPage';
import ContactForm from './components/ContactForm';
import SplashScreen from './components/SplashScreen';
import './components/SplashScreen.css';
import VirtualAssistant from './components/VirtualAssistant';
import { translations } from './translations';

function App() {
  const [lang, setLang] = useState('es');
  const [darkMode, setDarkMode] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  useEffect(() => {
    const handleOffline = () => {
      setIsOffline(true);
      setShowSplash(true);
    };

    const handleOnline = () => {
      setIsOffline(false);
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (showSplash) {
      document.body.style.backgroundColor = '#060a13';
      document.body.style.backgroundImage = 'none';
    }
  }, [showSplash]);

  useEffect(() => {
    if (!showSplash) {
      const timer = setTimeout(() => {
        document.body.style.backgroundColor = '';
        document.body.style.backgroundImage = '';
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  const t = translations[lang] || translations['es'];

  return (
    <Router>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} isOffline={isOffline} />
      ) : (
        <div className="min-h-screen flex flex-col transition-colors duration-300 bg-bg-general dark:bg-dark-bg text-slate-text dark:text-dark-text pb-6 relative" style={{ animation: 'app-slide-up 1s ease-out' }}>
          <div className="fixed top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-soft-pulse pointer-events-none" />
          <div className="fixed bottom-1/3 right-0 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-soft-pulse pointer-events-none" style={{ animationDelay: '4s' }} />
          <div className="fixed top-2/3 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />

          <Navbar lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} t={t} />
          
          <main className="flex-1 w-full mt-4">
            <Routes>
              <Route path="/" element={<Home t={t} />} />
              <Route path="/careers" element={<Careers t={t} />} />
              <Route path="/admission" element={<Admission t={t} />} />
              <Route path="/about" element={<AboutUs t={t} />} />
              <Route path="/news" element={<NewsPage t={t} />} />
              <Route path="/contact" element={
                <div className="py-12 px-4 flex justify-center items-center">
                  <ContactForm t={t} />
                </div>
              } />
            </Routes>
          </main>

          <Footer t={t} />
          <VirtualAssistant />
        </div>
      )}
    </Router>
  );
}

export default App;
