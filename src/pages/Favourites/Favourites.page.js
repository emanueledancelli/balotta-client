import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 32vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h1`
  color: #222;
  margin-bottom: -3vh;
  padding-left: 3%;
  font-size: 2em;
`;

const Subtitle = styled.h2`
  color: #888;
  padding-left: 3%;
`;

const SquareContainer = styled.div`
  padding-left: 3%;
  white-space: nowrap;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
`;

const Fix = styled.div`
  height: ${props => props.h};
`;

const Square = styled.div`
  height: 150px;
  width: 150px;
  margin-right: 5px;
  display: inline-block;
  background-color: #eb5757;
`;

class Favourites extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Title>Saved events</Title>
        </Container>
        <Subtitle>Upcoming</Subtitle>
        <SquareContainer>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </SquareContainer>
        <Fix h="5vh" />
        <Subtitle>Past</Subtitle>
        <SquareContainer>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </SquareContainer>
        <Fix h="20vh" />
      </>
    );
  }
}

export default Favourites;
