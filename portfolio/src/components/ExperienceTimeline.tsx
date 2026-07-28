'use client';

import { motion } from 'framer-motion';
import { TechPill } from './TechPills';

const experienceData = [
  {
    role: 'Full Stack Developer',
    company: 'Stealth Startup',
    date: '2024 — Present',
    remote: true,
    description: 'Building the next generation of developer tools with AI-powered workflows.',
    techs: ['Next.js', 'TypeScript', 'PostgreSQL', 'Python'],
  },
  {
    role: 'Frontend Engineer',
    company: 'TechCorp',
    date: '2023 — 2024',
    remote: true,
    description: 'Led the frontend architecture for a SaaS platform serving 50K+ users.',
    techs: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
  },
  {
    role: 'Software Developer Intern',
    company: 'StartupXYZ',
    date: '2022 — 2023',
    remote: false,
    description: 'Developed core features for an e-commerce platform.',
    techs: ['React', 'Node.js', 'MongoDB'],
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
                <h3 className="text-[15px] font-semibold text-[#e5e5e5] tracking-tight">{exp.role}</h3>
                <div className="text-[13px] mt-0.5">
                  <span className="text-gradient-accent">{exp.company}</span>
                  {exp.remote && (
                    <span className="text-[#333] ml-1.5"> · Remote</span>
                  )}
                </div>
              </div>
              <div className="text-[11px] text-[#404040] font-mono tracking-wider shrink-0">
                {exp.date}
              </div>
            </div>
            <p className="text-[13px] text-[#525252] mt-1.5 mb-3 leading-relaxed">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {exp.techs.map((tech) => (
                <TechPill key={tech} name={tech} />
              ))}
            </div>

            {index < experienceData.length - 1 && (
              <div className="border-t border-[rgba(255,255,255,0.04)] my-6" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
