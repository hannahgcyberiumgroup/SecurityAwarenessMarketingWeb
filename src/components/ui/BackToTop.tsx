"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white cursor-pointer"
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" />
      Back to top
    </button>
  );
}
