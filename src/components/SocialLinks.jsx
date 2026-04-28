import React from 'react';
import content from '../data/content.json';

const SocialLinks = ({ className = "" }) => {
  const { socials } = content;

  return (
    <div className={`flex items-center justify-center gap-5 ${className}`}>
      {socials.spotify && (
        <a 
          href={socials.spotify} 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-300"
          aria-label="Spotify"
        >
          {/* Spotify Icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#1db954" aria-hidden="true">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.54-1.02.72-1.56.3z" />
          </svg>
        </a>
      )}

      {socials.instagram && (
        <a 
          href={socials.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-300"
          aria-label="Instagram"
        >
          {/* Instagram Icon */}
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
             <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
             <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
             <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      )}

      {socials.linkedin && (
        <a 
          href={socials.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-300"
          aria-label="LinkedIn"
        >
          {/* LinkedIn Icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      )}

      {socials.email && (
        <a 
          href={socials.email} 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-300"
          aria-label="Email"
        >
          {/* Email Icon */}
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#777777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
