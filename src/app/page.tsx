import Hero from "@/components/sections/Hero";
import LeaderboardHighlight from "@/components/sections/LeaderboardHighlight";
import ValueProps from "@/components/sections/ValueProps";
import CaseStudy from "@/components/sections/CaseStudy";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <LeaderboardHighlight />
      <ValueProps />
      <CaseStudy />
      <CTABanner />
    </>
  );
}
