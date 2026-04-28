import React from 'react';

/**
 * SectionHeader
 * @param {string} eyebrow   – small uppercase label above the title
 * @param {string} title     – main heading
 * @param {string} subtitle  – optional paragraph below the divider
 * @param {string} align     – 'left' | 'center' (default: 'center')
 * @param {string} theme     – 'light' | 'dark' (default: 'light')
 */
const SectionHeader = ({ eyebrow, title, subtitle, align = 'center', theme = 'light' }) => {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';
  const isLight = theme === 'light';

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignClass}`}>
      {eyebrow && (
        <span className={`${isLight ? 'text-[#800000]' : 'text-[#FFD700]'} font-semibold uppercase tracking-[0.25em] text-xs`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-serif text-4xl md:text-5xl font-bold ${isLight ? 'text-[#2C1818]' : 'text-[#F5F5DC]'} leading-tight`}>
        {title}
      </h2>
      {/* Ornamental divider */}
      <div className={`flex items-center gap-3 mt-1 ${align === 'left' ? '' : 'justify-center'}`}>
        <span className={`h-[2px] w-12 ${isLight ? 'bg-[#800000]' : 'bg-[#FFD700]/50'} rounded-full`} />
        <span className="text-[#FFD700] text-lg">✦</span>
        <span className={`h-[2px] w-12 ${isLight ? 'bg-[#800000]' : 'bg-[#FFD700]/50'} rounded-full`} />
      </div>
      {subtitle && (
        <p className={`${isLight ? 'text-gray-600' : 'text-gray-300'} text-lg leading-relaxed max-w-2xl mt-2`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
