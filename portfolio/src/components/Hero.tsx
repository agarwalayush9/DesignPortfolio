"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Copy, Check, MapPin, Clock } from "lucide-react";
import { TechPill } from "./TechPills";

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "hello@ayush.dev";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      {/* Top Meta Row — location and time */}
      <motion.div
        className="flex items-center justify-between mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...transition, delay: 0 }}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wide text-[#404040]">
            <MapPin size={11} className="text-[#333]" />
            <span>INDIA</span>
          </div>
          <div className="w-px h-3 bg-[rgba(255,255,255,0.06)]" />
          <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wide text-[#404040]">
            <Clock size={11} className="text-[#333]" />
            <span>{new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false })}</span>
          </div>
        </div>
      </motion.div>

      {/* Avatar + Identity Row */}
      <motion.div
        className="flex items-center gap-5 mb-12"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.1 }}
      >
        {/* Avatar with glow ring */}
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#22c55e]/20 via-transparent to-[#6366f1]/20 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-[72px] h-[72px] rounded-full border border-[rgba(255,255,255,0.08)] p-[3px]">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] flex items-center justify-center">
              <span className="text-white text-xl font-semibold tracking-tight">AA</span>
            </div>
          </div>
          {/* Status dot */}
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#030303] flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-white tracking-tight mb-1">Ayush Agarwal</h1>
          <p className="text-[13px] text-[#525252]">
            Available for work
          </p>
        </div>
      </motion.div>

      {/* Massive Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="font-serif text-[clamp(3rem,8vw,6rem)] font-black leading-[0.95] tracking-tight">
          <span className="text-gradient">FULL STACK</span>
          <br />
          <span className="text-gradient" style={{ opacity: 0.6 }}>DEVELOPER</span>
        </h2>
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.3 }}
        className="max-w-xl mb-12"
      >
        <p className="text-[15px] text-[#808080] leading-[1.8] tracking-wide">
          I craft beautiful, performant web experiences with modern technologies.
          Passionate about clean code, intuitive design, and building products that make a difference using{" "}
          <span className="inline-flex align-middle mx-0.5"><TechPill name="React" /></span>,{" "}
          <span className="inline-flex align-middle mx-0.5"><TechPill name="Next.js" /></span>,{" "}
          <span className="inline-flex align-middle mx-0.5"><TechPill name="TypeScript" /></span>{" "}
          and <span className="inline-flex align-middle mx-0.5"><TechPill name="Node.js" /></span>.
        </p>
      </motion.div>

      {/* CTA Row */}
      <motion.div
        className="flex flex-wrap items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.4 }}
      >
        <button className="btn-primary flex items-center gap-2.5 px-7 py-3 text-sm">
          <Calendar className="w-[15px] h-[15px]" />
          Book a Call
        </button>
        <button className="btn-secondary flex items-center gap-2.5 px-7 py-3 text-sm">
          <Mail className="w-[15px] h-[15px]" />
          Send Email
        </button>

        {/* Copy email */}
        <div className="relative">
          <button
            onClick={handleCopy}
            className="group w-10 h-10 rounded-full border border-[rgba(255,255,255,0.06)] flex items-center justify-center text-[#525252] hover:text-white hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.03)] transition-all duration-300"
            aria-label="Copy email address"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-[#22c55e]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -top-9 left-1/2 -translate-x-1/2 glass-card text-[11px] text-[#22c55e] py-1 px-2.5 rounded-md whitespace-nowrap"
            >
              Copied!
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
