import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import Button from "../Button/Button";
import { getTextColor } from "../../utils/getTextColor";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer maxWidth={1200}>
        <HeaderBranding>Branding</HeaderBranding>
        <HeaderLinks>
          <Button variant="text">Link</Button>
          <Button variant="text">Link</Button>
          <Button variant="text">Link</Button>
        </HeaderLinks>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.primary};
`;

const HeaderContainer = styled(Container)`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

const HeaderBranding = styled.div`
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const HeaderLinks = styled.div`
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 16px;

  & > ${Button} {
    color: ${(props) => getTextColor(props.theme.primary)};
  }
`;
