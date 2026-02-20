import type { Metadata } from "next";
import Link from "next/link";
import { Gamepad2, BarChart3, Building2, User } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import CTABanner from "@/components/sections/CTABanner";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_NAME} — our vision for a world where people are the first line of defence and security training works alongside the tools organisations already rely on.`,
};

const pillars: { icon: React.ComponentType<{ className?: string }>; title: string; description: React.ReactNode }[] = [
  {
    icon: Gamepad2,
    title: "Engagement First",
    description:
      "We believe security training should compete with the best games for attention — not the worst compliance checkboxes. Escape-room mechanics create genuine engagement that drives voluntary participation.",
  },
  {
    icon: BarChart3,
    title: "Measurable Outcomes",
    description: (
      <>
        Every interaction generates data. Our{" "}
        <Link
          href="/benefits#resilience-score"
          className="text-accent-light hover:text-white transition-colors underline underline-offset-2"
        >
          6-domain resilience score
        </Link>{" "}
        gives security leaders the metrics they need to prove ROI, identify
        risks, and drive continuous improvement.
      </>
    ),
  },
  {
    icon: Building2,
    title: "Enterprise Ready",
    description:
      "Built from day one for regulated industries. Multi-tenant isolation, RBAC, audit logs, and GDPR compliance aren't afterthoughts — they're foundational architecture decisions.",
  },
];

const advisors = [
  { name: "Advisor Name", role: "Cybersecurity Advisor" },
  { name: "Advisor Name", role: "Enterprise Strategy Advisor" },
  { name: "Advisor Name", role: "Compliance & Regulatory Advisor" },
  { name: "Advisor Name", role: "Learning & Development Advisor" },
  { name: "Advisor Name", role: "Go-to-Market Advisor" },
  { name: "Advisor Name", role: "Product Advisor" },
];

export default function AboutPage() {
  return (
    <>
      {/* Vision */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            badge="Our Vision"
            title="People Are the First Line of Defence"
          />
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-foreground">
            <p>
              Firewalls, endpoint tools, and SIEMs form the technical backbone of any security
              programme. But behind every phishing click, misconfigured file share, or accidental
              data leak is a person making a decision. Technology cannot fully compensate for
              uninformed or unprepared people. The most scalable investment an organisation can make
              is turning its workforce into a knowledgeable, alert, and resilient first line of
              defence.
            </p>
            <p>
              {SITE_NAME} is not a replacement for compliance training or your existing security
              stack. It is the behavioural layer that sits alongside them. Whether your team already
              uses a phishing simulator, an LMS, or a SIEM, {SITE_NAME} adds what those tools
              cannot: hands-on practice, measurable resilience, and a training experience employees
              actually engage with.
            </p>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-surface py-16 md:py-24">
        <Container>
          <SectionHeading title="Our Approach" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="bg-surface-light text-center">
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                  <pillar.icon className="h-6 w-6 text-accent-light" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-foreground">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Advisory Board */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            title="Advisory Board"
            subtitle="Experienced voices guiding our product, strategy, and growth."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {advisors.map((advisor, i) => (
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
