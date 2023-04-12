import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ThemeProvider from ".";
import Button from "../Button";

export default {
  title: "Components/Theming",
  component: ThemeProvider,
} as ComponentMeta<typeof ThemeProvider>;

const theme = {
  primary: "green",
  white: "white",
  black: "black",
  transparent: "transparent",
};

const Template: ComponentStory<typeof ThemeProvider> = (args) => (
  <ThemeProvider {...args}>
    <Button>ciao</Button>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  theme,
};
