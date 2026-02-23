import type { Metadata } from "next";
import Link from "next/link";
import { Gamepad2, BarChart3, Building2, User } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import CTABanner from "@/components/sections/CTABanner";
import { SITE_NAME, ABOUT_VISION, ABOUT_PILLARS, ABOUT_ADVISORY } from "@/lib/constants";
import type { Pillar } from "@/types";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_NAME} — our vision for a world where people are the first line of defence and security training works alongside the tools organisations already rely on.`,
};

const pillarIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Gamepad2,
  BarChart3,
  Building2,
};

function PillarDescription({ pillar }: { pillar: Pillar }) {
  if (!pillar.link) return <>{pillar.description}</>;
  const { text, href } = pillar.link;
  const [before, after] = pillar.description.split(text);
  return (
    <>
      {before}
      <Link
        href={href}
        className="text-accent-light hover:text-white transition-colors underline underline-offset-2"
      >
        {text}
      </Link>
      {after}
    </>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Vision */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            badge={ABOUT_VISION.badge}
            title={ABOUT_VISION.title}
          />
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-foreground">
            <p>{ABOUT_VISION.paragraph1}</p>
            <p>{ABOUT_VISION.paragraph2}</p>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <SectionHeading title="Our Approach" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {ABOUT_PILLARS.map((pillar) => {
              const Icon = pillarIconMap[pillar.icon];
              return (
                <Card key={pillar.title} className="bg-surface-light text-center">
                  <div className="mx-auto mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                    {Icon && <Icon className="h-6 w-6 text-accent-light" />}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-foreground">
                    <PillarDescription pillar={pillar} />
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Advisory Board */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            title={ABOUT_ADVISORY.title}
            subtitle={ABOUT_ADVISORY.subtitle}
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT_ADVISORY.advisors.map((advisor, i) => (
              <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface-light p-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-white/10 bg-surface">
                  <User className="h-7 w-7 text-white/20" />
                </div>
                <div>
                  <p className="font-medium text-white">{advisor.name}</p>
                  <p className="text-sm text-foreground/60">{advisor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
