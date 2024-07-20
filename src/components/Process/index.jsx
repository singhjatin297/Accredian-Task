import Image from "next/image";
import React from "react";
import process from "../../../public/process.svg";
import process1 from "../../../public/process1.svg";
import process2 from "../../../public/process2.svg";
import process3 from "../../../public/process3.svg";
import { ButtonComponent } from "../sharedComponents/Button";
import { ProcessCard } from "../sharedComponents/ProcessCard";

export const Process = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#EEF5FF] w-full py-4">
      <div className="flex font-Roboto text-2xl font-semibold">
        <span>How do I </span>
        <span className="text-[#1A73E8] ml-2"> Refer?</span>
      </div>
      <div className="relative w-[70%] h-auto">
        <Image src={process} />
        <div>
          <ProcessCard
            source={process1}
            text="Submit referrals easily via our website’s referral section."
            imgClass="w-[80px]"
            wholeClass="left-[13%]"
          />
        </div>
        <div>
          <ProcessCard
            source={process2}
            text="Earn rewards once your referral joins an Accredian program."
            imgClass="w-[64px]"
            wholeClass="left-[41%]"
          />
        </div>
        <div>
          <ProcessCard
            source={process3}
            text="Both parties receive a bonus 30 days after program enrollment."
            imgClass="w-[64px]"
            wholeClass="left-[69%]"
          />
        </div>
      </div>
      <ButtonComponent children="Refer Now" className="px-14 py-5 mt-4" />
    </div>
  );
};
