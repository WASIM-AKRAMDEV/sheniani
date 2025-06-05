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
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import Image from "next/image";
import { useAppDispatch } from "@/store/hooks";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "@/store/features/auth/authSlice";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

type FormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const form = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      dispatch(loginStart());

      // Simulate login API call - this would be replaced with actual API integration later
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful login - this would be replaced with actual API response
      dispatch(
        loginSuccess({
          user: {
            id: "user_123",
            email: data.email,
            name: "Test User",
            role: "service-provider",
          },
          token: "mock_jwt_token",
        })
      );

      toast.success("Login successful");
      router.push("/dashboard");
    } catch {
      dispatch(loginFailure("Invalid email or password"));
      toast.error("Invalid email or password");
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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

          <div className="flex items-center justify-between mb-10">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-black"
                    />
                  </FormControl>
                  <FormLabel className="text-sm text-para font-normal font-lato">
                    Remember Me
                  </FormLabel>
                </FormItem>
              )}
            />
            <Link
              href="/forgot-password"
              className="text-sm text-para font-lato hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Log In
          </Button>

          <div className="text-center text-sm font-lato text-para mt-3 mb-7">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-dark-primary hover:underline"
            >
              Sign up
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
