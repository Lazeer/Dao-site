import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonProps) {
  const base =
    "btn-polish inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md px-5 text-sm font-medium";
  const style =
    variant === "primary"
      ? "btn-polish-primary"
      : "btn-polish-secondary";

  return (
    <Link href={href} className={`${base} ${style} ${className}`}>
      {children}
    </Link>
  );
}
