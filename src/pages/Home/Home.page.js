import React from "react";
import { getAllEvents } from "../../api";
import orderBy from "lodash/orderBy";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import Card from "./components/Card";
import { connect } from "react-redux";

const Container = styled("div")`
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vw);
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

const LoaderContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const flipY = keyframes`
    0% { transform: rotateY(0deg); }
    25% { transform: rotateY(360deg); }
`;

const flipX = keyframes`
    from { transform: rotateX(0deg); }
    to { transform: rotateX(360deg); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1)}
  to { opacity: 0; transform: scale(0.5)}
`;

const LoaderIcon = styled("p")`
  font-weight: 900;
  letter-spacing: -1px;
  color: #222222;
  font-size: 2em;
  animation: ${flipY} 800ms ease-out, ${flipX} 800ms ease-out,
    ${fadeOut} 800ms ease-out;
  animation-delay: 0s, 800ms, 1600ms;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderIcon>Balotta</LoaderIcon>
    </LoaderContainer>
  );
};

class Home extends React.Component {
  render() {
    const { isLoading, shows } = this.props;
    const eventList = shows.map(e => {
      return (
        <Card
          id={e.id}
          title={e.title.rendered}
          start_date={e.acf.start_date}
          start_time={e.acf.start_time}
          end_time={e.acf.end_time}
          place={e.acf.place.post_title}
          image={e.acf.image.url}
          key={e.id}
          description={e.acf.description}
        />
      );
    });
    return <>{isLoading ? <Loader /> : <Container>{eventList}</Container>}</>;
  }
}

const mapStateToProps = state => {
  const { isLoading } = state.events;
  const { today } = state.events.data;

  return {
    isLoading,
    shows: today.filter(e =>
      e.acf.tags.includes("Concert" || "Clubbing" || "Culture")
    )
  };
};

export default connect(mapStateToProps)(Home);
