"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export function OtpVerificationForm() {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 5);
  }, []);

  // Handle input change
  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    // Take only the last character if multiple are pasted
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle key down
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Check if pasted content is all digits
    if (!/^\d+$/.test(pastedData)) return;

    const pastedOtp = pastedData.split("").slice(0, 5);
    const newOtp = [...otp];

    pastedOtp.forEach((digit, index) => {
      if (index < 5) {
        newOtp[index] = digit;
      }
    });

    setOtp(newOtp);

    // Focus the next empty input or the last one
    const nextEmptyIndex = newOtp.findIndex((val) => !val);
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[4]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if OTP is complete
    if (otp.filter(Boolean).length !== 5) {
      toast.error("Please enter the complete OTP");
      return;
    }

    // Simulate verification
    toast.success("Phone number verified successfully");
    router.push("/dashboard");
  };

  const handleResendCode = () => {
    toast.success("New OTP sent to your phone number");
    setOtp(Array(5).fill(""));
    inputRefs.current[0]?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex space-x-2">
        {otp.map((digit, index) => (
          <Input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={index === 0 ? handlePaste : undefined}
            className="w-[60px] border-none bg-dark-smoke h-[60px] text-center text-[28px] font-bold text-black"
          />
        ))}
      </div>

      <div>
        <p className="text-para font-medium text-sm font-plus-j">
          Did not receive any Code?
        </p>
        <button
          type="button"
          onClick={handleResendCode}
          className="text-theme-orange hover:underline font-medium text-sm font-plus-j"
        >
          Resend Code
        </button>
      </div>

      <Button type="submit" className="w-full mt-5">
        Verify
      </Button>
    </form>
  );
}
