'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

// Utility for class merging (I'll create the utils file next)
// But defining the component logic first.

export function FadeIn({ 
  children, 
  className, 
  delay = 0, 
  direction = 'up' 
}: { 
  children: ReactNode; 
  className?: string; 
  delay?: number; 
  direction?: 'up' | 'down' | 'left' | 'right' | 'none' 
}) {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {}
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ 
  children, 
  className, 
  delay = 0 
}: { 
  children: ReactNode; 
  className?: string; 
  delay?: number 
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
