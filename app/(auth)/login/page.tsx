import { LoginForm } from "@/components/login";
import { Metadata } from "next";
import JsonLd from "@/components/json-ld";

// Define the JSON-LD schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Login to Templatiz',
  description: 'Access your Templatiz dashboard to create, schedule, and grow your online presence efficiently with our content operating system.',
  url: 'https://templatiz.io/login',
  mainEntity: {
    '@type': 'WebApplication',
    name: 'Templatiz',
    applicationCategory: 'Content Management System',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/OnlineOnly'
    }
  }
};

export const metadata: Metadata = {
  title: "Login to Templatiz - Transform Your Content Creation",
  description:
    "Access your Templatiz dashboard to create, schedule, and grow your online presence efficiently with our content operating system.",
  openGraph: {
    title: "Login to Templatiz - Transform Your Content Creation",
    description: "Access your Templatiz dashboard to create, schedule, and grow your online presence efficiently with our content operating system.",
    images: ["/hero.png"],
  }
};

export default function LoginPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <LoginForm />
    </>
  );
}
