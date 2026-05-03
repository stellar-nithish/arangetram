import React, { useState } from 'react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendees: '1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("RSVP Submitted: ", formData);
    setSubmitted(true);
    // Scroll to the top of the RSVP section to see the thank you message
    const section = document.getElementById('rsvp');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rsvp" className="py-16 px-4 bg-accent relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583002613175-9e6b4e43eb91?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10 border border-secondary/30">
        <div className="bg-dark p-10 text-center border-b-4 border-secondary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-accent font-serif mb-3 drop-shadow-md">
            Reserve Your Seat
          </h2>
          <p className="text-secondary font-medium tracking-wide uppercase text-sm">We kindly request your response by July 15th</p>
        </div>

        <div className="p-8 md:p-14">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-green-100 shadow-sm">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-3xl font-bold text-primary font-serif mb-4">Thank You!</h3>
              <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">Your RSVP has been confirmed. We eagerly look forward to welcoming you.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-primary font-bold hover:text-secondary uppercase tracking-widest text-sm transition-colors"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-dark/80 uppercase tracking-wider mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary focus:bg-white focus:outline-none transition-all rounded-t-md"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-dark/80 uppercase tracking-wider mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary focus:bg-white focus:outline-none transition-all rounded-t-md"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-dark/80 uppercase tracking-wider mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary focus:bg-white focus:outline-none transition-all rounded-t-md"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="attendees" className="block text-sm font-bold text-dark/80 uppercase tracking-wider mb-2">Number of Guests <span className="text-red-500">*</span></label>
                  <select
                    id="attendees"
                    name="attendees"
                    value={formData.attendees}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary focus:bg-white focus:outline-none transition-all rounded-t-md cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-dark/80 uppercase tracking-wider mb-2">Message or Special Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-secondary focus:bg-white focus:outline-none transition-all rounded-t-md resize-none"
                  placeholder="Dietary restrictions, accessible seating, etc."
                ></textarea>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-[#5A0000] text-secondary font-bold text-lg py-4 px-8 rounded-lg flex justify-center items-center gap-3 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Confirm Attendance
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;
