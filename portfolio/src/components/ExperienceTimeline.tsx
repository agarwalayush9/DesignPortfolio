'use client';

import { motion } from 'framer-motion';
import { TechPill } from './TechPills';

const experienceData = [
  {
    role: 'Freelance Software Developer',
    company: 'Self-Employed',
    date: 'Sep 2025 — Present',
    remote: true,
    description: 'Designed and developed modern, high-performance web applications for various clients. Focused on premium UI/UX, responsive layouts, and modern frontend architectures.',
    techs: ['React', 'Next.js', 'Tailwind', 'Swift'],
  },
  {
    role: 'iOS App Developer Intern',
    company: 'Quantum IT Innovation',
    date: 'Jun 2025 — Sep 2025',
    remote: false,
    description: 'Built a real-time order tracking system using Google Maps SDK. Improved API reliability and developed reusable SwiftUI and UIKit components.',
    techs: ['Swift', 'SwiftUI', 'UIKit'],
  },
  {
    role: 'iOS App Developer Intern',
    company: 'Infosys',
    date: 'Jun 2024 — Jul 2024',
    remote: false,
    description: 'Developed a SwiftUI-based Library Management System integrated with Firebase backend services using MVVM architecture.',
    techs: ['SwiftUI', 'Firebase'],
  },
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

export default function ExperienceTimeline() {
  return (
    <section>
      <h2 className="section-label mb-6">EXPERIENCE</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        className="flex flex-col"
      >
        {experienceData.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 md:gap-4 mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight">{exp.role}</h3>
                <div className="text-[15px] mt-0.5">
                  <span className="text-gradient-accent">{exp.company}</span>
                  {exp.remote && (
                    <span className="text-gray-600 ml-1.5"> · Remote</span>
                  )}
                </div>
              </div>
              <div className="text-[13px] text-gray-500 font-mono tracking-wider shrink-0">
                {exp.date}
              </div>
            </div>
            <p className="text-base text-gray-600 mt-2 mb-4 leading-relaxed">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {exp.techs.map((tech) => (
                <TechPill key={tech} name={tech} />
              ))}
            </div>

            {index < experienceData.length - 1 && (
              <div className="border-t border-[rgba(0,0,0,0.06)] my-6" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
