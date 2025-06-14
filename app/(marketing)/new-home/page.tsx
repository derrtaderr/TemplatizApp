import { Container } from "@/components/container";
import { HeroV2 } from "@/components/hero-v2";
import { Background } from "@/components/background";
import { Features } from "@/components/features";
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
        <Features />
        <GridFeatures />
        <Testimonials />
      </Container>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Background />
        </div>
        <CTA />
      </div>
    </div>
  );
} 