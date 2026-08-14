'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, LayoutTemplate, Code2 } from 'lucide-react';
import BentoCard from './BentoCard';

const mockups = [
  {
    title: 'Mercel Bento Dashboard',
    description: 'A replication of a famous UI creator\'s intricate bento grid dashboard, focusing on layout and responsiveness.',
    liveUrl: 'https://frontend-assignment-2ojj.vercel.app/',
    githubUrl: 'https://github.com/agarwalayush9/FrontendAssignment/tree/main/Mercel/bento-dashboard',
    color: 'from-blue-500/20 to-blue-600/10',
    accentColor: 'text-blue-400',
  },
  {
    title: 'Productivity Dashboard',
    description: 'A sleek, modern dashboard UI designed to track habits, tasks, and analytics with fluid animations.',
    liveUrl: 'https://productivity-dashboard-tan-two.vercel.app/',
    githubUrl: 'https://github.com/agarwalayush9/ProductivityDashboard',
    color: 'from-purple-500/20 to-purple-600/10',
    accentColor: 'text-purple-400',
  },
  {
    title: 'Finance Planner',
    description: 'A complex financial planner UI featuring interactive charts, data tables, and a premium dark mode aesthetic.',
    liveUrl: 'https://finance-planner-u7lu-47no9ptnx-agarwalayush9s-projects.vercel.app',
    githubUrl: 'https://github.com/agarwalayush9/FinancePlanner',
    color: 'from-emerald-500/20 to-emerald-600/10',
    accentColor: 'text-emerald-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function UIMockups() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-label mb-0">UI MOCKUPS</h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {mockups.map((mockup) => (
          <motion.div key={mockup.title} variants={itemVariants}>
            <BentoCard hover className="h-full group">
              <div className="flex flex-col h-full">
                {/* Header Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mockup.color} flex items-center justify-center mb-6`}>
                  <LayoutTemplate className={`w-6 h-6 ${mockup.accentColor}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d4d4d4] transition-colors">
                    {mockup.title}
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed mb-6 line-clamp-3">
                    {mockup.description}
                  </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                  <a
                    href={mockup.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-[#888] hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={mockup.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-[#888] hover:text-white transition-colors"
                  >
                    <Code2 size={16} />
                    Code
                  </a>
                </div>
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
