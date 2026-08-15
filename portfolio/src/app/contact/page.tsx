'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import MagneticButton from '@/components/MagneticButton';
import BentoCard from '@/components/BentoCard';

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

export default function ContactPage() {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="mb-16"
        >
          <h2 className="section-label mb-4">CONTACT</h2>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tight mb-6">
            <span className="text-gradient">Let's work</span>
            <br />
            <span className="text-gradient" style={{ opacity: 0.6 }}>together</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Drop me a message and I'll get back within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form — 3 cols */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
          >
            <BentoCard hover>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <motion.label
                    className="absolute left-0 text-sm font-mono tracking-wider text-gray-500 transition-all pointer-events-none"
                    animate={{
                      y: focused === 'name' ? -8 : 8,
                      fontSize: focused === 'name' ? '10px' : '12px',
                      color: focused === 'name' ? '#22c55e' : '#404040',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    NAME
                  </motion.label>
                  <input
                    type="text"
                    onFocus={() => setFocused('name')}
                    onBlur={(e) => !e.target.value && setFocused(null)}
                    className="w-full bg-transparent border-b border-[rgba(0,0,0,0.09)] focus:border-[#22c55e] text-gray-900 text-lg py-3 pt-6 outline-none transition-colors duration-300"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <motion.label
                    className="absolute left-0 text-sm font-mono tracking-wider text-gray-500 transition-all pointer-events-none"
                    animate={{
                      y: focused === 'email' ? -8 : 8,
                      fontSize: focused === 'email' ? '10px' : '12px',
                      color: focused === 'email' ? '#22c55e' : '#404040',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    EMAIL
                  </motion.label>
                  <input
                    type="email"
                    onFocus={() => setFocused('email')}
                    onBlur={(e) => !e.target.value && setFocused(null)}
                    className="w-full bg-transparent border-b border-[rgba(0,0,0,0.09)] focus:border-[#22c55e] text-gray-900 text-lg py-3 pt-6 outline-none transition-colors duration-300"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <motion.label
                    className="absolute left-0 text-sm font-mono tracking-wider text-gray-500 transition-all pointer-events-none"
                    animate={{
                      y: focused === 'message' ? -8 : 8,
                      fontSize: focused === 'message' ? '10px' : '12px',
                      color: focused === 'message' ? '#22c55e' : '#404040',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    MESSAGE
                  </motion.label>
                  <textarea
                    rows={4}
                    onFocus={() => setFocused('message')}
                    onBlur={(e) => !e.target.value && setFocused(null)}
                    className="w-full bg-transparent border-b border-[rgba(0,0,0,0.09)] focus:border-[#22c55e] text-gray-900 text-lg py-3 pt-6 outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <MagneticButton
                    className="btn-primary flex items-center gap-2.5 px-8 py-3.5 text-sm w-full justify-center"
                  >
                    {submitted ? (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 text-[#22c55e]"
                      >
                        ✓ Message Sent!
                      </motion.span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </MagneticButton>
                </div>
              </form>
            </BentoCard>
          </motion.div>

          {/* Info Cards — 2 cols */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
          >
            <BentoCard hover delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(34,197,94,0.08)] flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#22c55e]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-sm text-gray-600 font-mono">ayushagarwal.contact@gmail.com</p>
                </div>
              </div>
            </BentoCard>

            <BentoCard hover delay={0.3}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(99,102,241,0.08)] flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#6366f1]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-sm text-gray-600 font-mono">India · IST (UTC+5:30)</p>
                </div>
              </div>
            </BentoCard>

            <BentoCard hover delay={0.4}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(245,158,11,0.08)] flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">Availability</h3>
                  <p className="text-sm text-gray-600 font-mono">Open for freelance & full-time</p>
                </div>
              </div>
            </BentoCard>

            <BentoCard hover delay={0.5}>
              <a
                href="#"
                className="flex items-center justify-between group"
              >
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">Book a 30-min call</h3>
                  <p className="text-sm text-gray-600 font-mono">Via Cal.com</p>
                </div>
                <ArrowUpRight size={18} className="text-gray-500 group-hover:text-gray-900 group-hover:rotate-45 transition-all duration-300" />
              </a>
            </BentoCard>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
