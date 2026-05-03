import React from 'react';
import LinkButton from './LinkButton';

const EYEBROW_COLORS = {
  'National Winner':    'var(--color-primary)',
  'International':      '#2C5282',
  'Award':              'var(--color-secondary)',
  'Winner':             'var(--color-secondary)',
  'Recognition':        '#4A6741',
  'National Participant': '#555',
};

const EssayCard = ({ eyebrow, title, description, tags, links }) => {
  const accent = EYEBROW_COLORS[eyebrow] ?? 'var(--color-primary)';
  const hasLinks = links?.length > 0;

  return (
    <article className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl border border-accent hover:border-secondary/50 overflow-hidden transition-all duration-300 flex flex-col">
      {/* Top accent stripe */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}60)` }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Eyebrow */}
        <span
          className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full text-white mb-3 w-fit"
          style={{ background: accent }}
        >
          {eyebrow}
        </span>

        {/* Title */}
        <h3 className="font-serif text-lg font-bold text-dark mb-2 leading-snug group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
          {description}
        </p>

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full border"
                style={{ color: accent, borderColor: `${accent}40`, background: `${accent}0d` }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        {hasLinks && (
          <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-100">
            {links.map(({ label, url, type }) => (
              <LinkButton key={label} label={label} url={url} type={type} accent={accent} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default EssayCard;
