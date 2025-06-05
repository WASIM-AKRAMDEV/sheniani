"use client";

import type React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CirclePlus, CloudUpload, MoreHorizontal, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";

type CVFile = {
  id: string;
  name: string;
  size: number;
  file: File;
};

const personalSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  title: z.string().optional(),
  experience: z.string().optional(),
  education: z.string().optional(),
  website: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
});

type FormValues = z.infer<typeof personalSchema>;

function Personal() {
  const [image, setImage] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [cvFiles, setCvFiles] = useState<CVFile[]>([
    {
      id: "1",
      name: "Professional Resume",
      size: 3.5 * 1024 * 1024,
      file: new File([], "resume.pdf"),
    },
    {
      id: "2",
      name: "Product Designer",
      size: 4.7 * 1024 * 1024,
      file: new File([], "designer.pdf"),
    },
  ]);
  const cvFileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(personalSchema),
    defaultValues: {
      fullName: "",
      title: "",
      experience: "",
      education: "",
      website: "",
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      toast.success("Personal information updated successfully");
    } catch {
      toast.error("Failed to update personal information");
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    validateAndSetImage(file);
  };

  const validateAndSetImage = (file?: File) => {
    setImageError(null);

    if (!file) return;

    // Check file size (5MB = 5 * 1024 * 1024 bytes)
    if (file.size > 5 * 1024 * 1024) {
      setImageError("Image size exceeds 5MB limit");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    validateAndSetImage(file);
  };

  const removeImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCVFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      addCVFile(file);
    }
  };

  const handleCVFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === "application/pdf") {
      addCVFile(file);
    }
  };

  const addCVFile = (file: File) => {
    const fileName = file.name.replace(/\.[^/.]+$/, "");

    const newFile: CVFile = {
      id: Date.now().toString(),
      name: fileName,
      size: file.size,
      file: file,
    };

    setCvFiles((prev) => [...prev, newFile]);
    toast.success("CV file added successfully");

    if (cvFileInputRef.current) {
      cvFileInputRef.current.value = "";
    }
  };

  const deleteCVFile = (id: string) => {
    setCvFiles((prev) => prev.filter((file) => file.id !== id));
    toast.success("CV file removed");
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
    );
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h4 className="font-medium text-black text-lg mb-4.5">
            Basic Information
          </h4>

          <div className="flex justify-between gap-12 mb-10">
            <div className="max-w-[240px]">
              <p className="text-sm mb-2">Profile Picture</p>

              {image ? (
                <div className="relative w-[240px] h-[240px] border-2 border-dashed border-theme-gray rounded-md overflow-hidden flex items-center justify-center">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt="Profile picture"
                    fill
                    className="object-cover"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="relative z-10 h-8 w-8 rounded-full"
                    onClick={removeImage}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <div
                    className="w-[240px] h-[240px] border-2 border-dashed border-theme-gray bg-smoke rounded-md flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <CloudUpload className="size-12 text-gray-400 mb-4" />
                    <p className="text-sm font-medium text-center mb-1.5">
                      Browse photo{" "}
                      <span className="text-light-para">or drop here</span>
                    </p>
                    <p className="text-xs text-theme-silver text-center">
                      A photo larger than 400 pixels work best. Max photo size 5
                      MB.
                    </p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                  {imageError && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertDescription className="flex items-center">
                        <X className="h-4 w-4 mr-2" />
                        {imageError}
                      </AlertDescription>
                    </Alert>
                  )}
                </>
              )}
            </div>

            {/* Form fields */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-7">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title/Headline</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-7">
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Experience" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="entry">
                            Entry Level (0-2 years)
                          </SelectItem>
                          <SelectItem value="mid">
                            Mid Level (3-5 years)
                          </SelectItem>
                          <SelectItem value="senior">
                            Senior Level (5+ years)
                          </SelectItem>
                          <SelectItem value="executive">
                            Executive Level
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Education</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Education" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="highschool">
                            High School
                          </SelectItem>
                          <SelectItem value="associate">
                            Associate Degree
                          </SelectItem>
                          <SelectItem value="bachelor">
                            Bachelor&apos;s Degree
                          </SelectItem>
                          <SelectItem value="master">
                            Master&apos;s Degree
                          </SelectItem>
                          <SelectItem value="phd">PhD or Doctorate</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="mb-8">
                    <FormLabel>Personal Website</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <Image
                            alt="link"
                            src="/icons/link.svg"
                            className="text-para"
                            width={20}
                            height={20}
                          />
                        </div>
                        <Input
                          className="pl-12"
                          placeholder="Website URL"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Save Changes</Button>
            </div>
          </div>

          {/* CV/Resume section */}
          <div className="mt-10">
            <h4 className="text-black font-medium text-lg mb-4.5">
              Your CV/Resume
            </h4>

            <div className="flex gap-4 mb-6 flex-wrap">
              {cvFiles.map((cvFile) => (
                <div
                  key={cvFile.id}
                  className="bg-smoke p-4 rounded-lg flex items-center justify-between w-[350px] h-20"
                >
                  <div className="flex items-center">
                    <div className="mr-3">
                      <Image
                        alt="file"
                        src="/icons/FileText.svg"
                        className="text-para"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div>
                      <p className="text-para text-sm font-medium">
                        {cvFile.name}
                      </p>
                      <p className="text-sm text-theme-silver">
                        {formatFileSize(cvFile.size)}
                      </p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="size-6 text-theme-silver" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => deleteCVFile(cvFile.id)}>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>

            {/* Add CV/Resume button */}
            <div
              className="border-2 border-dashed border-theme-gray rounded-lg p-5 flex items-center gap-3 cursor-pointer w-[350px]"
              onClick={() => cvFileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleCVFileDrop}
            >
              <div>
                <CirclePlus className="size-8 text-para" />
              </div>
              <div>
                <p className="text-para text-sm font-medium mb-0.5">
                  Add CV/Resume
                </p>
                <p className="text-sm text-para">
                  Browse file or drop here. only pdf
                </p>
                <input
                  type="file"
                  ref={cvFileInputRef}
                  accept=".pdf"
                  className="hidden"
                  onChange={handleCVFileChange}
                />
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Personal;
