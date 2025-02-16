import { LoginForm } from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to Templatiz - Your Content OS",
  description:
    "Access your Templatiz dashboard to manage your content templates, schedule posts, and scale your content creation across platforms. Sign in to start growing your audience.",
  openGraph: {
    images: ["https://templatized.io/banner.png"],
  },
};

export default function LoginPage() {
  return <LoginForm />;
}
