"use client";
import React from "react";

interface FormInputProps {
  id: string;
  placeholder: string;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  placeholder,
  className,
}) => {
  const defaultClasses =
    "grow shrink-0 px-5 py-4 bg-white rounded-lg border border-gray-300 border-solid basis-0 w-fit";
  const combinedClasses = className || defaultClasses;

  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={combinedClasses}
      aria-label={placeholder}
    />
  );
};

export default FormInput;
