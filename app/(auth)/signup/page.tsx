import { SignupForm } from "@/components/signup";
import { Metadata } from "next";
import JsonLd from "@/components/json-ld";

// Define the JSON-LD schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Sign Up for Templatiz',
  description: 'Join Templatiz to discover how our content operating system can help you create, schedule, and grow your online presence efficiently.',
  url: 'https://templatiz.io/signup',
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
  title: "Sign Up for Templatiz - Transform Your Content Creation",
  description:
    "Join Templatiz to discover how our content operating system can help you create, schedule, and grow your online presence efficiently.",
  openGraph: {
    title: "Sign Up for Templatiz - Transform Your Content Creation",
    description: "Join Templatiz to discover how our content operating system can help you create, schedule, and grow your online presence efficiently.",
    images: ["/hero.png"],
  }
};

export default function SignupPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <SignupForm />
    </>
  );
}
