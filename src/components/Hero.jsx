import React from 'react';
import content from '../data/content.json';

const Hero = () => {
  const { home, images } = content;
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Mobile Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center md:hidden bg-no-repeat"
        style={{ backgroundImage: `url(${images.hero[0]})` }}
      />
      
      {/* Desktop Background Image (Tablet and up) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${images.heroDesktop})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-secondary tracking-widest uppercase mb-4 text-sm md:text-base font-semibold">
          {home.greeting}
        </h2>
        <h1 className="text-accent text-5xl md:text-7xl font-bold mb-6 text-glow leading-tight">
          {home.title.replace("I'm ", "")}
          <div className="block text-2xl md:text-4xl mt-2 font-normal opacity-90">Arangetram</div>
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl leading-relaxed">
          {home.description}
        </p>
        <a 
          href="#rsvp" 
          className="bg-primary hover:bg-primary-light text-secondary px-8 py-4 rounded-md uppercase tracking-wider font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl border border-secondary/20"
        >
          RSVP Now
        </a>
      </div>
      
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
