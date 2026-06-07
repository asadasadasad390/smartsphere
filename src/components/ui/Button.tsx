"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

type ButtonProps = HTMLMotionProps<"button"> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const variants = {
  primary: "bg-ai-primary text-white hover:bg-ai-secondary transition-colors",
  secondary: "bg-white text-black hover:bg-zinc-100 transition-colors",
};

export const Button = ({ children, className = "", variant = "primary", ...rest }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${variants[variant]} px-6 py-3 rounded-full font-semibold ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
