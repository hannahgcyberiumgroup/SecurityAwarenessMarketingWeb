"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInSection from "@/components/ui/FadeInSection";
import { PRICING, PRICING_FEATURES, PRICING_SECTION } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function PricingCards() {
  const [annual, setAnnual] = useState(false);

  const monthlyPrice = PRICING.monthly;
  const annualPrice = +(monthlyPrice * (1 - PRICING.annualDiscount)).toFixed(2);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          title={PRICING_SECTION.title}
          subtitle={PRICING_SECTION.subtitle}
        />

        {/* Toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              !annual ? "text-white" : "text-foreground/50"
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={cn(
              "relative inline-flex h-7 w-12 items-center rounded-full transition-colors cursor-pointer",
              annual
                ? "bg-gradient-to-r from-accent to-accent-secondary"
                : "bg-surface-light"
            )}
            aria-label="Toggle annual pricing"
          >
            <span
              className={cn(
                "inline-block h-5 w-5 rounded-full bg-white transition-transform shadow-sm",
                annual ? "translate-x-6" : "translate-x-1"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              annual ? "text-white" : "text-foreground/50"
            )}
          >
            Annual{" "}
            <span className="rounded-full bg-accent-secondary/15 px-2 py-0.5 text-xs text-accent-secondary-light">
              Save 20%
            </span>
          </span>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
          {/* Free Trial */}
          <FadeInSection>
          <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 h-full">
            <h3 className="text-lg font-semibold text-white">Free Trial</h3>
            <div className="mt-5">
              <span className="text-5xl font-bold text-white">
                {PRICING.currency}0
              </span>
              <span className="ml-2 text-foreground/60">
                / {PRICING.trialDays} days
              </span>
            </div>
            <p className="mt-2 text-sm text-foreground/60">
              Up to {PRICING.trialUsers} users · No credit card required
            </p>
            <ul className="mt-8 flex-1 space-y-3.5">
              {PRICING_FEATURES.trial.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3 w-3 text-accent-light" />
                  </div>
                  <span className="text-sm text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="secondary" className="mt-8 w-full">
              Start Free Trial
            </Button>
          </div>
          </FadeInSection>

          {/* Pro */}
          <FadeInSection delay={100}>
          <div className="flex flex-col rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/10 to-accent-secondary/5 p-8 shadow-[0_0_50px_rgba(124,58,237,0.2)] h-full">
            <h3 className="text-lg font-semibold text-white">Pro</h3>
            <div className="mt-5">
              <span className="text-5xl font-bold text-white">
                {PRICING.currency}
                {annual ? annualPrice : monthlyPrice}
              </span>
              <span className="ml-2 text-foreground/60">/ user / month</span>
            </div>
            {annual ? (
              <p className="mt-2 text-sm text-foreground/60">
                <span className="line-through opacity-50">
                  {PRICING.currency}{monthlyPrice}
                </span>{" "}
                — Pay less with annual commitment
              </p>
            ) : (
              <p className="mt-2 text-sm text-foreground/60">
                Unlimited users · Full platform
              </p>
            )}
            <ul className="mt-8 flex-1 space-y-3.5">
              {PRICING_FEATURES.pro.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-secondary/20">
                    <Check className="h-3 w-3 text-accent-secondary-light" />
                  </div>
                  <span className="text-sm text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full">Get Started</Button>
          </div>
          </FadeInSection>
        </div>
      </Container>
    </section>
  );
}
