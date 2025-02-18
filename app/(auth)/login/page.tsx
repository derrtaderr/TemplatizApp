import { LoginForm } from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to Templatiz - Transform Your Content Creation",
  description:
    "Access your Templatiz dashboard to create, schedule, and grow your online presence efficiently with our content operating system.",
  openGraph: {
    title: "Login to Templatiz - Transform Your Content Creation",
    description: "Access your Templatiz dashboard to create, schedule, and grow your online presence efficiently with our content operating system.",
    images: ["/template dashboard.png"],
  },
};

export default function LoginPage() {
  return <LoginForm />;
}
