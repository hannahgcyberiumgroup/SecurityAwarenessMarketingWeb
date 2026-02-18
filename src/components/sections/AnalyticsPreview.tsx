import Image from "next/image";
import {
  Activity,
  Grid3x3,
  TrendingUp,
  AlertTriangle,
  Radar,
  LineChart,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { ANALYTICS_CAPABILITIES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  Grid3x3,
  TrendingUp,
  AlertTriangle,
  Radar,
  LineChart,
};

export default function AnalyticsPreview() {
  return (
    <section className="relative overflow-hidden bg-surface/40 py-16 md:py-24">
      <div className="dot-grid absolute inset-0" />

      <Container className="relative">
        <SectionHeading
          badge="Analytics"
          title="Analytics That Drive Security Decisions"
          subtitle="Turn training data into actionable intelligence with real-time dashboards and automated risk identification."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ANALYTICS_CAPABILITIES.map((cap) => {
            const Icon = iconMap[cap.icon];
            return (
              <Card key={cap.title}>
                <div className="flex items-start gap-4">
                  {Icon && (
                    <div className="shrink-0 rounded-xl bg-gradient-to-br from-accent/20 to-accent-secondary/10 p-2.5">
                      <Icon className="h-5 w-5 text-accent-light" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-white">{cap.title}</h3>
                    <p className="mt-1 text-sm text-foreground/70">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-violet-900/20">
          <Image
            src="/images/seca-resilience-analytics.png"
            alt="CyberEscape Resilience Analytics dashboard showing org health, domain averages, and scored users across identity, social engineering, data protection, network defense, threat hunting, and incident response"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </Container>
    </section>
  );
}
