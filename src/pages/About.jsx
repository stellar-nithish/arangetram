import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content.json';
import SectionHeader from '../components/SectionHeader';
import HighlightCard from '../components/HighlightCard';
import SocialLinks from '../components/SocialLinks';

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: 'easeOut' },
  }),
};

/* ── Icon mapping for highlights ── */
const HIGHLIGHT_META = [
  {
    icon: '⚖️',
    description: 'Top-10 finish at State Mock Trial as Lead Attorney — mastering courtroom advocacy at an elite level.',
  },
  {
    icon: '🏆',
    description: 'Earned 4 National & International recognitions spanning leadership, civic service, and the arts.',
  },
  {
    icon: '🏛️',
    description: 'Junior Optimist International Lt. Governor — expanding youth civic engagement across the region.',
  },
  {
    icon: '💻',
    description: 'Passionate about leveraging technology and policy to modernize and improve local government services.',
  },
];

const About = () => {
  const { about, images } = content;

  return (
    <main id="about-page" className="min-h-screen bg-[#F5F5DC]">

      {/* ══════════════════════════════════
          HERO BAND
      ══════════════════════════════════ */}
      <section
        id="about-hero"
        className="relative bg-[#2C1818] overflow-hidden pt-28 pb-20 px-4"
      >
        {/* Decorative circle blooms */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#800000]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-[#FFD700]/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Text block */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <span className="inline-block text-[#FFD700] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              The Dancer Behind the Art
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#F5F5DC] leading-tight mb-6">
              {about.title}
            </h1>
            <p className="text-white/75 text-lg leading-relaxed max-w-xl">
              {about.content[0]}
            </p>
          </motion.div>

          {/* Hero image */}
          <motion.div
            className="flex-shrink-0 w-full max-w-xs md:max-w-sm"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
          >
            <div className="relative">
              {/* Gold shadow offset */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-[#FFD700]/40" />
              <img
                src={images.about}
                alt="Sanjana Diddige performing Bharatanatyam"
                className="relative z-10 w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
              {/* Maroon glow ring */}
              <div className="absolute -inset-1 rounded-2xl ring-1 ring-[#FFD700]/30 z-20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          BIO SECTION
      ══════════════════════════════════ */}
      <section id="about-bio" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            eyebrow="Personal Journey"
            title="Who Is Sanjana?"
            align="center"
          />

          <div className="grid md:grid-cols-2 gap-10 mt-4">
            {about.content.map((paragraph, i) => (
              <motion.div
                key={i}
                className={`bg-[#F5F5DC] rounded-2xl p-8 border border-[#800000]/10 shadow-sm ${
                  i === about.content.length - 1 && about.content.length % 2 !== 0
                    ? 'md:col-span-2'
                    : ''
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                custom={i * 0.1}
              >
                <div className="flex gap-4 items-start">
                  <span className="text-[#FFD700] text-2xl mt-1 flex-shrink-0">✦</span>
                  <p className="text-gray-700 text-[1.05rem] leading-relaxed">{paragraph}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          JOURNEY HIGHLIGHTS
      ══════════════════════════════════ */}
      <section id="about-highlights" className="py-24 px-4 bg-[#F5F5DC]">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            eyebrow="Achievements"
            title="Journey Highlights"
            subtitle="A snapshot of the milestones that have shaped Sanjana's path."
            align="center"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
            {about.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                custom={i * 0.12}
              >
                <HighlightCard
                  icon={HIGHLIGHT_META[i]?.icon ?? '🌟'}
                  title={highlight}
                  description={HIGHLIGHT_META[i]?.description ?? ''}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CONNECT SECTION
      ══════════════════════════════════ */}
      <section
        id="about-connect"
        className="py-16 px-4 bg-[#2C1818] text-center"
      >
        <motion.div
          className="max-w-xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <span className="text-[#FFD700] text-3xl">✦</span>
          <h2 className="font-serif text-3xl font-bold text-[#F5F5DC] mt-4 mb-3">
            Connect with Sanjana
          </h2>
          <p className="text-white/60 mb-8 text-sm tracking-wide">
            Follow her journey on social media or reach out directly.
          </p>
          <SocialLinks />
        </motion.div>
      </section>
    </main>
  );
};

export default About;
