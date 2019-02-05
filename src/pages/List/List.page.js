import React from "react";
import styled from "@emotion/styled";
import Card from "../Home/components/Card";

const Container = styled("div")`
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vw);
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

class List extends React.Component {
  render() {
    const { events } = this.props;

    const eventList = events.map(e => {
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
    return (
      <>{isLoading ? <p>Loading...</p> : <Container>{eventList}</Container>}</>
    );
  }
}

export default List;
