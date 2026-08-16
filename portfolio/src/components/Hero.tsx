"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Mail, Copy, Check, MapPin, Clock } from "lucide-react";
import { TechPill } from "./TechPills";
import PageViewCounter from "./PageViewCounter";
import Socials from "./Socials";

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "ayushagarwal.contact@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-20">
      {/* Top Meta Row — location and time */}
      <motion.div
        className="flex items-center justify-between mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...transition, delay: 0 }}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-sm font-mono tracking-wide text-gray-600">
            <MapPin size={14} className="text-gray-600" />
            <span>INDIA</span>
          </div>
          <div className="w-px h-4 bg-[rgba(0,0,0,0.225)]" />
          <div className="flex items-center gap-1.5 text-sm font-mono tracking-wide text-gray-600">
            <Clock size={14} className="text-gray-600" />
            <span>{new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false })}</span>
          </div>
        </div>
        <PageViewCounter />
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
          <div className="relative w-[72px] h-[72px] rounded-full border border-[rgba(0,0,0,0.12)] p-[3px]">
            <div className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden bg-gray-50">
              <Image src="/profile.png" alt="Ayush Agarwal" fill sizes="(max-width: 768px) 80px, 96px" priority className="object-cover" />
            </div>
          </div>
          {/* Status dot */}
          <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-white flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-gray-900 tracking-tight mb-0.5">Ayush Agarwal</h1>
          <p className="text-sm text-gray-500">
            Available for work
          </p>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight tracking-tight">
          <span className="text-gradient">iOS &</span>
          <br />
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
        className="max-w-xl mb-10"
      >
        <p className="text-sm text-gray-600 leading-[1.7] tracking-normal">
          I craft beautiful, performant web and iOS experiences.
          Passionate about clean code, intuitive design, and building products that make a difference using{" "}
          <span className="inline-flex align-middle mx-0.5"><TechPill name="Swift" /></span>,{" "}
          <span className="inline-flex align-middle mx-0.5"><TechPill name="React" /></span>,{" "}
          <span className="inline-flex align-middle mx-0.5"><TechPill name="Next.js" /></span>{" "}
          and <span className="inline-flex align-middle mx-0.5"><TechPill name="Node.js" /></span>.
        </p>
      </motion.div>

      {/* CTA Row */}
      <motion.div
        className="flex items-center gap-3 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.4 }}
      >
        <Socials />
      </motion.div>
    </div>
  );
}
