import { z } from "zod"

// Define the schema in one place
export const adFormSchema = z.object({
  // Step 1 fields
  adTitle: z.string().min(1, "Ad title is required"),
  date: z.string().min(1, "Date is required"),
  serviceCategory: z.string().min(1, "Service category is required"),
  offerType: z.string().min(1, "Offer type is required"),
  adDescription: z.string().min(1, "Description is required"),
  images: z.array(z.instanceof(File)).optional(),
  videos: z.array(z.instanceof(File)).optional(),
  

  // Step 2 fields
  originalPrice: z.string().min(1, "Original price is required"),
  discountedPrice: z.string().min(1, "Discounted price is required"),
  adDuration: z.string().min(1, "Ad duration is required"),
  promoValidUntil: z.string().min(1, "Promo valid until is required"),
  paymentMethod: z.string().min(1, "Payment method is required"),
  totalAdCost: z.string().min(1, "Total ad cost is required"),
})

// Export the type derived from the schema
export type AdFormData = z.infer<typeof adFormSchema>

export type MediaUploadProps = {
  multiple?: boolean
  accept: string
  maxFiles?: number
  onFilesChange: (files: File[]) => void
  files: File[]
  placeholder?: string
  className?: string
}
