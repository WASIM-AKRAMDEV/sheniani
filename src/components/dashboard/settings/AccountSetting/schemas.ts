import { z } from "zod";

export const contactInfoSchema = z.object({
  phone: z.string(),
  email: z.string().email(),
  mapLocation: z.string().optional(),
  countryCode: z.string(),
});

export const notificationSchema = z.object({
  notifyNewJobs: z.boolean(),
  notifyProfileViews: z.boolean(),
  notifyRejections: z.boolean(),
  notifyExpiringApplications: z.boolean(),
  notifySavedJobs: z.boolean(),
});

export const jobAlertsSchema = z.object({
  role: z.string().min(1, "Job role is required"),
  location: z.string().min(1, "Location is required"),
});

export const privacySchema = z.object({
  profilePublic: z.boolean(),
  resumePublic: z.boolean(),
});

export const passwordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Define types for form values
export type ContactInfoFormValues = z.infer<typeof contactInfoSchema>;
export type NotificationFormValues = z.infer<typeof notificationSchema>;
export type JobAlertsFormValues = z.infer<typeof jobAlertsSchema>;
export type PrivacyFormValues = z.infer<typeof privacySchema>;
export type PasswordFormValues = z.infer<typeof passwordSchema>;
