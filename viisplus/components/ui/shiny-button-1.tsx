import React, { useId } from 'react';

interface GlowButtonProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const GlowButton = ({ children = 'Küsi pakkumist', href, onClick, className = '' }: GlowButtonProps) => {
  const id = useId().replace(/:/g, '');
  const filters = {
    f1: `gf1-${id}`,
    f2: `gf2-${id}`,
    f3: `gf3-${id}`,
  };

  const layers = (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.f1}>
          <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 9 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.f2}>
          <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 3 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id={filters.f3}>
          <feColorMatrix values="1 0 0 0.2 0  0 1 0 0.2 0  0 0 1 0.2 0  0 0 0 2 0" />
        </filter>
      </svg>

      {/* Outer glow */}
      <span
        className="absolute inset-0 overflow-hidden rounded-[14px] opacity-55 transition-opacity duration-300 -z-10 group-hover:opacity-80 group-active:opacity-100"
        style={{ filter: `blur(2em) url(#${filters.f1})` }}
      >
        <span
          className="absolute inset-[-150%] group-hover:animate-[gb-speen_8s_cubic-bezier(0.56,0.15,0.28,0.86)_infinite,gb-woah_4s_infinite]"
          style={{ background: 'linear-gradient(90deg, #1de8d4 30%, transparent 50%, #047a71 70%)' }}
        />
      </span>

      {/* Mid glow */}
      <span
        className="absolute overflow-hidden rounded-[14px] opacity-55 transition-opacity duration-300 -z-10 group-hover:opacity-80 group-active:opacity-100"
        style={{ inset: '-2px', filter: `blur(4px) url(#${filters.f2})` }}
      >
        <span
          className="absolute inset-[-150%] group-hover:animate-[gb-speen_8s_cubic-bezier(0.56,0.15,0.28,0.86)_infinite,gb-woah_4s_infinite]"
          style={{ background: 'linear-gradient(90deg, #5ffaf0 20%, transparent 45% 55%, #0aada0 80%)' }}
        />
      </span>
    </>
  );

  const inner = (
    <span className="relative flex rounded-[14px] p-px bg-black/30">
      {/* Inner glow */}
      <span
        className="absolute overflow-hidden rounded-[inherit] opacity-55 transition-opacity duration-300 -z-10 group-hover:opacity-80 group-active:opacity-100"
        style={{ inset: '-2px', filter: `blur(2px) url(#${filters.f3})` }}
      >
        <span
          className="absolute inset-[-150%] group-hover:animate-[gb-speen_8s_cubic-bezier(0.56,0.15,0.28,0.86)_infinite,gb-woah_4s_infinite]"
          style={{ background: 'linear-gradient(90deg, #9ef5ee 30%, transparent 45% 55%, #1de8d4 70%)' }}
        />
      </span>
      {/* Surface */}
      <span className="relative flex items-center gap-2 px-7 py-3.5 bg-[#011a18] rounded-[13px] text-[#e8fffe] text-xs font-medium tracking-widest uppercase whitespace-nowrap">
        {children}
      </span>
    </span>
  );

  const shared = `relative inline-flex group cursor-pointer no-underline ${className}`;

  if (href) {
    return (
      <a href={href} className={shared}>
        <style>{`
          @keyframes gb-speen { 0% { transform: rotate(10deg); } 50% { transform: rotate(190deg); } 100% { transform: rotate(370deg); } }
          @keyframes gb-woah  { 0%, 100% { transform: scale(1); } 50% { transform: scale(0.75); } }
        `}</style>
        {layers}
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={shared}>
      <style>{`
        @keyframes gb-speen { 0% { transform: rotate(10deg); } 50% { transform: rotate(190deg); } 100% { transform: rotate(370deg); } }
        @keyframes gb-woah  { 0%, 100% { transform: scale(1); } 50% { transform: scale(0.75); } }
      `}</style>
      {layers}
      {inner}
    </button>
  );
};

export { GlowButton };
