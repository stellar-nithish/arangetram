import React from 'react';
import RSVPComponent from '../components/RSVP';
import AnimateOnScroll from '../components/AnimateOnScroll';

const RSVPPage = () => (
  <main className="min-h-screen pt-20 bg-[#F5F5DC]">
    <AnimateOnScroll>
      <RSVPComponent />
    </AnimateOnScroll>
  </main>
);

export default RSVPPage;
