"use client";

import { NavBar } from "@/components/NavigationBar";
import { Tabs } from "@/components/Tabs";
import { HeroImage } from "@/components/HeroImage";
import { Process } from "@/components/Process";
import { Benefits } from "@/components/Benefits";
import { Faq } from "@/components/Faqs";
import { Support } from "@/components/Support";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className=" flex justify-center items-center py-3 bg-[#ddeafc] font-Roboto">
        <span className="text-black">
          Navigate your ideal career path with tailored expert advice
        </span>
        <span className=" text-[#1a73e8] ml-3">Contact Expert</span>
      </div>
      <NavBar />
      <div className="flex flex-col justify-center items-center pt-8 gap-10">
        <Tabs />
        <HeroImage />
        <Process />
        <Benefits />
        <Faq />
        <Support />
        <Footer />
      </div>
    </div>
  );
}
