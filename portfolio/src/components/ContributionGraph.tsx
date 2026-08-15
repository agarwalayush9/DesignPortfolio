'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

const getLevel = (seed: number) => {
  const r = Math.sin(seed * 9301 + 49297) % 1;
  const v = Math.abs(r);
  if (v < 0.55) return 0;
  if (v < 0.75) return 1;
  if (v < 0.88) return 2;
  if (v < 0.96) return 3;
  return 4;
};

const levelColors = [
  'bg-[rgba(0,0,0,0.03)]',
  'bg-[#0e4429]',
  'bg-[#006d32]',
  'bg-[#26a641]',
  'bg-[#39d353]',
];

const levelGlow = [
  '',
  'hover:shadow-[0_0_4px_#0e4429]',
  'hover:shadow-[0_0_6px_#006d32]',
  'hover:shadow-[0_0_8px_#26a641]',
  'hover:shadow-[0_0_10px_#39d353]',
];

export default function ContributionGraph() {
  const WEEKS = 52;
  const DAYS = 7;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const grid = useMemo(() => {
    const data = [];
    for (let c = 0; c < WEEKS; c++) {
      const col = [];
      for (let r = 0; r < DAYS; r++) {
        const seed = c * DAYS + r + 42;
        const level = getLevel(seed);
        const count = level === 0 ? 0 : Math.floor(Math.abs(Math.sin(seed * 1234) * level * 6)) + level;
        col.push({ level, count });
      }
      data.push(col);
    }
    return data;
  }, []);

  const totalContributions = useMemo(() => {
    return grid.reduce((sum, col) => sum + col.reduce((s, cell) => s + cell.count, 0), 0);
  }, [grid]);

  return (
    <section>
      <h2 className="section-label mb-4">ACTIVITY</h2>
      <p className="text-[12px] text-gray-500 font-mono tracking-wide mb-5">
        {totalContributions} contributions in the last year
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full overflow-x-auto pb-2"
      >
        <div className="min-w-max flex">
          {/* Day Labels */}
          <div className="flex flex-col gap-[3px] pt-[18px] pr-2 shrink-0">
            {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((day, i) => (
              <div key={i} className="text-[9px] text-gray-500 font-mono h-[10px] leading-[10px] tracking-wider">
                {day}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1.5">
            {/* Month Labels */}
            <div className="flex text-[9px] text-gray-500 font-mono justify-between px-0.5 tracking-wider">
              {months.map((m) => (
                <div key={m}>{m}</div>
              ))}
            </div>

            {/* Grid */}
            <div className="flex gap-[3px]">
              {grid.map((col, cIdx) => (
                <div key={cIdx} className="flex flex-col gap-[3px]">
                  {col.map((cell, rIdx) => (
                    <div
                      key={rIdx}
                      className={`w-[10px] h-[10px] rounded-[2px] transition-all duration-300 ${levelColors[cell.level]} ${levelGlow[cell.level]}`}
                      title={cell.count > 0 ? `${cell.count} contributions` : 'No contributions'}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
