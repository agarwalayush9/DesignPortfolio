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
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[13px] font-mono text-slate-700 bg-slate-50 border border-slate-200 cursor-default">
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
