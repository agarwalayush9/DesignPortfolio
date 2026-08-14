"use client";

import { motion } from "framer-motion";
import { Mail, Link2, X, ArrowUpRight, Phone } from "lucide-react";

export default function Contact() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contactChannels = [
    {
      name: "Email",
      value: "ayushagarwal.contact@gmail.com",
      icon: Mail,
      href: "mailto:ayushagarwal.contact@gmail.com",
      color: "from-blue-500/20 to-blue-600/10",
      accentColor: "text-blue-600 dark:text-blue-400",
    },
    // {
    //   name: "Phone",
    //   value: "+91-6388156258",
    //   icon: Phone,
    //   href: "tel:+916388156258",
    //   color: "from-green-500/20 to-green-600/10",
    //   accentColor: "text-green-600 dark:text-green-400",
    // },
    {
      name: "LinkedIn",
      value: "@ayush-agarwal52",
      icon: Link2,
      href: "https://www.linkedin.com/in/ayush-agarwal52/",
      color: "from-cyan-500/20 to-cyan-600/10",
      accentColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      name: "X (Twitter)",
      value: "@agarwalayush5",
      icon: X,
      href: "https://x.com/agarwalayush5",
      color: "from-slate-500/20 to-slate-600/10",
      accentColor: "text-slate-600 dark:text-slate-400",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={itemVariants}
          className="max-w-2xl mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Let's collaborate on something great. Reach out via any channel.
          </p>
        </motion.div>

        {/* Contact Channels */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <motion.a
                key={channel.name}
                href={channel.href}
                target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                rel={channel.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                variants={itemVariants}
              >
                <motion.div
                  className="group h-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 p-8 space-y-6 transition-all hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-lg cursor-pointer"
                  whileHover={{ y: -8 }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center ${channel.accentColor} group-hover:scale-110 transition-transform`}
                    whileHover={{ scale: 1.15 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                      {channel.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 break-all">
                      {channel.value}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors pt-4">
                    <span>Get in touch</span>
                    <motion.div
                      animate={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Email Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center"
        >
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Thanks for stopping by. I'm always interested in{" "}
            <span className="text-slate-900 dark:text-slate-50 font-semibold">
              hearing about new opportunities
            </span>
            , interesting projects, or just having a chat about tech.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
