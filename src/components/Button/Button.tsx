import styled, { css } from "styled-components";

export interface IButton {
  variant?: "contained" | "outlined" | "text";
}

const Button = styled.button<IButton>`
  min-height: 46px;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;

  ${(props) =>
    props.variant === "contained" &&
    css`
      background-color: ${props.theme.primary};
      color: ${props.theme.white};
      border: none;
      &:hover {
        opacity: 0.8;
      }
    `}

  ${(props) =>
    props.variant === "outlined" &&
    css`
      background-color: ${props.theme.transparent};
      color: ${props.theme.primary};
      border: 2px solid ${props.theme.primary};
      &:hover {
        background-color: #0001;
      }
    `}

    ${(props) =>
    props.variant === "text" &&
    css`
      background-color: ${props.theme.transparent};
      color: ${props.theme.primary};
      border: none;
      transition: background-color 0.3s;
      &:hover {
        background-color: #0001;
      }
    `}
`;

Button.defaultProps = {
  variant: "contained",
  theme: {
    primary: "blue",
    white: "white",
    black: "black",
    transparent: "transparent",
  },
};

export default Button;
