"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { useState, useEffect } from "react";

const tabs = [
  {
    id: "extension",
    name: "Extension",
    title: "Chrome Extension",
    description: "Instantly capture viral content while browsing social platforms. Save any high-performing post with one click and automatically extract its structure for your template library.",
    image: "/template dashboard.png" // Placeholder - replace with actual extension screenshot
  },
  {
    id: "library",
    name: "Library",
    title: "Template Library",
    description: "Organize and categorize your best-performing content templates. Search, filter, and manage your viral content collection with intelligent tagging and performance metrics.",
    image: "/template dashboard.png" // Placeholder - replace with actual library screenshot
  },
  {
    id: "scheduler",
    name: "Scheduler",
    title: "Smart Scheduler",
    description: "Schedule and publish content across all your social platforms. AI-powered timing optimization ensures your posts go live when your audience is most active.",
    image: "/template dashboard.png" // Placeholder - replace with actual scheduler screenshot
  },
  {
    id: "playbook",
    name: "Playbook",
    title: "Content Playbook",
    description: "Your personalized content strategy guide. AI analyzes your industry, audience, and goals to create a custom playbook that tells you exactly what to post and when.",
    image: "/template dashboard.png" // Placeholder - replace with actual playbook screenshot
  }
];

export function PlatformDiscovery() {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-rotate tabs every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <Container>
        {/* Explore Badge */}
        <div className="flex justify-start mb-8 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900/20 rounded-full border border-slate-200 dark:border-slate-800">
            <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Explore
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="max-w-7xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-6"
          >
            Discover the Templatiz platform
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-start">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Full Width Image */}
        <div className="max-w-7xl mx-auto">
          {/* Static Gradient Background Container */}
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-8 shadow-2xl">
            {/* Animated Image Container */}
            <motion.div
              key={`image-${activeTab}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
            >
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
            

          </div>
        </div>
      </Container>
    </section>
  );
} 