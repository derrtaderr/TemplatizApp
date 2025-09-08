"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";

const platformLogos = [
  { name: "Twitter", icon: "𝕏" },
  { name: "LinkedIn", icon: "in" },
  { name: "YouTube", icon: "▶" }
];

export function FeaturesV2() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <Container>
        {/* Features Badge */}
        <div className="flex justify-start mb-8 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900/20 rounded-full border border-slate-200 dark:border-slate-800">
            <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Features
            </span>
          </div>
        </div>

        {/* Title and Description - Left Aligned, Stacked */}
        <div className="max-w-7xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-6"
          >
            Build the perfect content creation workflow
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted dark:text-muted-dark leading-relaxed max-w-3xl"
          >
            Templatiz gives you all the tools you need to systematically discover, evaluate, and recreate viral content across every platform.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Large Card 1 - Top Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 lg:row-span-2"
          >
            <div className="h-48 bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-6 flex items-center justify-center">
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
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Sync with real-time content data
            </h3>
            <p className="text-muted dark:text-muted-dark leading-relaxed">
              Connect to social platforms like LinkedIn, Twitter, and TikTok to seamlessly capture viral posts ranging from trending topics to proven engagement patterns and beyond.
            </p>
          </motion.div>

          {/* Large Card 2 - Top Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 lg:row-span-2"
          >
            <div className="h-48 bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-6 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-neutral-400 dark:text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Image Placeholder
                </p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Take actions on your content strategy
            </h3>
            <p className="text-muted dark:text-muted-dark leading-relaxed">
              Configure automated workflows that EvalOS can perform within your content library or through platform integrations, like scheduling optimized posts or updating your content templates.
            </p>
          </motion.div>
        </div>

        {/* Small Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Small Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-neutral-400 dark:text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Image Placeholder
                </p>
              </div>
            </div>
            <h3 className="text-lg font-bold text-black dark:text-white mb-3">
              Discover Top-Performing Content
            </h3>
            <p className="text-sm text-muted dark:text-muted-dark leading-relaxed">
              Why guess when you can copy success? Use our Chrome extension to instantly analyze a creator&apos;s profile on platforms like Twitter and LinkedIn. Identify their highest-performing posts, based on engagement, and pinpoint exactly what your audience wants to see.
            </p>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-neutral-400 dark:text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Image Placeholder
                </p>
              </div>
            </div>
            <h3 className="text-lg font-bold text-black dark:text-white mb-3">
              Templatize Winning Content
            </h3>
            <p className="text-sm text-muted dark:text-muted-dark leading-relaxed">
              With Templatiz, saving a post is just the beginning. Our system extracts the core structure—hooks, headlines, and calls-to-action—so you can create your own version tailored to your audience. Save these templates to your content library and reuse them to stay consistent and efficient.
            </p>
          </motion.div>

          {/* Small Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-4 flex items-center justify-center">
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
            <h3 className="text-lg font-bold text-black dark:text-white mb-3">
              YOLO Mode: Full AI Automation
            </h3>
            <p className="text-sm text-muted dark:text-muted-dark leading-relaxed">
              For advanced users, YOLO Mode lets AI run your content operation on autopilot. Once you have 50+ templates, AI writes, schedules, and optimizes your content—so you focus on engagement.
            </p>
          </motion.div>
        </div>

        {/* Tools Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Copy */}
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Works with your platforms
                </h3>
                <p className="text-muted dark:text-muted-dark leading-relaxed">
                  Integrate with all major social media platforms to capture viral content and publish optimized posts seamlessly.
                </p>
              </div>
              
              {/* Right side - Platform logos */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                {platformLogos.map((platform, index) => (
                  <div
                    key={platform.name}
                    className="flex items-center gap-3 bg-neutral-100 dark:bg-white/10 backdrop-blur-sm border border-neutral-200 dark:border-white/20 rounded-lg px-4 py-3 hover:bg-neutral-200 dark:hover:bg-white/20 transition-colors"
                  >
                    <div className="w-8 h-8 bg-neutral-200 dark:bg-white/20 rounded-lg flex items-center justify-center text-sm font-bold text-neutral-600 dark:text-white">
                      {platform.icon}
                    </div>
                    <span className="text-neutral-700 dark:text-white font-medium">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* API and Additional Features - No Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-neutral-200 dark:bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-neutral-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-black dark:text-white">API</h4>
            </div>
            <p className="text-muted dark:text-muted-dark text-sm leading-relaxed">
              EvalOS API coming soon - integrate content evaluation and optimization directly into your existing workflows and tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-neutral-200 dark:bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-neutral-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-black dark:text-white">White-label</h4>
            </div>
            <p className="text-muted dark:text-muted-dark text-sm leading-relaxed">
              Remove Templatiz branding and customize the interface to match your agency or company brand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-neutral-200 dark:bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-neutral-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-black dark:text-white">Always improving</h4>
            </div>
            <p className="text-muted dark:text-muted-dark text-sm leading-relaxed">
              EvalOS learns from your content performance and continuously optimizes scoring based on your audience engagement patterns.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 