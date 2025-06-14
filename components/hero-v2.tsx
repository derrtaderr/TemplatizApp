"use client";

import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";

export const HeroV2 = () => {
  return (
    <div className="min-h-screen pt-20 md:pt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.h1
              initial={{
                y: 40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.5,
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight"
            >
              <Balancer>
                Automate viral content creation with AI
              </Balancer>
            </motion.h1>
            
            <motion.p
              initial={{
                y: 40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: 0.2,
              }}
              className="text-lg md:text-xl text-muted dark:text-muted-dark leading-relaxed"
            >
              <Balancer>
                Templatiz is the first Content Operating System that discovers, evaluates, and recreates viral content using AI—so you never run out of ideas that actually work.
              </Balancer>
            </motion.p>

            <motion.div
              initial={{
                y: 40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: 0.4,
              }}
              className="space-y-4"
            >
              {/* Button with gradient background - matching screenshot layout */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  {/* Gradient background layer underneath */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 rounded-full opacity-75"></div>
                  <Button 
                    as={Link} 
                    href="/waitlist"
                    className="relative text-lg px-8 py-4 h-auto bg-neutral-900 hover:bg-black border-0"
                  >
                    Start Creating
                  </Button>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted dark:text-muted-dark">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No credit card required
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Video Placeholder */}
          <motion.div
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
              delay: 0.6,
            }}
            className="relative"
          >
            <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 flex items-center justify-center relative overflow-hidden">
              {/* Video Placeholder */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-neutral-200 dark:bg-neutral-700 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-neutral-400 dark:text-neutral-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    Demo Video Coming Soon
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    See Templatiz in action
                  </p>
                </div>
              </div>
              
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-50/50 dark:to-neutral-900/50 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 