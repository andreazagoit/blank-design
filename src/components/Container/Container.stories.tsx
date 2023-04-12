import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "./Container";
import Container from "./Container";

export default {
  title: "Components/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Stack> = (args) => (
  <Container {...args}>Container</Container>
);

export const Default = Template.bind({});
Default.args = {
  padding: 16,
  style: {
    background: "#eee",
  },
};
