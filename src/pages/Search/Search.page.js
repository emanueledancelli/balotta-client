import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { connect } from "react-redux";
import { getDate } from "../../utils/getDate";
import _ from "lodash";
import moment from "moment";

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

const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 200px;
`;

const Square = styled.div`
  height: 150px;
  width: 150px;
  margin-right: 5px;
  display: inline-block;
`;

class Search extends React.Component {
  componentDidMount() {
    let day = getDate();
    let formatDate = moment(day).format("d");
    console.log("this is the format from moment:", typeof formatDate);
  }
  render() {
    const { isLoading, eventsToday, eventsAllWeek, eventsWeekend } = this.props;

    const todays = eventsToday.map(e => {
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

    const week = eventsAllWeek.map(e => {
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

    const weekEnds = eventsWeekend.map(e => {
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

    return (
      <>
        <Container>
          <Title>Search:</Title>
          <BlinkingCursor>_</BlinkingCursor>
        </Container>
        <Subtitle>All events today</Subtitle>
        <SquareContainer>{todays}</SquareContainer>
        <Fix h="5vh" />
        <Subtitle>All events this weekend</Subtitle>
        <SquareContainer>{weekEnds}</SquareContainer>
        <Fix h="5vh" />
        <Subtitle>All events this week</Subtitle>
        <SquareContainer>{week}</SquareContainer>
        <Fix h="20vh" />
      </>
    );
  }
}

const mapStateToProps = state => {
  let today = getDate();
  return {
    isLoading: state.events.isLoading,
    eventsToday: state.events.data.filter(e => e.acf.start_date === today),
    eventsWeekend: state.events.data.filter(e => {
      let d = moment(e.acf.start_date).format("d");
      let w = ["5", "6", "0"];
      return w.includes(d);
    }),
    eventsAllWeek: state.events.data
  };
};

export default connect(mapStateToProps)(Search);
