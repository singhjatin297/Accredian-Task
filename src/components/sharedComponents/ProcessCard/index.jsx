import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const ProcessCard = ({
  source,
  imgClass,
  textClass,
  text,
  wholeClass,
}) => {
  return (
    <div
      className={cn(
        "absolute flex flex-col w-44 z-10 gap-3 items-center justify-center top-[30%]",
        wholeClass
      )}
    >
      <Image src={source} className={cn(" h-auto", imgClass)} />
      <span className={cn("text-sm flex flex-wrap text-center", textClass)}>
        {text}
      </span>
    </div>
  );
};
