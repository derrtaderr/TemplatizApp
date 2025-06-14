import { Container } from "@/components/container";
import { HeroV2 } from "@/components/hero-v2";
import { Background } from "@/components/background";
import { HighlightsV2 } from "@/components/highlights-v2";
import { HowItWorksV2 } from "@/components/how-it-works-v2";
import { FeaturesV2 } from "@/components/features-v2";
import { PlatformDiscovery } from "@/components/platform-discovery";
import { Benefits } from "@/components/benefits";
import { Advantages } from "@/components/advantages";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";

export default function NewHome() {
  return (
    <>
      {/* Hero Section without animated background */}
      <div className="relative bg-black">
        <Container>
          <HeroV2 />
        </Container>
      </div>
      
      {/* Highlights section with clean white background */}
      <HighlightsV2 />
      
      {/* How it Works section with clean white background */}
      <HowItWorksV2 />
      
      {/* Features section with clean white background */}
      <FeaturesV2 />
      
      {/* Platform Discovery section with clean white background */}
      <PlatformDiscovery />
      
      {/* Benefits section with clean white background */}
      <Benefits />
      
      {/* Advantages section with clean white background */}
      <Advantages />
      
      {/* Testimonials section without animated background */}
      <div className="relative bg-black">
        <Container className="flex flex-col items-center justify-between ">
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