"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative p-2.5 rounded-xl text-[#525252] w-10 h-10 flex items-center justify-center">
        <div className="w-[18px] h-[18px]" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-2.5 rounded-xl transition-colors duration-200 focus:outline-none group text-[var(--dock-text)] hover:text-[var(--dock-text-hover)]"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-[18px] h-[18px] flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <Sun size={18} />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <Moon size={18} />
        </motion.div>
      </div>
    </motion.button>
  );
}
