import React from 'react';
import LinkButton from './LinkButton';

const SpeakingCard = ({ role, roleColor, event, description, link, index }) => (
  <article className="group relative flex gap-5 items-start">
    {/* Timeline connector */}
    <div className="flex flex-col items-center shrink-0 pt-1">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center font-bold font-serif text-sm text-white shadow-md transition-transform duration-300 group-hover:scale-110 z-10"
        style={{ background: roleColor }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="w-px flex-1 mt-2 bg-gradient-to-b from-white/20 to-transparent min-h-[32px]" />
    </div>

    {/* Card body */}
    <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-secondary/30 p-5 transition-all duration-300 mb-4 hover:bg-white/15">
      {/* Role badge */}
      <span
        className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full text-white mb-2"
        style={{ background: roleColor }}
      >
        {role}
      </span>

      {/* Event name */}
      <h3 className="font-serif text-base font-bold text-accent mb-1.5 leading-snug">
        {event}
      </h3>

      {/* Description */}
      <p className="text-accent/65 text-sm leading-relaxed mb-3">
        {description}
      </p>

      {/* Link */}
      {link && (
        <LinkButton
          label={link.label}
          url={link.url}
          type={link.type}
          accent='var(--color-secondary)'
        />
      )}
    </div>
  </article>
);

export default SpeakingCard;
