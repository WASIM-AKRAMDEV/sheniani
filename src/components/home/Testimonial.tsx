"use client";

import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

// Define types for our testimonials
interface Reviewer {
  id: string;
  name: string;
  avatar: string;
  role?: string;
}

interface Testimonial {
  id: string;
  reviewer: Reviewer;
  quote: string;
  title: string;
}

// Sample testimonial data
const testimonials: Testimonial[] = [
  {
    id: "1",
    reviewer: {
      id: "1",
      name: "Julian Vidal",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e5b2415ab4644939a26b07112dfb6570b241463a?placeholderIfAbsent=true&apiKey=4276c0013df0448eb98b0659645452fe",
      role: "Homeowner",
    },
    title: "Never this amazed",
    quote:
      "I needed a contractor for my kitchen remodel, and I found an amazing professional within hours. The process was seamless!",
  },
  {
    id: "2",
    reviewer: {
      id: "2",
      name: "Sarah Johnson",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8f809eadbde018f79aeedb2a03c0275a83410192?placeholderIfAbsent=true&apiKey=4276c0013df0448eb98b0659645452fe",
      role: "Property Manager",
    },
    title: "Exceeded expectations",
    quote:
      "Finding reliable contractors used to be a nightmare. Sheniani made it so easy to compare qualified professionals and choose the best one for our office renovation.",
  },
  {
    id: "3",
    reviewer: {
      id: "3",
      name: "Michael Chen",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e5b2415ab4644939a26b07112dfb6570b241463a?placeholderIfAbsent=true&apiKey=4276c0013df0448eb98b0659645452fe",
      role: "Business Owner",
    },
    title: "Saved me so much time",
    quote:
      "As a business owner, I don't have time to vet contractors. Sheniani's platform let me quickly find and hire a plumber who fixed our emergency leak within hours.",
  },
  {
    id: "4",
    reviewer: {
      id: "4",
      name: "Emily Rodriguez",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8f809eadbde018f79aeedb2a03c0275a83410192?placeholderIfAbsent=true&apiKey=4276c0013df0448eb98b0659645452fe",
      role: "DIY Enthusiast",
    },
    title: "Quality professionals",
    quote:
      "I was skeptical at first, but the electrician I hired through Sheniani was professional, punctual, and did excellent work. I'll definitely use this service again!",
  },
  {
    id: "5",
    reviewer: {
      id: "5",
      name: "David Thompson",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e5b2415ab4644939a26b07112dfb6570b241463a?placeholderIfAbsent=true&apiKey=4276c0013df0448eb98b0659645452fe",
      role: "Real Estate Investor",
    },
    title: "Game changer for investors",
    quote:
      "Managing multiple renovation projects is now so much easier. I can quickly find and hire reliable contractors for all my properties through one platform.",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const activeTestimonial = testimonials[activeIndex];

  // Auto-rotate testimonials every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-rotation when user interacts
  const handleReviewerClick = useCallback((index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);

    // Resume auto-rotation after 10 seconds of inactivity
    const timeout = setTimeout(() => setIsAutoPlaying(true), 10000);
    return () => clearTimeout(timeout);
  }, []);

  // Calculate positions for the avatar carousel
  const getReviewerPosition = (index: number) => {
    // Calculate distance from active index (considering circular array)
    const length = testimonials.length;
    let distance = index - activeIndex;

    // Adjust for circular wrapping
    if (distance > length / 2) distance -= length;
    if (distance < -length / 2) distance += length;

    return distance;
  };

  return (
    <section className="py-16 md:py-24 w-full bg-white">
      <Container>
        <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-center mb-7 md:mb-12">
          Why Trust Sheniani?
        </h2>

        <div className="relative z-10 w-full">
          <div className="relative flex p-5 md:p-11 rounded-3xl bg-dark-primary text-white shadow-lg">
            <div className="pr-3 md:pr-11">
              <Image
                src={"/images/commas.png"}
                alt={`commas`}
                width={56}
                height={56}
                className="md:w-28 make-commas md:h-28 w-14 h-14 "
              />
            </div>

            <div className="flex-1 border-l border-white/30 pl-3 md:pl-11">
              <h3 className="xl:text-3xl lg:text-2xl sm:text-1xl text-xl font-bold">
                {activeTestimonial.title}
              </h3>
              <blockquote className="md:mt-4 mt-2 lg:text-1xl leading-tight md:text-lg font-lato sm:text-base text-sm italic text-white/90">
                &quot;{activeTestimonial.quote}&quot;
              </blockquote>
            </div>

            {/* Triangle pointer */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-solid rotate-135 border-t-[30px] border-r-[30px] border-b-0 border-l-[30px] border-t-dark-primary border-r-transparent border-l-transparent"
              style={{ bottom: "-15px" }}
            />
          </div>
        </div>

        {/* Reviewers Carousel - Single Row with Active Name in Center */}
        <div className="mt-12 relative">
          <div className="flex justify-center items-center">
            {/* Left side avatars */}
            <div className="flex items-center justify-end space-x-4 md:space-x-6 w-1/3">
              {testimonials.map((testimonial, index) => {
                const position = getReviewerPosition(index);
                // Only show avatars that should appear on the left side
                if (position >= 0 || position < -2) return null;

                return (
                  <div
                    key={testimonial.id}
                    className={cn("transition-all duration-300", {
                      "opacity-80": Math.abs(position) === 1,
                      "opacity-60": Math.abs(position) === 2,
                    })}
                    onClick={() => handleReviewerClick(index)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="relative size-10 md:size-16 rounded-full overflow-hidden transition-all">
                      <Image
                        src={testimonial.reviewer.avatar || ""}
                        alt={`${testimonial.reviewer.name}'s avatar`}
                        fill
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active reviewer with name */}
            <div className="flex items-center justify-center flex-1 shrink-1 gap-3 md:gap-10 mx-4 md:mx-6">
              <div
                className="relative size-16 shrink-1 md:size-20  rounded-full overflow-hidden cursor-pointer"
                onClick={() => handleReviewerClick(activeIndex)}
              >
                <Image
                  src={activeTestimonial.reviewer.avatar || ""}
                  alt={`${activeTestimonial.reviewer.name}'s avatar`}
                  fill
                />
              </div>
              <span className="font-bold flex-1 xl:text-3xl whitespace-nowrap lg:text-2xl md:text-1xl text-sm leading-tight sm:text-xl">
                {activeTestimonial.reviewer.name}
              </span>
            </div>

            {/* Right side avatars */}
            <div className="flex items-center justify-start space-x-4 md:space-x-6 w-1/3">
              {testimonials.map((testimonial, index) => {
                const position = getReviewerPosition(index);
                // Only show avatars that should appear on the right side
                if (position <= 0 || position > 2) return null;

                return (
                  <div
                    key={testimonial.id}
                    className={cn("transition-all duration-300", {
                      "opacity-80": Math.abs(position) === 1,
                      "opacity-60": Math.abs(position) === 2,
                    })}
                    onClick={() => handleReviewerClick(index)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="relative size-10 md:size-16 rounded-full overflow-hidden transition-all">
                      <Image
                        src={testimonial.reviewer.avatar || ""}
                        alt={`${testimonial.reviewer.name}'s avatar`}
                        fill
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
