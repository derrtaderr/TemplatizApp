import { Background } from "@/components/background";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { ContactForm } from "@/components/contact";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Contact Us - Your Content Operating System Partner | Templatiz",
  description:
    "Let's discuss how Templatiz can transform your content creation into a streamlined operating system. Get personalized guidance on implementing AI-powered workflows that scale your content while maintaining authenticity.",
  openGraph: {
    images: ["https://templatized.io/banner.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0 px-4 md:px-20 bg-gray-50 dark:bg-black">
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <Background />
        <ContactForm />
        <div className="relative w-full z-20 hidden md:flex border-l border-neutral-100 dark:border-neutral-900 overflow-hidden bg-gray-50 dark:bg-black items-center justify-center">
          <div className="max-w-sm mx-auto flex flex-col items-center">
            <div className="w-[300px] h-[240px] flex items-center justify-center">
              <Logo 
                className="w-full h-full" 
                showText={false} 
                imageWidth={240}
                imageHeight={200}
              />
            </div>
            <p className={cn("font-semibold text-xl text-center dark:text-muted-dark text-muted")}>
              Transform Your Content Creation
            </p>
            <p className={cn("font-normal text-base text-center text-neutral-500 dark:text-neutral-200 mt-8")}>
              Discover how our content operating system can help you create, schedule, and grow your online presence efficiently.
            </p>
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
