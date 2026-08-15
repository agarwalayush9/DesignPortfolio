"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseEnter = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        x: rect.left + rect.width / 2,
        y: rect.top + window.scrollY, // Position at the top of the element
      });
    }
    setIsOpen(true);
  };

  const src = `https://api.microlink.io/?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsOpen(false)}
    >
      {isMounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: -10, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
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
                style={{ width: 260, height: 160 }}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-50/50 shadow-inner">
                  {/* Fallback loading indicator while image loads */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-[10px] font-mono tracking-wider uppercase">
                    Loading Preview
                  </div>
                  <img
                    src={src}
                    alt="Website Preview"
                    className="absolute inset-0 w-full h-full object-cover object-top rounded-xl z-10 transition-opacity duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
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
