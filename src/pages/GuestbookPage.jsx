import React from 'react';
import Guestbook from '../components/Guestbook';
import AnimateOnScroll from '../components/AnimateOnScroll';

const GuestbookPage = () => {
  return (
    <main className="min-h-screen pt-20 bg-accent">
      <AnimateOnScroll>
        <Guestbook />
      </AnimateOnScroll>
    </main>
  );
};

export default GuestbookPage;
