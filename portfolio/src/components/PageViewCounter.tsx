'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function PageViewCounter() {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const key = 'portfolio-views';
    const initialViews = 1247;
    const storedViews = localStorage.getItem(key);

    if (storedViews) {
      const parsedViews = parseInt(storedViews, 10);
      const newViews = parsedViews + 1;
      setViews(newViews);
      localStorage.setItem(key, newViews.toString());
    } else {
      const newViews = initialViews + 1;
      setViews(newViews);
      localStorage.setItem(key, newViews.toString());
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="glass-card flex items-center gap-2 px-3 py-1.5 rounded-full"
    >
      <Eye size={12} className="text-[#404040]" />
      <span className="text-[10px] font-mono tracking-wider text-[#404040]">
        {views > 0 ? views.toLocaleString() : '---'}
      </span>
    </motion.div>
  );
}
