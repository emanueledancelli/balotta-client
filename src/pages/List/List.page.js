import React from "react";
import styled from "@emotion/styled";
import Card from "../Home/components/Card";
import { connect } from "react-redux";

const Container = styled("div")`
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vw);
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

class List extends React.Component {
  state = {
    scrollY: 0,
    scrollX: 0
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollY: window.scrollY,
      scrollX: window.scrollX
    });
    console.log(this.state);
  };

  handleContainer = arg => {
    this.focus = arg + 1;
  };

  render() {
    const { match, today, weekEnd, week } = this.props;
    let eventsToMap;
    let focus = match.params.index;

    if (match.params.listname === "week") {
      eventsToMap = week;
    } else if (match.params.listname === "today") {
      eventsToMap = today;
    } else if (match.params.listname === "weekend") {
      eventsToMap = weekEnd;
    }

    const eventList = eventsToMap.map(e => {
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
        {!eventsToMap ? (
          <p>Loading...</p>
        ) : (
          <Container onClick={this.handleContainer(focus)}>
            {eventList[focus]}
          </Container>
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
    week
  };
};

export default connect(mapStateToProps)(List);
