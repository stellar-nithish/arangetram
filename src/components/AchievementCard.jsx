import React, { useState } from 'react';

/**
 * AchievementCard
 * @param {string}   image       – path to image in /public/images
 * @param {string}   eyebrow     – small label above title (e.g. "2024")
 * @param {string}   title       – card heading
 * @param {string}   description – short 2–3 line summary
 * @param {string}   detail      – expanded content shown on "Read More"
 * @param {string}   accentColor – optional override (default maroon)
 * @param {string[]} tags        – optional badge array
 */
const AchievementCard = ({
  image,
  eyebrow,
  title,
  description,
  detail,
  accentColor = 'var(--color-primary)',
  tags = [],
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl border border-accent hover:border-secondary/50 transition-all duration-400 overflow-hidden flex flex-col">

      {/* ── Image ── */}
      {image && (
        <div className="relative overflow-hidden h-48 shrink-0">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

          {/* Eyebrow badge pinned on image */}
          {eyebrow && (
            <span
              className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full text-white"
              style={{ background: accentColor }}
            >
              {eyebrow}
            </span>
          )}
        </div>
      )}

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-6">
        {/* Top accent bar */}
        <div
          className="h-[3px] w-10 rounded-full mb-4 transition-all duration-300 group-hover:w-16"
          style={{ background: accentColor }}
        />

        <h3 className="font-serif text-lg font-bold text-dark leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* Expandable detail */}
        {detail && (
          <div
            className={`overflow-hidden transition-all duration-400 ease-in-out text-sm text-gray-500 leading-relaxed ${
              expanded ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="border-t border-accent pt-3">
              {detail}
            </div>
          </div>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full border"
                style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}0d` }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read More button */}
        {detail && (
          <button
            onClick={() => setExpanded((p) => !p)}
            className="mt-4 self-start text-xs font-bold uppercase tracking-widest flex items-center gap-1 transition-colors duration-200"
            style={{ color: accentColor }}
            aria-expanded={expanded}
          >
            {expanded ? 'Show Less' : 'Read More'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        )}
      </div>
    </article>
  );
};

export default AchievementCard;
