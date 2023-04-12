import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "./Stack";
import styled from "styled-components";

export default {
  title: "Components/Stack",
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Cube = styled.div<{ background: string }>`
  width: 40px;
  height: 40px;
  background: ${(props) => props.background};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <Cube background="red">1</Cube>
    <Cube background="green">2</Cube>
    <Cube background="blue">3</Cube>
  </Stack>
);

export const Default = Template.bind({});
Default.args = {
  flexDirection: "row",
  justifyContent: "space-between",
};

export const Column = Template.bind({});
Column.args = {
  flexDirection: "column",
};

export const Row = Template.bind({});
Row.args = {
  flexDirection: "row",
};
