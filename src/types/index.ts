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

export interface Feature {
  title: string;
  description: string;
  items: string[];
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
