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
  const color = techColors[name] || '#808080';

  return (
    <span 
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-medium transition-all duration-300 cursor-default"
      style={{ 
        backgroundColor: color + '15',
        border: `1px solid ${color}30`,
        color: color !== '#ffffff' ? color : '#e5e5e5',
        boxShadow: `0 0 12px ${color}10`
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}80` }}
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
