"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, GitBranch, TrendingUp, X, Search } from "lucide-react";
import { useState, useMemo } from "react";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  icon: React.ReactNode;
  color: string;
  accentColor: string;
}

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: "cuddle-box",
      title: "Cuddle Box",
      subtitle: "Sustainable Resale Marketplace (App Store)",
      problem:
        "Traditional secondhand marketplaces lacked trust mechanisms and poor user experience. Sellers couldn't effectively showcase products, and buyers had no way to verify product quality or seller credibility.",
      solution:
        "Built production iOS app with SwiftUI and UIKit with 20+ screens. Integrated Firebase for authentication, real-time listings via Firestore, and cloud storage. Implemented MVVM architecture for maintainability and image verification for trust.",
      techStack: ["SwiftUI", "UIKit", "Firebase", "Firestore", "MVVM", "App Store"],
      metrics: [
        { label: "Development Time", value: "1 year" },
        { label: "Screens Built", value: "20+" },
        { label: "Tech Stack", value: "SwiftUI" },
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "from-cyan-500/20 to-cyan-600/10",
      accentColor: "text-cyan-400",
    },
    {
      id: "library-management",
      title: "Library Management System",
      subtitle: "SwiftUI + Firebase Backend",
      problem:
        "Need for a scalable iOS app to manage library operations with real-time synchronization and user authentication across multiple devices.",
      solution:
        "Developed SwiftUI-based mobile application with Firebase backend services. Implemented MVVM architecture pattern to ensure clean separation of concerns and improved scalability. Integrated user authentication and real-time data synchronization.",
      techStack: ["SwiftUI", "Firebase", "MVVM", "Core Data", "iOS"],
      metrics: [
        { label: "Development Time", value: "1 month" },
        { label: "Code Structure", value: "MVVM" },
        { label: "Features", value: "15+ screens" },
      ],
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-purple-500/20 to-purple-600/10",
      accentColor: "text-purple-400",
    },
    {
      id: "order-tracking",
      title: "Real-Time Order Tracking",
      subtitle: "Google Maps Integration",
      problem:
        "Users needed real-time visibility into delivery status with live location tracking. Traditional systems had poor API reliability and error handling.",
      solution:
        "Built real-time tracking system using Google Maps SDK with advanced error handling and resilient networking practices. Developed reusable SwiftUI and UIKit components to improve code maintainability and development speed.",
      techStack: ["Swift", "Google Maps SDK", "SwiftUI", "Networking", "REST APIs"],
      metrics: [
        { label: "Accuracy", value: "Real-time" },
        { label: "Reliability", value: "99.5%" },
        { label: "Components", value: "10+ Reusable" },
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-emerald-500/20 to-emerald-600/10",
      accentColor: "text-emerald-400",
    },
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    caseStudies.forEach((study) => {
      study.techStack.forEach((tech) => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, []);

  const filteredStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      const matchesSearch =
        searchQuery === "" ||
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.problem.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTech =
        selectedTech === null || study.techStack.includes(selectedTech);

      return matchesSearch && matchesTech;
    });
  }, [searchQuery, selectedTech]);

  return (
    <section className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={itemVariants}
          className="max-w-2xl mb-12 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50">
            Case Studies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Detailed breakdowns of problems solved, architectures built, and metrics delivered.
          </p>
        </motion.div>

        {/* Search & Filter Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-12 space-y-6"
        >
          {/* Search Input */}
          <motion.div className="relative" whileHover={{ scale: 1.01 }}>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
            />
          </motion.div>

          {/* Tech Stack Filter */}
          <motion.div variants={itemVariants} className="space-y-3">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Filter by Technology
            </p>
            <div className="flex flex-wrap gap-2">
              <motion.button
                onClick={() => setSelectedTech(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedTech === null
                    ? "bg-blue-600 dark:bg-blue-500 text-white"
                    : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All
              </motion.button>
              {allTechs.map((tech) => (
                <motion.button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedTech === tech
                      ? "bg-blue-600 dark:bg-blue-500 text-white"
                      : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          key={`grid-${selectedTech}-${searchQuery}`}
          initial="initial"
          animate="animate"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {filteredStudies.map((study) => (
            <motion.div
              key={`${study.id}-${selectedTech}-${searchQuery}`}
              variants={itemVariants}
              onClick={() => setSelectedStudy(study.id)}
              className="group cursor-pointer"
            >
              <motion.div
                className="h-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 p-6 space-y-4 transition-all hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg"
                whileHover={{ y: -8 }}
              >
                {/* Icon & Color Accent */}
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center text-slate-700 dark:text-slate-300`}
                  whileHover={{ scale: 1.1 }}
                >
                  {study.icon}
                </motion.div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                    {study.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {study.subtitle}
                  </p>
                </div>

                {/* Problem Preview */}
                <div className="py-3 border-y border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {study.problem}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {study.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.techStack.length > 3 && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300">
                      +{study.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Metrics */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                    Results
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {study.metrics.map((metric) => (
                      <motion.div
                        key={metric.label}
                        className="rounded-lg bg-slate-200 dark:bg-slate-800/50 p-2 text-center border border-slate-300 dark:border-slate-700"
                        whileHover={{ y: -2 }}
                      >
                        <div className={`text-sm font-bold ${study.accentColor}`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                  <span>View Full Case Study</span>
                  <motion.div animate={{ x: 0 }} whileHover={{ x: 4 }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results State */}
        {filteredStudies.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-slate-600 dark:text-slate-400"
          >
            <p className="text-lg font-medium">No case studies found</p>
            <p className="text-sm">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStudy && caseStudies.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudy(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-300 dark:border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto my-8"
            >
              {(() => {
                const study = caseStudies.find((s) => s.id === selectedStudy);
                if (!study) return null;

                return (
                  <div className="p-8 space-y-8 relative">
                    {/* Close Button */}
                    <motion.button
                      onClick={() => setSelectedStudy(null)}
                      className="absolute top-6 right-6 p-2 rounded-lg bg-slate-200 dark:bg-slate-800/50 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-400 transition-colors z-10"
                      whileHover={{ scale: 1.1 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.button>

                    {/* Header */}
                    <div className="space-y-4 pr-10">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center text-slate-700 dark:text-slate-300`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {study.icon}
                        </motion.div>
                        <div>
                          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                            {study.title}
                          </h2>
                          <p className="text-lg text-slate-600 dark:text-slate-400">
                            {study.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      {/* Problem & Solution */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="space-y-3 p-4 rounded-lg bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700"
                        >
                          <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                            The Problem
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {study.problem}
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="space-y-3 p-4 rounded-lg bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700"
                        >
                          <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                            The Solution
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {study.solution}
                          </p>
                        </motion.div>
                      </div>

                      {/* Metrics */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                      >
                        <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                          Results
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                          {study.metrics.map((metric) => (
                            <motion.div
                              key={metric.label}
                              className="p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center"
                              whileHover={{ y: -4 }}
                            >
                              <p className={`text-2xl font-bold mb-1 ${study.accentColor}`}>
                                {metric.value}
                              </p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                {metric.label}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Tech Stack */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4"
                      >
                        <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                          Technology Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {study.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
