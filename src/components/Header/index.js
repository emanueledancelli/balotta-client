import React from "react";
import styled from "@emotion/styled";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import FilterIcon from "mdi-react/FilterIcon";
import { withRouter, Link } from "react-router-dom";

const Container = styled.div`
  background-color: transparent;
  position: absolute;
  height: 10vh;
  width: 100vw;
  box-sizing: border-box;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.p`
  color: rgba(255, 255, 255, 0.8);
  & a {
    color: white;
  }
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
        <Container>
          <Item>Best Today</Item>
        </Container>
      );
    }
    if (location.pathname.startsWith("/eventi")) {
      return (
        <Container>
          <ItemKind>
            <Link style={{ color: "rgba(255,255,255, 0.5)" }} to="/search">
              <ChevronLeftIcon size={55} />
            </Link>
          </ItemKind>
          <ItemKind>{path[2]}</ItemKind>
          <ItemKind>
            <Link style={{ opacity: 0 }} to="/search">
              <FilterIcon size={55} />
            </Link>
          </ItemKind>
        </Container>
      );
    }
    if (location.pathname.startsWith("/single")) {
      return (
        <Container>
          <Item onClick={() => this.props.history.goBack()}>back</Item>
        </Container>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Header);
