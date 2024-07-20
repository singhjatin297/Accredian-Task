import { cn } from "@/lib/utils";
import React from "react";

export const Switch = ({ isOn, onClick, switchClass }) => {
  return (
    <div
      className={cn(
        `relative inline-flex items-center h-6 w-12 cursor-pointer bg-white border-2 border-gray-800 rounded-full`,
        switchClass
      )}
      onClick={onClick}
    >
      <div
        className={`transform transition-transform duration-300 ease-in-out p-1 ${
          isOn ? "translate-x-6" : "translate-x-0"
        } inline-block w-4 h-4 ${isOn ? "bg-blue-500" : "bg-gray-400"} rounded-full`}
        style={{ marginLeft: !isOn ? "0.25rem" : "0" }}
      />
    </div>
  );
};
