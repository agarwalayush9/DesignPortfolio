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
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#030303] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#030303] to-transparent" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-[13px] text-[#525252] font-medium whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#333]" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
