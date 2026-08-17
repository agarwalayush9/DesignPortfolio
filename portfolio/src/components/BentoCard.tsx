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
    <div
      className={`glass-card ${hover ? 'shimmer-border' : ''} rounded-2xl p-6 transition duration-500 ${className}`}
    >
      {children}
    </div>
  );
}
