"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { notificationSchema, type NotificationFormValues } from "./schemas";

export function NotificationForm() {
  const notificationForm = useForm<NotificationFormValues>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      notifyNewJobs: true,
      notifyProfileViews: false,
      notifyRejections: true,
      notifyExpiringApplications: false,
      notifySavedJobs: true,
    },
  });

  const onSubmitNotification: SubmitHandler<NotificationFormValues> = (
    data
  ) => {
    console.log("Notification settings submitted:", data);
    // Handle form submission here
  };

  // Define notification items with proper typing
  const notificationItems: Array<{
    name: keyof NotificationFormValues;
    label: string;
  }> = [
    {
      name: "notifyNewJobs",
      label: "Notify me about new construction job postings",
    },
    {
      name: "notifyExpiringApplications",
      label: "Alert me when my job applications are about to expire",
    },
    {
      name: "notifyProfileViews",
      label: "Notify me when an employer views my profile",
    },
    {
      name: "notifySavedJobs",
      label: "Send me an update when I have up to 5 saved job alerts",
    },
    {
      name: "notifyRejections",
      label: "Notify me if an employer rejects my application",
    },
  ];

  return (
    <Form {...notificationForm}>
      <form
        onSubmit={notificationForm.handleSubmit(onSubmitNotification)}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notificationItems.map((item) => (
            <FormField
              key={item.name}
              control={notificationForm.control}
              name={item.name}
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-dark-primary data-[state=checked]:text-white"
                    />
                  </FormControl>
                  <FormLabel
                    className={`font-normal transition-colors ${
                      field.value ? "text-black" : "text-theme-silver"
                    }`}
                  >
                    {item.label}
                  </FormLabel>
                </FormItem>
              )}
            />
          ))}
        </div>
      </form>
    </Form>
  );
}
