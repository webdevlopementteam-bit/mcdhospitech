import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-saffron-500 text-white hover:bg-saffron-600 shadow-sm shadow-saffron-500/20",
  secondary:
    "bg-navy-800 text-white hover:bg-navy-700",
  outline:
    "border border-white/30 text-white hover:bg-white/10",
  ghost:
    "border border-navy-800/15 text-navy-800 hover:bg-navy-50",
};

type LinkProps = ComponentProps<typeof Link>;

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: LinkProps & { variant?: Variant }) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
