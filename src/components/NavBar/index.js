import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { mq } from "styles/mediaQueries";

const NavContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: white;
  width: 940px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  ${mq[2]} {
    display: flex;
  }
`;

const NavLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  padding-left: 3%;
  letter-spacing: -1px;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 2;
`;

const NavMenuItem = styled.div`
  padding-left: 25px;
  color: #cccccc;
  & a {
    text-decoration: none;
    color: #cccccc;
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <NavLogo>
        <NavLink to="/home">
          <h1 style={{ fontSize: "1.5rem", color: "#222222" }}>balotta</h1>
        </NavLink>
      </NavLogo>
      <NavMenu>
        <NavMenuItem>
          <NavLink activeClassName="active-desktop" to="/" exact>
            <p>best today</p>
          </NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink activeClassName="active-desktop" to="/home" exact>
            <p>start</p>
          </NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink activeClassName="active-desktop" to="/favorite" exact>
            <p>saved</p>
          </NavLink>
        </NavMenuItem>
      </NavMenu>
    </NavContainer>
  );
};

export default NavBar;
