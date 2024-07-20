"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const WobbleCard = ({ children, containerClassName, className }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl transition-transform duration-200",
        containerClassName,
        { "scale-105": isHovered }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-200",
          className,
          { "scale-105": isHovered }
        )}
      >
        {children}
      </div>
    </div>
  );
};
