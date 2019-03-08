import React from "react";
import styled from "@emotion/styled";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import FilterIcon from "mdi-react/FilterIcon";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  height: 6vh;
  width: 100vw;
  box-sizing: border-box;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || "space-between"};
  align-items: center;
`;

const HeaderItem = styled.p`
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

const Header = ({ location }) => {
  let l = location.pathname;
  let path = l.split("/");

  if (l === "/") {
    return (
      <HeaderContainer justify="center">
        <HeaderItem>Best Today</HeaderItem>
      </HeaderContainer>
    );
  }
  if (l.startsWith("/eventi")) {
    return (
      <HeaderContainer>
        <HeaderItem>
          <Link style={{ color: "rgba(255,255,255, 0.5)" }} to="/home">
            <ChevronLeftIcon size={40} />
          </Link>
        </HeaderItem>
        <HeaderItem>{path[2]}</HeaderItem>
        <HeaderItem>
          <Link style={{ opacity: 0 }} to="/home">
            <FilterIcon size={45} />
          </Link>
        </HeaderItem>
      </HeaderContainer>
    );
  }
  if (l.startsWith("/saved")) {
    return (
      <HeaderContainer>
        <HeaderItem>
          <Link style={{ color: "rgba(255,255,255, 0.5)" }} to="/favorite">
            <ChevronLeftIcon size={45} />
          </Link>
        </HeaderItem>
        <HeaderItem>{path[1]}</HeaderItem>
        <HeaderItem>
          <Link style={{ opacity: 0 }} to="/home">
            <FilterIcon size={45} />
          </Link>
        </HeaderItem>
      </HeaderContainer>
    );
  }
  if (l.startsWith("/shared")) {
    return (
      <HeaderContainer>
        <HeaderItem>
          <Link style={{ color: "rgba(255,255,255, 0.5)" }} to="/home">
            <ChevronLeftIcon size={45} />
          </Link>
        </HeaderItem>
        <HeaderItem>{path[1]}</HeaderItem>
        <HeaderItem>
          <Link style={{ opacity: 0 }} to="/home">
            <FilterIcon size={45} />
          </Link>
        </HeaderItem>
      </HeaderContainer>
    );
  } else {
    return null;
  }
};

export default Header;
