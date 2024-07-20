import React from "react";
import programIcon from "../../../public/programIcon.svg";
import {
  allProgramsContent,
  productManagementContent,
  strategyLeadershipContent,
  businessManagementContent,
  finTechContent,
  seniorManagementContent,
  dataScienceContent,
  digitalTransformationContent,
  businessAnalyticsContent,
} from "../../../constant";
import Image from "next/image";

export const Table = ({ selectProgram }) => {
  let content = [];

  switch (selectProgram) {
    case "ALL PROGRAMS":
      content = allProgramsContent;
      break;
    case "PRODUCT MANAGEMENT":
      content = productManagementContent;
      break;
    case "STRATEGY & LEADERSHIP":
      content = strategyLeadershipContent;
      break;
    case "BUSINESS MANAGEMENT":
      content = businessManagementContent;
      break;
    case "FINTECH":
      content = finTechContent;
      break;
    case "SENIOR MANAGEMENT":
      content = seniorManagementContent;
      break;
    case "DATA SCIENCE":
      content = dataScienceContent;
      break;
    case "DIGITAL TRANSFORMATIONS":
      content = digitalTransformationContent;
      break;
    case "BUSINESS ANALYTICS":
      content = businessAnalyticsContent;
      break;
    default:
      content = [];
  }

  return (
    <div className="w-[65%] bg-[#F8FBFF] z-10 drop-shadow-2xl rounded-lg">
      <div className="flex w-full bg-[#afcef7] text-[#1350A0] font-semibold px-4 py-4 rounded-t-lg text-lg">
        <span className="w-1/2">Programs</span>
        <span className="w-1/4">Referrer Bonus</span>
        <span className="w-1/4">Referee Bonus</span>
      </div>
      <div className="p-4">
        {content.map((item, index) => (
          <div key={index} className="flex items-start py-2">
            <Image src={programIcon} alt="Program Icon" className="pt-1" />
            <span className="w-1/2 flex flex-wrap items-center pl-2 pr-8">
              {item.program}
            </span>
            <span className="w-1/4 pl-5">{item.referrerBonus}</span>
            <span className="w-1/4 pl-6">{item.refereeBonus}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
