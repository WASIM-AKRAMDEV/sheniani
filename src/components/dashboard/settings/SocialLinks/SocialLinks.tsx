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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import Image from "next/image";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const socialPlatforms = [
  { id: "facebook", name: "Facebook", icon: "/icons/facebook-symbol.svg" },
  { id: "twitter", name: "Twitter", icon: "/icons/x-symbol.svg" },
  { id: "instagram", name: "Instagram", icon: "/icons/instagram-symbol.svg" },
  { id: "youtube", name: "Youtube", icon: "/icons/youtube-symbol.svg" },
];

const socialLinkSchema = z.object({
  platform: z.string().min(1, "Platform is required"),
  url: z.string().url("Please enter a valid URL").or(z.literal("")),
});

const formSchema = z.object({
  socialLinks: z.array(socialLinkSchema),
});

type FormValues = z.infer<typeof formSchema>;

export default function SocialLinks() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      socialLinks: [
        { platform: "facebook", url: "" },
        { platform: "twitter", url: "" },
        { platform: "instagram", url: "" },
        { platform: "youtube", url: "" },
      ],
    },
  });

  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: "socialLinks",
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Saved social links:", data.socialLinks);
      toast.success("Social links updated successfully");
    } catch {
      toast.error("Failed to update social links");
    }
  };

  const addSocialLink = () => {
    if (fields.length < 4) {
      const usedPlatforms = fields.map((field) =>
        form.getValues(`socialLinks.${fields.indexOf(field)}.platform`)
      );
      const availablePlatform = socialPlatforms.find(
        (platform) => !usedPlatforms.includes(platform.id)
      );

      if (availablePlatform) {
        append({ platform: availablePlatform.id, url: "" });
      }
    } else {
      toast.info("You can only add up to 4 social platforms");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        {fields.map((field, index) => (
          <div key={field.id} className="mb-6">
            <FormLabel className="block text-light-black text-base font-bold mb-2">
              Social Link {index + 1}
            </FormLabel>
            <div className="flex items-center gap-2">
              <div className="flex flex-1 items-center gap-3 border border-theme-gray rounded-md overflow-hidden">
                <div
                  className="relative w-[240px] h-9 border-r border-theme-gray"
                  style={{ borderRight: "1px solid #e5e7eb" }}
                >
                  <FormField
                    control={form.control}
                    name={`socialLinks.${index}.platform`}
                    render={({ field }) => (
                      <FormItem className="mb-0">
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 pt-0 border-0 rounded-none focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-0 shadow-none">
                              <SelectValue>
                                {(() => {
                                  const platform = socialPlatforms.find(
                                    (p) => p.id === field.value
                                  );
                                  return (
                                    <div className="flex items-center">
                                      <Image
                                        src={platform?.icon || ""}
                                        alt={platform?.name || ""}
                                        width={16}
                                        height={16}
                                        className="mr-2 size-4"
                                      />
                                      <span>{platform?.name}</span>
                                    </div>
                                  );
                                })()}
                              </SelectValue>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {socialPlatforms.map((platform) => (
                              <SelectItem key={platform.id} value={platform.id}>
                                <div className="flex items-center">
                                  <Image
                                    src={platform.icon || "/placeholder.svg"}
                                    alt={platform.name}
                                    width={16}
                                    height={16}
                                    className="mr-2 size-4"
                                  />
                                  <span>{platform.name}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name={`socialLinks.${index}.url`}
                  render={({ field }) => (
                    <FormItem className="flex-1 mb-0">
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Profile link/url..."
                          className="h-12 flex-1 border-0 rounded-none focus:ring-0 focus:ring-offset-0 focus:outline-none focus:border-0 placeholder:text-light-para !shadow-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-12.5 bg-smoke hover:bg-dark-smoke rounded-md"
                style={{ marginLeft: 0 }}
                onClick={() => remove(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Error messages displayed outside the input box */}
            <div className="mt-1">
              <FormField
                control={form.control}
                name={`socialLinks.${index}.platform`}
                render={() => <FormMessage />}
              />
              <FormField
                control={form.control}
                name={`socialLinks.${index}.url`}
                render={() => <FormMessage className="text-error text-sm" />}
              />
            </div>
          </div>
        ))}

        {fields.length < 4 && (
          <Button
            type="button"
            variant="outline"
            className="mt-4 mb-8"
            onClick={addSocialLink}
          >
            Add Social Link
          </Button>
        )}

        <div className="flex justify-start mt-12.5">
          <Button type="submit">
            <span className="font-lato text-base font-semibold">
              Save Changes
            </span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
