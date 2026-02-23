import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CTA_BANNER } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Blob background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-violet-600/25 blur-[80px]" />
        <div className="absolute right-[5%] top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-pink-500/20 blur-[80px]" />
      </div>
      <div className="dot-grid absolute inset-0" />

      <Container className="relative text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {CTA_BANNER.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
          {CTA_BANNER.subtext}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/pricing" size="lg">
            {CTA_BANNER.primaryCta}
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            {CTA_BANNER.secondaryCta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
