import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { projectsData } from '../data/projectsData';

/* ────────────────────────────────────────────────
   Shared Components
──────────────────────────────────────────────── */
const Tags = ({ tags, accent }) => {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mb-4">
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
};

const ExternalLink = ({ url, label, type, accent }) => {
  const isMedia = type === 'media';
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70 group"
      style={{ color: accent }}
    >
      {isMedia ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      )}
      <span className="group-hover:underline underline-offset-4">{label}</span>
    </a>
  );
};

const ProjectCard = ({ project, accent }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 overflow-hidden transition-all duration-400 group h-full">
      {/* Image Header */}
      <div className="relative h-56 overflow-hidden bg-dark shrink-0">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent" />
        {project.duration && (
          <span
            className="absolute bottom-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full text-white shadow-sm"
            style={{ background: accent }}
          >
            {project.duration}
          </span>
        )}
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl md:text-2xl font-bold text-dark mb-3 leading-snug group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        
        {project.bullets && project.bullets.length > 0 && (
          <ul className="space-y-3 mb-8 text-sm text-gray-700 flex-1">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-xl mt-[-4px] shrink-0" style={{ color: accent }}>•</span>
                <span className="leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Links Footer */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-col gap-3 pt-5 border-t border-gray-100 mt-auto">
            {project.links.map((link, i) => (
              <ExternalLink key={i} url={link.url} label={link.label} type={link.type} accent={accent} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════════
   HERO BANNER
════════════════════════════════════════════════ */
const PageHero = () => (
  <div
    className="relative w-full flex items-center justify-center overflow-hidden bg-dark"
    style={{ minHeight: '80svh', paddingTop: '72px' }}
  >
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: `radial-gradient(circle, var(--color-secondary) 1px, transparent 1px)`,
        backgroundSize: '36px 36px',
      }}
    />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(128,0,0,0.35),transparent)]" />
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />

    <div className="relative z-10 text-center px-6 w-full max-w-4xl mx-auto py-20">
      <span className="inline-block text-secondary font-semibold uppercase tracking-[0.3em] text-[11px] mb-6 opacity-80">
        ✦ &nbsp; Portfolio &nbsp; ✦
      </span>

      <h1 className="font-serif font-bold text-accent leading-[1.1] mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Projects &{' '}
        <span
          className="text-secondary"
          style={{ textShadow: '0 0 40px rgba(255,215,0,0.35)' }}
        >
          Initiatives
        </span>
      </h1>

      <p className="text-accent/70 leading-relaxed mx-auto text-sm sm:text-base md:text-lg max-w-2xl sm:max-w-2xl">
        A deeper look at my work across law & government, community leadership, and civic tech & media experience.
      </p>

      <div className="flex items-center justify-center gap-4 mt-10">
        <span className="h-px w-12 sm:w-20 bg-secondary/30" />
        <span className="text-secondary text-lg">✦</span>
        <span className="h-px w-12 sm:w-20 bg-secondary/30" />
      </div>
    </div>

    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#projects-content" className="text-secondary/50 hover:text-secondary transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      </a>
    </div>
  </div>
);

/* ════════════════════════════════════════════════
   PAGE ROOT
════════════════════════════════════════════════ */
const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay, ease: 'easeOut' },
    }),
  };

  return (
    <main className="min-h-screen bg-accent">
      <PageHero />

      <div id="projects-content" className="py-20">
        
        {/* Section 1: Law & Government */}
        <section id="law-and-government" className="py-16 px-4 bg-white relative">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              eyebrow="Justice & Public Service"
              title="Law & Government"
              align="center"
              theme="light"
            />
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.lawAndGovernment.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp}
                  custom={idx * 0.15}
                >
                  <ProjectCard project={project} accent="var(--color-primary)" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Community Leadership */}
        <section id="community-leadership" className="py-24 px-4 bg-gradient-to-b from-accent/50 to-white relative">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              eyebrow="Impact & Influence"
              title="Community Leadership"
              align="center"
              theme="light"
            />
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {projectsData.communityLeadership.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp}
                  custom={idx * 0.15}
                >
                  <ProjectCard project={project} accent="var(--color-secondary)" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Civic Tech & Media */}
        <section id="civic-tech-and-media" className="py-24 px-4 bg-dark relative overflow-hidden">
          {/* Subtle glow for dark background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeader
              eyebrow="Voice & Vision"
              title="Civic Tech & Media"
              align="center"
              theme="dark"
            />
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {projectsData.civicTechAndMedia.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp}
                  custom={idx * 0.15}
                >
                  <ProjectCard project={project} accent="#4A90D9" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── CTA ── */}
      <div className="bg-accent py-16 px-4 text-center border-t border-secondary/20">
        <p className="text-primary font-semibold uppercase tracking-[0.25em] text-xs mb-3">
          ✦ &nbsp; Let's Connect
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-4">
          Want to collaborate or learn more?
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto text-sm leading-relaxed">
          Reach out — Sanjana is always open to conversations about law, civic tech, leadership, and the arts.
        </p>
        <a
          href="/rsvp"
          className="inline-block bg-primary hover:bg-primary-light text-secondary px-8 py-3 rounded-lg font-semibold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Get in Touch
        </a>
      </div>
    </main>
  );
};

export default Projects;
