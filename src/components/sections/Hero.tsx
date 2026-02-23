import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { HERO, APP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Blob background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Central orb */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[280px] w-[750px] rounded-full bg-gradient-to-r from-violet-600/20 to-pink-500/18 blur-[80px]" />
        </div>
        {/* Corner blobs */}
        <div className="absolute -left-32 -top-10 h-[650px] w-[650px] rounded-full bg-violet-600/32 blur-[90px]" />
        <div className="absolute -right-20 top-0 h-[550px] w-[550px] rounded-full bg-pink-500/20 blur-[90px]" />
        <div className="absolute -bottom-20 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-700/28 blur-[80px]" />
      </div>
      <div className="dot-grid absolute inset-0" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in-up inline-block">
            <Badge>{HERO.badge}</Badge>
          </div>

          <h1 className="animate-fade-in-up animation-delay-150 mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05]">
            {HERO.heading}{" "}
            <span className="gradient-text">{HERO.headingAccent}</span>
          </h1>

          <p className="animate-fade-in-up animation-delay-300 mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
            {HERO.subheading}
          </p>

          <p className="animate-fade-in-up animation-delay-500 mt-8 text-base font-semibold gradient-text">
            {HERO.ctaLabel}
          </p>

          <div className="animate-fade-in-up animation-delay-700 mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Request a Demo
            </Button>
            <Button href={APP_URL} variant="secondary" size="lg">
              Sign In
            </Button>
          </div>

          <p className="animate-fade-in-up animation-delay-700 mt-4 text-sm text-foreground/40">
            {HERO.trialNote}
          </p>
        </div>
      </Container>
    </section>
  );
}
