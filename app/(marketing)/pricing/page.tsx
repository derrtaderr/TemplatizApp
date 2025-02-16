import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Pricing } from "@/components/pricing";
import { PricingTable } from "./pricing-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Build Your Content Operating System | Templatiz",
  description:
    "Choose the perfect plan for your content operating system. From individual creators to enterprise teams, power your content creation with AI-driven templates and workflows.",
  openGraph: {
    images: ["https://templatized.io/banner.png"],
  },
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between  pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <Heading as="h1">Simple pricing for your ease</Heading>
          <Subheading className="text-center">
            Every AI offers a wide range of services. You can choose the one
            that suits your needs. Select from your favourite plan and get
            started instantly.
          </Subheading>
        </div>
        <Pricing />
        <PricingTable />
      </Container>
    </div>
  );
}
