import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import CTABanner from "@/components/sections/CTABanner";
import { FAQ_PAGE, FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about CyberEscape — pricing, security, compliance, and technical requirements.",
};

export default function FAQPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            title={FAQ_PAGE.title}
            subtitle={FAQ_PAGE.subtitle}
          />

          <div className="mx-auto mt-12 max-w-3xl">
            {FAQ_PAGE.categories.map((category) => {
              const items = FAQ_ITEMS.filter(
                (item) => item.category === category.key
              );
              if (items.length === 0) return null;
              return (
                <div key={category.key} className="mb-10">
                  <h3 className="mb-4 text-lg font-semibold text-accent-light">
                    {category.label}
                  </h3>
                  {items.map((item) => (
                    <Accordion
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
