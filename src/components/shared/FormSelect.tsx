"use client";
import React from "react";

interface FormSelectProps {
  id: string;
  placeholder: string;
}

const FormSelect: React.FC<FormSelectProps> = ({ id, placeholder }) => {
  return (
    <div className="flex flex-1 flex-auto gap-10 px-5 py-3.5 bg-white rounded-lg border border-gray-300 border-solid">
      <select
        id={id}
        className="flex-1 appearance-none bg-transparent outline-none"
        aria-label={placeholder}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
      </select>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd1d2fca9d10e8ba85751970f1f8e88dc8d90aa0?placeholderIfAbsent=true&apiKey=4276c0013df0448eb98b0659645452fe"
        alt="Dropdown arrow"
        className="object-contain shrink-0 w-5 aspect-square"
      />
    </div>
  );
};

export default FormSelect;
