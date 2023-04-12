import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Avatar";
import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Avatar",
};
