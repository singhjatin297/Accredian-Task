"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";

export const ButtonComponent = ({
  className,
  children,
  onClick = () => {},
  icon,
  isSelected = false,
  showDot = false,
  selectedColor,
  buttonClass,
  ...props
}) => {
  return (
    <div
      className={cn("flex flex-col items-center justify-center", buttonClass)}
    >
      <Button
        className={cn(
          "flex justify-center items-center group bg-[#1A73E8] hover:bg-blue-700 text-white rounded-md px-4 py-3",
          className,
          isSelected ? selectedColor : null
        )}
        onClick={onClick}
        {...props}
      >
        {children}
        {icon && <span>{icon}</span>}
      </Button>
      {isSelected && showDot && (
        <div className="w-1 h-1 bg-[#3986eb] rounded-full -mt-[3px]"></div>
      )}
    </div>
  );
};
