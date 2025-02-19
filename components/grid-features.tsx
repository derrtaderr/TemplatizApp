import { cn } from "@/lib/utils";
import {
  IconBookmark,
  IconMessageCircle2,
  IconTemplate,
  IconCloud,
  IconChartBar,
  IconUsers,
  IconClock,
  IconArrowUpRight,
} from "@tabler/icons-react";

export const GridFeatures = () => {
  const features = [
    {
      title: "Discover Top-Performing Content",
      description:
        "Why guess when you can copy success? Use our Chrome extension to instantly analyze a creator’s profile on platforms like Twitter and LinkedIn. Identify their highest-performing posts, based on engagement, and pinpoint exactly what your audience wants to see.",
      icon: <IconBookmark />,
    },
    {
      title: "Templatize Winning Content",
      description:
        "With Templatiz, saving a post is just the beginning. Our system extracts the core structure—hooks, headlines, and calls-to-action—so you can create your own version tailored to your audience. Save these templates to your content library and reuse them to stay consistent and efficient",
      icon: <IconTemplate />,
    },
    {
      title: "AI-Powered Content Creation",
      description:
        "Writing takes time, but not with Templatiz. AI fills your templates with personalized content, directly targeting your audience and aligned with your brand’s message. Generate multiple variations and edit on the fly—no more blank screens or writer’s block.",
      icon: <IconMessageCircle2 />,
    },
    {
      title: "Effortless Multi-Platform Posting",
      description: "Publish directly to LinkedIn, Twitter, and beyond. Schedule posts in advance and sync your content strategy seamlessly across platforms—no need for multiple scheduling tools.",
      icon: <IconCloud />,
    },
    {
      title: "Boost Your Top Posts Automatically",
      description: "What happens after a post takes off? With Templatiz, if a post hits a certain threshold of engagement (likes, retweets, or shares), our system can automatically repost or retweet it at the optimal time to maximize growth.",
      icon: <IconChartBar />,
    },
    {
      title: "Content Playbook AI-Powered Strategy",
      description:
        "Most creators post inconsistently because they don’t have a plan. Templatiz builds your personalized Content Playbook based on your industry, ICP, and offer—so you always know what to post.",
      icon: <IconUsers />,
    },
    {
      title: "YOLO Mode. Full AI Automation",
      description:
        "For advanced users, YOLO Mode lets AI run your content operation on autopilot. Once you have 50+ templates, AI writes, schedules, and optimizes your content—so you focus on engagement.",
      icon: <IconClock />,
    },
    {
      title: "Blog-to-Video: Repurpose & Expand Reach (Coming Soon)",
      description: "Turn blogs into Twitter threads, LinkedIn posts, and AI-narrated videos. Templatiz extracts key insights, creates platform-optimized content, and clones your voice for seamless AI-generated videos.",
      icon: <IconArrowUpRight />,
    },
  ];

  return (
    <div className="w-full py-20">
      <div className="text-center mb-16">
        <h2 className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
        Your Complete Content Operating System
        </h2>
        <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
        Discover, templatize, create, and publish—everything you need to dominate LinkedIn, Twitter, and beyond in one streamlined platform. No more scattered tools or wasted time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
