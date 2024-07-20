import React, { useState } from "react";
import { ButtonComponent } from "../sharedComponents/Button";
import { Plus } from "lucide-react";
import facebook from "../../../public/facebook.svg";
import twitter from "../../../public/twitter.svg";
import linkedin from "../../../public/linkedin.svg";
import insta from "../../../public/insta.svg";
import youtube from "../../../public/youtube.svg";
import Image from "next/image";

export const Footer = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const Buttons = [
    {
      name: "Data Science & AI",
      description:
        "E&ICT Academy IIT Guwahati - Executive Program in Data Science and Product Management",
    },
    {
      name: "Product Management",
      description:
        "IIT Kanpur - Professional Certificate Program in Product Management",
    },
    {
      name: "Business Analytics",
      description:
        "E&ICT Academy IIT Guwahati - Executive Program in Analytics & Digital Transformation",
    },
    {
      name: "Digital Transformation",
      description:
        "SP Jain School of Global Management - Executive Program in Digital Leadership for Business Transformation",
    },
    {
      name: "Business Management",
      description:
        "IIM Visakhapatnam - Executive Program in Business Management",
    },
    {
      name: "Project Management",
      description:
        "E&ICT Academy IIT Guwahati - Executive Program in Data Science and Project Management",
    },
    {
      name: "Strategy & Leadership",
      description:
        "XLRI, Delhi-NCR - Executive Program in Strategy & Leadership",
    },
    {
      name: "Senior Management",
      description: "IIM Visakhapatnam - Senior Management Program",
    },
    {
      name: "Fintech",
      description:
        "IIM Visakhapatnam - Post Graduate Certificate in FinTech, Blockchain & Risk Management",
    },
  ];

  const handleClick = (buttonName) => {
    setSelectedButton(selectedButton === buttonName ? null : buttonName);
  };
  return (
    <div className="w-full bg-[#282828] px-64 py-8">
      <div className="px-6">
        <div className="flex justify-between items-start">
          <span className="flex flex-col justify-center items-center">
            <span className="text-white text-xl font-semibold">accredian</span>
            <span className="text-white text-[8px]">
              credentials that matter
            </span>
          </span>
          <div className="flex flex-col items-center mr-12">
            <ButtonComponent
              children="Schedule 1-on-1 Call Now"
              className="bg-[#007BFF] hover:bg-[#007BFF] text-white hover:text-white border border-white "
            />
            <span className="text-white text-xs py-1">
              Speak with our Learning Advisor
            </span>
          </div>
        </div>
        <hr className="mt-7 border-t-2 bg-[#E2E8F0]" />
        <div className="flex flex-row mt-6 gap-8 w-full">
          <div className="flex flex-col w-[35%] bg-[#282828]">
            <span className="font-normal text-lg text-white  bg-[#282828] px-4">
              Programs
            </span>
            {Buttons.map((button) => (
              <div key={button.name}>
                <ButtonComponent
                  children={button.name}
                  className="flex justify-between items-center py-6 text-white hover:text-white bg-[#282828] hover:bg-[#282828] w-full font-semibold text-sm"
                  icon={
                    <Plus
                      className={`transform transition-transform duration-200 ${selectedButton === button.name ? "rotate-180" : "rotate-0"}`}
                    />
                  }
                  onClick={() => handleClick(button.name)}
                />
                {selectedButton === button.name && (
                  <div className="bg-[#282828] pl-4 py-2 text-white">
                    {button.description}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col w-[45%] bg-[#282828] text-white gap-2">
            <span className="font-normal text-lg bg-[#282828]">Contact Us</span>
            <span className="font-normal text-xs">
              Email us (For Data Science Queries): admissions@accredian.com
            </span>
            <span className="font-normal text-xs">
              Email us (For Product Management Queries):pm@accredian.com
            </span>
            <span className="font-normal text-xs">
              Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
            </span>
            <span className="font-normal text-xs">
              Product Management Admission Helpline:+91 9625811095
            </span>
            <span className="font-normal text-xs">
              Enrolled Student Helpline: +91 7969322507
            </span>
            <span className="font-normal text-xs">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana 122015
            </span>
            <span className="text-lg font-normal">Why Accredian</span>
            <span className="text-xl font-light">Follow Us</span>
            <div className="flex gap-4">
              <Image src={facebook} />
              <Image src={twitter} />
              <Image src={linkedin} />
              <Image src={insta} />
              <Image src={youtube} />
            </div>
          </div>
          <div className="flex flex-col w-[20%] bg-[#282828] text-white gap-2">
            <span className="font-normal text-lg bg-[#282828]">Accredian</span>
            <span className="font-normal text-xs">About</span>
            <span className="font-normal text-xs">Career</span>
            <span className="font-normal text-xs">Blog</span>
            <span className="font-normal text-xs">Admission Policy</span>
            <span className="font-normal text-xs">Referral Policy</span>
            <span className="font-normal text-xs">Privacy Policy</span>
            <span className="font-normal text-xs">Terms Of Service</span>
            <span className="font-normal text-xs">Master FAQs</span>
          </div>
        </div>
        <span className="flex items-center justify-center mt-8 text-white text-sm font-normal">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </span>
      </div>
    </div>
  );
};
