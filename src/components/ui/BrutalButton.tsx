"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface BrutalButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "info" | "success" | "white" | "outline";
  icon?: LucideIcon;
  fullWidth?: boolean;
}

export function BrutalButton({
  children,
  variant = "white",
  icon: Icon,
  fullWidth = false,
  className,
  ...props
}: BrutalButtonProps) {
  const variants = {
    primary: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-500/20 active:scale-[0.98]",
    secondary: "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-500/20 active:scale-[0.98]",
    danger: "bg-red-600/90 text-white hover:bg-red-500 shadow-md shadow-red-500/20 active:scale-[0.98]",
    info: "bg-cyan-600 text-white hover:bg-cyan-500 shadow-md shadow-cyan-500/20 active:scale-[0.98]",
    success: "bg-emerald-600 text-white hover:bg-emerald-500 shadow-md shadow-emerald-500/20 active:scale-[0.98]",
    white: "bg-white/[0.05] text-white border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.2] shadow-sm backdrop-blur-md active:scale-[0.98]",
    outline: "bg-transparent text-zinc-300 border border-white/[0.1] hover:border-white/[0.25] hover:text-white hover:bg-white/[0.04] active:scale-[0.98]",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(
        "flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200",
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 mr-0.5" />}
      <span>{children}</span>
    </motion.button>
  );
}
