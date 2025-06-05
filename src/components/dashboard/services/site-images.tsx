"use client";

import Image from "next/image";

interface SiteImage {
  src: string;
  large?: boolean;
  overlay?: string;
}

interface SiteImagesProps {
  images: SiteImage[];
}

export function SiteImages({ images }: SiteImagesProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-lg ${
            image.large ? "col-span-3 h-72" : "col-span-1 h-32"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={`Site image ${index + 1}`}
            fill
            className="object-cover"
          />
          {image.overlay && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-xl font-bold leading-8">
                {image.overlay}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
