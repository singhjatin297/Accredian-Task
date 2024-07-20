import React, { useState } from "react";
import { Switch } from "../sharedComponents/Switch";
import { Table } from "./table";
import { ButtonComponent } from "../sharedComponents/Button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ChevronDown } from "lucide-react";

export const Benefits = () => {
  const [isOn, seIsOn] = useState(false);
  const [selectProgram, setSelectedProgram] = useState("ALL PROGRAMS");

  const handleToggle = () => {
    seIsOn(!isOn);
  };

  const handleClick = (program) => () => {
    setSelectedProgram(program);
  };

  return (
    <div className="flex flex-col items-center px-52 py-14 w-full">
      <div className="flex font-Roboto text-2xl font-semibold">
        <span>What Are The </span>
        <span className="text-[#1A73E8] ml-2"> Referral Benefits?</span>
      </div>
      <div className="flex flex-row items-center justify-end mt-8 w-full gap-2">
        <span>Enrolled</span>
        <Switch isOn={isOn} onClick={handleToggle} />
      </div>
      <div className="flex flex-row mt-7 gap-6 w-full">
        <div className="flex flex-col w-[35%] bg-white z-10 drop-shadow-2xl rounded-xl">
          <ButtonComponent
            children="ALL PROGRAMS"
            className="flex justify-between py-8 bg-white hover:bg-slate-400 text-black hover:text-black w-full rounded-t-xl rounded-b-none font-medium text-lg"
            isSelected={selectProgram === "ALL PROGRAMS"}
            selectedColor="bg-[#1A73E8] text-white hover:bg-[#1A73E8] hover:text-white"
            icon={
              <ChevronRightIcon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            }
            onClick={handleClick("ALL PROGRAMS")}
          />
          <hr className="mx-4 border-t-2 bg-[#969696]" />
          <ButtonComponent
            children="PRODUCT MANAGEMENT"
            className="flex justify-between py-8 bg-white hover:bg-slate-400 text-black hover:text-black w-full rounded-none font-medium text-lg"
            isSelected={selectProgram === "PRODUCT MANAGEMENT"}
            selectedColor="bg-[#1A73E8] text-white hover:bg-[#1A73E8] hover:text-white"
            icon={
              <ChevronRightIcon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            }
            onClick={handleClick("PRODUCT MANAGEMENT")}
          />
          <hr className="mx-4 border-t-2 bg-[#969696]" />
          <ButtonComponent
            children="STRATEGY & LEADERSHIP"
            className="flex justify-between py-8 bg-white hover:bg-slate-400 text-black hover:text-black w-full rounded-none font-medium text-lg"
            isSelected={selectProgram === "STRATEGY & LEADERSHIP"}
            selectedColor="bg-[#1A73E8] text-white hover:bg-[#1A73E8] hover:text-white"
            icon={
              <ChevronRightIcon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            }
            onClick={handleClick("STRATEGY & LEADERSHIP")}
          />
          <hr className="mx-4 border-t-2 bg-[#969696]" />
          <ButtonComponent
            children="BUSINESS MANAGEMENT"
            className="flex justify-between py-8 bg-white hover:bg-slate-400 text-black hover:text-black w-full rounded-none font-medium text-lg"
            isSelected={selectProgram === "BUSINESS MANAGEMENT"}
            selectedColor="bg-[#1A73E8] text-white hover:bg-[#1A73E8] hover:text-white"
            icon={
              <ChevronRightIcon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            }
            onClick={handleClick("BUSINESS MANAGEMENT")}
          />
          <hr className="mx-4 border-t-2 bg-[#969696]" />
          <ButtonComponent
            children="FINTECH"
            className="flex justify-between py-8 bg-white hover:bg-slate-400 text-black hover:text-black w-full rounded-none font-medium text-lg"
            isSelected={selectProgram === "FINTECH"}
            selectedColor="bg-[#1A73E8] text-white hover:bg-[#1A73E8] hover:text-white"
            icon={
              <ChevronRightIcon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            }
            onClick={handleClick("FINTECH")}
          />
          <hr className="mx-4 border-t-2 bg-[#969696]" />
          <ButtonComponent
            children="SENIOR MANAGEMENT"
            className="flex justify-between py-8 bg-white hover:bg-slate-400 text-black hover:text-black w-full rounded-none font-medium text-lg"
            isSelected={selectProgram === "SENIOR MANAGEMENT"}
            selectedColor="bg-[#1A73E8] text-white hover:bg-[#1A73E8] hover:text-white"
            icon={
              <ChevronRightIcon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            }
            onClick={handleClick("SENIOR MANAGEMENT")}
          />
          <hr className="mx-4 border-t-2 bg-[#969696]" />
          <ButtonComponent
            children="DATA SCIENCE"
            className="flex justify-between py-8 bg-white hover:bg-slate-400 text-black hover:text-black w-full rounded-none font-medium text-lg"
            isSelected={selectProgram === "DATA SCIENCE"}
            selectedColor="bg-[#1A73E8] text-white hover:bg-[#1A73E8] hover:text-white"
            icon={
              <ChevronRightIcon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            }
            onClick={handleClick("DATA SCIENCE")}
          />
          <hr className="mx-4 border-t-2 bg-[#969696]" />
          <ButtonComponent
            children="DIGITAL TRANSFORMATIONS"
            className="flex justify-between py-8 bg-white hover:bg-slate-400 text-black hover:text-black w-full rounded-none font-medium text-lg"
            isSelected={selectProgram === "DIGITAL TRANSFORMATIONS"}
            selectedColor="bg-[#1A73E8] text-white hover:bg-[#1A73E8] hover:text-white"
            icon={
              <ChevronRightIcon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            }
            onClick={handleClick("DIGITAL TRANSFORMATIONS")}
          />
          <hr className="mx-4 border-t-2 bg-[#969696]" />
          <ButtonComponent
            children="BUSINESS ANALYTICS"
            className="flex justify-between py-8 bg-white hover:bg-slate-400 text-black hover:text-black w-full rounded-b-xl rounded-t-none font-medium text-lg"
            isSelected={selectProgram === "BUSINESS ANALYTICS"}
            selectedColor="bg-[#1A73E8] text-white hover:bg-[#1A73E8] hover:text-white"
            icon={
              <ChevronRightIcon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              />
            }
            onClick={handleClick("BUSINESS ANALYTICS")}
          />
        </div>
        <Table selectProgram={selectProgram} />
      </div>
      <ButtonComponent
        children="Show More"
        buttonClass="w-full items-end"
        className="flex items-center mt-8 bg-white hover:bg-white border border-[#92979c] rounded-lg text-[#92979c] hover:text-[#92979c]"
        icon={
          <ChevronDown
            className="ml-1 transform transition-transform duration-300 group-hover:rotate-180"
            style={{ height: "20px", width: "20px", color: "#92979c" }}
          />
        }
      />
      <ButtonComponent children="Refer Now" className="px-14 py-5 mt-8" />
    </div>
  );
};
