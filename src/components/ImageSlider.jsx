import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "/images/photo_1.webp",
  "/images/photo_8.webp",
  "/images/photo_2.webp"
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-dark">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          alt={`Slider image ${currentIndex + 1}`}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent z-10"></div>
      
      {/* Event Details Overlay */}
      <div className="absolute bottom-16 left-0 right-0 z-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4">Sanjana Diddige</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-accent font-bold mb-4 drop-shadow-lg">Bharatanatyam Arangetram</h1>
          </motion.div>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === currentIndex ? 'bg-secondary w-8' : 'bg-white/50 hover:bg-white/80 w-3'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
