import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Contained = Template.bind({});
Contained.args = {
  children: "Primary",
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Secondary",
  variant: "outlined",
};
