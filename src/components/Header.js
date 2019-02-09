import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";

const Container = styled("div")`
  background-color: transparent;
  position: absolute;
  height: 7vh;
  min-width: 100vw;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
`;

const Filter = styled("p")`
  color: rgba(255, 255, 255, 0.8);
  width: 50%;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 3%;
  font-weight: 500;
`;

const Index = styled.p`
  padding-top: 2%;
  padding-bottom: 2%;
  padding-right: 3%;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
`;

class Header extends React.Component {
  render() {
    const { location, today } = this.props;
    let place;
    let num;

    if (location.pathname === "/") {
      place = "Best today";
    } else if (location.pathname.startsWith("/eventi/today")) {
      place = "Today";
      num = today.length;
    } else if (location.pathname.startsWith("/eventi/week")) {
      place = "Everything this week";
    } else if (location.pathname.startsWith("/eventi/weekend")) {
      place = "On the weekend";
    } else if (location.pathname.startsWith("/eventi/clubbing")) {
      place = "Clubbing";
    } else if (location.pathname.startsWith("/eventi/concerts")) {
      place = "Concerts";
    } else if (location.pathname.startsWith("/eventi/culture")) {
      place = "Culture";
    } else if (location.pathname.startsWith("/eventi/shows")) {
      place = "Shows";
    } else if (location.pathname.startsWith("/eventi/favourites")) {
      place = "Favourite";
    }

    return (
      <Container loc={place}>
        <Filter>{place}</Filter>
        <Index>{num}</Index>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { today } = state.events.data;
  return {
    today
  };
};

export default connect(mapStateToProps)(Header);
