import { SignupForm } from "@/components/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up for Templatiz - Transform Your Content Creation",
  description:
    "Join Templatiz to discover how our content operating system can help you create, schedule, and grow your online presence efficiently.",
  openGraph: {
    title: "Sign Up for Templatiz - Transform Your Content Creation",
    description: "Join Templatiz to discover how our content operating system can help you create, schedule, and grow your online presence efficiently.",
    images: ["/hero.png"],
  },
};

export default function SignupPage() {
  return <SignupForm />;
}
