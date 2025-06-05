"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setUserType, setCurrentStep } from "@/store/features/auth/authSlice";

// Create a dynamic schema based on user type
const createRegistrationSchema = (userType: string | undefined) => {
  // Base schema with type field
  const baseSchema = {
    type: z.enum(["Client", "ServiceProvider"], {
      required_error: "Please select a user type",
    }),
  };

  // If ServiceProvider, require trade field
  if (userType === "ServiceProvider") {
    return z.object({
      ...baseSchema,
      trade: z.string({
        required_error: "Please select a trade",
      }),
    });
  }

  // For Client or initial state, trade is optional
  return z.object({
    ...baseSchema,
    trade: z.string().optional(),
  });
};

export function RegistrationForm() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string | undefined>();

  // Create a form with dynamic validation based on selected type
  const form = useForm<z.infer<ReturnType<typeof createRegistrationSchema>>>({
    resolver: zodResolver(createRegistrationSchema(selectedType)),
    defaultValues: {
      type: undefined as "Client" | "ServiceProvider" | undefined,
      trade: "",
    },
  });

  // Reset step counter when component mounts
  useEffect(() => {
    setCurrentStep(0);
  }, []);

  // Update validation schema when user type changes
  useEffect(() => {
    if (selectedType !== form.getValues().type) {
      form.reset({
        type: selectedType as "Client" | "ServiceProvider" | undefined,
        trade: form.getValues().trade,
      });
    }
  }, [selectedType, form]);

  function onSubmit(
    data: z.infer<ReturnType<typeof createRegistrationSchema>>
  ) {
    setUserType(data.type);

    // Navigate based on user type
    if (data.type === "Client") {
      // Navigate to client registration page
      router.push("/register/client");
    } else {
      // For ServiceProvider, continue with the multi-step flow
      router.push("/register/personal-info");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Button
                    type="button"
                    variant={field.value === "Client" ? "default" : "outline"}
                    className={`w-full font-medium`}
                    onClick={() => {
                      field.onChange("Client");
                      setSelectedType("Client");
                    }}
                  >
                    I&apos;m a Client
                  </Button>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Button
                    type="button"
                    variant={
                      field.value === "ServiceProvider" ? "default" : "outline"
                    }
                    className={`w-full font-medium`}
                    onClick={() => {
                      field.onChange("ServiceProvider");
                      setSelectedType("ServiceProvider");
                    }}
                  >
                    I&apos;m a Service Provider
                  </Button>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Only show trade selection for Service Provider */}
        {form.watch("type") === "ServiceProvider" && (
          <div className="space-y-2">
            <label className="text-light-black font-bold font-base">
              Trade
            </label>
            <FormField
              control={form.control}
              name="trade"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Architectural Designer" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="architectural-designer">
                        Architectural Designer
                      </SelectItem>
                      <SelectItem value="plumber">Plumber</SelectItem>
                      <SelectItem value="electrician">Electrician</SelectItem>
                      <SelectItem value="carpenter">Carpenter</SelectItem>
                      <SelectItem value="painter">Painter</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        <Button type="submit" className="w-full h-12 bg-dark-primary">
          Sign Up For Free
        </Button>
      </form>
    </Form>
  );
}
