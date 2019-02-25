import React from "react";
import { connect } from "react-redux";
import SingleScrolling from "../SingleScrolling/SingleScrolling";
import SwipeableViews from "react-swipeable-views";

class List extends React.Component {
  state = {
    windowHeight: Number,
    index: 0
  };

  componentDidMount() {
    let h = window.screen.height;
    this.setWindowHeight(h);
  }

  setWindowHeight = h => this.setState({ windowHeight: h });

  handleChangeIndex = i => this.setState({ index: i });

  render() {
    const { windowHeight, index } = this.state;
    const {
      today,
      weekEnd,
      week,
      match,
      clubbing,
      shows,
      culture,
      concert
    } = this.props;

    let eventsToMap;
    let listContent;

    switch (match.params.listname) {
      case "week":
        eventsToMap = week;
        break;
      case "today":
        eventsToMap = today;
        break;
      case "weekend":
        eventsToMap = weekEnd;
        break;
      case "culture":
        eventsToMap = culture;
        break;
      case "concert":
        eventsToMap = concert;
        break;
      case "clubbing":
        eventsToMap = clubbing;
        break;
      case "shows":
        eventsToMap = shows;
        break;
      default:
        break;
    }

    listContent = eventsToMap.map(e => {
      return (
        <div style={{ minHeight: windowHeight, color: "#FFFFFF" }} key={e.key}>
          <SingleScrolling
            title={e.title.rendered}
            startDate={e.acf.start_date}
            startTime={e.acf.start_time}
            endTime={e.acf.end_time}
            place={e.acf.place.post_title}
            imageUrl={e.acf.image.url}
            description={e.acf.description}
          />
        </div>
      );
    });

    return (
      <>
        {!eventsToMap ? (
          <p>Loading...</p>
        ) : (
          <SwipeableViews>{listContent}</SwipeableViews>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  const {
    today,
    weekEnd,
    week,
    culture,
    concert,
    shows,
    clubbing,
    isLoading
  } = state.events.data;

  return {
    isLoading,
    today,
    weekEnd,
    week,
    concert,
    culture,
    clubbing,
    shows
  };
};

export default connect(mapStateToProps)(List);
