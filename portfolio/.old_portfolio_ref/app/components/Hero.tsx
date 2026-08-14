"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900/50 overflow-hidden pt-20">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full min-h-[calc(100vh-5rem)] flex items-center justify-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={containerVariants}
          className="space-y-12 text-center max-w-3xl"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex"
          >
            <div className="px-4 py-2 rounded-full bg-slate-100/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
                ✨ Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Main Heading - Larger, More Impact */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="space-y-3">
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-medium">Hi, I'm</p>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-3">
                  Ayush Agarwal
                </span>
                <span className="block text-slate-900 dark:text-slate-50">
                  Building Production Apps
                </span>
              </h1>
            </div>

            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              B.Tech CSE Graduate ('25) | iOS & Full Stack Developer | Shipped iOS Apps | Swift, SwiftUI, React, Next.js | Expanding into AI & LLMs.
            </p>
          </motion.div>

          {/* CTA Buttons - Cleaner Design */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-slate-50 hover:bg-slate-800 dark:hover:bg-slate-100 text-slate-50 dark:text-slate-900 font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Case Studies
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="mailto:ayushagarwal.contact@gmail.com"
              className="px-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-50 font-semibold transition-all duration-200 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Stats Row - Cleaner */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-200 dark:border-slate-800"
          >
            {[
              { label: "Products Shipped", value: "3+" },
              { label: "Years Building", value: "2" },
              { label: "Tech Stack Depth", value: "Full" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                <motion.p
                  className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
