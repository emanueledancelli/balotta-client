import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { NavLink } from "react-router-dom";
import HomeOutlineIcon from "mdi-react/HomeOutlineIcon";
import StarOutlineIcon from "mdi-react/StarOutlineIcon";
import MagnifyIcon from "mdi-react/MagnifyIcon";

const Container = styled.div`
  height: 7vh;
  width: 100vw;
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
  z-index: 1;
  border-top: 0.5px solid rgba(255, 255, 255, 0.2);
`;

const Item = styled.p`
  color: #9a9a9a;
  margin: 0;
`;

const Navigation = () => {
  return (
    <Container>
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
