import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, CheckCircle } from 'lucide-react';
import content from '../data/content.json';

const RSVP = () => {
  const { eventDetails } = content.arangetram;
  const { socials } = content;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    going: 'Yes',
    attendees: '1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    console.log("RSVP Submitted: ", formData);
    setSubmitted(true);
    
    // Smooth scroll to top of RSVP section
    const section = document.getElementById('rsvp');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rsvp" className="bg-[#0B0B0B] py-24 px-6 md:px-12 lg:px-20 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Event Information */}
        <div className="text-gray-300">
          <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-10 pb-4 border-b border-gray-800 tracking-wide">
            Information
          </h2>
          
          <div className="space-y-6 text-lg">
            {eventDetails.email && (
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="text-[#D4AF37] font-semibold min-w-[100px]">Email:</span>
                <a href={`mailto:${eventDetails.email}`} className="hover:text-[#D4AF37] transition-colors break-all">
                  {eventDetails.email}
                </a>
              </div>
            )}
            
            {eventDetails.venue && (
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="text-[#D4AF37] font-semibold min-w-[100px]">Venue:</span>
                <p className="leading-relaxed">
                  {eventDetails.venue}
                  {eventDetails.venueAddress && (<><br/>{eventDetails.venueAddress}</>)}
                </p>
              </div>
            )}
            
            {eventDetails.date && (
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="text-[#D4AF37] font-semibold min-w-[100px]">Date:</span>
                <p>{eventDetails.date}</p>
              </div>
            )}
            
            {eventDetails.time && (
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="text-[#D4AF37] font-semibold min-w-[100px]">Time:</span>
                <p>{eventDetails.time}</p>
              </div>
            )}
            
            {eventDetails.seating && (
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="text-[#D4AF37] font-semibold min-w-[100px]">Seating:</span>
                <p>{eventDetails.seating}</p>
              </div>
            )}
            
            {eventDetails.dressCode && (
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                <span className="text-[#D4AF37] font-semibold min-w-[100px]">Dress Code:</span>
                <p>{eventDetails.dressCode}</p>
              </div>
            )}
          </div>

          {eventDetails.additionalNotes && eventDetails.additionalNotes.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 space-y-4 text-base leading-relaxed">
              {eventDetails.additionalNotes.map((note, index) => (
                <p key={index}>{note}</p>
              ))}
            </div>
          )}

          {eventDetails.directionsUrl && (
            <button 
              className="mt-10 bg-[#4B0082] hover:bg-[#3B0066] text-white px-6 py-3 rounded text-sm tracking-wide font-medium transition-all flex items-center gap-2"
              onClick={() => window.open(eventDetails.directionsUrl, '_blank')}
            >
              <Navigation size={18} className="fill-white" />
              Directions
            </button>
          )}

          <div className="mt-8 pt-8 border-t border-gray-800">
            <Link 
              to="/award-gallery"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold border-b border-[#D4AF37] hover:border-white pb-1"
            >
              View Award & Gallery
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>

        {/* Right Column: RSVP Form */}
        <div className="h-full flex flex-col">
          {submitted ? (
            <div className="h-full bg-[#111111]/50 border border-[#D4AF37]/30 rounded-xl flex flex-col items-center justify-center text-center space-y-6 p-12 py-24 shadow-2xl">
              <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4 border border-[#D4AF37]/20">
                <CheckCircle className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-3xl font-serif text-[#D4AF37]">Thank You!</h3>
              <p className="text-gray-300 text-lg max-w-sm">Your RSVP has been confirmed. We eagerly look forward to welcoming you.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-[#D4AF37] hover:text-white border-b border-[#D4AF37] pb-1 transition-colors tracking-wider text-sm"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
              <p className="text-[#D4AF37] text-sm mb-2 flex items-center gap-1 font-medium">
                <span className="text-lg leading-none">*</span> indicates mandatory fields
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
                  Your Name <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 transition-shadow ${errors.name ? 'ring-red-500 ring-2' : 'focus:ring-[#D4AF37]'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-white mb-2">
                  Your Phone <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 transition-shadow ${errors.phone ? 'ring-red-500 ring-2' : 'focus:ring-[#D4AF37]'}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-shadow"
                />
              </div>

              <div>
                <label htmlFor="going" className="block text-sm font-bold text-white mb-2">
                  Going? <span className="text-[#D4AF37]">*</span>
                </label>
                <div className="w-1/2">
                  <select
                    id="going"
                    name="going"
                    value={formData.going}
                    onChange={handleChange}
                    className="w-full bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] cursor-pointer transition-shadow appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right .7rem top 50%', backgroundSize: '.65rem auto' }}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="attendees" className="block text-sm font-bold text-white mb-2">
                  Number of Guests
                </label>
                <div className="w-1/2">
                  <input
                    type="number"
                    id="attendees"
                    name="attendees"
                    min="1"
                    max="10"
                    value={formData.attendees}
                    onChange={handleChange}
                    className="w-full bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-shadow"
                    disabled={formData.going === 'No'}
                  />
                </div>
              </div>

              <div className="flex-grow">
                <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                  Message/Comments
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none transition-shadow"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#7A1C1C] hover:bg-[#8e2121] text-white font-bold py-4 px-8 mt-2 transition-all shadow-lg hover:shadow-xl active:scale-[0.99]"
              >
                Submit RSVP
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;

