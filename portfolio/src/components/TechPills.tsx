'use client';

import React from 'react';

const techColors: Record<string, string> = {
  'React': '#61dafb',
  'Next.js': '#ffffff',
  'TypeScript': '#3178c6',
  'Node.js': '#68a063',
  'Python': '#3776ab',
  'MongoDB': '#47a248',
  'PostgreSQL': '#336791',
  'Tailwind': '#06b6d4',
};

interface TechPillProps {
  name: string;
}

export function TechPill({ name }: TechPillProps) {
  const color = techColors[name] || '#525252';

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-[3px] rounded-full text-[11px] font-medium bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-[#808080] hover:text-[#b5b5b5] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] hover:shadow-[0_0_12px_rgba(255,255,255,0.03)] transition-all duration-300 cursor-default">
      <span
        className="w-[5px] h-[5px] rounded-full shadow-[0_0_4px_var(--dot-color)]"
        style={{ backgroundColor: color, '--dot-color': color + '60' } as React.CSSProperties}
      />
      {name}
    </span>
  );
}

interface TechPillsRowProps {
  techs: string[];
}

export function TechPillsRow({ techs }: TechPillsRowProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {techs.map((tech) => (
        <TechPill key={tech} name={tech} />
      ))}
    </div>
  );
}
