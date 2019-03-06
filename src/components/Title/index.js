import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: ${props => props.size};
  color: ${props => props.color || "#ffffff"};
  padding: ${props => props.padding || "0 3%"};
  letter-spacing: -1px;
`;
