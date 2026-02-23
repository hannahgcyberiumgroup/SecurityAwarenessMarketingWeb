import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/ContactForm";
import { CONTACT_PAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the CyberEscape team. Request a demo, ask about pricing, or discuss your security training needs.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  MessageSquare,
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              {CONTACT_PAGE.title}
            </h1>
            <p className="mt-4 text-lg text-foreground">
              {CONTACT_PAGE.intro}
            </p>

            <div className="mt-10 space-y-6">
              {CONTACT_PAGE.contacts.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/10 p-2">
                      {Icon && <Icon className="h-5 w-5 text-accent-light" />}
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{item.label}</h3>
                      <p className="mt-1 text-sm text-foreground">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
