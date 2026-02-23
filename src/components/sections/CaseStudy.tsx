import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import AnimatedStats from "@/components/sections/AnimatedStats";
import { CASE_STUDY } from "@/lib/constants";

export default function CaseStudy() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <FadeInSection threshold={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface to-surface-light p-8 md:p-12 lg:p-16">
            {/* Background blobs inside card */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-violet-600/15 blur-[60px]" />
              <div className="absolute -bottom-10 left-10 h-48 w-48 rounded-full bg-pink-500/10 blur-[60px]" />
            </div>

            <div className="relative mx-auto max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-light">
                {CASE_STUDY.label}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                {CASE_STUDY.company} — {CASE_STUDY.titleSuffix}
              </h2>
              <p className="mt-1 text-sm text-foreground/60">{CASE_STUDY.description}</p>

              <div className="mt-6 space-y-4">
                <p className="text-foreground/80">{CASE_STUDY.problem}</p>
                <p className="text-foreground/80">{CASE_STUDY.solution}</p>
                <p className="text-foreground/80">{CASE_STUDY.results}</p>
              </div>

              <AnimatedStats stats={CASE_STUDY.stats} />

              {/* Closing */}
              <blockquote className="mt-10 border-l-2 border-accent-secondary/40 pl-6 italic text-foreground/70">
                {CASE_STUDY.closing}
              </blockquote>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
