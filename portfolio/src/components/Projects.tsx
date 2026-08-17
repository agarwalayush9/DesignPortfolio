'use client';

import { motion } from 'framer-motion';
import { TechPill } from './TechPills';
import { ExternalLink, AppWindow, Code2 } from 'lucide-react';

const projectsData = [
  {
    title: 'Cuddle Box',
    description: 'A sustainable resale marketplace on the App Store. Built with SwiftUI, UIKit, and Firebase for real-time listings and authentication.',
    techs: ['SwiftUI', 'Firebase', 'MVVM'],
    link: 'https://apps.apple.com/app/cuddle-box/id6751405151',
    github: null,
    status: 'Live on App Store'
  },
  {
    title: 'Library Management System',
    description: 'A scalable iOS app to manage library operations with real-time synchronization and user authentication across multiple devices.',
    techs: ['SwiftUI', 'Firebase', 'Core Data'],
    link: '#',
    github: 'https://github.com/agarwalayush9',
    status: 'Completed'
  },
  {
    title: 'Real-Time Order Tracking',
    description: 'A real-time delivery tracking system using Google Maps SDK with advanced error handling and resilient networking practices.',
    techs: ['Swift', 'Google Maps API', 'REST'],
    link: '#',
    github: 'https://github.com/agarwalayush9',
    status: 'Completed'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Projects() {
  return (
    <section>
      <h2 className="section-label mb-5 text-sm">FEATURED PROJECTS</h2>
      <div className="flex flex-col gap-5">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="group relative p-4 rounded-xl bg-white border border-gray-100 hover:border-gray-300 hover:shadow-md transition duration-300 shadow-sm"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[rgba(0,0,0,0.12)] to-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.15)] flex items-center justify-center text-gray-900 shadow-inner">
                  <AppWindow size={16} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 tracking-tight group-hover:text-gray-900 transition-colors">{project.title}</h3>
                  <div className="text-[12px] text-gradient-accent mt-0.5">{project.status}</div>
                </div>
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-slate-400 hover:bg-gray-100 hover:text-slate-900 transition"
                  >
                    <Code2 size={14} />
                  </a>
                )}
                {project.link !== '#' && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-slate-400 hover:bg-gray-100 hover:text-slate-900 transition"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.techs.map((tech) => (
                <TechPill key={tech} name={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
