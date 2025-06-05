import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "primary" | "secondary";
  size?: "default" | "sm" | "lg" | "xl";
}

const inputVariants = cva(
  "file:text-foreground placeholder:text-foreground/50 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex min-w-0 rounded-lg border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "",
        primary: "bg-background text-foreground",
        secondary: "",
      },
      size: {
        sm: "h-9.5",
        default: "h-10.5",
        lg: "h-12",
        xl: "h-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, variant, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-light-para selection:bg-primary selection:text-primary-foreground dark:bg-input/30 text-black border-theme-gray flex h-12 w-full min-w-0 rounded-lg border bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          inputVariants({ variant, size, className })
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
