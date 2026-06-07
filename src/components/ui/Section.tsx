"use client";

import React, { PropsWithChildren } from "react";

export const Section = ({ children, title, subtitle, className = "" }: PropsWithChildren<{ title?: string; subtitle?: string; className?: string }>) => {
  return (
    <section className={`py-16 px-4 md:px-8 ${className}`}>
      {title && <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">{title}</h2>}
      {subtitle && <p className="text-lg text-zinc-300 text-center mb-8 max-w-2xl mx-auto">{subtitle}</p>}
      {children}
    </section>
  );
};
