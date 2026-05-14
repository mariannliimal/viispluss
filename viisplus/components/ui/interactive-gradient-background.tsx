'use client';

import { useEffect, useRef } from 'react';

interface InteractiveGradientBackgroundProps {
  className?: string;
}

export function InteractiveGradientBackground({ className }: InteractiveGradientBackgroundProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const container = host?.parentElement;
    if (!host || !container) return;

    let rafId: number | null = null;
    let px = 0;
    let py = 0;

    const update = () => {
      rafId = null;
      host.style.setProperty('--posX', px.toFixed(1));
      host.style.setProperty('--posY', py.toFixed(1));
    };

    const onMove = (e: PointerEvent) => {
      const r = container.getBoundingClientRect();
      px = e.clientX - r.left - r.width / 2;
      py = e.clientY - r.top - r.height / 2;
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    const onLeave = () => {
      px = 0;
      py = 0;
      host.style.setProperty('--posX', '0');
      host.style.setProperty('--posY', '0');
    };

    container.addEventListener('pointermove', onMove, { passive: true });
    container.addEventListener('pointerleave', onLeave);

    return () => {
      container.removeEventListener('pointermove', onMove);
      container.removeEventListener('pointerleave', onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
      }}
    >
      {/* Screen-composited layer — bright teal/blue/cyan on dark background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          mixBlendMode: 'screen',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: [
              'linear-gradient(115deg, rgb(0 220 190), rgb(0 0 0))',
              'radial-gradient(90% 100% at calc(50% + var(--posX,0)*1px) calc(10% + var(--posY,0)*1px), rgb(29 232 212), rgb(0 0 90))',
              'radial-gradient(100% 100% at calc(80% - var(--posX,0)*1px) calc(0% - var(--posY,0)*1px), rgb(0 210 200), rgb(0 40 10))',
              'radial-gradient(150% 210% at calc(100% + var(--posX,0)*1px) calc(0% + var(--posY,0)*1px), rgb(0 180 255), rgb(0 0 210))',
              'radial-gradient(100% 100% at calc(100% - var(--posX,0)*1px) calc(30% - var(--posY,0)*1px), rgb(80 255 235), rgb(0 60 200))',
              'linear-gradient(60deg, rgb(0 190 170), rgb(60 60 230))',
            ].join(', '),
            backgroundBlendMode: 'overlay, overlay, difference, difference, difference, normal',
          }}
        />
      </div>
    </div>
  );
}
