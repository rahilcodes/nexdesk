'use client';

import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  glass?: boolean;
}

export function Card({ className, glass = false, children, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-3xl border border-zinc-200/50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]',
        glass ? 'bg-white/70 backdrop-blur-xl' : 'bg-white',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
