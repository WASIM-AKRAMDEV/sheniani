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
import { tradeDetailsSchema } from "@/lib/validations/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { setCurrentStep  } from "@/store/features/auth/authSlice";
import Image from "next/image";

type FormValues = z.infer<typeof tradeDetailsSchema>;

const services = [
  { id: "plumbing", label: "Plumbing", icon: "/icons/plumbing.svg" },
  { id: "remodeling", label: "Remodeling", icon: "/icons/remodeling.svg" },
  { id: "roofing", label: "Roofing", icon: "/icons/roofing.svg" },
  { id: "painting", label: "Painting", icon: "/icons/painting.svg" },
];

const qualifications = [
  { id: "undergraduate", label: "Undergraduate" },
  { id: "bachelors", label: "Bachelors" },
  { id: "masters", label: "Masters" },
  { id: "phd", label: "Phd" },
];

export function TradeDetailsForm() {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(tradeDetailsSchema),
    defaultValues: {
      tradeType: "",
      services: [],
      qualifications: [],
    },
  });

  useEffect(() => {
    setCurrentStep(3);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(data: FormValues) {
    toast.success("Trade details saved");
    router.push("/register/portfolio");
  }

  // Toggle service selection
  const toggleService = (serviceId: string) => {
    const currentServices = form.getValues().services;
    const isSelected = currentServices.includes(serviceId);

    if (isSelected) {
      form.setValue(
        "services",
        currentServices.filter((id) => id !== serviceId),
        { shouldValidate: true }
      );
    } else {
      form.setValue("services", [...currentServices, serviceId], {
        shouldValidate: true,
      });
    }
  };

  // Toggle qualification selection
  const toggleQualification = (qualificationId: string) => {
    const currentQualifications = form.getValues().qualifications;
    const isSelected = currentQualifications.includes(qualificationId);

    if (isSelected) {
      form.setValue(
        "qualifications",
        currentQualifications.filter((id) => id !== qualificationId),
        { shouldValidate: true }
      );
    } else {
      form.setValue(
        "qualifications",
        [...currentQualifications, qualificationId],
        { shouldValidate: true }
      );
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="tradeType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trade Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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

        <FormField
          control={form.control}
          name="services"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Specific Services</FormLabel>
              <div className="grid grid-cols-3 gap-3">
                {services.map((service) => (
                  <Button
                    key={service.id}
                    type="button"
                    variant="outline"
                    className={` font-medium ${
                      field.value.includes(service.id)
                        ? "border-dark-primary bg-dark-primary text-white hover:bg-dark-primary hover:text-white"
                        : ""
                    }`}
                    onClick={() => toggleService(service.id)}
                  >
                    <Image
                      src={service.icon}
                      alt={service.label}
                      width={24}
                      height={24}
                      className="mr-1 make-gray"
                    />
                    {service.label}
                  </Button>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="qualifications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qualifications</FormLabel>
              <div className="grid grid-cols-3 gap-3">
                {qualifications.map((qualification) => (
                  <Button
                    key={qualification.id}
                    type="button"
                    variant="outline"
                    className={` font-medium ${
                      field.value.includes(qualification.id)
                        ? "border-dark-primary bg-dark-primary text-white hover:bg-dark-primary hover:text-white"
                        : ""
                    }`}
                    onClick={() => toggleQualification(qualification.id)}
                  >
                    {qualification.label}
                  </Button>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mt-5">
          Next
        </Button>
      </form>
    </Form>
  );
}
