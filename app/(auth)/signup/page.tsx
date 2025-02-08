import { SignupForm } from "@/components/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup - Templatiz",
  description:
    "Transform your content into a full ecosystem. Create, repurpose, and share across platforms with AI-powered tools that maintain your authentic voice.",
  openGraph: {
    images: ["https://templatized.io/banner.png"],
  },
};

export default function SignupPage() {
  return <SignupForm />;
}
