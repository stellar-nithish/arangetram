import React, { useState, useEffect, useCallback, useRef } from 'react';

/* ── Category badge colours ── */
const BADGE = {
  awards:     { bg: '#800000', text: '#FFD700' },
  media:      { bg: '#2C5282', text: '#F5F5DC' },
  highlights: { bg: '#B8860B', text: '#fff' },
};

/* ─────────────────────────────────────────────
   Lightbox
───────────────────────────────────────────── */
const Lightbox = ({ items, index, onClose, onNext, onPrev }) => {
  const item = items[index];

  /* Keyboard nav */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft')  onPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onNext, onPrev]);

  /* Prevent body scroll */
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const badge = BADGE[item.category] ?? BADGE.highlights;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
        aria-label="Close"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 sm:left-6 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all"
        aria-label="Previous"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>

      {/* Image container */}
      <div
        className="relative max-w-4xl w-full mx-16 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.title}
          className="max-h-[78vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
        />
        {/* Caption */}
        <div className="mt-4 text-center px-4">
          <span
            className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full mb-2"
            style={{ background: badge.bg, color: badge.text }}
          >
            {item.category}
          </span>
          <p className="text-white font-semibold text-base font-serif">{item.title}</p>
          <p className="text-white/55 text-sm mt-1">{item.caption}</p>
        </div>
        {/* Counter */}
        <p className="mt-3 text-white/35 text-xs">
          {index + 1} / {items.length}
        </p>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 sm:right-6 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all"
        aria-label="Next"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Single Gallery Card
───────────────────────────────────────────── */
const GalleryCard = ({ item, index, onClick }) => {
  const ref = useRef(null);
  const badge = BADGE[item.category] ?? BADGE.highlights;

  /* Scroll reveal */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          obs.unobserve(el);
        }
      },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl border border-white/10 hover:border-[#FFD700]/40"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: `opacity 0.5s ease ${(index % 9) * 60}ms, transform 0.5s ease ${(index % 9) * 60}ms, box-shadow 0.3s ease`,
        aspectRatio: '4/3',
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
      aria-label={`View ${item.title}`}
    >
      {/* Image */}
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0800]/85 via-[#1a0800]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Category badge — always visible */}
      <span
        className="absolute top-3 left-3 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full z-10"
        style={{ background: badge.bg, color: badge.text }}
      >
        {item.category}
      </span>

      {/* Expand icon */}
      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </svg>
      </div>

      {/* Title on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
        <p className="text-white font-semibold text-sm font-serif leading-tight line-clamp-2">
          {item.title}
        </p>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   GalleryGrid — main export
───────────────────────────────────────────── */
const GalleryGrid = ({ items }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox  = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % items.length), [items.length]);
  const goPrev = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + items.length) % items.length), [items.length]);

  if (!items.length) {
    return (
      <div className="text-center py-24 text-gray-400">
        <p className="text-4xl mb-3">🏆</p>
        <p className="font-semibold">No items in this category yet.</p>
      </div>
    );
  }

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {items.map((item, i) => (
          <GalleryCard
            key={item.id}
            item={item}
            index={i}
            onClick={() => openLightbox(i)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </>
  );
};

export default GalleryGrid;
