"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
import type { z } from "zod";
import { portfolioSchema } from "@/lib/validations/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { ImageIcon, X } from "lucide-react";
import { toast } from "sonner";
import { setCurrentStep } from "@/store/features/auth/authSlice";
import Image from "next/image";

type FormValues = z.infer<typeof portfolioSchema>;

type ImagePreview = {
  url: string;
  file: File;
};

export function PortfolioForm() {
  const router = useRouter();
  const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([]);
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([null, null, null]);

  const form = useForm<FormValues>({
    resolver: zodResolver(portfolioSchema),
    defaultValues: {
      images: [],
      yearsOfExperience: "",
      description: "",
    },
  });

  useEffect(() => {
    setCurrentStep(4);
  }, []);

  const handleImageUpload =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      // Check file type
      if (!file.type.startsWith("image/")) {
        toast.error("Please select an image file");
        return;
      }

      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;

        // Create a new array with the new image preview
        const newPreviews = [...imagePreviews];
        newPreviews[index] = { url: result, file };
        setImagePreviews(newPreviews);

        // Update form value
        const imageUrls = newPreviews
          .filter(Boolean)
          .map((preview) => preview.url);
        form.setValue("images", imageUrls, { shouldValidate: true });
      };

      reader.readAsDataURL(file);
    };

  const handleDeleteImage = (index: number) => {
    // Remove the image preview
    const newPreviews = [...imagePreviews];
    newPreviews[index] = undefined as never;
    setImagePreviews(newPreviews);

    // Clear the file input
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index]!.value = "";
    }

    // Update form value
    const imageUrls = newPreviews.filter(Boolean).map((preview) => preview.url);
    form.setValue("images", imageUrls, { shouldValidate: true });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(data: FormValues) {
    toast.success("Portfolio information saved");
    router.push("/phone-verification");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="images"
          render={() => (
            <FormItem>
              <FormLabel>Upload Images</FormLabel>
              <div className="flex gap-4">
                <div className="w-1/2 h-full rounded-md overflow-hidden">
                  <input
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    ref={(el) => {
                      fileInputRefs.current[0] = el;
                    }}
                    onChange={handleImageUpload(0)}
                  />

                  {imagePreviews[0] ? (
                    <div className="relative h-full w-full group">
                      <Image
                        src={imagePreviews[0].url || "/placeholder.svg"}
                        alt="Preview 1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-full w-full object-cover rounded-md"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => handleDeleteImage(0)}
                        >
                          <X className="h-4 w-4 text-white" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="h-full bg-dark-smoke rounded-md flex flex-col items-center justify-center cursor-pointer hover:border hover:border-dark-primary/50"
                      onClick={() => fileInputRefs.current[0]?.click()}
                    >
                      <ImageIcon className="h-6 w-6 text-theme-silver mb-2" />
                      <span className="text-xs text-light-black font-semibold">
                        Browse Image
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex w-1/2 flex-col gap-2">
                  {[1, 2].map((index) => (
                    <div
                      key={index}
                      className="h-[100px] w-full rounded-md overflow-hidden"
                    >
                      <input
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        ref={(el) => {
                          fileInputRefs.current[index] = el;
                        }}
                        onChange={handleImageUpload(index)}
                      />

                      {imagePreviews[index] ? (
                        <div className="relative h-full w-full group">
                          <Image
                            src={imagePreviews[index].url || "/placeholder.svg"}
                            alt={`Preview ${index + 1}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="h-full w-full object-cover rounded-md"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => handleDeleteImage(index)}
                            >
                              <X className="h-4 w-4 text-white" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="h-full bg-dark-smoke rounded-md flex flex-col items-center justify-center cursor-pointer hover:border hover:border-dark-primary/50"
                          onClick={() => fileInputRefs.current[index]?.click()}
                        >
                          <ImageIcon className="h-6 w-6 text-theme-silver mb-2" />
                          <span className="text-xs text-light-black font-semibold">
                            Browse Image
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="yearsOfExperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Years of Experience</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Enter Years of Experience" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="0-1">0-1 years</SelectItem>
                  <SelectItem value="1-3">1-3 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5-10">5-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter Description"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mt-5">
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
