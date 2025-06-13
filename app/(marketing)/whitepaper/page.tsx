import { Background } from "@/components/background";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { WhitepaperForm } from "@/components/whitepaper-form";
import { Logo } from "@/components/Logo";
import { NavBar } from "@/components/navbar";
import {
  IconChartBar,
  IconTrendingUp,
  IconClock,
} from "@tabler/icons-react";

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
    <>
      <NavBar />
      <div className="relative overflow-hidden py-20 md:pt-20 px-4 md:px-20 bg-gray-50 dark:bg-black">
        <Background />
        <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
          <WhitepaperForm />
          <div className="relative w-full z-20 hidden md:flex border-l border-neutral-100 dark:border-neutral-900 overflow-hidden bg-gray-50 dark:bg-black items-center justify-center">
            <div className="max-w-lg mx-auto px-8 space-y-8">
              {/* Panel 1 */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center mb-4">
                  <IconChartBar className="w-6 h-6 text-neutral-700 dark:text-neutral-300 mr-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    AI Content Isn&apos;t the Problem — Strategy Is
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  AI made writing easy. EvalOS makes winning content predictable. Our system scores every draft before it goes live.
                </p>
              </div>

              {/* Panel 2 */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center mb-4">
                  <IconTrendingUp className="w-6 h-6 text-neutral-700 dark:text-neutral-300 mr-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Built on 18+ Months of Data
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  EvalOS is trained on real-world performance across LinkedIn and Twitter. You&apos;re not guessing—you&apos;re compounding.
                </p>
              </div>

              {/* Panel 3 */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center mb-4">
                  <IconClock className="w-6 h-6 text-neutral-700 dark:text-neutral-300 mr-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Autonomous AI, Not Just Automation
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  YOLO Mode uses EvalOS to write, score, and publish content while you sleep. This is strategy, on autopilot.
                </p>
              </div>
            </div>
            <HorizontalGradient className="top-20" />
            <HorizontalGradient className="bottom-20" />
            <HorizontalGradient className="-right-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
            <HorizontalGradient className="-left-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
          </div>
        </div>
      </div>
    </>
  );
} 