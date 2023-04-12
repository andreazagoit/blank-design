import React from "react";
import styled, { css } from "styled-components";

export interface IAvatar {
  variant?: "contained" | "outlined" | "text";
}

const BaseAvatar = styled.div<IAvatar>`
  background-color: #eee;
  height: 84px;
  width: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid black;
`;

const Avatar = (props) => <BaseAvatar {...props} children={"AB"} />;

Avatar.defaultProps = {};

export default Avatar;
