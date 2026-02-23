import { Zap, Trophy, BarChart3 } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import AnimatedLeaderboard from "@/components/sections/AnimatedLeaderboard";
import { LEADERBOARD_SECTION } from "@/lib/constants";

const bulletIconMap = { Zap, Trophy, BarChart3 };

export default function LeaderboardHighlight() {
  return (
    <section className="relative overflow-hidden bg-surface/60 py-20 md:py-28">
      <div className="dot-grid absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-600/20 blur-[80px]" />
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center">

          {/* Copy */}
          <div className="flex-1 text-center lg:text-left">
            <Badge>{LEADERBOARD_SECTION.badge}</Badge>
            <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
              {LEADERBOARD_SECTION.title}
            </h2>
            <p className="mt-5 max-w-lg mx-auto lg:mx-0 text-lg text-foreground/70">
              {LEADERBOARD_SECTION.body}
            </p>
            <ul className="mt-8 space-y-4">
              {LEADERBOARD_SECTION.bullets.map((bullet) => {
                const Icon = bulletIconMap[bullet.icon as keyof typeof bulletIconMap];
                return (
                  <li key={bullet.text} className="flex items-start gap-4 justify-center lg:justify-start">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent-secondary/10">
                      {Icon && <Icon className="h-3.5 w-3.5 text-accent-light" />}
                    </span>
                    <span className="text-foreground/80">{bullet.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Animated leaderboard */}
          <div className="w-full max-w-sm shrink-0 lg:w-80">
            <AnimatedLeaderboard />
          </div>

        </div>
      </Container>
    </section>
  );
}
