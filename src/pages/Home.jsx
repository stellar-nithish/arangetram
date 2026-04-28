import React from 'react';
import Hero from '../components/Hero';
import EventDetails from '../components/EventDetails';
import About from '../components/About';
import Gallery from '../components/Gallery';
import RSVP from '../components/RSVP';
import AnimateOnScroll from '../components/AnimateOnScroll';

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <AnimateOnScroll><EventDetails /></AnimateOnScroll>
      <AnimateOnScroll><About /></AnimateOnScroll>
      <AnimateOnScroll><Gallery /></AnimateOnScroll>
      <AnimateOnScroll><RSVP /></AnimateOnScroll>
    </div>
  );
};

export default Home;
