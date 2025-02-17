export type Tier = {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
  onClick: () => void;
};

export const tiers: Tier[] = [
  {
    name: "Free",
    id: "tier-free",
    href: "#",
    priceMonthly: "$0/mo",
    description: "For new creators who want to explore AI-assisted content workflows.",
    features: [
      "5 AI-assisted content generations/month",
      "Manual scheduling (no automation)",
      "Save up to 10 templates in the Template Library",
      "Basic Chrome Extension (capture up to 5 posts/month)",
    ],
    featured: false,
    cta: "Get Started",
    onClick: () => {},
  },
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    priceMonthly: "$19/mo",
    description: "For solopreneurs and small teams looking to scale their content strategy.",
    features: [
      "Everything in Free Plan, plus:",
      "Unlimited AI-assisted content generation",
      "Auto-scheduling & content boosting (Twitter & LinkedIn)",
      "Unlimited templates & full template management",
      "Basic analytics: Engagement rates, best times to post",
      "Streak tracking & gamification for consistency",
      "Limited repurposing (LinkedIn <--> Twitter only)",
    ],
    featured: false,
    cta: "Get Started",
    onClick: () => {},
  },
  {
    name: "Professional",
    id: "tier-professional",
    href: "#",
    priceMonthly: "$49/mo",
    description: "For creators, founders, and marketers who want to systemize content creation, grow engagement, and automate their workflow.",
    features: [
      "Everything in Starter Plan, plus:",
      "Advanced AI analytics & engagement tracking",
      "AI-assisted content repurposing between platforms",
      "Full access to the Content Matrix",
      "AI auto-tags templates & suggests post ideas",
      "Early access to new features",
      "Priority support",
    ],
    featured: true,
    cta: "Get Started",
    onClick: () => {},
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "Contact Us",
    description: "For teams and organizations that need advanced features, custom integrations, and dedicated support.",
    features: [
      "Everything in Professional Plan, plus:",
      "Custom AI model training for your brand voice",
      "Advanced team collaboration features",
      "Custom integrations & API access",
      "Dedicated account manager",
      "Custom analytics & reporting",
      "SLA & priority support",
      "Security & compliance features",
    ],
    featured: false,
    cta: "Contact Us",
    onClick: () => {},
  },
];
