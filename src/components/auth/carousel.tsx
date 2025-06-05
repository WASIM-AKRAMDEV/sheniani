"use client"

import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"


const carouselSlides = [
  {
    image: "/images/auth-1.png",
    title: "Construct With Confidence.",
    description:
      "Plan, Track, And Execute Construction Projects With Powerful Tools Designed For Efficiency.",
  },
  {
    image: "/images/auth-2.jpg",
    title: "Connect With Skilled Professionals.",
    description:
      "Find The Right Service Providers For Your Construction Projects With Our Verified Network.",
  },
  {
    image: "/images/auth-3.jpg",
    title: "Streamline Your Workflow.",
    description:
      "Manage Projects, Track Progress, And Communicate Effectively All In One Platform.",
  },
];

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1))

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1))

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [isTransitioning])

  // Auto-advance carouselSlides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* carouselSlides */}
      <div className="h-full w-full">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 h-full w-full transition-opacity duration-500",
              currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              width={0}
              height={0}
              sizes="100vw"
              priority={index === 0}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        <div className="absolute bottom-11 left-11 right-11 flex flex-col border-[0.2px] border-white/20 backdrop-blur-[16px] rounded-[20px] justify-between py-6 px-4">
          <div className="flex justify-between gap-2 mb-[60px] items-center">
            <Link href="/" className="flex items-center">
              <Image src="/images/white-logo.svg" alt="Logo" width={237} height={37} />
            </Link>
            <div className="flex items-center gap-2">
              <button
                className="h-8 w-8 rounded-full cursor-pointer bg-transparent border-[0.2px] border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                className="h-8 w-8 rounded-full cursor-pointer bg-[#FF9800] flex items-center justify-center text-white hover:bg-[#e68a00] transition-colors"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="text-white space-y-4">
            <h2 className="text-2xl font-bold">{carouselSlides[currentSlide].title}</h2>
            <p className="text-xl">{carouselSlides[currentSlide].description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
