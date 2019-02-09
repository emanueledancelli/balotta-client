import React from "react";
import styled from "@emotion/styled";
import { getFavEvents } from "../../api/index";
import { Link } from "react-router-dom";

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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Fix = styled.div`
  height: ${props => props.h};
`;

const Square = styled.div`
  width: 45vw;
  height: 150px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #eb5757;
`;

class Favourites extends React.Component {
  state = {
    eventsToShow: [],
    isLoading: false
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    let names = JSON.parse(localStorage.getItem("fav"));
    getFavEvents(names).then(res => {
      this.setState({
        eventsToShow: res,
        isLoading: false
      });
      console.log(this.state);
    });
  }
  render() {
    const { eventsToShow, isLoading } = this.state;
    console.log(eventsToShow);
    const favEv = eventsToShow.map((e, index) => {
      let thumbnail = e.data.acf.image.sizes.thumbnail;
      let listName = "favourites";
      return (
        <Link to={`/eventi/${listName}/${e.data.id}/${index}`} key={e.data.id}>
          <Square
            style={{
              background: `url(${thumbnail})`,
              backgroundSize: "cover"
            }}
          />
        </Link>
      );
    });

    return (
      <>
        <Container>
          <Title>Your events</Title>
        </Container>
        <Subtitle>Upcoming</Subtitle>
        <SquareContainer>
          {isLoading ? <p>Loading...</p> : favEv}
        </SquareContainer>
        <Fix h="20vh" />
      </>
    );
  }
}

export default Favourites;
