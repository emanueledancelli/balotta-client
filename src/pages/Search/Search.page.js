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
  font-size: 1.8em;
  padding-left: 3%;
  margin: 0;
`;

const Numbers = styled.span`
  color: rgba(0, 0, 0, 0.1);
  font-weight: 500;
  font-size: 2em;
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

const SectionContainer = styled.div`
  width: 100vw;
  height: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SectionLeft = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Square = styled.div`
  height: ${props => props.dimension}px;
  width: ${props => props.dimension}px;
  background: url(${props => props.image});
  background-size: cover;
  position: absolute;
  right: ${props => props.right}vh;
  margin-top: ${props => props.top}vh;
  box-shadow: -10px 0px 25px -8px #000;
  opacity: ${props => props.op};
  overflow: auto;
`;

const SectionRight = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
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

  randomGenR = () => Math.floor(Math.random() * 15);

  randomGenT = () => {
    let n = Math.floor(Math.random() * 5);
    let s = Math.random() < 0.5 ? -1 : 1;
    return n * s;
  };

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
    let three = today.slice(2);
    console.log(three[0]);

    const squared = _.shuffle(three).map(e => {
      return (
        <Square
          dimension="150"
          right={this.randomGenR}
          top={this.randomGenT}
          image={e.acf.image.sizes.thumbnail}
          color="black"
          op="1"
        />
      );
    });

    return (
      <>
        <Container onClick={this.handleHeroClick}>
          <Title>Discover</Title>
          <TypeAnimation>{discoverStuff[pick]}</TypeAnimation>
          <BlinkingCursor>_</BlinkingCursor>
        </Container>
        <Fix h="5vh" />

        <SectionContainer>
          <SectionLeft>
            <Subtitle>Today</Subtitle>
          </SectionLeft>
          <SectionRight>{squared}</SectionRight>
        </SectionContainer>
        <Fix h="20vh" />
        <SectionContainer>
          <SectionLeft>
            <Subtitle>Weekend</Subtitle>
          </SectionLeft>
          <SectionRight>
            <Square dimension="120" right="5vh" top="3vh" color="red" />
            <Square dimension="120" right="7vh" top="0vh" color="blue" />
            <Square dimension="120" right="3vh" top="-3vh" color="black" />
          </SectionRight>
        </SectionContainer>
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

export default connect(mapStateToProps)(Search);
