import React, { useEffect, useRef } from 'react';
import SectionHeader from '../components/SectionHeader';
import EssayCard from '../components/EssayCard';
import PublicationCard from '../components/PublicationCard';
import SpeakingCard from '../components/SpeakingCard';
import SkillBadge from '../components/SkillBadge';
import content from '../data/content.json';

/* ── Scroll reveal ── */
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

/* ════════════════════════════════════════════
   HERO
════════════════════════════════════════════ */
const PageHero = () => (
  <div
    className="relative w-full flex items-center justify-center overflow-hidden bg-[#2C1818]"
    style={{ minHeight: '100svh', paddingTop: '72px' }}
  >
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: `radial-gradient(circle, #FFD700 1px, transparent 1px)`,
        backgroundSize: '36px 36px',
      }}
    />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(128,0,0,0.35),transparent)]" />
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2C1818] to-transparent" />

    <div className="relative z-10 text-center px-6 w-full max-w-4xl mx-auto py-20">
      <span className="inline-block text-[#FFD700] font-semibold uppercase tracking-[0.3em] text-[11px] mb-6 opacity-80">
        ✦ &nbsp; Voice &amp; Vision &nbsp; ✦
      </span>
      <h1 className="font-serif font-bold text-[#F5F5DC] leading-[1.1] mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Writing &amp;{' '}
        <span className="text-[#FFD700]" style={{ textShadow: '0 0 40px rgba(255,215,0,0.35)' }}>
          Speaking
        </span>
      </h1>
      <p className="text-[#F5F5DC]/70 leading-relaxed mx-auto text-sm sm:text-base md:text-lg max-w-lg sm:max-w-xl">
        Exploring ideas in law, philosophy, and civic engagement through writing and public discourse.
      </p>
      <div className="flex items-center justify-center gap-4 mt-10">
        <span className="h-px w-12 sm:w-20 bg-[#FFD700]/30" />
        <span className="text-[#FFD700] text-lg">✦</span>
        <span className="h-px w-12 sm:w-20 bg-[#FFD700]/30" />
      </div>
    </div>

    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#writing-content" className="text-[#FFD700]/50 hover:text-[#FFD700] transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </div>
  </div>
);

/* ════════════════════════════════════════════
   STATS RIBBON
════════════════════════════════════════════ */
const StatsRibbon = () => {
  const stats = [
    { value: '6+',  label: 'Essay Awards' },
    { value: '5+',  label: 'Speaking Events' },
    { value: '3',   label: 'Publications' },
    { value: '80+', label: 'Countries Competed' },
  ];
  return (
    <div id="writing-content" className="bg-[#800000] py-8 px-4 overflow-x-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[#FFD700] mb-0.5">{value}</p>
            <p className="text-[#F5F5DC]/70 text-[10px] uppercase tracking-widest font-semibold">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════
   ESSAYS SECTION
════════════════════════════════════════════ */
const EssaysSection = ({ essays }) => {
  const ref = useReveal();
  return (
    <section className="bg-[#F5F5DC] py-20 px-4">
      <div ref={ref} className="max-w-6xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <SectionHeader
          eyebrow="Selected Works"
          title="Essays"
          subtitle="National and international recognition in law, history, philosophy, and civic engagement."
          align="center"
          theme="light"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {essays.map((essay) => (
            <EssayCard key={essay.id} {...essay} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════
   PUBLICATIONS SECTION
════════════════════════════════════════════ */
const PublicationsSection = ({ publications }) => {
  const ref = useReveal();
  return (
    <section className="bg-white py-20 px-4">
      <div ref={ref} className="max-w-4xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <SectionHeader
          eyebrow="In Print & Online"
          title="Publications"
          subtitle="Featured articles, student spotlights, and civic writing published across platforms."
          align="center"
          theme="light"
        />
        <div className="flex flex-col gap-5">
          {publications.map((pub) => (
            <PublicationCard key={pub.id} {...pub} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════
   SPEAKING SECTION
════════════════════════════════════════════ */
const SpeakingSection = ({ speaking }) => {
  const ref = useReveal();
  return (
    <section className="bg-[#2C1818] py-20 px-4">
      <div ref={ref} className="max-w-3xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <SectionHeader
          eyebrow="Talks & Competitions"
          title="Speaking"
          subtitle="From courtrooms to leadership forums — leading with voice and conviction."
          align="center"
          theme="dark"
        />
        <div>
          {speaking.map((item, i) => (
            <SpeakingCard key={item.id} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════
   SKILLS SECTION
════════════════════════════════════════════ */
const SkillsSection = ({ skills }) => {
  const ref = useReveal();
  return (
    <section className="bg-[#F5F5DC] py-20 px-4">
      <div ref={ref} className="max-w-4xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out">
        <SectionHeader
          eyebrow="Expertise"
          title="Core Skills"
          subtitle="The tools and abilities that power every essay, speech, and initiative."
          align="center"
          theme="light"
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <SkillBadge key={skill.id} icon={skill.icon} label={skill.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════
   PAGE ROOT
════════════════════════════════════════════ */
const WritingSpeaking = () => {
  const { essays, publications, speaking, skills } = content.writingSpeaking;

  return (
    <>
      <PageHero />
      <StatsRibbon />
      <EssaysSection essays={essays} />
      <PublicationsSection publications={publications} />
      <SpeakingSection speaking={speaking} />
      <SkillsSection skills={skills} />

      {/* CTA */}
      <div className="bg-white py-14 px-4 text-center border-t border-[#FFD700]/20">
        <p className="text-[#800000] font-semibold uppercase tracking-[0.25em] text-xs mb-3">✦ &nbsp; Connect</p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2C1818] mb-3">
          Want to collaborate or follow the work?
        </h2>
        <p className="text-gray-500 text-sm mb-7 max-w-sm mx-auto leading-relaxed">
          Reach out to discuss writing, speaking opportunities, or civic engagement projects.
        </p>
        <a
          href="/rsvp"
          className="inline-block bg-[#800000] hover:bg-[#9c1f1f] text-[#FFD700] px-7 py-3 rounded-lg font-semibold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 shadow-md"
        >
          Get in Touch
        </a>
      </div>
    </>
  );
};

export default WritingSpeaking;
