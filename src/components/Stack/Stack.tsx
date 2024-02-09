"use client";

import styled from "styled-components";
import { convertToPx } from "../../utils/units";

export interface IStack {
  flexDirection?: "column" | "row";
  alignItems?: "flex-start" | "center" | "flex-end";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  gap?: number | string;
}

const Stack = styled.div<IStack>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ gap }) => gap && `gap: ${convertToPx(gap)}`};
`;

Stack.defaultProps = {
  flexDirection: "column",
  gap: 0,
  theme: {
    primary: "blue",
    white: "white",
    black: "black",
    transparent: "transparent",
  },
};

export default Stack;
