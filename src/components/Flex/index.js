import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
  box-sizing: border-box;
  width: ${props => props.width || "auto"};
  flex-direction: ${props => props.direction || "auto"};
  flex: ${props => props.flex || " "};
  align-items: ${props => props.align || "auto"};
  justify-content: ${props => props.justify || "auto"};
`;
