import React from 'react';

/**
 * HighlightCard
 * @param {string} icon        – emoji or symbol
 * @param {string} title       – card heading
 * @param {string} description – body text
 * @param {string} accent      – optional accent CSS color string
 */
const HighlightCard = ({ icon, title, description, accent = 'var(--color-primary)' }) => (
  <article
    className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl
               border border-accent hover:border-secondary/60
               transition-all duration-300 overflow-hidden cursor-default"
  >
    {/* Subtle background glow on hover */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl"
      style={{ background: `radial-gradient(circle at top left, ${accent}, transparent 70%)` }}
    />

    {/* Left accent bar */}
    <div
      className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full transition-all duration-300
                 group-hover:top-4 group-hover:bottom-4"
      style={{ background: accent }}
    />

    <div className="pl-4">
      {icon && (
        <div
          className="text-3xl mb-3 w-12 h-12 flex items-center justify-center rounded-xl"
          style={{ background: `${accent}18` }}
        >
          {icon}
        </div>
      )}
      <h3 className="font-serif text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-200">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      )}
    </div>
  </article>
);

export default HighlightCard;
