"use client";

import { useEffect, useRef, useState } from "react";

type BeforeAfterStat = {
  label: string;
  before: string;
  after: string;
  description: string;
};

type SingleValueStat = {
  label: string;
  value: string;
  description: string;
};

type Stat = BeforeAfterStat | SingleValueStat;

function parseNumeric(val: string): number {
  return parseInt(val.replace(/[^0-9]/g, ""), 10);
}

function getSuffix(val: string): string {
  return val.replace(/^[0-9]+/, "");
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, duration: number, active: boolean): number {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }
    startRef.current = null;

    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(easeOut(progress) * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, duration]);

  return count;
}

function AnimatedValue({
  raw,
  duration,
  active,
}: {
  raw: string;
  duration: number;
  active: boolean;
}) {
  const count = useCountUp(parseNumeric(raw), duration, active);
  return (
    <span className="gradient-text">
      {count}
      {getSuffix(raw)}
    </span>
  );
}

export default function AnimatedStats({
  stats,
  duration = 1400,
}: {
  stats: Stat[];
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-10 grid gap-8 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="text-3xl font-bold md:text-4xl">
            {"before" in stat ? (
              <>
                <span className="text-foreground/30 line-through">{stat.before}</span>
                <span className="text-foreground/50"> → </span>
                <AnimatedValue raw={stat.after} duration={duration} active={active} />
              </>
            ) : (
              <AnimatedValue raw={stat.value} duration={duration} active={active} />
            )}
          </div>
          <p className="mt-1 text-sm text-foreground/60">
            {stat.label} {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}
