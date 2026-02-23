export interface ValueProp {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "pricing" | "security" | "technical";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface RoleBenefit {
  id: string;
  title: string;
  icon: string;
  bullets: [string, string, string];
  headline: string;
  description: string;
  items: string[];
  image: { src: string; alt: string };
}

export interface Pillar {
  icon: string;
  title: string;
  description: string;
  link?: { text: string; href: string };
}

export interface ResilienceDomain {
  icon: string;
  name: string;
  description: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
}
