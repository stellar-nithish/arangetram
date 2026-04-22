import React from 'react';
import content from '../data/content.json';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventDetails = () => {
  const { arangetram } = content;
  const { eventDetails, segments } = arangetram;

  return (
    <section id="event-details" className="py-24 px-4 bg-accent">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Left Side - Details Card */}
        <div className="w-full md:w-1/3">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary sticky top-24">
            <h2 className="text-4xl font-bold text-dark mb-8 font-serif">
              {eventDetails.title}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-full text-primary mt-1">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="uppercase tracking-wider text-sm font-semibold text-gray-500 mb-1">Date</h3>
                  <p className="text-lg font-medium text-dark">{eventDetails.date}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-full text-primary mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="uppercase tracking-wider text-sm font-semibold text-gray-500 mb-1">Time</h3>
                  <p className="text-lg font-medium text-dark">{eventDetails.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-full text-primary mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="uppercase tracking-wider text-sm font-semibold text-gray-500 mb-1">Venue</h3>
                  <p className="text-lg font-medium text-dark">{eventDetails.venue}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <a 
                href="#rsvp" 
                className="block w-full py-3 text-center border-2 border-primary text-primary hover:bg-primary hover:text-white rounded transition-colors font-medium"
              >
                Reserve Your Seat
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Description and Margam Segments */}
        <div className="w-full md:w-2/3">
          <h3 className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">The Journey</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 font-serif">
            A Poetry of the Body
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            {eventDetails.description}
          </p>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:ml-6 md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
            {segments.map((segment, index) => (
              <div key={index} className="relative flex items-start justify-between">
                <div className="absolute left-0 mt-1 md:mt-2 w-8 h-8 md:w-12 md:h-12 rounded-full border-4 border-accent bg-primary flex items-center justify-center shadow">
                  <span className="text-white font-bold text-xs md:text-sm">{index + 1}</span>
                </div>
                <div className="pl-14 md:pl-20 w-full">
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-transparent hover:border-secondary transition-colors duration-300">
                    <h4 className="text-xl md:text-2xl font-bold text-dark mb-3 font-serif">
                      {segment.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {segment.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventDetails;
