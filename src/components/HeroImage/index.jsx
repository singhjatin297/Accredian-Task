"use client";

import React, { useState } from "react";
import { ButtonComponent } from "../sharedComponents/Button";
import Image from "next/image";
import actors from "../../../public/actors.svg";
import currency1 from "../../../public/currency1.svg";
import currency2 from "../../../public/currency2.svg";
import currency3 from "../../../public/currency3.svg";
import currency4 from "../../../public/currency4.svg";
import currency5 from "../../../public/currency5.svg";
import { WobbleCard } from "../sharedComponents/Wobble";

export const HeroImage = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };
  return (
    <WobbleCard containerClassName="bg-[#ddeafc] rounded-xl drop-shadow-2xl w-[70%] h-[550px] relative ">
      <Image src={currency1} className="absolute inline-flex" />
      <Image src={currency2} className="absolute inline-flex right-0" />
      <Image
        src={currency3}
        className="absolute inline-flex right-0 top-[30%]"
      />
      <Image
        src={currency5}
        className="absolute inline-flex right-[32%] top-0"
      />
      <Image
        src={currency4}
        className="absolute inline-flex right-[40%] bottom-4 z-30 transform rotate-90"
      />

      <div className="flex">
        <div className="flex flex-col w-[39.2%] pl-11 pt-28 font-Roboto gap-8">
          <div className="flex flex-col text-black font-bold text-6xl">
            <span>Let's Learn</span>
            <span>& Earn</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl">Get a chance to win</span>
            <div>
              <span className="text-3xl">up-to </span>
              <span className="text-4xl font-bold text-[#1A73E8]">
                Rs. 15,000
              </span>
            </div>
          </div>
          <ButtonComponent
            children="Refer Now"
            className="px-9 mt-4"
            buttonClass="items-start"
            onClick={handleDialog}
          />
        </div>
        <div className="w-[60.8%] z-20">
          <Image src={actors} />
        </div>
      </div>
    </WobbleCard>
  );
};
