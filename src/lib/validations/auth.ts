import { z } from "zod"

// Step 1: Personal Information
export const personalInfoSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

// Step 2: Company Information
export const companyInfoSchema = z.object({
  companyType: z.enum(["LTD", "Individual"]),
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
})

// Step 3: Trade Details
export const tradeDetailsSchema = z.object({
  tradeType: z.string().min(1, "Please select a trade type"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  qualifications: z.array(z.string()),
})

// Step 4: Portfolio & Certification
export const portfolioSchema = z.object({
  images: z.array(z.string()).optional(),
  yearsOfExperience: z.string().min(1, "Please select years of experience"),
  description: z.string().min(10, "Description must be at least 10 characters"),
})

// Phone Verification
export const phoneVerificationSchema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  countryCode: z.string(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms of service and privacy policy",
  }),
})

// OTP Verification
export const otpVerificationSchema = z.object({
  otp: z.string().min(5, "OTP must be 5 digits"),
})

// Registration Type
export const registrationTypeSchema = z.object({
  type: z.enum(["Client", "ServiceProvider"]),
  trade: z.string().optional(),
})
