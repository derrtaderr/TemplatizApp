"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

export const Advantages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const advantages = [
    {
      id: 1,
      title: "Works across platforms",
      description: "Easily capture viral content from LinkedIn, Twitter, TikTok, and Instagram, then optimize and publish across all channels with consistent brand voice."
    },
    {
      id: 2,
      title: "Smart by default",
      description: "EvalOS automatically scores content quality across four evaluation layers, ensuring every post is optimized before it goes live."
    },
    {
      id: 3,
      title: "Enterprise-grade intelligence",
      description: "AI-powered evaluation prevents off-brand content and maintains professional standards while maximizing engagement potential."
    },
    {
      id: 4,
      title: "Systematic growth",
      description: "Build your content library strategically with templates that compound over time, creating predictable audience growth."
    },
    {
      id: 5,
      title: "Zero guesswork",
      description: "Real-time content scoring eliminates the \"post and pray\" mentality, giving you confidence in every piece of content you publish."
    }
  ];

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const cardWidth = (containerWidth - 64) / 3; // (100% - 4rem gaps) / 3 cards
      const scrollPosition = index * (cardWidth + 32); // card width + gap
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const scrollLeft = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(advantages.length - 3, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  return (
    <div className="w-full mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8">
      {/* Advantages Badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900/20 rounded-full border border-slate-200 dark:border-slate-800">
          <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Advantages
          </span>
        </div>
      </div>

      {/* Centered Title */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight"
        >
          Unlock the power of AI-native content creation
        </motion.h2>
      </div>

      {/* Scrollable Cards Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Cards Container */}
        <div className="overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[calc((100%-4rem)/3)] bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
              {/* Image Placeholder */}
              <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-neutral-400 dark:text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Image Placeholder
                  </p>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                {advantage.title}
              </h3>
              <p className="text-sm text-muted dark:text-muted-dark leading-relaxed">
                {advantage.description}
              </p>
                         </motion.div>
           ))}
          </div>
        </div>

        {/* Navigation Buttons - Below Cards */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full border transition-all duration-300 ${
              currentIndex === 0
                ? 'bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-400 cursor-not-allowed'
                : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            disabled={currentIndex >= advantages.length - 3}
            className={`p-3 rounded-full border transition-all duration-300 ${
              currentIndex >= advantages.length - 3
                ? 'bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-400 cursor-not-allowed'
                : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}; 