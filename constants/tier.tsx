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
    name: "Basic",
    id: "tier-basic",
    href: "#",
    priceMonthly: "$10/mo",
    priceYearly: "$100/yr",
    description: "Ideal for individuals starting their content journey.",
    features: [
      "50 AI-generated templates/month (LinkedIn or Twitter)",
      "AI-powered templatization tailored to brand voice",
      "Access to the Template Library to manage saved templates",
      "Manual scheduling (no automation)",
    ],
    featured: false,
    cta: "Get Started",
    onClick: () => {},
  },
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    priceMonthly: "$25/mo",
    priceYearly: "$250/yr",
    description: "For solopreneurs and small teams looking to improve consistency and performance.",
    features: [
      "Everything in the Basic Plan, plus:",
      "Scheduling and automated posting for LinkedIn and Twitter",
      "Basic analytics: Engagement rates, best times to post",
      "Streak tracking with motivational reminders",
      "Ability to repurpose between LinkedIn and Twitter",
    ],
    featured: false,
    cta: "Get Started",
    onClick: () => {},
  },
  {
    name: "Professional",
    id: "tier-professional",
    href: "#",
    priceMonthly: "$50/mo",
    priceYearly: "$500/yr",
    description: "For small businesses and content creators aiming to scale their presence across platforms.",
    features: [
      "Everything in the Starter Plan, plus:",
      "Advanced analytics and multi-platform insights",
      "Content repurposing across all platforms",
      "Full access to the Content Suite",
      "AI-generated blog posts and articles",
      "AI-powered video scripts for YouTube",
      "AI voiceovers for video content",
      "Team collaboration tools (up to 5 users)",
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
    priceYearly: "Contact Us",
    description: "Best for big fortune 500 companies.",
    features: [
      "Everything in professional, plus",
      "500K API requests per day",
      "Access to super advanced API endpoints",
      "Email support within 12 hours",
      "Private Community access",
      "Monthly retreats",
      "Self hosting options",
      "Private infrastructure",
      "On-Prem deployments",
      "I retweet your tweets personally",
    ],
    featured: false,
    cta: "Contact Us",
    onClick: () => {},
  },
];
