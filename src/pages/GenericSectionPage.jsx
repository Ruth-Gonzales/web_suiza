import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate, useParams } from 'react-router-dom';
import { FileText, Download, ExternalLink, ChevronRight, Info, Search } from 'lucide-react';

export default function GenericSectionPage({ t, categoryKey, menuKey, title, subtitle }) {
  const location = useLocation();
  const navigate = useNavigate();
  const menuItems = t[menuKey] || [];
  
  // Find active tab based on URL path
  // If path is just the category (e.g. /transparency), default to the first item
  let activeItem = menuItems.find(item => location.pathname === item.path || location.pathname + '/' === item.path);
  
  useEffect(() => {
    // If no active item matches but we are on the base route, redirect to the first item
    if (!activeItem && menuItems.length > 0) {
      navigate(menuItems[0].path, { replace: true });
    }
  }, [activeItem, menuItems, navigate]);

  if (!activeItem && menuItems.length > 0) {
    activeItem = menuItems[0];
  }

  // Get content for the active item
  const contentData = t[`${categoryKey}Content`] || {};
  const pathKey = activeItem ? activeItem.path.split('/').pop() : '';
  const activeContent = activeItem ? contentData[pathKey] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 animate-fade-in">
      {/* Header */}
      <div className="mb-10 text-center md:text-left relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-text dark:text-white mb-4 tracking-tight drop-shadow-sm">{title}</h1>
        <p className="text-slate-text/70 dark:text-dark-text/70 max-w-2xl text-lg font-medium">{subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 relative z-10">
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-1/4 shrink-0">
          <div className="glassmorphism p-4 rounded-2xl sticky top-28 shadow-lg shadow-primary/5">
            <h3 className="font-bold text-primary dark:text-secondary mb-4 px-2 uppercase tracking-wider text-xs">Menú de Opciones</h3>
            <div className="flex flex-col gap-1.5">
              {menuItems.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={idx}
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]' 
                        : 'text-slate-text dark:text-white hover:bg-primary/10 dark:hover:bg-primary/20'
                    }`}
                  >
                    {item.name}
                    {isActive && <ChevronRight className="w-4 h-4 animate-bounce-x" />}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full lg:w-3/4">
          <div className="glassmorphism rounded-3xl p-6 md:p-10 min-h-[600px] shadow-xl shadow-primary/5">
            {activeItem && (
              <div className="animate-slide-up" key={activeItem.path}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-primary/10 dark:border-white/10 gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-text dark:text-white">
                    {activeItem.name}
                  </h2>
                  
                  {/* Optional Search Bar for Docs */}
                  {activeContent && activeContent.items && activeContent.items.length > 3 && (
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-text/40 dark:text-white/40" />
                      <input 
                        type="text" 
                        placeholder="Buscar documento..." 
                        className="pl-9 pr-4 py-2 rounded-xl bg-white/50 dark:bg-black/20 border border-primary/10 dark:border-white/10 text-sm focus:outline-none focus:border-primary transition-colors w-full md:w-64"
                      />
                    </div>
                  )}
                </div>
                
                {activeContent ? (
                  <div className="space-y-8">
                    {activeContent.description && (
                      <p className="text-slate-text/80 dark:text-dark-text/80 leading-relaxed text-base md:text-lg">
                        {activeContent.description}
                      </p>
                    )}
                    
                    {activeContent.items && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                        {activeContent.items.map((doc, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl border border-primary/10 dark:border-white/10 hover:border-primary/40 hover:bg-primary/5 dark:hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group bg-white/40 dark:bg-black/20 cursor-pointer">
                            <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                              {activeContent.type === 'link' ? <ExternalLink className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-sm md:text-base text-slate-text dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors line-clamp-2">{doc.title}</h4>
                              {doc.date && <p className="text-xs text-slate-text/50 dark:text-dark-text/50 mt-1.5 font-medium">{doc.date}</p>}
                              {doc.size && <p className="text-xs text-primary/70 mt-0.5">{doc.size}</p>}
                            </div>
                            {activeContent.type !== 'link' && (
                              <button className="p-2 text-slate-text/40 hover:text-primary dark:text-white/40 dark:hover:text-secondary transition-colors bg-white/50 dark:bg-black/20 rounded-lg group-hover:bg-primary/20">
                                <Download className="w-5 h-5" />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {activeContent.content && (
                       <div className="prose prose-slate dark:prose-invert max-w-none prose-p:leading-relaxed prose-headings:text-primary dark:prose-headings:text-secondary" dangerouslySetInnerHTML={{ __html: activeContent.content }} />
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 opacity-50 bg-white/10 dark:bg-black/10 rounded-2xl border border-dashed border-primary/20">
                    <Info className="w-12 h-12 mb-4 text-primary animate-pulse" />
                    <p className="text-lg font-medium text-center px-4">Información en proceso de actualización según normativas MINEDU.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
