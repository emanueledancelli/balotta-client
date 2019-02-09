import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { connect } from "react-redux";
import { getRef } from "../../actions/uiActions";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 32vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Blink = keyframes`
  from { opacity: 1;}
  to { opacity: 0;}
`;

const FadeAndSlide = keyframes`
  from { opacity: 0; transform: translateY(-5px)}
  to {opacity: 1;trasnform: translateY(0) }
`;

const BlinkingCursor = styled.p`
  color: #222222;
  animation: ${Blink} 800ms linear infinite;
  transition: all 800ms linear;
  margin-bottom: -1vh;
  margin-left: 5px;
  font-weight: 700;
  font-size: 2em;
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

const Numbers = styled.span`
  color: rgba(0, 0, 0, 0.1);
  font-weight: 500;
  font-size: 0.9em;
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
`;

const TypeAnimation = styled.h1`
  color: #888;
  margin-bottom: -3vh;
  padding-left: 3%;
  font-size: 2em;
  animation: ${FadeAndSlide} 500ms ease-in;
`;

class Search extends React.Component {
  state = {
    discoverStuff: ["Bologna", "Events", "Places"],
    pick: 0
  };

  componentDidMount() {
    let rng = Math.floor(Math.random() * 3);
    this.setState({
      pick: rng
    });
  }

  render() {
    const {
      today,
      weekEnd,
      week,
      concert,
      clubbing,
      shows,
      culture,
      getRef
    } = this.props;
    const { discoverStuff, pick } = this.state;

    const showConcerts = concert.map(e => {
      let thumbnail = e.acf.image.sizes.thumbnail;
      return (
        <React.Fragment key={e.id}>
          <Square
            style={{
              background: `url(${thumbnail})`,
              backgroundSize: "cover"
            }}
          />
        </React.Fragment>
      );
    });

    const showClubbing = clubbing.map((e, index) => {
      let thumbnail = e.acf.image.sizes.thumbnail;
      let listName = "clubbing";
      return (
        <Link to={`/eventi/${listName}/${e.id}/${index}`} key={e.id}>
          <Square
            style={{
              background: `url(${thumbnail})`,
              backgroundSize: "cover"
            }}
          />
        </Link>
      );
    });

    const showCulture = culture.map(e => {
      let thumbnail = e.acf.image.sizes.thumbnail;
      return (
        <React.Fragment key={e.id}>
          <Square
            style={{
              background: `url(${thumbnail})`,
              backgroundSize: "cover"
            }}
          />
        </React.Fragment>
      );
    });

    const showShows = shows.map(e => {
      let thumbnail = e.acf.image.sizes.thumbnail;
      return (
        <React.Fragment key={e.id}>
          <Square
            style={{
              background: `url(${thumbnail})`,
              backgroundSize: "cover"
            }}
          />
        </React.Fragment>
      );
    });

    const todays = today.map((e, index) => {
      let thumbnail = e.acf.image.sizes.thumbnail;
      let listName = "today";
      return (
        <Link to={`/eventi/${listName}/${e.id}/${index}`} key={e.id}>
          <Square
            onClick={() => getRef(e.id)}
            style={{
              background: `url(${thumbnail})`,
              backgroundSize: "cover"
            }}
          />
        </Link>
      );
    });

    const weekly = week.map((e, index) => {
      let thumbnail = e.acf.image.sizes.thumbnail;
      let listName = "week";
      return (
        <Link to={`/eventi/${listName}/${e.id}/${index}`} key={e.id}>
          <Square
            style={{
              background: `url(${thumbnail})`,
              backgroundSize: "cover"
            }}
          />
        </Link>
      );
    });

    const weekEnds = weekEnd.map((e, index) => {
      let thumbnail = e.acf.image.sizes.thumbnail;
      let listName = "weekend";
      return (
        <Link to={`/eventi/${listName}/${e.id}/${index}`} key={e.id}>
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
        <Container onClick={this.handleHeroClick}>
          <Title>Discover</Title>
          <TypeAnimation>{discoverStuff[pick]}</TypeAnimation>
          <BlinkingCursor>_</BlinkingCursor>
        </Container>
        <Subtitle>
          Today <Numbers>&sdot; {todays.length}</Numbers>
        </Subtitle>
        {today && <SquareContainer>{todays}</SquareContainer>}
        <Fix h="5vh" />
        <Subtitle>
          On the weekend <Numbers>&sdot; {weekEnds.length}</Numbers>
        </Subtitle>
        <SquareContainer>{weekEnds}</SquareContainer>
        <Fix h="5vh" />
        <Subtitle>
          Everything this week <Numbers>&sdot; {weekly.length}</Numbers>
        </Subtitle>
        <SquareContainer>{weekly}</SquareContainer>
        <Fix h="5vh" />
        <Subtitle>
          Clubbing{" "}
          {showClubbing && <Numbers>&sdot; {showClubbing.length}</Numbers>}
        </Subtitle>
        {showClubbing && <SquareContainer>{showClubbing}</SquareContainer>}
        <Fix h="5vh" />
        <Subtitle>
          Concerts <Numbers>&sdot; {showConcerts.length}</Numbers>
        </Subtitle>
        <SquareContainer>{showConcerts}</SquareContainer>
        <Fix h="5vh" />
        <Subtitle>
          Culture <Numbers>&sdot; {showCulture.length}</Numbers>
        </Subtitle>
        <SquareContainer>{showCulture}</SquareContainer>
        <Fix h="5vh" />
        <Subtitle>
          Shows <Numbers>&sdot; {showShows.length}</Numbers>
        </Subtitle>
        <SquareContainer>{showShows}</SquareContainer>
        <Fix h="20vh" />
      </>
    );
  }
}

const mapStateToProps = state => {
  const { isLoading } = state.events;
  const { today, weekEnd, week } = state.events.data;

  return {
    isLoading,
    today,
    weekEnd,
    week,
    concert: week.filter(e => e.acf.tags.includes("Concert")),
    culture: week.filter(e => e.acf.tags.includes("Culture")),
    clubbing: week.filter(e => e.acf.tags.includes("Clubbing")),
    shows: week.filter(e => e.acf.tags.includes("Shows"))
  };
};

const mapDispatchToProps = {
  getRef
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
