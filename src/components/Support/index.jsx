import Image from "next/image";
import React from "react";
import support from "../../../public/support.svg";
import supportIcon from "../../../public/supportIcon.svg";
import { ButtonComponent } from "../sharedComponents/Button";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export const Support = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52">
      <div className="relative">
        <Image
          src={support}
          alt="Support"
          className="bg-[#1A73E8] rounded-lg"
        />
        <div className="flex flex-col md:flex-row absolute z-10 left-4 md:left-10 top-4 md:top-[52px] gap-4 md:gap-6">
          <Image src={supportIcon} alt="Support Icon" />
          <div className="flex flex-col gap-2 mt-1">
            <span className="text-white text-base md:text-xl font-semibold">
              Want to delve deeper into the program?
            </span>
            <span className="text-white text-sm md:text-base">
              Share your details to receive expert insights from our program
              team!
            </span>
          </div>
          <ButtonComponent
            children="Get in touch"
            className="text-[#3B82F6] hover:text-[#3B82F6] bg-white hover:bg-white font-[550] mt-4 md:mt-0 md:ml-8 lg:ml-32 xl:ml-64"
            icon={<ChevronRightIcon style={{ color: "#3B82F6" }} />}
          />
        </div>
      </div>
    </div>
  );
};
