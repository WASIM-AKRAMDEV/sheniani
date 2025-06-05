"use client";

import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import type { ControllerRenderProps } from "react-hook-form";
import type { PasswordFormValues } from "./schemas";

interface PasswordInputProps {
  field: ControllerRenderProps<PasswordFormValues, keyof PasswordFormValues>;
  showPassword: boolean;
  toggleVisibility: () => void;
  placeholder?: string;
}

export function PasswordInput({
  field,
  showPassword,
  toggleVisibility,
  placeholder = "Password",
}: PasswordInputProps) {
  return (
    <div className="relative">
      <Input
        {...field}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
      />
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute right-3 top-1/2 transform -translate-y-1/2"
      >
        {showPassword ? (
          <EyeOff className="size-5.5 text-light-black" />
        ) : (
          <Eye className="size-5.5 text-light-black" />
        )}
      </button>
    </div>
  );
}
