import { useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { InViewDiv } from "./in-view-div";
import { useMemo } from "react";
import { TestimonialColumnContainer } from "./testimonial-column-container";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">What People Are Saying About Templatiz</Heading>
      <Subheading className="text-center max-w-lg mx-auto">
      Join a growing community of creators, marketers, and founders who are thrilled to be part of the Templatiz beta. Here’s what they’re saying about our all-in-one content platform.
      </Subheading>
      <TestimonialGrid />
    </div>
  );
};

interface Testimonial {
  name: string;
  quote: string;
  src: string;
  designation?: string;
}

const testimonials = [
  {
    name: "Emma Harper",
    quote: "I can't wait to see how Templatiz transforms my content creation process. Everything in one place is exactly what I need!",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "Content Creator",
  },
  {
    name: "James Taylor",
    quote: "The idea of turning a blog into videos and social posts automatically is groundbreaking. I'm all in for the beta!",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "Digital Entrepreneur",
  },
  {
    name: "Sophia Adams",
    quote: "Finally, a tool that understands how important my brand voice is. I'm so excited to get started.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Brand Strategist",
  },
  {
    name: "Liam Bennett",
    quote: "I've been waiting for something like this. Templatiz feels like the future of content creation.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "Social Media Manager",
  },
  {
    name: "Olivia Carter",
    quote: "Joining this beta feels like being part of a movement. I can't wait to shape the future of content creation with Templatiz.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "Marketing Director",
  },
  {
    name: "Noah Mitchell",
    quote: "If this can save me hours every week, I'm sold. Let's make content creation effortless!",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Content Strategist",
  },
  {
    name: "Mia Walker",
    quote: "As a marketer, I'm always looking for ways to streamline workflows. Templatiz is a no-brainer.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "Marketing Manager",
  },
  {
    name: "Ethan Ramirez",
    quote: "Repurposing content from one platform to another is such a headache—Templatiz solves it. Count me in!",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "Digital Creator",
  },
  {
    name: "Isabella White",
    quote: "Voice cloning and template personalization? This is what every creator has been dreaming of.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "Content Producer",
  },
  {
    name: "Ava Thompson",
    quote: "I'm thrilled to be part of the beta. Templatiz is exactly what I've been looking for to grow my personal brand.",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "Personal Brand Coach",
  },
  {
    name: "William Garcia",
    quote: "Being able to create videos from blogs without external tools is a game-changer. I can't wait to test it!",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "Video Content Creator",
  },
  {
    name: "Sophia Martinez",
    quote: "I've signed up for a lot of tools, but this one genuinely excites me. Templatiz feels like the next big thing.",
    src: "https://i.pravatar.cc/150?img=12",
    designation: "Digital Marketing Consultant",
  },
  {
    name: "Alexander Brown",
    quote: "Saving time while keeping my content authentic? Yes, please. This beta is going to be amazing.",
    src: "https://i.pravatar.cc/150?img=13",
    designation: "Content Marketing Manager",
  },
  {
    name: "Charlotte Davis",
    quote: "I've followed tools like this for years, and Templatiz is a step ahead. I'm so ready to start!",
    src: "https://i.pravatar.cc/150?img=14",
    designation: "Social Media Strategist",
  },
  {
    name: "Henry Wilson",
    quote: "Simplifying content creation and video production? I can already see the value in Templatiz.",
    src: "https://i.pravatar.cc/150?img=15",
    designation: "Content Director",
  },
  {
    name: "Amelia Evans",
    quote: "It's rare to find a tool that promises so much and delivers even more. Can't wait to get early access!",
    src: "https://i.pravatar.cc/150?img=16",
    designation: "Digital Strategist",
  },
  {
    name: "Lucas Johnson",
    quote: "From blog to social to video, all in one place? Templatiz is the dream content tool.",
    src: "https://i.pravatar.cc/150?img=17",
    designation: "Content Creator",
  },
  {
    name: "Isabelle Moore",
    quote: "I've been struggling to keep up with consistent posting—Templatiz seems like the perfect solution.",
    src: "https://i.pravatar.cc/150?img=18",
    designation: "Social Media Manager",
  },
  {
    name: "Jackson Scott",
    quote: "I've tried so many platforms, and none have excited me as much as Templatiz. Let's go!",
    src: "https://i.pravatar.cc/150?img=19",
    designation: "Digital Content Creator",
  },
  {
    name: "Grace Harris",
    quote: "Content creation made smarter and faster? I'm in. This beta is going to be incredible.",
    src: "https://i.pravatar.cc/150?img=20",
    designation: "Marketing Specialist",
  },
  {
    name: "Oliver Rodriguez",
    quote: "I'm excited to see how Templatiz will save me time while maintaining my authenticity. This is huge!",
    src: "https://i.pravatar.cc/150?img=21",
    designation: "Brand Developer",
  },
  {
    name: "Lily Perez",
    quote: "Joining the beta is a no-brainer. I can already see how Templatiz will transform my workflow.",
    src: "https://i.pravatar.cc/150?img=22",
    designation: "Content Strategist",
  },
];

function Testimonial({
  name,
  quote,
  src,
  designation,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"figure">, keyof Testimonial> &
  Testimonial) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  const boxStyle = {};
  return (
    <figure
      className={cn(
        "animate-fade-in rounded-3xl bg-transparent p-8 opacity-0 shadow-derek dark:bg-neutral-900",
        className
      )}
      style={{
        animationDelay,
      }}
      {...props}
    >
      <div className="flex flex-col items-start">
        <div className="flex gap-2">
          <Image
            src={src}
            width={150}
            height={150}
            className="h-10 w-10 rounded-full"
            alt={name}
          />
          <div>
            <h3 className="text-sm  font-medium text-neutral-500 dark:text-neutral-300">
              {name}
            </h3>
            <p className="text-sm font-normal text-neutral-500 dark:text-neutral-300">
              {designation}
            </p>
          </div>
        </div>
        <p className="text-base text-muted mt-4 dark:text-muted-dark">
          {quote}
        </p>
      </div>
    </figure>
  );
}

function TestimonialColumn({
  testimonials,
  className,
  containerClassName,
  shift = 0,
}: {
  testimonials: Testimonial[];
  className?: string;
  containerClassName?: (reviewIndex: number) => string;
  shift?: number;
}) {
  return (
    <TestimonialColumnContainer className={cn(className)} shift={shift}>
      {testimonials
        .concat(testimonials)
        .map((testimonial, testimonialIndex) => (
          <Testimonial
            name={testimonial.name}
            quote={testimonial.quote}
            src={testimonial.src}
            designation={testimonial.designation}
            key={testimonialIndex}
            className={containerClassName?.(
              testimonialIndex % testimonials.length
            )}
          />
        ))}
    </TestimonialColumnContainer>
  );
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function TestimonialGrid() {
  let columns = splitArray(testimonials, 3);
  let column1 = columns[0];
  let column2 = columns[1];
  let column3 = splitArray(columns[2], 2);
  return (
    <InViewDiv className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
      <TestimonialColumn
        testimonials={[...column1, ...column3.flat(), ...column2]}
        containerClassName={(tIndex) =>
          cn(
            tIndex >= column1.length + column3[0].length && "md:hidden",
            tIndex >= column1.length && "lg:hidden"
          )
        }
        shift={10}
      />
      <TestimonialColumn
        testimonials={[...column2, ...column3[1]]}
        className="hidden md:block"
        containerClassName={(tIndex) =>
          tIndex >= column2.length ? "lg:hidden" : ""
        }
        shift={15}
      />
      <TestimonialColumn
        testimonials={column3.flat()}
        className="hidden lg:block"
        shift={10}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white dark:from-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-black" />
    </InViewDiv>
  );
}
