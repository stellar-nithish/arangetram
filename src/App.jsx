import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';

// Pages
import Home              from './pages/Home';
import About             from './pages/About';
import Arangetram        from './pages/Arangetram';
import RSVPPage          from './pages/RSVPPage';
import LifePhilosophy    from './pages/LifePhilosophy';
import Projects          from './pages/Projects';
import AwardGallery      from './pages/AwardGallery';
import WritingSpeaking   from './pages/WritingSpeaking';
import GuestbookPage     from './pages/GuestbookPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="font-sans w-full min-h-screen text-dark bg-accent selection:bg-primary selection:text-secondary">
        <Navbar />
        <Routes>
          <Route path="/"                 element={<Home />} />
          <Route path="/about"             element={<About />} />
          <Route path="/arangetram"         element={<Arangetram />} />
          <Route path="/rsvp"              element={<RSVPPage />} />
          <Route path="/guestbook"         element={<GuestbookPage />} />
          <Route path="/life-philosophy"   element={<LifePhilosophy />} />
          <Route path="/projects"          element={<Projects />} />
          <Route path="/award-gallery"     element={<AwardGallery />} />
          <Route path="/writing-speaking"  element={<WritingSpeaking />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
