"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded-lg font-medium focus-ring transition-colors";
  
  const variantClasses = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white",
    secondary: "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-text-primary-light dark:text-text-primary-dark",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      aria-label={ariaLabel}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.button>
  );
}

