'use client';
import { useEffect, useRef, useState } from 'react';

/** Animated count-up number, mirroring the demo's animateCount(). */
export default function CountUp({
  value,
  prefix = '',
  suffix = '',
  duration = 900,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const dec = value % 1 !== 0 ? 1 : 0;
  const [display, setDisplay] = useState('0');
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = value * eased;
      setDisplay(dec ? v.toFixed(1) : Math.round(v).toLocaleString('en-IN'));
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [value, duration, dec]);

  return (
    <>
      {prefix}
      {display}
      {suffix}
    </>
  );
}
