import React from 'react';
import content from '../data/content.json';
import EventDetails from '../components/EventDetails';
import AnimateOnScroll from '../components/AnimateOnScroll';

const Arangetram = () => {
  const { arangetram } = content;
  return (
    <main className="min-h-screen pt-20 bg-[#F5F5DC]">
      <AnimateOnScroll>
        <EventDetails />
      </AnimateOnScroll>
    </main>
  );
};

export default Arangetram;
