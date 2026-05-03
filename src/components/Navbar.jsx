import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home',               path: '/' },
  { label: 'About',              path: '/about' },
  { 
    label: 'Projects', 
    path: '/projects',
    subItems: [
      { label: 'All Projects', path: '/projects' },
      { label: 'Government', path: '/projects#government' },
      { label: 'Community Leadership', path: '/projects#community' },
      { label: 'Civic Tech & Media', path: '/projects#civic-tech' }
    ]
  },
  { label: 'Award & Gallery',    path: '/award-gallery' },
  { label: 'Writing & Speaking', path: '/writing-speaking' },
  { label: 'Arangetram',         path: '/arangetram' },
  { label: 'Guestbook',          path: '/guestbook' },
  { label: 'RSVP',               path: '/rsvp' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState({});
  const location                  = useLocation();

  /* Close mobile menu on route change */
  useEffect(() => { 
    setMenuOpen(false); 
    setMobileSubmenuOpen({});
  }, [location]);

  /* Shrink nav on scroll */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  const handleNavClick = (path) => {
    if (path && path.includes('#')) {
      const hash = path.split('#')[1];
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMobileSubmenu = (label) => {
    setMobileSubmenuOpen(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)] py-3'
          : 'bg-gradient-to-b from-dark/80 to-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* ── Logo ── */}
        <NavLink
          to="/"
          className="flex items-center gap-2 group shrink-0"
          aria-label="Home"
          onClick={() => handleNavClick('/')}
        >
          <span className="text-secondary text-2xl select-none group-hover:rotate-12 transition-transform duration-300">✦</span>
          <span className="font-serif text-accent text-xl font-bold tracking-wide leading-none">
            Sanjana
            <span className="text-secondary"> Diddige</span>
          </span>
        </NavLink>

        {/* ── Desktop Links ── */}
        <ul className="hidden xl:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map(({ label, path, subItems }) => (
            <li key={label} className="relative group">
              <NavLink
                to={path}
                end={path === '/'}
                id={`nav-${label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleNavClick(path)}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-2 py-2 text-[12px] font-semibold uppercase tracking-widest transition-all duration-300
                   after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                   after:h-[2px] after:rounded-full after:transition-all after:duration-300
                   ${isActive
                     ? 'text-secondary after:w-4/5 after:bg-secondary'
                     : 'text-accent/80 hover:text-secondary after:w-0 hover:after:w-4/5 hover:after:bg-secondary/60'
                   }`
                }
              >
                {label}
                {subItems && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              </NavLink>

              {/* Desktop Dropdown */}
              {subItems && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-dark/95 backdrop-blur-md border border-secondary/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">
                  <ul className="py-2">
                    {subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <NavLink
                          to={subItem.path}
                          onClick={() => handleNavClick(subItem.path)}
                          className="block px-4 py-2 text-sm text-accent/80 hover:text-secondary hover:bg-primary/30 transition-colors"
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* ── Mobile Hamburger ── */}
        <button
          id="nav-hamburger"
          className="xl:hidden text-secondary p-2 rounded-md hover:bg-primary/40 transition-colors"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={`xl:hidden overflow-y-auto transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-dark/97 backdrop-blur-md border-t border-secondary/20 px-4 pb-6 pt-2 space-y-1">
          {NAV_ITEMS.map(({ label, path, subItems }) => (
            <li key={label}>
              <div className="flex items-center">
                <NavLink
                  to={path}
                  end={path === '/'}
                  onClick={() => handleNavClick(path)}
                  className={({ isActive }) =>
                    `flex-1 flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-widest transition-all duration-200
                     ${isActive
                       ? 'bg-primary/60 text-secondary border-l-2 border-secondary'
                       : 'text-accent/80 hover:bg-primary/30 hover:text-secondary'
                     }`
                  }
                >
                  <span className="text-secondary/60 text-xs">✦</span>
                  {label}
                </NavLink>
                {subItems && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleMobileSubmenu(label);
                    }}
                    className="p-3 text-accent/80 hover:text-secondary"
                  >
                    <ChevronDown size={18} className={`transition-transform duration-300 ${mobileSubmenuOpen[label] ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              
              {/* Mobile Submenu */}
              {subItems && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileSubmenuOpen[label] ? 'max-h-48 opacity-100 mt-1' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="pl-8 pr-4 space-y-1">
                    {subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <NavLink
                          to={subItem.path}
                          onClick={() => handleNavClick(subItem.path)}
                          className="block px-4 py-2 text-xs font-medium uppercase tracking-wider text-accent/60 hover:text-secondary rounded-lg hover:bg-primary/20 transition-colors"
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
