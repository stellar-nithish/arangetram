import React from 'react';
import RSVPComponent from '../components/RSVP';
import ImageSlider from '../components/ImageSlider';
import AnimateOnScroll from '../components/AnimateOnScroll';

const RSVPPage = () => (
  <main className="min-h-screen bg-accent">
    <ImageSlider />
    
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <AnimateOnScroll>
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-secondary/60"></div>
          <span className="text-secondary text-2xl">✦</span>
          <div className="h-px w-16 bg-secondary/60"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif mb-6">Join Us in Celebration</h2>
        <p className="text-lg md:text-xl text-dark/80 max-w-2xl mx-auto leading-relaxed font-medium">
          Your presence and blessings will make this milestone truly special. Please join us for an evening of classical dance, music, and devotion as Sanjana presents her Bharatanatyam Arangetram.
        </p>
      </AnimateOnScroll>
    </div>

    <AnimateOnScroll>
      <RSVPComponent />
    </AnimateOnScroll>
  </main>
);

export default RSVPPage;
