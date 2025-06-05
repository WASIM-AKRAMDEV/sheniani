"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { CloudUpload, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Link from "next/link";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

type ImagePreviewType = { url: string; file: File } | null;

interface JobData {
  id: number;
  title: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  profileRate: number;
  clientBudget: {
    min: number;
    max: number;
  };
}

interface SubmitProposalFormProps {
  job: JobData;
}

const FREQUENCY_OPTIONS = ["Weekly", "Bi-Weekly", "Monthly"];
const PERCENT_OPTIONS = ["5%", "10%", "15%", "20%", "25%"];

// Define the validation schema
const proposalSchema = z.object({
  hourlyRate: z
    .string()
    .min(1, "Hourly rate is required")
    .refine(
      (val) => {
        const num = Number.parseFloat(val);
        return !isNaN(num) && num > 0;
      },
      { message: "Hourly rate must be a positive number" }
    ),
  frequency: z.string().optional(),
  percentIncrease: z.string().optional(),
  coverLetter: z.string().min(1, "Cover letter is required"),
  contractQuestion: z.string().optional(),
  satisfactionQuestion: z.string().optional(),
  disputeQuestion: z.string().optional(),
  startTimeQuestion: z.string().min(1, "Please specify when you can start"),
  attachment: z.any().optional(),
});

type FormValues = z.infer<typeof proposalSchema>;

export default function SubmitProposalForm({ job }: SubmitProposalFormProps) {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<ImagePreviewType>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  // Fix: Correct the ref initialization to support HTMLInputElement or null
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      hourlyRate: "",
      frequency: "",
      percentIncrease: "",
      coverLetter: "",
      contractQuestion: "",
      satisfactionQuestion: "",
      disputeQuestion: "",
      startTimeQuestion: "",
      attachment: null,
    },
  });

  // Calculate derived values
  const numericRate = Number.parseFloat(form.watch("hourlyRate")) || 0;
  const serviceFee = (numericRate * 0.1).toFixed(2);
  const netRate = (numericRate * 0.9).toFixed(2);

  const handleDeleteImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    form.setValue("attachment", null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setImageError("Please select a valid image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setImageError("Image size should be less than 5MB.");
      return;
    }

    setImageError(null);
    form.setValue("attachment", file);

    const reader = new FileReader();
    reader.onload = (event) => {
      setImagePreview({
        url: event.target?.result as string,
        file,
      });
    };

    reader.readAsDataURL(file);
  };

  async function onSubmit(data: FormValues) {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", data);
      toast.success("Proposal submitted successfully");
      router.push(`/dashboard/service-provider/proposal-details/${job.id}`);
    } catch {
      toast.error("Failed to submit proposal. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-start justify-start gap-9"
      >
        <ProposalSettings />
        <JobDetails job={job} />
        <TermsSection
          job={job}
          form={form}
          serviceFee={serviceFee}
          netRate={netRate}
        />
        <AdditionalDetailsSection
          form={form}
          imagePreview={imagePreview}
          imageError={imageError}
          fileInputRef={fileInputRef}
          handleImageUpload={handleImageUpload}
          handleDeleteImage={handleDeleteImage}
        />
        <div className="flex items-center gap-3">
          <Button type="submit" className="w-64">
            Submit a proposal
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="w-[104px]"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}

function ProposalSettings() {
  return (
    <div className="border-2 border-theme-gray-two rounded-lg p-8 w-full flex flex-col items-start justify-start">
      <p className="text-lg font-bold mb-5">Proposal settings</p>
      <p className="text-para font-lato mb-4">
        This proposal requires
        <span className="text-black font-bold"> 19 Connects</span>
      </p>
      <p className="text-para font-lato">
        When you submit this proposal, you&apos;ll have{" "}
        <span className="text-black font-bold"> 141 Connects </span> remaining.
      </p>
    </div>
  );
}

function JobDetails({ job }: { job: JobData }) {
  const [expanded, setExpanded] = useState(false);

  const itemsToShow = expanded ? job.responsibilities.length : 3;

  const toggleExpanded = () => setExpanded((prev) => !prev);
  return (
    <div className="border-2 border-theme-gray-two rounded-lg p-8 w-full">
      <h3 className="text-xl font-bold mb-6">Job details</h3>
      <div className="mb-8">
        <h4 className="text-lg font-bold mb-4">{job.title}</h4>
        <p className="text-para font-lato font-base">{job.description}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-bold mb-4">Responsibilities</h4>
        <ul className="list-disc list-inside text-para font-lato flex flex-col gap-3 mb-8">
          {job.responsibilities
            .slice(0, itemsToShow)
            .map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          {job.responsibilities.length > 3 && (
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleExpanded();
              }}
              className="text-theme-orange font-bold"
            >
              {expanded ? "View Less" : "View More"}
            </Link>
          )}
        </ul>
        <Link href={"#"} className="text-theme-orange text-base font-medium mb-6">
          View Job Posting
        </Link>
      </div>

      <h2 className="text-xl font-bold mb-4">Skills and expertise</h2>
      <div className="flex items-center gap-2">
        {job.skills.map((skill) => (
          <Button
            key={skill}
            variant="secondary"
            className="text-para font-medium rounded-full bg-smoke"
          >
            {skill}
          </Button>
        ))}
      </div>
    </div>
  );
}

function TermsSection({
  job,
  form,
  serviceFee,
  netRate,
}: {
  job: JobData;
  form: UseFormReturn<FormValues>;
  serviceFee: string;
  netRate: string;
}) {
  return (
    <div className="border-2 border-theme-gray-two rounded-lg p-8 w-full">
      <h2 className="text-xl font-bold mb-6">Terms</h2>

      <div className="job-bid">
        <p className="text-lg font-bold mb-4">
          What is the rate you&apos;d like to bid for this job?
        </p>
        <div className="flex items-center justify-between max-w-[780px]">
          <p className="text-para font-base font-lato">
            Your profile rate: ${job.profileRate.toFixed(2)}/hr
          </p>
          <p className="text-para font-base font-lato">
            Client&apos;s budget: ${job.clientBudget.min.toFixed(2)} - $
            {job.clientBudget.max.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="border-t border-theme-gray-two my-8">
        <div className="py-8 border-b border-theme-gray-two ">
          <div className="max-w-[780px] flex items-center justify-between">
            <div>
              <p className="text-lg font-bold">Hourly Rate</p>
              <p className="text-para font-base font-lato">
                Total amount the client will see on your proposal
              </p>
            </div>
            <div className="flex items-end gap-3">
              <FormField
                control={form.control}
                name="hourlyRate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder={`$${job.profileRate.toFixed(2)}`}
                        className="border-1 border-theme-sliver px-5 py-5 text-right shadow-none placeholder:text-right placeholder:text-para font-base placeholder:font-lato"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-right" />
                  </FormItem>
                )}
              />
              <p className="font-bold font-lato">/hr</p>
            </div>
          </div>
        </div>
        <div className="py-8 border-b border-theme-gray-two ">
          <div className="max-w-[780px] flex items-center justify-between">
            <p className="font-bold font-lato">10% Freelancer Service Fee</p>
            <p className="font-bold font-lato">
              <span className="text-para font-base font-lato mr-2 font-normal">
                ${serviceFee}
              </span>
              /hr
            </p>
          </div>
        </div>
        <div className="py-8 border-b border-theme-gray-two ">
          <div className="max-w-[780px] flex items-center justify-between">
            <div>
              <p className="text-lg font-bold ">You&apos;ll receive</p>
              <p className="text-para font-base font-lato">
                The estimated amount you&apos;ll receive after service fees
              </p>
            </div>
            <div className="flex items-end gap-3">
              <Input
                type="text"
                readOnly
                value={netRate ? `$${netRate}` : ""}
                placeholder={`$${(job.profileRate * 0.9).toFixed(2)}`}
                className="border-1 border-theme-gray px-5 py-5 text-right shadow-none placeholder:text-right placeholder:text-para font-base placeholder:font-lato"
              />
              <p className="font-bold font-lato">/hr</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[780px]">
        <p className="text-lg font-bold mb-3">Schedule a rate increase</p>
        <p className="text-para font-base font-lato mb-5">
          Propose an optional rate increase. If approved by your client, your
          rate will increase automatically over the contract&apos;s lifetime.
          This term can&apos;t be changed once you accept an offer from your
          client.
        </p>

        <div className="mb-5">
          <p className="text-para font-base font-lato mb-2">
            How often do you want a rate increase?
          </p>
          <FormField
            control={form.control}
            name="frequency"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className={`max-w-[345px] h-12 bg-transparent font-lato ${
                        field.value ? "text-black" : "text-para font-base"
                      } focus:outline-none focus:ring-0 focus:ring-transparent`}
                    >
                      <SelectValue placeholder="Select a frequency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-w-[345px] bg-white">
                    {FREQUENCY_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <p className="text-para font-base font-lato mb-2">
            How much of an increase do you want?
          </p>
          <FormField
            control={form.control}
            name="percentIncrease"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className={`max-w-[345px] h-12 bg-transparent font-lato ${
                        field.value ? "text-black" : "text-theme-gray"
                      }`}
                    >
                      <SelectValue placeholder="Select a Percent" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-w-[345px] bg-white">
                    {PERCENT_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}

// Fix: Allow null in the ref object
interface AdditionalDetailsSectionProps {
  form: UseFormReturn<FormValues>;
  imagePreview: ImagePreviewType;
  imageError: string | null;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteImage: () => void;
}

function AdditionalDetailsSection({
  form,
  imagePreview,
  imageError,
  fileInputRef,
  handleImageUpload,
  handleDeleteImage,
}: AdditionalDetailsSectionProps) {
  const questions = [
    { id: "coverLetter", label: "Cover Letter", required: true },
    {
      id: "contractQuestion",
      label: "Do we need to sign a contract before starting the project?",
      required: false,
    },
    {
      id: "satisfactionQuestion",
      label: "What happens if I'm not satisfied with the final result?",
      required: false,
    },
    {
      id: "disputeQuestion",
      label: "How do you handle disputes or disagreements?",
      required: false,
    },
    {
      id: "startTimeQuestion",
      label: "How soon can you start working on this project?",
      required: true,
    },
  ];

  return (
    <div className="additional-details border-2 border-theme-gray-two rounded-lg p-8 w-full">
      <h2 className="text-xl font-bold mb-6">Additional details</h2>

      <div className="flex flex-col gap-8">
        {questions.map((question) => (
          <div key={question.id}>
            <h4 className="font-bold mb-2">
              {question.label}
              {question.required && (
                <span className="text-red-500 ml-1">*</span>
              )}
            </h4>
            <FormField
              control={form.control}
              name={question.id as keyof FormValues}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea className="min-h-[131px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}

        <div className="w-full">
          <p className="font-bold mb-2">Attachment</p>
          <div className="w-full h-[142px]">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageUpload}
            />

            <div className="relative w-full h-full rounded-md border border-theme-gray bg-white group">
              {imagePreview ? (
                <>
                  <div className="w-full h-full relative">
                    <Image
                      src={imagePreview.url || "/placeholder.svg"}
                      alt="Preview"
                      fill
                      className="object-contain rounded-md"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={handleDeleteImage}
                      >
                        <X className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-muted"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <CloudUpload className="h-7 w-7 text-para font-base mb-2" />
                  <span className="text-sm text-light-black font-semibold mb-1.5">
                  Drag Or Upload Project Files
                  </span>
                  <span className="text-sm text-para font-base font-semibold text-center px-4">
                    A photo larger than 400 pixels works best. Max photo size 5
                    MB.
                  </span>
                </div>
              )}
            </div>

            {imageError && (
              <p className="text-sm text-red-500 mt-2">{imageError}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
