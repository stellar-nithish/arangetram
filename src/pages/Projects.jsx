import React, { useEffect, useRef, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import content from '../data/content.json';

/* ────────────────────────────────────────────────
   Scroll reveal hook
──────────────────────────────────────────────── */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0');
          obs.unobserve(el);
        }
      },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

/* ── Shared: expandable read-more ── */
const ReadMore = ({ text, accent }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out text-sm leading-relaxed ${
          open ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
        style={{ color: '#6b7280' }}
      >
        <div className="border-t border-gray-100 pt-3">{text}</div>
      </div>
      <button
        onClick={() => setOpen((p) => !p)}
        className="mt-3 text-[11px] font-bold uppercase tracking-widest flex items-center gap-1 transition-opacity hover:opacity-70"
        style={{ color: accent }}
        aria-expanded={open}
      >
        {open ? 'Show Less' : 'Read More'}
        <svg
          width="11" height="11" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </>
  );
};

/* ── Shared: tag chips ── */
const Tags = ({ tags, accent }) => (
  <div className="flex flex-wrap gap-1.5">
    {tags.map((t) => (
      <span
        key={t}
        className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full border"
        style={{ color: accent, borderColor: `${accent}50`, background: `${accent}10` }}
      >
        {t}
      </span>
    ))}
  </div>
);

/* ════════════════════════════════════════════════
   HERO BANNER — full-screen, properly padded
════════════════════════════════════════════════ */
const PageHero = () => (
  <div
    className="relative w-full flex items-center justify-center overflow-hidden bg-[#2C1818]"
    style={{ minHeight: '100svh', paddingTop: '72px' }}
  >
    {/* Subtle dot-grid texture */}
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: `radial-gradient(circle, #FFD700 1px, transparent 1px)`,
        backgroundSize: '36px 36px',
      }}
    />
    {/* Radial glow centre */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(128,0,0,0.35),transparent)]" />
    {/* Bottom fade into next section */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2C1818] to-transparent" />

    <div className="relative z-10 text-center px-6 w-full max-w-4xl mx-auto py-20">
      <span className="inline-block text-[#FFD700] font-semibold uppercase tracking-[0.3em] text-[11px] mb-6 opacity-80">
        ✦ &nbsp; Portfolio &nbsp; ✦
      </span>

      <h1 className="font-serif font-bold text-[#F5F5DC] leading-[1.1] mb-6
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Achievements &amp;{' '}
        <span
          className="text-[#FFD700]"
          style={{ textShadow: '0 0 40px rgba(255,215,0,0.35)' }}
        >
          Leadership
        </span>
      </h1>

      <p className="text-[#F5F5DC]/70 leading-relaxed mx-auto
                    text-sm sm:text-base md:text-lg max-w-lg sm:max-w-xl">
        National recognition, elected offices, artistic mastery, and civic
        innovation — shaped by purpose, driven by passion.
      </p>

      <div className="flex items-center justify-center gap-4 mt-10">
        <span className="h-px w-12 sm:w-20 bg-[#FFD700]/30" />
        <span className="text-[#FFD700] text-lg">✦</span>
        <span className="h-px w-12 sm:w-20 bg-[#FFD700]/30" />
      </div>
    </div>

    {/* Scroll cue */}
    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#projects-content" className="text-[#FFD700]/50 hover:text-[#FFD700] transition-colors duration-300">
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

/* ════════════════════════════════════════════════
   STATS RIBBON
════════════════════════════════════════════════ */
const StatsBanner = () => {
  const stats = [
    { value: '2×',      label: 'National Winner' },
    { value: 'Lt. Gov', label: 'JOI District' },
    { value: '9+',      label: 'Years of Dance' },
    { value: '∞',       label: 'Civic Passion' },
  ];
  return (
    <div id="projects-content" className="bg-[#800000] py-8 px-4 overflow-x-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x-0 md:divide-x divide-[#FFD700]/20">
        {stats.map(({ value, label }) => (
          <div key={label} className="py-2">
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[#FFD700] mb-0.5">{value}</p>
            <p className="text-[#F5F5DC]/70 text-[10px] uppercase tracking-widest font-semibold">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════════
   SECTION A — Law & Government
   Layout: Full-width horizontal featured card
           + 2-column card grid below
════════════════════════════════════════════════ */
const LawSection = ({ items }) => {
  const ref = useReveal();
  const accent = '#800000';
  const [featured, ...rest] = items;

  return (
    <section className="bg-[#F5F5DC] py-20 px-4">
      <div
        ref={ref}
        className="max-w-6xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <SectionHeader
          eyebrow="Recognition & Service"
          title="Law & Government"
          subtitle="From national essay contests to courtroom internships — a commitment to justice, history, and civic excellence."
          align="center"
          theme="light"
        />

        {/* ── Featured horizontal card ── */}
        <div className="group flex flex-col md:flex-row bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-[#F5F5DC] hover:border-[#FFD700]/50 overflow-hidden mb-8 transition-all duration-400" style={{ minHeight: '320px' }}>
          <div className="relative md:w-[42%] shrink-0 h-64 md:h-auto overflow-hidden bg-[#2C1818]">
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2C1818]/20 hidden md:block" />
            <span
              className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full text-white z-10"
              style={{ background: accent }}
            >
              {featured.eyebrow}
            </span>
          </div>

          <div className="flex-1 p-7 sm:p-10 flex flex-col justify-center">
            <div className="h-[3px] w-10 rounded-full mb-4 transition-all duration-300 group-hover:w-16" style={{ background: accent }} />
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#2C1818] mb-3 group-hover:text-[#800000] transition-colors">
              {featured.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-5 max-w-lg">{featured.description}</p>
            <Tags tags={featured.tags} accent={accent} />
            {featured.detail && <ReadMore text={featured.detail} accent={accent} />}
          </div>
        </div>

        {/* ── 2-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rest.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-[#F5F5DC] hover:border-[#FFD700]/50 overflow-hidden transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-[#2C1818]">
                <img
                  src={item.image} alt={item.title} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1818]/60 to-transparent" />
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full text-white"
                  style={{ background: accent }}
                >
                  {item.eyebrow}
                </span>
              </div>
              <div className="p-6">
                <div className="h-[2px] w-8 rounded-full mb-3 transition-all duration-300 group-hover:w-14" style={{ background: accent }} />
                <h3 className="font-serif text-lg font-bold text-[#2C1818] mb-2 group-hover:text-[#800000] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <Tags tags={item.tags} accent={accent} />
                {item.detail && <ReadMore text={item.detail} accent={accent} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════
   SECTION B — Community Leadership
   Layout: Alternating image-left / image-right
           magazine strips with large number index
════════════════════════════════════════════════ */
const LeadershipSection = ({ items }) => {
  const ref = useReveal();
  const accent = '#B8860B';

  return (
    <section className="bg-white py-20 px-4">
      <div
        ref={ref}
        className="max-w-5xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <SectionHeader
          eyebrow="Impact & Influence"
          title="Community Leadership"
          subtitle="Elected offices, artistic devotion, and grassroots service — leading by example across every stage."
          align="center"
          theme="light"
        />

        <div className="flex flex-col gap-8">
          {items.map((item, i) => {
            const flip = i % 2 !== 0;
            return (
              <div
                key={item.id}
                className={`group flex flex-col ${
                  flip ? 'md:flex-row-reverse' : 'md:flex-row'
                } rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-[#FFD700]/50 overflow-hidden transition-all duration-400 bg-white`}
              >
                {/* Image */}
                <div className="relative md:w-[40%] shrink-0 h-60 md:h-72 overflow-hidden bg-[#2C1818]">
                  <img
                    src={item.image} alt={item.title} loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1818]/55 to-transparent" />
                  <span
                    className="absolute bottom-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full text-white"
                    style={{ background: accent }}
                  >
                    {item.eyebrow}
                  </span>
                </div>

                {/* Text */}
                <div className="flex-1 p-7 sm:p-10 flex flex-col justify-center relative">
                  {/* Large ghost number */}
                  <span
                    className="absolute top-4 right-6 font-serif font-black text-7xl sm:text-8xl leading-none select-none pointer-events-none"
                    style={{ color: `${accent}12` }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="h-[3px] w-10 rounded-full mb-4" style={{ background: accent }} />
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#2C1818] mb-3 group-hover:text-[#B8860B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-sm">{item.description}</p>
                  <Tags tags={item.tags} accent={accent} />
                  {item.detail && <ReadMore text={item.detail} accent={accent} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════
   SECTION C — Civic Tech & Media
   Layout: Bento / magazine grid
           large card (2/3 width) + 2 stacked cards
════════════════════════════════════════════════ */
const CivicTechSection = ({ items }) => {
  const ref = useReveal();
  const accent = '#4A90D9';
  const [featured, ...rest] = items;

  return (
    <section className="bg-[#2C1818] py-20 px-4">
      <div
        ref={ref}
        className="max-w-6xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out"
      >
        <SectionHeader
          eyebrow="Voice & Vision"
          title="Civic Tech & Media"
          subtitle="Where technology meets public service — using digital tools, writing, and podcasting to amplify civic voices."
          align="center"
          theme="dark"
        />

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">

          {/* ── Large card — spans 2 cols ── */}
          <div
            className="group relative md:col-span-2 rounded-2xl overflow-hidden shadow-xl cursor-default"
            style={{ minHeight: '550px' }}
          >
            <img
              src={featured.image} alt={featured.title} loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-600 group-hover:scale-105"
            />
            {/* Dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0f]/95 via-[#2C1818]/60 to-transparent" />
            {/* Side accent glow */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ background: accent }} />

            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span
                className="inline-block mb-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full text-white w-fit"
                style={{ background: `${accent}cc` }}
              >
                {featured.eyebrow}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F5DC] mb-3">
                {featured.title}
              </h3>
              <p className="text-[#F5F5DC]/70 text-sm leading-relaxed mb-4 max-w-md">
                {featured.description}
              </p>
              <Tags tags={featured.tags} accent="#FFD700" />
              {featured.detail && <ReadMore text={featured.detail} accent="#FFD700" />}
            </div>
          </div>

          {/* ── Two stacked smaller cards ── */}
          <div className="flex flex-col gap-5 md:gap-6">
            {rest.map((item, i) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg flex-1 cursor-default"
                style={{ minHeight: '185px' }}
              >
                <img
                  src={item.image} alt={item.title} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0f]/92 via-[#2C1818]/55 to-transparent" />
                {/* Side accent bar */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-[3px] rounded-full opacity-70"
                  style={{ background: '#FFD700' }}
                />

                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span
                    className="inline-block mb-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-full text-white w-fit"
                    style={{ background: `${accent}99` }}
                  >
                    {item.eyebrow}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#F5F5DC] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#F5F5DC]/60 text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════
   PAGE ROOT
════════════════════════════════════════════════ */
const Projects = () => {
  const { achievements } = content;

  return (
    <>
      <PageHero />
      <StatsBanner />
      <LawSection        items={achievements.law} />
      <LeadershipSection items={achievements.leadership} />
      <CivicTechSection  items={achievements.civicTech} />

      {/* ── CTA ── */}
      <div className="bg-[#F5F5DC] py-16 px-4 text-center border-t border-[#FFD700]/20">
        <p className="text-[#800000] font-semibold uppercase tracking-[0.25em] text-xs mb-3">
          ✦ &nbsp; Let's Connect
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2C1818] mb-4">
          Want to collaborate or learn more?
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto text-sm leading-relaxed">
          Reach out — Sanjana is always open to conversations about law, civic tech, leadership, and the arts.
        </p>
        <a
          href="/rsvp"
          className="inline-block bg-[#800000] hover:bg-[#9c1f1f] text-[#FFD700] px-8 py-3 rounded-lg font-semibold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Get in Touch
        </a>
      </div>
    </>
  );
};

export default Projects;
