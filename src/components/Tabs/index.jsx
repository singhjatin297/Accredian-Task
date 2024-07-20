import React, { useState } from "react";
import { ButtonComponent } from "../sharedComponents/Button";

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(false);

  const handleClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className="flex items-center bg-[#ddeafc] rounded-full py-2 px-9 w-2/5 gap-7 ">
      <ButtonComponent
        children="Refer"
        className="bg-[#ddeafc] text-gray-800 hover:bg-[#ddeafc] hover:text-gray-800 px-7 text-xl"
        isSelected={selectedTab === "Refer"}
        selectedColor="text-[#3986eb] hover:text-[#3986eb]"
        showDot={true}
        onClick={() => handleClick("Refer")}
      />
      <ButtonComponent
        children="Benefits"
        className="bg-[#ddeafc] text-gray-800 hover:bg-[#ddeafc] hover:text-gray-800 px-7 text-xl"
        isSelected={selectedTab === "Benefits"}
        selectedColor="text-[#3986eb] hover:text-[#3986eb]"
        showDot={true}
        onClick={() => handleClick("Benefits")}
      />
      <ButtonComponent
        children="FAQs"
        className="bg-[#ddeafc] text-gray-800 hover:bg-[#ddeafc] hover:text-gray-800 px-7 text-xl"
        isSelected={selectedTab === "FAQs"}
        selectedColor="text-[#3986eb] hover:text-[#3986eb]"
        showDot={true}
        onClick={() => handleClick("FAQs")}
      />
      <ButtonComponent
        children="Support"
        className="bg-[#ddeafc] text-gray-800 hover:bg-[#ddeafc] hover:text-gray-800 px-7 text-xl"
        isSelected={selectedTab === "Support"}
        selectedColor="text-[#3986eb] hover:text-[#3986eb]"
        showDot={true}
        onClick={() => handleClick("Support")}
      />
    </div>
  );
};
