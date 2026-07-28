'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function BentoCard({ children, className = '', hover = false, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      viewport={{ once: true, margin: '-40px' }}
      className={`glass-card ${hover ? 'shimmer-border' : ''} rounded-2xl p-6 transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}
