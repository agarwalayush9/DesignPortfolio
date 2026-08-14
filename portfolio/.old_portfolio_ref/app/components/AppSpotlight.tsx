"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Award } from "lucide-react";

export default function AppSpotlight() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stats = [
    { label: "Screens Built", value: "20+" },
    { label: "Development Time", value: "1 year" },
    { label: "App Status", value: "Published" },
  ];

  const features = [
    "Sustainable resale marketplace",
    "Real-time product listings",
    "Firebase authentication",
    "Firestore database",
    "Swift & SwiftUI",
    "MVVM architecture",
  ];

  return (
    <section className="relative py-20 sm:py-32 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div className="space-y-4" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50">
              Featured Project
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              A production iOS app showcasing full-stack capabilities and clean architecture.
            </p>
          </motion.div>

          {/* Main Project Card */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            variants={fadeInUp}
          >
            {/* Left: Project Info */}
            <div className="space-y-6">
              {/* Title & Badge */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Live on App Store</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50">
                  Cuddle Box
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  A sustainable resale marketplace connecting conscious consumers with quality secondhand goods.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="p-4 rounded-lg bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700"
                    whileHover={{ y: -2 }}
                  >
                    <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {features.map((feature) => (
                  <motion.div
                    key={feature}
                    className="flex items-start gap-2 p-3 rounded-lg bg-slate-200 dark:bg-slate-800/30 border border-slate-300 dark:border-slate-700/50"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-4">
                <motion.a
                  href="https://apps.apple.com/app/cuddle-box/id6751405151"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2"
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  App Store
                </motion.a>
                <motion.a
                  href="https://cuddlebox.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2"
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  <Code className="w-4 h-4" />
                  Website
                </motion.a>
              </div>
            </div>

            {/* Right: Professional 3D iPhone 17 Pro Mockup */}
            <motion.div
              className="relative h-full sm:h-[700px] flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* 3D Perspective Container */}
              <div
                style={{
                  perspective: "1200px",
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* iPhone 17 Pro - 3D Perspective Frame */}
                <motion.div
                  className="relative w-72 h-[640px] rounded-[3.5rem] bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden border-[10px] border-black"
                  style={{
                    boxShadow: `
                      0 5px 15px rgba(0, 0, 0, 0.15),
                      0 15px 35px rgba(0, 0, 0, 0.25),
                      0 25px 55px rgba(0, 0, 0, 0.35),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)
                    `,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  {/* Glossy reflection overlay */}
                  <div 
                    className="absolute inset-0 rounded-[3rem] pointer-events-none z-30"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.12) 0%, transparent 50%)`,
                    }}
                  />

                  {/* Screen Content - Real App Video Preview */}
                  <video
                    className="absolute inset-0 w-full h-full object-fill rounded-[2.8rem]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/cuddle-box-preview.mp4" type="video/mp4" />
                  </video>
                </motion.div>

                {/* Premium Glow Effect - 3D Depth */}
                <motion.div
                  className="absolute -inset-20 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-purple-500/40 rounded-full blur-3xl -z-10"
                  animate={{ 
                    opacity: [0.2, 0.5, 0.2], 
                    scale: [0.9, 1.3, 0.9] 
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Secondary light source */}
                <motion.div
                  className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-3xl -z-10"
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1],
                    x: [-20, 20, -20]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
