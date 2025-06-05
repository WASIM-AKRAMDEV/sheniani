"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { useAppDispatch } from "@/store/hooks";
import {
  registerStart,
  registerSuccess,
  registerFailure,
} from "@/store/features/auth/authSlice";
import Image from "next/image";

const clientRegistrationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type FormValues = z.infer<typeof clientRegistrationSchema>;

export function ClientRegistrationForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const form = useForm<FormValues>({
    resolver: zodResolver(clientRegistrationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      acceptTerms: false,
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      dispatch(registerStart());

      // Simulate API call - this would be replaced with actual API integration later
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful registration - this would be replaced with actual API response
      dispatch(
        registerSuccess({
          user: {
            id: "user_123",
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            role: "client",
          },
          token: "mock_jwt_token",
        })
      );

      toast.success("Registration successful");
      router.push("/phone-verification");
    } catch {
      dispatch(registerFailure("Registration failed. Please try again."));
      toast.error("Registration failed. Please try again.");
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 items-start gap-4 mb-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-[10px]">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="acceptTerms"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-start space-x-2 ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-1 text-black"
                    />
                  </FormControl>
                  <div className="flex-1 flex items-center gap-x-1 text-sm text-para flex-wrap">
                    <span>By providing my number, I agree and accept the</span>
                    <Link
                      href="#"
                      className="text-theme-orange hover:underline whitespace-nowrap"
                    >
                      Terms of Service
                    </Link>
                    <span>and</span>
                    <Link
                      href="#"
                      className="text-theme-orange hover:underline whitespace-nowrap"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-10">
            Create Account
          </Button>

          <div className="text-center text-sm font-lato text-para mt-3 mb-7">
            Already have an account?{" "}
            <Link
              href="/register"
              className="text-dark-primary hover:underline"
            >
              Sign in
            </Link>
          </div>
        </form>
      </Form>

      <div className="relative mb-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-theme-gray" />
        </div>
        <div className="relative flex justify-center text-sm font-lato uppercase">
          <span className="bg-background px-3 text-theme-gray">Or</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <Button
          variant="outline"
          type="button"
          className="flex items-center justify-center gap-3 text-black"
        >
          <Image
            src="/icons/Facebook-logo.svg"
            alt="Facebook"
            width={24}
            height={24}
          />
          <span>Continue with Facebook</span>
        </Button>
        <Button
          variant="outline"
          type="button"
          className="flex items-center justify-center gap-3 text-black"
        >
          <Image src="/icons/Google.svg" alt="Google" width={24} height={24} />
          <span>Continue with Google</span>
        </Button>
        <Button
          variant="outline"
          type="button"
          className="flex items-center justify-center gap-3 text-black"
        >
          <Image src="/icons/Apple.svg" alt="Apple" width={24} height={24} />
          <span>Continue with Apple</span>
        </Button>
      </div>
    </div>
  );
}
