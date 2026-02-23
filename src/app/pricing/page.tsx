import type { Metadata } from "next";
import PricingCards from "@/components/sections/PricingCards";
import CTABanner from "@/components/sections/CTABanner";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import { PRICING_SECTION, PRICING_FAQ } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple per-seat pricing starting at $2/user/month. 14-day free trial included.",
};

export default function PricingPage() {
  return (
    <>
      <PricingCards />

      {/* Mini FAQ */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <h2 className="mb-8 text-center text-2xl font-bold text-white">
            {PRICING_SECTION.faqHeading}
          </h2>
          <div className="mx-auto max-w-2xl">
            {PRICING_FAQ.map((item) => (
              <Accordion
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
