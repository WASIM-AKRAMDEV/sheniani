"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { phoneVerificationSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { PhoneInput } from "./phone-input";

type FormValues = z.infer<typeof phoneVerificationSchema>;

export function PhoneVerificationForm() {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(phoneVerificationSchema),
    defaultValues: {
      phone: "",
      countryCode: "+1", // Default to US
      acceptTerms: false,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(data: FormValues) {

    // Simulate sending OTP
    toast.success("OTP sent to your phone number");
    router.push("/verify-otp");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="phone"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>
                Phone
              </FormLabel>
              <FormControl>
                <PhoneInput
                  value={{
                    countryCode: form.getValues().countryCode,
                    phoneNumber: field.value,
                  }}
                  onChange={(value) => {
                    field.onChange(value.phoneNumber);
                    form.setValue("countryCode", value.countryCode);
                  }}
                  error={fieldState.error?.message}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-start space-x-2 ">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-1 text-black"
                  />
                </FormControl>
                <div className="flex-1 flex items-center gap-x-1 text-sm text-para flex-wrap">
                  <span>By providing my number, I agree and accept the</span>
                  <Link
                    href="#"
                    className="text-theme-orange hover:underline whitespace-nowrap"
                  >
                    Terms of Service
                  </Link>
                  <span>and</span>
                  <Link
                    href="#"
                    className="text-theme-orange hover:underline whitespace-nowrap"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mt-5">
          Send OTP
        </Button>
      </form>
    </Form>
  );
}
