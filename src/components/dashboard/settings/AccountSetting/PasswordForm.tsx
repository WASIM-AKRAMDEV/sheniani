"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { PasswordInput } from "./PasswordInput";
import { passwordSchema, type PasswordFormValues } from "./schemas";

export function PasswordForm() {
  // Password visibility toggles
  const [passwordVisibility, setPasswordVisibility] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  // Toggle password visibility
  const togglePasswordVisibility = (field: "current" | "new" | "confirm") => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmitPassword: SubmitHandler<PasswordFormValues> = (data) => {
    console.log("Password change submitted:", data);
    // Handle form submission here
  };

  return (
    <Form {...passwordForm}>
      <form
        onSubmit={passwordForm.handleSubmit(onSubmitPassword)}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
          <FormField
            control={passwordForm.control}
            name="currentPassword"
            render={({ field }) => (
              <div className="space-y-1">
                <FormItem className="mb-0">
                  <FormLabel>Current Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      field={field}
                      showPassword={passwordVisibility.current}
                      toggleVisibility={() =>
                        togglePasswordVisibility("current")
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />

          <FormField
            control={passwordForm.control}
            name="newPassword"
            render={({ field }) => (
              <div className="space-y-1">
                <FormItem className="mb-0">
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      field={field}
                      showPassword={passwordVisibility.new}
                      toggleVisibility={() => togglePasswordVisibility("new")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />

          <FormField
            control={passwordForm.control}
            name="confirmPassword"
            render={({ field }) => (
              <div className="space-y-1">
                <FormItem className="mb-0">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      field={field}
                      showPassword={passwordVisibility.confirm}
                      toggleVisibility={() =>
                        togglePasswordVisibility("confirm")
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
        </div>

        <div className="pt-2">
          <Button type="submit">
            <span className="w-[146px]">Save Changes</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
