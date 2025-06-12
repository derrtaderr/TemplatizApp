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
          <div className="max-w-lg mx-auto px-8 space-y-8">
            {/* Panel 1 */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
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
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
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
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
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
  );
} 