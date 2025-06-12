import { Background } from "@/components/background";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { WhitepaperForm } from "@/components/whitepaper-form";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Download the EvalOS Whitepaper | Templatiz",
  description:
    "Learn how Templatiz predicts platform changes before they happen. Download our comprehensive whitepaper on EvalOS and discover how AI adapts to algorithm changes in real-time.",
  openGraph: {
    title: "Download the EvalOS Whitepaper | Templatiz",
    description: "Learn how Templatiz predicts platform changes before they happen. Download our comprehensive whitepaper on EvalOS.",
    images: ["https://templatiz.io/hero.png"],
  },
};

export default function WhitepaperPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0 px-4 md:px-20 bg-gray-50 dark:bg-black">
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <Background />
        <WhitepaperForm />
        <div className="relative w-full z-20 hidden md:flex border-l border-neutral-100 dark:border-neutral-900 overflow-hidden bg-gray-50 dark:bg-black items-center justify-center">
          <div className="max-w-sm mx-auto flex flex-col items-center">
            <div className="w-[300px] h-[240px] flex items-center justify-center mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 shadow-2xl">
                <div className="bg-white dark:bg-gray-800 rounded p-4 mb-4">
                  <div className="text-xs font-bold text-gray-800 dark:text-gray-200 mb-2">EvalOS WHITEPAPER</div>
                  <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded mb-2"></div>
                  <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
                  <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
                  <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                </div>
                <div className="text-white text-xs font-semibold">Predicting Platform Changes</div>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  How EvalOS adapts to algorithm changes in real-time
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Real-world data from 18+ months of performance
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  How creators are scaling using autonomous AI
                </p>
              </div>
            </div>
          </div>
          <HorizontalGradient className="top-20" />
          <HorizontalGradient className="bottom-20" />
          <HorizontalGradient className="-right-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
          <HorizontalGradient className="-left-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
        </div>
      </div>
    </div>
  );
} 