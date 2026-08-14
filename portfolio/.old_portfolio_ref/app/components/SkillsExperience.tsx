"use client";

import { motion } from "framer-motion";
import { CheckCircle, Code, Zap, Users, GitBranch } from "lucide-react";

interface Skill {
  category: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  color: string;
}

export default function SkillsExperience() {
  const skillsData: Skill[] = [
    {
      category: "Programming Languages",
      skills: ["Swift", "JavaScript (ES6+)", "C", "C++", "Python"],
      icon: <Code className="w-5 h-5" />,
      color: "from-cyan-500/20 to-cyan-600/10",
    },
    {
      category: "iOS Development",
      skills: ["UIKit", "SwiftUI", "MVVM", "Auto Layout", "Firebase", "App Store Deployment"],
      icon: <Zap className="w-5 h-5" />,
      color: "from-purple-500/20 to-purple-600/10",
    },
    {
      category: "Web Development",
      skills: ["React.js", "Next.js", "HTML", "CSS", "Responsive UI", "REST APIs"],
      icon: <GitBranch className="w-5 h-5" />,
      color: "from-emerald-500/20 to-emerald-600/10",
    },
    {
      category: "Backend & Tools",
      skills: ["Node.js", "Express.js", "Firebase", "Xcode", "VS Code", "Git", "GitHub", "Postman"],
      icon: <Zap className="w-5 h-5" />,
      color: "from-orange-500/20 to-orange-600/10",
    },
  ];

  const experienceData: Experience[] = [
    {
      title: "iOS App Developer Intern",
      company: "Quantum IT Innovation",
      period: "Jun 2025 - Sep 2025",
      description: "Built real-time order tracking system and developed reusable components.",
      highlights: [
        "Built real-time order tracking system using Google Maps SDK",
        "Improved API reliability through structured error handling",
        "Developed reusable SwiftUI and UIKit components",
        "Contributed to modular architecture for future AI-driven features",
      ],
      color: "from-cyan-500/10",
    },
    {
      title: "iOS App Developer Intern",
      company: "Infosys",
      period: "Jun 2024 - Jul 2024",
      description: "Developed Library Management System with SwiftUI and Firebase.",
      highlights: [
        "Built SwiftUI-based Library Management System with Firebase backend",
        "Implemented MVVM architecture for scalability and clarity",
        "Worked in Agile Scrum environment with peer code reviews",
        "Contributed to production-grade iOS application",
      ],
      color: "from-purple-500/10",
    },
    {
      title: "Founder & Full Stack Developer",
      company: "Cuddle Box",
      period: "2024 - Present",
      description: "Built and shipped production iOS app for sustainable resale marketplace.",
      highlights: [
        "Published app on App Store with clean, user-friendly interface",
        "Developed 20+ screens using UIKit and SwiftUI with MVVM structure",
        "Integrated Firebase Authentication, Firestore, and Storage",
        "Achieved 1k+ users with 23% conversion rate",
      ],
      color: "from-emerald-500/10",
    },
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl mb-20 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50">
            Skills & Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A comprehensive overview of my technical expertise and professional journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Skills Section - Left */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {skillsData.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className={`rounded-2xl bg-gradient-to-br ${skillGroup.color} border border-slate-300 dark:border-slate-700 p-6 backdrop-blur-sm`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800/50 text-cyan-600 dark:text-cyan-400">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                      whileHover={{ x: 4 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                      </motion.div>
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Section - Right */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className={`rounded-2xl bg-gradient-to-br ${exp.color} border border-slate-300 dark:border-slate-700 p-8 backdrop-blur-sm hover:border-slate-400 dark:hover:border-slate-600 transition-colors duration-300`}
                whileHover={{ y: -4 }}
              >
                {/* Timeline Marker */}
                <div className="flex items-start gap-6">
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-4 h-4 rounded-full bg-cyan-400 mt-2" />
                    {index !== experienceData.length - 1 && (
                      <div className="w-0.5 h-24 bg-gradient-to-b from-cyan-400 to-transparent mt-2" />
                    )}
                  </motion.div>

                  <div className="flex-1 pt-1">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <p className="text-cyan-600 dark:text-cyan-400 font-semibold">{exp.company}</p>
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-mono">{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <motion.div
                          key={highlight}
                          className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                          whileHover={{ x: 4 }}
                        >
                          <span className="text-cyan-600 dark:text-cyan-400 font-bold mt-1 flex-shrink-0">→</span>
                          {highlight}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-slate-300 dark:border-slate-800"
        >
          {[
            { label: "Tech Stack", value: "20+" },
            { label: "Projects Completed", value: "10+" },
            { label: "Years Development", value: "2+" },
            { label: "Team Led", value: "3+" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="rounded-lg bg-slate-200 dark:bg-slate-800/30 border border-slate-300 dark:border-slate-700 p-6 text-center"
              whileHover={{ y: -4, borderColor: "rgb(100, 116, 139)" }}
            >
              <motion.p
                className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2"
                whileHover={{ scale: 1.2 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
