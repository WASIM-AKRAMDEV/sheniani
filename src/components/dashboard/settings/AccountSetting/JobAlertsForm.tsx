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
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm, type SubmitHandler } from "react-hook-form";
import { jobAlertsSchema, type JobAlertsFormValues } from "./schemas";

export function JobAlertsForm() {
  const jobAlertsForm = useForm<JobAlertsFormValues>({
    resolver: zodResolver(jobAlertsSchema),
    defaultValues: {
      role: "",
      location: "",
    },
  });

  const onSubmitJobAlerts: SubmitHandler<JobAlertsFormValues> = (data) => {
    console.log("Job Alerts submitted:", data);
    // Handle form submission here
  };

  return (
    <Form {...jobAlertsForm}>
      <form
        onSubmit={jobAlertsForm.handleSubmit(onSubmitJobAlerts)}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5">
          <FormField
            control={jobAlertsForm.control}
            name="role"
            render={({ field }) => (
              <div className="space-y-1">
                <FormItem className="mb-0">
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <Image
                          src={"/icons/briefcase.svg"}
                          alt="icon"
                          width={24}
                          height={24}
                          className="size-6"
                        />
                      </div>
                      <Input
                        {...field}
                        className="pl-12"
                        placeholder="Your job roles"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />

          <FormField
            control={jobAlertsForm.control}
            name="location"
            render={({ field }) => (
              <div className="space-y-1">
                <FormItem className="mb-0">
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <Image
                          src={"/icons/MapPinLine.svg"}
                          alt="icon"
                          width={24}
                          height={24}
                          className="size-6"
                        />
                      </div>
                      <Input
                        {...field}
                        className="pl-12"
                        placeholder="City, state, country name"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
        </div>

        <div className="mt-8">
          <Button type="submit">
            <span className="w-[146px]">Save Changes</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
