'use client';

import React from 'react';
import { motion } from 'framer-motion';

type GradientDotsProps = React.ComponentProps<typeof motion.div> & {
  dotSize?: number;
  spacing?: number;
  duration?: number;
  colorCycleDuration?: number;
  backgroundColor?: string;
};

export function GradientDots({
  dotSize = 8,
  spacing = 10,
  duration = 30,
  colorCycleDuration = 8,
  backgroundColor = '#001413',
  className,
  ...props
}: GradientDotsProps) {
  const hexSpacing = spacing * 1.732;
  const half = spacing / 2;
  const hexHalf = hexSpacing / 2;

  return (
    <motion.div
      className={`absolute inset-0 ${className ?? ''}`}
      style={{
        backgroundColor,
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, #1de8d4, transparent 60%),
          radial-gradient(circle at 50% 50%, #047a71, transparent 60%),
          radial-gradient(circle at 50% 50%, #0aada0, transparent 60%),
          radial-gradient(ellipse at 50% 50%, #1de8d4, transparent 60%)
        `,
        backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% ${hexSpacing}px
        `,
        backgroundPosition: `0px 0px, ${half}px ${hexHalf}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
      }}
      animate={{
        backgroundPosition: [
          `0px 0px, ${half}px ${hexHalf}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`,
          `0px 0px, ${half}px ${hexHalf}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
        ],
        filter: ['hue-rotate(-15deg)', 'hue-rotate(35deg)', 'hue-rotate(-15deg)'],
      }}
      transition={{
        backgroundPosition: {
          duration,
          ease: 'linear',
          repeat: Infinity,
        },
        filter: {
          duration: colorCycleDuration,
          ease: 'easeInOut',
          repeat: Infinity,
        },
      }}
      {...props}
    />
  );
}
