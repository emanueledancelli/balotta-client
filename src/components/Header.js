import React from "react";
import styled from "@emotion/styled";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import { withRouter, Link } from "react-router-dom";

const Container = styled.div`
  background-color: transparent;
  position: absolute;
  height: 10vh;
  min-width: 100vw;
  z-index: 1;
  top: 0;
  left: 0;
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.p`
  color: rgba(255, 255, 255, 0.8);
  width: 50%;
  padding-top: 5%;
  padding-bottom: 2%;
  & a {
    color: white;
  }
`;

const ItemKind = styled.p`
  color: rgba(255, 255, 255, 0.8);
  width: 50%;
  padding-top: 5%;
  padding-bottom: 2%;
  margin-right: 3%;
  display: flex;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 0.9em;
  justify-content: flex-end;
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
          <Item>
            <Link to="/search">
              <ChevronLeftIcon size={45} />
            </Link>
          </Item>
          <ItemKind>{path[2]}</ItemKind>
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
