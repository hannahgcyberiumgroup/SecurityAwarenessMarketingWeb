"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const OTHERS = [
  { name: "A. Johnson", xp: 2450 },
  { name: "M. Chen",    xp: 1750 },
  { name: "S. Patel",   xp: 1200 },
];

const YOU_FINAL_XP = 2800;
const ANIMATION_DURATION = 4200; // linear, so rank changes are evenly spaced
const ROW_HEIGHT = 64; // px — must match height style on each row

const MEDALS = ["🥇", "🥈", "🥉", "4"];

function formatXP(xp: number): string {
  return xp.toLocaleString();
}

type Entry = { name: string; xp: number; isYou: boolean };

function getSortedEntries(youXp: number): (Entry & { rank: number })[] {
  const all: Entry[] = [
    ...OTHERS.map((o) => ({ ...o, isYou: false })),
    { name: "You", xp: youXp, isYou: true },
  ];
  return all
    .sort((a, b) => b.xp - a.xp)
    .map((e, i) => ({ ...e, rank: i }));
}

export default function AnimatedLeaderboard() {
  const ref = useRef<HTMLDivElement>(null);
  const [youXp, setYouXp] = useState(0);
  const [active, setActive] = useState(false);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

  // Trigger on scroll into view
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
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Linear count-up so rank overtakes are evenly spaced
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setYouXp(YOU_FINAL_XP);
      return;
    }
    startRef.current = null;

    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / ANIMATION_DURATION, 1);
      setYouXp(Math.round(progress * YOU_FINAL_XP));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  const entries = getSortedEntries(youXp);
  const youRank = entries.find((e) => e.isYou)!.rank;
  const isFirst = youRank === 0;

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span>🏆</span>
          <span className="text-sm font-semibold text-white">Leaderboard</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-foreground/50">Live</span>
        </div>
      </div>

      {/* Rows — absolutely positioned so CSS transitions animate rank changes */}
      <div className="relative" style={{ height: ROW_HEIGHT * 4 }}>
        {entries.map((entry) => (
          <div
            key={entry.name}
            className="absolute w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(${entry.rank * ROW_HEIGHT}px)` }}
          >
            <div
              style={{
                height: ROW_HEIGHT - 6,
                boxShadow: entry.isYou && isFirst
                  ? "0 0 20px rgba(124,58,237,0.5), 0 0 40px rgba(124,58,237,0.25)"
                  : undefined,
                transition: "box-shadow 0.8s ease",
              }}
              className={cn(
                "flex items-center justify-between rounded-xl px-3 mb-1.5",
                entry.isYou
                  ? "bg-accent/15 border border-accent/30"
                  : "bg-white/[0.03]"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="w-5 text-center text-sm leading-none">
                  {MEDALS[entry.rank]}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    entry.isYou
                      ? "font-bold text-white"
                      : "text-foreground/75"
                  )}
                >
                  {entry.name}
                  {entry.isYou && isFirst && " 🎉"}
                </span>
              </div>
              <span
                className={cn(
                  "text-sm font-semibold tabular-nums",
                  entry.isYou ? "gradient-text" : "text-foreground/50"
                )}
              >
                {formatXP(entry.xp)} XP
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
