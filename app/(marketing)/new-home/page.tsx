import { Container } from "@/components/container";
import { HeroV2 } from "@/components/hero-v2";
import { Background } from "@/components/background";
import { HighlightsV2 } from "@/components/highlights-v2";
import { GridFeatures } from "@/components/grid-features";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";

export default function NewHome() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden ">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col items-center justify-between ">
        <HeroV2 />
        <GridFeatures />
        <Testimonials />
      </Container>
      
      {/* Highlights section with clean background */}
      <HighlightsV2 />
      
      <div className="relative">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Background />
        </div>
        <CTA />
      </div>
    </div>
  );
} 