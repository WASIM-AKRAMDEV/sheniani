"use client";
import Image from "next/image";
import React from "react";

const ProfileSection = () => {
  return (
    <div className="flex flex-col justify-center mt-6 w-full">
      <div className="flex gap-4 items-center px-4 py-3 w-full">
        <div className="flex relative flex-col gap-4 items-center self-stretch my-auto w-12 rounded-md aspect-square">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/354d5245471b8a438e921cc0d7c94a9e7a2dd41e?placeholderIfAbsent=true&apiKey=4276c0013df0448eb98b0659645452fe"
            alt="Profile"
            className="object-cover absolute inset-0 size-full"
            width={48}
            height={48}
          />
          <div
            className="flex relative self-stretch my-auto w-2.5 h-2.5 bg-green-400 rounded-full fill-green-400 min-h-2.5"
            aria-label="Online status"
          />
        </div>
        <div className="flex-1 shrink self-stretch my-auto basis-0">
          <h3 className="text-base font-bold leading-loose text-gray-800">
            Sebastian Nelson
          </h3>
          <p className="text-sm leading-6 text-neutral-400">
            sebestiannelson@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
