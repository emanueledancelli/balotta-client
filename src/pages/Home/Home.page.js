import React from "react";
import data from "../../mockData";
import styled from "@emotion/styled";

import Single from "./components/Single";

const Container = styled("div")`
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vw);
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

const EventList = data.map(e => {
  return (
    <Single
      title={e.title}
      start_time={e.start_time}
      end_time={e.end_time}
      place={e.place}
      image={e.image}
      key={e.id}
      description={e.description}
    />
  );
});

const Home = props => {
  return <Container>{EventList}</Container>;
};

export default Home;
