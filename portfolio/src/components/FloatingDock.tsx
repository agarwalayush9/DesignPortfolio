'use client';

import { motion } from 'framer-motion';
import { Home, User, FolderKanban, Newspaper } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { icon: Home, href: '/', label: 'Home' },
  { icon: FolderKanban, href: '/projects', label: 'Projects' },
  { icon: User, href: '/about', label: 'About' },
  { icon: Newspaper, href: '/blog', label: 'Blog' },
];

export default function FloatingDock() {
  const pathname = usePathname();

  return (
    <motion.div
      className="fixed bottom-6 left-1/2 z-50 pb-[env(safe-area-inset-bottom)]"
      style={{ x: '-50%' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
    >
      <div className="glass-card flex items-center gap-0.5 px-2.5 py-2 rounded-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                className={`relative p-2.5 rounded-xl transition-colors duration-200 focus:outline-none group ${
                  isActive ? 'text-gray-900' : 'text-[#525252] hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="dock-active"
                    className="absolute inset-0 rounded-xl bg-[rgba(0,0,0,0.12)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon size={18} className="relative z-10" />
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
