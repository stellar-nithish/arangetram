import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Unified link button — handles external, pdf, and internal types.
 * Props:
 *   label   string
 *   url     string
 *   type    'external' | 'pdf' | 'internal'
 *   accent  optional hex color (defaults to maroon)
 *   size    'sm' | 'md'  (defaults to 'sm')
 */
const ICONS = {
  external: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
  pdf: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  ),
  internal: (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  ),
};

const LinkButton = ({ label, url, type = 'external', accent = '#800000', size = 'sm' }) => {
  const navigate = useNavigate();

  const padCls = size === 'md'
    ? 'px-5 py-2 text-xs'
    : 'px-3.5 py-1.5 text-[11px]';

  if (type === 'internal') {
    return (
      <button
        onClick={() => navigate(url)}
        className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-widest rounded-lg border transition-all duration-200 hover:scale-105 ${padCls}`}
        style={{ color: accent, borderColor: `${accent}50`, background: `${accent}0d` }}
        aria-label={label}
      >
        {label}
        {ICONS.internal}
      </button>
    );
  }

  const isDownload = type === 'pdf';

  return (
    <a
      href={url}
      target={isDownload ? '_self' : '_blank'}
      rel="noopener noreferrer"
      download={isDownload || undefined}
      className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-widest rounded-lg border transition-all duration-200 hover:scale-105 ${padCls}`}
      style={{ color: accent, borderColor: `${accent}50`, background: `${accent}0d` }}
      aria-label={`${label} (opens in new tab)`}
    >
      {label}
      {ICONS[type] ?? ICONS.external}
    </a>
  );
};

export default LinkButton;
