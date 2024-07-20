import React from "react";
import Image from "next/image";
import { ButtonComponent } from "../sharedComponents/Button";
import { ChevronDown } from "lucide-react";

export const NavBar = () => {
  return (
    <div className="flex justify-between px-72 py-2 mt-2">
      <div className="flex gap-8">
        <span className="flex flex-col justify-center items-center">
          <span className="text-blue-500 text-xl font-semibold">accredian</span>
          <span className="text-gray-800 text-[8px]">
            credentials that matter
          </span>
        </span>
        <ButtonComponent
          children="Courses"
          icon={
            <ChevronDown
              className="ml-1 transform transition-transform duration-300 group-hover:rotate-180"
              style={{ height: "20px", width: "20px" }}
            />
          }
        />
      </div>
      <div className="flex gap-6">
        <ButtonComponent
          children="Refer & Earn"
          className=" bg-white text-black hover:bg-white p-0"
        />
        <ButtonComponent
          children="Resources"
          className=" bg-white text-black hover:bg-white p-0"
        />
        <ButtonComponent
          children="About Us"
          className="bg-white text-black hover:bg-white p-0"
        />
        <div className="flex gap-4">
          <ButtonComponent
            children="Login"
            className="px-6 bg-[#eaedf1] hover:bg-slate-300 font-[500] text-black font-Inter "
          />
          <ButtonComponent children="Try for free" className="px-6" />
        </div>
      </div>
    </div>
  );
};
