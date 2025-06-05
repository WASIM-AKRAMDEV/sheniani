"use client";

import { PhoneInput } from "@/components/auth/phone-verification/phone-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { ContactInfoFormValues, contactInfoSchema } from "./schemas";

export function ContactInfoForm() {
  const contactInfoForm = useForm<ContactInfoFormValues>({
    resolver: zodResolver(contactInfoSchema),
    defaultValues: {
      mapLocation: "",
      phone: "",
      countryCode: "+880",
      email: "",
    },
  });

  const onSubmitContactInfo: SubmitHandler<ContactInfoFormValues> = (data) => {
    console.log("Contact Info submitted:", data);
    // Handle form submission here
  };

  return (
    <Form {...contactInfoForm}>
      <form
        onSubmit={contactInfoForm.handleSubmit(onSubmitContactInfo)}
        className="space-y-4.5"
      >
        <FormField
          control={contactInfoForm.control}
          name="mapLocation"
          render={({ field }) => (
            <div className="space-y-1">
              <FormItem className="mb-0">
                <FormLabel>Map Location</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>
          )}
        />

        <FormField
          control={contactInfoForm.control}
          name="phone"
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <FormItem className="mb-0">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <PhoneInput
                    value={{
                      countryCode: contactInfoForm.getValues().countryCode,
                      phoneNumber: field.value,
                    }}
                    onChange={(value) => {
                      field.onChange(value.phoneNumber);
                      contactInfoForm.setValue(
                        "countryCode",
                        value.countryCode
                      );
                    }}
                    error={fieldState.error?.message}
                    placeholder="Phone number..."
                  />
                </FormControl>
                {fieldState.error && (
                  <p className="text-error text-sm">
                    {fieldState.error.message}
                  </p>
                )}
              </FormItem>
            </div>
          )}
        />

        <FormField
          control={contactInfoForm.control}
          name="email"
          render={({ field }) => (
            <div className="space-y-1">
              <FormItem className="mb-0">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <MailIcon />
                    </div>
                    <Input
                      {...field}
                      type="email"
                      className="pl-12"
                      placeholder="Email address"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>
          )}
        />

        <div className="mt-8">
          <Button type="submit">
            <span className="w-[146px]">Save Changes</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
