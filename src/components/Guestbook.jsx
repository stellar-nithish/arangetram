import React, { useState } from 'react';

const initialMessages = [
  { id: 1, name: "Anita Sharma", message: "So incredibly proud of you! Your dedication to this art form is inspiring.", date: "May 10, 2026" },
  { id: 2, name: "Priya & Raj", message: "Wishing you the absolute best on your big day. We can't wait to see your performance!", date: "May 12, 2026" },
  { id: 3, name: "The Patel Family", message: "It has been wonderful watching you grow as a dancer over the years. Best wishes!", date: "May 15, 2026" }
];

const Guestbook = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    const newMessage = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    
    setMessages([newMessage, ...messages]);
    setFormData({ name: '', message: '' });
    setSubmitted(true);
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 px-4 bg-accent relative min-h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-5 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-4">Guestbook</h2>
          <p className="text-lg text-dark/70 font-medium max-w-2xl mx-auto">
            Please leave a message, share a memory, or send your wishes. I would love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-secondary/20 sticky top-32">
              <h3 className="text-2xl font-bold text-dark font-serif mb-6 border-b border-gray-100 pb-4">Sign the Guestbook</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
                    placeholder="Wishing you the best..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-light text-secondary font-bold py-3 px-6 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  {submitted ? 'Message Sent! ✓' : 'Leave a Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Messages List Section */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-bold text-dark font-serif mb-6 flex items-center gap-2">
              <span className="text-primary">✦</span> Recent Messages
            </h3>
            
            <div className="space-y-6 max-h-[800px] overflow-y-auto pr-2 pb-10 scrollbar-hide">
              {messages.map((msg) => (
                <div key={msg.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg text-primary">{msg.name}</h4>
                    <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-full">{msg.date}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-serif italic">"{msg.message}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
