"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HighlightsV2 = () => {
  return (
    <div className="w-full mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8">
      {/* Highlights Badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 dark:bg-pink-900/20 rounded-full border border-pink-200 dark:border-pink-800">
          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
          <span className="text-sm font-medium text-pink-700 dark:text-pink-300">
            Highlights
          </span>
        </div>
      </div>

      {/* Main Title and Description */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
          The complete platform for AI-native content creation
        </h2>
        <p className="text-lg md:text-xl text-muted dark:text-muted-dark leading-relaxed">
          Templatiz is designed for creators who want to systematically turn viral content into their own high-performing posts while maintaining authentic voice and brand consistency.
        </p>
      </div>

      {/* Three Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1: Built for content intelligence */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          {/* Image Placeholder */}
          <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-6 flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-neutral-400 dark:text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Image Placeholder
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">
            Built for content intelligence
          </h3>
          <p className="text-sm text-muted dark:text-muted-dark leading-relaxed">
            AI-powered evaluation system that scores content across four critical dimensions before you publish.
          </p>
        </motion.div>

        {/* Card 2: Designed for creators */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          {/* Image Placeholder */}
          <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-6 flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-neutral-400 dark:text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Image Placeholder
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">
            Designed for creators
          </h3>
          <p className="text-sm text-muted dark:text-muted-dark leading-relaxed">
            Capture, evaluate, and recreate viral content easily, even without deep marketing expertise.
          </p>
        </motion.div>

        {/* Card 3: Engineered for consistency */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          {/* Image Placeholder */}
          <div className="aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-xl mb-6 flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-neutral-400 dark:text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Image Placeholder
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-black dark:text-white mb-3">
            Engineered for consistency
          </h3>
          <p className="text-sm text-muted dark:text-muted-dark leading-relaxed">
            Maintain your authentic voice while systematically optimizing for engagement and platform algorithms.
          </p>
        </motion.div>
      </div>
    </div>
  );
}; 