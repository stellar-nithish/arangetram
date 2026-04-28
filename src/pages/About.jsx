import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import content from '../data/content.json';
import SectionHeader from '../components/SectionHeader';
import HighlightCard from '../components/HighlightCard';
import SocialLinks from '../components/SocialLinks';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

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
    icon: '📜',
    description: 'Awarded the prestigious DAR American History Essay Contest National High School Winner.',
  },
  {
    icon: '🏆',
    description: 'Recognized as the National Winner of the NCSS 1787 Prize for an exceptional essay on Reforms to Article III.',
  },
  {
    icon: '🏛️',
    description: 'Junior Optimist International Lt. Governor — expanding youth civic engagement and community service across the region.',
  },
  {
    icon: '💻',
    description: 'Passionate about leveraging technology and modern policy to improve local government services.',
  },
];

/* ── Timeline data ── */
const TIMELINE_DATA = [
  {
    year: '2025',
    image: '/images/timeline_image_1.jpg',
    items: [
      'DAR American History Essay Contest – National High School Winner',
      'NCSS 1787 Prize essay National Winner on Reforms to Article III',
      'The Concord Review: 13,672-word paper on Mercy Otis Warren under editorial consideration',
      'John Locke Global Essay Prize – shortlisted in Politics & Philosophy',
      'Rising Leader, Kruti Dance Academy',
      '2025-26 CTAE Ambassador'
    ]
  },
  {
    year: '2024',
    image: '/images/timeline_image_2.jpg',
    items: [
      'Lt. Governor, JOI Southeast Region',
      'Intern, Forsyth County Probate Court',
      'Intern, Coleman Legal Group',
      'Youth Leadership Forsyth volunteer',
      'Outstanding Attorney, State Mock Trial Championships (repeat)',
      'Rising High Schooler, Junior Optimist International'
    ]
  },
  {
    year: '2023',
    image: '/images/timeline_image_3.jpg',
    items: [
      'President/Founder, JOI @ SFHS (service drives; 40 cake kits with Meals by Grace; 100+ affirmation cards)',
      'Outstanding Attorney, State Mock Trial Championships',
      'Class of the High School Student Bar of GA',
      'Emerging Leader, Kruti Dance Academy',
      'TecBridge Digital Media Director; launched A Deep Dive into the Digital Divide (60+ plays, 252 impressions)'
    ]
  },
  {
    year: '2022',
    image: '/images/timeline_image_4.jpg',
    items: [
      'Vice President & Lead Attorney, SFHS Mock Trial (team to Top-10 in GA)'
    ]
  }
];

/* ── Passion data ── */
const PASSION_DATA = [
  {
    title: 'Exploring',
    icon: '💎',
    items: [
      'Public Speaking',
      'Leadership & Community Engagement',
      'Law & Government',
      'Public Service Initiatives'
    ]
  },
  {
    title: 'Creating',
    icon: '💡',
    items: [
      'Writing (Essays & Research Articles)',
      'Digital Awareness through Podcasts',
      'Legal Process Innovation',
      'Project Management & Event Organizing'
    ]
  },
  {
    title: 'Learning',
    icon: '📈',
    items: [
      'Legal Research',
      'AI in Legal Tech',
      'Indian Classical Dance (Bharatanatyam)',
      'New Leadership Strategies'
    ]
  }
];

const About = () => {
  const { about, images } = content;

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
          TIMELINE SECTION
      ══════════════════════════════════ */}
      <section id="about-timeline" className="py-24 px-4 bg-gradient-to-b from-[#F5F5DC]/50 to-white overflow-hidden" ref={timelineRef}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="My Journey"
            title="Timeline"
            align="center"
          />

          <div className="relative mt-16 md:mt-24">
            {/* Center Line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-[#800000]/10 -translate-x-1/2 rounded-full overflow-hidden">
               <motion.div 
                 className="absolute top-0 w-full bg-[#800000]"
                 style={{ height: lineHeight }}
               />
            </div>
            
            {/* Line for mobile */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-[4px] bg-[#800000]/10 -translate-x-1/2 rounded-full overflow-hidden">
               <motion.div 
                 className="absolute top-0 w-full bg-[#800000]"
                 style={{ height: lineHeight }}
               />
            </div>

            <div className="space-y-12 md:space-y-16">
              {TIMELINE_DATA.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full group">
                    
                    {/* Timeline Node (Year) */}
                    <div className="z-10 flex items-center justify-center bg-[#800000] text-[#FFD700] font-bold text-sm md:text-lg rounded-full w-14 h-14 md:w-20 md:h-20 shadow-lg border-4 border-white shrink-0 absolute left-6 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 group-hover:scale-110 transition-transform duration-300 md:order-2">
                      {milestone.year}
                    </div>

                    {/* Mobile connecting line for Content Box */}
                    <div className="md:hidden absolute left-6 top-7 w-10 h-[2px] bg-[#800000]/20 z-0" />

                    {/* Content Box */}
                    <motion.div 
                      className={`w-full md:w-[45%] pl-16 md:pl-0 mb-8 md:mb-0 ${isEven ? 'md:order-1' : 'md:order-3'}`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-60px' }}
                      variants={fadeUp}
                      custom={idx * 0.15}
                    >
                      <div className="bg-[#F5F5DC] rounded-2xl p-6 md:p-8 shadow-sm border border-[#800000]/10 hover:shadow-md transition-all relative">
                        {/* Connecting line to node (Desktop) */}
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-[#800000]/20 ${isEven ? '-right-8' : '-left-8'}`} />
                        <ul className="space-y-3">
                          {milestone.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-left">
                              <span className="text-[#800000] mt-[2px] text-lg leading-none shrink-0">•</span>
                              <span className="text-gray-700 leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Image Box */}
                    <motion.div 
                      className={`w-full pl-16 md:pl-0 md:w-[45%] relative ${isEven ? 'md:order-3' : 'md:order-1'}`}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-60px' }}
                      variants={fadeUp}
                      custom={idx * 0.2}
                    >
                      {/* Connecting line to node for image (Desktop) */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-[#800000]/20 ${isEven ? '-left-8' : '-right-8'}`} />
                      
                      <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-sm border-2 border-[#800000]/10 hover:shadow-md transition-shadow group-hover:border-[#800000]/30 duration-300">
                        <img 
                          src={milestone.image} 
                          alt={`Timeline ${milestone.year}`} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </motion.div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          JOURNEY HIGHLIGHTS
      ══════════════════════════════════ */}
      <section id="about-highlights" className="relative py-24 px-4 bg-[#2C1818] overflow-hidden">
        {/* Subtle decorative glow for dark background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#800000]/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-6xl mx-auto relative z-10">

          <SectionHeader
            eyebrow="Achievements"
            title="Journey Highlights"
            subtitle="A snapshot of the milestones that have shaped Sanjana's path."
            align="center"
            theme="dark"
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
          MY PASSION SECTION
      ══════════════════════════════════ */}
      <section id="about-passion" className="py-24 px-4 bg-gradient-to-b from-[#F5F5DC]/40 to-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="What I Do"
            title="My Passion"
            align="center"
          />
          
          <div className="flex justify-center mb-12">
            <div className="bg-[#2C1818] text-[#FFD700] px-8 py-3 rounded-md font-semibold tracking-wide shadow-md">
              Strategy, Impact and a Bit of Inspiration
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PASSION_DATA.map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-[#F5F5DC] rounded-2xl p-8 border border-[#800000]/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                custom={idx * 0.15}
              >
                {/* Decorative subtle background elements */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#FFD700]/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm mb-6 border border-[#800000]/5">
                    {card.icon}
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-[#2C1818] mb-4">
                    {card.title}
                  </h3>
                  
                  <div className="w-16 h-[2px] bg-[#800000]/30 mb-6 rounded-full" />
                  
                  <ul className="text-left space-y-3 w-full">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#800000] text-xl mt-[-2px] leading-none">•</span>
                        <span className="text-gray-700 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          LIFE PHILOSOPHY SECTION
      ══════════════════════════════════ */}
      <section id="about-philosophy" className="py-24 px-4 bg-white border-t border-[#800000]/5 relative overflow-hidden">
        {/* Background watermark icon */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#800000]/5 w-[16rem] md:w-[24rem] h-[16rem] md:h-[24rem] pointer-events-none select-none z-0">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <h3 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">A Guiding Light</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 font-serif">Life Philosophy</h2>
          </div>
          <div className="mt-8">
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              Discover the motto that carried me through the toughest moments of my arangetram journey.
            </p>
            <Link
              to="/life-philosophy"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block border-2 border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-[#F5F5DC] px-8 py-3 rounded-full font-semibold tracking-wide transition-colors duration-300"
            >
              Read Life Philosophy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
