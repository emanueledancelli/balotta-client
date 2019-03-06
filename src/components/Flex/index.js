import styled from "@emotion/styled";

/**
 * do not set height to min-height => swipeable-wiews scrolling can't work
 */

export const Flex = styled.div`
  display: flex;
  box-sizing: border-box;
  position: ${props => props.position || "auto"};
  height: ${props => props.height || "auto"};
  width: ${props => props.width || "auto"};
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  flex-direction: ${props => props.direction || "auto"};
  flex: ${props => props.flex || "initial"};
  align-items: ${props => props.align || "auto"};
  justify-content: ${props => props.justify || "auto"};
`;
