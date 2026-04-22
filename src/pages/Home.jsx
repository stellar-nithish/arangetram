import React from 'react';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import About from '../components/About';
import Gallery from '../components/Gallery';
import RSVP from '../components/RSVP';

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <EventDetails />
      <About />
      <Gallery />
      <RSVP />
      
      {/* Footer */}
      <footer className="bg-dark text-accent py-8 text-center border-t-4 border-primary">
        <p className="font-serif">&copy; {new Date().getFullYear()} Sanjana Diddige. All Rights Reserved.</p>
        <p className="mt-2 text-sm text-gray-400">Arangetram - A Celebration of Dance</p>
      </footer>
    </div>
  );
};

export default Home;
