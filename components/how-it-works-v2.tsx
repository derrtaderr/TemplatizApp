"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const HowItWorksV2 = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      number: "01.",
      title: "Capture with Chrome extension",
      description: "Save any viral post instantly while browsing social platforms."
    },
    {
      id: 2,
      number: "02.",
      title: "Build your template library",
      description: "Organize and categorize the best-performing content for reuse."
    },
    {
      id: 3,
      number: "03.",
      title: "Schedule & post automatically",
      description: "Queue optimized content across all your social platforms."
    },
    {
      id: 4,
      number: "04.",
      title: "YOLO Mode activation",
      description: "Let AI automatically write, post your highest-scoring templates."
    },
    {
      id: 5,
      number: "05.",
      title: "EvalOS intelligent scoring",
      description: "Get real-time content evaluation before you publish."
    }
  ];

  return (
    <div className="w-full mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8">
      {/* How it Works Badge */}
      <div className="flex justify-start mb-8 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900/20 rounded-full border border-slate-200 dark:border-slate-800">
          <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            How it works
          </span>
        </div>
      </div>

      {/* Title and Description Layout */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Title */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight">
              An end-to-end solution for viral content creation
            </h2>
          </div>

          {/* Right Side: Description */}
          <div>
            <p className="text-lg text-muted dark:text-muted-dark leading-relaxed">
              With Templatiz, creators can effortlessly capture high-performing posts, evaluate them systematically, and recreate viral content through seamless AI-powered workflows.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Steps Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Interactive Steps */}
          <div className="space-y-4">
            {steps.map((step) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeStep === step.id
                    ? 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 shadow-lg'
                    : 'bg-neutral-50 dark:bg-neutral-800/50 border-neutral-100 dark:border-neutral-800 opacity-60 hover:opacity-80'
                }`}
                whileHover={{ scale: activeStep === step.id ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <span className={`text-sm font-medium ${
                    activeStep === step.id 
                      ? 'text-slate-500' 
                      : 'text-neutral-400'
                  }`}>
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 ${
                      activeStep === step.id
                        ? 'text-black dark:text-white'
                        : 'text-neutral-600 dark:text-neutral-400'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      activeStep === step.id
                        ? 'text-muted dark:text-muted-dark'
                        : 'text-neutral-500 dark:text-neutral-500'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right Side: Video Placeholder */}
          <div className="relative">
            <motion.div
              key={activeStep}
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
                    Step {activeStep} Demo Video
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    {steps.find(s => s.id === activeStep)?.title}
                  </p>
                </div>
              </div>
              
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-50/50 dark:to-neutral-900/50 pointer-events-none" />
              
              {/* Step indicator in corner */}
              <div className="absolute top-4 left-4 bg-black/20 dark:bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-xs font-medium text-white dark:text-white">
                  {steps.find(s => s.id === activeStep)?.number}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}; 