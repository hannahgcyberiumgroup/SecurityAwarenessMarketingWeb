import type { Metadata } from "next";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import AnalyticsPreview from "@/components/sections/AnalyticsPreview";
import CTABanner from "@/components/sections/CTABanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore CyberEscape's full feature set — role-based tools for security leaders, training managers, and employees, plus powerful analytics and reporting.",
};

export default function FeaturesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-violet-600/25 blur-[80px]" />
          <div className="absolute -right-10 bottom-0 h-[300px] w-[300px] rounded-full bg-pink-500/15 blur-[80px]" />
        </div>
        <div className="dot-grid absolute inset-0" />
        <Container className="relative">
          <SectionHeading
            badge="Platform Features"
            title="Everything Your Team Needs"
            subtitle="Purpose-built tools for every role — from the CISO setting strategy to the employee playing their first game."
          />
        </Container>
      </section>

      <FeatureShowcase />
      <AnalyticsPreview />
      <CTABanner />
    </>
  );
}
