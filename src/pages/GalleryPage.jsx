import React from 'react';
import GalleryComponent from '../components/Gallery';
import AnimateOnScroll from '../components/AnimateOnScroll';

const GalleryPage = () => (
  <main className="min-h-screen pt-20 bg-[#F5F5DC]">
    <AnimateOnScroll>
      <GalleryComponent />
    </AnimateOnScroll>
  </main>
);

export default GalleryPage;
