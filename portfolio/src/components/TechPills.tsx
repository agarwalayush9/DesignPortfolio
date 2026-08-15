'use client';

import React from 'react';

const techColors: Record<string, string> = {
  'Swift': '#F05138',
  'SwiftUI': '#007AFF',
  'UIKit': '#34C759',
  'Firebase': '#FFCA28',
  'React': '#61dafb',
  'React.js': '#61dafb',
  'Next.js': '#ffffff',
  'TypeScript': '#3178c6',
  'JavaScript': '#F7DF1E',
  'Node.js': '#68a063',
  'C': '#A8B9CC',
  'C++': '#00599C',
  'Python': '#3776ab',
  'Tailwind': '#06b6d4',
};

interface TechPillProps {
  name: string;
}

export function TechPill({ name }: TechPillProps) {
  let color = techColors[name] || '#64748b';

  // In light mode, white logos like Next.js should be black
  if (color === '#ffffff' || color === '#e5e5e5') {
    color = '#000000';
  }

  return (
    <span 
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-medium transition-all duration-300 cursor-default"
      style={{ 
        backgroundColor: color + '10', // 10% opacity for subtle tint
        border: `1px solid ${color}25`,
        color: '#334155', // slate-700 for readable text
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: color }}
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
