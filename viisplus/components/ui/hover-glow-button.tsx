'use client';

import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

interface HoverGlowButtonProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function HoverGlowButton({ children = 'Küsi pakkumist', href, onClick, className }: HoverGlowButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--gx', `${e.clientX - r.left}px`);
    el.style.setProperty('--gy', `${e.clientY - r.top}px`);
  };

  const shared = cn(
    'relative inline-flex cursor-pointer no-underline overflow-hidden',
    'bg-[#0d1f1e] border border-[rgba(29,232,212,0.22)] rounded-[10px]',
    'transition-[border-color] duration-300',
    'before:content-[""] before:absolute before:w-[280px] before:h-[280px] before:rounded-full',
    'before:bg-[radial-gradient(circle,rgba(29,232,212,0.55)_0%,transparent_68%)]',
    'before:opacity-0 before:pointer-events-none',
    'before:[transform:translate(-50%,-50%)_scale(0.3)]',
    'before:transition-[opacity,transform] before:duration-[250ms,400ms] before:ease-out',
    'before:[left:var(--gx,50%)] before:[top:var(--gy,50%)]',
    'hover:border-[rgba(29,232,212,0.45)] hover:before:opacity-100',
    'hover:before:[transform:translate(-50%,-50%)_scale(1)]',
    className
  );

  const inner = (
    <span className="relative z-10 inline-flex items-center gap-2 px-7 py-3.5 text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[rgba(29,232,212,0.9)] whitespace-nowrap transition-colors duration-300 group-hover:text-[#1de8d4]">
      {children}
    </span>
  );

  if (href) {
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={cn('group', shared)} onMouseMove={handleMouseMove}>
        {inner}
      </a>
    );
  }

  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} onClick={onClick} className={cn('group', shared)} onMouseMove={handleMouseMove}>
      {inner}
    </button>
  );
}
