import React from 'react';
import content from '../data/content.json';
import SocialLinks from './SocialLinks';

const About = () => {
  const { about, images } = content;

  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-lg"></div>
            <img 
              src={images.about} 
              alt="Sanjana Diddige" 
              className="relative z-10 w-full h-auto object-cover rounded-lg shadow-xl"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/30 rounded-full blur-xl z-0"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">The Dancer behind the Art</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 font-serif">
            {about.title}
          </h2>
          
          <div className="space-y-4 text-gray-700 text-lg mb-8 leading-relaxed">
            {about.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <div className="bg-accent p-6 rounded-lg border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-serif text-xl font-bold text-primary mb-4">Journey Highlights</h4>
            <ul className="space-y-3">
              {about.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-secondary mt-1">✦</span>
                  <span className="text-gray-800 font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Connect with Sanjana</h4>
            <SocialLinks />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
