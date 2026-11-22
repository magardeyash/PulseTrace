import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BrutalBadgeProps {
  children: ReactNode;
  variant?: "yellow" | "black" | "blue" | "pink" | "red" | "green" | "zinc";
  className?: string;
  size?: "sm" | "md";
}

export function BrutalBadge({
  children,
  variant = "zinc",
  className,
  size = "md"
}: BrutalBadgeProps) {
  const variants = {
    yellow: "bg-amber-400/10 text-amber-400 border-amber-400/30 shadow-[0_0_12px_rgba(251,191,36,0.15)]",
    black: "bg-white/10 text-white border-white/15 shadow-sm",
    blue: "bg-blue-400/10 text-blue-400 border-blue-400/30 shadow-[0_0_12px_rgba(96,165,250,0.15)]",
    pink: "bg-purple-400/10 text-purple-400 border-purple-400/30 shadow-[0_0_12px_rgba(192,132,252,0.15)]",
    red: "bg-red-400/10 text-red-400 border-red-400/30 shadow-[0_0_12px_rgba(248,113,113,0.15)]",
    green: "bg-emerald-400/10 text-emerald-400 border-emerald-400/30 shadow-[0_0_12px_rgba(52,211,153,0.15)]",
    zinc: "bg-zinc-800/80 text-zinc-300 border-white/[0.08]",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-xs",
  };

  return (
    <span className={cn(
      "font-bold tracking-tight border rounded-full inline-flex items-center justify-center",
      variants[variant],
      sizes[size],
      className
    )}>
      {children}
    </span>
  );
}
