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
      title: "Save and Personalize Viral Posts",
      description:
        "Instantly capture inspiring posts with our Chrome extension. AI adapts them to your brand’s unique voice and target audience, making them ready to publish in minutes.",
      icon: <IconBookmark />,
    },
    {
      title: "Effortless Multi-Platform Posting",
      description:
        "Schedule and publish content seamlessly across LinkedIn, Twitter, and YouTube. Manage your entire content workflow from one platform with minimal effort.",
      icon: <IconTemplate />,
    },
    {
      title: "AI-Powered Templates",
      description:
        "Build a library of proven templates tailored to your brand voice. Our AI ensures each post resonates with your audience for maximum impact.",
      icon: <IconMessageCircle2 />,
    },
    {
      title: "Create Once, Repurpose Everywhere",
      description: "Write your blog directly in Templatiz, and let our AI repurpose it into LinkedIn posts, Twitter threads, YouTube Shorts, and long-form videos—all while ensuring your brand’s voice stays consistent.",
      icon: <IconCloud />,
    },
    {
      title: "Your Voice in Every Video",
      description: "Use our voice cloning technology to add personalized voiceovers to AI-generated videos. Create YouTube Shorts and long-form videos that sound just like you.",
      icon: <IconChartBar />,
    },
    {
      title: "Post with Confidence",
      description:
        "Plan and schedule your posts with ease. Maintain a consistent presence and eliminate the stress of last-minute content creation.",
      icon: <IconUsers />,
    },
    {
      title: "Learn What Works",
      description:
        "Build your strategy with data. Use insights from high-performing templates to refine your content and grow your authority.",
      icon: <IconClock />,
    },
    {
      title: "Scale Your Content Effortlessly",
      description: "From personal brands to company updates, create a complete content ecosystem that grows with your audience and business goals.",
      icon: <IconArrowUpRight />,
    },
  ];

  return (
    <div className="w-full py-20">
      <div className="text-center mb-16">
        <h2 className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
          Everything You Need to Create Better Content
        </h2>
        <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
        Streamline your content creation process with powerful tools designed to help you create, manage, and scale your social media presence while maintaining your brand’s authenticity.
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
