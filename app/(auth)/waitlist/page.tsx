import { SignupForm } from "@/components/waitlist";
import { Background } from "@/components/background";
import { FeaturedTestimonials } from "@/components/featured-testimonials";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Waitlist - Templatiz",
  description:
    "Be among the first to experience Templatiz. Join our waitlist to get early access and lifetime benefits for our AI-powered content creation platform.",
  openGraph: {
    images: ["https://templatized.io/banner.png"],
  },
};

export default function SignupPage() {
  return <SignupForm />;
}