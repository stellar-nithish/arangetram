import React from 'react';
import LinkButton from './LinkButton';

const PublicationCard = ({ title, organization, description, link }) => (
  <article className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl border border-accent hover:border-secondary/50 overflow-hidden transition-all duration-300 flex gap-5 p-6">
    {/* Left accent bar */}
    <div className="absolute left-0 top-5 bottom-5 w-[3px] rounded-full bg-primary transition-all duration-300 group-hover:top-3 group-hover:bottom-3" />

    <div className="pl-2 flex flex-col flex-1">
      {/* Organization */}
      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
        {organization}
      </span>

      {/* Title */}
      <h3 className="font-serif text-base font-bold text-dark mb-1.5 leading-snug group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* Link */}
      {link && (
        <div className="mt-4">
          <LinkButton
            label={link.label}
            url={link.url}
            type={link.type}
            accent='var(--color-primary)'
          />
        </div>
      )}
    </div>
  </article>
);

export default PublicationCard;
