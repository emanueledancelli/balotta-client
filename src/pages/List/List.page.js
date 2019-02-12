import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import Card from "../Home/components/Card";

const Container = styled("div")`
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vw);
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: ${props => (props.open ? "hidden" : "scroll")};
`;

class List extends React.Component {
  componentDidMount() {
    console.log(this.props);
    if (document === null) {
      return;
    } else if (document !== null) {
      let el = document.getElementById(this.props.match.params.id);
      if (el) {
        el.scrollIntoView({ behavior: "auto" });
      }
    }
  }

  componentWillReceiveProps() {
    console.log(this.props);
  }
  render() {
    const {
      today,
      weekEnd,
      week,
      location,
      match,
      isOpen,
      clubbing,
      shows,
      culture,
      concert
    } = this.props;

    let eventsToMap;
    let eventsList;

    if (match.params.listname === "week") {
      eventsToMap = week;
    } else if (match.params.listname === "today") {
      eventsToMap = today;
    } else if (match.params.listname === "weekend") {
      eventsToMap = weekEnd;
    } else if (match.params.listname === "clubbing") {
      eventsToMap = clubbing;
    } else if (match.params.listname === "shows") {
      eventsToMap = shows;
    } else if (match.params.listname === "culture") {
      eventsToMap = culture;
    } else if (match.params.listname === "concerts") {
      eventsToMap = concert;
    }

    eventsList = eventsToMap.map(e => {
      return (
        <React.Fragment key={e.id}>
          <Card
            id={e.id}
            title={e.title.rendered}
            ref={e.id}
            start_date={e.acf.start_date}
            start_time={e.acf.start_time}
            end_time={e.acf.end_time}
            place={e.acf.place.post_title}
            image={e.acf.image.url}
            description={e.acf.description}
            location={location}
            match={match}
          />
        </React.Fragment>
      );
    });

    return (
      <>
        {!eventsToMap ? (
          <p>Loading...</p>
        ) : (
          <Container open={isOpen}>{eventsList}</Container>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  const { today, weekEnd, week, isLoading } = state.events.data;
  return {
    isLoading,
    today,
    weekEnd,
    week,
    concert: week.filter(e => e.acf.tags.includes("Concert")),
    culture: week.filter(e => e.acf.tags.includes("Culture")),
    clubbing: week.filter(e => e.acf.tags.includes("Clubbing")),
    shows: week.filter(e => e.acf.tags.includes("Shows")),
    isOpen: state.ui.isEventOnFocus
  };
};

export default connect(mapStateToProps)(List);
