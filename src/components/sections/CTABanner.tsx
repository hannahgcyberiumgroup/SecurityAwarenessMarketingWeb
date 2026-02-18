import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

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
          Ready to Transform Your Security Training?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
          Join organizations that have turned compliance into culture with
          gamified security awareness training.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/pricing" size="lg">
            Start Free Trial
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Sales
          </Button>
        </div>
      </Container>
    </section>
  );
}
