'use client';

import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

interface RippleBorderButtonProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function RippleBorderButton({ children, href, onClick, className }: RippleBorderButtonProps) {
  const glowRef = useRef<HTMLSpanElement>(null);

  const setPos = (e: React.MouseEvent<HTMLElement>) => {
    const glow = glowRef.current;
    if (!glow) return;
    const r = e.currentTarget.getBoundingClientRect();
    glow.style.left = `${e.clientX - r.left}px`;
    glow.style.top  = `${e.clientY - r.top}px`;
  };

  const borderFrame = (
    <span
      className={cn(
        'absolute inset-0 rounded-[10px] p-px pointer-events-none overflow-hidden',
        'bg-[rgba(255,255,255,0.16)] transition-[background] duration-300',
        '[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]',
        '[mask-composite:exclude]',
        '[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]',
        '[-webkit-mask-composite:xor]',
        'group-hover:bg-[rgba(255,255,255,0.3)]'
      )}
    >
      <span
        ref={glowRef}
        className={cn(
          'absolute w-0 h-0 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none',
          'bg-[rgba(29,232,212,0.75)] opacity-0',
          'transition-[width,height,opacity] duration-[800ms] ease-out',
          'group-hover:w-[320px] group-hover:h-[320px] group-hover:opacity-100'
        )}
      />
    </span>
  );

  const inner = (
    <>
      {borderFrame}
      <span className="relative z-10 inline-flex items-center gap-2 px-7 py-3.5 text-[0.7rem] font-medium tracking-[0.12em] uppercase whitespace-nowrap">
        {children}
      </span>
    </>
  );

  const shared = cn(
    'group relative inline-flex cursor-pointer no-underline overflow-hidden rounded-[10px]',
    'text-[rgba(255,255,255,0.5)] transition-colors duration-300',
    'hover:text-[rgba(255,255,255,0.9)]',
    className
  );

  if (href) {
    return <a href={href} className={shared} onMouseEnter={setPos} onMouseMove={setPos}>{inner}</a>;
  }

  return <button onClick={onClick} className={shared} onMouseEnter={setPos} onMouseMove={setPos}>{inner}</button>;
}
