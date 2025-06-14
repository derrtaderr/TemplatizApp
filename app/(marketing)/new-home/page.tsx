import { Container } from "@/components/container";
import { HeroV2 } from "@/components/hero-v2";
import { Background } from "@/components/background";
import { HighlightsV2 } from "@/components/highlights-v2";
import { HowItWorksV2 } from "@/components/how-it-works-v2";
import { GridFeatures } from "@/components/grid-features";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";

export default function NewHome() {
  return (
    <>
      {/* Hero Section with Background */}
      <div className="relative">
        <div className="absolute inset-0 h-full w-full overflow-hidden ">
          <Background />
        </div>
        <Container>
          <HeroV2 />
        </Container>
      </div>
      
      {/* Highlights section with clean white background */}
      <HighlightsV2 />
      
      {/* How it Works section with clean white background */}
      <HowItWorksV2 />
      
      {/* Other sections with Background */}
      <div className="relative">
        <div className="absolute inset-0 h-full w-full overflow-hidden ">
          <Background />
        </div>
        <Container className="flex flex-col items-center justify-between ">
          <GridFeatures />
          <Testimonials />
        </Container>
      </div>
      
      {/* CTA Section with Background */}
      <div className="relative">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Background />
        </div>
        <CTA />
      </div>
    </>
  );
} 