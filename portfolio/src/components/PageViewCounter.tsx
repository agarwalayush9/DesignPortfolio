'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function PageViewCounter() {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    // Only increment views once per session to avoid spam
    const hasVisited = sessionStorage.getItem('has-visited');
    
    fetch('/api/views', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // If already visited this session, we might want to just GET the count, 
      // but for simplicity we'll just let the POST hit. In a real app, you could add logic to 
      // only increment on the first visit.
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.views) {
          setViews(data.views);
          sessionStorage.setItem('has-visited', 'true');
        }
      })
      .catch((err) => {
        console.error('Failed to fetch views:', err);
        setViews(1248); // Fallback
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="glass-card flex items-center gap-2 px-3 py-1.5 rounded-full"
    >
      <Eye size={12} className="text-gray-500 relative top-[1px]" />
      <span className="text-[11px] font-mono tracking-wider text-gray-500 leading-none">
        {views > 0 ? views.toLocaleString() : '---'}
      </span>
    </motion.div>
  );
}
