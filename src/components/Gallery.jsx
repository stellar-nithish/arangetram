import React, { useState, useEffect } from 'react';
import content from '../data/content.json';

const Gallery = () => {
  const { images } = content;
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Keyboard navigation & closing
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.gallery.length - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev < images.gallery.length - 1 ? prev + 1 : 0));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.gallery.length]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedIndex]);

  // Navigation handlers
  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.gallery.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev < images.gallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-24 px-4 bg-accent">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Memories</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-12 font-serif">
          Glimpses of the Journey
        </h2>
        
        {/* Uniform grid for perfect structured arrangement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.gallery.map((imgSrc, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedIndex(index)}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer relative bg-[#111] flex items-center justify-center h-80"
            >
              <img 
                src={imgSrc} 
                alt={`Sanjana Diddige - Gallery Image ${index + 1}`} 
                loading="lazy"
                className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center rounded-lg">
                <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal overlay */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-12 transition-opacity backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button top right */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50"
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          {/* Prev Button */}
          <button 
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 p-3 md:p-4 rounded-full transition-all z-50"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Next Button */}
          <button 
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 p-3 md:p-4 rounded-full transition-all z-50"
            onClick={handleNext}
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div 
            className="relative w-full max-w-6xl max-h-full flex justify-center items-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={images.gallery[selectedIndex]} 
              alt={`Gallery view ${selectedIndex + 1}`} 
              className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
