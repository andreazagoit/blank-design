import styled from "styled-components";
import { convertToPx } from "../../utils/units";

export interface IContainer {
  maxWidth?: number | string;
  padding?: number | string;
}

const Container = styled.div<IContainer>`
  width: 100%;
  max-width: ${({ maxWidth }) => convertToPx(maxWidth!)};
  margin: 0 auto;
  ${({ padding }) => padding && `padding: ${convertToPx(padding)}`};
`;

Container.defaultProps = {
  maxWidth: 1200,
};

export default Container;
