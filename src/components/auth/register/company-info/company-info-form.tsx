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
import { Input } from "@/components/ui/input";
import { companyInfoSchema } from "@/lib/validations/auth";
import {
  setCurrentStep
} from "@/store/features/auth/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

type FormValues = z.infer<typeof companyInfoSchema>;

export function CompanyInfoForm() {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(companyInfoSchema),
    defaultValues: {
      companyType: "LTD",
      businessName: "",
      address: "",
    },
  });

  useEffect(() => {
    setCurrentStep(2);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(data: FormValues) {
    toast.success("Company information saved");
    router.push("/register/trade-details");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4 mb-10">
          <FormField
            control={form.control}
            name="companyType"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormControl>
                  <Button
                    type="button"
                    variant={field.value === "LTD" ? "default" : "outline"}
                    className={`w-full font-medium`}
                    onClick={() => field.onChange("LTD")}
                  >
                    LTD
                  </Button>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyType"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormControl>
                  <Button
                    type="button"
                    variant={
                      field.value === "Individual" ? "default" : "outline"
                    }
                    className={`w-full font-medium`}
                    onClick={() => field.onChange("Individual")}
                  >
                    Individual
                  </Button>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem className="mb-5">
              <FormLabel>Business Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Business Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="mb-10">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Next
        </Button>
      </form>
    </Form>
  );
}
