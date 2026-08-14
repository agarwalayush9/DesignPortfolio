"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, GitBranch, BarChart3 } from "lucide-react";

interface MetricCard {
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}

interface ChartBar {
  label: string;
  value: number;
  maxValue: number;
}

export default function AnalyticsDashboard() {
  const metrics: MetricCard[] = [
    {
      label: "Years of Building",
      value: "1",
      change: "Continuous development",
      icon: <Users className="w-6 h-6" />,
      color: "from-cyan-500/20",
    },
    {
      label: "Portfolio Projects",
      value: "3",
      change: "Production-ready",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-purple-500/20",
    },
    {
      label: "Performance Score",
      value: "98/100",
      change: "Lighthouse audit",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-emerald-500/20",
    },
    {
      label: "Type Coverage",
      value: "100%",
      change: "Full TypeScript",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500/20",
    },
  ];

  const projectMetrics: ChartBar[] = [
    { label: "Cuddle Box", value: 95, maxValue: 100 },
    { label: "Library Management", value: 90, maxValue: 100 },
    { label: "Order Tracking", value: 98, maxValue: 100 },
  ];

  const timelineData = [
    { period: "Jun 2024", value: 50, percentage: 25 },
    { period: "Dec 2024", value: 200, percentage: 50 },
    { period: "Mar 2025", value: 800, percentage: 75 },
    { period: "May 2026", value: 1200, percentage: 100 },
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={itemVariants}
          className="max-w-2xl mb-16 space-y-4"
        >
          <div className="flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50">
              Analytics Dashboard
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Real-time metrics and insights across all projects.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className={`rounded-2xl bg-gradient-to-br ${metric.color} border border-slate-300 dark:border-slate-700 p-6 backdrop-blur-sm hover:border-slate-400 dark:hover:border-slate-600 transition-colors`}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800/50 text-cyan-600 dark:text-cyan-400">
                  {metric.icon}
                </div>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  {metric.change}
                </span>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{metric.label}</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">
                  {metric.value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Project Performance */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-300 dark:border-slate-700 p-8"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6">
              Project Performance
            </h3>
            <div className="space-y-6">
              {projectMetrics.map((project) => (
                <motion.div
                  key={project.label}
                  whileHover={{ x: 4 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {project.label}
                    </span>
                    <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                      {project.value}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(project.value / project.maxValue) * 100}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* User Growth Timeline */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-300 dark:border-slate-700 p-8"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6">
              User Growth
            </h3>
            <div className="space-y-8">
              {timelineData.map((data, index) => (
                <motion.div
                  key={data.period}
                  whileHover={{ x: 4 }}
                  className="space-y-2"
                >
                  <div className="flex items-end justify-between">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {data.period}
                    </span>
                    <div className="text-right">
                      <p className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                        {data.value.toLocaleString()}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-500">users</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-8 rounded-lg bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-cyan-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${data.percentage}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400 w-8 text-right">
                      {data.percentage}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-slate-300 dark:border-slate-700"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
              Key Insights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-400">
              {[
                "📈 2 years of continuous app development",
                "🚀 3 production-ready projects launched",
                "⭐ Lighthouse score: 98/100 on all pages",
                "💾 100% TypeScript with full type coverage",
              ].map((insight) => (
                <motion.li
                  key={insight}
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700"
                  whileHover={{ x: 4, borderColor: "rgb(100, 116, 139)" }}
                >
                  <span>{insight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
