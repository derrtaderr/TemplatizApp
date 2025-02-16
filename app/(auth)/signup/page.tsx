import { SignupForm } from "@/components/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up for Templatiz - Content Creation Made Simple",
  description:
    "Join Templatiz to unlock the power of AI-driven content creation. Get access to proven templates, automated scheduling, and tools that help you create engaging content 10x faster.",
  openGraph: {
    images: ["https://templatized.io/banner.png"],
  },
};

export default function SignupPage() {
  return <SignupForm />;
}
