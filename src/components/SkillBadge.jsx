import React from 'react';

const SkillBadge = ({ icon, label }) => (
  <div className="group flex flex-col items-center gap-2 bg-white rounded-2xl px-4 py-5 shadow-md hover:shadow-xl border border-accent hover:border-secondary/50 transition-all duration-300 cursor-default hover:-translate-y-1">
    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
      {icon}
    </span>
    <span className="text-xs font-semibold uppercase tracking-wider text-dark text-center leading-tight group-hover:text-primary transition-colors">
      {label}
    </span>
  </div>
);

export default SkillBadge;
