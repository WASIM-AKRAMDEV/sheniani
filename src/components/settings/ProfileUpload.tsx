"use client";
import Image from "next/image";
import React from "react";

const ProfileUpload = () => {
  return (
    <div className="mt-5">
      <label className="text-sm leading-none text-zinc-900">
        Profile Picture
      </label>
      <div className="mt-2 w-60 max-w-full text-center">
        <div className="flex flex-col justify-center items-center px-5 rounded-md border-2 border-dashed aspect-square bg-gray-100 bg-opacity-40 border-neutral-300 border-opacity-70">
          <div className="flex flex-col">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e06076a2bf98f55c939af35fd83e419017bfe18?placeholderIfAbsent=true&apiKey=4276c0013df0448eb98b0659645452fe"
              alt="Upload"
              className="object-contain self-center w-12 aspect-square"
              width={48}
              height={48}
            />
            <div className="flex flex-col items-start mt-4 w-full">
              <p className="text-base font-medium leading-5 text-neutral-600">
                <span className="font-medium text-[rgba(24,25,28,1)]">
                  Browse
                </span>{" "}
                <span className="font-medium text-[rgba(24,25,28,1)]">
                  photo
                </span>{" "}
                <span className="font-normal">or drop here</span>
              </p>
              <p className="mt-1.5 text-xs leading-5 text-gray-500">
                A photo larger than 400 pixels work best. Max photo size 5 MB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpload;
