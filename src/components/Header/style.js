import styled from "@emotion/styled";
import { mq } from "styles/mediaQueries";

export const withMediaQueries = styled.div`
  ${mq[2]} {
    width: 940px;
    margin: 0 auto;
  }
`;

export const HeaderContainer = styled(withMediaQueries)`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  height: 6vh;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.center ? "center" : "space-between")};
  align-items: center;
`;

export const HeaderTitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  display: flex;

  text-transform: capitalize;
  font-weight: 500;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  & a {
    color: white;
  }
`;
