import React, { useState, useMemo } from 'react';
import GalleryGrid from '../components/GalleryGrid';
import { galleryItems, CATEGORIES } from '../data/galleryData';

/* ── Live counts per category ── */
const getCounts = (items) => {
  const counts = { all: items.length };
  items.forEach(({ category }) => {
    counts[category] = (counts[category] ?? 0) + 1;
  });
  return counts;
};

/* ════════════════════════════════════════════
   PAGE HERO
════════════════════════════════════════════ */
const PageHero = ({ totalCount }) => (
  <div
    className="relative w-full flex items-center justify-center overflow-hidden bg-dark"
    style={{ minHeight: '100svh', paddingTop: '72px' }}
  >
    {/* Dot-grid texture */}
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: `radial-gradient(circle, var(--color-secondary) 1px, transparent 1px)`,
        backgroundSize: '36px 36px',
      }}
    />
    {/* Radial glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(128,0,0,0.35),transparent)]" />
    {/* Bottom fade into content */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />

    <div className="relative z-10 text-center px-6 w-full max-w-4xl mx-auto py-20">
      <span className="inline-block text-secondary font-semibold uppercase tracking-[0.3em] text-[11px] mb-6 opacity-80">
        ✦ &nbsp; Recognition &nbsp; ✦
      </span>

      <h1 className="font-serif font-bold text-accent leading-[1.1] mb-6
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Awards &amp;{' '}
        <span
          className="text-secondary"
          style={{ textShadow: '0 0 40px rgba(255,215,0,0.35)' }}
        >
          Media
        </span>
      </h1>

      <p className="text-accent/70 leading-relaxed mx-auto
                    text-sm sm:text-base md:text-lg max-w-lg sm:max-w-xl">
        A journey of recognition, achievements, and memorable moments —{' '}
        {totalCount} captured milestones.
      </p>

      <div className="flex items-center justify-center gap-4 mt-10">
        <span className="h-px w-12 sm:w-20 bg-secondary/30" />
        <span className="text-secondary text-lg">✦</span>
        <span className="h-px w-12 sm:w-20 bg-secondary/30" />
      </div>
    </div>

    {/* Scroll cue */}
    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#gallery-content" className="text-secondary/50 hover:text-secondary transition-colors duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg" width="26" height="26"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </div>
  </div>
);

/* ════════════════════════════════════════════
   FILTER TABS
════════════════════════════════════════════ */
const FilterTabs = ({ active, onChange, counts }) => (
  <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
    {CATEGORIES.map(({ key, label }) => {
      const isActive = active === key;
      const count = counts[key] ?? 0;
      return (
        <button
          key={key}
          id={`gallery-filter-${key}`}
          onClick={() => onChange(key)}
          className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-widest transition-all duration-250 ${
            isActive
              ? 'bg-primary text-secondary shadow-lg shadow-primary/30'
              : 'bg-white text-dark/70 border border-dark/10 hover:border-primary/40 hover:text-primary'
          }`}
        >
          {label}
          <span
            className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[22px] text-center transition-colors ${
              isActive ? 'bg-secondary/20 text-secondary' : 'bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary'
            }`}
          >
            {count}
          </span>
        </button>
      );
    })}
  </div>
);

/* ════════════════════════════════════════════
   PAGE
════════════════════════════════════════════ */
const AwardGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const counts = useMemo(() => getCounts(galleryItems), []);

  const filtered = useMemo(() =>
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  return (
    <>
      {/* Hero */}
      <PageHero totalCount={galleryItems.length} />

      {/* Main content */}
      <div id="gallery-content" className="bg-accent min-h-screen overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-20">

          {/* Filter Tabs */}
          <FilterTabs
            active={activeFilter}
            onChange={setActiveFilter}
            counts={counts}
          />

          {/* Active section label */}
          <div className="flex items-center gap-4 mb-7">
            <div className="h-px flex-1 bg-dark/10" />
            <span className="text-primary font-semibold uppercase tracking-[0.25em] text-[11px] whitespace-nowrap">
              ✦ &nbsp;
              {activeFilter === 'all' ? 'All Photos' : CATEGORIES.find(c => c.key === activeFilter)?.label}
              &nbsp; — {filtered.length} items
            </span>
            <div className="h-px flex-1 bg-dark/10" />
          </div>

          {/* Gallery Grid */}
          <GalleryGrid items={filtered} />

        </div>
      </div>

      {/* CTA footer */}
      <div className="bg-white py-14 px-4 text-center border-t border-secondary/20">
        <p className="text-primary font-semibold uppercase tracking-[0.25em] text-xs mb-3">
          ✦ &nbsp; See More
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-dark mb-3">
          Explore Achievements &amp; Leadership
        </h2>
        <p className="text-gray-500 text-sm mb-7 max-w-sm mx-auto leading-relaxed">
          Dive deeper into Sanjana's journey across law, government, community leadership, and civic tech.
        </p>
        <a
          href="/projects"
          className="inline-block bg-primary hover:bg-primary-light text-secondary px-7 py-3 rounded-lg font-semibold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 shadow-md"
        >
          View Achievements Page
        </a>
      </div>
    </>
  );
};

export default AwardGallery;
