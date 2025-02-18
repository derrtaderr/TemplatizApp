import { cn } from "@/lib/utils";
import Image from "next/image";
import { useId } from "react";
import { motion } from "framer-motion";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { Logo } from "@/components/Logo";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
        {children}
        <div className="relative w-full z-20 hidden md:flex border-l border-neutral-100 dark:border-neutral-800 overflow-hidden bg-gray-50 dark:bg-neutral-900 items-center justify-center">
          <div className="max-w-sm mx-auto flex flex-col items-center">
            <div className="w-[300px] h-[240px] flex items-center justify-center">
              <Logo 
                className="w-full h-full" 
                showText={false} 
                imageWidth={240}
                imageHeight={200}
              />
            </div>
            <p
              className={cn(
                "font-semibold text-xl text-center text-muted dark:text-muted-dark mt-12"
              )}
            >
              Transform Your Content Creation
            </p>
            <p
              className={cn(
                "font-normal text-base text-center text-neutral-500 dark:text-neutral-400 mt-8"
              )}
            >
              Discover how our content operating system can help you create, schedule, and grow your online presence efficiently.
            </p>
          </div>
          <HorizontalGradient className="top-20" />
          <HorizontalGradient className="bottom-20" />
          <HorizontalGradient className="-right-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
          <HorizontalGradient className="-left-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
        </div>
      </div>
    </>
  );
}
