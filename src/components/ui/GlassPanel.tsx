"use client";

import React, { PropsWithChildren } from "react";

export const GlassPanel = ({ children, className = "" }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={`${"bg-glass border border-glass-border backdrop-blur-2xl rounded-xl p-6"} ${className}`}> 
      {children}
    </div>
  );
};
