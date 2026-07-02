export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`shrink-0 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
            active === cat.id
              ? 'bg-primary text-white shadow-md shadow-primary/20'
              : 'bg-white dark:bg-dark-card text-slate-text/70 dark:text-dark-text/70 border border-primary/10 dark:border-white/8 hover:border-primary/30 dark:hover:border-primary/20 hover:text-primary dark:hover:text-white'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
