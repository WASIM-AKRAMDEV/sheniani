"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import { AdFormStep1 } from "./ad-form-step1"
import { AdFormStep2 } from "./ad-form-step2"
import { adFormSchema, type AdFormData } from "@/types/create-ads"

export function CreateAdForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<AdFormData>({
    resolver: zodResolver(adFormSchema),
    defaultValues: {
      adTitle: "",
      date: "",
      serviceCategory: "",
      offerType: "",
      adDescription: "",
      images: [],
      videos: [],
      originalPrice: "",
      discountedPrice: "",
      adDuration: "",
      promoValidUntil: "",
      paymentMethod: "",
      totalAdCost: "",
    },
  })

  const onSubmit = async (data: AdFormData) => {
    setIsSubmitting(true)
    try {
      console.log("Form submitted:", data)
      // TODO: Implement API call to create ad
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate API call

      // Reset form and redirect or show success message
      form.reset()
      setCurrentStep(1)
    } catch (error) {
      console.error("Error creating ad:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNext = async () => {
    const isValid = await form.trigger(["adTitle", "date", "serviceCategory", "offerType", "adDescription"])
    if (isValid) {
      setCurrentStep(2)
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">Create an Ad</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {currentStep === 1 && <AdFormStep1 form={form} onNext={handleNext} />}
          {currentStep === 2 && <AdFormStep2 form={form} isSubmitting={isSubmitting} />}
        </form>
      </Form>
    </div>
  )
}
