export type Tier = {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  priceYearly: string;
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
    priceYearly: "$0/yr",
    description: "For new creators who want to explore AI-assisted content workflows.",
    features: [
      "5 AI-assisted content generations/month",
      "Post directly to Twitter & LinkedIn (manual posting, no scheduling)",
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
    priceMonthly: "$29/mo",
    priceYearly: "$290/yr",
    description: "For solopreneurs and small teams looking to scale their content strategy.",
    features: [
      "Everything in Free Plan, plus:",
      "Unlimited AI-assisted content generation",
      "Auto-scheduling & content boosting (Twitter & LinkedIn)",
      "Unlimited templates & full template management",
      "Basic analytics: Engagement rates, best times to post",
      "Streak tracking for consistency",
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
    priceMonthly: "$59/mo",
    priceYearly: "$590/yr",
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
    priceMonthly: "Custom Pricing",
    priceYearly: "Custom Pricing",
    description: "For teams, agencies, and high-volume content creators.",
    features: [
      "Everything in Professional Plan, plus:",
      "Team collaboration (multiple users, permissions)",
      "Shared content library & template management",
      "Custom AI workflows tailored to your brand",
      "Custom onboarding & strategy sessions",
      "Private coaching & content optimization audits",
    ],
    featured: false,
    cta: "Contact Us",
    onClick: () => {},
  },
];
