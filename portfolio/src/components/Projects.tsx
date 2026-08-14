'use client';

import { motion } from 'framer-motion';
import { TechPill } from './TechPills';
import { ExternalLink, AppWindow } from 'lucide-react';

const projectsData = [
  {
    title: 'Cuddle Box',
    description: 'Built and shipped a production iOS app for a sustainable resale marketplace. Developed 20+ screens with reusable components and integrated Firebase Auth/Firestore for real-time data.',
    techs: ['Swift', 'UIKit', 'SwiftUI', 'Firebase'],
    link: 'https://cuddlebox.com',
    status: 'Live on App Store'
  },
  {
    title: 'Full Stack Web Application',
    description: 'Built a responsive web application with server-side rendering, REST APIs, and authentication flows. Designed modular UI components for scalability and maintainability.',
    techs: ['React', 'Next.js', 'Node.js'],
    link: '#',
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
      <h2 className="section-label mb-6">FEATURED PROJECTS</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        className="flex flex-col gap-6"
      >
        {projectsData.map((project, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="group relative p-5 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.12)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white shadow-inner">
                  <AppWindow size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#e5e5e5] tracking-tight group-hover:text-white transition-colors">{project.title}</h3>
                  <div className="text-[13px] text-gradient-accent mt-0.5">{project.status}</div>
                </div>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[#a3a3a3] hover:text-white hover:bg-[rgba(255,255,255,0.15)] transition-all"
              >
                <ExternalLink size={14} />
              </a>
            </div>
            
            <p className="text-base text-[#a3a3a3] mb-5 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.techs.map((tech) => (
                <TechPill key={tech} name={tech} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
