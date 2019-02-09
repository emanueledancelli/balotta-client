import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import HomeOutlineIcon from "mdi-react/HomeOutlineIcon";
import StarOutlineIcon from "mdi-react/StarOutlineIcon";
import StarIcon from "mdi-react/StarIcon";
import MagnifyIcon from "mdi-react/MagnifyIcon";
import ArrowBackIcon from "mdi-react/ArrowBackIcon";
import { connect } from "react-redux";
import { setUi, setFav } from "../actions/uiActions";

const Container = styled.div`
  height: 8vh;
  width: 100vw;
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-color: ${props => {
    if (props.location.pathname === "/") {
      return "transparent";
    } else if (props.location.pathname.startsWith("/list")) {
      return "trasparent";
    } else if (props.location.pathname.startsWith("/eventi")) {
      return "transparent";
    } else if (props.location.pathname.startsWith("/single")) {
      return "transparent";
    } else {
      return "rgba(255,255,255,0.9)";
    }
  }};
  z-index: 1;
  transition: all 500ms ease-out;
  backdrop-filter: blur(10px);
  border-top: 0.5px solid rgba(255, 255, 255, 0.2);
  z-index: 100;
`;

const WhiteContainer = styled.div`
  height: 8vh;
  width: 100vw;
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-color: white;
  z-index: 1;
  transition: all 500ms ease-out;
  backdrop-filter: blur(10px);
  border-top: 0.5px solid rgba(255, 255, 255, 0.2);
  z-index: 100;
  & svg {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Item = styled.p`
  color: #9a9a9a;
  margin: 0;
`;

class Navigation extends React.Component {
  addToFavorities = id => {
    let fav = JSON.parse(localStorage.getItem("fav")) || [];
    fav.push(id);
    localStorage.setItem("fav", JSON.stringify(fav));
  };

  render() {
    const {
      isSelected,
      location,
      setUi,
      eventId,
      canFavourite,
      setFav
    } = this.props;

    return (
      <Container location={location}>
        {isSelected ? (
          <>
            <WhiteContainer>
              <ArrowBackIcon onClick={() => setUi()} />
              {canFavourite ? (
                <p
                  onClick={() => {
                    this.addToFavorities(eventId);
                    setFav();
                  }}
                  style={{
                    fontWeight: "700",
                    color: "#eb5757"
                  }}
                >
                  SAVE
                </p>
              ) : (
                <p
                  style={{
                    fontWeight: "700",
                    color: "#eb5757"
                  }}
                >
                  SAVED!
                </p>
              )}
            </WhiteContainer>
          </>
        ) : (
          <>
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
          </>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSelected: state.ui.isEventOnFocus,
    eventId: state.ui.eventOnFocusProps.id,
    canFavourite: state.ui.eventOnFocusProps.canFavourite
  };
};

const mapDispatchToProps = {
  setUi,
  setFav
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
