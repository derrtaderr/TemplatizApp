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
      "Limited AI content generation",
      "Manual posting to Twitter & LinkedIn",
      "Save up to 10 templates",
      "Basic Chrome Extension",
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
    description: "For creators ready to streamline their content workflow and grow consistently.",
    features: [
      "Unlimited AI-assisted content",
      "Auto-scheduling & content boosting",
      "Unlimited templates",
      "Content Playbook",
      "Basic analytics & streak tracking",
      "Limited repurposing (LinkedIn → Twitter only)",
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
    description: "For creators and marketers who want to automate their entire content workflow.",
    features: [
      "Everything in Starter, plus:",
      "Advanced AI analytics",
      "Full multi-platform repurposing",
      "Full Content Matrix",
      "AI auto-tags templates",
      "Priority support",
      "YOLO Mode (Fully Automated Content Scheduling)",
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
    description: "For teams and agencies that need custom solutions and dedicated support.",
    features: [
      "Everything in Professional, plus:",
      "Team Collaboration",
      "Shared Template Library",
      "Custom AI Workflows",
      "Strategy Sessions",
      "Private Coaching",
    ],
    featured: false,
    cta: "Contact Us",
    onClick: () => {},
  },
];
