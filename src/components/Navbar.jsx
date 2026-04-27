import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home',        path: '/' },
  { label: 'Arangetram',  path: '/arangetram' },
  { label: 'About',       path: '/about' },
  { label: 'Gallery',     path: '/gallery' },
  { label: 'RSVP',        path: '/rsvp' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const location                  = useLocation();

  /* Close mobile menu on route change */
  useEffect(() => { setMenuOpen(false); }, [location]);

  /* Shrink nav on scroll */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#2C1818]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)] py-3'
          : 'bg-gradient-to-b from-[#2C1818]/80 to-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* ── Logo ── */}
        <NavLink
          to="/"
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <span className="text-[#FFD700] text-2xl select-none group-hover:rotate-12 transition-transform duration-300">✦</span>
          <span className="font-serif text-[#F5F5DC] text-xl font-bold tracking-wide leading-none">
            Sanjana
            <span className="text-[#FFD700]"> Diddige</span>
          </span>
        </NavLink>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                id={`nav-${label.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-semibold uppercase tracking-widest transition-all duration-300
                   after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                   after:h-[2px] after:rounded-full after:transition-all after:duration-300
                   ${isActive
                     ? 'text-[#FFD700] after:w-4/5 after:bg-[#FFD700]'
                     : 'text-[#F5F5DC]/80 hover:text-[#FFD700] after:w-0 hover:after:w-4/5 hover:after:bg-[#FFD700]/60'
                   }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Mobile Hamburger ── */}
        <button
          id="nav-hamburger"
          className="md:hidden text-[#FFD700] p-2 rounded-md hover:bg-[#800000]/40 transition-colors"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-[#2C1818]/97 backdrop-blur-md border-t border-[#FFD700]/20 px-4 pb-6 pt-2 space-y-1">
          {NAV_ITEMS.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                id={`nav-mobile-${label.toLowerCase()}`}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-widest transition-all duration-200
                   ${isActive
                     ? 'bg-[#800000]/60 text-[#FFD700] border-l-2 border-[#FFD700]'
                     : 'text-[#F5F5DC]/80 hover:bg-[#800000]/30 hover:text-[#FFD700]'
                   }`
                }
              >
                <span className="text-[#FFD700]/60 text-xs">✦</span>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
