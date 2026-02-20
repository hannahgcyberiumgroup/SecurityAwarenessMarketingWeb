import type { NavLink, ValueProp, FAQItem, Feature, RoleBenefit } from "@/types";

export const SITE_NAME = "CyberEscape";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Benefits", href: "/benefits" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    icon: "Gamepad2",
    title: "Engagement Over Compliance",
    description:
      "Escape-room gameplay replaces click-through slideshows. Employees actually want to play.",
  },
  {
    
    icon: "BarChart3",
    title: "Measurable Resilience Score",
    description:
      "6-domain security resilience score per employee, team, and org. Track improvement over time.",
    href: "/benefits#resilience-score",
  },
  {
    icon: "Users",
    title: "Real-Time Collaboration",
    description:
      "Built-in voice, chat, and live telemetry. Teams solve challenges together, facilitators observe in real time.",
  },
  {
    icon: "Shield",
    title: "Enterprise-Grade Security",
    description:
      "Tenant-isolated data, RBAC, audit logs with 7-year retention, and GDPR compliance — built for regulated industries.",
  },
  {
    icon: "Target",
    title: "Actionable Analytics",
    description:
      "Risk heatmaps, watchlists, and per-user remediation recommendations turn training data into security decisions.",
  },
  {
    icon: "Route",
    title: "Campaign-Based Learning",
    description:
      "Multi-step campaigns unlock progressively, building skills sequentially across training scenarios.",
  },
];

export const FEATURES: Feature[] = [
  {
    title: "For Security Leaders",
    description:
      "Get the visibility you need to prove ROI and drive security culture from the top down.",
    items: [
      "Resilience Score Dashboard across 6 security domains",
      "Risk heatmaps with group-by-domain breakdowns",
      "Automatic watchlists flagging high-risk and champion employees",
      "Engagement analytics proving training ROI for budget justification",
      "Compliance-ready audit logs with 7-year retention",
      "CSV and PDF reports on demand",
    ],
  },
  {
    title: "For Training Managers",
    description:
      "Design, launch, and monitor training sessions with powerful tools built for scale.",
    items: [
      "Create facilitated, solo, or peer group sessions from one dashboard",
      "Campaign builder for multi-step progressive training paths",
      "Real-time monitoring with live telemetry during active sessions",
      "Visual content editor with draft-to-publish workflow",
      "One-click email invitations with tracking",
      "Exportable session and campaign reports",
    ],
  },
  {
    title: "For Employees",
    description:
      "Participate in gamified challenges that make security knowledge second nature.",
    items: [
      "Access a wide variety of themed, hands-on gamemodes",
      "Educational debriefs explaining real-world security principles",
      "Progressive campaigns that build skills from fundamentals to advanced",
      "Built-in voice and chat for team coordination",
      "Solo practice mode available anytime",
      "Real-time notifications for invites, unlocks, and results",
    ],
  },
];

export const ANALYTICS_CAPABILITIES = [
  {
    icon: "Activity",
    title: "Org Health Pulse",
    description: "Organization-wide averages per domain with total scored users",
  },
  {
    icon: "Grid3x3",
    title: "Risk Heatmap",
    description: "Group × domain matrix color-coded from green to red",
  },
  {
    icon: "TrendingUp",
    title: "Engagement Scatter",
    description: "Sessions played vs. resilience score — proves training ROI",
  },
  {
    icon: "AlertTriangle",
    title: "Watchlist",
    description: "Auto-flagged high-risk and champion employees with recommendations",
  },
  {
    icon: "Radar",
    title: "Domain Radar Chart",
    description: "Per-user spider chart showing strengths across all 6 domains",
  },
  {
    icon: "LineChart",
    title: "Score History",
    description: "12-week trend line per user showing improvement trajectory",
  },
];

export const CASE_STUDY = {
  company: "TechBridge Solutions",
  description: "How a financial services firm turned compliance dread into measurable security culture in 12 months.",
  problem:
    "TechBridge's annual cybersecurity compliance training was dreaded, clicked through, and forgotten. Phishing click rates sat at 34%, well above industry benchmarks.",
  solution:
    "They replaced their legacy LMS with short 3-5 minute scenario-based challenges, leaderboards, team competitions, and a points system with real incentives, delivered monthly instead of annually.",
  results:
    "After 12 months, phishing click rates fell to 8%, completion jumped from 55% to 94%, and incident reporting increased by 60% as employees engaged voluntarily rather than just meeting a deadline.",
  stats: [
    { label: "Phishing Click Rate", before: "34%", after: "8%", description: "reduction" },
    { label: "Incident Reporting", value: "60%", description: "increase" },
    { label: "Training Completion", before: "55%", after: "94%", description: "improvement" },
  ],
  closing:
    "The CISO was able to demonstrate measurable cultural change to the board, which helped secure budget for broader security investment the following year.",
};

export const PRICING = {
  monthly: 2,
  annualDiscount: 0.2,
  trialDays: 14,
  trialUsers: 5,
  currency: "$",
} as const;

export const PRICING_FEATURES = {
  trial: [
    "Full platform access",
    "All training scenarios",
    "Team collaboration",
    "Basic analytics",
  ],
  pro: [
    "Everything in Free Trial",
    "Unlimited users",
    "Advanced analytics & reporting",
    "Campaign builder",
    "Priority support",
    "RBAC & audit logs",
    "GDPR compliance tools",
  ],
} as const;

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is CyberEscape?",
    answer:
      "CyberEscape is an enterprise cybersecurity awareness training platform that replaces passive slide-based training with gamified escape-room-style challenges. Employees face realistic security scenarios in timed, team-based sessions that build real, measurable security skills.",
    category: "general",
  },
  {
    question: "How does gamified training work?",
    answer:
      "Instead of clicking through slideshows, employees participate in timed escape-room challenges where they classify data, respond to security scenarios, and spot threats — all while collaborating with teammates via built-in voice and chat. Points, streaks, and leaderboards drive engagement.",
    category: "general",
  },
  {
    question: "What security topics does the platform cover?",
    answer:
      "The platform covers 6 security domains: Identity Security, Social Engineering, Data Protection, Network Defense, Threat Hunting, and Incident Response. Training scenarios are designed to build practical skills across all these areas.",
    category: "general",
  },
  {
    question: "How does pricing work?",
    answer:
      "CyberEscape uses simple per-seat pricing at $2 per user per month. Annual commitments receive a 20% discount. We also offer a 14-day free trial for up to 5 users so you can experience the platform before committing.",
    category: "pricing",
  },
  {
    question: "What's included in the free trial?",
    answer:
      "The free trial gives you full platform access for 14 days with up to 5 users. You get access to all training scenarios, team collaboration features, and basic analytics — no credit card required.",
    category: "pricing",
  },
  {
    question: "Are there discounts for large teams?",
    answer:
      "Yes — annual commitments receive a 20% discount automatically. For enterprise deployments with large user counts, contact our sales team to discuss volume pricing.",
    category: "pricing",
  },
  {
    question: "Is our data secure?",
    answer:
      "Absolutely. CyberEscape is built with enterprise-grade security: tenant-isolated data, role-based access control (RBAC), and immutable append-only audit logs with 7-year retention. The platform is designed for regulated industries.",
    category: "security",
  },
  {
    question: "Is CyberEscape GDPR compliant?",
    answer:
      "Yes. The platform includes full GDPR Article 15 data export and right-to-erasure support. All data processing is transparent, and compliance tools are built directly into the admin dashboard.",
    category: "security",
  },
  {
    question: "What are the system requirements?",
    answer:
      "CyberEscape runs entirely in the browser — no software installation required. It works on all modern browsers (Chrome, Firefox, Safari, Edge) on desktop and tablet devices.",
    category: "technical",
  },
  {
    question: "Can CyberEscape integrate with our existing systems?",
    answer:
      "The platform is designed as a standalone SaaS solution with enterprise SSO support. Contact us to discuss specific integration requirements for your organization.",
    category: "technical",
  },
];

export const ROLE_BENEFITS: RoleBenefit[] = [
  {
    id: "ciso",
    title: "CISO",
    icon: "Shield",
    bullets: [
      "Org-wide resilience scores across 6 security domains",
      "Identify high-risk employees before incidents happen",
      "Report measurable security culture change to the board",
    ],
    headline: "Strategic visibility into your organisation's security posture",
    description:
      "Give security leadership the data needed to make decisions, justify budget, and demonstrate progress over time.",
    items: [
      "Resilience Score Dashboard aggregated across 6 domains: Identity, Social Engineering, Data Protection, Network Defense, Threat Hunting, and Incident Response",
      "Risk heatmap showing group-by-domain breakdowns at a glance",
      "Watchlist automatically flags high-risk employees and surfaces remediation recommendations",
      "Engagement analytics proving training ROI for board and budget presentations",
      "Compliance-ready audit logs with 7-year retention",
      "On-demand CSV and PDF reports covering sessions, campaigns, and resilience score trends",
    ],
    image: {
      src: "/images/seca-resilience-analytics.png",
      alt: "CyberEscape Resilience Analytics dashboard showing org health and domain averages",
    },
  },
  {
    id: "grc-manager",
    title: "GRC Manager",
    icon: "ClipboardCheck",
    bullets: [
      "Audit-ready logs with 7-year retention",
      "GDPR data export and right-to-erasure built in",
      "Track compliance coverage across every team",
    ],
    headline: "Compliance coverage you can prove, not just claim",
    description:
      "Built for regulated industries from day one, with the audit trail and controls to back it up.",
    items: [
      "Immutable append-only audit logs covering all user and admin activity",
      "7-year log retention to meet regulatory requirements",
      "GDPR Article 15 data export and right-to-erasure support",
      "Role-based access control for secure admin delegation",
      "Audit Extract and GDPR Export reports generated on demand",
      "Training completion tracking per user, team, and campaign for compliance reporting",
    ],
    image: {
      src: "/images/seca-user-management.png",
      alt: "CyberEscape user management interface showing roles, status, and admin controls",
    },
  },
  {
    id: "training-manager",
    title: "HR / Training Manager",
    icon: "Users",
    bullets: [
      "Replace annual slideshows with short monthly challenges",
      "Build progressive campaigns that unlock automatically",
      "Monitor live sessions and export results on demand",
    ],
    headline: "Training programmes that actually get completed",
    description:
      "Tools to design, schedule, and track security training at scale, without chasing employees to finish.",
    items: [
      "Campaign builder for multi-step training paths that unlock automatically on completion",
      "Create facilitated team sessions, solo practice, or peer group sessions from one dashboard",
      "Real-time monitoring with live telemetry during active sessions",
      "Visual content editor with a draft-to-publish workflow for managing training content",
      "One-click email invitations with delivery tracking per session",
      "Exportable session summaries and campaign progress reports",
    ],
    image: {
      src: "/images/seca-gamemodes.png",
      alt: "CyberEscape games browser showing available training scenarios",
    },
  },
  {
    id: "employee",
    title: "Employee",
    icon: "Gamepad2",
    bullets: [
      "Short escape-room challenges instead of hour-long slideshows",
      "Compete with teammates and climb the leaderboard",
      "Practice anytime with solo gamemodes",
    ],
    headline: "Security training that feels nothing like training",
    description:
      "Escape-room challenges that make security knowledge second nature.",
    items: [
      "Access a wide variety of themed, hands-on game modes",
      "Earn points, build streaks, and compete on leaderboards",
      "Built-in voice and chat for team coordination during gameplay",
      "Progressive campaigns that build skills from fundamentals to advanced scenarios",
      "Educational debriefs after every challenge explaining real-world security principles",
      "Solo practice mode available anytime without a facilitator",
    ],
    image: {
      src: "/images/seca-resilience_score.png",
      alt: "CyberEscape My Resilience Score dashboard showing personal domain scores and score history",
    },
  },
];
