'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function SpotlightCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* Large ambient spotlight glow following cursor */}
      <motion.div
        className="pointer-events-none fixed z-30"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: '600px',
          height: '600px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.4s ease',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.06) 0%, rgba(34, 197, 94, 0.02) 35%, transparent 70%)',
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: '36px',
          height: '36px',
          border: '1.5px solid rgba(34, 197, 94, 0.25)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Core dot */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: '8px',
          height: '8px',
          background: 'rgba(34, 197, 94, 0.6)',
          boxShadow: '0 0 20px 4px rgba(34, 197, 94, 0.3), 0 0 60px 10px rgba(34, 197, 94, 0.1)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  );
}
