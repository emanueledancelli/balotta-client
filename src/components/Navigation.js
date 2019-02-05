import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { NavLink } from "react-router-dom";
import HomeOutlineIcon from "mdi-react/HomeOutlineIcon";
import StarOutlineIcon from "mdi-react/StarOutlineIcon";
import MagnifyIcon from "mdi-react/MagnifyIcon";

const Container = styled.div`
  height: 8vh;
  width: 100vw;
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-color: ${props =>
    props.location.pathname !== "/"
      ? "rgba(255, 255, 255, 0.9)"
      : "transparent"};
  z-index: 1;
  transition: all 500ms ease-out;
  backdrop-filter: blur(10px);
  border-top: 0.5px solid rgba(255, 255, 255, 0.2);
  z-index: 100;
`;

const Item = styled.p`
  color: #9a9a9a;
  margin: 0;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavHelper = styled.span`
  font-size: 0.8em;
  & a,
  span {
    text-decoration: none;
  }
`;

const Navigation = ({ location }) => {
  console.log(location);
  return (
    <Container location={location}>
      <NavLink to="/" activeClassName="active" exact>
        <Item>
          <HomeOutlineIcon />
        </Item>
      </NavLink>
      <NavLink to="/search" exact>
        <Item>
          <MagnifyIcon />
        </Item>
      </NavLink>
      <NavLink to="/favourites" activeClassName="active" exact>
        <Item>
          <StarOutlineIcon />
        </Item>
      </NavLink>
    </Container>
  );
};

export default Navigation;
