'use client';

import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
}

export default function Marquee({ items, speed = 30, reverse = false }: MarqueeProps) {
  const content = [...items, ...items];

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#F8FAFC] to-transparent" />

      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{
          x: { duration: speed, ease: 'linear', repeat: Infinity },
        }}
      >
        {content.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[13px] font-mono text-slate-700 bg-slate-50 border border-slate-200 whitespace-nowrap cursor-default"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
