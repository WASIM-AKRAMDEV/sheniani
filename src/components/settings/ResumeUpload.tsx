"use client";
import React from "react";

const ResumeUpload = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-6 self-start mt-5 text-sm leading-none">
        <div className="flex flex-auto gap-10 py-5 pr-5 pl-16 rounded-md bg-gray-100 bg-opacity-50 max-md:pl-5">
          <div className="flex flex-col">
            <h3 className="font-medium text-zinc-900">Professional Resume</h3>
            <p className="self-start text-gray-500">3.5 MB</p>
          </div>
          <button
            className="flex shrink-0 py-3 my-auto w-6 h-6"
            aria-label="Delete resume"
          />
        </div>
        <div className="flex flex-auto gap-10 justify-center py-5 pr-5 pl-16 bg-gray-100 rounded-md max-md:pl-5">
          <div className="flex flex-col">
            <h3 className="font-medium text-zinc-900">Product Designer</h3>
            <p className="self-start text-gray-500">4.7 MB</p>
          </div>
          <button
            className="flex shrink-0 py-3 my-auto w-6 h-6"
            aria-label="Delete resume"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start py-5 pr-8 pl-16 mt-6 max-w-full text-sm leading-none bg-white rounded-md w-[312px] max-md:px-5">
        <h3 className="font-medium text-zinc-900">Add Cv/Resume</h3>
        <p className="text-gray-500">Browse file or drop here. only pdf</p>
      </div>
    </div>
  );
};

export default ResumeUpload;
