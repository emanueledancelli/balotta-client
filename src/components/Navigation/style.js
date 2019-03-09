import styled from "@emotion/styled";
import { colors } from "styles/colors";

export const NavContainer = styled.div`
  height: 8vh;
  width: 100vw;
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-color: ${props => {
    let l = props.location.pathname;
    if (l.startsWith("/list") || l.startsWith("/shared") || l === "/") {
      return "trasparent";
    } else {
      return "rgba(255,255,255,0.9)";
    }
  }};
  transition: background-color 500ms ease-out;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  & a {
    transition: all 500ms ease-out;
  }
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.lightGrey};
`;

export const NavItemName = styled.span`
  font-size: 0.7em;
  font-weight: 600;
`;
