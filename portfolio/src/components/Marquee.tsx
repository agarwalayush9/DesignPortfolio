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
    <div 
      className="overflow-hidden relative flex"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)'
      }}
    >

      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{
          x: { duration: speed, ease: 'linear', repeat: Infinity },
        }}
        style={{ willChange: 'transform' }}
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
