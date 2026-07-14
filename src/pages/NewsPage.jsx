import { useState, useMemo } from 'react';
import { Search, Sparkles } from 'lucide-react';
import CategoryFilter from '../components/news/CategoryFilter';
import HeroHighlight from '../components/news/HeroHighlight';
import NewsCarousel from '../components/news/NewsCarousel';
import NewsCard from '../components/news/NewsCard';
import EventDetailModal from '../components/news/EventDetailModal';
import ExperienceSection from '../components/news/ExperienceSection';
import SuccessStories from '../components/news/SuccessStories';
import PopularSection from '../components/news/PopularSection';
import UpcomingEvents from '../components/news/UpcomingEvents';
import MediaGallery from '../components/news/MediaGallery';

export default function NewsPage({ t }) {
  const data = t.news;
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [modalItem, setModalItem] = useState(null);

  const filteredItems = useMemo(() => {
    return data.items.filter((item) => {
      const matchesFilter = filter === 'all' || item.categoryId === filter;
      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase()) ||
        item.tag.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [data.items, filter, search]);

  const filteredEvents = useMemo(() => {
    if (filter === 'all') return data.events?.items || [];
    return (data.events?.items || []).filter((item) => item.categoryId === filter);
  }, [data.events, filter]);

  const filteredAchievements = useMemo(() => {
    return (data.achievements?.items || []).filter((item) => {
      if (filter === 'all') return true;
      if (filter === 'achievements') return true;
      return false;
    });
  }, [data.achievements, filter]);

  const filteredOpportunities = useMemo(() => {
    return (data.opportunities?.items || []).filter((item) => {
      if (filter === 'all') return true;
      if (filter === 'opportunities') return true;
      return false;
    });
  }, [data.opportunities, filter]);

  const showAll = filter === 'all' && !search;

  const openModal = (item) => setModalItem(item);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 relative">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-text dark:text-white tracking-tight flex items-center justify-center gap-3">
          <span>📰</span>
          <span>{data.title}</span>
        </h1>
        <p className="text-sm md:text-base text-slate-text/70 dark:text-dark-text/70 mt-3 leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-6">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-text/40 dark:text-dark-text/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.newsPage.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-dark-card border border-primary/10 dark:border-white/8 focus:border-primary dark:focus:border-primary/50 text-slate-text dark:text-white text-sm outline-none shadow-sm transition-all"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <CategoryFilter categories={data.categories} active={filter} onChange={setFilter} />
      </div>

      {/* Hero Highlight */}
      {showAll && (
        <HeroHighlight
          item={data.featured}
          onAction={() => openModal(data.featured)}
          t={t}
        />
      )}

      {/* Most Popular */}
      {showAll && (
        <PopularSection data={data.popular} onCardClick={openModal} />
      )}

      {/* News Carousel (when no filter, show as carousel; when filtered, show as grid) */}
      {filteredItems.length > 0 && (
        <section className="mb-16">
          {filter === 'all' ? (
            <NewsCarousel
              title={t.news.latestNews}
              items={filteredItems}
              onCardClick={openModal}
            />
          ) : (
            <>
              <h2 className="text-xl md:text-2xl font-bold text-slate-text dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary dark:text-secondary" />
                {data.categories.find((c) => c.id === filter)?.label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, idx) => (
                  <NewsCard key={idx} item={item} index={idx} onReadMore={() => openModal(item)} t={t} />
                ))}
              </div>
            </>
          )}
        </section>
      )}

      {filteredItems.length === 0 && (
        <div className="text-center py-12 text-slate-text/50 dark:text-dark-text/50 mb-8">
          {t.news.noResults}
        </div>
      )}

      {/* Extended sections - only when no filter active */}
      {showAll && (
        <>
          {/* Success Stories */}
          <SuccessStories data={data.successStories} onCardClick={openModal} />

          {/* Events Carousel */}
          {filteredEvents.length > 0 && (
            <NewsCarousel
              title={t.news.eventsSectionTitle}
              items={filteredEvents}
              onCardClick={openModal}
            />
          )}

          {/* Achievements Carousel */}
          {filteredAchievements.length > 0 && (
            <NewsCarousel
              title={t.news.achievementsSectionTitle}
              items={filteredAchievements}
              onCardClick={openModal}
            />
          )}

          {/* Opportunities Carousel */}
          {filteredOpportunities.length > 0 && (
            <NewsCarousel
              title={t.news.opportunitiesSectionTitle}
              items={filteredOpportunities}
              onCardClick={openModal}
            />
          )}

          {/* Upcoming Events */}
          <UpcomingEvents data={data.upcoming} onCardClick={openModal} />

          {/* Media Gallery */}
          <MediaGallery data={data.gallery} />

          {/* Institutional Experiences */}
          <ExperienceSection data={data.experiences} />
        </>
      )}

      {/* Interactive Modal */}
      {modalItem && <EventDetailModal item={modalItem} onClose={() => setModalItem(null)} t={t} />}
    </div>
  );
}
