import { LoginForm } from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Templatiz",
  description:
    "Transform your content into a full ecosystem. Create, repurpose, and share across platforms with AI-powered tools that maintain your authentic voice.",
  openGraph: {
    images: ["https://templatized.io/banner.png"],
  },
};

export default function LoginPage() {
  return <LoginForm />;
}
