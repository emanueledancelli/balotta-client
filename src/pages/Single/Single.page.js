import React from "react";
import styled from "@emotion/styled";
import StaticDetails from "../../components/StaticDetails";
import { connect } from "react-redux";
import { history } from "../../index";
import { Swipeable } from "react-swipeable";

const Container = styled.div`
  display: flex;
`;

class Single extends React.Component {
  render() {
    const { singleEvent, match, location } = this.props;
    return (
      <Container>
        {!singleEvent ? (
          <p>Loading....</p>
        ) : (
          <StaticDetails
            id={singleEvent.id}
            title={singleEvent.title.rendered}
            start_date={singleEvent.acf.start_date}
            start_time={singleEvent.acf.start_time}
            end_time={singleEvent.acf.end_time}
            place={singleEvent.acf.place.post_title}
            image={singleEvent.acf.image.url}
            key={singleEvent.id}
            description={singleEvent.acf.description}
            match={match}
            location={location}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { week, isLoading } = state.events.data;

  return {
    isLoading,
    singleEvent: week.filter(
      e => e.id === parseInt(ownProps.match.params.id)
    )[0]
  };
};

export default connect(mapStateToProps)(Single);
