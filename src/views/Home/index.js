import React from "react";
import styled from "@emotion/styled";
import Card from "./components/Card";
import { connect } from "react-redux";
import { Loader } from "components/Loader";

const Container = styled.div`
  display: flex;
  overflow-x: ${props => (props.open ? "hidden" : "scroll")};
`;

class Home extends React.Component {
  render() {
    const { isLoading, shows, isOpen } = this.props;
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
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <Container open={isOpen}>{eventList}</Container>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  const { isLoading } = state.events;
  const { today } = state.events.data;
  let tod = today.filter(e =>
    e.acf.tags.includes("Concert" || "Clubbing" || "Culture")
  );
  console.log(tod);

  return {
    isLoading,
    shows: today.filter(e =>
      e.acf.tags.includes("Concert" || "Clubbing" || "Culture")
    ),
    isOpen: state.ui.isEventOnFocus
  };
};

export default connect(mapStateToProps)(Home);
