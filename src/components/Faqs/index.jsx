import React, { useState } from "react";
import { ButtonComponent } from "../sharedComponents/Button";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

export const Faq = () => {
  const [selectedFaq, setSelectedFaq] = useState("");

  const handleClick = (faq) => {
    setSelectedFaq((prev) => (prev === faq ? "" : faq));
  };

  return (
    <div className="flex flex-col items-center px-52 py-16 w-full">
      <div className="flex font-Roboto text-2xl font-semibold">
        <span>Frequently Asked </span>
        <span className="text-[#1A73E8] ml-2"> Questions</span>
      </div>
      <div className="flex w-full mt-12 gap-6">
        <div className="flex flex-col items-start gap-4 w-1/4">
          <ButtonComponent
            children="Eligibility"
            buttonClass="w-full"
            className="w-full flex items-center bg-[#EEEEEE] hover:bg-[#EEEEEE] text-[#1A73E8] hover:text-[#1A73E8] hover:border hover:border-[#1A73E8] py-6 drop-shadow-xl"
          />
          <ButtonComponent
            children="How To Use?"
            buttonClass="w-full"
            className="w-full flex items-center py-6 bg-white hover:bg-white border border-[#737373] rounded-lg text-[#737373] hover:text-[#737373]"
          />
          <ButtonComponent
            children="Terms & Conditions"
            buttonClass="w-full"
            className="w-full flex items-center py-6 bg-white hover:bg-white border border-[#737373] rounded-lg text-[#737373] hover:text-[#737373]"
          />
        </div>
        <div className="flex flex-col items-start gap-4 w-full mt-2">
          <div>
            <ButtonComponent
              className="bg-white hover:bg-white text-black hover:text-[#1A73E8] font-semibold text-base"
              isSelected={selectedFaq === "faq1"}
              selectedColor="text-[#1A73E8] hover:text-[#1A73E8]"
              children="Do I need to have prior Product Management and Project Management experience to enroll in the program?"
              icon={selectedFaq === "faq1" ? <ChevronUp /> : <ChevronDown />}
              onClick={() => handleClick("faq1")}
            />
            {selectedFaq === "faq1" && (
              <div className="p-4 bg-white">
                No, the program is designed to be inclusive of all levels of
                experience. All topics will be covered from the basics, making
                it suitable for individuals from any field of work.
              </div>
            )}
          </div>
          <div>
            <ButtonComponent
              className="bg-white hover:bg-white text-black hover:text-[#1A73E8] font-semibold text-base"
              buttonClass="items-start"
              isSelected={selectedFaq === "faq2"}
              selectedColor="text-[#1A73E8] hover:text-[#1A73E8]"
              children="What is the minimum system configuration required?"
              icon={selectedFaq === "faq2" ? <ChevronUp /> : <ChevronDown />}
              onClick={() => handleClick("faq2")}
            />
            {selectedFaq === "faq2" && (
              <div className="p-4 bg-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
