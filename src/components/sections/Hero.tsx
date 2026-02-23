import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { HERO, APP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Blob background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/30 blur-[80px]" />
        <div className="absolute -right-10 top-10 h-[400px] w-[400px] rounded-full bg-pink-500/20 blur-[80px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-purple-800/25 blur-[80px]" />
      </div>
      <div className="dot-grid absolute inset-0" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Badge>{HERO.badge}</Badge>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05]">
            {HERO.heading}{" "}
            <span className="gradient-text">{HERO.headingAccent}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
            {HERO.subheading}
          </p>

          <p className="mt-8 text-base font-semibold gradient-text">
            {HERO.ctaLabel}
          </p>

          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Request a Demo
            </Button>
            <Button href={APP_URL} variant="secondary" size="lg">
              Sign In
            </Button>
          </div>

          <p className="mt-4 text-sm text-foreground/40">
            {HERO.trialNote}
          </p>
        </div>
      </Container>
    </section>
  );
}
