import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Pages
import Home        from './pages/Home';
import About       from './pages/About';
import Arangetram  from './pages/Arangetram';
import GalleryPage from './pages/GalleryPage';
import RSVPPage    from './pages/RSVPPage';

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans w-full min-h-screen text-dark bg-accent selection:bg-primary selection:text-secondary">
        <Navbar />
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/about"      element={<About />} />
          <Route path="/arangetram" element={<Arangetram />} />
          <Route path="/gallery"    element={<GalleryPage />} />
          <Route path="/rsvp"       element={<RSVPPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
