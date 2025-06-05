"use client";
import React from "react";

const SettingsTabs = () => {
  return (
    <div className="flex mr-0 w-full leading-none whitespace-nowrap max-md:max-w-full">
      <div className="flex flex-col font-semibold">
        <h2 className="self-start text-3xl tracking-tight text-gray-800">
          Setting
        </h2>
        <div className="flex gap-2 items-center px-5 py-3 mt-4 text-sm bg-white shadow-sm text-teal-950">
          <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
          <div className="self-stretch my-auto">Personal</div>
        </div>
      </div>
      <div className="shrink-0 self-start mt-24 mr-0 h-px border border-solid bg-zinc-200 border-zinc-200 max-md:mt-10 max-md:max-w-full" />
      <div className="flex gap-2 justify-center items-center self-end px-5 py-3 mt-14 text-sm font-medium text-gray-500 max-md:mt-10">
        <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
        <div className="self-stretch my-auto">Profile</div>
      </div>
    </div>
  );
};

export default SettingsTabs;
