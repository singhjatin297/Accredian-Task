import React from "react";
import { buttonComponent } from ".";

export default {
  title: "Components/Button",
  component: buttonComponent,
};

const Template = (args) => <buttonComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  className: "bg-[#1A73E8] hover:bg-blue-700 text-white rounded-md px-4 py-3",
};
