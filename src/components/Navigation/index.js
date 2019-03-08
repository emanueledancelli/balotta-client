import React from "react";
import styled from "@emotion/styled";
import HomeOutlineIcon from "mdi-react/HomeOutlineIcon";
import WhatshotIcon from "mdi-react/WhatshotIcon";
import FavoriteOutlineIcon from "mdi-react/FavoriteOutlineIcon";
import { NavLink } from "react-router-dom";
import { colors } from "styles/colors";

const NavContainer = styled.div`
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
  z-index: 9;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.lightGrey};
`;

const NavItemName = styled.span`
  font-size: 0.7em;
  font-weight: 600;
`;

const Navigation = ({ location }) => {
  return (
    <NavContainer location={location}>
      <NavLink
        to="/"
        activeClassName={location.pathname === "/" ? "active-home" : "active"}
        exact
      >
        <NavItem>
          <WhatshotIcon />
          <NavItemName>Best</NavItemName>
        </NavItem>
      </NavLink>

      <NavLink to="/home" exact>
        <NavItem>
          <HomeOutlineIcon size={26} />
          <NavItemName>Home</NavItemName>
        </NavItem>
      </NavLink>

      <NavLink to="/favorite" activeClassName="active" exact>
        <NavItem>
          <FavoriteOutlineIcon size={22} />
          <NavItemName>Saved</NavItemName>
        </NavItem>
      </NavLink>
    </NavContainer>
  );
};

export default Navigation;
