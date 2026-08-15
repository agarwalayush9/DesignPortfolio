"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Mail } from "lucide-react";

interface LinkPreviewProps {
  children: React.ReactNode;
  url: string;
  className?: string;
}

export const LinkPreview = ({ children, url, className = "relative inline-block" }: LinkPreviewProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const halfWidth = 130; // half of 260px tooltip width
        const padding = 16;
        let newX = rect.left + rect.width / 2;
        
        // Clamp to screen edges
        if (newX - halfWidth < padding) {
          newX = halfWidth + padding;
        } else if (newX + halfWidth > window.innerWidth - padding) {
          newX = window.innerWidth - halfWidth - padding;
        }

        setCoords({
          x: newX,
          y: rect.top + window.scrollY,
        });
      }
      setIsOpen(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(false);
  };

  const isMailto = url.startsWith('mailto:');
  const emailAddress = isMailto ? url.replace('mailto:', '') : '';

  const src = isMailto 
    ? '' 
    : `https://api.microlink.io/?url=${encodeURIComponent(
        url
      )}&screenshot=true&meta=false&embed=screenshot.url&colorScheme=light&viewport.isMobile=true&viewport.deviceScaleFactor=1&viewport.width=400&viewport.height=300`;

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isMounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: -10, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }}
              exit={{ opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15, ease: "easeOut" } }}
              style={{
                position: 'absolute',
                left: coords.x,
                top: coords.y,
                zIndex: 9999,
              }}
              className="-translate-x-1/2 -translate-y-full pointer-events-none"
            >
              <div 
                className="p-1.5 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden pointer-events-auto" 
                style={{ width: isMailto ? '220px' : '260px' }}
              >
                {isMailto ? (
                  <div className="w-full rounded-xl bg-gray-50 border border-gray-200 p-4 flex flex-col items-center justify-center gap-2 h-[120px]">
                    <Mail className="w-8 h-8 text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 truncate w-full text-center">{emailAddress}</span>
                  </div>
                ) : (
                  <div className="block w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                    <Image
                      src={src}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                      alt="Preview"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
      {children}
    </div>
  );
};
