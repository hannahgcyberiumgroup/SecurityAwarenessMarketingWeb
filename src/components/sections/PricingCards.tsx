import { Check, ChevronDown, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { PRICING, PRICING_FEATURES, PRICING_SECTION, PRO_PRICING_TIERS, APP_URL } from "@/lib/constants";

export default function PricingCards() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title={PRICING_SECTION.title}
          subtitle={PRICING_SECTION.subtitle}
        />

        {/* Cards */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">

          {/* Free */}
          <div className="animate-fade-in-up flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 h-full">
            <h3 className="text-lg font-semibold text-white">Free</h3>
            <div className="mt-5">
              <span className="text-5xl font-bold text-white">$0</span>
              <span className="ml-2 text-foreground/60">/ {PRICING.free.trialDays} days</span>
            </div>
            <p className="mt-2 text-sm text-foreground/60">
              Up to {PRICING.free.maxUsers} users · No credit card required
            </p>
            <ul className="mt-8 flex-1 space-y-3.5">
              {PRICING_FEATURES.free.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3 w-3 text-accent-light" />
                  </div>
                  <span className="text-sm text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            <Button href={APP_URL} variant="secondary" className="mt-8 w-full">
              Start Free Trial
            </Button>
          </div>

          {/* Pro — highlighted */}
          <div className="animate-fade-in-up animation-delay-150 relative flex flex-col rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/10 to-accent-secondary/5 p-8 shadow-[0_0_50px_rgba(124,58,237,0.2)] h-full">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-3 py-1 text-xs font-semibold text-white shadow-lg">
                <Sparkles className="h-3 w-3" /> Most Popular
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white">Pro</h3>
            <div className="mt-5 flex items-baseline gap-1.5">
              
              <span className="text-5xl font-bold text-white">
                ${PRICING.pro.minPerSeat}–{PRICING.pro.maxPerSeat}
              </span>
              <span className="text-sm font-semibold text-foreground/50">{PRICING.currency}</span>
              <span className="text-foreground/60">/ seat</span>
            </div>
            <p className="mt-2 text-sm text-foreground/60">
              Minimum 50 users · Billed annually
            </p>
            <a
              href="#pricing-details"
              className="mt-2 inline-flex items-center gap-1 text-xs text-accent-light hover:text-white transition-colors"
            >
              View pricing breakdown <ChevronDown className="h-3 w-3" />
            </a>
            <ul className="mt-6 flex-1 space-y-3.5">
              {PRICING_FEATURES.pro.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-secondary/20">
                    <Check className="h-3 w-3 text-accent-secondary-light" />
                  </div>
                  <span className="text-sm text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            <Button href={APP_URL} className="mt-8 w-full">
              Get Started
            </Button>
          </div>

          {/* Enterprise */}
          <div className="animate-fade-in-up animation-delay-300 flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 h-full">
            <h3 className="text-lg font-semibold text-white">Enterprise</h3>
            <div className="mt-5">
              <span className="text-5xl font-bold text-white">Custom</span>
            </div>
            <p className="mt-2 text-sm text-foreground/60">
              Tailored for large organisations & regulated industries
            </p>
            <ul className="mt-8 flex-1 space-y-3.5">
              {PRICING_FEATURES.enterprise.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3 w-3 text-accent-light" />
                  </div>
                  <span className="text-sm text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="secondary" className="mt-8 w-full">
              Contact Sales
            </Button>
          </div>

        </div>

        {/* Pro pricing breakdown */}
        <div
          id="pricing-details"
          className="mx-auto mt-16 max-w-md scroll-mt-24"
        >
          <h3 className="mb-1 text-center text-lg font-semibold text-white">
            Pro Plan — Volume Pricing
          </h3>
          <p className="mb-6 text-center text-sm text-foreground/50">
            Per seat · Billed annually in {PRICING.currency}
          </p>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            {PRO_PRICING_TIERS.map((tier, i) => (
              <div
                key={tier.seats}
                className={`flex items-center justify-between px-6 py-3.5 ${
                  i < PRO_PRICING_TIERS.length - 1 ? "border-b border-white/10" : ""
                } ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
              >
                <span className="text-sm text-foreground/70">{tier.seats} seats</span>
                {tier.price !== null ? (
                  <span className="font-semibold text-white">
                    ${tier.price} / seat
                  </span>
                ) : (
                  <a
                    href="/contact"
                    className="text-sm font-semibold text-accent-light hover:text-white transition-colors"
                  >
                    Contact Sales →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
