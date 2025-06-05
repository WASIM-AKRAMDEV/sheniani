"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { privacySchema, type PrivacyFormValues } from "./schemas";

export function PrivacySettings() {
  const privacyForm = useForm<PrivacyFormValues>({
    resolver: zodResolver(privacySchema),
    defaultValues: {
      profilePublic: true,
      resumePublic: false,
    },
  });

  const onSubmitPrivacy: SubmitHandler<PrivacyFormValues> = (data) => {
    console.log("Privacy settings submitted:", data);
    // Handle form submission here
  };

  // Define privacy items with proper typing
  const privacyItems: Array<{
    title: string;
    name: keyof PrivacyFormValues;
  }> = [
    { title: "Profile Privacy", name: "profilePublic" },
    { title: "Resume Privacy", name: "resumePublic" },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {privacyItems.map((item) => (
          <div key={item.name}>
            <h2 className="text-base text-light-black font-bold mb-4">
              {item.title}
            </h2>
            <div className="border border-theme-gray  rounded-sm">
              <div className="flex items-center h-11 px-4">
                <div className="flex items-center border-r">
                  <Switch
                    checked={privacyForm.watch(item.name)}
                    onCheckedChange={(checked) =>
                      privacyForm.setValue(item.name, checked)
                    }
                    className="data-[state=checked]:bg-dark-primary w-9 h-5.5"
                  />
                  <span
                    className={`ml-2 me-3 font-medium font-lato ${
                      privacyForm.watch(item.name) ? "text-black" : "text-error"
                    }`}
                  >
                    {privacyForm.watch(item.name) ? "YES" : "NO"}
                  </span>
                </div>
                <div className="px-4">
                  <span className="text-theme-silver text-sm font-medium">
                    Your {item.name === "profilePublic" ? "profile" : "resume"}{" "}
                    is {privacyForm.watch(item.name) ? "public" : "private"} now
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        type="button"
        className="mt-8 w-[146px]"
        onClick={privacyForm.handleSubmit(onSubmitPrivacy)}
      >
        Save Changes
      </Button>
    </div>
  );
}
