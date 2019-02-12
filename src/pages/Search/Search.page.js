import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import { mq } from "../../style/mediaQueries";
import SquaredList from "../../components/SquaredList";

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
  color: #222;
  font-size: 1.2em;
  padding-left: 3%;
`;

const Numbers = styled.span`
  color: rgba(0, 0, 0, 0.1);
  font-weight: 500;
  font-size: 0.9em;
`;

const Fix = styled.div`
  height: ${props => props.h};
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

  createTitle = title => {
    return { __html: title };
  };

  render() {
    const {
      today,
      weekEnd,
      week,
      concert,
      clubbing,
      shows,
      culture
    } = this.props;
    const { discoverStuff, pick } = this.state;

    const shuffledDay = _.shuffle(today);
    const shuffledWe = _.shuffle(weekEnd);

    return (
      <>
        <Container onClick={this.handleHeroClick}>
          <Title>Discover</Title>
          <TypeAnimation>{discoverStuff[pick]}</TypeAnimation>
          <BlinkingCursor>_</BlinkingCursor>
        </Container>

        <Subtitle>
          Today <Numbers>&sdot; {today.length}</Numbers>
        </Subtitle>
        {today && <SquaredList hasTags list={shuffledDay} name="today" />}
        <Fix h="5vh" />
        <Subtitle>
          On the weekend <Numbers>&sdot; {weekEnd.length}</Numbers>
        </Subtitle>
        {weekEnd && <SquaredList hasTags list={shuffledWe} name="weekend" />}
        <Fix h="5vh" />
        <Subtitle>
          Clubbing {clubbing && <Numbers>&sdot; {clubbing.length}</Numbers>}
        </Subtitle>
        {clubbing && <SquaredList list={clubbing} name="clubbing" />}
        <Fix h="5vh" />
        <Subtitle>
          Concerts <Numbers>&sdot; {concert.length}</Numbers>
        </Subtitle>
        {concert && <SquaredList list={concert} name="concerts" />}
        <Fix h="5vh" />
        <Subtitle>
          Culture <Numbers>&sdot; {culture.length}</Numbers>
        </Subtitle>
        {culture && <SquaredList list={culture} name="culture" />}
        <Fix h="5vh" />
        <Subtitle>
          Shows <Numbers>&sdot; {shows.length}</Numbers>
        </Subtitle>
        {shows && <SquaredList list={shows} name="shows" />}
        <Fix h="5vh" />
        <Subtitle>
          Everything this week <Numbers>&sdot; {week.length}</Numbers>
        </Subtitle>
        {week && <SquaredList list={week} name="week" hasTags />}
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
    concert: _.shuffle(week.filter(e => e.acf.tags.includes("Concert"))),
    culture: _.shuffle(week.filter(e => e.acf.tags.includes("Culture"))),
    clubbing: _.shuffle(week.filter(e => e.acf.tags.includes("Clubbing"))),
    shows: _.shuffle(week.filter(e => e.acf.tags.includes("Shows")))
  };
};

export default connect(mapStateToProps)(Search);
