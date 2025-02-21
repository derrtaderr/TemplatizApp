import { SignupForm } from "@/components/waitlist";
import { Background } from "@/components/background";
import { FeaturedTestimonials } from "@/components/featured-testimonials";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import JsonLd from "@/components/json-ld";

// Tell Next.js this is a dynamic page to prevent static optimization
export const dynamic = 'force-dynamic';
// Skip static generation for this page
export const generateStaticParams = () => [];

// Define the JSON-LD schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Join Templatiz Waitlist',
  description: 'Be first to experience the future of content creation. Join our waitlist to get early access to Templatiz - your complete content operating system with AI-powered workflows, templates, and tools that scale your content strategy.',
  url: 'https://templatiz.io/waitlist',
  mainEntity: {
    '@type': 'WebApplication',
    name: 'Templatiz',
    applicationCategory: 'Content Management System',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder'
    }
  }
};

export const metadata: Metadata = {
  title: "Join Waitlist - Build Your Content Operating System | Templatiz",
  description:
    "Be first to experience the future of content creation. Join our waitlist to get early access to Templatiz - your complete content operating system with AI-powered workflows, templates, and tools that scale your content strategy.",
  openGraph: {
    images: ["/hero.png"],
  }
};

export default function SignupPage() {
  return (
    <div className="relative overflow-hidden">
      <Background />
      <JsonLd data={jsonLd} />
      <SignupForm />
    </div>
  );
}