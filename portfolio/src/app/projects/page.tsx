'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import PageTransition from '@/components/PageTransition';
import { LinkPreview } from '@/components/LinkPreview';

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function StarIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ForkIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" /><path d="M12 12v3" />
    </svg>
  );
}

const categories = ['All', 'Frontend', 'Full Stack', 'UI Mockups'];

const projects = [
  {
    title: 'Cuddle Box',
    description: 'A sustainable resale marketplace on the App Store. Built with SwiftUI, UIKit, and Firebase for real-time listings and authentication.',
    category: 'Full Stack',
    techs: ['SwiftUI', 'Firebase', 'MVVM'],
    stars: 124,
    forks: 12,
    gradient: 'from-blue-50 to-indigo-50',
    accentColor: '#8b5cf6',
    liveUrl: 'https://apps.apple.com/app/cuddle-box/id6751405151',
  },
  {
    title: 'Library Management System',
    description: 'A scalable iOS app to manage library operations with real-time synchronization and user authentication across multiple devices.',
    category: 'Full Stack',
    techs: ['SwiftUI', 'Firebase', 'Core Data'],
    stars: 89,
    forks: 24,
    gradient: 'from-green-50 to-emerald-50',
    accentColor: '#22c55e',
    github: 'https://github.com/agarwalayush9/Shelves-Admin',
  },
  {
    title: 'Real-Time Order Tracking',
    description: 'A real-time delivery tracking system using Google Maps SDK with advanced error handling and resilient networking practices.',
    category: 'Frontend',
    techs: ['Swift', 'Google Maps API', 'REST'],
    stars: 156,
    forks: 34,
    gradient: 'from-amber-50 to-orange-50',
    accentColor: '#f59e0b',
    liveUrl: 'https://apps.apple.com/in/app/fisho-ae/id6749234811',
  },
  {
    title: 'Mercel Bento Dashboard',
    description: 'A replication of a famous UI creator\'s intricate bento grid dashboard, focusing on layout and responsiveness.',
    category: 'UI Mockups',
    techs: ['React', 'Next.js', 'Tailwind'],
    github: 'https://github.com/agarwalayush9/FrontendAssignment/tree/main/Mercel/bento-dashboard',
    liveUrl: 'https://frontend-assignment-2ojj.vercel.app/',
    stars: 10,
    forks: 2,
    gradient: 'from-blue-50 to-sky-50',
    accentColor: '#3b82f6',
  },
  {
    title: 'Productivity Dashboard',
    description: 'A sleek, modern dashboard UI designed to track habits, tasks, and analytics with fluid animations.',
    category: 'UI Mockups',
    techs: ['React', 'Next.js', 'Tailwind'],
    github: 'https://github.com/agarwalayush9/ProductivityDashboard',
    liveUrl: 'https://productivity-dashboard-tan-two.vercel.app/',
    stars: 15,
    forks: 5,
    gradient: 'from-purple-50 to-fuchsia-50',
    accentColor: '#9333ea',
  },
  {
    title: 'Finance Planner',
    description: 'A complex financial planner UI featuring interactive charts, data tables, and a premium dark mode aesthetic.',
    category: 'UI Mockups',
    techs: ['React', 'Next.js', 'Tailwind'],
    github: 'https://github.com/agarwalayush9/FinancePlanner',
    liveUrl: 'https://finance-planner-sandy.vercel.app',
    stars: 18,
    forks: 4,
    gradient: 'from-emerald-50 to-teal-50',
    accentColor: '#059669',
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('UI Mockups');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="section-label mb-4 text-sm">PROJECTS</h2>
          <h1 className="font-serif text-4xl md:text-5xl font-black leading-tight tracking-tight mb-5">
            <span className="text-gradient">Things I&apos;ve</span>
            <br />
            <span className="text-gradient" style={{ opacity: 0.6 }}>Built</span>
          </h1>
          <p className="text-sm text-gray-600 leading-[1.7] max-w-lg">
            A collection of projects that showcase my skills in frontend development,
            full-stack engineering, and open-source contributions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${activeCategory === cat
                  ? 'text-gray-900'
                  : 'text-gray-600 hover:text-gray-800'
                }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="category-pill"
                  className="absolute inset-0 rounded-full bg-[rgba(0,0,0,0.12)] border border-[rgba(0,0,0,0.15)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project) => (
              <div
                key={project.title}
              >
                <TiltCard>
                  <div className="p-6">
                    {/* Gradient accent bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${project.gradient}`}
                    />

                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 tracking-tight mb-1">
                          {project.title}
                        </h3>
                        <span className="text-xs tracking-wider text-gradient-accent uppercase font-semibold">
                          {project.category.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        {project.github && (
                          <LinkPreview url={project.github}>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                              <GithubIcon size={16} />
                            </a>
                          </LinkPreview>
                        )}
                        {project.liveUrl && (
                          <LinkPreview url={project.liveUrl}>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                              <ExternalLink size={16} />
                            </a>
                          </LinkPreview>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono tracking-wide px-2 py-0.5 rounded-full bg-[rgba(0,0,0,0.045)] border border-[rgba(0,0,0,0.09)] text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </TiltCard>
              </div>
            ))}
        </div>
      </div>
    </PageTransition>
  );
}
