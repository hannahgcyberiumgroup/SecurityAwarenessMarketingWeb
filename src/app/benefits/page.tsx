import type { Metadata } from "next";
import Image from "next/image";
import { Check, Shield, Brain, Lock, Wifi, Search, AlertCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RoleCards from "@/components/sections/RoleCards";
import CTABanner from "@/components/sections/CTABanner";
import { ROLE_BENEFITS } from "@/lib/constants";

const RESILIENCE_DOMAINS = [
  {
    icon: Shield,
    name: "Identity Security",
    description: "Password hygiene, MFA usage, and account protection habits.",
  },
  {
    icon: Brain,
    name: "Social Engineering",
    description: "Phishing recognition, pretexting awareness, and manipulation resistance.",
  },
  {
    icon: Lock,
    name: "Data Protection",
    description: "Handling sensitive data, classification, and safe sharing practices.",
  },
  {
    icon: Wifi,
    name: "Network Defense",
    description: "Safe browsing, VPN usage, and recognising network-based threats.",
  },
  {
    icon: Search,
    name: "Threat Hunting",
    description: "Spotting indicators of compromise and reporting suspicious activity.",
  },
  {
    icon: AlertCircle,
    name: "Incident Response",
    description: "Knowing when and how to escalate, contain, and report security incidents.",
  },
];

export const metadata: Metadata = {
  title: "Benefits",
  description:
    "See how CyberEscape delivers measurable value for CISOs, GRC managers, training teams, and employees.",
};

export default function BenefitsPage() {
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
            badge="Benefits"
            title="Built for Every Role"
            subtitle="From the CISO setting strategy to the employee playing their first game."
          />
        </Container>
      </section>

      {/* Role cards */}
      <RoleCards />

      {/* Detailed role sections */}
      <div className="py-8">
        {ROLE_BENEFITS.map((role, i) => (
          <section
            key={role.id}
            id={role.id}
            className="scroll-mt-20 py-16 md:py-24"
          >
            <Container>
              <div
                className={`flex flex-col items-center gap-12 lg:flex-row ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-light">
                    {role.title}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                    {role.headline}
                  </h2>
                  <p className="mt-4 text-foreground/70">{role.description}</p>
                  <ul className="mt-6 space-y-3">
                    {role.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshot */}
                <div className="w-full flex-1">
                  <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-violet-900/20">
                    <Image
                      src={role.image.src}
                      alt={role.image.alt}
                      width={800}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      {/* What is Resilience Score? */}
      <section
        id="resilience-score"
        className="scroll-mt-20 relative overflow-hidden bg-surface/40 py-16 md:py-24"
      >
        <div className="dot-grid absolute inset-0" />
        <Container className="relative">
          <SectionHeading
            badge="Resilience Score"
            title="What is Resilience Score?"
            subtitle="A single, trackable number that reflects how well each employee, team, and organisation understands and applies cybersecurity principles."
          />

          <div className="mx-auto mt-8 max-w-3xl text-center text-foreground/80">
            <p>
              After every training challenge, CyberEscape analyses performance across six security
              domains and updates each participant&apos;s resilience score. Scores roll up to team
              and org level, giving leaders an accurate, real-time picture of security posture — not
              just completion rates.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESILIENCE_DOMAINS.map((domain) => (
              <div
                key={domain.name}
                className="rounded-2xl border border-white/10 bg-surface-light p-6"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-accent/20 to-accent-secondary/10 p-3">
                  <domain.icon className="h-5 w-5 text-accent-light" />
                </div>
                <h3 className="font-semibold text-white">{domain.name}</h3>
                <p className="mt-2 text-sm text-foreground/70">{domain.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
