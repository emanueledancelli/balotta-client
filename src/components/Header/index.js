import React from "react";
import styled from "@emotion/styled";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import FilterIcon from "mdi-react/FilterIcon";
import { withRouter, Link } from "react-router-dom";
//import { Flex } from "components/Flex";

const Container = styled.div`
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

const ItemKind = styled.p`
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

class Header extends React.Component {
  render() {
    const { location } = this.props;

    let path = location.pathname.split("/");
    if (location.pathname === "/") {
      return (
        <Container justify="center">
          <ItemKind>Best Today</ItemKind>
        </Container>
      );
    }
    if (location.pathname.startsWith("/eventi")) {
      return (
        <Container>
          <ItemKind>
            <Link style={{ color: "rgba(255,255,255, 0.5)" }} to="/home">
              <ChevronLeftIcon size={40} />
            </Link>
          </ItemKind>
          <ItemKind>{path[2]}</ItemKind>
          <ItemKind>
            <Link style={{ opacity: 0 }} to="/home">
              <FilterIcon size={45} />
            </Link>
          </ItemKind>
        </Container>
      );
    }
    if (location.pathname.startsWith("/saved")) {
      return (
        <Container>
          <ItemKind>
            <Link style={{ color: "rgba(255,255,255, 0.5)" }} to="/favorite">
              <ChevronLeftIcon size={45} />
            </Link>
          </ItemKind>
          <ItemKind>{path[1]}</ItemKind>
          <ItemKind>
            <Link style={{ opacity: 0 }} to="/home">
              <FilterIcon size={45} />
            </Link>
          </ItemKind>
        </Container>
      );
    }
    if (location.pathname.startsWith("/shared")) {
      return (
        <Container>
          <ItemKind>
            <Link style={{ color: "rgba(255,255,255, 0.5)" }} to="/home">
              <ChevronLeftIcon size={45} />
            </Link>
          </ItemKind>
          <ItemKind>{path[1]}</ItemKind>
          <ItemKind>
            <Link style={{ opacity: 0 }} to="/home">
              <FilterIcon size={45} />
            </Link>
          </ItemKind>
        </Container>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Header);
