"use client";

import { Carousel } from "@/components/auth/carousel";
import Navbar from "@/components/shared/Navbar";

export default function SPDashboardMain({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[calc(100vh)] p-8 flex flex-col">
      <div className="pb-6">
        <Navbar />
      </div>
      <div className="flex bg-white shadow-one w-full flex-1 max-w-[1260px] mx-auto rounded-4xl overflow-hidden">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md">{children}</div>
        </div>
        <div className="hidden lg:block lg:w-1/2 min-h-full">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
