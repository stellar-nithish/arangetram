import React, { useState, useEffect } from 'react';
import content from '../data/content.json';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  "/images/photo_9.webp",
  "/images/photo_8.webp",
  "/images/photo_2.webp"
];

const Hero = () => {
  const { home } = content;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image Slider */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={heroImages[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-[center_15%] md:object-[center_25%] z-0"
          alt={`Hero background ${currentIndex + 1}`}
        />
      </AnimatePresence>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pointer-events-none">
        <h2 className="text-secondary tracking-widest uppercase mb-4 text-sm md:text-base font-semibold pointer-events-auto">
          {home.greeting}
        </h2>
        <h1 className="text-accent text-5xl md:text-7xl font-bold mb-6 text-glow leading-tight pointer-events-auto">
          {home.title.replace("I'm ", "")}
          <div className="block text-2xl md:text-4xl mt-2 font-normal opacity-90">Arangetram</div>
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl leading-relaxed pointer-events-auto">
          {home.description}
        </p>
        <a 
          href="#rsvp" 
          className="bg-primary hover:bg-primary-light text-secondary px-8 py-4 rounded-md uppercase tracking-wider font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl border border-secondary/20 pointer-events-auto"
        >
          RSVP Now
        </a>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-black/20 hover:bg-black/50 text-white rounded-full flex items-center justify-center z-30 transition-colors backdrop-blur-sm border border-white/10"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-black/20 hover:bg-black/50 text-white rounded-full flex items-center justify-center z-30 transition-colors backdrop-blur-sm border border-white/10"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#event-details" className="text-secondary/70 hover:text-secondary duration-300">
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </a>
      </div>

    </section>
  );
};

export default Hero;
