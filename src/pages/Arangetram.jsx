import React from 'react';
import content from '../data/content.json';
import EventDetails from '../components/EventDetails';
import AnimateOnScroll from '../components/AnimateOnScroll';

/* ── Shared full-viewport hero ── */
const PageHero = () => (
  <div
    className="relative w-full flex items-center justify-center overflow-hidden bg-[#2C1818]"
    style={{ minHeight: '100svh', paddingTop: '72px' }}
  >
    {/* Dot-grid texture */}
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: `radial-gradient(circle, #FFD700 1px, transparent 1px)`,
        backgroundSize: '36px 36px',
      }}
    />
    {/* Radial glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(128,0,0,0.35),transparent)]" />
    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2C1818] to-transparent" />

    <div className="relative z-10 text-center px-6 w-full max-w-4xl mx-auto py-20">
      <span className="inline-block text-[#FFD700] font-semibold uppercase tracking-[0.3em] text-[11px] mb-6 opacity-80">
        ✦ &nbsp; The Art of Dance &nbsp; ✦
      </span>

      <h1 className="font-serif font-bold text-[#F5F5DC] leading-[1.1] mb-6
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        My{' '}
        <span
          className="text-[#FFD700]"
          style={{ textShadow: '0 0 40px rgba(255,215,0,0.35)' }}
        >
          Arangetram
        </span>
      </h1>

      <p className="text-[#F5F5DC]/70 leading-relaxed mx-auto
                    text-sm sm:text-base md:text-lg max-w-lg sm:max-w-xl">
        A devotion to the art form — poetry of the body, song of the soul,
        and spirit of Bharatanatyam.
      </p>

      <div className="flex items-center justify-center gap-4 mt-10">
        <span className="h-px w-12 sm:w-20 bg-[#FFD700]/30" />
        <span className="text-[#FFD700] text-lg">✦</span>
        <span className="h-px w-12 sm:w-20 bg-[#FFD700]/30" />
      </div>
    </div>

    {/* Scroll cue */}
    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#arangetram-content" className="text-[#FFD700]/50 hover:text-[#FFD700] transition-colors duration-300">
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

const Arangetram = () => {
  const { arangetram } = content;
  return (
    <main className="min-h-screen bg-[#F5F5DC]">
      <PageHero />
      <AnimateOnScroll>
        <div id="arangetram-content">
          <EventDetails />
        </div>
      </AnimateOnScroll>
    </main>
  );
};

export default Arangetram;
