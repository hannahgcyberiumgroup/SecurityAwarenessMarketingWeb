"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function FadeInSection({
  children,
  className,
  delay = 0,
  threshold = 0.15,
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(visible && "animate-fade-in-up", className)}
      style={{
        opacity: visible ? undefined : 0,
        animationDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}
