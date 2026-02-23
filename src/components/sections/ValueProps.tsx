import {
  Gamepad2,
  BarChart3,
  Users,
  Shield,
  Target,
  Route,
} from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInSection from "@/components/ui/FadeInSection";
import { VALUE_PROPS, VALUE_PROPS_SECTION } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Gamepad2,
  BarChart3,
  Users,
  Shield,
  Target,
  Route,
};

export default function ValueProps() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          badge={VALUE_PROPS_SECTION.badge}
          title={VALUE_PROPS_SECTION.title}
          subtitle={VALUE_PROPS_SECTION.subtitle}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS.map((prop, i) => {
            const Icon = iconMap[prop.icon];
            return (
              <FadeInSection key={prop.title} delay={(i % 3) * 100}>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1.5">
                {Icon && (
                  <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-accent/20 to-accent-secondary/10 p-3">
                    <Icon className="h-6 w-6 text-accent-light" />
                  </div>
                )}
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {prop.title}
                </h3>
                <p className="text-sm text-foreground/70">{prop.description}</p>
                {prop.href && (
                  <Link
                    href={prop.href}
                    className="mt-3 inline-block text-xs font-medium text-accent-light hover:text-white transition-colors"
                  >
                    Learn more →
                  </Link>
                )}
              </Card>
              </FadeInSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
