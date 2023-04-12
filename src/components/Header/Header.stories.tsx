import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./Header";
import ThemeProvider from "../ThemeProvider";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const theme = {
  primary: "#440403",
  white: "white",
  black: "black",
  transparent: "transparent",
};

const Template: ComponentStory<typeof Header> = (args) => (
  <ThemeProvider theme={theme}>
    <Header {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};
