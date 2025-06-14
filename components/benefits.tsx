"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const Benefits = () => {
  const [activeBenefit, setActiveBenefit] = useState(1);

  const benefits = [
    {
      id: 1,
      number: "01.",
      title: "Personalized content",
      description: "EvalOS learns your brand voice and audience preferences to provide customized content scoring and optimization recommendations."
    },
    {
      id: 2,
      number: "02.",
      title: "Instant optimization",
      description: "Get real-time content evaluation and improvement suggestions before you publish across any platform."
    },
    {
      id: 3,
      number: "03.",
      title: "Authentic & on-brand",
      description: "Maintain your unique voice while systematically optimizing for engagement and platform algorithms."
    },
    {
      id: 4,
      number: "04.",
      title: "Smart scaling",
      description: "Automatically expand your content library and posting frequency as your template collection grows."
    }
  ];

  return (
    <div className="w-full mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8">
      {/* Benefits Badge */}
      <div className="flex justify-start mb-8 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900/20 rounded-full border border-slate-200 dark:border-slate-800">
          <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Benefits
          </span>
        </div>
      </div>

      {/* Title and Description Layout */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Title */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight">
              Works like the best content creators
            </h2>
          </div>

          {/* Right Side: Description */}
          <div>
            <p className="text-lg text-muted dark:text-muted-dark leading-relaxed">
              Templatiz is the complete Content Operating System for systematic viral content creation and optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Benefits Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Video Placeholder */}
          <div className="relative">
            <motion.div
              key={activeBenefit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center relative overflow-hidden"
            >
              {/* Video Placeholder */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-neutral-200 dark:bg-neutral-700 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-neutral-400 dark:text-neutral-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    Benefit {activeBenefit} Demo Video
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    {benefits.find(b => b.id === activeBenefit)?.title}
                  </p>
                </div>
              </div>
              
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-50/50 dark:to-neutral-900/50 pointer-events-none" />
              
              {/* Benefit indicator in corner */}
              <div className="absolute top-4 left-4 bg-black/20 dark:bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-xs font-medium text-white dark:text-white">
                  {benefits.find(b => b.id === activeBenefit)?.number}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Interactive Benefits */}
          <div className="space-y-4">
            {benefits.map((benefit) => (
              <motion.button
                key={benefit.id}
                onClick={() => setActiveBenefit(benefit.id)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeBenefit === benefit.id
                    ? 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 shadow-lg'
                    : 'bg-neutral-50 dark:bg-neutral-800/50 border-neutral-100 dark:border-neutral-800 opacity-60 hover:opacity-80'
                }`}
                whileHover={{ scale: activeBenefit === benefit.id ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <span className={`text-sm font-medium ${
                    activeBenefit === benefit.id 
                      ? 'text-slate-500' 
                      : 'text-neutral-400'
                  }`}>
                    {benefit.number}
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 ${
                      activeBenefit === benefit.id
                        ? 'text-black dark:text-white'
                        : 'text-neutral-600 dark:text-neutral-400'
                    }`}>
                      {benefit.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      activeBenefit === benefit.id
                        ? 'text-muted dark:text-muted-dark'
                        : 'text-neutral-500 dark:text-neutral-500'
                    }`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 